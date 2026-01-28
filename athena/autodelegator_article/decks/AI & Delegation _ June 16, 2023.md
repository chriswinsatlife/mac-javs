# ATHENA: A new era of leverage

---

## Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence

[Image: Header of a research paper titled "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence" by Shakked Noy and Whitney Zhang from MIT.]

The ChatGPT using group was 37% faster at completing tasks (17 minutes to complete vs. 27 minutes) with roughly similar grades (level of quality), and as the workers repeated their tasks for improvement the ChatGPT groups quality went up significantly faster. In other words, ChatGPT did make work speedier with no sacrifice in quality and then made it easier to “improve work quickly” using the tool.

---

## AI and Job Roles

[Image: A screenshot of a text message conversation. Carlos Lucero sends a message with an embedded image of an email draft.]

**Carlos Lucero:** He doesn't even know he was recruited by a large language model.

**Carlos Lucero:** And they said AI was gonna take jobs away 😂 lol

**Reply:** In fairness it did take our recruiter's job away

**Carlos Lucero:** In fairness it did take our recruiter's job away. OpenAI giveth, OpenAI taketh

---

## Current Workflow

[Image: A diagram showing a linear workflow. A circle labeled "Client" points to a circle labeled "EA" (Executive Assistant). The "EA" circle then has arrows pointing to a list of five company logos.]

-   replit
-   upwork
-   Draft
-   MarketerHire
-   Growmodo

---

## Enhanced Workflow with LLM

[Image: A diagram showing an enhanced workflow. "Client" points to "EA", which points to "LLM" (Large Language Model). The "LLM" then points to the list of five company logos (replit, upwork, Draft, MarketerHire, Growmodo). A box labeled "Rules / Events / SOPs" has arrows pointing to both the "EA" and "LLM" circles.]

---

## Data-Driven LLM Assistance

[Image: A system architecture diagram. At the bottom are four circles: "Business," "Client," "EA," and "Team." The "Client" and "EA" circles have a bidirectional arrow between them. All four circles have arrows pointing up to a central square labeled "Data." The "Data" square points down to a circle labeled "LLM." The "LLM" circle has arrows pointing to the "Client" and "EA" circles.]

---

## LLM as an Intermediary (Before)

[Image: A diagram showing two separate interactions. On the left, a small "LLM" circle is next to a larger "Client" circle. On the right, a larger "EA" circle is next to a small "LLM" circle, suggesting separate LLM usage by both parties.]

---

## LLM as a Shared Resource (After)

[Image: A diagram showing a unified interaction. "Client" and "EA" circles are positioned above a central, larger "LLM" circle, forming a triangular relationship.]

---

## LLM-Powered Delegation Model

[Image: A diagram showing a system architecture. At the top, "Client," "LLM," and "EA" are in a row, with bidirectional arrows connecting "Client" to "LLM" and "LLM" to "EA." Arrows point down from all three top circles to a row of five circles at the bottom, labeled "Agent 1," "Agent 2," "Agent N," "Agent N," and "Agent N."]

---

## Tool Stack: Data & Internal Tools

[Image: Logos of three business software applications.]

-   Airtable
-   Notion
-   Retool

---

## Tool Stack: Automation

[Image: Logos of three automation and development tools.]

-   Apple Shortcuts
-   Zapier
-   AWS Lambda

---

## THEME 1
## ZERO-COST COGNITION

---

## THEME 2
## DISCONTINUITIES IN UTILITY

---

## THEME 3
## INTENTIONALITY ALIGNMENT

---

## AI Delegation Showcase

---

## Automating Recruiting Messages w/ Airtable and OpenAI

[Image: Screenshot of a Clay.com interface integrated with Airtable. The table shows a list of leads for recruiting. One column contains a prompt for OpenAI, and the next column shows the generated personalized outreach email from the recruiter.]

**Description:** Extracted leads are organized in Airtable, we grade the quality of each lead using a Madden score, and generate pre-drafted emails via OpenAI.

**Example from table:**
-   **Name:** Ror Sy
-   **Prompt2:** Write an informal but professional email to Ror telling them that I'm a fan of how they're leveraging design for reversing type 2 diabetes at Virta Health. Then explain to Ror that we're working to redesign healthcare and defeat heart disease at Riva, with a world-class team led by the co-founder of Siri.
-   **OpenAI Output - From Recruiter:** Hi Ror, I wanted to reach out and tell you that I'm a big fan of what you're doing with design to reverse type 2 diabetes at Virta Health. We're also working on redesigning healthcare and defeating heart disease at Riva, with a world-class team led by the co-founder of Siri. Our...

---

