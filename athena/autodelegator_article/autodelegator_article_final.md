# Build an Email Autodelegator Your EA Actually Trusts
Subtitle: A step‑by‑step guide to ship a human‑in‑the‑loop email triage + task creation system with n8n + LLMs for ~$10–$40/month

TL;DR
- Problem: Inbox triage is where delegation dies—emails get read but not turned into tasks. Many teams don’t even use a task manager, so things drop.
- Approach: Self‑host n8n and wire Gmail/Outlook → LLM classification → task manager (Asana/TickTick/Notion) with a configurable prompt, user SOPs, and a human‑in‑the‑loop lane.
- Results: Processes hundreds of emails/day with near‑zero drops, customizable prompts per client, and monthly costs typically under $50 (infra + tokens).
- Who should care: EAs, founders, operations leaders, and AI engineers who want a dependable “autodelegator” without Zapier‑scale costs or lock‑in.

---

Why this matters
If you read your email but don’t create a task, your system silently fails. In interviews, we’ve seen many executives who never gave inbox access to their assistant—and over half who don’t use a proper task manager with their EA. The outcome is predictable: inconsistent delegation, forgotten follow‑ups, and a low ceiling on EA leverage.

The Email Autodelegator fixes that by making task creation the default. Every email is evaluated, actionable ones become tasks automatically (or proposed tasks for human confirmation), and non‑actionable ones are summarized or ignored per your rules. You keep judgment in the loop but remove the busywork.

This post shows how to build it end‑to‑end with n8n, OpenAI/Gemini, and your task manager of choice. You’ll get a reference architecture, reproducible setup, example prompts, failure‑mode defenses, and options for Outlook and research enrichments.

![Email Autodelegator high‑level architecture | method=gen_ai | model="crivera/sketch-lora" | prompt="Minimalist hand‑drawn architecture: Gmail/Outlook triggers -> Context (SOPs, preferences) -> LLM classify+extract -> Human‑in‑the‑loop gate -> Task manager (Asana/TickTick/Notion). Optional branches: Autodrafter reply; Research enrichment; Logging/analytics. Monochrome ink." | aspect_ratio="16:9" | output_format=png ]()

What we’ll build
- Inputs: Gmail (or Outlook) email threads
- Context: your “User Manual,” calendar constraints, and revealed preferences
- Brain: an LLM that determines actionability, extracts owners/dates, and proposes “Above & Beyond” items
- Outputs: tasks created in Asana (we’ll demo Asana; TickTick/Notion are similar)
- Safety: a review lane for sensitive/ambiguous emails
- Ops: logging, error handling, and cost control

Scope and constraints
- We’ll show Gmail first (OAuth or IMAP). Outlook works with Microsoft 365/Graph in n8n with the same flow.
- We’ll pin versions and recommend low‑temperature, deterministic LLM settings.
- We’ll avoid vendor lock‑in via n8n exportable JSON workflows and simple HTTP calls.

---

Architecture in brief

Design goals
- Configurable: different clients delegate differently; prompts, allowlists, and outputs must be editable.
- Human in the loop: false positives are tolerable; false negatives (missed tasks) are not.
- Cost‑efficient: heavy Zapier usage can reach ~$2k/month; self‑hosted n8n often runs for ~$10/month infra (+ LLM tokens ~$20–$30).
- Private: self‑host n8n and use local DB; optionally swap in local LLMs for sensitive workloads.
- Upgrade‑friendly: models change; keep your prompts portable and your workflow exportable.

Flow
1) Trigger: New email in Gmail/Outlook
2) Normalize/Context: fetch user SOP, preferences (e.g., travel booking rules), and recent sent mail for writing style if drafting
3) Classify: LLM judges importance and actionability; extracts owner, due date, priority
4) Gate: route high‑confidence items straight to tasks; route low‑confidence to a review queue
5) Create: write tasks to Asana/TickTick/Notion with links back to the original email
6) Optional: autodrafter reply; lightweight research enrichment; logging to Airtable/DB

