Excellent. Now I have a comprehensive picture. Let me synthesize everything into a data model proposal.

Based on my analysis of:

1. **Athena's existing playbook structure** (coda doc) - areas, tools, audience, priority, credit-person/org, status
2. **Delegation ontology** - 16 areas (8 personal + 8 business), complexity/scope/intimacy scoring, modalities
3. **Routines.club pattern** - person-centric, "Optimized For" tags (4 tags per routine), goal-based filtering, last updated dates
4. **ToolFinder.co pattern** - person stacks, tool lists, role-based categories, affiliate integrations
5. **High-performing sites** - Uses This, My Morning Routine, Superhero Jacked, etc.

Here's the proposed data model:

---

## Playbook MDX Frontmatter Schema

```yaml
# === CORE IDENTITY ===
title: "Gift Automation Playbook"
slug: "gift-automation" # URL: /playbooks/gift-automation
description: "Automate thoughtful gift-giving..." # SEO meta, 150-160 chars
hero_image: "/images/playbooks/gift-automation.png"

# === TAXONOMY: PRIMARY (single-select) ===
area: "relationships" # From 16 areas below
type: "playbook" # playbook | routine | stack | sop | guide
audience: "client" # client | ea | both

# === TAXONOMY: SECONDARY (multi-select) ===
optimized_for: # 3-5 goal-based tags, routines.club style
    - "time-savings"
    - "relationship-building"
    - "automation"
    - "proactive-delegation"

tags: # Freeform discovery tags
    - "gifts"
    - "birthdays"
    - "holidays"
    - "airtable"

# === TOOLS & TEMPLATES ===
tools: # Apps/services required
    - name: "Airtable"
      required: true
      template_url: "https://airtable.com/..."
    - name: "Zapier"
      required: false
    - name: "Amazon"
      required: false

templates: # Downloadable/duplicable assets
    - name: "Gift Tracking Template"
      platform: "airtable"
      url: "https://..."
    - name: "Gift Event Calendar"
      platform: "google-calendar"
      url: "https://..."

# === ATTRIBUTION ===
author:
    name: "Athena" # Person or org name
    type: "organization" # person | organization
    url: "https://athena.com"
    avatar: "/images/authors/athena.png"

inspired_by: # Optional, for social proof
    - name: "Naval Ravikant"
      role: "Angel Investor"
      company: "AngelList"

# === SCORING (LLM-generated or manual) ===
complexity: 4 # 1-10, task difficulty
scope: 6 # 1-10, breadth of responsibility
intimacy: 7 # 1-10, personal/sensitive nature
time_savings: "5-10 hours/year" # Human-readable benefit

# === DELEGATION METADATA ===
delegation:
    pathway: "vicarious-offensive" # direct-defensive | direct-offensive | vicarious-defensive | vicarious-offensive
    modality: "process-driven" # ad-hoc | process-driven | goal-driven | clairvoyant
    frequency: "recurring" # one-time | recurring
    level: "intermediate" # beginner | intermediate | advanced | expert

# === CONTENT STRUCTURE ===
sections:
    - client_setup # What client does
    - ea_setup # What EA does
    - ongoing_workflow # Recurring tasks
    - tips # Pro tips
    - faq # Common questions

# === SEO & DATES ===
publish_date: 2026-01-15
updated_date: 2026-01-29
status: "published" # draft | review | published | archived

# === RELATED CONTENT ===
related_playbooks:
    - "personal-crm"
    - "travel-automation"
    - "calendar-management"
```

---

## Taxonomy: 16 Areas

**Personal (1-8)**

- `physical-health` - exercise, nutrition, medical
- `mental-health` - therapy, retreats, stress management
- `relationships` - friends, family, gifts, events
- `personal-finance` - investing, banking, credit
- `learning-pkm` - education, knowledge management, reading
- `passion-projects` - hobbies, creative work
- `bucket-list` - major life goals, experiences
- `experiences-travel` - travel, activities, restaurants

**Business (9-16)**

- `admin` - general business admin
- `finance` - invoicing, bookkeeping, expenses
- `people` - hiring, culture, HR, team
- `marketing` - content, social, SEO, ads
- `sales` - prospecting, CRM, outreach
- `product` - research, UX, customer interviews
- `engineering` - code, testing, technical
- `operations` - fulfillment, support, logistics

---

## URL Structure

```
/playbooks                          # Library landing
/playbooks/[slug]                   # Individual playbook
/playbooks/area/[area]              # Filter by area
/playbooks/tools/[tool]             # Filter by tool
/playbooks/author/[author-slug]     # Author profile page
/routines                           # Person-centric routines (future)
/stacks                             # Tool stacks (future)
```

---

## Filtering/Facets for Library UI

| Facet            | Type          | Values               |
| ---------------- | ------------- | -------------------- |
| Area             | Single-select | 16 areas             |
| Audience         | Multi-select  | Client, EA           |
| Optimized For    | Multi-select  | Dynamic from content |
| Tools            | Multi-select  | Dynamic from content |
| Complexity       | Range slider  | 1-10                 |
| Delegation Level | Single-select | Beginner → Expert    |

---

## SEO Title Patterns

Based on high-performing sites:

- `{Title} - Athena Playbook`
- `How to {Action} with Your EA | Athena`
- `{Person}'s {Topic} Routine - Athena`
- `The Complete {Topic} Playbook for Delegators`