## Summarizing Example 1: Using the Chunking Method to Summarize any Book or Long Text

--

### Method 1: Simple LangChain Setup

[Image: A code snippet showing Python code for summarizing text using the LangChain library.]

```python
import os
OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')

from langchain.llms import OpenAI
from langchain.chains.summarize import load_summarize_chain
from langchain.document_loaders import TextLoader, UnstructuredEPubLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

llm = OpenAI(temperature=1, openai_api_key=OPENAI_API_KEY)
loader = UnstructuredEPubLoader('Outlive_-_Peter_Attia_MD.epub')
documents = loader.load()

# Get your splitter ready
text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=4000, chunk_overlap=500
)

#Split your docs into texts
texts = text_splitter.split_documents(documents)
chain = load_summarize_chain(llm, chain_type="map_reduce", verbose=True)
chain.run(texts[:])
```

--

### Method 2: No-Code via Zapier

[Image: A screenshot of a Zapier workflow designed to summarize content.]

1.  **Trigger:** New Meeting in Fireflies.ai
2.  **Action:** Split Texts Into Chunks for AI Prompts (beta)
3.  **Action:** Loop Through All Chunks
4.  **Action:** Set Delay Before Every Loop
5.  **Action:** Ask for a summary of each chunk via GPT4
6.  **Action:** Save each chunk to a list via Digest by Zapier
7.  **Action:** Filter step (only proceed if loop has ended)
8.  **Action:** Retrieve all chunks
9.  **Action:** Create a summary of summaries via GPT4
10. **Action:** Save summary to Notion

---

## Complex Delegation Request

[Image: The book cover for "OUTLIVE: THE SCIENCE & ART OF LONGEVITY" by Peter Attia, MD.]

> "Summarize this book, extract the action items, find ways to delegate them to my EA, then create a JSON payload for our task manager and send via API."

---

## Example 2: Summarize a 2-day health webinar

Using a few lines of code (all copy-pasted from LangChain docs) the EA was able to summarize a 2-day webinar by the NIH on 'Transforming Hypertension Diagnosis and Management in the Era of Artificial Intelligence'

[Image: Python code snippet for text summarization using LangChain.]
```python
from langchain.llms import OpenAI
from langchain.chains.summarize import load_summarize_chain
from langchain.document_loaders import TextLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

llm = OpenAI(temperature=1, openai_api_key=)

loader = TextLoader('Desktop/NHLBI_transcript.txt')
documents = loader.load()

# Get your splitter ready
text_splitter = RecursiveCharacterTextSplitter(chunk_size=2000, chunk_overlap=200)

#Split your docs into texts
texts = text_splitter.split_documents(documents)

chain = load_summarize_chain(llm, chain_type="map_reduce", verbose=True)
chain.run(texts[:5])
```

---

## EMR note automatically powers clinical operations

[Image: A workflow diagram showing how a conversation transcript is used to automate clinical operations. An arrow points from the "Transcript" to an "Automated EMR Note". Arrows from the EMR note then point to three different API actions.]

-   **Transcript:** A conversation between Dr. Hirsch and John Doe about family history of heart disease.
-   **Automated EMR Note:** The transcript is summarized into a structured EMR note with HPI, PMHx, SurgHx, and Meds sections.
-   **API Actions:**
    -   **Update EMR:** `POST` to `platform.athenahealth.com/v1/`
    -   **Send Med:** `POST` to `api.truepill.com/v1/prescription/`
    -   **Schedule Labs:** `POST` to `api.medarrive.com/v2/`

---

## Example: Measurement & Care Engine Powers Automated Med Management, Fulfillment

[Image: A multi-part diagram showing an automated patient care workflow.]

1.  **If BP isn't moving fast enough...**
    -   A chart shows a patient's blood pressure trend from `179/103` (Start) to `143/96` (Today), not yet reaching the `130/90` (Goal).

2.  **AND patient reports adherence...**
    -   A "Medication Survey" pop-up asks the patient, "How are things going with Olmesartan?" with "Good" and "Not so good" buttons.

3.  **...THEN increase dose -> & create Rx shipment & update chart & send patient video**
    -   API calls are shown to `athenahealth.com` (to change medication) and `truepill.com` (for a new prescription).
    -   A generated video of a doctor explaining the "Rivasartan Dose Change" is shown.

---

## Autodelegator Workflow

--

### Step 1: Automated chunking via Zapier

[Image: A Zapier workflow for processing meeting transcripts.]

1.  **Trigger:** Get most recent meeting in Fireflies
2.  **Action:** Upload to Google Docs
3.  **Action:** Find Google Doc
4.  **Action:** Extract transcript
5.  **Action:** Split transcript into chunks

