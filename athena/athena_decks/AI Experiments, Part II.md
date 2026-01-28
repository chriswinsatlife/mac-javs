# AI Experiments, Part II

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

[Image: Four screenshots of iPhone text message conversations with a contact named CYAI.
**Screenshot 1 (left)** shows a conversation asking CYAI to research podcast appearances by Jonathan Swanson, put results in an Apple Note, then asks about a wire transfer from Hinge Health ($45,000 sent Oct 26, 2023), a Puerto Rican LLC's EIN (66-0943203), Nathan's response to an email (Yes), the last Greek food purchase ($26 on May 2, 2024), Arthur Kaneko's address (10575 Coolidge Oakland California), and an n8n render API key (n8napie22e6d948c1e-baf4842587a2287e18b07f2c18ad182).
**Screenshot 2 (middle top)** shows a conversation asking CYAI about the most recent physical mail item received, which was from TD Ameritrade regarding options trading privileges.
**Screenshot 3 (right)** shows a conversation asking CYAI to write a letter to Jonathan from Athena with "mostly Wu tang references." A draft letter is then shown, incorporating phrases like "bring the ruckus" and referencing the "Wu-Tang Clan" and "Wu-Tang's beats."]

---

## The more you connect, the more context you have, and the more you can do

[Image: A grid of 29 application logos, demonstrating a wide range of connected services. The logos include:
**Top Row:** 31 Calendar, Asana, Zoom, Slack, Amazon, Health
**Second Row:** Notion, Earth Class Mail, Gmail, HubSpot, Stripe
**Third Row:** Lob, Pinecone, Mercury, Plaid, Ramp
**Fourth Row:** Google Drive, Browserless, Exa, Twitter, Semrush, Upwork
**Fifth Row:** iCloud, SerpApi, LinkedIn, Apollo.io, MultiOn
**Bottom Row:** People Data Labs, Podchaser, Point Me.
This visual conveys the idea that connecting more tools leads to more available context and expanded capabilities.]

---

## Multi-Tool Use

[Image: Two sets of iPhone text message conversations with a contact named CYAI, demonstrating multi-tool integration.
**Left set:** A conversation with CYAI where the user asks to "summarize some academic research about the endowment effect and put it in an email draft to Kristen?" The next message confirms, "The draft for the email to Kristen summarizing academic research about the endowment effect has been prepared." Adjacent to this conversation are logos for Scite, Exa, and Gmail, indicating the tools used.
**Right set:** A conversation with CYAI where the user asks "@cy_openai_bot Find the url of the JK asana google sheet in my inbox and dm it to Carlos". The next message from CYAI confirms, "The URL of the JK Asana Google Sheet has been sent to Carlos." Adjacent to this conversation are logos for Gmail, Google Drive, and Slack, indicating the tools involved in this task.]

---

## Workflows as Agent Tools

"hey ai, can you research companies similar to athena (athena.com) and get their monthly pricing, audience, mission, tagline, and 1 testimonial... and then create a new google spreadsheet with all the data?"
<!-- .element: class="fragment" -->
[Image: A screenshot showing a web browser tab open to a Google Sheet titled "Athena Competitor Research" and a sidebar panel labeled "Find Similar Companies/Content & Create Google... Tool" with "Executions".
The Google Sheet displays columns like `title`, `url`, `description`, `company_name`, `company_mission`, `tagline`, `audience`, and `testimonial`. Rows contain data for companies like Tandemly, The After Co, Delegated, Founder Coach, Virtual Assistant Management, Virtual Assistant | Acclivity, and The VA Loft.
The "Executions" panel shows two successful executions, both "20 May at 09:51:46 Succeeded in 57.13s", with a note "<1 min latency" next to the second one.
Below this, a small circular profile photo of a man (likely Bill Gates) is shown next to the text "holy shit". This image illustrates an AI-driven workflow generating research and data in a spreadsheet very quickly.]

---

## Derived Context

