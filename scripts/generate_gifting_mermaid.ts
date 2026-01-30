import { renderMermaid } from 'beautiful-mermaid'
import { athena_render_rich } from '../.opencode/skill/beautiful-mermaid/themes/example'

const giftingWorkflowDiagram = `
graph TD
  subgraph Setup [Setup Phase]
    A[Duplicate Airtable Template] --> B[Add Key People and Dates]
    B --> C[Configure Lead Times]
    C --> D[Add Addresses and Sizes]
    D --> E[Share Base with EA]
  end

  subgraph Ongoing [Ongoing Workflow]
    F{Weekly Check: Upcoming Events?}
    F -->|Yes| G[Review Last Year's Gifts]
    F -->|No| F
    G --> H[Check Interest-Based Sources]
    H --> I[Generate 5-10 Gift Ideas]
    I --> J[Send Options to Client]
    J --> K{Client Approves?}
    K -->|Yes| L[Purchase Gift]
    K -->|Request Changes| H
    L --> M[Ship to Recipient]
    M --> N[Draft Thank-You Message]
    N --> O[Confirm Delivery]
  end

  subgraph Record [Record Keeping]
    O --> P[Log Gift in Airtable]
    P --> Q[Update Brands and Stores]
    Q --> R[Note Recipient Feedback]
  end

  E --> F
`

const setupChecklist = `
graph LR
  A([Begin Setup]) --> B[/Duplicate Airtable Template/]
  B --> C[[Add People and Key Dates]]
  C --> D[/Optional: Addresses, Sizes, Preferences/]
  D --> E{{Configure Holidays and Lead Times}}
  E --> F[[Share Base with EA]]
  F --> G([Setup Complete])
`

const weeklyReviewCycle = `
graph TD
  A([Weekly Check]) --> B{Any Events Within Lead Time?}
  B -->|No| C([Wait Until Next Week])
  B -->|Yes| D[Review Previous Gifts to Recipient]
  D --> E[Check Their Interests and Hobbies]
  E --> F[Browse Curated Gift Sources]
  F --> G[Compile 5-10 Gift Options]
  G --> H[Send to Client via WhatsApp or Slack]
  H --> I{Client Selection}
  I -->|Approved| J[Purchase with Designated Card]
  I -->|Need More Options| F
  J --> K[Ship to Recipient Address]
  K --> L[Draft Personal Message for Client]
  L --> M[Track Delivery and Confirm Receipt]
  M --> N[Log Everything in Airtable]
  N --> O([Cycle Complete])
`

const maintenanceTasks = `
graph LR
  subgraph Quarterly [Quarterly Tasks]
    direction TB
    A[Backfill Gift History 3-5 Years] --> B[Review and Update Favorite Brands]
    B --> C[Refresh Gift Source List]
  end

  subgraph AsNeeded [As Needed]
    direction TB
    D[Add New People to Database] --> E[Create New Event Types]
    E --> F[Update Addresses and Preferences]
  end

  subgraph Optimize [Continuous Improvement]
    direction TB
    G[Identify Proven Gift Winners] --> H[Reuse for Similar Recipients]
    H --> I[Track Recipient Feedback]
  end

  Quarterly --> AsNeeded --> Optimize
`

async function generateDiagrams() {
  console.log('Generating gifting playbook diagrams with beautiful-mermaid...\n')

  const diagrams = [
    { name: 'Complete Gift Workflow', source: giftingWorkflowDiagram },
    { name: 'Setup Checklist', source: setupChecklist },
    { name: 'Weekly Review Cycle', source: weeklyReviewCycle },
    { name: 'Maintenance Tasks', source: maintenanceTasks },
  ]

  const results: { name: string; svg: string }[] = []

  for (const diagram of diagrams) {
    const svg = await renderMermaid(diagram.source, athena_render_rich)
    results.push({ name: diagram.name, svg })
    console.log(`Generated: ${diagram.name}`)
  }

  return results
}

// Generate and output
generateDiagrams()
  .then((results) => {
    // Output HTML page with all diagrams
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gifting Playbook - Athena</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --athena-primary: #05240C;
      --athena-cream: #E6E7DD;
      --athena-sage: #5A8669;
      --athena-gold: #D5A972;
    }
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Figtree', sans-serif;
      background: linear-gradient(135deg, var(--athena-cream) 0%, #fff 50%, #E8F0E8 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    .container { max-width: 1400px; margin: 0 auto; }
    header { text-align: center; margin-bottom: 3rem; }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      font-weight: 500;
      color: var(--athena-primary);
      margin-bottom: 0.5rem;
    }
    .subtitle { font-size: 1.125rem; color: var(--athena-sage); }
    .diagram-section {
      background: white;
      border-radius: 16px;
      padding: 2.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 24px rgba(5, 36, 12, 0.08);
      border: 1px solid rgba(5, 36, 12, 0.06);
    }
    .diagram-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 1.75rem;
      font-weight: 500;
      color: var(--athena-primary);
      margin-bottom: 1.5rem;
    }
    .diagram-container {
      display: flex;
      justify-content: center;
      overflow-x: auto;
    }
    .diagram-container svg {
      max-width: 100%;
      height: auto;
    }
    footer {
      text-align: center;
      padding: 2rem;
      color: var(--athena-sage);
      font-size: 0.875rem;
    }
    footer a { color: var(--athena-primary); text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Gift Automation Playbook</h1>
      <p class="subtitle">Never miss a birthday, anniversary, or holiday again</p>
    </header>
    ${results
      .map(
        (r) => `
    <section class="diagram-section">
      <h2>${r.name}</h2>
      <div class="diagram-container">
        ${r.svg}
      </div>
    </section>`
      )
      .join('\n')}
    <footer>
      <p>Built with care by <a href="https://athena.com">Athena</a></p>
    </footer>
  </div>
</body>
</html>`

    console.log(html)
  })
  .catch(console.error)
