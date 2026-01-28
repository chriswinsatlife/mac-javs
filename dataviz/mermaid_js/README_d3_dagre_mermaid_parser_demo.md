# D3 + Dagre + Rough.js Flowchart driven by Mermaid (AST-first)

This demo renders a hand-drawn style flowchart using:
- Mermaid for parsing flowchart syntax (AST-first, with DB fallback)
- Dagre for automatic layout
- D3 for SVG assembly
- Rough.js for sketchy shapes and bezier-ish edges

Open the demo in a browser: [d3_dagre_mermaid_parser_demo.html](file:///Users/chris/GitHub/ai_diagrams_charts_and_data_viz/mermaid_js/d3_dagre_mermaid_parser_demo.html)

## How it works

1. Input Mermaid code is embedded in a hidden `<pre id="src">` block in the HTML.
2. We try to parse with the official parser package `@mermaid-js/parser` (ESM over CDN). If successful, we extract nodes and edges from the AST.
3. If AST parsing fails or is unavailable, we fall back to `mermaid.mermaidAPI.getDiagramFromText()` and read `diagram.db.getVertices()` / `getEdges()` (flowchart DB).
4. Nodes are measured to determine sizes, then passed to Dagre.
5. Dagre computes positions; we draw nodes and edges with Rough.js and place labels with D3.

Key file: [d3_dagre_mermaid_parser_demo.html](file:///Users/chris/GitHub/ai_diagrams_charts_and_data_viz/mermaid_js/d3_dagre_mermaid_parser_demo.html)

## Dependencies (via CDN)
- D3 v7
- Rough.js (bundled)
- Dagre 1.1.x
- Mermaid 11 UMD (for DB fallback)
- `@mermaid-js/parser@0.6.x` (ESM) for AST

These are imported directly in the HTML; no build step required.

## Customizing

Below references point to the code in [d3_dagre_mermaid_parser_demo.html](file:///Users/chris/GitHub/ai_diagrams_charts_and_data_viz/mermaid_js/d3_dagre_mermaid_parser_demo.html).

### Mermaid source
- Edit the Mermaid graph inside the `<pre id="src">` block. Direction (`LR`, `TB`, etc.) is detected and forwarded to Dagre automatically.

### Parser mode
- AST-first: `import { parse as parseMermaidAst } from '@mermaid-js/parser'` then `parseMermaidAst('flowchart', code)`.
- Fallback: `mermaid.mermaidAPI.getDiagramFromText(code)` and read from `diagram.db`.
- To force AST only, remove the DB fallback section in the script.

### Layout (Dagre)
- Graph options are set on creation:
  - `rankdir` (derived from Mermaid: `LR`, `TB`, `BT`, `RL`)
  - `nodesep`, `ranksep` (increase for more spacing)
  - `ranker` (e.g., `network-simplex`, `tight-tree`)

### Node sizing and fonts
- Text measure uses a hidden SVG text element.
- Shrink-to-fit: `pickFontSize(label, type)` reduces font size from 18px to 10px so label width fits a target cap (≈220px rect/ellipse, 260px diamond).
- Box size:
  - Padding: `padX`, `padY` (defaults ~32/22)
  - Minimums differ by shape (rect/ellipse vs diamond)
  - Diamonds add extra width for diagonals
- Change the caps/mins/padding to prefer bigger or smaller nodes.

### Shapes (Rough.js)
- Rectangles: `rc.rectangle(...)`
- Diamonds: `rc.polygon([...])`
- Ellipses: `rc.ellipse(...)`
- Style knobs (per shape):
  - `stroke`, `strokeWidth`, `fill`, `fillStyle`, `roughness`, `fillWeight`, `hachureAngle`

### Edges
- Routed by Dagre; drawn with `rc.curve(points)` for a sketchy bezier effect.
- Extra gap from node borders:
  - `startGap` and `endGap` push the first and last points away from boxes so lines never touch borders.
- Control-point nudging: a small outward shift to reduce bulging into nodes.
- Arrowheads: SVG marker `#arrowhead` on an invisible polyline path used for precise orientation.
- Label placement:
  - `positionAlongPolyline(points, 0.5)` computes the midpoint; label is offset perpendicular by ~16px.
  - Change the `0.5` to bias toward source or target.

### Colors and theme
- Node stroke/fill set in the Rough.js shape options (currently purple stroke with light fill).
- Edge color set in `rc.curve` options (`stroke: '#666'`).
- Fonts use Google font "Architects Daughter".

## Security / Sanitization
- Labels are sanitized via a simple `stripHtml()` before rendering to avoid injecting HTML into text nodes. If you need rich labels, adapt this to allow a safe subset.

## Extending
- Interactivity: Add `mouseover`/`click` handlers on node groups or edges.
- Tooltips: Attach `title` or a custom tooltip layer.
- Export: Serialize the `<svg>` and download as an image/SVG.
- Multiple diagrams: Replace the `<pre>` block with a textarea or external file loader.

## Known limitations
- The AST walker is intentionally tolerant to work across parser versions; if the AST schema changes, mapping may need minor adjustments.
- Very complex, long-span edges can still cross nodes when the layout is extremely tight; increase Dagre separations when needed.
- Edge labels do not avoid collisions with each other.

## Related docs
- Mermaid parser notes: [mermaid_parser.md](file:///Users/chris/GitHub/ai_diagrams_charts_and_data_viz/mermaid_js/mermaid_js_docs/mermaid_parser.md)

## Quick tweaks checklist
- More spacing: increase `nodesep` and `ranksep`.
- Less wobble: reduce `roughness` and `curveTightness`.
- Larger/smaller boxes: adjust padding/mins and font-size cap logic.
- Labels farther from lines: increase label offset in `positionAlongPolyline` usage.
- Keep arrows clear of nodes: increase `startGap`/`endGap`.
