MA is not doing Mermaid/D3 for those flowcharts. She’s doing “design in Figma → export SVG → inline SVG in Astro”.
Concrete proof from her repo:

- The Gastown post (src/content/notes/gastown.mdx) imports diagram components like:
    - import HierarchyDiagram from "../../components/unique/gastown/HierarchyDiagram.astro";
    - then uses <HierarchyDiagram /> inline in the MDX.
- src/components/unique/gastown/HierarchyDiagram.astro does:
    - import DesktopSVG from './Hierarchy-Desktop.svg?raw';
    - import MobileSVG from './Hierarchy-Mobile.svg?raw';
    - renders via <div set:html={DesktopSVG} /> / <div set:html={MobileSVG} />
    - switches desktop/mobile with CSS media queries.
- Dark mode is handled with CSS overrides that target SVG attributes, e.g. :global(rect[fill="white"]) { fill: #2d2b28; } etc (see src/components/unique/gastown/HierarchyDiagram.astro and src/components/unique/gastown/WorkQueues.astro).
- Some diagrams are literally pasted inline as raw <svg ...> inside the component (e.g. src/components/unique/gastown/Resuming.astro), rather than imported from a .svg file.
  So her pattern is: MDX uses a dedicated Astro component per diagram; the component inlines an exported SVG string; CSS makes it responsive + theme-adjusted.