"Buy me a flight" with ChatGPT sucks, but if you analyze every past flight in the inbox and create an SOP, it just magically works
<!-- .element: class="fragment" -->
[Image: A detailed workflow diagram showing a sequence of interconnected nodes representing a process to derive context for flight preferences.
The flow starts with "Gmail - Get Last X Reservation Emails" (33 items), then "Edit Fields" (33 items), followed by "Limit" (25 items).
These items then feed into "Analyze Flights" which uses "OpenAI Message Model" and "Aggregate Analysis", and the output goes to "Gmail (Deactivated) - send: message".
In parallel or as a sub-process, an output from "Analyze Flights" also goes to "Markdown HTML to Markdown", then "Google Docs - Create Doc", and finally "Google Docs - Add Content".
This diagram illustrates how past flight information can be processed to create structured data and Standard Operating Procedures.]

Google Doc of flight preference is referenced by flight assistant ↑

---

## Dynamic Few Shots

"Write like me" or "write like my EA" doesn't work, even with examples of my writing—I use emoji with my close colleagues but not my attorney
<!-- .element: class="fragment" -->
[Image: A workflow diagram illustrating a "Dynamic Few Shots" process for generating emails based on context.
The workflow begins with a "Client/EA Router" node, which has rules to determine whether to use "If EA shoul..." or "If client sh...". This branches into two parallel paths.
**Top Path (Client Email):** "Client Email Fields" (manual) → "Find Client Emails" (getAll: message) → "Limit" → "Generate Client Email Missive - Create Draft from Client".
**Bottom Path (EA Email):** "Generate Email Search String" (complete: chat) → "EA Email Fields" (manual) → "Find EA Emails" (getAll: message) → "Limit1" → "Generate EA Email Missive - Create Draft from EA".
Both "Generate Client Email Missive" nodes point to a POST request to `https://public.missiv...Po`.
The diagram shows how different email contexts (client vs. EA) are handled to create a draft, likely by incorporating historical email data for stylistic and contextual consistency.]

Getting previous emails I've sent to THAT person or a semantically similar person / conversation and passing into prompt solves this

---

## Context Hiding in Plain Sight

Gift shopping is hard, but an LLM can parse every purchase email where shipping address wasn't you, create structured data, build recipient profiles, and pattern-match to empower agent to shop
<!-- .element: class="fragment" -->
[Image: A complex workflow diagram titled "Context Hiding in Plain Sight" showing a process for AI-powered gift recommendations.
The flow starts with "Gmail - Get Purchase Confirmation Emails" (115 items).
It then proceeds through "Clean Up Email Data" (manual), "Limit", "Categorize Gift vs. Personal" (complete: chat), "Merge" (combine), "Filter for Gifts" (complete: chat).
Next, it moves to "Create JSON" (complete: chat), then "Split JSON into Items".
These items are then enriched by "Tavily - Enrich Gift Descriptions" (POST: `https://api.tavily.co..`).
The enriched items go to "Filter for Meghan's Gifts", then "Aggregate1".
Finally, the aggregated data leads to "Browserless - Scrape Gift Recs Website" (scrape: json), "Create HTML of Gift Recs" (complete: chat), and concludes with "Email Results" (send: message).
This diagram visualizes how purchase emails are transformed into structured data to generate gift recommendations.]

Recommendations are legitimately next-level, selected more often than human-researched gift ideas that normally take 4-12 hours

---

## Messy Data Becomes an Enrichable Asset

My inbox won't tell you what gyms or spas I like, or what type of places I go to for haircuts ... but my credit card statement + LLM + APIs + web scraping will
<!-- .element: class="fragment" -->
[Image: A workflow diagram illustrating how messy financial data can be enriched and used for automation.
The process begins with "Teller API Call", which feeds into "Filter Transactions" (Kept).
The filtered transactions then go through "Trim Fields" (manual) and "Aggregate Transactions" (1 item).
The aggregated data is then processed by "OpenAI" (complete: chat) and "SerpAPI Google Local" (GET: `https://serpapi.com/s...`).
The output from SerpAPI is used by "Most Recent Haircut" (complete: chat) and "Derive Haircut Data" (1 item).
A conditional "If" node follows "Derive Haircut Data" (true/false branches).
Both branches converge into "Current Location" (complete: chat), which then leads to "MultiOn - Create Session" (POST: `https://api.multion.a...`).
This diagram demonstrates using various tools to extract insights from transaction data and initiate actions.]

