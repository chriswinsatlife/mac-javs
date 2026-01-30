import type { DiagramColors } from 'beautiful-mermaid'

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

export function make_athena_diagram_theme(overrides: Partial<DiagramColors> = {}): DiagramColors {
  // Enforce required bg/fg, allow callers to override the rest.
  return {
    ...athena_diagram_rich,
    ...overrides,
    bg: overrides.bg ?? athena_diagram_rich.bg,
    fg: overrides.fg ?? athena_diagram_rich.fg,
  }
}

/*
Usage:

import { renderMermaid } from 'beautiful-mermaid'
import { athena_diagram_rich } from './example'

const svg = await renderMermaid('graph TD; A-->B', athena_diagram_rich)
*/
