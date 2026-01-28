# Agent Insights from the Front Lines

---

## Insights

- Workflows as tools
- Dynamic context retrieval & ad hoc few shotting
- Revealed preferences extraction as agent context
- Unstructured data → structured data → context
- Unstructured data → enriched data → context
- Semantic routing to human/AI resources
- Context-finding ops as a tool in multitool workflows
- The models are good enough, it's just the tools that usually aren't
- Data legibility for agent enablement
- A treasure trove of context hiding in plain sight
- Agent Teammates & Co-Pilots → Half a pizza teams
- Build ideas
    - Create spreadsheet
    - Email autodrafter
    - Hotel SOPs
    - Gifting
    - Email autodrafter?
    - Semantic router
    - Summarize doc & send email
    - Multitool
    - Data legibility for agent enablement
    - Activity Watch
    - Screenshot assistant

---

## AI Experiments

---

## Actual Siri / ALL THE APIS

[Image: Four iPhone screenshots arranged horizontally showing conversational AI interactions.
1. The first screenshot shows a query: "Can you do some research on recent podcast appearances by Jonathan Swanson from Athena... and then put the results in a new Apple Note?" followed by an AI response confirming the compilation and note creation with details like podcast title '#038 Athena: EA Delegation'.
2. The second screenshot shows queries about "last wire transfer from Hinge Health" (AI responds $45,000 sent Oct 26, 2023), "Puerto Rican LLC's EIN" (AI responds 66-0943203), "Did Nathan respond to Ace's email?" (AI responds "Yes, Nathan responded to Ace's email."), "How much was it the last time I bought Greek food?" (AI responds "$26 on May 2, 2024."), "find Arthur Kaneko's address in my email?" (AI responds "Arthur Kaneko's address is 10575 Grand Avenue Oakland California"), and "check apple notes for my n8n render api key?" (AI responds with the key).
3. The third screenshot shows a query: "What was the most recent physical mail item I received?" and an AI response detailing a letter from TD Ameritrade regarding options trading privileges, its categorization, and instructions for viewing the full mail piece.
4. The fourth screenshot shows a query: "Can you write a letter to Jonathan from Athena saying we appreciate our business collaboration but make it mostly Wu tang references?" followed by a successful AI response confirming the letter was written and a preview of the generated letter on a separate screen, which includes Wu-Tang Clan references like "bring the ruckus" and "diversify our portfolio of influence".]

---

## The more you connect, the more context you have, and the more you can do

[Image: A grid of 28 application logos on a dark background. The logos include: 31 Calendar, Asana, Zoom, Slack, Amazon, Health, Notion, Earth Class Mail, Gmail, HubSpot, Stripe, Mercury, Plaid, Ramp, Lob, Pinecone, Browserless, Exa, Twitter, Semrush, Upwork, Google Drive, SerpApi, LinkedIn, Apollo.io, MultiOn, iCloud, People Data Labs, Podchaser, point.me. The logos illustrate the wide range of services and data sources that can be connected.]

---

## Multi-Tool Use

[Image: Two sets of iPhone screenshots paired with application logos, demonstrating multi-tool AI use.
The left side shows an iPhone chat interface with a user asking "Can you summarize some academic research about the endowment effect and put it in an email draft to Kristen?". The AI responds that the draft has been prepared. Next to this interaction, there are three application logos: `scite_`, `exa`, and `Gmail`, indicating these tools were used.
The right side shows another iPhone chat interface with a user asking "@cy_openai_bot Find the url of the JK asana google sheet in my inbox and dm it to Carlos". The AI responds, "The URL of the JK Asana Google Sheet has been sent to Carlos.". Next to this interaction, there are three application logos: `Gmail`, `Google Drive`, and `slack`, indicating these tools were used.]

---

## Workflows as Agent Tools

"hey ai, can you research companies similar to athena (athenago.com) and get their monthly pricing, audience, mission, tagline, and 1 testimonial... and then create a new google spreadsheet with all the data?"
<!-- .element: class="fragment" -->

[Image: A screenshot of a workflow in action. The top left shows an Arc browser window with a Google Sheet titled "Athena Competitor Research". The spreadsheet contains columns like `title`, `url`, `description`, `company_name`, `company_mission`, `tagline`, `audience`, and `testimonial`, filled with data for various companies. On the right, an "Executions" panel shows that a task "Find Similar Companies/Content & Create Google... Tool" was "Succeeded in 57.13s | ID#34615" with "<1 min latency". Below this, a reaction image shows a person looking at a screen with the text "holy shit".]

---

## Derived Context