![n8n Gmail trigger node | method=search | query="n8n gmail trigger node screenshot" | prompt="prefer official docs screenshots"]()

---

Reproducible setup

Environment
- OS: Linux x86_64 or macOS (Apple Silicon works)
- Docker: 24.x
- n8n: 1.49.1
- Postgres: 16
- OpenAI (gpt-5-mini) or Gemini (gemini-2.5-flash)
- Asana PAT for task creation
- Optional: Airtable API key for context/logging

Step 1 — Bootstrap n8n with Postgres

docker-compose.yml

version: "3.8"
services:
  postgres:
    image: postgres:16.3
    environment:
      POSTGRES_USER: n8n
      POSTGRES_PASSWORD: n8npass
      POSTGRES_DB: n8n
    volumes:
      - ./db:/var/lib/postgresql/data
    ports:
      - "5432:5432"
  n8n:
    image: n8nio/n8n:1.49.1
    environment:
      DB_TYPE: postgresdb
      DB_POSTGRESDB_HOST: postgres
      DB_POSTGRESDB_PORT: 5432
      DB_POSTGRESDB_DATABASE: n8n
      DB_POSTGRESDB_USER: n8n
      DB_POSTGRESDB_PASSWORD: n8npass
      N8N_HOST: localhost
      N8N_PORT: 5678
      WEBHOOK_URL: http://localhost:5678/
    ports:
      - "5678:5678"
    depends_on:
      - postgres
    volumes:
      - ./n8n:/home/node/.n8n

Commands

mkdir -p autodelegator/{db,n8n}
cd autodelegator
docker compose up -d
# Visit http://localhost:5678 to set up n8n

Step 2 — Connect Gmail (or Outlook)
- Gmail: In n8n, add “Gmail Trigger” and configure OAuth (Google Cloud credentials) or use “IMAP Email” node with an app‑specific password.
- Outlook: Use “Microsoft Outlook 365 Trigger” node with Graph permissions.

Tip: Start with a label‑based filter (e.g., only process emails with label “AI‑Review” that you or your EA apply while piloting).

![n8n Gmail Trigger filter setup | method=search | query="n8n Gmail Trigger filter label settings screenshot" | prompt="prefer official docs screenshots"]()

Step 3 — Add a Function node to normalize the email

This ensures consistent input to the LLM (thread id, subject, plain text, sender, link).

Example (n8n Function node, JavaScript)

return items.map(item => {
  const msg = item.json;
  return {
    json: {
      email: {
        threadId: msg.threadId || msg['gmail-threadId'] || null,
        subject: msg.subject || '',
        from: msg.from || '',
        to: msg.to || '',
        date: msg.date || '',
        snippet: msg.snippet || '',
        plain: msg.text || msg.plainText || '',
        html: msg.html || '',
        link: msg.permalink || msg.messageUrl || ''
      }
    }
  };
});

Step 4 — Fetch context (SOPs, preferences, calendar hints)

Options:
- Airtable: store a “User Manual” (tone, do/don’t do), key contacts, meeting slots
- Notion/Coda: similar; or use Postgres to keep it local

Example: Airtable “UserManual” base with fields:
- PriorityRules (JSON)
- EscalationRules (JSON)
- WritingSamplesSource (“gmail_sent”, “file_id:abc”)
- TaskManager (“asana”, “ticktick”, “notion”)
- DelegateStyle (“EA‑maximalist” | “EA‑conservative”)

Step 5 — LLM classification and extraction

We’ll call OpenAI “Responses API” with a structured schema to reduce parsing errors.

n8n “HTTP Request” node
- Method: POST
- URL: https://api.openai.com/v1/responses
- Headers: Authorization: Bearer {{ $env.OPENAI_API_KEY }}, Content-Type: application/json
- Body (RAW JSON):

