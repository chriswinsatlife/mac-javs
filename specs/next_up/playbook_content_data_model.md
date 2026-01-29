You're absolutely right. Let me look at the content structure patterns more closely.

From the scraped examples:

**Routines.club structure:**

- Hero + person intro
- "Optimized For" tags
- Multiple sections with: icon, title, intro paragraph, bullet list of specifics, closing paragraph
- Supplement/product callouts (affiliate)
- Related routines cards
- FAQ (Q&A pairs)
- References

**ToolFinder.co structure:**

- Tools mentioned (logo grid)
- "Who is [Person]?" bio section
- Themed sections with tool callouts embedded
- FAQ
- Official resources (social links)
- Related stacks

Let me design a complete content schema:

---

## Playbook Content JSON Schema

```json
{
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "AthenaPlaybook",
    "type": "object",
    "required": ["meta", "hero", "sections", "faq"],
    "properties": {
        "meta": {
            "type": "object",
            "description": "Frontmatter fields",
            "required": [
                "title",
                "slug",
                "description",
                "area",
                "type",
                "audience"
            ],
            "properties": {
                "title": {
                    "type": "string",
                    "maxLength": 70
                },
                "slug": {
                    "type": "string",
                    "pattern": "^[a-z0-9-]+$"
                },
                "description": {
                    "type": "string",
                    "minLength": 120,
                    "maxLength": 160
                },
                "area": {
                    "type": "string",
                    "enum": [
                        "physical-health",
                        "mental-health",
                        "relationships",
                        "personal-finance",
                        "learning-pkm",
                        "passion-projects",
                        "bucket-list",
                        "experiences-travel",
                        "admin",
                        "finance",
                        "people",
                        "marketing",
                        "sales",
                        "product",
                        "engineering",
                        "operations"
                    ]
                },
                "type": {
                    "enum": [
                        "playbook",
                        "routine",
                        "stack",
                        "sop",
                        "guide"
                    ]
                },
                "audience": {
                    "enum": ["client", "ea", "both"]
                },
                "optimized_for": {
                    "type": "array",
                    "items": { "type": "string" },
                    "minItems": 3,
                    "maxItems": 5
                },
                "complexity": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 10
                },
                "scope": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 10
                },
                "intimacy": {
                    "type": "integer",
                    "minimum": 1,
                    "maximum": 10
                },
                "time_savings": { "type": "string" },
                "delegation": {
                    "type": "object",
                    "properties": {
                        "pathway": {
                            "enum": [
                                "direct-defensive",
                                "direct-offensive",
                                "vicarious-defensive",
                                "vicarious-offensive"
                            ]
                        },
                        "modality": {
                            "enum": [
                                "ad-hoc",
                                "process-driven",
                                "goal-driven",
                                "clairvoyant"
                            ]
                        },
                        "frequency": {
                            "enum": [
                                "one-time",
                                "recurring"
                            ]
                        },
                        "level": {
                            "enum": [
                                "beginner",
                                "intermediate",
                                "advanced",
                                "expert"
                            ]
                        }
                    }
                }
            }
        },

        "hero": {
            "type": "object",
            "required": [
                "headline",
                "subheadline",
                "value_prop"
            ],
            "properties": {
                "headline": {
                    "type": "string",
                    "description": "Main H1, benefit-focused"
                },
                "subheadline": {
                    "type": "string",
                    "description": "Supporting context"
                },
                "value_prop": {
                    "type": "string",
                    "description": "1-2 sentence hook explaining why this matters"
                },
                "image": {
                    "type": "object",
                    "properties": {
                        "src": { "type": "string" },
                        "alt": { "type": "string" },
                        "caption": { "type": "string" }
                    }
                },
                "stats": {
                    "type": "array",
                    "description": "Quick proof points",
                    "items": {
                        "type": "object",
                        "properties": {
                            "value": { "type": "string" },
                            "label": { "type": "string" }
                        }
                    },
                    "maxItems": 3
                }
            }
        },

        "person": {
            "type": "object",
            "description": "For person-centric content (routines, stacks)",
            "properties": {
                "name": { "type": "string" },
                "title": { "type": "string" },
                "company": { "type": "string" },
                "image": { "type": "string" },
                "bio": {
                    "type": "string",
                    "description": "2-3 sentence intro"
                },
                "credentials": {
                    "type": "array",
                    "items": { "type": "string" },
                    "description": "Bullet points establishing authority"
                },
                "links": {
                    "type": "object",
                    "properties": {
                        "website": {
                            "type": "string",
                            "format": "uri"
                        },
                        "twitter": { "type": "string" },
                        "youtube": { "type": "string" },
                        "linkedin": { "type": "string" }
                    }
                }
            }
        },

        "tools": {
            "type": "array",
            "description": "Tools/apps used in this playbook",
            "items": {
                "type": "object",
                "required": ["name", "category"],
                "properties": {
                    "name": { "type": "string" },
                    "slug": { "type": "string" },
                    "category": { "type": "string" },
                    "logo": { "type": "string" },
                    "url": {
                        "type": "string",
                        "format": "uri"
                    },
                    "affiliate_url": {
                        "type": "string",
                        "format": "uri"
                    },
                    "description": {
                        "type": "string",
                        "maxLength": 100
                    },
                    "required": {
                        "type": "boolean",
                        "default": false
                    },
                    "alternatives": {
                        "type": "array",
                        "items": { "type": "string" }
                    }
                }
            }
        },

        "templates": {
            "type": "array",
            "items": {
                "type": "object",
                "required": ["name", "platform", "url"],
                "properties": {
                    "name": { "type": "string" },
                    "platform": {
                        "enum": [
                            "airtable",
                            "notion",
                            "google-sheets",
                            "zapier",
                            "asana",
                            "coda",
                            "other"
                        ]
                    },
                    "url": {
                        "type": "string",
                        "format": "uri"
                    },
                    "description": { "type": "string" }
                }
            }
        },

        "sections": {
            "type": "array",
            "description": "Main content sections",
            "items": {
                "type": "object",
                "required": ["id", "title", "content"],
                "properties": {
                    "id": {
                        "type": "string",
                        "pattern": "^[a-z0-9-]+$"
                    },
                    "title": { "type": "string" },
                    "icon": {
                        "type": "string",
                        "description": "Icon name from icon set"
                    },
                    "audience": {
                        "enum": ["client", "ea", "both"],
                        "default": "both"
                    },
                    "intro": {
                        "type": "string",
                        "description": "Opening paragraph"
                    },
                    "content": {
                        "oneOf": [
                            {
                                "type": "string",
                                "description": "Markdown content"
                            },
                            {
                                "type": "object",
                                "description": "Structured content",
                                "properties": {
                                    "format": {
                                        "enum": [
                                            "checklist",
                                            "steps",
                                            "specs",
                                            "prose"
                                        ]
                                    },
                                    "items": {
                                        "type": "array",
                                        "items": {
                                            "type": "object",
                                            "properties": {
                                                "label": {
                                                    "type": "string"
                                                },
                                                "value": {
                                                    "type": "string"
                                                },
                                                "details": {
                                                    "type": "string"
                                                },
                                                "substeps": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "closing": {
                        "type": "string",
                        "description": "Closing paragraph"
                    },
                    "callout": {
                        "type": "object",
                        "description": "Highlighted tip/warning/tool",
                        "properties": {
                            "type": {
                                "enum": [
                                    "tip",
                                    "warning",
                                    "tool",
                                    "example",
                                    "quote"
                                ]
                            },
                            "title": { "type": "string" },
                            "content": { "type": "string" },
                            "tool_slug": {
                                "type": "string",
                                "description": "Reference to tools array"
                            }
                        }
                    },
                    "tool_spotlight": {
                        "type": "object",
                        "description": "Featured tool callout (affiliate opportunity)",
                        "properties": {
                            "tool_slug": {
                                "type": "string"
                            },
                            "context": {
                                "type": "string",
                                "description": "Why this tool for this section"
                            }
                        }
                    }
                }
            }
        },

        "before_after": {
            "type": "object",
            "description": "Before/after comparison for motivation",
            "properties": {
                "before": {
                    "type": "object",
                    "properties": {
                        "title": { "type": "string" },
                        "pain_points": {
                            "type": "array",
                            "items": { "type": "string" }
                        }
                    }
                },
                "after": {
                    "type": "object",
                    "properties": {
                        "title": { "type": "string" },
                        "benefits": {
                            "type": "array",
                            "items": { "type": "string" }
                        }
                    }
                }
            }
        },

        "faq": {
            "type": "array",
            "description": "FAQ section for SEO",
            "minItems": 3,
            "maxItems": 8,
            "items": {
                "type": "object",
                "required": ["question", "answer"],
                "properties": {
                    "question": { "type": "string" },
                    "answer": { "type": "string" }
                }
            }
        },

        "references": {
            "type": "array",
            "description": "Sources and further reading",
            "items": {
                "type": "object",
                "required": ["title", "url"],
                "properties": {
                    "title": { "type": "string" },
                    "url": {
                        "type": "string",
                        "format": "uri"
                    },
                    "source": { "type": "string" }
                }
            }
        },

        "related": {
            "type": "array",
            "description": "Related playbook slugs",
            "items": { "type": "string" },
            "maxItems": 6
        }
    }
}
```

