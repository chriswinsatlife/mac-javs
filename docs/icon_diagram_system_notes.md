Implemented

- `components/playbooks/flow_diagram_client.astro`
    - New props: `iconSet`, `iconBasePath`, `iconMode` (defaults: `athena`, `/diagrams/icon_sets`, `inline`)
    - Passed to the runtime via wrapper dataset attributes.
- `public/diagrams/gifting_playbook_flow/flow_runtime.js`
    - Replaced hardcoded `iconSvg()` with slug → local SVG loader:
        - Per-diagram override first: `/diagrams/<diagram_dir>/icons/<slug>.svg`
        - Then icon set: `${iconBasePath}/${iconSet}/icons/<slug>.svg`
    - Preloads unique slugs per diagram render, caches results in-memory, and uses the resolved markup during measurement (so node height includes icon row).
- Added an initial icon set:
    - `public/diagrams/icon_sets/athena/icons/{gift,check,alert,clock}.svg`
- Updated lab to pass icon props for the rich demo:
    - `src/pages/playbooks/gifting_playbook_diagram_lab.astro`
- The sanitizer was too strict for “real” custom SVGs (it removed all `id`s and didn’t allow defs/gradients), which would break many icons.
- Updated `sanitizeIconSvgText()` to:
    - allow `defs`, `linearGradient`, `radialGradient`, `stop`, `clipPath`, `mask`
    - keep and namespace internal `id`s (`fi-<hash>__...`) and rewrite internal `url(#...)` references
    - preserve `fill/stroke: url(#...)` instead of forcing `currentColor` in those cases
- Also made icon parsing tolerate future `{ icon: { name: "gift" } }` (it now reads `icon.name` if `icon` is an object).

How to use

- Put icons at `public/diagrams/icon_sets/<set>/icons/<slug>.svg` (must have a `viewBox`)
- In JSON nodes: `"icon": "gift"`
- In the component: `<FlowDiagram ... iconSet="athena" iconMode="inline" />` (defaults already do this)
