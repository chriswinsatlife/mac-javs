# Batch Playbook Generation

## Goal

Generate 100+ playbooks from structured input (CSV or similar) with minimal manual intervention.

## Architecture

```
Source Data (CSV/Airtable/Sheets)
       │
       ▼
  Brief Enrichment (optional LLM pass)
       │
       ▼
  Parallel Generation (N concurrent)
       │
       ▼
  src/content/playbooks/*.json
       │
       ▼
  Astro build (automatic)
```

## Phases

### Phase 1: Ingest
- Read source file
- Validate required fields
- Skip duplicates (slug already exists)

### Phase 2: Generate
- Convert row → brief (inline or via template)
- Call LLM to produce playbook JSON
- Validate against Zod schema
- Write to content collection

### Phase 3: Report
- Success/failure counts
- List of generated slugs
- Error log with row numbers

---

## Open Questions

### Input Format

- A: What's the source? CSV file, Airtable, Google Sheets, Notion export, other?
- B: What columns/fields will be provided per playbook?
  - Minimum viable: `slug, area, topic`
  - Richer: `slug, area, topic, persona, tools, section_hints`
  - Full brief: All current YAML fields
- C: Will tools be provided as comma-separated names, or structured with URLs/categories?
- D: Is there a "priority" or "batch" column to generate subsets?

### Generation

- E: Concurrency limit? (API rate limits, cost control)
  - 1 (sequential), 5, 10, unlimited?
- F: Model choice per batch or hardcoded?
  - Current: `gemini-2.5-flash-preview-05-20`
- G: Resume behavior on partial failure?
  - Skip existing slugs, retry failed only, full regenerate?
- H: Dry-run mode needed? (validate input without LLM calls)

### Brief Enrichment

- I: For sparse CSV rows, should an LLM pre-pass expand into full brief before generation?
  - Pro: Better playbook quality
  - Con: 2x LLM calls, 2x cost/time
- J: Or trust single-pass generation from minimal input?

### Output

- K: Overwrite existing playbooks or skip?
- L: Generate to `src/content/playbooks/` directly or staging directory first?
- M: Auto-trigger build after batch, or manual?

### Assets

- N: How to handle missing tool logos?
  - Fail, warn, use placeholder, auto-fetch from Clearbit/similar?
- O: Hero images - generate, skip, or require in source data?

### Validation

- P: Pre-generation validation (check slugs unique, areas valid, etc)?
- Q: Post-generation human review step, or straight to production?

---

## Proposed CSV Schema (pending answers)

```csv
slug,area,topic,persona_archetype,pain_points,tools,section_hints
inbox-zero,admin,"Email delegation to EA...",Overwhelmed executive,"3+ hrs daily on email;important msgs buried","Gmail;Superhuman;Slack","Triage framework;Template library;Weekly calibration"
```

Fields use `;` as internal delimiter for lists.

---

## Estimated Implementation

- Phase 1 (ingest + validate): 1-2 hrs
- Phase 2 (parallel generation): 2-3 hrs  
- Phase 3 (reporting + resume): 1-2 hrs
- Testing with 10-20 rows: 1 hr

Total: ~6-8 hrs

---

## Dependencies

- Existing: `scripts/generate_playbook.ts`, `src/lib/brief_parser.ts`, Zod schemas
- New: CSV parser (use `mlr` or `csv-parse`), concurrency wrapper (`p-limit` or Bun native)

---

## Notes

- Current generation: ~18s per playbook
- 100 playbooks sequential: ~30 min
- 100 playbooks @ 10 concurrent: ~3 min
- Cost scales linearly with input/output tokens

