# Athena AI Experiments Showcase

---

## Organizational Structure

[Image: An organizational chart with three dark grey circles at the top level labeled "Client", "LLM" (Large Language Model), and "EA" (Executive Assistant). The "LLM" circle is connected by lines to a row of five dark grey circles at the bottom level, labeled "Agent 1", "Agent 2", "Agent N", "Agent N", "Agent N". This illustrates the LLM coordinating multiple agents under the guidance of a client and EA.]

---

## Data Flow Diagram

[Image: A flow diagram with a central dark grey square labeled "Data" at the top. Below "Data" is a dark grey circle labeled "LLM". The "Data" square has downward arrows pointing to "LLM". The "LLM" circle is connected to two other dark grey circles, "Client" and "EA", by a double-headed horizontal arrow. Additionally, "Data" is connected by arrows to four other dark grey circles at the bottom: "Business", "Client", "EA", and "Team". The arrows from "Business", "Client", "EA", and "Team" all point upwards to "Data", indicating these entities feed data into the system, which is then processed by the LLM and interacts with Client and EA.]

---

## Projects

- Delegation Automation
    - Email Autodelegator & Autodrafter
    - Call Autodelegator & Agents
- Delegation Upskilling + Goal Alignment
    - AI Weekly Review & Delegation Coach
    - Goal Autodelegator
    - René Girard Autodelegator
- Lower Friction
    - iOS/MacOS Screenshot Autodelegator
    - AI-Assisted Voice Delegation

---

## Email Autodelegator & Autodrafter

---

## Email Autodelegator

[Image: A flow diagram illustrating the Email Autodelegator process. On the left, a "triggers" box contains "M Gmail", "X Missive", and "SUPERHUMAN" logos. Arrows from these trigger platforms point to a central "Action steps" box. Inside "Action steps", "Airtable" is described as "Used to store and retrieve client & EA context", with an arrow pointing to "OpenAI". "OpenAI" is described as "Turns unstructured data (emails) into actionable delegation", with an arrow pointing to "Webhook". "Webhook" is described as "API calls to research tools like Tavily allow us to further enrich the autodelegation". On the far right, a "possible outputs" box lists logos for "X MISSIVE", "asana", "TickTick", "N Notion", and "Notes", showing where the delegated tasks can be sent.]

---

## Email Autodelegator