{
  "model": "gpt-5-mini-2024-07-18",
  "temperature": 0.0,
  "response_format": {
    "type": "json_schema",
    "json_schema": {
      "name": "autodelegator_v1",
      "schema": {
        "type": "object",
        "properties": {
          "actionable": { "type": "boolean" },
          "confidence": { "type": "number" },
          "owner": { "type": "string", "enum": ["client", "ea", "ai"] },
          "title": { "type": "string" },
          "description": { "type": "string" },
          "due_date_iso": { "type": ["string","null"], "format": "date-time" },
          "priority": { "type": "string", "enum": ["low","normal","high","urgent"] },
          "email_summary": { "type": "string" },
          "above_and_beyond": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "title": { "type": "string" },
                "description": { "type": "string" }
              },
              "required": ["title","description"]
            }
          },
          "proposed_reply": { "type": ["string","null"] }
        },
        "required": ["actionable","confidence","owner","title","description","email_summary","above_and_beyond","priority"]
      }
    }
  },
  "input": [
    {
      "role": "system",
      "content": "You are an EA coach. Decide if an email implies one or more actionable tasks. Prefer false positives over false negatives because a human will review tasks. Respect the user's SOPs provided in <sop> and revealed preferences in <prefs>. If drafting a reply, mimic the style of <writing_sample>."
    },
    {
      "role": "user",
      "content": [
        { "type": "text", "text": "Email:\n<email>{{ $json.email | json }}</email>\n\n<sop>{{ $json.sop }}</sop>\n<prefs>{{ $json.prefs }}</prefs>\n<delegate_style>{{ $json.delegate_style }}</delegate_style>\n" }
      ]
    }
  ]
}

Prompt notes
- Keep temperature at 0.0 for determinism.
- Use SOPs and “delegate_style” to tune aggressiveness.
- If you want suggested replies, add a writing sample: retrieve a few recent sent emails on the topic and include them in <writing_sample>.

Google Gemini alternative (n8n “HTTP Request” to https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent, model: gemini-2.5-flash, temperature: 0, with a similar JSON schema enforced via tool‑use or by validating the JSON in a separate node).

Step 6 — Human‑in‑the‑loop gate

Add an IF node:
- If actionable == true AND confidence >= 0.6 → auto‑create task
- Else → send to “Review”:
  - Post to a Slack channel/Telegram bot for EA confirmation
  - Or write a “Proposed Tasks” row in Airtable/Notion

Step 7 — Create the task in Asana

![n8n Asana create task node | method=search | query="n8n Asana create task node screenshot" | prompt="prefer official docs screenshots"]()

n8n “HTTP Request” node (or Asana node)
- POST https://app.asana.com/api/1.0/tasks
- Headers: Authorization: Bearer <ASANA_PAT>, Content-Type: application/json
- Body:

{
  "data": {
    "projects": ["<ASANA_PROJECT_ID>"],
    "name": "{{ $json.title }}",
    "notes": "{{ $json.description }}\n\nEmail summary:\n{{ $json.email_summary }}\n\nOriginal email: {{ $json.email.link }}",
    "assignee": "{{ $json.owner === 'ea' ? '<EA_ASANA_GID>' : '<CLIENT_ASANA_GID>' }}",
    "due_on": "{{ $json.due_date_iso ? $json.due_date_iso.split('T')[0] : null }}",
    "custom_fields": {
      "<PRIORITY_FIELD_ID>": "{{ $json.priority }}"
    }
  }
}

Optional “Above & Beyond” subtasks
Loop over above_and_beyond and create Asana subtasks under the main task.

Step 8 — Logging and observability
- Write a row per decision to Airtable/Postgres: email threadId, actionable, confidence, route (auto/review), task_id, timestamps.
- This powers weekly QA: sample 50 decisions, compare against EA feedback, adjust confidence thresholds and prompt.

---

Prompt templates you can reuse

Classifier (system)

You are an expert executive assistant and delegation coach. Given the raw email and the user’s SOP and preferences:
- Decide if the email implies an actionable item (prefer recall over precision; a human reviews tasks).
- Extract a clear, single‑owner task title and a concise, useful description.
- Set priority conservatively: only “urgent” if time‑critical or blocking.
- Guess due_date when obvious from the thread; otherwise null.
- Suggest “Above & Beyond” tasks that would meaningfully de‑risk or prepare next steps (optional lane).
- If safe and useful, propose a draft reply in the client’s tone.

