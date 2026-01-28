# AI Experiments, Part II

[Image: A stylized, white, symmetrical hourglass-like icon on a black background.]

---

## Insights

[Image: A two-column layout. The left column lists abstract AI concepts, and the right column lists corresponding concrete examples or applications.]

| Insight | Example Application |
| --- | --- |
| Workflows as tools | Create spreadsheet |
| Dynamic context retrieval & ad hoc few shotting | Email autodrafter |
| Revealed preferences extraction as agent context | Hotel SOPs |
| Unstructured data → structured data → context | Gifting |
| Unstructured data → enriched data → context | Email autodrafter? |
| Semantic routing to human/AI resources | Semantic router |
| Context-finding ops as a tool in multitool workflows | Summarize doc & send email |
| The models are good enough, it's just the tools that usually aren't | Multitool |
| Data legibility for agent enablement | Data legibility for agent enablement |
| A treasure trove of context hiding in plain sight | Activity Watch |
| Agent Teammates & Co-Pilots → Half a pizza teams | Screenshot assistant |

---

## AI Experiments

---

## Actual Siri & ALL THE APIS

[Image: Four screenshots of a mobile chat interface with an AI assistant named "CYAI," demonstrating its ability to access and use information from various connected applications.]

**Chat 1: Research & Note-taking**
- **User:** Can you do some research on recent podcast appearances by Jonathan Swanson from Athena, the EA/delegation company, and then put the results in a new Apple Note?
- **CYAI:** The research on Jonathan Swanson's recent podcast appearance has been compiled, and the Apple Note has been created with the details of the podcast titled '#038 Athena: EA Delegation, the Corporation of You, and Personal Leverage,'...

**Chat 2: Information Retrieval**
- **User:** How much was the last wire transfer from Hinge Health?
- **CYAI:** The last wire transfer from Hinge Health was for $45,000, sent on October 26, 2023.
- **User:** What is my Puerto Rican LLC's EIN?
- **CYAI:** Your Puerto Rican LLC's EIN is 66-0943203.
- **User:** can you check apple notes for my n8n render api key?
- **CYAI:** I found the n8n Render API key in your Apple Notes. Here it is: n8napie22e6d948c1e-baf4842587a2...

**Chat 3: Physical Mail Processing**
- **User:** What was the most recent physical mail item I received?
- **CYAI:** The most recent physical mail item you received was from TD Ameritrade regarding options trading privileges in your account... This mail was created on April 25, 2024... If you want to view the entire mail piece, you can do so **here**.

**Chat 4: Creative & Stylized Writing**
- **User:** Can you write a letter to Jonathan from Athena saying we appreciate our business collaboration but make it mostly Wu tang references?
- **CYAI:** [Shows a generated letter with Wu-Tang Clan references, e.g., "bring the ruckus to achieve our targets," "our team has been executing their tasks with precision," "diversify our portfolio with their influence."]

---

## The more you connect, the more context you have, and the more you can do

[Image: A collage of logos for over 30 different software applications and services, illustrating the concept of integrating multiple tools to provide comprehensive context for an AI assistant.]

**Logos include:**
- **Productivity & Communication:** Calendar, asana, zoom, slack, Gmail, Notion, Google Drive, iCloud
- **Financial & Business:** amazon, stripe, MERCURY, PLAID, ramp, HubSpot, Semrush, upwork, Apollo.io
- **Specialized Services:** Health, Earth Class Mail, Lob, Pinecone, browserless, exa, SerpApi, People Data Labs, Podchaser, point me, MultiOn
- **Social:** LinkedIn, X (Twitter)

---

## Multi-Tool Use

[Image: Two side-by-side examples of an AI assistant using multiple tools to fulfill a user request.]

**Example 1: Research & Email Draft**
- **User:** Can you summarize some academic research about the endowment effect and put it in an email draft to Kristen?
- **AI Response:** The draft for the email to Kristen summarizing academic research about the endowment effect has been prepared.
- **Tools Used:** `scite_` (for academic research), `exa` (for search), `Gmail` (for drafting email).

**Example 2: Find & Share Information**
- **User:** @cy_openai_bot Find the url of the JK asana google sheet in my inbox and dm it to Carlos.
- **AI Response:** The URL of the JK Asana Google Sheet has been sent to Carlos.
- **Tools Used:** `Gmail` (to search inbox), `Google Drive` (to get the sheet URL), `slack` (to DM Carlos).

---

## Workflows as Agent Tools

"hey ai, can you research companies similar to athena (athenago.com) and get their monthly pricing, audience, mission, tagline, and 1 testimonial... and then create a new google spreadsheet with all the data?"

