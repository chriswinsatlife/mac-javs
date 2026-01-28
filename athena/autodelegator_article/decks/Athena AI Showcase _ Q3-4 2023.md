# Athena AI Experiments Showcase

---

## System Architecture 1

[Image: A hierarchical diagram showing the relationship between clients, AI, and agents.
At the top level, there are three interconnected circles: "Client", "LLM" (Large Language Model), and "EA" (Executive Assistant).
The "LLM" is centrally positioned and connected to both "Client" and "EA".
A line extends down from the top level, branching out to a second level of five circles labeled "Agent 1", "Agent 2", "Agent N", "Agent N", and "Agent N", indicating a team of agents supporting the client and EA, orchestrated by the LLM.]

---

## System Architecture 2

[Image: A flow chart illustrating data and communication paths within the system.
At the top, a square labeled "Data" is the central information hub.
Arrows point from three circles at the bottom—"Business," "Client," and "Team"—up to the "Data" square.
An arrow points from the "Data" square down to a circle labeled "LLM".
The "LLM" then points down to a circle labeled "EA" (Executive Assistant).
The "EA" has a bidirectional arrow with the "Client" circle, indicating mutual communication.
Finally, an arrow points from "EA" back up to the "Data" square, completing the loop.]

---

## Projects

-   **Delegation Automation**
    -   Email Autodelegator & Autodrafter
    -   Call Autodelegator & Agents

-   **Delegation Upskilling + Goal Alignment**
    -   AI Weekly Review & Delegation Coach
    -   Goal Autodelegator
    -   René Girard Autodelegator

-   **Lower Friction**
    -   iOS/MacOS Screenshot Autodelegator
    -   AI-Assisted Voice Delegation

---

## Email Autodelegator & Autodrafter

---

## Email Autodelegator Workflow

[Image: A workflow diagram explaining the Email Autodelegator process.]

-   **Triggers:** The process starts with an email from `Gmail`, `Missive`, or `Superhuman`.
-   **Action Steps:**
    1.  **Airtable:** The system retrieves client and EA context.
    2.  **OpenAI:** Turns the unstructured email data into an actionable delegation task.
    3.  **Webhook:** Uses tools like Tavily to perform API calls for research to enrich the delegation.
-   **Possible Outputs:** The final task is sent to platforms like `Missive`, `Asana`, `TickTick`, `Notion`, or `Notes`.

---

## Email Autodelegator: Example 1

[Image: A screenshot of an autodelegated task in a project management tool.]

**Review autodelegator tasks from Ignacio Cotto email re: RE: 2022 Balance Sheet**

**Email Summary:**
Ignacio Cotto from eTrends Group will soon be sending Carlos Lucero confirmation emails for filing and tax payments related to the Income Tax Return, Volume of Business Tax Return, and Exempt Annual Report. These returns are due on the upcoming Friday. Carlos is advised to monitor his email closely to ensure these tasks are completed timely. Carlos has already provided a 2022 Balance Sheet via Google Sheets for Ignacio's use and review.

**Autodelegator AI Action Items**

**Action Items (Detected):**
-   Monitor the email for incoming confirmation emails from Ignacio Cotto regarding the filing and tax payments for the Income Tax Return, Volume of Business Tax Return, and Exempt Annual Report.
-   Ensure that all the returns mentioned are completed and submitted before the due date, which is this Friday.
-   Once the confirmations are received, close all pending tasks for 2022.

**Above and Beyond Action Items (Optional):**
1.  Prepare a checklist or timeline in TickTick, detailing the steps leading up to the submission of the tax returns and reports due this Friday, including a review of the confirmations received from Ignacio Cotto. Set reminders to check Missive frequently for these confirmations and any follow-up actions required immediately upon receipt.
2.  Create a shared Airtable base or Coda doc with Ignacio Cotto that outlines the status of the tax returns and any related action items, allowing for real-time updates and transparent communication between both parties on the progress and completion of the task.

---

## Email Autodelegator: Example 2

[Image: Another screenshot of an autodelegated task, this time including agent-based research.]