--

### Step 2: Extract delegation ideas using Tree of Thought Prompting

[Image: The continuation of the Zapier workflow for analyzing the chunked transcript.]

8.  **Action:** Problem Input
9.  **Action:** Instruction prompt
10. **Action:** Append To List
11. **Action:** Continue only if it's the last loop
12. **Action:** Get all list values
13. **Action:** Create master summary
14. **Action:** Merge extracted delegation ideas
15. **Action:** Evaluate and rank delegation ideas
16. **Action:** Present the winning ideas

---

## Step 3 & 4: Output to Notion and Project Management Tool

[Image: The final steps of the Zapier workflow leading to a Notion page.]

18. **Action:** Create Database Item in Notion
19. **Action:** Add a Task With File in TickTick

--

### Generated Meeting Summary

[Image: A Notion page created by the automated workflow.]

**Zoom | Chris York & Quiet Capital - AI VC Integrations**

-   **Attendees:** joe@quiet.com, daniel@quiet.com, hannah@quiet.com, kathryn@quiet.com
-   **Date:** April 24, 2023 10:30 AM
-   **Duration:** 66.00 mins
-   **Summary:** Daniel Gruneberg and Chris York of Quiet Capital discuss the potential impact of AI on venture capital firms and how to incorporate it into their investment operations. They also discuss their strategies for brand and build initiatives, prioritizing contacts, fundraising, portfolio management, and marketing their SPV to potential investors.

---

## Automated Task Creation

[Image: A screenshot of a task management application (like TickTick) showing the task generated from the Autodelegator workflow.]

**Task Title:** [For Review] - Zoom | Chris York & Quiet Capital - AI VC Integrations

**Summary:**
Daniel Gruneberg and Chris York of Quiet Capital discuss the potential impact of AI on venture capital firms... They see a lot of opportunities for AI to improve efficiency and effectiveness within their operations.

**Delegation Ideas:**
-   **ACTION ITEM:** Assist Chris in researching AI tools and their impact on the venture capital industry.
-   **BREAKDOWN OF STEPS:**
    1.  Identify relevant AI tools and resources for venture capital firms (blogs, white papers, case studies)
    2.  Analyze the impact of AI on the venture capital industry (efficiency, decision-making, deal sourcing, etc.)
    3.  Summarize the findings in a concise report
    4.  Share initial findings with Chris and discuss further research focus points

---

## AI Delegation Expansion Workshop

Uses chain prompts to improve bad delegations. We do this to make it easier for EAs and clients to collaborate, even when clients don't provide great context or detail in their delegations.

[Image: A table showing a chained prompting process to enhance a simple task.]

| Column | Content |
|---|---|
| **Input Data** | Create Tango of Clay / Airtable + OpenAI automated recruiting messages playbook |
| **Identity Prompt** | You are a world-class chief of staff who always goes above and beyond... You specialize in intuiting the next steps for any given task... skilled at leveraging AI, no-code tools, automation... Your goal when receiving a task is to do it in a way that people think: "Wow, that's more than I could've possibly expected. 11/10." |
| **How can we go above and beyond in completing this task?** | *[Identity prompt repeated]*<br>**TASK:** Create Tango of Clay / Airtable + OpenAI automated recruiting messages playbook<br>**QUARTERLY GOAL:** Write 10 high-end playbooks to help Athena clients...<br>**COMPANY DESCRIPTION:** Athena connects entrepreneurs...<br>**PROMPT:** How can we go above and beyond in completing this task? |
| **What else can we do outside the task desc based on the quarterly goal, to provide max value?** | *[Identity prompt repeated]*<br>**TASK:** Create Tango of Clay / Airtable + OpenAI automated recruiting messages playbook<br>**QUARTERLY GOAL:** Write 10 high-end playbooks to help Athena clients...<br>**COMPANY DESCRIPTION:** Athena connects entrepreneurs...<br>**PROMPT:** What else can we do outside the task description, based on the quarterly goal, to provide maximum value? |

---

## Automated Daily Note & Weekly Review

LLMs can analyze client tasks, calendar, etc and suggest high-leverage tasks based on goals, ideas to get started / breakdown of tasks on client's existing to-do list, and things to delegate to their EA.

--

### Step 1: Extract Data via Zapier

[Image: Screenshots of two Zapier workflows.]

**Workflow 1:**
1.  **Trigger:** GCal trigger to extract tomorrow's events
2.  **Action:** Append to list and release full list every 8pm
3.  **Action:** Create Row in Coda

**Workflow 2:**
4.  **Action:** GET request to Ticktick API to extract tasks
5.  **Action:** Create Row in Coda

---

### Step 2: Generate Insights with LLMs