[Image: A screenshot of a Google Sheet titled "Athena Competitor Research" that has been automatically populated by an AI agent. The sheet contains columns for company name, URL, description, mission, tagline, audience, and a testimonial. A side panel shows the workflow execution status, indicating it "Succeeded in 57.13s", with an arrow pointing to it labeled "<1 min latency". A small circular image says "holy shit", expressing surprise at the speed and quality.]

---

## Derived Context

"Buy me a flight" with ChatGPT sucks, but if you analyze every past flight in the inbox and create an SOP, it just magically works

[Image: A workflow diagram showing how an AI assistant can derive user preferences to perform a complex task like booking a flight.]

**Workflow:**
1.  **Get Last X Reservation Emails:** Pulls past flight confirmation emails from Gmail.
2.  **Edit Fields:** (Manual step for refinement).
3.  **Limit:** Narrows down the number of emails to analyze.
4.  **Analyze Flights:** An OpenAI model processes the emails to extract flight preferences.
5.  **Aggregate Analysis:** Another OpenAI model synthesizes the findings into a coherent profile.
6.  **Create Documentation:** The final preferences are formatted into a Google Doc (via Markdown).
7.  **Output:** A "Google Doc of flight preference is referenced by flight assistant".

---

## Dynamic Few Shots

"Write like me" or "write like my EA" doesn't work, even with examples of my writing—I use emoji with my close colleagues but not my attorney

[Image: A workflow diagram illustrating how to generate context-ually appropriate emails by dynamically pulling past conversations as examples (few-shot prompting).]

**Workflow Logic:**
- A **Client/EA Router** decides whether the client or the Executive Assistant (EA) should be the sender.
- **If Client sends:** The workflow finds past emails sent *by the client* to the recipient (or a similar conversation) to use as stylistic examples for the new draft.
- **If EA sends:** The workflow finds past emails sent *by the EA* to use as examples.

**Conclusion:** Getting previous emails I've sent to THAT person or a semantically similar person / conversation and passing into prompt solves this.

---

## Context Hiding in Plain Sight

Gift shopping is hard, but an LLM can parse every purchase email where shipping address wasn't you, create structured data, build recipient profiles, and pattern-match to empower agent to shop.

[Image: A detailed workflow diagram showing how an AI analyzes purchase history to generate gift recommendations.]

**Workflow:**
1.  **Get Purchase Emails:** Pulls purchase confirmations from Gmail.
2.  **Categorize Gift vs. Personal:** Identifies emails for items shipped to addresses other than the user's.
3.  **Create Structured Data:** Extracts item details into JSON format.
4.  **Enrich & Scrape:** Uses web search (Tavily, Browserless) to enrich item descriptions and find similar products.
5.  **Filter & Aggregate:** Filters recommendations based on the recipient (e.g., "Meghan's Gifts").
6.  **Generate & Email:** Creates an HTML email with the final recommendations.

**Result:** Recommendations are legitimately next-level, selected more often than human-researched gift ideas that normally take 4-12 hours.

---

## Messy Data Becomes an Enrichable Asset

My inbox won't tell you what gyms or spas I like, or what type of places I go to for haircuts ... but my credit card statement + LLM + APIs + web scraping will.

[Image: A workflow diagram showing how to enrich transaction data to automate personal tasks.]

**Workflow:**
1.  **Teller API Call:** Pulls credit card transaction data.
2.  **Filter & Aggregate:** Filters for relevant transactions (e.g., "haircut") and aggregates them.
3.  **OpenAI + SerpAPI:** Uses an LLM and local search to identify the business name and details from the transaction.
4.  **Derive Data:** Extracts the date of the "Most Recent Haircut".
5.  **Automate Action:** An "If" condition triggers a `MultiOn` agent to book a new appointment.

**Application:** Plus you can automate things like "schedule a haircut 6 weeks from the date of the most recent haircut transaction".

---

## Data Legibility is a Crucial Investment

Given the right context, LLMs can connect dots like turning logs into daily employee reports... time to start recording digital activity, calls, IRL convos, etc...

[Image: A diagram showing data sources flowing into an AI model which, when combined with various types of context, produces a detailed daily activity report.]

- **Data Inputs:** Browser Data, App Data, Network Data, Screenshots (e.g., from an activity tracker like ActivityWatch).
- **Context Inputs:** + Company Context, + Project Mgr Data, + Personal Context, + Messages Context.
- **AI Output:** A detailed report in a chat interface from the "CYAI" bot. The report includes:
    - **Tasks Completed Today:** (e.g., "Upgrade SerpApi & invoice Athena", "Review autodrafter email from Jeffrey Wang").
    - **In-Progress Tasks:** (e.g., "Brainstorm ideas for Bill Gates Presentation").
    - **Waiting / Blocked:** (e.g., "Get Access to Anon").
    - **Feedback on current delegations:** (e.g., "The Sign-Off Notes are a great practice...").

