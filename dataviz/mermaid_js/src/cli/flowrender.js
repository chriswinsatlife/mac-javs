#!/usr/bin/env node
import { readFile, writeFile, mkdir } from 'fs/promises';
import { dirname, resolve, extname } from 'path';
import { fileURLToPath } from 'url';
import { chromium } from 'playwright';

function parseArgs(argv) {
  const args = { format: undefined };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--in' || a === '-i') args.in = argv[++i];
    else if (a === '--out' || a === '-o') args.out = argv[++i];
    else if (a === '--format' || a === '-f') args.format = argv[++i];
    else if (a === '--width') args.width = Number(argv[++i]);
    else if (a === '--height') args.height = Number(argv[++i]);
    else if (a === '--debug') args.debug = true;
    else if (a === '--ast-only') args.astOnly = true;
    else if (a === '--help' || a === '-h') args.help = true;
  }
  return args;
}

function usage() {
  return `Usage: bun run flowrender --in <file.md|.mmd> --out <file.{svg,png,jpg,pdf}> [--width px] [--height px] [--format svg|png|jpg|pdf]\n`;
}

const PAGE_HTML = String.raw`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap" rel="stylesheet" />
<style>
  :root{ --font-family:'Architects Daughter', cursive; }
  body{ margin:0; background:#fff; }
  #chart{ padding:0; }
  svg{ width:100%; height:auto; display:block; }
</style>
</head>
<body>
<div id="chart"></div>
<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/roughjs@4.6.6/bundled/rough.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@dagrejs/dagre@1.1.5/dist/dagre.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/mermaid@11.0.0/dist/mermaid.min.js"></script>
<script type="module">
  import { parse as parseMermaidAst } from 'https://cdn.jsdelivr.net/npm/@mermaid-js/parser@0.6.2/+esm';
  import { load as yamlLoad } from 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/+esm';
  
  function stripHtml(s){ return String(s==null?'':s).replace(/<br\\s*\\/?>/gi,' ').replace(/<[^>]*>/g,'').trim(); }
  function mapShape(t){ const x=(t||'').toLowerCase(); if(x==='diamond'||x==='rhombus')return'diamond'; if(['circle','ellipse','round','stadium'].includes(x))return'ellipse'; return'rect'; }
  function detectDir(code){ const m=code.match(/\\bflowchart\\s+(TB|BT|LR|RL|TD)\\b/i); return m? m[1].toUpperCase() : 'LR'; }
  function extractFromAst(ast){ const res={nodes:[],links:[]}; const nodeMap=new Map(); const addNode=(id,label,type)=>{ if(!id)return; if(!nodeMap.has(id)) nodeMap.set(id,{id,label:stripHtml(label||id),type:mapShape(type)}); }; const addEdge=(a,b,label)=>{ if(!a||!b)return; res.links.push({source:a,target:b,label:stripHtml(label)||undefined}); addNode(a); addNode(b); }; const walk=o=>{ if(!o||typeof o!=='object')return; if(o.type==='node'&&(o.id||o.identifier)) addNode(o.id||o.identifier,o.text||o.label||o.value,o.shape||o.nodeType||o.typeName); if(o.type==='edge'||(o.start&&o.end)||(o.from&&o.to)) addEdge(o.start||o.from,o.end||o.to,o.text||o.label); for(const k of Object.keys(o)){ const v=o[k]; if(Array.isArray(v)) v.forEach(walk); else if(v&&typeof v==='object') walk(v); } }; walk(ast); res.nodes=Array.from(nodeMap.values()); return res; }
  function getNodeEdgeIntersection(node, fromX, fromY){ const dx=fromX-node.x, dy=fromY-node.y; const absDx=Math.abs(dx), absDy=Math.abs(dy); const w=(node.width)/2, h=(node.height)/2; if(node.type==='ellipse'){ const a=w,b=h, angle=Math.atan2(dy,dx); const cos=Math.cos(angle), sin=Math.sin(angle); const t=Math.sqrt(a*a*sin*sin + b*b*cos*cos); return { x: node.x + (a*b*cos)/t, y: node.y + (a*b*sin)/t }; } else if(node.type==='diamond'){ const t=1/(absDx/w + absDy/h); return { x: node.x + dx*t, y: node.y + dy*t }; } else { if(absDx===0&&absDy===0) return {x:node.x,y:node.y}; const tx=absDx>0? w/absDx : Infinity; const ty=absDy>0? h/absDy : Infinity; const t=Math.min(tx,ty); return { x: node.x + dx*t, y: node.y + dy*t }; } }
  function positionAlongPolyline(points, t){ const total=points.reduce((acc,p,i)=>i===0?0:acc+Math.hypot(p.x-points[i-1].x,p.y-points[i-1].y),0); const target=total*t; let run=0; for(let i=1;i<points.length;i++){ const a=points[i-1], b=points[i]; const dx=b.x-a.x, dy=b.y-a.y; const seg=Math.hypot(dx,dy); if(run+seg>=target){ const tt=(target-run)/(seg||1); const x=a.x+tt*dx, y=a.y+tt*dy; const len=seg||1; return { x, y, nx: -dy/len, ny: dx/len }; } run+=seg; } const last=points[points.length-1], prev=points[points.length-2]||last; const dx=last.x-prev.x, dy=last.y-prev.y; const len=Math.hypot(dx,dy)||1; return { x:last.x, y:last.y, nx:-dy/len, ny:dx/len }; }

  async function renderFromText(mdText, options={}){
    const chart = document.getElementById('chart'); chart.innerHTML='';
    const defaults = { fontFamily: 'Architects Daughter, cursive', fontWeight: '700', labelOffset: 16, roughness: 1.6, curveTightness: 0.25, nodePadX: 32, nodePadY: 22, nodesep: 120, ranksep: 120, startGap: 14, endGap: 20, diamondMinW:150, diamondMinH:90, fontMinPx:10, fontMaxPx:18, nodeStroke:'#9370db', nodeFill:'#e8e8ff', nodeStrokeWidth:2, edgeStroke:'#666', edgeStrokeWidth:1.2 };
    const settings = Object.assign({}, defaults, options||{});
    let fm = {}; let body = mdText; if (mdText.startsWith('---')) { const idx = mdText.indexOf('\n---', 3); if (idx !== -1) { const yaml = mdText.slice(3, idx).replace(/^\n/, ''); fm = yaml ? yamlLoad(yaml) || {} : {}; body = mdText.slice(idx + 4); } }
    const mermaidBlockRE = new RegExp("\x60\x60\x60\\s*mermaid\\s*\\n([\\s\\S]*?)\\n\x60\x60\x60","i"); const m = body.match(mermaidBlockRE); const mermaidCode = m ? m[1].trim() : body.trim();
    for (const [k,v] of Object.entries(fm)){ if (k==='stroke') settings.nodeStroke=v; else if (k==='fill') settings.nodeFill=v; else if (k in settings) settings[k]=v; }

    let nodes=[], links=[]; let rankdir = fm.rankdir || detectDir(mermaidCode);
    let usedAst=false; try { const ast = parseMermaidAst('flowchart', mermaidCode); const g = extractFromAst(ast); if (g.nodes.length) { nodes=g.nodes; links=g.links; usedAst=true; } } catch {}
    if (!usedAst && window.mermaid?.mermaidAPI){ try { window.mermaid.mermaidAPI.initialize({ startOnLoad:false }); const diagram = await window.mermaid.mermaidAPI.getDiagramFromText(mermaidCode); const db = diagram.db; if (typeof db.getDirection==='function'){ const d=db.getDirection(); if (d) rankdir=d.toUpperCase(); } const verts = typeof db.getVertices==='function'? db.getVertices() : null; if (verts){ const iter = verts instanceof Map ? verts.entries() : Object.entries(verts); for (const [id,v] of iter){ nodes.push({ id, label: stripHtml(v.text||id), type: mapShape(v.type) }); } } const edges = typeof db.getEdges==='function'? db.getEdges() : []; for (const e of edges){ links.push({ source:e.start, target:e.end, label: stripHtml(e.text)||undefined }); } } catch(err){ const pre=document.createElement('pre'); pre.textContent='Parse error: '+(err?.message||err); chart.appendChild(pre); throw err; } }

    const g = new dagre.graphlib.Graph(); g.setGraph({ rankdir, nodesep: settings.nodesep, ranksep: settings.ranksep, marginx:50, marginy:50, ranker:'network-simplex' }); g.setDefaultEdgeLabel(function(){return {};});
    const measureSvg = d3.select('body').append('svg').attr('visibility','hidden').attr('width',0).attr('height',0); const measurer = measureSvg.append('text').attr('font-family', settings.fontFamily).attr('font-weight', settings.fontWeight);
    function textSize(text, px){ measurer.attr('font-size', px+'px').text(text); const box = measurer.node().getBBox(); return { w: Math.ceil(box.width), h: Math.ceil(box.height) }; }
    function pickFontSize(label, type){ const maxW = type==='diamond'? 260:220; let size = settings.fontMaxPx; for (; size>=settings.fontMinPx; size--){ const t=textSize(label,size); if (t.w <= maxW-32) return { size: size, t: t, maxW: maxW }; } const t=textSize(label, settings.fontMinPx); return { size: settings.fontMinPx, t: t, maxW: maxW };
    }

    nodes.forEach(function(node){ const fs = pickFontSize(node.label||node.id, node.type); const fontSize = fs.size; const t = fs.t; node.fontSize=fontSize; const padX=settings.nodePadX, padY=settings.nodePadY; let baseMinW = node.type==='diamond'? settings.diamondMinW : 120; let baseMinH = node.type==='diamond'? settings.diamondMinH : 56; let width=Math.max(t.w+padX, baseMinW); let height=Math.max(t.h+padY, baseMinH); if (node.type==='diamond'){ width=Math.max(width, Math.ceil(t.w*1.6)+padX); if (width < height+50) width = height+50; } node.width=width; node.height=height; g.setNode(node.id, { label: node.label, width: width, height: height, type: node.type }); });
    measureSvg.remove();

    links.forEach(function(link){ g.setEdge(link.source, link.target, { label: link.label, weight: link.label?5:1, minlen:1 }); });
    dagre.layout(g);

    nodes.forEach(function(n){ const gn=g.node(n.id); n.x=gn.x; n.y=gn.y; n.width=gn.width; n.height=gn.height; });
    const graphInfo = g.graph(); const width = graphInfo.width + 100; const height = graphInfo.height + 100;
    const svg = d3.select('#chart').append('svg').attr('id','chartSvg').attr('viewBox','0 0 '+width+' '+height).attr('preserveAspectRatio','xMidYMid meet');
    const edgesG = svg.append('g').attr('class','edges'); const nodesG = svg.append('g').attr('class','nodes');
    svg.append('defs').append('marker').attr('id','arrowhead').attr('markerWidth',10).attr('markerHeight',10).attr('refX',10).attr('refY',5).attr('orient','auto').append('path').attr('d','M 0 0 L 10 5 L 0 10 Z').attr('fill', settings.edgeStroke);
    const rc = rough.svg(svg.node());
    links.forEach(function(link){ const e=g.edge(link.source, link.target); let pts=(e&&e.points)? e.points.map(p=>({x:p.x,y:p.y})) : []; if (pts.length<2) return; const src=g.node(link.source), tgt=g.node(link.target); if (src&&pts[1]) pts[0]=getNodeEdgeIntersection({x:src.x,y:src.y,width:src.width,height:src.height,type:src.type}, pts[1].x, pts[1].y); if (tgt&&pts[pts.length-2]) pts[pts.length-1]=getNodeEdgeIntersection({x:tgt.x,y:tgt.y,width:tgt.width,height:tgt.height,type:tgt.type}, pts[pts.length-2].x, pts[pts.length-2].y); if (pts[1]){ const vx0=pts[1].x-pts[0].x, vy0=pts[1].y-pts[0].y; const len0=Math.hypot(vx0,vy0)||1; pts[0]={ x: pts[0].x + (vx0/len0)*settings.startGap, y: pts[0].y + (vy0/len0)*settings.startGap }; } if (pts.length>=2){ const n=pts.length; const vx1=pts[n-2].x-pts[n-1].x, vy1=pts[n-2].y-pts[n-1].y; const len1=Math.hypot(vx1,vy1)||1; pts[n-1]={ x: pts[n-1].x + (vx1/len1)*settings.endGap, y: pts[n-1].y + (vy1/len1)*settings.endGap }; }
      const curvePoints = pts.map(p=>[p.x,p.y]); const roughCurve = rc.curve(curvePoints, { stroke: settings.edgeStroke, strokeWidth: settings.edgeStrokeWidth, roughness: settings.roughness, bowing: 0, curveTightness: settings.curveTightness }); edgesG.node().appendChild(roughCurve);
      const dStr = pts.map(function(p,i){ return (i===0?'M ':'L ') + p.x + ' ' + p.y; }).join(' '); edgesG.append('path').attr('d',dStr).attr('fill','none').attr('stroke','rgba(0,0,0,0)').attr('marker-end','url(#arrowhead)'); if (link.label&&pts.length>=2){ const mid=(function(points){ const total=points.reduce((a,p,i)=>i===0?0:a+Math.hypot(p.x-points[i-1].x,p.y-points[i-1].y),0); const target=total*0.5; let run=0; for(let i=1;i<points.length;i++){ const a=points[i-1], b=points[i]; const dx=b.x-a.x, dy=b.y-a.y; const seg=Math.hypot(dx,dy); if(run+seg>=target){ const tt=(target-run)/(seg||1); const x=a.x+tt*dx, y=a.y+tt*dy; const len=seg||1; return { x:x, y:y, nx:-dy/len, ny:dx/len }; } run+=seg; } const last=points[points.length-1], prev=points[points.length-2]||last; const dx=last.x-prev.x, dy=last.y-prev.y; const len=Math.hypot(dx,dy)||1; return { x:last.x, y:last.y, nx:-dy/len, ny:dx/len }; })(pts); edgesG.append('text').attr('x', mid.x + mid.nx*settings.labelOffset).attr('y', mid.y + mid.ny*settings.labelOffset).attr('text-anchor','middle').attr('font-family', settings.fontFamily).attr('font-size','12px').attr('fill','#333').text(link.label); }
    });
    const groups = nodesG.selectAll('.node').data(nodes).enter().append('g').attr('class','node').attr('transform', function(d){ return 'translate('+d.x+', '+d.y+')'; });
    groups.each(function(d){ const w=d.width/2, h=d.height/2; let shape; if(d.type==='ellipse') shape=rc.ellipse(0,0,w*2,h*2,{ stroke: settings.nodeStroke, strokeWidth: settings.nodeStrokeWidth, fill: settings.nodeFill, fillStyle:'hachure', roughness: settings.roughness, fillWeight:1.8, hachureAngle:45 }); else if(d.type==='diamond') shape=rc.polygon([[0,-h],[w,0],[0,h],[-w,0]],{ stroke: settings.nodeStroke, strokeWidth: settings.nodeStrokeWidth, fill: settings.nodeFill, fillStyle:'hachure', roughness: settings.roughness, fillWeight:1.5 }); else shape=rc.rectangle(-w,-h,w*2,h*2,{ stroke: settings.nodeStroke, strokeWidth: settings.nodeStrokeWidth, fill: settings.nodeFill, fillStyle:'hachure', roughness: settings.roughness, fillWeight:1.5, hachureAngle:60 }); this.appendChild(shape); });
    groups.append('text').text(function(d){ return d.label; }).attr('x',0).attr('y',0).attr('text-anchor','middle').attr('dominant-baseline','middle').attr('font-family', settings.fontFamily).attr('font-size', function(d){ return (d.fontSize||12)+'px'; }).attr('font-weight','700').attr('fill','#333').attr('pointer-events','none');
    return { ok:true };
  }
  window.renderFromText = renderFromText;
</script>
</body>
</html>`;