[Image: A screenshot showing the output of the Email Autodelegator for an email regarding a 2022 Balance Sheet. The interface displays an "Email Summary", "Autodelegator AI Action Items" (Detected and Optional), and details from the email message. The content is presented in a text-based format, resembling a task management or email client's AI-generated summary.]

- Review autodelegator tasks from [Ignacio Cotto email re: RE: 2022 Balance Sheet]
- Message URL:
    - [missive://mail.missiveapp.com/#inbox/conversations/80519c25-383b-4725-a797-01853b21711a]
- Email Summary:
    - Ignacio Cotto from eTrends Group will soon be sending Carlos Lucero confirmation emails for filing and tax payments related to the Income Tax Return, Volume of Business Tax Return, and Exempt Annual Report. These returns are due on the upcoming Friday. Carlos is advised to monitor his email closely to ensure these tasks are completed timely. Carlos has already provided a 2022 Balance Sheet via Google Sheets for Ignacio's use and review.
- Autodelegator AI Action Items
    - Action Items (Detected):
        - Monitor the email for incoming confirmation emails from Ignacio Cotto regarding the filing and tax payments for the Income Tax Return, Volume of Business Tax Return, and Exempt Annual Report.
        - Ensure that all the returns mentioned are completed and submitted before the due date, which is this Friday.
        - Once the confirmations are received, close all pending tasks for 2022.
    - Above and Beyond Action Items (Optional):
        - 1. Prepare a checklist or timeline in TickTick, detailing the steps leading up to the submission of the tax returns and reports due this Friday, including a review of the confirmations received from Ignacio Cotto. Set reminders to check Missive frequently for these confirmations and any follow-up actions required immediately upon receipt.
        - 2. Create a shared Airtable base or Coda doc with Ignacio Cotto that outlines the status of the tax returns and any related action items, allowing for real-time updates and transparent communication between both parties on the progress and completion of the

---

## Email Autodelegator

[Image: A screenshot displaying the output of the Email Autodelegator, similar to the previous slide, but this example includes "Autodelegator Agent Research" with a query and answer. Two purple arrows on the left side of the slide point from the "Autodelegator Agent Research" query to its "Answer" section, highlighting the automated research capability.]

- Email Summary:
    - Emil Jerndal from Invenio Growth has responded to Carlos Lucero, Executive Assistant to Chris York, confirming that an 8pm EET call next week works for him. He suggests that Thursday might be a suitable day. The action item for Carlos is to coordinate with Chris York to confirm if a call on Thursday at this time is possible. The call is intended to discuss a potential collaboration on a fintech & impact tech focused corporate venture capital for a top global brand.
- Autodelegator AI Action Items
    - Action Items (Detected):
        - Carlos needs to schedule a call with Chris and Emil for next week at 7 pm Sthlm time, preferably on Thursday.
        - Carlos should also inform Vincent Weir about the scheduled call as he was BCC'd in the email.
    - Above and Beyond Action Items (Optional):
        - 1. Confirm the scheduled call with Emil and Vincent in their respective time zones using Cal.com, ensuring the calendar event automatically adjusts for Sthlm and CDMX time zones to avoid any confusion.
        - 2. Prepare a brief on Invenio Growth's activities and Emil Jerndal's background from public data to provide Chris with context, which can be stored in a shared Dropbox folder and linked in the calendar event.
        - 3. Set up an automated reminder for Chris using TickTick to review the brief 24 hours before the scheduled call, allowing sufficient time for any follow-up questions he may have.
- Autodelegator Agent Research
    - Research Query:
        - Prepare a brief on Invenio Growth's activities and Emil Jerndal's background from public data
    - Answer:
        - Emil Jerndal is a Venture Associate at Invenio Growth and has over 8 years of experience in various industries including IT consulting, corporate finance, and security. He has held roles such as controller, project manager, and team leader. Emil Jerndal is actively involved in strategy consulting and innovation at Invenio Growth. He has been a speaker at the Future of Fintech Summit and has evaluated startup pitches at the Nordic Early-Stage Startup Summit.

---

## Email Autodrafter

[Image: A comprehensive flow diagram illustrating the Email Autodrafter process. On the far left, a "trigger" box with "M Gmail" indicates incoming emails. An arrow leads to "OpenAI Service" (described as determining significance) and "Airtable Database" (storing client/EA context). OpenAI branches into questions (e.g., "Is this coming from a real person?", "Are they expecting a reply?"). The "LLM uses its own reasoning + retrieves relevant context to analyze email" block processes these. A decision point "Is the email important?" leads to "Who should respond?" (Client or EA). Both Client and EA paths involve "M Gmail" to "Look up emails sent... as writing sample". Finally, a large "OpenAI" block "Creates email draft using **email thread + sample + context**". The "output is saved to preferred platform" connects to various output apps like "asana", "M Gmail", "TickTick", "X Missive", "Notes", "SUPERHUMAN". An "Exit workflow" path is shown for "Not important" emails.]

---

### Email Autodrafter - Context Gathering

[Image: A simplified flow diagram, focusing on the left and central parts of the Email Autodrafter process. It shows the "trigger" (Gmail) flowing into "OpenAI Service" and "Airtable Database". OpenAI analyzes significance and asks questions (e.g., "Is this coming from a real person?", "Are they expecting a reply?", "Trying to market or sell me something?", "Would I regret it if I didn't reply to this?"). Airtable provides context (e.g., "What are the client's preferred meeting slots?", "What projects is the client working on?", "Client's user manual", "What SaaS apps does the client use?", "Where is the client located right now?", "Who are the most important people in the client's life?"). The "LLM uses its own reasoning + retrieves relevant context to analyze email" block is central, integrating these inputs.]

---

### Email Autodrafter - Draft Creation

[Image: A simplified flow diagram, focusing on the right part of the Email Autodrafter process. It begins with the decision point "Who should respond?" which branches into "Client" and "EA" paths. Both paths lead to "M Gmail" blocks, where emails sent by the Client or EA on the topic are looked up as writing samples. These inputs then feed into a large "OpenAI" block, which is described as creating "email draft using **email thread + sample + context**".]

---

## Call/Meeting Autodelegator

---

## Call/Meeting Autodelegator Workflow

[Image: A vertical flow chart illustrating a Zapier workflow for a Call/Meeting Autodelegator. The workflow begins with a "Trigger" (1. Get most recent meeting in Fireflies). Subsequent steps are: 2. Load Client & EA Context, 3. Upload to Google Docs, 4. Find Google Doc, 5. Extract transcript, 6. Summary, 7. Extract action items via GPT4-1106, 8. Evaluate and rank delegation ideas, 9. Present the winning ideas, 10. Expand the winning ideas. Each step is represented by a card with an icon and title, connected by downward arrows.]

---

## Call/Meeting Autodelegator

[Image: A screenshot displaying a text output from the Call/Meeting Autodelegator, outlining an action item, breakdown of steps, implied next steps, potential questions, and possible unexpected outcomes for a podcast invitation. The content is formatted like a structured report.]

- ACTION ITEM: Reflect on the possibility of appearing on Nathan's AI podcast and decide whether to accept the invitation
- BREAKDOWN OF STEPS:
    - 1. Gather information about Nathan's AI podcast, including audience demographics, reach, and previous guests.
    - 2. Evaluate how the podcast's theme aligns with Chris's work with Athena and his expertise in behavioral science.
    - 3. Assess the potential benefits for Chris and Athena, such as increased visibility and networking opportunities.
    - 4. Present the findings to Chris and provide a recommendation based on the alignment and potential benefits.
    - 5. If Chris decides to accept the invitation, coordinate with Nathan's team to schedule the podcast recording according to Chris's availability.
- IMPLIED NEXT STEPS:
    - 1. If Chris agrees to appear on the podcast, prepare a list of talking points and key messages that Chris may want to convey.
    - 2. Arrange a pre-podcast briefing with Chris to go over the talking points and address any questions he may have.
    - 3. Post-podcast, you could organize a debrief session to discuss the outcomes and any follow-up actions.
- POTENTIAL QUESTIONS:
    - 1. 'What topics would be most beneficial to discuss on the podcast to align with our strategic goals?'
        - Chris might answer: 'We should focus on the intersection of AI and behavioral science, and how it's shaping the future of virtual assistance.'
    - 2. 'How might appearing on this podcast affect our current projects and workload?'
        - Chris might answer: 'It should have minimal impact on our workload, but it could provide a good opportunity to showcase our recent advancements in AI.'
- POSSIBLE UNEXPECTED OUTCOMES:
    - 1. The podcast recording schedule may conflict with Chris's other commitments.
        - You can negotiate with Nathan's team for a recording time that fits Chris's schedule or explore the possibility of pre-recording the session.
    - 2. The podcast may generate unexpected interest or opportunities that require a quick response.
        - You can set up a process in Airtable to track inquiries and opportunities that arise from the podcast appearance and ensure timely responses.

---

## Call/Meeting Autodelegator

[Image: A screenshot displaying a text output from the Call/Meeting Autodelegator, outlining an action item, breakdown of steps, implied next steps, potential questions, and possible unexpected outcomes for providing a list of customer intelligence and sales enrichment tools. The content is formatted like a structured report.]

- Review action items from from [Cognitive coaching meeting]
- ACTION ITEM: Provide Lou Kishfy with a list of customer intelligence and sales enrichment tools like Mad Kudu and Clearbit.
- BREAKDOWN OF STEPS:
    - 1. Research and identify a range of customer intelligence and sales enrichment tools that are similar to Mad Kudu and Clearbit.
    - 2. Evaluate each tool based on its features, compatibility with current systems, pricing, and customer reviews.
    - 3. Create a comparison chart in Google Sheets that includes the pros and cons of each tool to help Lou make an informed decision.
    - 4. Draft an email in Missive with the comparison chart attached, briefly summarizing the key points and offering to discuss the options in more detail.
    - 5. Send the email to Lou Kishfy and schedule a follow-up meeting via Reclaim to discuss the options if he expresses interest.
- IMPLIED NEXT STEPS:
    - 1. After Lou reviews the list, offer to arrange demos with the providers of the top tools he's interested in.
    - 2. Prepare a list of questions to ask during the demos to ensure all of Lou's concerns and requirements are addressed.
    - 3. If Lou decides on a tool, assist with the procurement process and integration into the company's current tech stack.
- POTENTIAL QUESTIONS:
    - 1. 'How do these tools integrate with our existing CRM and marketing platforms?'
        - Chris might answer: 'Most modern tools offer API integrations, but we'll need to confirm compatibility with our specific systems and possibly utilize Zapier for any custom connections.'
    - 2. 'What is our budget for these tools?'
        - Chris might answer: 'We're looking for the best ROI, so while we have a budget in mind, we're flexible if the tool can demonstrably improve our user acquisition and conversion rates.'
- POSSIBLE UNEXPECTED OUTCOMES:
    - 1. Lou might find that none of the tools perfectly fit their needs.
        - In this case, you could explore custom solutions or reach out to the tool providers to discuss potential customizations.
    - 2. Integration of the chosen tool might be more complex than anticipated.
        - Coordinate with the IT department to assess the situation and, if necessary, arrange for professional services from the tool provider for a smooth integration.

---

## Weekly Review AI

---

## Weekly Review AI

[Image: A screenshot showing the output from a "Weekly Review AI" for "Goals Review & Coaching for the week". The content provides a "Calendar Review" with actionable insights and suggestions for three main areas: "Nanny Hiring Process", "Investor Relations", and "Strategic Planning". The text is presented in a structured bullet-point format.]

- Goals Review & Coaching for the week
- Calendar Review:
    - 1. Reviewing your calendar events from the past week, it doesn't appear that there were any specific meetings or tasks scheduled that directly address your goals of hiring an amazing nanny or raising $25M for Athena.
    - 2. Looking at the recurring events, such as the Khosla pre-IC meeting, Chris and Emil meeting, Monthly Athena Client Panel, and Riva and MBS Bi-Weekly Cadence Meetings, there are likely components of these meetings that could be handled by your CoS or EA. For example, your EA could take charge of meeting preparation, follow-up actions, and coordination tasks, thus freeing up more of your time for high-impact activities.
    - 3. To move closer to your goals, consider scheduling time for the following activities that leverage your unique position and skills:
        - Nanny Hiring Process: Set aside a block of time to define the ideal attributes and educational background you're seeking in a nanny. Then, you can task your EA with sourcing candidates and arranging interviews based on the criteria you've set. However, the final interviews and hiring decision should be made by you to ensure a good match for your child.
        - Investor Relations: Schedule a strategy session for crafting a compelling narrative around Athena's vision and growth potential. This can be a solo activity or with key team members, but your insights as an executive will be crucial. Following this, you can delegate the outreach and initial meeting setup to your EA or CoS.
        - Strategic Planning: Reserve time for high-level strategic planning to refine Athena's pitch to top VC firms. This includes reviewing financial models, growth strategies, and potential risks. This cannot be delegated as it requires your deep understanding of the business and the market.
- Implementing a more structured approach to your calendar by including these strategic blocks of time will ensure you are actively moving towards your goals each week.

---

## Weekly Review AI

[Image: A screenshot showing the output from a "Weekly Review AI" providing "DELEGATION IDEAS" for the goal of "Hire an amazing nanny who takes care of + teaches our 3 year old child". The content lists several detailed bullet points for tasks Carlos can undertake, such as background checks, education focus, networking, search, job description, trial period, feedback, collaborative framework, and schedule planning.]

- Review AI ideas for goal: Hire an amazing nanny who takes care of + teaches our 3 year old child
- DELEGATION IDEAS:
    - 1. Background Checks and Interview Coordination: Carlos can initiate comprehensive background checks on nanny candidates and arrange interviews. He could also use AI-driven personality tests to help assess compatibility with the child's needs and family values.
    - 2. Early Childhood Education Focus: Instruct Carlos to prioritize candidates with credentials or experience in early childhood education, possibly using LinkedIn Learning or Coursera to verify or enhance their skills.
    - 3. Leverage Networking for Referrals: Carlos should reach out to Chris's personal and professional networks for nanny recommendations, employing social media and professional platforms to cast a wide net.
    - Educational Nanny Search: Have Carlos search for nannies with a background in teaching or tutoring to support the child's educational development, using specialized recruitment platforms that cater to educators.
    - Job Description Development: Carlos can draft a comprehensive job description that clearly outlines both childcare and teaching responsibilities, incorporating insights from Chris to ensure alignment with specific expectations.
    - Trial Period Management: Set up a trial period for the nanny candidates and devise a structured assessment tool for Chris to evaluate their performance and fit.
    - Feedback Loop Establishment: Create a feedback system for Chris and the nanny, possibly utilizing weekly check-in templates and real-time messaging apps for continuous communication.
    - Collaborative Environment Framework: Carlos can draft guidelines for fostering a collaborative relationship with the nanny that encourages open dialogue and sharing of ideas.
    - Routine and Schedule Planning: Design a clear routine and schedule for the child's daily activities, which Carlos can regularly update and share with the nanny through a shared digital calendar

---

## Goal Autodelegator

---

## Goal Autodelegator

[Image: A composite screenshot showing a "Metaphor" search interface on the left and a "Review AI ideas for goal" and "PLAYBOOK" output on the right. The Metaphor search is for "the best article on how to increase vo2 max" and shows a Python code snippet. The right panel details delegation ideas and a preparation phase for increasing VO2max. A purple arrow visually connects the search results on the left to the playbook on the right, indicating that the search informs the playbook.]

- Metaphor
    - the best article on how to increase vo2 max:
    - Site Filter Any Time SEARCH
    - - triathlete.com/training/how-to-improve-your-vo2-max/
        - How to Increase VO2 Max
    - - runnersworld.com/training/a20781494/improving-your-max-vo2/
        - Improving your Max VO2
    - - active.com/running/articles/how-to-maximize-your-vo2max-training
        - How to Maximize Your VO2max Training
    - - runkeeper.com/cms/training/how-to-boost-your-vo2-max/
        - How to Boost Your VO2 Max
    - - lifehacker.com/how-to-improve-your-vo2-max-1849681809
        - How to Improve Your VO2 Max
    - See more
    - Add this search to your AI
    ```python
    #pip install metaphor-python
    from metaphor_python import Metaphor
    metaphor = Metaphor("2c5cb12a-f09e-4245-98e8-bf527cea3e68")
    response = metaphor.search(
        "the most comprehensive, evidence-based guide to increa
        max:",
        num_results=10,
        use_autoprompt=True,
    )
    RESPONSE
    {
        "autopromptString": "\"Here is the most comprehensive, evid
        "results": [
        {
            "url": "https://
            "title": "How to
            "publishedDate":
            "author": "Susan
            "id": "nDJ-7-7IIN
        },
        {
            "title": "The VO2 Max Boost MAPS Fitness Products
            "url": "https://www.mindpumpmedia.com/vo2-max-boost
            "publishedDate": "2023-01-01",
            "author": "Mind Pump Media; LLC",
            "id": "D101eB6DGWxXKwyQADqprg" Get contents
            "score": 0.2233896255493164
        }
        ]
    }
    ```
- Review AI ideas for goal: - Increase VO2max from 35 to 40 mL/kg/min
- DELEGATION IDEAS:
    - Research and identify a reputable sports scientist or exercise physiologist who specializes in VO2max improvement and arrange an initial consultation for Chris.
    - Set up a personalized training schedule for Chris that includes a mix of high-intensity interval training (HIIT), steady-state cardio, and strength training, based on the expert's recommendations.
    - Automate reminders for Chris's workouts, nutrition, and recovery sessions using a calendar app with alerts.
    - Organize the purchase and delivery of any necessary equipment for Chris's training regimen, such as a heart rate monitor or high-quality running shoes.
    - Coordinate with a nutritionist to develop a meal plan that supports VO2max improvement, focusing on macronutrient balance and adequate caloric intake for recovery.
    - Implement a tracking system using a fitness app or wearable device to monitor Chris's heart rate, workout intensity, and progress towards the VO2max goal.
    - Arrange regular check-ins between Chris and the sports scientist to assess progress and make any necessary adjustments to the training plan.
    - Research and summarize the latest findings on supplements or dietary additions that may aid in increasing VO2max, and present options to Chris for consideration.
    - Schedule and manage appointments for any additional recovery methods recommended by the expert, such as massage therapy or cryotherapy.
    - Create a progress report template that Carlos can use to update Chris weekly on his VO2max improvement journey, including insights from data collected through tracking tools.
    - Ensure that Carlos has access to any software or tools necessary to manage and streamline the above tasks, such as subscription management for apps or integration with Chris's existing technology ecosystem.
- PLAYBOOK:
    - PLAYBOOK: Increase VO2max from 35 to 40 for Chris
    - Preparation Phase:
        - 1. Carlos, please schedule an appointment for Chris with a sports physician to evaluate current fitness levels and to get clearance for a new exercise regimen aimed at increasing VO2max.
        - 2. Research and compile a list of certified personal trainers who specialize in aerobic conditioning and VO2max improvement.
        - 3. Set up a structured training program that includes:
            - High-Intensity Interval Training (HIIT)
            - Steady-State Cardio
            - Strength training sessions focused on leg muscles
            - Flexibility and mobility workouts

---

## Rene Girard Autodelegator

---

## Rene Girard Autodelegator

[Image: A screenshot showing a YouTube video on the left displaying a complex biological diagram titled "Energy Starvation", illustrating pathways for Cell Growth and Autophagy involving AMPK, mTOR, ULK1, and related proteins. The video's title is "How to Increase Autophagy Without Fasting". On the right, AI-generated "DELEGATION IDEAS" are presented for the goal of "Increasing autophagy without fasting." A green arrow connects the YouTube video to the delegation ideas, indicating the video serves as a source for the AI's recommendations.]

- Review AI-generated Playbook for article/podcast [How to Increase Autophagy Without Fasting]
- GOAL OF ARTICLE/PODCAST:
    - Increasing autophagy without fasting.
- DELEGATION IDEAS:
    - Carlos can arrange for a nutritionist to develop a low-carb, moderate-protein meal plan for Chris that aligns with his goals and schedule regular deliveries of the necessary ingredients or prepared meals.
    - Carlos can schedule and manage appointments for regular aerobic exercise sessions, including booking personal trainers or signing Chris up for relevant classes, and ensure that Chris's fitness tracker is synced with his calendar for automatic workout logging.
    - Carlos can source and set up regular deliveries of autophagy-stimulating supplements and foods, such as coffee, green tea, turmeric, ginger, ginseng, medicinal mushrooms, adaptogenic herbs, berberine, and elderberries.
    - Carlos can research and book sessions in heat saunas and arrange for Chris to have access to these facilities, potentially at a local spa or gym.
    - Carlos can coordinate with a healthcare provider to monitor Chris's biomarkers related to autophagy, such as glycogen levels and ketone production, and adjust the strategy as needed.
    - Carlos can look into booking lymphatic drainage massages or similar treatments to stimulate the lymph system, with the potential for enhancing autophagy.
    - Carlos can explore and propose a dry fasting protocol for Chris to consider, ensuring it's a feasible option that won't conflict with Chris's current health or schedule.
    - Carlos can set up a system to keep abreast of the latest research on autophagy, possibly using AI tools, and present digestible updates and recommendations to Chris regularly.
    - Carlos can automate and optimize the synchronization of all health-related activities (meals, supplements, exercise, sauna sessions, etc.) with Chris's personal and professional calendars.
    - Carlos can establish a feedback loop with Chris to refine and tweak the autophagy-boosting regimen based on Chris's experiences and preferences.

---

## Rene Girard Autodelegator

[Image: A composite screenshot showing a Google search page on the left, displaying results for "increase vo2 max studies protocol", with a highlighted snippet about a "10 weeks of training 6 days/week" protocol. On the right, a detailed "Autophagy Increase Playbook (Without Fasting)" is presented with an objective and several "Playbook Steps" for dietary adjustments, supplements, exercise, heat exposure, lymphatic stimulation, and insulin/mTOR management. A purple arrow visually connects the Google search results to the playbook, indicating that the search informs the playbook.]

- PLAYBOOK:
    - Autophagy Increase Playbook (Without Fasting)
- Objective:
    - Chris's goal is to increase autophagy without fasting. Carlos will lead the effort to create a systematized approach for Chris to achieve this goal with minimal effort.
- Playbook Steps:
    - 1. Dietary Adjustments:
        - Carlos will use meal planning apps to create a low-carb and moderate protein diet plan for Chris, ensuring that Chris maintains lower glycogen stores.
        - Carlos will integrate a grocery delivery service with the meal planning app through Zapier to automate the process of purchasing the necessary food items.
    - 2. Supplements and Foods:
        - Carlos will set up recurring orders for coffee, green tea, turmeric, ginger, ginseng, medicinal mushrooms, adaptogenic herbs, berberine, and elderberries to be delivered to Chris's residence or office.
        - Carlos will leverage an AI nutrition app to suggest optimal times for Chris to consume these autophagy-stimulating foods and supplements based on Chris's schedule.
    - 3. Exercise Regimen:
        - Carlos will hire a personal trainer to design an aerobic exercise routine for Chris that can be done with minimal equipment.
        - Carlos will set reminders for Chris's exercise sessions using a calendar app, and integrate wearable fitness trackers with Chris's calendar to log workouts automatically.
    - 4. Heat Exposure:
        - Carlos will schedule regular sauna sessions for Chris at a local spa or gym that offers heat saunas, syncing these appointments with Chris's calendar.
    - 5. Lymphatic Stimulation:
        - Carlos will book regular massages or lymphatic drainage sessions for Chris to stimulate the lymph system and thereby support autophagy.
    - 6. Insulin and mTOR Management:
        - Carlos will use an AI-driven health monitoring platform to track Chris's insulin levels and

---

## Screenshot Autodelegator

---

## Screenshot Autodelegator

[Image: A screenshot showing a Beeper chat window on the left, open to a conversation with Tuhin Sinha about warm introductions to a woman at the Aspen Institute, and a STAT news article on the right titled "The gatekeeper: If you want to make it big in health care, it'll help to get past Lisa Suennen first". The chat also references a link to "siphoxhealth.com" for at-home lab tests.]

---

## Screenshot Autodelegator

[Image: A mobile-like interface showing a generated output titled "Schedule Intro with Aspen Institute Fellow for Chris" (Tomorrow, Nov 17). The output includes a "Primary Ask", "Potential Additional Action Items", and "Above and Beyond Action Items". The background is a blurred version of the Beeper chat and STAT article screenshot from the previous slide, indicating it was the source for this generated output.]

- Schedule Intro with Aspen Institute Fellow for Chris
- Primary Ask:
    - Facilitate a connection with the woman from the Aspen Institute for Chris to talk with, as per the request in the conversation with Tuhin Sinha. Coordination should consider Chris's availability, preferring Mondays & Wednesdays from 1pm to 7pm Eastern, while taking into account Chris is currently in Mexico City.
- Potential Additional Action Items:
    - Research the context around smaller plans being more attentive to ROI and certain types of evidence in regards to speculative venture/strategic investments. This information may inform future strategic decisions for Chris's consulting projects or roles.
    - Review the article visible in the background titled "The gatekeeper: If you want to make it big in health care, it'll help to get past Lisa Suennen first" for relevance to Chris's current projects and interests in health care.
    - Explore the possibility of scheduling warm introductions as mentioned by Tuhin Sinha, to ensure that Chris's network expansion is efficient and impactful, taking note that warm intros are still considered important.
- Above and Beyond Action Items:
    - 1. Utilize Airtable to create a comprehensive profile database of key contacts from the Aspen Institute and other relevant organizations. Include tags for areas of interest, past interactions, and potential future collaboration points with Chris. This preemptive step ensures personalized context for Chris in future conversations and strategic networking.
    - 2. Curate a briefing document using Coda or Notion that synthesizes the latest research on ROI for speculative venture investments and evidence-based strategies. Include a section for direct applications to Chris's consulting projects. Provide this ahead of any meetings with investors or consulting clients to ensure Chris is well-prepared with cutting-edge insights.
    - 3. Configure Zapier to automate a workflow between TickTick and Reclaim, where action items from meetings, especially those requiring follow-up introductions or connections, are instantly scheduled into Chris's preferred time slots. This streamlines the process, ensuring no opportunity for networking is missed due to manual scheduling errors or delays.

---

## Screenshot Autodelegator

[Image: A screenshot of a MacOS Shortcuts app workflow titled "MacOS Screenshot Autodelegator". The workflow includes steps like "Receive Images and Apps", conditional logic ("If Shortcut Input does not have any value"), "Take Full Screen screenshot", "Set variable", "Convert screenshot to JPEG", "Resize Converted Image", "Get contents of" a Zapier webhook URL, and "Show notification Screenshot sent to Delegation AI successfully!". On the right, the shortcut's setup options are visible, with red arrows pointing to "Provide Output" and "Run with: ^U".]

---

## Schedule Chris's Discussion with Greg Kamradt

[Image: A screenshot of a mobile chat interface with Greg Kamradt, overlaid on a blurred background that appears to be the same chat. The chat content shows a discussion about scheduling a meeting on January 10th or 12th, with a final agreement for Friday, January 12th at 12pm. It also includes a query about the meeting location preferences (SOMA, Embarcadero, Hayes, or Mission).]

- Primary Action Item:
    - Block off time on Chris's calendar on Friday, January 12th at 12 pm Pacific Time for a discussion with Greg Kamradt.
- Other Potential Tasks:
    - Determine or propose the specific location for the meeting in San Francisco, considering the areas SOMA, Embarcadero, Hayes, or Mission.
- Above and Beyond Action Items:
    - 1. Utilize Airtable or Google Sheets to establish a dynamic, easy-to-update database for potential meeting venues, including essential details such as preferences, amenities, security levels, privacy, and proximity to other appointments. Share access with relevant team members to streamline the selection process for current and future engagements.
    - 2. Coordinate with Greg Kamradt's team to understand the agenda and scope of the discussion. Based on this, prepare a tailored briefing document for Chris in Notion, including potential questions to ask, and background information on the topic. Schedule a 15-minute pre-meeting brief with Chris on the morning of the meeting for a rundown.
    - 3. Implement a Zapier automation that triggers a notification to your Missive whenever a meeting involving stakeholders like Greg Kamradt is scheduled or updated in Cal.com, prompting a review of the relevant CRM notes in Airtable to ensure all pertinent client history and details are fresh and top of mind.

---

## Schedule Chris's Discussion with Greg Kamradt

[Image: A screenshot of a mobile chat interface with Greg Kamradt. The right panel displays the "Autodelegator Agent Research" output, which is a list of top-rated dining/meeting venues in San Francisco's SOMA, Embarcadero, Hayes, and Mission areas, with details such as ratings and offerings. This output is presented as the answer to a research query to identify suitable venues, generated from the context of the chat conversation.]

- Primary
    - **Autodelegator Agent Research**
- Research Query:
    - Preemptively identify and list top-rated dining or meeting venues in SOMA, Embarcadero, Hayes, and Mission, and using Airtable, create a shortlist that includes each venue's proximity to Chris's prior engagements, noise level for meetings, and reservation policies, ready to suggest to Greg in case he requests recommendations.
- Answer:
    - Based on the given data, here are some top-rated dining or meeting venues in the SOMA, Embarcadero, Hayes, and Mission areas in San Francisco:
        - **1. Coqueta (Embarcadero):** This Spanish Tapas/Small Plates restaurant has received a rating of 4.0 based on 2.6k reviews. It offers delicious food and drinks, with options for everyone. They have outdoor seating and takeout options available.
        - **2. Hog Island Oyster (Embarcadero):** This seafood restaurant and seafood market has a rating of 4.4 based on 7.1k reviews. They offer fresh oysters and other seafood options.
        - **3. Bodega (SoMa):** This restaurant in the SoMa area has not received a specific rating, but it is mentioned as a top restaurant in the vicinity. Unfortunately, no further information is provided.
        - **4. Corzetti (SoMa):** This wine bar and Italian restaurant has received a rating of 4.2 based on 103 reviews. It offers great food, service, and atmosphere. The Pana Cotta is highly recommended. It has outdoor seating and delivery/takeout options.
        - **5. Bocado (SoMa):** This Peruvian restaurant and cocktail bar has received a rating of 4.4 based on 134 reviews. It offers a variety of Peruvian dishes and desserts. It has outdoor seating and is closed until 4:00 PM tomorrow.
    - Please note that the data provided is based on the available information at the time of the query and may be subject to change. It is recommended to check the individual restaurant websites or review platforms for the most up-to-date information on noise levels, reservation policies, and proximity to popular locations.

---

## Desktop Playbook Co-Pilot

---

## Desktop Playbook Co-Pilot

[Image: A screenshot showing a United Airlines flight booking page open on the left, displaying a search from San Francisco (SFO) to Tokyo (NRT) for February 01 for 1 adult. On the right, a Telegram chat window shows the "Athena Playbook Co-Pilot bot" providing guidance for "Executive Travel Coordination Workflow - Booking with Miles", detailing steps for understanding loyalty programs, flight selection, and pre-booking checks.]

---

## AI Executive Coach Co-Pilot

Custom embeddings created based on personal and business goals / context via research agents for custom RAG pipelines with GPT Assistant API

---

## AI Executive Coach Co-Pilot

Custom embeddings created based on personal and business goals / context via research agents for custom RAG pipelines with GPT Assistant API

---

## AI Executive Coach Co-Pilot

[Image: A screenshot of the OpenAI Assistants interface. The left panel shows "Assistants" with options like Playground, Fine-tuning, API keys, Files, Usage, Settings, and a list of specific assistants. The main central panel displays a Google search page for "increase vo2 max studies protocol" with a "Metaphor" search section and a Python code block. The right panel details the "CY Assistant", specifying its role as an executive coach or chief of staff for Chris York, its model ("gpt-4-1106-preview"), and lists available "Tools" (Functions, Code interpreter, Retrieval) and "Files" (Reflections.txt, Profile.txt, TimeManagement.txt, Mochary (2021) The Great CEO Within.txt, AthenaWay.txt).]

---

## Daily / Weekly Message via Telegram Bot

[Image: A screenshot of a Telegram chat window with a message from "CYAI". The message outlines Chris's "MIT for today" (Most Important Task) to conceptualize and outline an operational manual for hiring and managing freelance talent, broken down into seven detailed steps. The message also includes a note about reviewing and finalizing the manual with Carlos after completion.]

- CYAI
- Chris's MIT for today should be to conceptualize and outline the operational manual for hiring and managing freelance talent that specializes in AI and behavioral science, capitalizing on his dual expertise areas to bolster ongoing projects with Athena and Cognitive. The deliverable would be an operational manual document that he and others can use to streamline the process of hiring and managing specialized freelance talent.
- The MIT broken down into steps:
    - 1. Identify the key skills and qualities required from freelancers with AI and behavioral science backgrounds, particularly those that complement Chris's existing projects at Athena and Cognitive.
    - 2. Draft a hiring process that includes job post templates, assessment criteria, and an interview guide tailored to uncover candidates' expertise and fit.
    - 3. Outline a management strategy that details the onboarding process, project management tools, communication guidelines, and KPIs for performance evaluation.
    - 4. Chris to write a section leveraging his expertise on how to apply behavioral science principles to maximize freelancer motivation and productivity.
    - 5. Carlos, as the EA with a no-code background, to link operational manual sections with AI-powered workflow suggestions, using tools like Airtable and Zapier for project management automation.
    - 6. Brainstorm incentives for high-quality work and continuous learning opportunities for freelancers that align with principles from behavioral science and AI advancements.
    - 7. Allocate 2-4 hours of deep work time to complete the draft and delegate extra research or supplementary material compilation to Carlos or a hired research assistant.
- After completion, Chris can review the document and schedule a call with Carlos to finalize the operational manual, which will be used across his business ventures to optimize the freelance talent recruitment and management process.

---

## Interactable as 24/7 exec coach, or via event-driven messages, in DM or Group Chat with EA

[Image: A mobile phone screenshot displaying a Telegram chat with "CYAI". The user asks, "Can you suggest a high leverage task I can delegate to Carlos based on the existing txt files?". A pop-up "Unread Messages" box shows CYAI's response, suggesting the optimization of standard operating procedures (SOPs) and systematizing content creation and networking, with an initial step for Carlos to undertake.]

- Next steps:
    - agent in group chat that performs tasks and reports back to client/EA team,
    - diversifying into multiple bots with specialized roles, function calls, and RAG resources, and
    - EA-specific AI coach
- CYAI
- Can you suggest a high leverage task I can delegate to Carlos based on the existing txt files?
- Unread Messages
- A high leverage task you can delegate to Carlos, based on the insights from the annual review, would be the optimization of your standard operating procedures (SOPs) and systematizing the process for content creation and networking. This task involves taking actions that directly contribute to improved efficiency, productivity, and value generation in your work.
- Steps Carlos can undertake:
    - 1. Evaluate and refine existing SOPs for AI workflows and content creation based on the successful experiences outlined in the Reflections.txt file, focusing on processes that have led to outsized benefits.

---

## AI-Assisted Voice Delegation

---

## AI-Assisted Voice Delegation

[Image: A screenshot of an Apple Shortcuts workflow, showing a series of actions to process voice notes. Actions on the left include transcribing via Deepgram, getting dictionary contents, pretty printing, getting values from dictionaries/lists, trimming whitespace, and saving the transcript. On the right, a text box defines the "CLEAR framework" (Context, Limits, Expectation, Accountability) and lists tasks for processing the transcript, such as cleaning, converting to paragraphs, and not making up details. Further actions include transforming text and sending notifications (e.g., "Transcript done! Sending to Claude...").]

---

## AI-Assisted Voice Delegation

[Image: A zoomed-in screenshot of a text box detailing the "CLEAR framework" for transforming voice notes into actionable items. The framework outlines four components: Context, Limits, Expectation, and Accountability, with descriptions for each to guide the chief-of-staff or EA in decision-making and task delegation.]

- You are an expert at transforming these voice notes into actionable items based on the CLEAR framework described in <framework></framework> XML tags below:
- <framework>
    - 1. Context: Articulate the why behind what you're asking. This helps the chief-of-staff make better decisions on your behalf.
    - 2. Limits: Set boundaries for what's acceptable and unacceptable in the ask. Define boundaries and a reasonable margin of error.
    - 3. Expectation: Establish priority, timeline and deliverable for the outcome. Helps align your expectations for the outcome and gives you EA clearer picture of what success looks like.
    - 4. Accountability: Delineate ownership between the delegator and delegated. Handoff responsibility. Be clear on the level of involvement you want.
- </framework>

---

## Revealed Preferences SOP Generator

Using special Gmail searches, we filter and extract clients' preferences, have an LLM extract the key info for each result email, and then generate an SOP from the combined data points.

---

## Revealed Preferences SOP Generator - Flights

[Image: A horizontal flow diagram showing the workflow for "Revealed Preferences SOP Generator - Flights". It begins with "Get Last X Reservation Emails" (33 items), followed by "Edit Fields" (manual, 33 items), then "Limit" (25 items). These lead to "Analyze Flights" (complete: chat, 25 items), then "Aggregate Analysis" (1 item), and finally "Generate SOP" (complete: chat, 1 item). Each step is represented by a card with an icon and title, connected by arrows.]

---

## Flight Booking SOP

[Image: A document titled "Flight Booking SOP - Preferences Analysis" detailing general preferences for flight bookings, including airline loyalty, fare class, seat preference, price consideration, baggage allowance, layover preferences, booking method, and additional considerations. It further categorizes information under "Fare Class and Seating", "Price Range and Payment Method", "Layovers and Airports", "Additional Notes", "Baggage Policy", and "Further Considerations for SOP", providing detailed bullet points for each.]

- Flight Booking SOP - Preferences Analysis
- The following analysis has been compiled from the given flight data to help inform the creation of an SOP for booking flights. The details listed below highlight common preferences and trends that should be considered when arranging travel for the chief of staff or executive assistant.
- General Preferences
| Preference | Details |
|---|---|
| Airline Loyalty | United Airlines, All Nippon Airways, Air Canada, American Airline |
| Fare Class | Business Preferred; Economy considered based on flight duration and price |
| Seat Preference | Aisle for ease of access, window seats occasionally; preference for front of plane |
| Price Consideration | Use of points for longer flights (especially international), cash for shorter/domestic flights |
| Baggage Allowance | First bag often free in chosen fare class; weight limit range 50-70lbs (23-32kg) |
| Layover Preferences | Direct flights preferred; longer layovers acceptable if required |
| Booking Method | Primarily through United's MileagePlus account indicating loyalty program benefits; also direct cash/card payments |
| Additional Considerations | Refundable tickets valued more for certain routes; MileagePlus accrual when possible |
- Fare Class and Seating
    - Business class is preferred primarily for international or longer flights, with economy being chosen for shorter, domestic flights.
    - Preferences for seating tend to favor the front of the plane when available, and choices are often made for aisle seats for ease of access.
    - There is also a willingness to pay for comfort upgrades such as "Economy Plus Seating" for better legroom or seat preference on longer flights.
- Price Range and Payment Method
    - Longer or more expensive flights are often paid for with points, supplemented with cash for fees.
    - Domestic or short-haul flights tend to be paid with cash (or credit card).
    - Premium fare classes are chosen if the price differential is reasonable and justified by the flight's duration or the comforts provided.
- Layovers and Airports
    - The pattern shows a preference for direct flights wherever possible.
    - For necessary layovers, preferred layover airports are not specifically mentioned, so should aim for minimum disruption and good on-terminal facilities.
    - Layover durations are not explicitly stated, but it could be inferred that shorter layovers are preferred to reduce total travel time.
- Additional Notes
    - There appears to be a consideration for refunding policy, as some flights are non-refundable, and costs are justified against flexibility in travel plans.
    - Economy purchases are willing to include fees for comforts like preferred seating and extra legroom.
    - Important notifications such as COVID-19 policies, baggage limitation notices, and cancellations are standard and expected information.
- Baggage Policy
    - Free checked baggage is a common selection when available as part of the ticket class benefits.
    - There is a tendency to carry two bags, often avoiding extra baggage fees due to membership status or choice of fare class.
- Further Considerations for SOP
    - Look out for the possibility of using airline points to maximize value on necessary flights.
    - Seek out memberships with relevant airlines to have access to perks such as free baggage and priority boarding wherever possible.
    - Track prices and book early when possible to secure best rates and preferred seating.
    - Provide for travel comfort on long-haul flights by selecting premium fare classes with enhanced seating comfort.
    - Include policy details about international travel requirements, notify travellers of any likely cancellations or overbooking policies.

---

## Hotel Booking SOP

[Image: A document titled "Hotel Booking Standard Operating Procedure (SOP)" detailing preferred hotel brands, membership details, reservation and payment methods, room preferences, check-in/check-out times, amenities, cancellation policy, and additional considerations. The content is presented in a structured bullet-point format.]

- Hotel Booking Standard Operating Procedure (SOP)
- Preferred Hotel Brands and Membership Details
    - Marriott properties are frequently booked (Residence Inn, AC Hotel, Courtyard by Marriott). Use of Marriott Bonvoy points is encouraged where possible.
    - Christopher York is a Marriott Bonvoy Gold Elite member – use account for exclusive benefits.
    - Hilton properties also form part of hotel selections (Hilton Hotels & Resorts, Embassy Suites).
    - Non-Marriott and non-Hilton bookings are undertaken, with a preference for properties such as APA Hotel & Resort, Hyatt Place, Hyatt Regency, Nobis Hospitality Group hotels.
- Reservation and Payment Methods
    - Booking methods vary; past records include direct bookings, use of credit cards, Apple Pay, and cash.
    - Credit Card Guarantees are common, with Visa being the preferred credit card.
    - Marriott Bonvoy App is often utilized for convenience and less contact.
    - Manage bookings online when applicable (Hotel U14).
- Room Preferences
    - AC Hotel King Rooms are commonly selected; bed size preferences lean towards King when specified.
    - Guest rooms are typically booked for 1 adult, occasionally with additional guests, including children.
    - Double Rooms have been reserved at APA properties.
    - Studio rooms are booked for extended stays at Blique by Nobis.
- Check-In and Check-Out Times
    - Standard check-in times are normally 03:00 PM.
    - Standard check-out times are typically 12:00 PM.
    - APA Hotel has a check-in time of 15:00 PM and check-out at 10:00 AM on specified dates.
    - Arrival times are sometimes specified when making special requests.
- Amenities and Additional Services
    - Discounted breakfast and other offers for food and beverage are taken when available (Blique by Nobis).
    - Prioritize booking hotels that offer flexible housekeeping services and options for less frequent service.
    - Fitness centers and gyms, as well as sauna access, are valued when available.
    - Residential-style stays often include weekly cleaning services (Blique by Nobis).
- Cancellation Policy and Special Requests
    - Cancellation policies vary. Most bookings allow free cancellation up to the day before arrival.
    - Special requests include late arrival accommodation guarantees and specific arrival times.
    - Long stays should have clear cancellation terms, especially regarding free cancellation periods and extensions (Blique by Nobis).
- Additional Considerations
    - When booking long stays, ensure there is an option for extension and clarity on pre-payment and cancellation policies.
    - For Marriott reservations, use the Bonvoy App to take advantage of Gold Elite benefits such as Member Rates, and Free Wi-Fi.
    - Link Marriott Bonvoy and Uber accounts when beneficial to earn extra points.
    - Ensure the choice hotel complies with health and safety guidelines (Global Care & Cleanliness Commitment).
    - Utilize properties' apps or online services for a more efficient stay and check-in/out process.
    - This SOP is subject to updates as travel requirements and preferences change.

---

## Contact

[Image: The ATHENA logo, featuring a stylized hourglass with a horizontal line through its center.]

- chrisyork@athenago.com
- To skip the waitlist for Athena & get matched with an AI-savvy EA, email us here

---

## Want to make a presentation like this one?

[Image: The Pitch logo in white text against a dark background, surrounded by abstract, colorful, blurred shapes in purple, orange, and blue hues, creating a dynamic visual effect.]

Start with a fully customizable template, create a beautiful deck in minutes, then easily share it with anyone.

[Create a presentation (It's free)](https://pitch.com/create)