Plus you can automate things like "schedule a haircut 6 weeks from the date of the most recent haircut transaction"

---

## Data Legibility is a Crucial Investment

Given the right context, LLMs can connect dots like turning logs into daily employee reports... time to start recording digital activity, calls, IRL convos, etc...
<!-- .element: class="fragment" -->
[Image: A slide titled "Data Legibility is a Crucial Investment" showing how various data sources contribute to AI-generated daily reports.
On the left, there's a list of data sources: "Browser Data", "App Data", "Network Data", and "Screenshots", all pointing to a "prompt" text box.
The "prompt" text box contains a JSON-like log from ActivityWatch, an open-source time tracker, showing entries for various apps (`n8n`, `Gmail`, `Beeper`, `Arc`, `X`, `Youtube`) with timestamps, durations, and titles (e.g., "AL Syndicate Zap 1", "Inbox - Chris York", "Daniel Mason - Follow-up on Anon Access", "Building an AI Crew to Analyze Financial Data with CrewAI and n8n").
Arrows from this prompt and data sources lead to boxes labeled "+ Company Context", "+ Project Mgr Data", "+ Personal Context", and "+ Messages Context".
On the right, a screenshot of a CYAI chat interface titled "bot" shows a summary of daily activities organized into "Tasks Completed Today:", "In-Progress Tasks:", "Waiting/Blocked:", and "Activity Watch Completed Tasks:". Specific examples include upgrading SerpApi, reviewing autodrafter emails, creating n8n workflows for Telegram chats, brainstorming ideas for a Bill Gates Presentation, and following up with Daniel Mason.
Below this, another CYAI chat section provides "Feedback on current delegations", offering insights on practices like Sign-Off Notes and suggestions for improvement.]

---

## AI as Teammate

Assign tasks in project manager to AI, it sends results to human for review
<!-- .element: class="fragment" -->
[Image: Two side-by-side screenshots of project management cards, demonstrating AI task delegation and human review.
**Left card (AI task):** Labeled "AI" with a small person icon. It shows "Due Date" and a task description: "Write a short substack newsletter based on the research paper in my vector database on financial incentives for medication adherence".
**Right card (Human review):** Labeled "Human" with a different small person icon (CY). It shows "Due Date" and a task description: "Review first draft of newsletter on financial incentives for medication adherence". Below the title, the content of the newsletter draft is displayed, titled "Financial Incentives: A Game Changer in Medication Adherence".
The newsletter content discusses the ethics and effectiveness of financial incentives for medication adherence, referencing a systematic review and examples like "Wellth" (which uses loss aversion principles), and highlights outcomes like reduced hospital readmissions. It also touches on long-term effects.
This visual illustrates a workflow where AI drafts content and a human reviews it.]

---

## LLMs for Task/Value Discovery & Routing to Right Resource

AI discovers tasks in inbox, calendar, etc and creates task in project manager for another AI or human resource
<!-- .element: class="fragment" -->
[Image: A screenshot of a "CYCL To-Do List" interface, displaying numerous tasks, many of which are related to reviewing delegated work or email drafts.
The list includes tasks such as:
- "Review autodelegator tasks from Greg Kamradt email re: Re: Intro: Jordan <> Greg"
- "Review autodelegator tasks from Steven Goh email re: Re: Customers API"
- "Review autodegator tasks from Chris Ho email re: Re: Christine Carrillo Delegation Course"
- "Review autodelegator tasks from Pipedream email re: Please reconnect your TickTick account"
- "Review autodrafter email from Maverick Kuhn email re: Re: Chris x Thyself" (appears twice)
- "Review autodrafter email from Caleb - Firecrawl email re: Re: Just sent this to our engineer that is on ET"
- "Review autodelegator tasks from Greg Kamradt email re: Re: Chris/Robert <> Nicole"
- "Review autodelegator tasks from Jeffrey Wang email re: Re: Huge thanks!"
- "Review autodelegator tasks from Bharat Vasan email re: Re: Waitlist prioritization for BV"
- "Review autodelegator tasks from Nathan Labenz email re: Re: Re: Connecting: Krish (Fireflies.ai) <> Jon"
- "Answer laptop specification questions for Carlos as Chris - via email comment (Re: Laptop for Carlos)"
- "Review autodrafter email from David Ford email re: Re: Laptop for Carlos"
On the right side of the slide, there are three key statements:
- "> 50% of my EA's work is delegated by an AI"
- "> 10% of AI-discovered tasks are completed by AI"
- "AI proactively reviews human-assigned tasks and tries to take part/all of them from the human pre-emptively"
- "Similar to healthcare ops concept of 'practicing at the top of your license'"
This visual demonstrates the integration of AI into task management and delegation, highlighting its efficiency and proactive nature.]