**Email Summary:**
Emil Jerndal from Invenio Growth has responded to Carlos Lucero, Executive Assistant to Chris York, confirming that an 8pm EET call next week works for him. He suggests that Thursday might be a suitable day. The action item for Carlos is to coordinate with Chris York to confirm if a call on Thursday at this time is possible. The call is intended to discuss a potential collaboration on a fintech & impact tech focused corporate venture capital for a top global brand.

**Autodelegator AI Action Items**
**Action Items (Detected):**
-   Carlos needs to schedule a call with Chris and Emil for next week at 7 pm Sthlm time, preferably on Thursday.
-   Carlos should also inform Vincent Weir about the scheduled call as he was BCC'd in the email.

**Autodelegator Agent Research**
[Image: An arrow points to the following section.]
**Research Query:**
Prepare a brief on Invenio Growth's activities and Emil Jerndal's background from public data.

[Image: An arrow points to the following section.]
**Answer:**
Emil Jerndal is a Venture Associate at Invenio Growth and has over 8 years of experience in various industries including IT consulting, corporate finance, and security. He has held roles such as controller, project manager, and team leader. Emil Jerndal is actively involved in strategy consulting and innovation at Invenio Growth. He has been a speaker at the Future of Fintech Summit and has evaluated startup pitches at the Nordic Early-Stage Startup Summit.

---

## Email Autodrafter

[Image: A detailed workflow diagram showing the Email Autodrafter process from trigger to final draft.]

-   **Trigger:** An email arrives in `Gmail` matching specific filters.
-   **Significance Analysis:** The email is passed to `OpenAI` to determine its importance by asking a series of questions (e.g., "Is this from a real person?", "Are they expecting a reply?").
-   **Context Retrieval:** The `LLM` uses its own reasoning and retrieves relevant context from an `Airtable` database to analyze the email. The database contains client preferences like meeting slots, current projects, user manuals, SaaS apps, location, and important people.
-   **Importance Decision:** If the email is deemed **Not important**, the output is saved to a preferred platform (`Asana`, `TickTick`, `Notes`, etc.) and the workflow ends.
-   **Response Path:** If the email is **Important**, the system decides who should respond (`Client` or `EA`).
-   **Sample Retrieval:** It looks up semantically similar emails sent by the client or EA from `Gmail` to use as writing samples.
-   **Draft Creation:** `OpenAI` creates a final email draft using the original email thread, the writing sample, and the retrieved context. The workflow then ends.

--

### Email Autodrafter: Analysis Phase

[Image: A zoomed-in view of the first half of the Email Autodrafter workflow.]
-   **Trigger:** An email arrives in a `Gmail` inbox.
-   **OpenAI Service:** The email is analyzed for significance through a series of checks:
    -   Is this coming from a real person?
    -   Are they expecting a reply?
    -   Trying to market or sell me something?
    -   Would I regret it if I didn't reply to this?
-   **Airtable Database:** The LLM retrieves relevant context from an Airtable database to inform its analysis. The context includes:
    -   What are the client's preferred meeting slots?
    -   What projects is the client working on?
    -   Client's user manual
    -   What SaaS apps does the client use?
    -   Where is the client located right now?
    -   Who are the most important people in the client's life?

--

### Email Autodrafter: Drafting Phase

[Image: A zoomed-in view of the second half of the Email Autodrafter workflow.]
-   **Who should respond?**: The system determines if the `Client` or the `EA` should be the sender.
-   **Gmail - Sample Lookup (Client):** Looks up emails sent by the client on the topic to use as a writing sample.
-   **Gmail - Sample Lookup (EA):** Looks up semantically similar emails sent by the EA to use as a writing sample.
-   **OpenAI - Draft Creation:** Creates an email draft using the `email thread` + `sample` + `context`.

---

## Call/Meeting Autodelegator

---

## Call/Meeting Autodelegator: Workflow

[Image: A screenshot of a 10-step Zapier workflow for processing meetings.]

1.  **Trigger:** Get most recent meeting in Fireflies.
2.  Load Client & EA Context.
3.  Upload to Google Docs.
4.  Find Google Doc.
5.  Extract transcript.
6.  Summary.
7.  Extract action items via GPT4-1106.
8.  Evaluate and rank delegation ideas.
9.  Present the winning ideas.
10. Expand the winning ideas.

---

## Call/Meeting Autodelegator: Example 1