Use LLMs to analyze the data points, extract high-value tasks, and delegate ideas to both client and EA. In this example, we use Coda AI to create AI prompt boxes that automatically generate new completions whenever our data points are updated.

[Image: A Coda AI prompt box showing generated text.]

**Ideas & Suggested High Leverage Tasks Based on Goals:**

-   **Idea:** Develop a system for tracking and analyzing sales data to optimize the sales process.
-   **Goal worked on:** "The quarterly goal of achieving $100k MRR on BeSci Course"
-   **Step-by-step breakdown:**
    1.  Identify key metrics to track (e.g. conversion rates, lead sources, sales cycle length)
    2.  Set up a system for tracking and analyzing these metrics (e.g. using a CRM like HubSpot or Salesforce)
    3.  Regularly review and analyze the data to identify areas for improvement
-   **Implied action steps:** Regularly review and analyze sales data to ensure that the sales process is optimized.
-   **Possible improvements:** Use AI-powered analytics tools like Gong or Chorus to automatically analyze sales calls and provide insights on areas for improvement.

---

## Vectorstore embeddings power-up your EA to do more with LLMs that are trained on your custom data

Apps like Baseplate or Vectara allow you to easily create an index of sources that you can connect with via an API request in Zapier. This allows you to create a Q&A chatbot on any messaging app you are using.

[Image: A Zapier workflow for a "Baseplate Slackbot".]

1.  **Trigger:** When there's a new message in "content-team"
2.  **Action:** Ping the Baseplate API
3.  **Action:** Post a message in "content-team"

---

## Tools for Media Processing

[Image: A stylized image of a Norse warrior. Next to it is a dark panel with text instructions.]

### Instructions and tools for downloading and speeding up videos
You likely won't need to read the details on Github or the wiki for these tools, but providing links in case helpful/interesting. Other than installing the two programs in the terminal or Warp, you really only need the two main code snippets at the end.

**YTDLP Download YouTube**
`https://github.com/yt-dlp/yt-dlp`
```
yt-dlp [OPTIONS] [--] URL [URL...]
"bestaudio[ext=m4a],bestaudio[ext=webm]"
--yes-playlist
--audio-quality 0
```

**FFMPEG Change File Speed**
`https://trac.ffmpeg.org/wiki/How%20to%20speed%20up%20/%20slow%20down%20a%20video`

**Main code snippets**
To download m4a
`yt-dlp "https://www.youtube.com/watch?v=123" -x --audio-format "m4a" --audio-quality 0`

---

## AI-Powered Briefings

[Image: A screenshot of an integrated email and contact management application. The right sidebar, powered by Retool, pulls in detailed "Investor Details" for the contact "Nan Li".]

**Investor Details (from Retool sidebar):**
-   **Fund AUM:** $587,200,000
-   **Recent Investments:** nanio, Inato, Visor
-   **Commonalities:** You both worked at Cognitive, Shared LinkedIn Connections
-   **Company Details:** Obvious Ventures
-   **Work History:** Managing Director @ Obvious Ventures (2015-Present)
-   **Education:** University of Michigan, BSE, Computer Science

---

## Voice Note to SOP/Playbook - Template

[Image: A screenshot of a workflow automation tool, likely Apple Shortcuts, detailing the steps to convert a voice note into a formatted Standard Operating Procedure.]

1.  **Show notification:** Transcribing via Whisper API...
2.  **Get contents of:** `https://api.openai.com/v1/audio/transcriptions`
3.  **Get dictionary from** Contents of URL
4.  **Set variable** `transcript` to Contents of URL
5.  **Text:** *[A prompt for an LLM to summarize a process note into Purpose, Context, Definition of "Done", and Process sections.]*
    PROCESS NOTE: `[transcript variable]`
6.  **Set variable** `prompt` to Text
7.  **Show notification:** Transcript done! Sending to GPT...
8.  **Get contents of:** `https://api.openai.com/v1/completions`

---

## Questions & Wrap-Up

---

## The Vision

> "If you want to build a ship, don't drum up the men to gather wood, divide the work and give orders.
>
> Instead, teach them to yearn for the vast and endless sea."

---

## The Vision (Adapted for AI)

> **delegation practice with AI**
>
> "If you want to build a ~~ship~~, don't ~~drum up the men to gather wood, divide the work and give orders~~.
>
> **open up ChatGPT**
>
> Instead, teach ~~them~~ **yourself** to yearn for the vast and endless ~~sea~~
>
> **potential of your AI-empowered future**"

---

## ATHENA

**chrisyork@athenago.com**

To skip the waitlist for Athena & get matched with an AI-savvy EA, email us here