---

## AI as Teammate

Assign tasks in project manager to AI, it sends results to human for review.

[Image: Two screenshots from a project management tool showing a task handoff from an AI to a human.]

1.  **Task Assigned to AI (AL):**
    - **Task:** "Write a short substack newsletter based on the research paper in my vector database on financial incentives for medication adherence."

2.  **Task Assigned to Human (CY) for Review:**
    - **Task:** "Review first draft of newsletter on financial incentives for medication adherence."
    - **Description:** Contains the full text of the newsletter drafted by the AI, beginning with "Financial Incentives: A Game Changer in Medication Adherence. Is it unethical to NOT use financial incentives to foster medication adherence?..."

---

## LLMs for Task/Value Discovery & Routing to Right Resource

AI discovers tasks in inbox, calendar, etc and creates task in project manager for another AI or human resource.

[Image: A screenshot of a "CYCL To-Do List" in a project management tool. The list is populated with tasks that the AI has automatically identified from emails.]

**Example Tasks:**
- `Review autodelegator tasks from Greg Kamradt email re: Re: Intro: Jordan <> Greg`
- `Review autodrafter email from Caleb - Firecrawl email re: Re: Just sent this to our engineer that is on ET`
- `Answer laptop specification questions for Carlos as Chris - via email comment (Re: Laptop for Carlos)`

**Key Metrics & Concepts:**
- > 50% of my EA's work is delegated by an AI
- > 10% of AI-discovered tasks are completed by AI
- AI proactively reviews human-assigned tasks and tries to take part/all of them from the human pre-emptively
- Similar to healthcare ops concept of "practicing at the top of your license"

---

## Co-Pilot w/ Contextual Data + Assistance

AI reads browser/proxy/app data + screenshots, generates a prompt to assistant.

[Image: A user is browsing the Marriott website for hotels in Bali. Simultaneously, an AI assistant in a Telegram chat window proactively provides a list of recommended hotels in Bali that match the user's travel dates and loyalty status.]

**The Concept:**
- **"Based on what the person is doing, what data would be useful for the person?"**
- The AI observes the user's activity (booking a hotel) and autonomously initiates a helpful action.
- The AI can then "Get Marriott account #, surface hotel SOP, and run assistant search for other hospitality options."
- This is **AI autonomously prompts AI based on ambient observation**.

---

## Co-Pilot Takes the Wheel

AI reads browser/proxy/app data + screenshots, generates a prompt to assistant, starts **working**.

[Image: A user has opened a blank document template for a new project spec. The AI recognizes this action and prepares to assist or take over the task.]

**The Concept:**
- **"Looks like they're writing a product spec, let's grab the best resources on that and do it for them"**
- The AI can:
    - Get data from best-in-class reference templates / best practices (e.g. podcasts, substacks, etc—even for skills the user doesn't have).
    - Add context from recent emails, messages, call transcripts (continuously logged in memory.txt).
- **Outcomes:**
    - EA with no PM training writes a pretty solid PRD
    - creates pretty solid FB ads
    - outperformed my full-time recruiter

---

## AI Delegation Analysis & Coaching

[Image: A screenshot of a spreadsheet analyzing delegated tasks from Asana. Tasks are automatically categorized (Admin, Personal Finance, Passion Projects, etc.) and rated for Complexity, Scope, and Intimacy. A chart summarizes the distribution of tasks by category.]

**The Goal:**
Automated categorization, complexity assessment, and metadata generation for delegated tasks can inform high-quality feedback and delegation suggestions for new clients.

**Tools:** The process is powered by connecting `asana` data to an `OpenAI` model.

---

## AI Delegation Analysis & Coaching (Feedback Loop)

Create a feedback loop by integrating LLM analysis of delegation activity with known data points about client goals + curated references on high-leverage delegations that are relevant (whether from other clients, external materials from executive coaches, etc).

[Image: An example of a "Weekly Delegation Feedback" note generated by an AI Delegation Coach.]

**Example AI-Generated Feedback:**
- **Analysis:** "Analyzing last week's delegations gives a sense that many tasks revolve around maintaining workflows... There's a solid mix of responding to external inquiries and maintaining internal systems..."
- **Specific Reflections:** "Assigning the Coinbase and Gail Reyes follow-ups to Carlos was appropriate..." "The Goals Review & Coaching suggests an area for improvement."
- **Suggestions for Enhancement:** "1. You could specify strategic projects for Carlos... 2. Invest in cross-functional training for Carlos..."
- **Next Week's Delegated Tasks:** "Instruct Carlos to lead a small project, like optimizing the internal knowledge base..."

---

[Image: A stylized, white, symmetrical hourglass-like icon on a black background.]