[Image: A screenshot of an autogenerated task list based on a meeting about a podcast invitation.]

**ACTION ITEM:** Reflect on the possibility of appearing on Nathan's AI podcast and decide whether to accept the invitation.

**BREAKDOWN OF STEPS:**
1.  Gather information about Nathan's AI podcast, including audience demographics, reach, and previous guests.
2.  Evaluate how the podcast's theme aligns with Chris's work with Athena and his expertise in behavioral science.
3.  Assess the potential benefits for Chris and Athena, such as increased visibility and networking opportunities.
4.  Present the findings to Chris and provide a recommendation based on the alignment and potential benefits.
5.  If Chris decides to accept the invitation, coordinate with Nathan's team to schedule the podcast recording according to Chris's availability.

**IMPLIED NEXT STEPS:**
1.  If Chris agrees to appear on the podcast, prepare a list of talking points and key messages that Chris may want to convey.
2.  Arrange a pre-podcast briefing with Chris to go over the talking points and address any questions he may have.
3.  Post-podcast, you could organize a debrief session to discuss the outcomes and any follow-up actions.

---

## Call/Meeting Autodelegator: Example 2

[Image: A screenshot of an autogenerated task list based on a cognitive coaching meeting.]

**ACTION ITEM:** Provide Lou Kishfy with a list of customer intelligence and sales enrichment tools like Mad Kudu and Clearbit.

**BREAKDOWN OF STEPS:**
1.  Research and identify a range of customer intelligence and sales enrichment tools that are similar to Mad Kudu and Clearbit.
2.  Evaluate each tool based on its features, compatibility with current systems, pricing, and customer reviews.
3.  Create a comparison chart in Google Sheets that includes the pros and cons of each tool to help Lou make an informed decision.
4.  Draft an email in Missive with the comparison chart attached, briefly summarizing the key points and offering to discuss the options in more detail.
5.  Send the email to Lou Kishfy and schedule a follow-up meeting via Reclaim to discuss the options if he expresses interest.

**IMPLIED NEXT STEPS:**
1.  After Lou reviews the list, offer to arrange demos with the providers of the top tools he's interested in.
2.  Prepare a list of questions to ask during the demos to ensure all of Lou's concerns and requirements are addressed.
3.  If Lou decides on a tool, assist with the procurement process and integration into the company's current tech stack.

---

## Weekly Review AI

---

## Weekly Review AI: Example 1

[Image: A screenshot of an AI-generated weekly review and coaching session.]

**Goals Review & Coaching for the week**

**Calendar Review:**
1.  Reviewing your calendar events from the past week, it doesn't appear that there were any specific meetings or tasks scheduled that directly address your goals of hiring an amazing nanny or raising $25M for Athena.
2.  Looking at the recurring events... there are likely components of these meetings that could be handled by your CoS or EA. For example, your EA could take charge of meeting preparation, follow-up actions, and coordination tasks, thus freeing up more of your time for high-impact activities.
3.  To move closer to your goals, consider scheduling time for the following activities that leverage your unique position and skills:
    -   **Nanny Hiring Process:** Set aside a block of time to define the ideal attributes... Then, you can task your EA with sourcing candidates...
    -   **Investor Relations:** Schedule a strategy session for crafting a compelling narrative around Athena's vision and growth potential... Following this, you can delegate the outreach and initial meeting setup to your EA or CoS.
    -   **Strategic Planning:** Reserve time for high-level strategic planning to refine Athena's pitch to top VC firms... This cannot be delegated as it requires your deep understanding of the business and the market.

---

## Weekly Review AI: Example 2

[Image: A screenshot of AI-generated delegation ideas for a specific goal.]

**Review AI ideas for goal: Hire an amazing nanny who takes care of + teaches our 3 year old child**

**DELEGATION IDEAS:**
1.  **Background Checks and Interview Coordination:** Carlos can initiate comprehensive background checks on nanny candidates and arrange interviews. He could also use AI-driven personality tests to help assess compatibility with the child's needs and family values.
2.  **Early Childhood Education Focus:** Instruct Carlos to prioritize candidates with credentials or experience in early childhood education, possibly using LinkedIn Learning or Coursera to verify or enhance their skills.
3.  **Leverage Networking for Referrals:** Carlos should reach out to Chris's personal and professional networks for nanny recommendations...
-   **Educational Nanny Search:** Have Carlos search for nannies with a background in teaching or tutoring...
-   **Job Description Development:** Carlos can draft a comprehensive job description...
-   **Trial Period Management:** Set up a trial period for the nanny candidates...
-   **Feedback Loop Establishment:** Create a feedback system for Chris and the nanny...

