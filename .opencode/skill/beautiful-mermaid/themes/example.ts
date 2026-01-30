import type { DiagramColors, RenderOptions } from 'beautiful-mermaid'

// Athena brand fonts (from athena/brand/athena_com_style_guide.md)
export const ATHENA_FONT = {
  primary: 'Figtree',
  heading: 'Playfair Display',
} as const

// Color-only themes (DiagramColors type)
export const athena_diagram_mono: DiagramColors = {
  // Background: Warm Cream
  bg: '#E6E7DD',
  // Foreground/text: Dark Brown
  fg: '#403422',
}

export const athena_diagram_rich: DiagramColors = {
  bg: '#E6E7DD',
  fg: '#403422',
  // Connectors/lines: Sage Green
  line: '#5A8669',
  // Accents/arrowheads: Bright Green
  accent: '#559F68',
  // Secondary text/labels: Dark Gray
  muted: '#464644',
  // Node strokes: Sage Green
  border: '#5A8669',
}

export const athena_diagram_dark: DiagramColors = {
  // Background: Primary Dark (Athena brand)
  bg: '#05240C',
  // Foreground/text: Warm Cream
  fg: '#E6E7DD',
  line: '#5A8669',
  accent: '#D5A972',
  muted: '#BAD8C4',
  border: '#5A8669',
}

// Full render options with Athena brand font
export const athena_render_mono: RenderOptions = {
  ...athena_diagram_mono,
  font: ATHENA_FONT.primary,
}

export const athena_render_rich: RenderOptions = {
  ...athena_diagram_rich,
  font: ATHENA_FONT.primary,
}

export const athena_render_dark: RenderOptions = {
  ...athena_diagram_dark,
  font: ATHENA_FONT.primary,
}

export function make_athena_diagram_theme(overrides: Partial<DiagramColors> = {}): DiagramColors {
  return {
    ...athena_diagram_rich,
    ...overrides,
    bg: overrides.bg ?? athena_diagram_rich.bg,
    fg: overrides.fg ?? athena_diagram_rich.fg,
  }
}

export function make_athena_render_options(overrides: Partial<RenderOptions> = {}): RenderOptions {
  return {
    ...athena_render_rich,
    ...overrides,
  }
}

// Mermaid flowchart config with sensible defaults for Athena diagrams
export const ATHENA_FLOWCHART_CONFIG = {
  subGraphTitleMargin: { top: 10, bottom: 10 },
  nodeSpacing: 60,
  rankSpacing: 60,
  diagramPadding: 24,
  wrappingWidth: 220,
  htmlLabels: false,
} as const

// Mermaid themeVariables for inverted edge labels and subgraph headers
// Dark forest green background with cream text
export const ATHENA_THEME_VARIABLES = {
  // Edge label styling: dark green bg, cream text
  edgeLabelBackground: '#3D5A45',
  // Subgraph/cluster styling: dark green header, cream text
  tertiaryColor: '#3D5A45',
  tertiaryTextColor: '#E6E7DD',
  tertiaryBorderColor: '#5A8669',
} as const

type FlowchartConfigOverrides = Partial<typeof ATHENA_FLOWCHART_CONFIG>
type ThemeVariableOverrides = Partial<typeof ATHENA_THEME_VARIABLES>

interface MermaidConfigOptions {
  flowchart?: FlowchartConfigOverrides
  themeVariables?: ThemeVariableOverrides
}

// Helper to generate Mermaid frontmatter config block
// Prepend this to your Mermaid source for consistent layout and styling
export function athena_mermaid_config(options: MermaidConfigOptions = {}): string {
  const flowchart = { ...ATHENA_FLOWCHART_CONFIG, ...options.flowchart }
  const themeVars = { ...ATHENA_THEME_VARIABLES, ...options.themeVariables }
  return `---
config:
  theme: base
  themeVariables:
    edgeLabelBackground: '${themeVars.edgeLabelBackground}'
    tertiaryColor: '${themeVars.tertiaryColor}'
    tertiaryTextColor: '${themeVars.tertiaryTextColor}'
    tertiaryBorderColor: '${themeVars.tertiaryBorderColor}'
  flowchart:
    subGraphTitleMargin:
      top: ${flowchart.subGraphTitleMargin.top}
      bottom: ${flowchart.subGraphTitleMargin.bottom}
    nodeSpacing: ${flowchart.nodeSpacing}
    rankSpacing: ${flowchart.rankSpacing}
    diagramPadding: ${flowchart.diagramPadding}
    wrappingWidth: ${flowchart.wrappingWidth}
    htmlLabels: ${flowchart.htmlLabels}
---
`
}

/*
Usage:

import { renderMermaid } from 'beautiful-mermaid'
import { athena_render_rich, athena_mermaid_config } from './example'

// Full brand styling (colors + Figtree font)
const svg = await renderMermaid('graph TD; A-->B', athena_render_rich)

// Or customize
import { make_athena_render_options } from './example'
const custom_svg = await renderMermaid('graph TD; A-->B', make_athena_render_options({
  font: 'Playfair Display', // use heading font instead
  transparent: true,
}))

// With inverted edge labels, subgraph headers, and layout config
const diagram = athena_mermaid_config() + `
flowchart TD
  subgraph Backend
    A[API] -->|fetch| B[DB]
  end
  subgraph Frontend
    C[App] -->|render| D[UI]
  end
  A -->|Yes| C
  B -->|No| D
`
const styled_svg = await renderMermaid(diagram, athena_render_rich)

// Custom overrides
const custom_config = athena_mermaid_config({
  flowchart: {
    subGraphTitleMargin: { top: 20, bottom: 20 },
    rankSpacing: 80,
  },
  themeVariables: {
    edgeLabelBackground: '#2A3F30', // darker green
  },
})
*/
