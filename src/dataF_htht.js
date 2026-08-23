/* The Hard Thing About Hard Things — Ben Horowitz — 9 ideas */
window.DB.ideas.push(

{
  id: "htht-the-struggle", num: 1, book_id: "htht", category: "leadership",
  title: "The Struggle",
  thesis: "The decisions that matter most have no recipe, and the person making them feels terrible.",
  reading_time: 3,
  explanation: [
    "Horowitz gives a name to the state of running something that is failing while everybody watches. Revenue is short, the best engineer has resigned, the board is asking questions with edges on them, and the chief executive is not sleeping. The point of naming it is that the experience is standard rather than a signal of personal defect, and almost nobody says so out loud.",
    "Management books describe the parts of the job that generalise, which are the parts that are not hard. What Horowitz calls the hard things are specific and unrepeatable: whether to keep a division open, whether to tell a customer the truth about a defect, whether to fire a friend. Each arrives with incomplete information, no precedent that fits, and a genuine possibility that any answer is wrong.",
    "His practical advice is modest, which is appropriate to the subject. Do not carry it alone, since the isolation is self-imposed and does more damage than the disclosure would. Focus on the move rather than the odds, because the odds are not actionable. And keep playing, because companies that look finished from inside have recovered often enough that the inside view is not evidence."
  ],
  practical: {
    label: "Example: in the middle of it",
    lead: "Reduce the problem to the next decision, and make sure at least one person hears the whole picture.",
    bullets: [
      "What is the single next decision, and when must it be made?",
      "Who knows the full position, apart from me?",
      "Which of these problems is fatal this quarter and which is merely bad?",
      "Am I confusing how I feel with how the company is doing?",
      "What would I tell someone else in this position?"
    ]
  },
  application:
    "The board seat has a specific use here, which is to be the place the founder can say the worst version out loud without triggering a governance process. That requires separating the two functions in time: a call for the unvarnished position, and a meeting where decisions get made. Investors who collapse them get a managed version of reality and lose the early warning.",
  models: ["decision-quality", "narrative-fallacy", "base-rates", "loss-aversion"],
  connections: [
    { to: "htht-tell-the-truth", type: "extends" },
    { to: "htht-courage-over-intelligence", type: "reinforces" },
    { to: "cinc-fear", type: "related" },
    { to: "pom-luck-and-risk", type: "related" },
    { to: "temperament", type: "reinforces" }
  ],
  quote: null
},

{
  id: "htht-tell-the-truth", num: 2, book_id: "htht", category: "leadership",
  title: "Tell the Truth to the Company",
  thesis: "People can absorb bad news. What they cannot absorb is being managed.",
  reading_time: 3,
  explanation: [
    "The instinct when the numbers are bad is to protect the team from the information, on the theory that morale is fragile and the leader's job is to project confidence. Horowitz argues the opposite from experience. Employees already know something is wrong, because they can see the pipeline and the hiring freeze, and what the withholding costs is their belief that anything they are told is complete.",
    "There is also a practical argument. A company has far more problem solving capacity than its executive team, and a problem stated plainly to a thousand people gets attacked by everyone who has an idea about it. Concealment keeps the problem inside the small group least able to fix it and guarantees that the fix arrives late. Trust is the mechanism that makes the wider capacity reachable.",
    "Telling the truth is not the same as narrating anxiety. The version that works states the problem accurately, says what is being done, and is clear about what is not yet known. What destroys credibility is the reassuring statement that turns out to have been false, since one of those retrospectively reclassifies every previous statement as possibly false too."
  ],
  practical: {
    label: "Example: delivering bad news internally",
    lead: "State the problem, the plan and the open questions, in that order, and do it before rumour arrives.",
    bullets: [
      "What do people already suspect, and how long have they suspected it?",
      "Can I state the problem in one sentence without softening it?",
      "What am I doing about it, and by when?",
      "Which parts of this do I genuinely not know yet?",
      "Have I ever reassured this group about something that then went wrong?"
    ]
  },
  application:
    "The same standard applies upward, and the board sets it by how it reacts. If the first response to bad news is an investigation of the founder, the next piece of bad news arrives later and pre-packaged. Rewarding early disclosure explicitly, by dealing with the problem rather than the messenger, is one of the few levers an investor holds over information quality.",
  models: ["incentives", "feedback-loops", "authority-bias", "wysiati"],
  connections: [
    { to: "htht-minimising-politics", type: "reinforces" },
    { to: "htht-conducting-a-layoff", type: "extends" },
    { to: "cinc-candour-not-honesty", type: "reinforces" },
    { to: "ewb-candid-reporting", type: "reinforces" },
    { to: "cinc-hidden-problems", type: "related" }
  ],
  quote: null
},

{
  id: "htht-wartime-peacetime", num: 3, book_id: "htht", category: "leadership",
  title: "Wartime and Peacetime",
  thesis: "Peacetime and wartime are different jobs, and the same person has to do both.",
  reading_time: 3,
  explanation: [
    "Peacetime is when a company has a large lead in its market and the work is expansion: broadening the product, developing people, encouraging initiative from anywhere in the organisation. Wartime is when the company faces an existential threat, from a competitor, a change in the market or its own cash position, and the work is survival on a single axis.",
    "The behaviours that are correct in one are wrong in the other. A peacetime leader tolerates deviation from the plan because good ideas come from unexpected places. A wartime leader does not, because a company with one path to survival cannot afford effort spent elsewhere. Tolerance, consensus and broad delegation are virtues in the first setting and liabilities in the second.",
    "The difficulty is switching. Most leaders have a natural mode, and the failure is running the wrong one for a year: peacetime behaviour while the company burns, or wartime behaviour after the threat has passed, which drives out the people who joined to build something. Recognising which state you are in is a separate skill from operating well in either."
  ],
  practical: {
    label: "Example: naming the state",
    lead: "Decide which state the company is in, say it out loud, and then behave consistently with it.",
    bullets: [
      "Is there a threat that could end this company within twelve months?",
      "If so, what is the single path through it?",
      "Which of my current behaviours belongs to the other state?",
      "Does the team know which state we are in?",
      "What will tell us that the war is over?"
    ]
  },
  application:
    "Investors misdiagnose this in both directions. Pushing a wartime chief executive to build consensus wastes the runway, and leaving a wartime operator in place through three good years empties the senior bench. The board's contribution is a clear reading of which state the company is actually in, and a willingness to say that the person who got it through the war may not be the right leader afterwards.",
  models: ["strategy-kernel", "constraint", "inflection-point", "decision-quality"],
  connections: [
    { to: "htht-the-struggle", type: "related" },
    { to: "htht-courage-over-intelligence", type: "reinforces" },
    { to: "tos-outsider-temperament", type: "contrasts" },
    { to: "cap-culture-enforces-horizon", type: "contrasts" },
    { to: "tpl-founder-power", type: "related" }
  ],
  quote: null
},

{
  id: "htht-conducting-a-layoff", num: 4, book_id: "htht", category: "leadership",
  title: "How to Conduct a Layoff",
  thesis: "Decide fast, be honest about why, and make managers deliver it themselves.",
  reading_time: 3,
  explanation: [
    "Horowitz treats a layoff as an execution problem with known failure modes. Delay is the first: once the decision is made, every day of leaked speculation destroys trust among the people who are staying, who are the ones the company depends on afterwards. The event should happen within days of the decision, not weeks. Cutting once and deeply enough beats cutting twice.",
    "The second is the reason given. The company failed to hit its plan, and saying that plainly is what allows the people leaving to keep their standing and the people staying to keep their trust. Blaming individual performance is both untrue and corrosive, since everyone can see that competent people are in the group being let go.",
    "The third is delegation. Each manager tells their own people, in person, rather than a human resources function processing the list. It is the least comfortable option and the only one that preserves the manager's authority, because a manager who could not face the conversation has told the remaining team something permanent about what they can expect."
  ],
  practical: {
    label: "Example: running the day",
    lead: "Move quickly, train the managers on the message, and hold one honest all-hands after the conversations are done.",
    bullets: [
      "How many days between the decision and the conversations?",
      "Is the stated reason the real reason, in one sentence?",
      "Is every manager delivering the news to their own people?",
      "Have we cut deeply enough to avoid doing this again?",
      "What are we saying to the people who remain, and when?"
    ]
  },
  application:
    "A board's usual failure is pushing for a smaller cut to protect the growth story, which produces a second layoff two quarters later at roughly double the cost in trust. Size the reduction against a runway that survives a bad case, then get out of the way on execution. The one thing worth insisting on is that managers deliver it themselves.",
  models: ["loss-aversion", "incentives", "second-order", "decision-quality"],
  connections: [
    { to: "htht-tell-the-truth", type: "extends" },
    { to: "htht-demoting-a-loyal-executive", type: "related" },
    { to: "avoiding-ruin", type: "related" },
    { to: "cinc-candour-not-honesty", type: "reinforces" },
    { to: "tmit-defence-first", type: "related" }
  ],
  quote: null
},

{
  id: "htht-demoting-a-loyal-executive", num: 5, book_id: "htht", category: "people",
  title: "Demoting the Loyal Executive",
  thesis: "Someone who was excellent at fifty people can be wrong for five hundred.",
  reading_time: 3,
  explanation: [
    "Companies that grow quickly outgrow their own executives, and the mechanism is not failure. A person who ran engineering brilliantly at thirty staff may not be able to run it at three hundred, because the second job is mostly organisational design and the first was mostly building. Nothing about them has got worse. The role has changed underneath them.",
    "Loyalty makes the decision harder and does not change it. Horowitz is direct about the obligation running to the company and its employees rather than to the individual, and about the fact that keeping someone in a job they cannot do is a decision to let everyone under them be badly managed. The delay is usually about the chief executive's discomfort.",
    "How it is done determines what the company learns from it. The honest framing is that the company changed and the role changed, said in those terms to the person and to the organisation. Generosity in the terms is warranted, and a fictional reason is not, because the organisation will construct its own explanation and the fiction only makes the constructed version worse."
  ],
  practical: {
    label: "Example: assessing an executive against the next stage",
    lead: "Judge the person against the job the company will have in a year, not the job they were hired into.",
    bullets: [
      "What will this role require at three times the current size?",
      "Has this person run something of that scale, or shown they can learn it?",
      "Would I hire them into the role as it now stands?",
      "Who is being poorly managed while I postpone this?",
      "Am I delaying for the company's sake or for my own?"
    ]
  },
  application:
    "Founders raise this with investors later than they should, so asking about it early is useful. A practical version is to review the executive team against the plan for the next stage each year, before anyone is in difficulty, which makes the conversation structural rather than personal. Helping the founder handle the exit well protects the reputation the company needs to hire the replacement.",
  models: ["loss-aversion", "endowment", "opportunity-cost", "incentives"],
  connections: [
    { to: "htht-hire-for-strength", type: "related" },
    { to: "htht-training-your-people", type: "related" },
    { to: "htht-tell-the-truth", type: "reinforces" },
    { to: "cap-ownership-and-tenure", type: "related" },
    { to: "csup-people-depth", type: "related" }
  ],
  quote: null
},

{
  id: "htht-hire-for-strength", num: 6, book_id: "htht", category: "people",
  title: "Hire for Strength, Not Absence of Weakness",
  thesis: "Screening for the fewest flaws selects the candidate who is exceptional at nothing.",
  reading_time: 3,
  explanation: [
    "Committee hiring converges on the candidate nobody objects to. Every interviewer contributes a concern, concerns accumulate against the distinctive people, and the person left standing is the one with the smallest surface area. Horowitz's position is that this process reliably selects competence and reliably excludes the people who would have changed the company's trajectory. Strength and weakness are not opposites in a candidate.",
    "The alternative requires knowing what strength you are buying. Write down what this person must be outstanding at, hire for that, and then decide which weaknesses are survivable given the rest of the team. A brilliant salesperson who is disorganised is a hiring decision plus an operations hire. A tidy salesperson who cannot sell is a vacancy that looks filled.",
    "One weakness is not survivable, and the distinction matters. Gaps in capability can be covered by structure, and defects of integrity cannot, because they compound through everyone the person touches and they are the one thing a reference check is actually good at surfacing. The strength criterion is not permission to ignore character, and Horowitz keeps the two categories firmly apart."
  ],
  practical: {
    label: "Example: writing the hiring bar",
    lead: "Decide what this hire must be outstanding at before meeting anybody, then hold every objection against that.",
    bullets: [
      "What must this person be exceptional at for us to win?",
      "Which weaknesses can this team absorb, and which would break it?",
      "Is this objection about capability or about unfamiliarity?",
      "Are we choosing the strongest candidate or the least objectionable one?",
      "What has this person actually done, as against described?"
    ]
  },
  application:
    "Board involvement in senior hiring usually adds risk aversion, because directors carry the cost of a visible mistake and not the cost of a mediocre appointment. The more useful contribution is to press on what the role must deliver and whether the shortlist contains anybody capable of it. A strong candidate with an obvious flaw is often the right answer, provided the flaw is named and covered.",
  models: ["base-rates", "halo-effect", "circle-of-competence", "checklist"],
  connections: [
    { to: "htht-demoting-a-loyal-executive", type: "related" },
    { to: "htht-training-your-people", type: "extends" },
    { to: "cap-hiring-for-temperament", type: "contrasts" },
    { to: "zto-founding-team", type: "related" },
    { to: "halo-the-halo-effect", type: "related" }
  ],
  quote: null
},

{
  id: "htht-training-your-people", num: 7, book_id: "htht", category: "people",
  title: "Training Is the Manager's Job",
  thesis: "The highest return activity available to a manager is the one most reliably postponed.",
  reading_time: 3,
  explanation: [
    "Horowitz borrows Andy Grove's arithmetic. A manager who spends twelve hours preparing and delivering a course to ten people has spent twelve hours to improve the output of ten staff for the rest of their tenure, which is a return no other use of those hours approaches. The calculation is not close and it is almost never acted on.",
    "The reason it is skipped is that the cost is immediate and visible while the benefit is delayed and unattributable. Nobody notices the training that was not run. What they notice is the deal that was not closed this week, so the hours go to the deal, every week, and the company accumulates people who were never told how the job is done here.",
    "Two conditions make it work. The manager has to deliver it personally, because handing training to an outside provider communicates that the content is not what this company actually believes. And it has to be expected rather than encouraged, since anything voluntary in a busy organisation is a statement about priority that everyone reads correctly. Grove's rule was that no manager hires without a training plan."
  ],
  practical: {
    label: "Example: standing up a training habit",
    lead: "Pick the one course only you can teach, run it monthly, and require attendance rather than inviting it.",
    bullets: [
      "What do new people here consistently get wrong in their first month?",
      "Which course could only be taught by someone inside this company?",
      "Is training on the calendar, or on a list of intentions?",
      "Do managers teach it themselves, or is it outsourced?",
      "What proportion of new hires completed it last quarter?"
    ]
  },
  application:
    "Onboarding and training are almost absent from diligence and predict a great deal about whether a company can absorb a hiring plan. Ask what happens to a new salesperson in their first fortnight and how long it takes them to reach quota. A company funding sixty hires with no answer to that is buying dilution and calling it growth.",
  models: ["compounding", "return-on-capital", "opportunity-cost", "constraint"],
  connections: [
    { to: "htht-hire-for-strength", type: "extends" },
    { to: "htht-minimising-politics", type: "related" },
    { to: "compounding", type: "reinforces" },
    { to: "cap-organisational-excellence", type: "reinforces" },
    { to: "csup-people-depth", type: "related" }
  ],
  quote: null
},

{
  id: "htht-minimising-politics", num: 8, book_id: "htht", category: "leadership",
  title: "Minimising Politics",
  thesis: "Politics is a response to incentives, so remove the reward rather than asking for better behaviour.",
  reading_time: 3,
  explanation: [
    "Horowitz defines political behaviour narrowly as advancing a career by means other than contribution. It appears in growing companies without anybody intending it, and it is usually created by the chief executive rather than by the politicians. An executive who asks about a competing offer and receives a rise has taught the whole leadership team how compensation is set here.",
    "The general pattern is that ambiguity is the raw material. Where the criteria for promotion, pay and territory are undefined, influence becomes the deciding factor, because something has to decide and there is nothing else. The remedy is process: written criteria, decisions made in a forum with all the candidates in view, and no channel where a personal appeal can substitute for the criteria.",
    "This is why asking people to stop being political achieves nothing. The request leaves the payoff intact and adds the information that the leader believes the problem is character, which the political operators will use. What changes behaviour is that the approach stops working, visibly, on someone senior, once. Horowitz also names the harder case, the able executive whose ambition is for themselves rather than the company."
  ],
  practical: {
    label: "Example: finding the reward",
    lead: "Trace one recent political episode back to the decision that made it profitable, and change that decision.",
    bullets: [
      "How were the last three promotions and pay rises actually decided?",
      "Can anyone here improve their position by talking to me privately?",
      "Are the criteria for advancement written down and known?",
      "Which behaviour did I reward last quarter without meaning to?",
      "Is ambition here directed at the company or at the person?"
    ]
  },
  application:
    "Politics is largely invisible from a board seat and shows up as unexplained senior departures and executives who brief you separately. When a founder complains about a political executive, the more useful line of questioning is about how decisions on pay and scope get made, since the behaviour is usually rational given the process. Rewarding the founder for tightening the process beats sympathising about the person.",
  models: ["incentives", "feedback-loops", "second-order", "social-proof"],
  connections: [
    { to: "htht-tell-the-truth", type: "reinforces" },
    { to: "htht-training-your-people", type: "related" },
    { to: "incentives", type: "extends" },
    { to: "ewb-compensation", type: "reinforces" },
    { to: "cap-no-star-culture", type: "related" }
  ],
  quote: null
},

{
  id: "htht-courage-over-intelligence", num: 9, book_id: "htht", category: "leadership",
  title: "Courage, Not Intelligence",
  thesis: "In the hard decisions the binding constraint is willingness, not analysis.",
  reading_time: 3,
  explanation: [
    "Horowitz's observation is that on the decisions that matter, everybody in the room already knows the answer. The executive is not performing, the product will not work, the price is too low. What is missing is not the analysis but the willingness to say it and act, because the correct course is unpopular and the person who names it owns the consequences.",
    "More analysis is the standard evasion, and it is respectable, which is what makes it effective. Another month of data, another opinion, another model, and the decision is postponed without anybody having to admit to postponing it. The tell is that the new information never changes the answer, and the answer was already stated in the first meeting.",
    "Horowitz's claim is that courage is a habit rather than a trait, built by making the unpopular call when it is small, so that the muscle exists when the call is large. The corollary is uncomfortable: a leader who has avoided every small confrontation has been training the opposite habit, and will avoid the large one too."
  ],
  practical: {
    label: "Example: separating the two failures",
    lead: "When a decision keeps returning to the agenda, work out whether the missing input is information or nerve.",
    bullets: [
      "Do I already know the answer to this?",
      "What new information would actually change my decision?",
      "How many times has this item been deferred?",
      "What am I avoiding by asking for more analysis?",
      "Which small unpopular call have I ducked this month?"
    ]
  },
  application:
    "Investment committees have the same failure and the same disguise, since requesting further diligence is always defensible and never recorded as a decision. Worth asking, on any item that returns for a third time, what evidence would change the answer and whether anybody expects to get it. Boards can also supply the courage directly, by stating the unpopular view first so the founder is not alone in it.",
  models: ["inversion", "decision-quality", "dual-process", "loss-aversion"],
  connections: [
    { to: "htht-the-struggle", type: "reinforces" },
    { to: "htht-wartime-peacetime", type: "related" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "tib-not-sure", type: "contrasts" },
    { to: "cinc-braintrust", type: "related" }
  ],
  quote: null
}

);