---

## Goal Autodelegator

---

## Goal Autodelegator: Example

[Image: A composite image showing a research tool interface on the left and the generated output on the right.]

**Left Side:** A screenshot of the Metaphor search tool showing results for "the best article on how to increase vo2 max" and a Python code snippet for using the Metaphor API.

**Right Side:** AI-generated delegation ideas and a playbook.

**Review AI ideas for goal: - Increase VO2max from 35 to 40 mL/kg/min**

**DELEGATION IDEAS:**
-   Research and identify a reputable sports scientist or exercise physiologist who specializes in VO2max improvement and arrange an initial consultation for Chris.
-   Set up a personalized training schedule for Chris that includes a mix of high-intensity interval training (HIIT), steady-state cardio, and strength training...
-   Automate reminders for Chris's workouts, nutrition, and recovery sessions...

**PLAYBOOK: Increase VO2max from 35 to 40 for Chris**

**Preparation Phase:**
1.  Carlos, please schedule an appointment for Chris with a sports physician to evaluate current fitness levels...
2.  Research and compile a list of certified personal trainers who specialize in aerobic conditioning and VO2max improvement.
3.  Set up a structured training program that includes:
    -   High-Intensity Interval Training (HIIT)
    -   Steady-State Cardio
    -   Strength training sessions focused on leg muscles

---

## Rene Girard Autodelegator

---

## Rene Girard Autodelegator: Example 1

[Image: A composite image showing a scientific diagram on the left and AI-generated delegation ideas on the right, linked by an arrow.]

**Left Side:** A screenshot from a YouTube video displaying a diagram on the biological pathways of Autophagy, triggered by Energy Starvation. Key proteins like AMPK, mTOR, and ULK1 are shown.

**Right Side:** AI-generated playbook ideas based on the concept.

**Review AI-generated Playbook for article/podcast: How to Increase Autophagy Without Fasting**

**GOAL OF ARTICLE/PODCAST:**
Increasing autophagy without fasting.

**DELEGATION IDEAS:**
-   Carlos can arrange for a nutritionist to develop a low-carb, moderate-protein meal plan for Chris...
-   Carlos can schedule and manage appointments for regular aerobic exercise sessions...
-   Carlos can source and set up regular deliveries of autophagy-stimulating supplements and foods, such as coffee, green tea, turmeric...
-   Carlos can research and book sessions in heat saunas and arrange for Chris to have access to these facilities...

---

## Rene Girard Autodelegator: Example 2

[Image: A composite image showing a research tool on the left and a generated playbook on the right, linked by an arrow.]

**Left Side:** A screenshot of a Google search results page for "increase vo2 max studies protocol" showing academic results and an "In-depth Research" panel.

**Right Side:** The generated playbook.

**PLAYBOOK: Autophagy Increase Playbook (Without Fasting)**

**Objective:**
Chris's goal is to increase autophagy without fasting. Carlos will lead the effort to create a systematized approach for Chris to achieve this goal with minimal effort.

**Playbook Steps:**
1.  **Dietary Adjustments:**
    -   Carlos will use meal planning apps to create a low-carb and moderate protein diet plan for Chris...
2.  **Supplements and Foods:**
    -   Carlos will set up recurring orders for coffee, green tea, turmeric, ginger...
3.  **Exercise Regimen:**
    -   Carlos will hire a personal trainer to design an aerobic exercise routine for Chris...
4.  **Heat Exposure:**
    -   Carlos will schedule regular sauna sessions for Chris at a local spa or gym...

---

## Screenshot Autodelegator

---

## Screenshot Autodelegator: Example

[Image: A screenshot of a desktop. A chat window (Beeper) is open, showing a conversation about connecting with a fellow from the Aspen Institute and discussing investment strategies. In the background of the chat, a STAT news article is visible with the headline "The gatekeeper: If you want to make it big in health care, it'll help to get past Lisa Suennen first."]