async function main() {
  const args = parseArgs(process.argv);
  if (args.help || !args.in || !args.out) {
    process.stdout.write(usage());
    process.exit(args.help ? 0 : 2);
  }
  const inputPath = resolve(process.cwd(), args.in);
  const outPath = resolve(process.cwd(), args.out);
  const md = await readFile(inputPath, 'utf8');
  const format = args.format || extname(outPath).slice(1).toLowerCase();

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(PAGE_HTML, { waitUntil: 'load' });
  await page.waitForFunction(() => typeof window.renderFromText === 'function');
  await page.evaluate(async (text) => { await window.renderFromText(text); }, md);

  // Get SVG bbox (from viewBox)
  const vb = await page.evaluate(() => {
    const svg = document.getElementById('chartSvg');
    if (!svg) return null;
    const vb = svg.viewBox.baseVal; return { w: vb.width, h: vb.height };
  });
  if (!vb) throw new Error('No SVG rendered');

  await mkdir(dirname(outPath), { recursive: true });

  if (format === 'svg') {
    const svgString = await page.evaluate(() => new XMLSerializer().serializeToString(document.getElementById('chartSvg')));
    await writeFile(outPath, svgString, 'utf8');
  } else if (format === 'png' || format === 'jpg' || format === 'jpeg') {
    await page.setViewportSize({ width: Math.ceil(vb.w), height: Math.ceil(vb.h) });
    const locator = page.locator('#chartSvg');
    await locator.screenshot({ path: outPath, type: format === 'png' ? 'png' : 'jpeg' });
  } else if (format === 'pdf') {
    // Convert px to inches for PDF (96 dpi approx)
    const inchW = vb.w / 96, inchH = vb.h / 96;
    await page.pdf({ path: outPath, width: `${inchW}in`, height: `${inchH}in`, printBackground: true, pageRanges: '1' });
  } else {
    throw new Error(`Unsupported format: ${format}`);
  }

  await browser.close();
  if (args.debug) console.log(`Wrote ${outPath}`);
}

main().catch((err) => { console.error(err); process.exit(70); });