---

## Section Content Formats

Based on the patterns, sections use these formats:

### 1. **Specs Format** (Routines.club style)

```json
{
    "id": "long-duration-endurance",
    "title": "Long-Duration Endurance Training",
    "icon": "running",
    "intro": "Dr. Galpin recommends including long-duration endurance training...",
    "content": {
        "format": "specs",
        "items": [
            {
                "label": "Activities",
                "value": "Hiking, running, surfing, cycling, swimming"
            },
            {
                "label": "Duration",
                "value": "30+ minutes, up to 60-90 for advanced"
            },
            {
                "label": "Intensity",
                "value": "60-80% max heart rate"
            },
            {
                "label": "Purpose",
                "value": "Improve cardiovascular fitness, enhance mitochondrial function"
            },
            {
                "label": "Frequency",
                "value": "1-2 times per week"
            }
        ]
    },
    "closing": "This type of training helps build a strong aerobic base..."
}
```

### 2. **Checklist Format** (Playbook setup style)

```json
{
    "id": "client-setup",
    "title": "Playbook Setup",
    "icon": "clipboard-check",
    "audience": "client",
    "content": {
        "format": "checklist",
        "items": [
            {
                "label": "Copy the Gift Automation Airtable Template",
                "details": "2 seconds",
                "substeps": [
                    "Duplicate the records, since the Sources tab will be useful",
                    "CMD+A and delete all records on the People tab"
                ]
            },
            {
                "label": "Add people who are important to you",
                "substeps": [
                    "Required: Names, birthdays, anniversaries",
                    "Optional: Addresses, contact info, clothing sizes"
                ]
            }
        ]
    }
}
```