--

### Generated Task from Screenshot

[Image: A screenshot of a task management app showing the detailed task generated from the previous screenshot.]

**Schedule Intro with Aspen Institute Fellow for Chris**

**Primary Ask:**
Facilitate a connection with the woman from the Aspen Institute for Chris to talk with, as per the request in the conversation with Tuhin Sinha. Coordination should consider Chris's availability, preferring Mondays & Wednesdays from 1pm to 7pm Eastern, while taking into account Chris is currently in Mexico City.

**Potential Additional Action Items:**
-   Research the context around smaller plans being more attentive to ROI and certain types of evidence in regards to speculative venture/strategic investments.
-   Review the article visible in the background titled "The gatekeeper: If you want to make it big in health care, it'll help to get past Lisa Suennen first" for relevance to Chris's current projects and interests in health care.
-   Explore the possibility of scheduling warm introductions as mentioned by Tuhin Sinha, to ensure that Chris's network expansion is efficient and impactful.

--

### Screenshot Autodelegator: Workflow

[Image: A screenshot of the MacOS Shortcuts app, detailing the automation workflow.]

**Workflow Steps:**
-   Receive Images and Apps input from Quick Actions, What's On Screen
-   If no input, Continue.
-   If Shortcut Input does not have any value, Take Full Screen screenshot. Otherwise, Set variable screenshot to Shortcut Input.
-   Convert screenshot to JPEG.
-   Resize Converted Image to 768px width.
-   Get contents of a Zapier webhook URL.
-   Show notification "Screenshot sent to Delegation AI successfully!"

**Settings:**
-   The shortcut is set up as a Quick Action, available in Finder and the Services Menu.
-   It is triggered by the keyboard shortcut `^⌥⌘U`.

--

### Screenshot Autodelegator: Second Example

[Image: A screenshot showing a generated task in a mobile app. The task includes an image of the source text message conversation with Greg Kamradt scheduling a meeting.]

**Schedule Chris's Discussion with Greg Kamradt**

**Primary Action Item:**
-   Block off time on Chris's calendar on Friday, January 12th at 12 pm Pacific Time for a discussion with Greg Kamradt.

**Other Potential Tasks:**
-   Determine or propose the specific location for the meeting in San Francisco, considering the areas SOMA, Embarcadero, Hayes, or Mission.

**Above and Beyond Action Items:**
1.  Utilize Airtable or Google Sheets to establish a dynamic, easy-to-update database for potential meeting venues...
2.  Coordinate with Greg Kamradt's team to understand the agenda and scope of the discussion. Based on this, prepare a tailored briefing document for Chris in Notion...
3.  Implement a Zapier automation that triggers a notification to your Missive whenever a meeting involving stakeholders like Greg Kamradt is scheduled...

--

### Screenshot Autodelegator: With Agent Research

[Image: The same screenshot as the previous slide, but with an additional "Autodelegator Agent Research" section overlaid.]

**Autodelegator Agent Research**

**Research Query:**
Preemptively identify and list top-rated dining or meeting venues in SOMA, Embarcadero, Hayes, and Mission, and using Airtable, create a shortlist that includes each venue's proximity to Chris's prior engagements, noise level for meetings, and reservation policies, ready to suggest to Greg in case he requests recommendations.

**Answer:**
Based on the given data, here are some top-rated dining or meeting venues in the SOMA, Embarcadero, Hayes, and Mission areas in San Francisco:
1.  **Coqueta (Embarcadero):** This Spanish Tapas/Small Plates restaurant has received a rating of 4.0 based on 2.6k reviews...
2.  **Hog Island Oyster (Embarcadero):** This seafood restaurant and seafood market has a rating of 4.4 based on 7.1k reviews...
3.  **Bodega (SoMa):** This restaurant in the SoMa area has not received a specific rating, but it is mentioned as a top restaurant in the vicinity.

---

## Desktop Playbook Co-Pilot

---

## Desktop Playbook Co-Pilot: Example

[Image: A split-screen view showing a user booking a flight on the left and an AI co-pilot providing guidance on the right.]