"Buy me a flight" with ChatGPT sucks, but if you analyze every past flight in the inbox and create an SOP, it just magically works
<!-- .element: class="fragment" -->

[Image: A workflow diagram illustrating how to derive flight preferences. The flow starts with "Gmail - Get Last X Reservation Emails" (33 items), then moves to "Edit Fields" (manual, 33 items), "Limit" (33 items), "Analyze Flights" (OpenAI, 25 items), and "Aggregate Analysis" (25 items). This leads to a "Gmail (Deactivated)" step for sending messages. From "Aggregate Analysis", a parallel path goes to "Markdown" (HTML to Markdown), then "Google Docs - Create Doc", and finally "Google Docs - Add Content" for updating the document. The workflow aims to build an SOP from past emails.]
<!-- .element: class="fragment" -->

Google Doc of flight preference is referenced by flight assistant ↑

---

## Dynamic Few Shots

"Write like me" or "write like my EA" doesn't work, even with examples of my writing—I use emoji with my close colleagues but not my attorney
<!-- .element: class="fragment" -->

[Image: A workflow diagram illustrating dynamic few-shot learning for email generation. The workflow begins with a "Client/EA Router" (mode: Rules) with branches for "If EA should..." and "If client should...". One path proceeds from "If client should..." to "Client Email Fields" (manual), then "Find Client Emails" (Gmail, getAll: message), "Limit", and finally "Generate Client Email Missive - Create Draft from Client" (OpenAI). The other path from "If EA should..." goes to "Generate Email Search String" (OpenAI), "EA Email Fields" (manual), "Find EA Emails" (Gmail, getAll: message), "Limit1", and concludes with "Generate EA Email Missive - Create Draft from EA" (OpenAI).]
<!-- .element: class="fragment" -->

Getting previous emails I've sent to THAT person or a semantically similar person / conversion and passing into prompt solves this

---

## Context Hiding in Plain Sight

Gift shopping is hard, but an LLM can parse every purchase email where shipping address wasn't you, create structured data, build recipient profiles, and pattern-match to empower agent to shop
<!-- .element: class="fragment" -->

[Image: A complex workflow diagram for automated gift shopping. The process starts with "Gmail - Get Purchase Confirmation Emails" (115 items), followed by "Clean Up Email Data" (manual, 115 items), "Limit" (115 items), and "Categorize Gift vs. Personal" (OpenAI, 115 items). This leads to a "Merge" (combine, 115 items) node. The path continues through "Filter for Gifts", "Create JSON" (OpenAI), "Split JSON into Items", "Tavily - Enrich Gift Descriptions", "Filter for Meghan's Gifts", "Aggregate1", "Browserless - Scrape Gift Recs Website", "Create HTML of Gift Recs" (OpenAI), and finally "Email Results" (send: message).]
<!-- .element: class="fragment" -->

Recommendations are legitimately next-level, selected more often than human-researched gift ideas that normally take 4-12 hours

---

## Messy Data Becomes an Enrichable Asset

My inbox won't tell you what gyms or spas I like, or what type of places I go to for haircuts ... but my credit card statement + LLM + APIs + web scraping will
<!-- .element: class="fragment" -->

[Image: A workflow diagram illustrating how to enrich messy data. The flow starts with "Teller API Call", then "Filter Transactions" (1 item), "Trim Fields" (manual, 1 item), and "Aggregate Transactions" (1 item). This feeds into an "OpenAI" step, followed by "SerpAPI Google Local", then "Most Recent Haircut" (OpenAI) and "Derive Haircut Data" (1 item). An "If" condition splits the path, leading to "Current Location" (OpenAI) and finally "MultiOn - Create Session" (1 item).]
<!-- .element: class="fragment" -->

Plus you can automate things like "schedule a haircut 6 weeks from the date of the most recent haircut transaction"

---

## Data Legibility is a Crucial Investment

Given the right context, LLMs can connect dots like turning logs into daily employee reports... time to start recording digital activity, calls, IRL convos, etc...
<!-- .element: class="fragment" -->

[Image: A diagram illustrating how various data sources feed into an AI prompt to generate contextual insights and tasks. On the left, a list of data sources: "Browser Data", "App Data", "Network Data", and "Screenshots". These point to a central "prompt" text box, which contains an example of "Activity Watch Data" showing a log of activities with timestamps, app names, titles, and durations (e.g., n8n, Gmail, Beeper, Arc, X, Youtube). Arrows extend from the prompt to "Company Context", "Project Mgr Data", "Personal Context", and "Messages Context". On the right, two iPhone screenshots display outputs from a "CYAI bot". The top screenshot shows sections like "Tasks Completed Today", "In-Progress Tasks", "Waiting/Blocked", and "Activity Watch Completed Tasks" with detailed bullet points. The bottom screenshot shows "Feedback on current delegations" and "Delegation ideas for next week" with descriptive text.]

