/* Thinking, Fast and Slow — Daniel Kahneman — 12 ideas */
window.DB.ideas.push(

{
  id: "tfs-two-systems", num: 1, book_id: "tfs", category: "decision-making",
  title: "Two Systems",
  thesis: "One mind, two modes: fast and automatic, slow and effortful. Most of your thinking is the fast one.",
  reading_time: 3,
  explanation: [
    "Kahneman's organising device is two characters. System 1 is fast, automatic, associative and always running: it reads faces, completes sentences, and produces impressions without being asked. System 2 is slow, sequential and effortful: it does arithmetic, checks arguments, and holds two ideas in mind at once. It is also lazy, and it costs energy to run.",
    "The division of labour is efficient and mostly invisible. System 1 generates a suggestion, System 2 endorses it with little scrutiny, and the resulting judgement feels like a considered view. What you experience as thinking is usually a fast impression that has been waved through.",
    "The practical consequence is that you cannot improve judgement by trying harder in the moment, because the impression has already formed. You can only intervene at the level of situations: slow the process down, introduce a checklist, or set up conditions where System 2 is engaged before the answer arrives rather than after."
  ],
  practical: {
    label: "Example: catching the fast answer",
    lead: "The useful skill is not being smarter, it is recognising the situations where a fast impression should not be trusted.",
    bullets: [
      "Did I form a view on this in under five seconds, and have I revisited it since?",
      "Am I tired, rushed or hungry, all of which reduce the effortful checking?",
      "Is this a judgement where I have real feedback and pattern recognition, or one that merely feels familiar?",
      "What would I have to calculate, rather than sense, to answer this properly?",
      "Have I written the reasoning down, which forces the slow system to participate?"
    ]
  },
  application:
    "First meetings run almost entirely on System 1. The impression of a founder forms in minutes and then quietly organises the diligence that follows. The counter is structural: fixed questions asked of every company, an independent reader of the numbers who has not met the team, and a written view recorded before the room converges.",
  models: ["dual-process", "wysiati", "confirmation-bias", "anchoring"],
  connections: [
    { to: "tfs-wysiati", type: "extends" },
    { to: "tfs-substitution", type: "extends" },
    { to: "antidotes", type: "reinforces" },
    { to: "temperament", type: "related" },
    { to: "tib-not-sure", type: "related" }
  ],
  quote: {
    text: "We can be blind to the obvious, and we are also blind to our blindness.",
    attribution: "Daniel Kahneman, Thinking, Fast and Slow",
    why: "The second clause is the operative one. If the failure were merely that we miss things, more effort would fix it. Because we do not experience the gap, the fix has to come from outside the mind that has the gap."
  }
},

{
  id: "tfs-wysiati", num: 2, book_id: "tfs", category: "decision-making",
  title: "What You See Is All There Is",
  thesis: "The mind builds confident stories from whatever information happens to be present, and never accounts for what is missing.",
  reading_time: 3,
  explanation: [
    "Kahneman's abbreviation, WYSIATI, describes a specific failure: judgements are made from available evidence as though it were complete. The mind is very good at constructing a coherent account and has no mechanism for registering that a crucial fact was never supplied.",
    "This explains why confidence tracks coherence rather than quality of evidence. A simple, tidy story built from three facts produces more confidence than a complicated one built from thirty, because coherence is what the feeling of knowing responds to. Less information can therefore make you more certain.",
    "The remedy is to make absence visible. Asking what would be in a complete version of this picture, and who holds the information you do not have, converts an invisible gap into an item on a list."
  ],
  practical: {
    label: "Example: auditing the gap",
    lead: "Before deciding, list what you would need to know and mark what you actually have.",
    bullets: [
      "What are the three most important facts I do not have?",
      "Who has them, and what would it cost to ask?",
      "Is my confidence coming from the weight of evidence or the neatness of the story?",
      "Whose account of this situation have I not heard yet?",
      "If a fact arrived that broke the story, which fact would it be?"
    ]
  },
  application:
    "Every pitch is a curated information set, and it is designed to be coherent. The important work is naming what has been left out: the churned customers, the flat quarter, the co-founder who left. A diligence list that starts from missing information rather than from the deck's claims is doing a different and better job.",
  models: ["wysiati", "confirmation-bias", "survivorship", "base-rates"],
  connections: [
    { to: "tfs-two-systems", type: "extends" },
    { to: "confirmation-bias", type: "reinforces" },
    { to: "survivorship-bias", type: "related" },
    { to: "tfs-illusion-validity", type: "reinforces" },
    { to: "tib-not-sure", type: "contrasts" }
  ],
  quote: {
    text: "The confidence that individuals have in their beliefs depends mostly on the quality of the story they can tell about what they see, even if they see little.",
    attribution: "Daniel Kahneman, Thinking, Fast and Slow",
    why: "The last clause is the sting. Confidence tracks the quality of the story rather than the quantity of evidence, which means a well-told account and a well-supported one produce the same internal signal, and the signal cannot be used to tell them apart."
  }
},

{
  id: "tfs-substitution", num: 3, book_id: "tfs", category: "decision-making",
  title: "Substitution",
  thesis: "Faced with a hard question, the mind quietly answers an easier one instead.",
  reading_time: 2,
  explanation: [
    "When a question is difficult, System 1 finds a related question it can answer and answers that. \"How likely is this company to reach a hundred million in revenue?\" is hard. \"How impressive is this founder?\" is easy, and the second answer arrives dressed as the first.",
    "The substitution is undetectable from inside, because the easier question is genuinely relevant. Founder quality does matter. The error is that a partial and available signal has silently replaced the full and difficult one, and the confidence attached belongs to the easy question.",
    "Catching it requires stating the actual question in full. Written out, the gap between what you were asked and what you answered is usually obvious, which is one of the reasons writing improves judgement."
  ],
  practical: {
    label: "Example: naming the swap",
    lead: "Write the hard question at the top of the page, then check what you actually answered.",
    bullets: [
      "What is the precise question I am supposed to be answering?",
      "What easier question does my reasoning actually address?",
      "Am I using how much I like this as a proxy for whether it will work?",
      "Am I using effort or polish as a proxy for quality of outcome?",
      "What evidence would speak to the hard question directly?"
    ]
  },
  application:
    "Investment memos frequently substitute market size for market accessibility, growth rate for durability, and founder charisma for execution capability. Each substitute is easier to establish and each is a different question. Naming the substitution in the memo itself is a cheap discipline that survives scrutiny later.",
  models: ["dual-process", "wysiati", "anchoring", "confirmation-bias"],
  connections: [
    { to: "tfs-two-systems", type: "extends" },
    { to: "tfs-illusion-validity", type: "related" },
    { to: "liking-loving", type: "reinforces" },
    { to: "circle-of-competence", type: "related" },
    { to: "tfs-narrow-framing", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-planning-fallacy", num: 4, book_id: "tfs", category: "decision-making",
  title: "The Planning Fallacy",
  thesis: "Plans describe a best case, and the best case is not the base case.",
  reading_time: 2,
  explanation: [
    "Forecasts of cost and duration are built by imagining the project going as intended and adding a small allowance. Because the imagining is specific and the risks are generic, the specifics dominate and the estimate lands near the best possible outcome.",
    "The bias is remarkably durable. People who have overrun on every previous project still produce optimistic estimates for the next one, because each new plan is judged on its own details rather than against the record of similar plans.",
    "The correction is external. Take the class of comparable projects, find their actual distribution of outcomes, and start there. Kahneman's version of this is reference class forecasting, and its power comes precisely from ignoring the plan in front of you at the first step."
  ],
  practical: {
    label: "Example: correcting a plan",
    lead: "Estimate from the record of similar efforts before you look at this one's details.",
    bullets: [
      "How long did the last three comparable projects actually take?",
      "What did they cost against their original budget?",
      "What is the ratio of actual to planned, and have I applied it here?",
      "Does the plan contain any step that has never been done before by this team?",
      "What is the plan's implicit assumption about nothing going wrong?"
    ]
  },
  application:
    "Company plans are the raw material of venture underwriting and they are systematically optimistic, not dishonestly so. A useful convention is to underwrite the plan, then re-underwrite it at the historical realisation rate of comparable companies, and check that the investment still works on the second number.",
  models: ["planning-fallacy", "base-rates", "wysiati", "probability"],
  connections: [
    { to: "base-rates", type: "reinforces" },
    { to: "tfs-outside-view", type: "extends" },
    { to: "margin-of-safety", type: "reinforces" },
    { to: "tfs-premortem", type: "related" },
    { to: "tib-backcasting", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-outside-view", num: 5, book_id: "tfs", category: "decision-making",
  title: "The Outside View",
  thesis: "Judge this case by what happens to cases like it, not by the story inside it.",
  reading_time: 2,
  explanation: [
    "The inside view reasons from the particulars: this team, this plan, this market. The outside view reasons from the class: what happens, statistically, to efforts of this kind. Both are legitimate, but the inside view feels far more informative than it is, because detail is persuasive.",
    "Kahneman's recommendation is a specific order of operations. Establish the reference class and its distribution first. Then, and only then, adjust for what is genuinely distinctive about this case, and adjust less than feels right.",
    "The resistance to this is emotional rather than intellectual. Applying a class-level failure rate to a specific person or plan feels dismissive, particularly when you have met them. That discomfort is the cost of the correction, not evidence against it."
  ],
  practical: {
    label: "Example: two-step estimation",
    lead: "Build the estimate from outside in, and keep both numbers visible.",
    bullets: [
      "What is the reference class here, defined tightly enough to be useful?",
      "What is the distribution of outcomes in that class?",
      "What specifically about this case justifies departing from it?",
      "Is that factor causally linked to the outcome, or just distinctive?",
      "How far did I move from the base rate, and can I defend the size of the move?"
    ]
  },
  application:
    "This is the same instruction as base rates in Munger's language, arrived at from a different discipline, which is a reasonable signal that it matters. In practice it means the memo should carry two numbers: what happens to companies like this, and why this one departs from it.",
  models: ["base-rates", "planning-fallacy", "regression", "probability"],
  connections: [
    { to: "base-rates", type: "extends" },
    { to: "tfs-planning-fallacy", type: "reinforces" },
    { to: "regression-to-the-mean", type: "related" },
    { to: "tfs-illusion-validity", type: "related" },
    { to: "tib-luck-vs-skill", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-reference-points", num: 6, book_id: "tfs", category: "people",
  title: "Reference Points",
  thesis: "Gains and losses are measured from a moving reference point, not from absolute wealth.",
  reading_time: 3,
  explanation: [
    "Prospect theory's central move is that people do not evaluate outcomes in terms of final states. They evaluate changes relative to a reference point, usually the status quo or an expectation, and the same final position feels like a win or a loss depending on where the comparison sits.",
    "Two consequences follow. Losses loom larger than equivalent gains, roughly twice as large. And the reference point can be shifted by framing, which means the same choice can be made to feel like protecting a gain or avoiding a loss, producing opposite decisions from identical facts.",
    "Because reference points are set by expectation, they can be created. A number mentioned in a forecast, a valuation from a previous round, or a target communicated to a board all install a point from which everything afterwards is felt as gain or loss."
  ],
  practical: {
    label: "Example: finding the reference point",
    lead: "Before evaluating a choice, identify what it is being compared against and whether that comparison is the right one.",
    bullets: [
      "What is the implicit baseline in how this option was presented?",
      "Would this look different framed as a gain rather than as an avoided loss?",
      "Is my reluctance about the outcome, or about the outcome relative to what I expected?",
      "What would someone with no history in this position decide?",
      "Whose expectation set the number I am now measuring against?"
    ]
  },
  application:
    "The last round's valuation is a reference point rather than a fact, and it makes a flat round feel like a failure even when the business has improved. Boards that reset the reference point deliberately, by re-underwriting from current fundamentals, make materially better decisions about follow-on funding and exits.",
  models: ["loss-aversion", "anchoring", "narrow-framing", "endowment"],
  connections: [
    { to: "loss-aversion", type: "extends" },
    { to: "anchoring", type: "reinforces" },
    { to: "tfs-endowment", type: "extends" },
    { to: "tfs-narrow-framing", type: "related" },
    { to: "contrast-effects", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-endowment", num: 7, book_id: "tfs", category: "people",
  title: "The Endowment Effect",
  thesis: "Owning something raises its value to you, which is why people will not sell at prices they would never pay.",
  reading_time: 2,
  explanation: [
    "Once something is yours, giving it up registers as a loss, and losses are weighted more heavily than gains. So the price at which you would sell an item exceeds the price at which you would have bought it, sometimes by a large margin, with no change in the item.",
    "The effect is strongest for things held for use or identity rather than for trade. Professional traders show it far less for their inventory, because for them the goods were never reference points; this is evidence that the effect is about ownership framing rather than about value.",
    "It is a quiet but expensive source of inertia. Portfolios, product lines, org structures and personal commitments all persist past their usefulness partly because dismantling them registers as loss while keeping them registers as nothing at all."
  ],
  practical: {
    label: "Example: the sell-side test",
    lead: "Ask the buy question about something you already own.",
    bullets: [
      "Would I acquire this today, at today's price, with what I now know?",
      "If not, what am I actually holding on to?",
      "Would a new owner with no history run this differently, and better?",
      "Am I refusing a price I would never have paid?",
      "What is this position costing in attention as well as capital?"
    ]
  },
  application:
    "Portfolio reviews that show holdings without entry prices, and that ask the acquire-today question on every line, surface exits that otherwise get deferred indefinitely. The same test applied to a company's own product lines and customer segments usually finds one that survives on ownership rather than merit.",
  models: ["endowment", "loss-aversion", "opportunity-cost", "narrow-framing"],
  connections: [
    { to: "loss-aversion", type: "extends" },
    { to: "tfs-reference-points", type: "extends" },
    { to: "opportunity-cost", type: "contrasts" },
    { to: "commitment-and-consistency", type: "reinforces" },
    { to: "tii-mr-market", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-narrow-framing", num: 8, book_id: "tfs", category: "decision-making",
  title: "Narrow Framing",
  thesis: "Decisions considered one at a time produce worse results than the same decisions considered as a set.",
  reading_time: 2,
  explanation: [
    "Each decision evaluated in isolation gets its own risk assessment, and loss aversion applies at full strength every time. Taken as a portfolio, the same bets look quite different, because the variance across many independent decisions is much smaller than the variance of any one.",
    "So an organisation of individually sensible risk-avoiders produces an aggregate that is far too cautious. Each manager declines a favourable bet because they personally cannot afford the bad outcome, and the institution declines a whole set of favourable bets that it easily could have absorbed.",
    "The fix is a broad frame: a policy set once, at the level of the portfolio, that determines how individual cases are handled. Deciding the rule when calm is different from deciding each case while exposed."
  ],
  practical: {
    label: "Example: widening the frame",
    lead: "Move the decision up a level, from this case to the class of cases.",
    bullets: [
      "Is this the only decision of this kind I will make, or one of many?",
      "What policy would I want applied across all of them?",
      "Am I protecting the portfolio, or protecting myself within it?",
      "Would this risk be acceptable if it were one of twenty similar risks?",
      "Who bears the downside of the individual case, and who bears the cost of the aggregate caution?"
    ]
  },
  application:
    "Venture is a broad-frame activity run by narrow-frame humans. Position sizing set as policy, at the fund level, is what lets individual bets be taken on their expected value rather than on whether any one of them can be defended in isolation if it fails.",
  models: ["narrow-framing", "loss-aversion", "probability", "power-law"],
  connections: [
    { to: "loss-aversion", type: "contrasts" },
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "tfs-reference-points", type: "related" },
    { to: "tib-bets", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-illusion-validity", num: 9, book_id: "tfs", category: "learning",
  title: "The Illusion of Validity",
  thesis: "Confidence in a prediction is produced by the story, not by any track record of being right.",
  reading_time: 3,
  explanation: [
    "Kahneman's own formative experience was building officer-selection assessments that felt highly informative and predicted almost nothing. The striking part was that knowing the predictive record did not reduce the confidence felt during the next assessment; the feeling of insight is generated locally and is unaffected by the evidence about it.",
    "Skilled intuition is real, but it requires conditions: an environment regular enough to contain learnable patterns, and feedback fast and clear enough to learn them. Chess and firefighting have these. Long-horizon prediction in complex markets largely does not.",
    "So the useful question about any expert judgement, including your own, is not how confident it feels but whether the domain permits skill to develop at all. Where it does not, simple rules applied consistently tend to beat expert intuition."
  ],
  practical: {
    label: "Example: is this a learnable domain?",
    lead: "Test the conditions for skill before trusting the feeling of expertise.",
    bullets: [
      "Is the environment stable enough for patterns to repeat?",
      "Do I get feedback on this class of judgement, and how quickly?",
      "How many times have I made this call and later found out the answer?",
      "Is there a simple rule that has historically done as well?",
      "Am I confusing familiarity with the domain for predictive accuracy in it?"
    ]
  },
  application:
    "Investment judgement has slow, noisy and confounded feedback, which is exactly the environment in which the illusion of validity thrives. That argues for written criteria applied consistently, a scored checklist rather than a holistic impression, and an honest record of prior calls, because the intuition will feel identical whether or not it works.",
  models: ["wysiati", "regression", "base-rates", "decision-quality"],
  connections: [
    { to: "tfs-wysiati", type: "reinforces" },
    { to: "tfs-simple-rules", type: "extends" },
    { to: "outcome-bias", type: "related" },
    { to: "circle-of-competence", type: "reinforces" },
    { to: "tib-resulting", type: "related" }
  ],
  quote: null
},

{
  id: "tfs-premortem", num: 10, book_id: "tfs", category: "decision-making",
  title: "The Premortem",
  thesis: "Before committing, imagine it has already failed and write the history of the failure.",
  reading_time: 2,
  explanation: [
    "The premortem, which Kahneman credits to Gary Klein, is a small procedural device with an unusually good return. Once a plan is nearly settled, the group is told to assume that a year has passed and the outcome was a disaster, and each person writes a brief history of that disaster.",
    "The value comes from the change in social permission. In a normal review, raising doubts marks you as insufficiently committed. Under the premortem frame, the task is to produce doubts, which unlocks reservations that people were already holding privately.",
    "It also works against WYSIATI by requiring an explicit account of what went wrong rather than a general expression of concern. Specific failure narratives can be tested and mitigated; vague unease cannot."
  ],
  practical: {
    label: "Example: running a premortem",
    lead: "Twenty minutes, everyone writing independently before anyone speaks.",
    bullets: [
      "Assume it is a year from now and this decision failed badly",
      "Each person writes the story of how, independently and without discussion",
      "Collect the failure modes and group them by mechanism",
      "For each, ask whether it is detectable early and what the early signal would be",
      "Convert the top two or three into monitored conditions rather than filed concerns"
    ]
  },
  application:
    "This is the operational form of inversion, with the social dynamics solved. Running it at the end of diligence rather than the beginning is the point: it is most useful once the group is already committed, which is exactly when dissent has become costly.",
  models: ["inversion", "wysiati", "planning-fallacy", "decision-quality"],
  connections: [
    { to: "inversion", type: "extends" },
    { to: "tib-backcasting", type: "reinforces" },
    { to: "tfs-planning-fallacy", type: "reinforces" },
    { to: "antidotes", type: "reinforces" },
    { to: "authority-misinfluence", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tfs-two-selves", num: 11, book_id: "tfs", category: "learning",
  title: "The Experiencing and Remembering Selves",
  thesis: "The self that lives through an experience and the self that remembers it want different things.",
  reading_time: 2,
  explanation: [
    "Memory of an episode is not an average of the moments in it. It is dominated by peaks and by how the episode ended, and it is almost indifferent to duration. So a longer period of moderate discomfort can be remembered as better than a shorter one that finished badly.",
    "Since decisions about the future are made by the remembering self, we systematically choose for the story rather than for the experience. Holidays, careers and projects get selected on how they will be recalled and recounted, not on how the days will actually feel.",
    "Neither self is the wrong one to serve, but they are different clients. Knowing which one a decision is for removes a lot of confusion about why an apparently good choice produced a bad year."
  ],
  practical: {
    label: "Example: which self is this for?",
    lead: "Separate the quality of the days from the quality of the story.",
    bullets: [
      "Am I choosing this for how it will feel, or for how it will read later?",
      "How many hours will actually be spent in this, and doing what?",
      "Am I weighting the ending disproportionately?",
      "Would I choose it if no one ever knew I had done it?",
      "Which of my past decisions look better in memory than they felt at the time?"
    ]
  },
  application:
    "The distinction matters for career and firm-building decisions more than for portfolio ones. A strategy that produces an impressive narrative and a miserable decade is a real option people take, usually without noticing they have chosen between two different clients.",
  models: ["narrow-framing", "endowment", "dual-process", "decision-quality"],
  connections: [
    { to: "tfs-reference-points", type: "related" },
    { to: "long-term-thinking", type: "related" },
    { to: "tib-temporal-discounting", type: "reinforces" },
    { to: "temperament", type: "related" },
    { to: "tfs-narrow-framing", type: "related" }
  ],
  quote: {
    text: "Odd as it may seem, I am my remembering self, and the experiencing self, who does my living, is like a stranger to me.",
    attribution: "Daniel Kahneman, Thinking, Fast and Slow",
    why: "Kahneman is conceding something uncomfortable about his own case rather than describing a curiosity. The self that makes plans is not the self that has to live in them, and there is no mechanism forcing the two to agree."
  }
},

{
  id: "tfs-simple-rules", num: 12, book_id: "tfs", category: "learning",
  title: "Simple Rules Beat Intuition",
  thesis: "In noisy domains, a short checklist applied consistently outperforms expert judgement.",
  reading_time: 2,
  explanation: [
    "The finding is robust and old, and it keeps being rediscovered because it is so unwelcome. Across many domains, a simple formula combining a few valid predictors does at least as well as trained experts, and often better, largely because it is consistent.",
    "Consistency is the whole advantage. Experts know more than any formula, but they weight the same evidence differently on different days, and that noise costs more than their extra knowledge earns. The formula's virtue is not intelligence, it is that it does not have moods.",
    "The best available arrangement is usually both: a scored checklist that produces the base judgement, and expert override that must be justified in writing. The override is where genuine insight enters, and requiring an explanation is what keeps it rare."
  ],
  practical: {
    label: "Example: building the checklist",
    lead: "Pick a small number of predictors, score them the same way every time, and record the overrides.",
    bullets: [
      "Which five or six factors actually predict outcomes in this domain?",
      "Can each be scored on a fixed scale without knowing the conclusion?",
      "Am I scoring before or after forming an overall impression?",
      "When I override the score, is the reason written down?",
      "Over the last twenty decisions, did the overrides improve on the score?"
    ]
  },
  application:
    "A fifteen-factor screening scorecard is exactly this instrument. Its function is not to replace judgement but to make judgement consistent across deals and across weeks, and to leave a record showing where and why intuition departed from the score.",
  models: ["decision-quality", "regression", "base-rates", "dual-process"],
  connections: [
    { to: "tfs-illusion-validity", type: "extends" },
    { to: "antidotes", type: "reinforces" },
    { to: "regression-to-the-mean", type: "related" },
    { to: "tib-decision-trees", type: "related" },
    { to: "learning-from-mistakes", type: "reinforces" }
  ],
  quote: null
}

);