-   **Left Screen:** The United Airlines website. A user is filling out a flight booking form:
    -   **Trip Type:** One-way, Book with miles
    -   **From:** San Francisco SFO
    -   **To:** Tokyo NRT
    -   **Date:** Feb 01
    -   **Class:** Business
-   **Right Screen:** A Telegram chat with the "Athena Playbook Co-Pilot bot". The bot provides a step-by-step workflow for the task shown on the left.
    -   **Executive Travel Coordination Workflow - Booking with Miles**
    -   **1. Understanding Loyal Programs and Policies:** Familiarize yourself with the frequent flyer programs... Review the mileage redemption charts...
    -   **2. Flight Selection:** Consider the timing of the flight... Look into the different cabin classes... Be aware of any additional fees...
    -   **3. Pre-Booking Checks:** Confirm the flight's availability... Check that Chris's mileage account has enough miles...

---

## AI Executive Coach Co-Pilot

Custom embeddings created based on personal and business goals / context via research agents for custom RAG pipelines with GPT Assistant API.

---

## AI Executive Coach Co-Pilot: Backend

[Image: A complex screenshot of the OpenAI Assistants API playground, showing the configuration of an AI executive coach.]

-   **Main Panel:** Shows a list of configured assistants, such as "Director" and "Research Manager".
-   **Instructions Panel:** Contains the detailed instructions for an assistant, including how it should behave and the tasks it should perform.
-   **Configuration Panel (Right):** Shows the settings for the "CY Assistant".
    -   **Name:** CY Assistant
    -   **Model:** gpt-4-1106-preview
    -   **Tools:** Functions (run_action, list_available_actions, queryVectara), Code Interpreter, and Retrieval are enabled.
    -   **Files:** A list of uploaded text files for the Retrieval-Augmented Generation (RAG) system, including `Reflections.txt`, `Profile.txt`, `TimeManagement.txt`, `Mochary (2021) The Great CEO Within.txt`, and `AthenaWay.txt`.

---

## Daily/Weekly Message via Telegram Bot

[Image: A screenshot of a message from the "CYAI" Telegram bot, providing a daily Most Important Task (MIT).]

**CYAI**
Chris's MIT for today should be to conceptualize and outline the operational manual for hiring and managing freelance talent that specializes in AI and behavioral science, capitalizing on his dual expertise areas to bolster ongoing projects with Athena and Cognitive. The deliverable would be an operational manual document that he and others can use to streamline the process of hiring and managing specialized freelance talent.

The MIT broken down into steps:
1.  Identify the key skills and qualities required from freelancers with AI and behavioral science backgrounds...
2.  Draft a hiring process that includes job post templates, assessment criteria, and an interview guide...
3.  Outline a management strategy that details the onboarding process, project management tools...
4.  Chris to write a section leveraging his expertise on how to apply behavioral science principles to maximize freelancer motivation...
5.  Carlos, as the EA with a no-code background, to link operational manual sections with AI-powered workflow suggestions...

---

## AI Executive Coach Interaction

Interactable as 24/7 exec coach, or via event-driven messages, in DM or Group Chat with EA.

**Next steps:**
-   Agent in group chat that performs tasks and reports back to client/EA team.
-   Diversifying into multiple bots with specialized roles, function calls, and RAG resources, and
-   EA-specific AI coach.

[Image: A screenshot of a Telegram chat with the "CYAI" bot.]

**User:** Can you suggest a high leverage task I can delegate to Carlos based on the existing txt files?

**CYAI:** A high leverage task you can delegate to Carlos, based on the insights from the annual review, would be the optimization of your standard operating procedures (SOPs) and systematizing the process for content creation and networking. This task involves taking actions that directly contribute to improved efficiency, productivity, and value generation in your work.

Steps Carlos can undertake:
1.  Evaluate and refine existing SOPs for AI workflows and content creation based on the successful experiences outlined in the Reflections.txt file, focusing on processes that have led to outsized benefits.

---

## AI-Assisted Voice Delegation

---

## AI-Assisted Voice Delegation: Workflow

[Image: A screenshot of a workflow automation tool, likely MacOS Shortcuts.]

