---
name: beautiful-mermaid
description: Use when creating Mermaid diagrams that must be exported as SVG or ASCII using the `beautiful-mermaid` library or creating themes for Mermaid files or diagrams
---

# Beautiful Mermaid

The `beautiful-mermaid` package (`lukilabs/beautiful-mermaid`) is installed via `bun` in this project, and enables rendering Mermaid diagrams as themeable SVGs or ASCII art with zero DOM dependencies.

## Examples

See `./references/`.

### Diagrams

- Flowcharts: `./references/flowchart.md`
- States: `./references/state.md`
- Sequences: `./references/sequence.md`
- Classes: `./references/class.md`
- Entity Relationships: `./references/er.md`

### Themes

- Athena Example Theme: `./themes/example.ts`

## Features

- **5 diagram types** — Flowcharts, State, Sequence, Class, and ER diagrams
- **Dual output** — SVG for rich UIs, ASCII/Unicode for terminals
- **15 built-in themes** — And dead simple to add your own
- **Full Shiki compatibility** — Use any VS Code theme directly
- **Live theme switching** — CSS custom properties, no re-render needed
- **Mono mode** — Beautiful diagrams from just 2 colors
- **Zero DOM dependencies** — Pure TypeScript, works everywhere
- **Ultra-fast** — Renders 100+ diagrams in under 500ms

## Installation

```bash
bun add beautiful-mermaid
```

## Quick Start

### SVG Output

```typescript
import { renderMermaid } from "beautiful-mermaid";

const svg = await renderMermaid(`
  graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action]
    B -->|No| D[End]
`);
```

### ASCII Output

```typescript
import { renderMermaidAscii } from "beautiful-mermaid";

const ascii = renderMermaidAscii(`graph LR; A --> B --> C`);
```

```
┌───┐     ┌───┐     ┌───┐
│   │     │   │     │   │
│ A │────►│ B │────►│ C │
│   │     │   │     │   │
└───┘     └───┘     └───┘
```

### Browser (Script Tag)

For non-bundled environments, include via CDN:

```html
<script src="https://unpkg.com/beautiful-mermaid/dist/beautiful-mermaid.browser.global.js"></script>
<script>
    const { renderMermaid, THEMES } = beautifulMermaid;
    renderMermaid('graph TD; A-->B').then(svg => { ... });
</script>
```