---

## Co-Pilot w/ Contextual Data + Assistance

AI reads browser/proxy/app data + screenshots, generates a prompt to assistant
<!-- .element: class="fragment" -->
[Image: A split screenshot showing a web browser and a Telegram chat.
The **left side (web browser)** displays the Marriott Bonvoy website, specifically a page for searching hotels in "Bali" for dates "Thu, 16 May - Tue, 18 Jun" with "1 Room, 1 Guest". The page content includes "Summer Adventures Ahead" and a "Book Now" button.
The **right side (Telegram chat)** shows a conversation with "CYAI bot". The bot has provided several hotel recommendations for Bali, stating it "found several hotel options... that could meet your needs" for the specified dates, considering the user's Marriott Bonvoy Gold Elite status. Recommendations include "Swell Hotel, Pool Bar & Restaurant" (rating 4.7) and "Senetan Villas" (rating 4.5), and "AYANA Resort Bali" (5-star).
Adjacent to these, a text box on the right states:
"**"Based on what the person is doing, what data would be useful for the person?"**"
Followed by:
"- Get Marriott account #, surface hotel SOP, and run assistant search for other hospitality options"
And finally:
"AI autonomously prompts AI based on ambient observation"
This visual demonstrates an AI co-pilot observing user activity (browsing hotels) and proactively providing relevant information and prompting further assistance.]

---

## Co-Pilot Takes the Wheel

AI reads browser/proxy/app data + screenshots, generates a prompt to assistant, starts **working**
<!-- .element: class="fragment" -->
[Image: A screenshot of a document interface, resembling Notion, titled "Meeting Bios AI" within an "AI Projects Database". The document displays sections for "Purpose", "Problem & Context", and "Goals & Success Criteria", which are typically found in a product specification or project brief. The fields are currently empty, indicated by placeholder text such as "[In one sentence, explain the purpose of this project or idea]".
On the right side of the slide, text states:
"**"Looks like they're writing a product spec, let's grab the best resources on that and do it for them"**"
Followed by:
- "Get data from best-in-class reference templates / best practices (e.g. podcasts, substacks, etc—even for skills the user doesn't have)—then add context from recent emails, messages, call transcripts (continuously logged in memory.txt),"
- "EA with no PM training writes a pretty solid PRD"
- "creates pretty solid FB ads"
- "outperformed my full-time recruiter"
This visual illustrates an AI co-pilot identifying a user's intent (writing a product spec) and then autonomously leveraging various data sources to assist, even performing complex tasks beyond the user's direct skill set.]

---

## AI Delegation Analysis & Coaching