**Left Panel (Workflow Steps):**
-   Show notification: "Transcribing via Deepgram..."
-   Get contents of Deepgram API URL.
-   Get dictionary from Contents of URL.
-   Pretty print Dictionary.
-   Extract values for 'results', 'channels', 'alternatives', and 'transcript' from the dictionary.
-   ...and more steps.

**Right Panel (Prompt & Logic):**
-   A text box contains a prompt instructing the AI to act as an expert in transforming voice notes into actionable items based on the CLEAR framework (`Context`, `Limits`, `Expectation`, `Accountability`).
-   Subsequent workflow steps include:
    -   Trim leading and trailing whitespace from Text.
    -   Transform Text with JavaScript.
    -   Set a variable `prompt2`.
    -   Get contents of Anthropic API URL (to send to Claude).
    -   ...and final steps to process the AI response.

--

### AI-Assisted Voice Delegation: The Prompt

[Image: A close-up of the text prompt used in the voice delegation workflow.]

You are an expert at transforming these voice notes into actionable items based on the CLEAR framework described in `<framework></framework>` XML tags below:

`<framework>`
1.  **Context:** Articulate the why behind what you're asking. This helps the chief-of-staff make better decisions on your behalf.
2.  **Limits:** Set boundaries for what's acceptable and unacceptable in the ask. Define boundaries and a reasonable margin of error.
3.  **Expectation:** Establish priority, timeline and deliverable for the outcome. Helps align your expectations for the outcome and gives you EA clearer picture of what success looks like.
4.  **Accountability:** Delineate ownership between the delegator and delegated. Handoff responsibility. Be clear on the level of involvement you want.
`</framework>`

---

## Revealed Preferences SOP Generator

Using special Gmail searches, we filter and extract clients' preferences, have an LLM extract the key info for each result email, and then generate an SOP from the combined data points.

---

## Revealed Preferences SOP Generator: Workflow

[Image: A screenshot of a 6-step visual workflow for generating a Flight SOP.]

1.  **Get Last X Reservation Emails:** Source: Gmail.
2.  **Edit Fields:** Manual step.
3.  **Limit:** Filter items.
4.  **Analyze Flights:** AI chat completion step.
5.  **Aggregate Analysis:** AI step.
6.  **Generate SOP:** Final AI chat completion step.

---

## Flight Booking SOP

[Image: A screenshot of the generated Flight Booking SOP document.]

**Flight Booking SOP - Preferences Analysis**
The following analysis has been compiled from the given flight data to help inform the creation of an SOP for booking flights.

**General Preferences**
| Preference | Details |
| --- | --- |
| Airline Loyalty | United Airlines, All Nippon Airways, Air Canada, American Airline |
| Fare Class | Business Preferred; Economy considered based on flight duration and price |
| Seat Preference | Aisle for ease of access, window seats occasionally; preference for front of plane |
| Price Consideration| Use of points for longer flights (especially international), cash for shorter/domestic flights |

**Fare Class and Seating**
-   Business class is preferred primarily for international or longer flights...
-   Preferences for seating tend to favor the front of the plane when available...

**Price Range and Payment Method**
-   Longer or more expensive flights are often paid for with points, supplemented with cash for fees.

---

## Hotel Booking SOP

[Image: A screenshot of the generated Hotel Booking SOP document.]

**Hotel Booking Standard Operating Procedure (SOP)**

**Preferred Hotel Brands and Membership Details**
-   Marriott properties are frequently booked (Residence Inn, AC Hotel, Courtyard by Marriott).
-   Christopher York is a Marriott Bonvoy Gold Elite member - use account for exclusive benefits.
-   Hilton properties also form part of hotel selections...

**Reservation and Payment Methods**
-   Booking methods vary; past records include direct bookings, use of credit cards, Apple Pay, and cash.
-   Marriott Bonvoy App is often utilized for convenience and less contact.

**Room Preferences**
-   AC Hotel King Rooms are commonly selected; bed size preferences lean towards King when specified.
-   Guest rooms are typically booked for 1 adult...

**Check-In and Check-Out Times**
-   Standard check-in times are normally 03:00 PM.
-   Standard check-out times are typically 12:00 PM.

---

## ATHENA

chrisyork@athenago.com

To skip the waitlist for Athena & get matched with an AI-savvy EA, **email us here**