Also available via [jsDelivr](https://cdn.jsdelivr.net/npm/beautiful-mermaid/dist/beautiful-mermaid.browser.global.js). The bundle exposes `renderMermaid`, `renderMermaidAscii`, `THEMES`, `DEFAULTS`, and `fromShikiTheme` on the global `beautifulMermaid` object.

---

## Theming

The theming system is the heart of `beautiful-mermaid`. It's designed to be both powerful and dead simple.

### Implementation

Themes live in `src/theme.ts` in the `beautiful-mermaid` repo.

- Built-ins are exported as `THEMES`: `Record<string, DiagramColors>` (keys like `tokyo-night`, `github-dark`, etc).
- The type is `DiagramColors`:
    - required: `bg`, `fg`
    - optional: `line`, `accent`, `muted`, `surface`, `border`
- If you only provide `bg` + `fg`, everything else is derived inside the SVG via `color-mix()` fallbacks (their “mono mode”).
- You can also generate a theme from a Shiki theme object with `fromShikiTheme(theme)` (also in `src/theme.ts`).

### The Two-Color Foundation

Every diagram needs just two colors: **background** (`bg`) and **foreground** (`fg`). That's it. From these two colors, the entire diagram is derived using `color-mix()`:

```typescript
const svg = await renderMermaid(diagram, {
    bg: "#1a1b26", // Background
    fg: "#a9b1d6", // Foreground
});
```

This is **Mono Mode**—a coherent, beautiful diagram from just two colors. The system automatically derives:

| Element        | Derivation                |
| -------------- | ------------------------- |
| Text           | `--fg` at 100%            |
| Secondary text | `--fg` at 60% into `--bg` |
| Edge labels    | `--fg` at 40% into `--bg` |
| Connectors     | `--fg` at 30% into `--bg` |
| Arrow heads    | `--fg` at 50% into `--bg` |
| Node fill      | `--fg` at 3% into `--bg`  |
| Node stroke    | `--fg` at 20% into `--bg` |

### Enriched Mode

For richer themes, you can provide optional "enrichment" colors that override specific derivations:

```typescript
const svg = await renderMermaid(diagram, {
    bg: "#1a1b26",
    fg: "#a9b1d6",
    // Optional enrichment:
    line: "#3d59a1", // Edge/connector color
    accent: "#7aa2f7", // Arrow heads, highlights
    muted: "#565f89", // Secondary text, labels
    surface: "#292e42", // Node fill tint
    border: "#3d59a1", // Node stroke
});
```

If an enrichment color isn't provided, it falls back to the `color-mix()` derivation. This means you can provide just the colors you care about.

### CSS Custom Properties = Live Switching

All colors are CSS custom properties on the `<svg>` element. This means you can switch themes instantly without re-rendering:

```javascript
// Switch theme by updating CSS variables
svg.style.setProperty("--bg", "#282a36");
svg.style.setProperty("--fg", "#f8f8f2");
// The entire diagram updates immediately
```

### Built-in Themes

15 carefully curated themes ship out of the box:

| Theme               | Type  | Background | Accent    |
| ------------------- | ----- | ---------- | --------- |
| `zinc-light`        | Light | `#FFFFFF`  | Derived   |
| `zinc-dark`         | Dark  | `#18181B`  | Derived   |
| `tokyo-night`       | Dark  | `#1a1b26`  | `#7aa2f7` |
| `tokyo-night-storm` | Dark  | `#24283b`  | `#7aa2f7` |
| `tokyo-night-light` | Light | `#d5d6db`  | `#34548a` |
| `catppuccin-mocha`  | Dark  | `#1e1e2e`  | `#cba6f7` |
| `catppuccin-latte`  | Light | `#eff1f5`  | `#8839ef` |
| `nord`              | Dark  | `#2e3440`  | `#88c0d0` |
| `nord-light`        | Light | `#eceff4`  | `#5e81ac` |
| `dracula`           | Dark  | `#282a36`  | `#bd93f9` |
| `github-light`      | Light | `#ffffff`  | `#0969da` |
| `github-dark`       | Dark  | `#0d1117`  | `#4493f8` |
| `solarized-light`   | Light | `#fdf6e3`  | `#268bd2` |
| `solarized-dark`    | Dark  | `#002b36`  | `#268bd2` |
| `one-dark`          | Dark  | `#282c34`  | `#c678dd` |

```typescript
import { renderMermaid, THEMES } from "beautiful-mermaid";

const svg = await renderMermaid(
    diagram,
    THEMES["tokyo-night"],
);
```

### Adding Your Own Theme

Creating a theme is trivial. At minimum, just provide `bg` and `fg`:

```typescript
const myTheme = {
    bg: "#0f0f0f",
    fg: "#e0e0e0",
};

const svg = await renderMermaid(diagram, myTheme);
```

Want richer colors? Add any of the optional enrichments:

```typescript
const myRichTheme = {
    bg: "#0f0f0f",
    fg: "#e0e0e0",
    accent: "#ff6b6b", // Pop of color for arrows
    muted: "#666666", // Subdued labels
};
```

Example library usage:

```ts
import { renderMermaid } from "beautiful-mermaid";
const athenaTheme = {
    bg: "#fbfaf7",
    fg: "#0b1f14",
    accent: "#0a5cff",
    muted: "#587062",
    line: "#99b2a2",
    surface: "#eef3ee",
    border: "#c8d7cd",
};
const svg = await renderMermaid(source, athenaTheme);
```

Options for custom themes:

- Inline per call (no new files):
    - `renderMermaid(code, { bg, fg, ... })`
- Centralized in your project (recommended if reused):
    - create a shared `themes/athena_mermaid_theme.ts` exporting `ATHENA_MERMAID_THEME`, then import and pass it as the `options/colors` argument to `renderMermaid(...)`.

### Full Shiki Compatibility

Use **any VS Code theme** directly via Shiki integration. This gives you access to hundreds of community themes:

```typescript
import { getSingletonHighlighter } from "shiki";
import {
    renderMermaid,
    fromShikiTheme,
} from "beautiful-mermaid";

// Load any theme from Shiki's registry
const highlighter = await getSingletonHighlighter({
    themes: [
        "vitesse-dark",
        "rose-pine",
        "material-theme-darker",
    ],
});

// Extract diagram colors from the theme
const colors = fromShikiTheme(
    highlighter.getTheme("vitesse-dark"),
);

const svg = await renderMermaid(diagram, colors);
```

The `fromShikiTheme()` function intelligently maps VS Code editor colors to diagram roles:

| Editor Color                  | Diagram Role |
| ----------------------------- | ------------ |
| `editor.background`           | `bg`         |
| `editor.foreground`           | `fg`         |
| `editorLineNumber.foreground` | `line`       |
| `focusBorder` / keyword token | `accent`     |
| comment token                 | `muted`      |
| `editor.selectionBackground`  | `surface`    |
| `editorWidget.border`         | `border`     |

---

## Supported Diagrams

### Flowcharts

```
graph TD
  A[Start] --> B{Decision}
  B -->|Yes| C[Process]
  B -->|No| D[End]
  C --> D
```

All directions supported: `TD` (top-down), `LR` (left-right), `BT` (bottom-top), `RL` (right-left).

### State Diagrams

```
stateDiagram-v2
  [*] --> Idle
  Idle --> Processing: start
  Processing --> Complete: done
  Complete --> [*]
```

### Sequence Diagrams

```
sequenceDiagram
  Alice->>Bob: Hello Bob!
  Bob-->>Alice: Hi Alice!
  Alice->>Bob: How are you?
  Bob-->>Alice: Great, thanks!
```

### Class Diagrams

```
classDiagram
  Animal <|-- Duck
  Animal <|-- Fish
  Animal: +int age
  Animal: +String gender
  Animal: +isMammal() bool
  Duck: +String beakColor
  Duck: +swim()
  Duck: +quack()
```

### ER Diagrams

```
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE_ITEM : contains
  PRODUCT ||--o{ LINE_ITEM : "is in"
```

---

## ASCII Output

For terminal environments, CLI tools, or anywhere you need plain text, render to ASCII or Unicode box-drawing characters:

```typescript
import { renderMermaidAscii } from "beautiful-mermaid";

// Unicode mode (default) — prettier box drawing
const unicode = renderMermaidAscii(`graph LR; A --> B`);

// Pure ASCII mode — maximum compatibility
const ascii = renderMermaidAscii(`graph LR; A --> B`, {
    useAscii: true,
});
```

**Unicode output:**

```
┌───┐     ┌───┐
│   │     │   │
│ A │────►│ B │
│   │     │   │
└───┘     └───┘
```

**ASCII output:**

```
+---+     +---+
|   |     |   |
| A |---->| B |
|   |     |   |
+---+     +---+
```

### ASCII Options

```typescript
renderMermaidAscii(diagram, {
    useAscii: false, // true = ASCII, false = Unicode (default)
    paddingX: 5, // Horizontal spacing between nodes
    paddingY: 5, // Vertical spacing between nodes
    boxBorderPadding: 1, // Padding inside node boxes
});
```

---

## API Reference

### `renderMermaid(text, options?): Promise<string>`

Render a Mermaid diagram to SVG. Auto-detects diagram type.

**Parameters:**

- `text` — Mermaid source code
- `options` — Optional `RenderOptions` object

**RenderOptions:**

| Option        | Type      | Default   | Description                        |
| ------------- | --------- | --------- | ---------------------------------- |
| `bg`          | `string`  | `#FFFFFF` | Background color                   |
| `fg`          | `string`  | `#27272A` | Foreground color                   |
| `line`        | `string?` | —         | Edge/connector color               |
| `accent`      | `string?` | —         | Arrow heads, highlights            |
| `muted`       | `string?` | —         | Secondary text, labels             |
| `surface`     | `string?` | —         | Node fill tint                     |
| `border`      | `string?` | —         | Node stroke color                  |
| `font`        | `string`  | `Inter`   | Font family                        |
| `transparent` | `boolean` | `false`   | Render with transparent background |

### `renderMermaidAscii(text, options?): string`

Render a Mermaid diagram to ASCII/Unicode text. Synchronous.

**AsciiRenderOptions:**

| Option             | Type      | Default | Description                  |
| ------------------ | --------- | ------- | ---------------------------- |
| `useAscii`         | `boolean` | `false` | Use ASCII instead of Unicode |
| `paddingX`         | `number`  | `5`     | Horizontal node spacing      |
| `paddingY`         | `number`  | `5`     | Vertical node spacing        |
| `boxBorderPadding` | `number`  | `1`     | Inner box padding            |

### `fromShikiTheme(theme): DiagramColors`

Extract diagram colors from a Shiki theme object.

### `THEMES: Record<string, DiagramColors>`

Object containing all 15 built-in themes.

### `DEFAULTS: { bg: string, fg: string }`

Default colors (`#FFFFFF` / `#27272A`).

## Dagre Adapter

Layout glue utilities for integrating @dagrejs/dagre into their renderers:

- `centerToTopLeft()` converts Dagre’s center coords to top-left.
- `snapToOrthogonal()` post-processes edge points into strict 90-degree segments.
- `clipToDiamondBoundary()` / `clipToCircleBoundary()` fix endpoint clipping for non-rect shapes (since Dagre assumes rectangles).
- `clipEndpointsToNodes()` adjusts edge endpoints after orthogonalization so arrows hit the correct side.

### Source Code

```bash
# Fetch dagre-adapter.ts via gh api
$ gh api repos/lukilabs/beautiful-mermaid/contents/src/dagre-adapter.ts -H "Accept: application/vnd.github.raw"
```