### 3. **Steps Format** (Sequential instructions)

```json
{
    "id": "ea-workflow",
    "title": "EA Playbook",
    "icon": "list-ordered",
    "audience": "ea",
    "content": {
        "format": "steps",
        "items": [
            {
                "label": "Check Airtable every 1-2 weeks",
                "details": "Review the Gift Events tab"
            },
            {
                "label": "Research gift ideas",
                "details": "Review previous gifts, check Sources"
            },
            {
                "label": "Email 5-10 gift ideas",
                "details": "Include links and prices"
            }
        ]
    }
}
```

### 4. **Prose Format** (Narrative content)

```json
{
    "id": "philosophy",
    "title": "Why This Matters",
    "content": "Elite delegators strengthen their relationships with automated thoughtfulness. Top Athenians spend less than 30 seconds on average per gift purchase..."
}
```

---

## Example: Complete Gift Automation Playbook JSON

```json
{
    "meta": {
        "title": "Gift Automation Playbook",
        "slug": "gift-automation",
        "description": "Automate thoughtful gift-giving for birthdays, holidays, and special occasions. Spend 30 seconds per gift while strengthening relationships.",
        "area": "relationships",
        "type": "playbook",
        "audience": "both",
        "optimized_for": [
            "time-savings",
            "relationship-building",
            "automation",
            "proactive-delegation"
        ],
        "complexity": 4,
        "scope": 6,
        "intimacy": 7,
        "time_savings": "5-10 hours/year",
        "delegation": {
            "pathway": "vicarious-offensive",
            "modality": "process-driven",
            "frequency": "recurring",
            "level": "intermediate"
        }
    },

    "hero": {
        "headline": "Never Miss a Birthday Again",
        "subheadline": "Automate thoughtful gift-giving with your EA",
        "value_prop": "Elite delegators strengthen relationships with automated thoughtfulness. Top Athenians spend less than 30 seconds per gift purchase—and give better gifts.",
        "stats": [
            {
                "value": "30s",
                "label": "Average time per gift"
            },
            { "value": "5-10h", "label": "Saved per year" },
            { "value": "100%", "label": "On-time delivery" }
        ]
    },

    "tools": [
        {
            "name": "Airtable",
            "slug": "airtable",
            "category": "database",
            "required": true,
            "description": "Track people, events, and gift history"
        },
        {
            "name": "Zapier",
            "slug": "zapier",
            "category": "automation",
            "required": false,
            "description": "Optional: automate reminders"
        }
    ],

    "templates": [
        {
            "name": "Gift Automation Template",
            "platform": "airtable",
            "url": "https://airtable.com/...",
            "description": "Includes People, Gifts, Gift Events, Sources, and Brands tabs"
        }
    ],

    "before_after": {
        "before": {
            "title": "Without This Playbook",
            "pain_points": [
                "10+ hours per year on gift logistics",
                "Last-minute panic buying",
                "Forgotten birthdays and anniversaries",
                "Generic, forgettable gifts"
            ]
        },
        "after": {
            "title": "With This Playbook",
            "pain_points": [
                "Reply with a number 1-5, done",
                "30 days advance notice on every event",
                "Pattern-matched gift recommendations",
                "Excited text messages from recipients"
            ]
        }
    },

    "sections": [
        {
            "id": "what-elite-looks-like",
            "title": "What Elite Gift Giving Looks Like",
            "icon": "gift",
            "content": {
                "format": "steps",
                "items": [
                    {
                        "label": "30 days before any gift event, your EA sends you 5 gift ideas"
                    },
                    {
                        "label": "You respond with a number 1-5 (95% of the time) or request more options"
                    },
                    {
                        "label": "The gift arrives on time, you get an excited thank-you text"
                    }
                ]
            }
        },
        {
            "id": "client-setup",
            "title": "Playbook Setup",
            "icon": "clipboard-check",
            "audience": "client",
            "intro": "Complete these steps to get started—takes about 10 minutes.",
            "content": {
                "format": "checklist",
                "items": [
                    {
                        "label": "Copy the Gift Automation Airtable Template",
                        "details": "2 seconds",
                        "substeps": [
                            "Duplicate the records (Sources tab is useful for EAs)",
                            "CMD+A and delete all records on People tab"
                        ]
                    },
                    {
                        "label": "Add people who are important to you",
                        "substeps": [
                            "Required: Names, birthdays, anniversaries (year can be approximate)",
                            "Optional: Addresses, contact info, clothing sizes, gift value, notes"
                        ]
                    },
                    {
                        "label": "Check boxes for which people get which gifts",
                        "details": "Add columns for other dates or holidays as needed"
                    },
                    {
                        "label": "Share with your EA"
                    }
                ]
            }
        },
        {
            "id": "ea-gift-history",
            "title": "Populating Gift History",
            "icon": "history",
            "audience": "ea",
            "intro": "Before the playbook runs smoothly, populate historical gift data.",
            "content": {
                "format": "steps",
                "items": [
                    {
                        "label": "Open client's Gift Automation Airtable"
                    },
                    {
                        "label": "Delete any fake/demo data"
                    },
                    {
                        "label": "For each person, search email for past gifts",
                        "details": "Search: \"[Name]\" \"tracking\" or \"[Name]\" \"shipping\"",
                        "substeps": [
                            "Check if shipment was near birthday/holiday",
                            "Add confirmed gifts to Gifts tab with all columns filled",
                            "Go back at least 3 years (5 if time permits)"
                        ]
                    }
                ]
            }
        }
    ],

    "faq": [
        {
            "question": "How far in advance should my EA start looking for gifts?",
            "answer": "Default is 30 days. Modify this in the Airtable formula if you prefer more or less lead time. Some gifts (custom items, international shipping) may need 6+ weeks."
        },
        {
            "question": "What if I don't like any of the gift ideas?",
            "answer": "Simply reply asking for more options with new direction. Your EA will research 5 more ideas based on your feedback."
        },
        {
            "question": "Can I add business contacts to this system?",
            "answer": "Yes. Many clients use this for investor relations, key customers, and team members. Just add them to the People tab with appropriate gift value ranges."
        }
    ],

    "references": [
        {
            "title": "The Strategist Gift Guides",
            "url": "https://nymag.com/strategist/",
            "source": "New York Magazine"
        }
    ],

    "related": [
        "personal-crm",
        "travel-automation",
        "calendar-management"
    ]
}
```

---

## Conversion: JSON → MDX

The JSON gets converted to MDX with:

1. **Frontmatter** = `meta` object as YAML
2. **Hero component** = `<PlaybookHero {...hero} />`
3. **Tools grid** = `<ToolsGrid tools={tools} />`
4. **Before/After** = `<BeforeAfter {...before_after} />`
5. **Sections** = Loop through sections, render appropriate component per format
6. **FAQ** = `<FAQ items={faq} />` (with JSON-LD for SEO)
7. **Related** = `<RelatedPlaybooks slugs={related} />`

---

### Potential Next Steps to Verify w/ User

1. Create the TypeScript types for this schema
2. Build the JSON→MDX converter
3. Create the Astro components that render each section format