Classifier (user; variables injected)

<sop>{{ SOP_JSON }}</sop>
<prefs>{{ PREFS_JSON }}</prefs>
<delegate_style>{{ EA_MAXIMALIST_OR_CONSERVATIVE }}</delegate_style>
<email>{{ EMAIL_JSON }}</email>
<writing_sample>{{ WRITING_SAMPLES }}</writing_sample>

Autodrafter reply (optional)
- Retrieve 1–3 sent emails by the client on similar topics (style grounding)
- Ask LLM to produce a short reply referencing the email thread, cc’ing the EA if appropriate
- Always keep autodrafter in review mode initially to build trust

![Autodrafter flow | method=gen_ai | model="crivera/sketch-lora" | prompt="Simple diagram: Email -> retrieve sent samples -> LLM draft -> human approval -> send via Gmail/Outlook API. Monochrome." | aspect_ratio="16:9" | output_format=png | seed=7]()

---

Evaluation, costs, and tradeoffs

What to measure
- Actionability precision/recall: sample decisions weekly; aim to minimize false negatives
- Review rate: target <30% routed to review after the first week
- Turnaround: time from email arrival to task created
- Token cost/email: track by provider; cache long prefixes if you can (stable prompts reduce cost)
- Human corrections: feed back to prompt/thresholds

Observed economics (typical)
- Infra: ~$10/month self‑host (e.g., ~$5 server + ~$5 DB)
- LLM tokens: ~$20–$30/month for moderate volume
- Compared to Zapier: heavy usage can approach ~$2k/month; n8n’s import/export + self‑hosting avoids that scale curve

Common failure modes (and mitigations)
- Sales spam becomes “actionable”
  - Mitigation: domain/keyword denylist; Gmail label filter; low confidence route to review
- One size fits all prompt
  - Mitigation: per‑client “delegate_style” and SOP; per‑inbox allowlists
- No task manager in use
  - Mitigation: require one (Asana/TickTick/Notion). Without it, autodelegation cannot create accountability.
- Model churn breaks behavior
  - Mitigation: pin model versions, low temperature, keep prompts under version control, re‑QA after upgrades
- Privacy needs
  - Mitigation: self‑host; redact PII before LLM; for medical/financial contexts, consider local models for triage and use cloud models only for non‑sensitive content

Where this approach is not a fit
- Highly sensitive inboxes where cloud LLMs are prohibited and local models cannot yet meet accuracy needs
- Orgs unwilling to adopt a task manager or grant the EA enough authority to act on tasks

---

Extensions you’ll likely want next

- Revealed Preferences SOP Generator
  - Use Gmail searches (e.g., older flight/hotel confirmations) → extract patterns → generate a “Flight/Hotel Booking SOP”
  - Store as JSON and feed into the classifier
  - This yields scarily accurate “taste” predictions and improves recommendations

![Revealed Preferences pipeline | method=gen_ai | model="crivera/sketch-lora" | prompt="Pipeline sketch: Gmail search -> parse receipts -> LLM analyze -> SOP JSON -> used by autodelegator. Monochrome." | aspect_ratio="16:9" | output_format=png | seed=23]()

- Call/Meeting Autodelegator
  - Pull latest meeting transcript (Fireflies/Zoom/Meet) → extract action items → create tasks with owners and due dates → post brief to Notion/Coda

- Weekly Review AI
  - Aggregate last week’s tasks + calendar → suggest high‑leverage work and delegation ideas tied to quarterly goals

- Screenshot/Voice Autodelegator
  - Mac/iOS Shortcuts to turn screenshots/voice notes into structured tasks via the CLEAR framework

---

Import/export and sharing
One reason we recommend n8n is that every workflow can be exported as JSON and shared as an artifact your teammates can import and adapt. This is invaluable for building a library of reusable “lego blocks” (e.g., “VC funding lookup,” “GitHub trending triage,” “YouTube topic scout”).

![n8n workflow export | method=search | query="n8n export workflow json screenshot" | prompt="prefer official docs screenshots"]()