[Image: A screenshot of a spreadsheet titled "JK Asana Export & LLM Delegation Analysis" within a browser-like interface, along with a separate panel for summary and feedback.
The **spreadsheet** contains columns such as `name`, `notes`, `Category`, `Complexity`, `Scope`, `Intimacy`, `Account Access Req'd`, and `Recu`. Rows list various tasks like "KK: Fill out Asset inventory Security details", "IRS Notices JK 1040", "JS: Update Angel deals", "JK: Buy a car in Portugal project", "JK: Gather HELOC information", "HH: DBE Wifi / Internet".
A **summary table** within the spreadsheet is visible, showing "Area", "Count", "Share", and "Example Title". Key areas and their shares include:
- Admin: 35 (21%) - Example: JS: Update passwords
- Experiences & Travel: 31 (18%) - Example: France Long stay visa 2024
- Personal Finance: 24 (14%) - Example: JK: Update passwords: emails and financial accounts
- Relationships: 19 (11%) - Example: JS: Call Mayo Clinic to schedule JK's Executive Health Program
- Passion Projects: 18 (11%) - Example: JS: LF leader quotes on the importance of Time and an EA
- Finance: 16 (10%) - Example: JK: Job description for Director of Finance
- Physical Health: 12 (7%) - Example: KK: Plasmapheresis in Kona & Las Vegas
- Operations: 5 (3%) - Example: JS: Athena Project - JS's emails
- Product: 3 (2%) - Example: Voice delegation
- Learning/PKM: 2 (1%) - Example: JS: Draft email to Denis Groz on Kindle readings
- Bucket List: 1 (1%) - Example: DBE Prep List: Tom Clark + family
- Marketing: 1 (1%) - Example: COS: Post pool tiles ad on FB groups
- Sales: 1 (1%) - Example: JS: LF any connections to Product or CX leaders e-commerce/D2C companies for Viable
- Mental Health: 0 (0%)
- People: 0 (0%)
- Engineering: 0 (0%)
Below the spreadsheet, logos for Asana and OpenAI are displayed.
On the right side of the slide, a text block provides context:
"Automated categorization, complexity assessment, and metadata generation for delegated tasks can inform high-quality feedback and delegation suggestions for new clients"
This visual demonstrates how AI can analyze task data from Asana to provide insights and improve delegation strategies.]

---

## Create a feedback loop by integrating LLM analysis of delegation activity with known data points about client goals + curated references on high-leverage delegations that are relevant (whether from other clients, external materials from executive coaches, etc)

[Image: A screenshot of a text document or chat output from an "AI Delegation Coach", with an OpenAI logo prominently displayed at the top left.
The document provides "Weekly Delegation Feedback:", analyzing delegation activity and offering suggestions.
**Introductory paragraph:** "Analyzing last week's delegations gives a sense that many tasks revolve around maintaining workflows and ensuring smooth operations, both personally and professionally. There's a solid mix of responding to external inquiries and maintaining internal systems, which is conducive to overall productivity."
**"Reflecting on the specific delegations:"**
- "Assigning the Coinbase and Gail Reyes follow-ups to Carlos was appropriate as these are routine but essential communications that can be offloaded."
- "The Goals Review & Coaching suggests an area for improvement. Personal and professional goals must be explicit for effective delegation. Establishing well-defined goals can provide clearer direction for what should be delegated."
- "The task for MultiOn Pro evaluation and Tavus research show good use of Carlos's time in assessing tools that can potentially increase efficiency."
**"Suggestions to enhance delegation ideas:"**
1. "You could specify strategic projects for Carlos, especially those aligning with growing Athena's market share or improving client satisfaction. This could be screening for potential partnerships or overseeing client feedback mechanisms."
2. "Invest in cross-functional training for Carlos, enabling him to handle a wider range of tasks autonomously."
3. "For tasks related to personal management, like the doctor's appointment and massage scheduling, ensure Carlos has all the necessary information beforehand to minimize back-and-forth."
**"Next week's delegated tasks could include:"**
- "Instruct Carlos to lead a small project, like optimizing the internal knowledge base to improve team productivity. This could involve coordinating with team members to identify gaps and solutions."
- "Since personal tasks are not a concern for delegation, have Carlos research and set up regular deliveries for any recurring personal items to streamline your personal administration."
- "Assign Carlos to document and create a database of common issues encountered in workflows to standardize problem-solving methods and reduce repetitive troubleshooting."
- "Ask Carlos to review and summarize professional development materials that could be beneficial for your learning and growth, such that you need only focus on the key insights."
**Concluding paragraph:** "Remember, the goal is to delegate with the intent to free up your cognitive and creative capacities. This will allow more room for strategic thinking and high-value work. Balancing delegations to utilize Carlos's capabilities fully while ensuring that they align with overarching goals is key to effective leadership and productivity."
The note is presented as an "Example weekly review note from AI Delegation Coach →"]

---

[Image: A minimalist black slide with the Athena logo; a small, stylized hourglass-like symbol centered vertically and horizontally.]

---