---

## AI as Teammate

Assign tasks in project manager to AI, it sends results to human for review
<!-- .element: class="fragment" -->

[Image: Two side-by-side screenshots of a task management interface (similar to Notion).
The left screenshot shows a task titled "Write a short substack newsletter based on the research paper in my vector database on financial incentives for medication adherence", with an arrow labeled "AI" pointing towards it, indicating this task is assigned to AI.
The right screenshot shows a task titled "Review first draft of newsletter on financial incentives for medication adherence", with an arrow labeled "Human" pointing towards it, and a "CY" initial, indicating this task is assigned to a human for review. Below the task, the actual content of the drafted newsletter is visible, discussing financial incentives for medication adherence, mentioning "Wellth" as an example, and discussing the ethics and long-term effects.]

---

## LLMs for Task/Value Discovery & Routing to Right Resource

AI discovers tasks in inbox, calendar, etc and creates task in project manager for another AI or human resource
<!-- .element: class="fragment" -->

[Image: A screenshot of a "CYCL To-Do List" in a task management application. The list contains numerous entries, mostly "Review autodelegator tasks from [contact name] email re:..." or "Review autodrafter email from [contact name] email re:...". Examples include reviewing tasks from Greg Kamradt, Steven Goh, Chris Ho, Pipedream, Maverick Kuhn, Caleb - Firecrawl, Jeffrey Wang, Bharat Vasan, Nathan Labenz, and David Ford. There's also a task to "Answer laptop specification questions for Carlos as Chris - via email comment". All tasks have a small "C" icon next to them.]
<!-- .element: class="fragment" -->

- > 50% of my EA's work is delegated by an AI <!-- .element: class="fragment" -->
- > 10% of AI-discovered tasks are completed by AI <!-- .element: class="fragment" -->
- AI proactively reviews human-assigned tasks and tries to take part/all of them from the human pre-emptively <!-- .element: class="fragment" -->
- Similar to healthcare ops concept of "practicing at the top of your license" <!-- .element: class="fragment" -->

---

## Co-Pilot w/ Contextual Data + Assistance

AI reads browser/proxy/app data + screenshots, generates a prompt to assistant
<!-- .element: class="fragment" -->

[Image: A screenshot displaying a browser window and an overlaid Telegram chat. The browser window shows a Marriott Bonvoy website page titled "Summer Adventures Ahead" for Bali, with dates Thu, 16 May - Tue, 18 Jun, and hotel options being presented. The Telegram chat, labeled "CYAI bot", is dynamically providing hotel recommendations based on the user's browser activity, listing options like "Swell Hotel, Pool Bar & Restaurant" and "Senetan Villas" with ratings and locations, and mentioning the user's Marriott Bonvoy Gold Elite status.]
<!-- .element: class="fragment" -->

- "Based on what the person is doing, what data would be useful for the person?" <!-- .element: class="fragment" -->
- Get Marriott account #, surface hotel SOP, and run assistant search for other hospitality options <!-- .element: class="fragment" -->
- AI autonomously prompts AI based on ambient observation <!-- .element: class="fragment" -->

---

## Co-Pilot Takes the Wheel

AI reads browser/proxy/app data + screenshots, generates a prompt to assistant, starts **working**
<!-- .element: class="fragment" -->

[Image: A screenshot showing a browser window open to a document in a Notion-like interface, titled "Meeting Bios AI", with sections for Purpose, Problem & Context, and Goals & Success Criteria. On the right, a Telegram chat window is partially visible, showing "CYAI bot" output, similar to the previous slide, listing hotel recommendations. The combination of the open document and the AI chat suggests that the AI is generating content or assistance based on the user's current activity (working on a product spec).]
<!-- .element: class="fragment" -->

- "Looks like they're writing a product spec, let's grab the best resources on that and do it for them" <!-- .element: class="fragment" -->
- Get data from best-in-class reference templates / best practices (e.g. podcasts, substacks, etc—even for skills the user doesn't have)—then add context from recent emails, messages, call transcripts (continuously logged in memory.txt), <!-- .element: class="fragment" -->
- EA with no PM training writes a pretty solid PRD <!-- .element: class="fragment" -->
- creates pretty solid FB ads <!-- .element: class="fragment" -->
- outperformed my full-time recruiter <!-- .element: class="fragment" -->

---