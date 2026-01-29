# DataTableViewer Component Spec

## Purpose

Astro component that renders tabular data in the visual style of various table/database apps (Google Sheets, Notion, Airtable, etc). Like `Messages.astro` but for spreadsheet/database UIs.

## Usage

```astro
<!-- Inline data -->
<DataTableViewer
  style="sheets"
  data={[
    { name: "Alice", role: "EA", status: "Active" },
    { name: "Bob", role: "Designer", status: "Pending" }
  ]}
/>

<!-- From CSV/JSON/YAML file -->
<DataTableViewer style="notion" src="/data/team.csv" />

<!-- With separate stylesheet -->
<DataTableViewer
  src="/data/tasks.json"
  stylesheet="airtable"
/>
```

## Props Interface

```ts
interface Props {
  style?: 'sheets' | 'notion' | 'airtable' | 'excel' | 'plain';
  data?: Record<string, unknown>[];        // inline array of objects
  src?: string;                            // path to CSV, JSON, or YAML file
  columns?: ColumnConfig[];                // optional column config
  showRowNumbers?: boolean;                // default varies by style
  showHeader?: boolean;                    // default true
  striped?: boolean;                       // alternating row colors
  compact?: boolean;                       // reduced padding
}

interface ColumnConfig {
  key: string;                             // object key to display
  label?: string;                          // header label (defaults to key)
  type?: 'text' | 'number' | 'checkbox' | 'tag' | 'date' | 'url';
  width?: string;                          // CSS width
  align?: 'left' | 'center' | 'right';
}
```

## Data Formats Supported

- JSON: array of objects `[{...}, {...}]`
- YAML: same structure
- CSV: parsed to array of objects, first row = headers

## Styles

### sheets (Google Sheets)

- Light gray header row with darker border below
- White background, thin gray grid lines
- Row numbers in left column (light gray bg)
- Column letters in header (A, B, C...)
- Blue selection highlight (optional)
- Font: Google Sans / Roboto / system

### notion (Notion Database)

- Minimal, modern
- No visible grid lines
- Subtle hover effect on rows
- Header with light gray text, smaller caps
- Property type icons optional (text, checkbox, select tag)
- Rounded corners on container
- Font: Inter / system

### airtable (Airtable)

- Colorful tags for select fields
- Row hover highlight
- Fixed header on scroll
- Column resize handles (visual only)
- Primary field in bold
- Checkbox with filled style
- Font: -apple-system / system

### excel (Excel)

- Classic spreadsheet look
- Strong grid lines
- Green/blue header
- Row/column headers
- Font: Calibri / system

### plain

- Minimal table, just borders
- Respects Athena brand styles

## File Structure

```
src/components/
  DataTableViewer.astro     # main component

# Optional: separate style files if too large
src/styles/table-viewers/
  sheets.css
  notion.css
  airtable.css
  excel.css
```

## Implementation Notes

Following `Messages.astro` patterns:
- `parse as parseYAML` from yaml for YAML files
- `fetch(new URL(src, Astro.url))` for file loading
- CSV parsing via simple split or `papaparse` if needed
- Style-specific classes: `.table-viewer-sheets`, `.table-viewer-notion`, etc
- Scoped `<style>` block with all style variants
- Helper functions for type rendering (checkbox → icon, tag → colored pill)

## Open Questions

- Include papaparse or hand-roll CSV parsing?
- Support column auto-detection from data?
- Editable cells (visual only) for more realistic mockups?
- Dark mode variants per style?

## Phase 1 Tasks (parallel)

- Create component skeleton with Props interface and file loading
- Implement sheets style
- Implement notion style
- Implement airtable style

## Phase 2

- Add CSV parsing
- Add column type renderers (tag, checkbox, etc)
- Test with sample data files