---

Appendix: Minimal n8n workflow skeleton (JSON excerpt)

This is a shortened excerpt to show node shapes; build yours via the UI, then export for version control.

{
  "name": "Email Autodelegator (Gmail → LLM → Asana)",
  "nodes": [
    { "id": "GmailTrigger", "type": "n8n-nodes-base.gmailTrigger", "parameters": { "labelIds": ["AI-Review"] } },
    { "id": "Normalize", "type": "n8n-nodes-base.function", "parameters": { "functionCode": "// see Step 3 code above" } },
    { "id": "FetchSOP", "type": "n8n-nodes-base.httpRequest", "parameters": { "url": "https://api.airtable.com/v0/app123/UserManual?filterByFormula=...", "authentication": "predefinedCredentialType" } },
    { "id": "LLMClassify", "type": "n8n-nodes-base.httpRequest", "parameters": { "url": "https://api.openai.com/v1/responses", "method": "POST", "jsonParameters": true } },
    { "id": "Gate", "type": "n8n-nodes-base.if", "parameters": { "conditions": { "boolean": [ { "value1": "={{ $json.actionable }}" } ], "number": [ { "value1": "={{ $json.confidence }}", "operation": "largerEqual", "value2": 0.6 } ] } } },
    { "id": "CreateTask", "type": "n8n-nodes-base.httpRequest", "parameters": { "url": "https://app.asana.com/api/1.0/tasks", "method": "POST", "jsonParameters": true } },
    { "id": "ReviewQueue", "type": "n8n-nodes-base.slack", "parameters": { "channel": "#email-review", "message": "Proposed task: {{ $json.title }}\n{{ $json.description }}" } },
    { "id": "Log", "type": "n8n-nodes-base.postgres", "parameters": { "query": "INSERT INTO decisions(...)" } }
  ],
  "connections": {
    "GmailTrigger": { "main": [ [ { "node": "Normalize", "type": "main", "index": 0 } ] ] },
    "Normalize": { "main": [ [ { "node": "FetchSOP", "type": "main", "index": 0 } ] ] },
    "FetchSOP": { "main": [ [ { "node": "LLMClassify", "type": "main", "index": 0 } ] ] },
    "LLMClassify": { "main": [ [ { "node": "Gate", "type": "main", "index": 0 } ] ] },
    "Gate": {
      "main": [
        [ { "node": "CreateTask", "type": "main", "index": 0 } ],
        [ { "node": "ReviewQueue", "type": "main", "index": 0 } ]
      ]
    },
    "CreateTask": { "main": [ [ { "node": "Log", "type": "main", "index": 0 } ] ] },
    "ReviewQueue": { "main": [ [ { "node": "Log", "type": "main", "index": 0 } ] ] }
  }
}

---

What changes once this is live
- Default to delegation: actionable emails become tasks by default—no more “read but not queued.”
- EAs can scale: let automations handle the repetitive; humans handle exceptions and creative work.
- Less vendor lock‑in: exportable JSON workflows and self‑hosting reduce platform risk and cost spikes.
- Trust grows: starting with a review lane builds confidence; over time you can auto‑route most emails.

Limitations to keep in mind
- You still need a task manager. If you won’t adopt Asana/TickTick/Notion, stop here.
- Some inboxes need heavier redaction or on‑prem models for privacy.
- Model quality and APIs evolve—pin versions, keep prompts under version control, and re‑QA regularly.

Next steps (CTA)
- Stand up the n8n + Postgres stack and wire a label‑filtered Gmail Trigger.
- Paste in the classifier prompt and JSON schema above; start with OpenAI gpt‑5‑mini at temperature 0.0.
- Route low‑confidence items to a review channel for one week; then raise thresholds.
- Export your n8n workflow JSON and share internally as a template. Add autodrafter and revealed preferences next.

If you adapt this flow for Outlook, TickTick, or Notion—or build a great SOP extractor—export your n8n JSON and share it with your team. The fastest way to level up everyone’s delegation is a library of importable, remixable workflows.