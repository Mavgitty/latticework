/* The Lean Startup — Eric Ries — 9 ideas */
window.DB.ideas.push(

{
  id: "tls-startup-definition", num: 1, book_id: "tls", category: "strategy",
  title: "A Startup Is a Search",
  thesis: "A startup is an organisation searching for a repeatable business model under extreme uncertainty.",
  reading_time: 3,
  explanation: [
    "Ries defines a startup by its conditions rather than its size, its age or its sector. What makes something a startup is that it is trying to establish a repeatable, scalable business model while the central facts about customers, pricing and channel remain unknown. A two person company and a division inside a large firm qualify equally if both are working without those facts.",
    "That definition determines which management tools apply. Planning works by extrapolation, so it needs a stable history to extrapolate from, and a company with no operating history has nothing to extrapolate. A detailed five year plan built on invented numbers is not a forecast, it is a description of what the founders currently hope, given the authority of a spreadsheet.",
    "The alternative Ries proposes is not less management but different management. Searching is still work that can be run well or badly, and it has its own disciplines: naming what is unknown, ordering the unknowns by how much rides on them, and testing them in sequence. Entrepreneurship becomes a job description rather than a temperament, and it can be taught."
  ],
  practical: {
    label: "Example: reading a startup plan",
    lead: "Check whether the plan is a forecast built on evidence or a set of assumptions written in the grammar of certainty.",
    bullets: [
      "Which numbers in this plan come from observation rather than from assumption?",
      "What would have to be true for the third year to happen?",
      "Is the company still searching for a model, or executing a known one?",
      "How much of the plan survives if the first channel does not work?",
      "What has been learned in the last quarter that changed the plan?"
    ]
  },
  application:
    "Boards often push a searching company towards the reporting rhythm of an executing one, asking for variance against plan when the plan was a guess. The more useful board question is what the company established this quarter that it did not know last quarter. Keep the budget discipline, since cash is real, and drop the pretence that missing an invented number is information about performance.",
  models: ["validated-learning", "strategy-kernel", "planning-fallacy", "optionality"],
  connections: [
    { to: "tls-validated-learning", type: "extends" },
    { to: "tls-leap-of-faith", type: "related" },
    { to: "tfs-planning-fallacy", type: "reinforces" },
    { to: "zto-definite-optimism", type: "contrasts" },
    { to: "sshr-team-market-product", type: "related" }
  ],
  quote: null
},

{
  id: "tls-validated-learning", num: 2, book_id: "tls", category: "learning",
  title: "Validated Learning",
  thesis: "The unit of progress is what you have established about the business, not what you shipped.",
  reading_time: 3,
  explanation: [
    "Shipping is easy to measure and easy to celebrate, which is why teams default to it. Ries argues that a feature nobody wanted represents no progress at all, however well it was built, because the company knows no more than it did before. Learning that the feature was unwanted is progress. It is unpleasant progress, and it is the only kind available while the business model is still unknown.",
    "The word validated is doing the work. A team can learn things that are wrong, and a plausible story assembled after the fact feels exactly like knowledge. Validation means the belief was stated in advance, in a form that a specific result could contradict, and then survived contact with actual customer behaviour rather than customer opinion, which is cheap to give and unreliable.",
    "Treating learning as the output changes what a failed experiment costs. A launch that nobody uses is expensive if the objective was revenue and cheap if the objective was an answer, and the same event lands differently on the team depending on which was stated first. This is also why the stating has to happen first, before the result is known."
  ],
  practical: {
    label: "Example: auditing a quarter",
    lead: "At the end of a period, list what the company now knows that it did not know at the start.",
    bullets: [
      "What did we believe three months ago that we no longer believe?",
      "Which of those changes came from customer behaviour rather than from discussion?",
      "What did we ship that taught us nothing either way?",
      "Was each experiment's expected result written down before it ran?",
      "Which important question is still open because nobody has designed a test?"
    ]
  },
  application:
    "Ask for a learning summary alongside the metrics pack, and read it first. It is the fastest way to tell a company that is searching deliberately from one that is merely busy. Companies in the second group produce long lists of delivered work and cannot say which belief any of it settled. The distinction usually predicts the next two quarters better than the revenue line does.",
  models: ["validated-learning", "decision-quality", "resulting", "feedback-loops"],
  connections: [
    { to: "tls-innovation-accounting", type: "extends" },
    { to: "tls-build-measure-learn", type: "reinforces" },
    { to: "tib-bets", type: "reinforces" },
    { to: "learning-from-mistakes", type: "related" },
    { to: "cinc-postmortems", type: "related" }
  ],
  quote: null
},

{
  id: "tls-build-measure-learn", num: 3, book_id: "tls", category: "learning",
  title: "Run the Loop Backwards",
  thesis: "Plan the loop from the learning you need, then work back to what to build.",
  reading_time: 3,
  explanation: [
    "The loop runs build, measure, learn, and the order of the words describes execution rather than planning. Teams that plan in that order start from a feature, ship it, then look for a metric that says something about it, and end up learning whatever the data happens to support. The activity looks like experimentation and produces conclusions that were available in advance.",
    "Planning runs the other way. Decide what you need to know, then what measurement would tell you, then the smallest thing you could build to produce that measurement. The build step is the last decision rather than the first, and it is usually much smaller once the question is specific, because most of what a full feature contains is irrelevant to the question.",
    "The other property that matters is cycle time. A loop that takes two weeks lets a company be wrong six times a quarter and still recover, and a loop that takes six months allows one attempt. Since being wrong is the expected case, the number of loops a company can afford is closer to a survival variable than an efficiency one."
  ],
  practical: {
    label: "Example: designing one cycle",
    lead: "Write the question first, then the measurement, then the build, and check that the build is the smallest one that works.",
    bullets: [
      "What single question does this cycle exist to answer?",
      "What result would count as a no, and would we accept it?",
      "What is the smallest build that produces that result?",
      "How long will this cycle take from start to answer?",
      "How many cycles does our remaining runway allow?"
    ]
  },
  application:
    "Cycle time is visible from a board seat and rarely discussed there. Ask how long it takes this company to go from a question about customers to an answer, then compare that with the time between funding rounds. A company that can run four cycles before the next raise is a different investment from one that can run one, on identical financials.",
  models: ["feedback-loops", "validated-learning", "inversion", "constraint"],
  connections: [
    { to: "tls-small-batches", type: "extends" },
    { to: "tls-minimum-viable-product", type: "reinforces" },
    { to: "inversion", type: "reinforces" },
    { to: "tib-backcasting", type: "related" },
    { to: "feedback-loops", type: "related" }
  ],
  quote: null
},

{
  id: "tls-minimum-viable-product", num: 4, book_id: "tls", category: "strategy",
  title: "The Minimum Viable Product",
  thesis: "An MVP is the cheapest test of one hypothesis, not a small version of the plan.",
  reading_time: 3,
  explanation: [
    "The phrase has been degraded into a synonym for a rough first release. Ries defines it as the smallest thing that produces valid learning about a specific assumption, which means the assumption has to exist before the product does. Two MVPs testing different assumptions about the same business look nothing alike, and one of them may not involve software at all.",
    "Viable is the constraint that stops the idea collapsing into carelessness. The test has to be good enough that a negative result means the assumption is wrong rather than that the execution was poor. A confounded experiment is worse than none, because it produces a conclusion the team will act on and cannot distinguish from an answer about the market.",
    "What makes this hard is not analytical. Releasing something visibly incomplete under your own name is uncomfortable, and the discomfort pushes teams to add scope until the release is defensible, at which point it has stopped being cheap and the decision to keep going has become expensive to reverse. Most MVPs fail as tests for this reason rather than for a technical one."
  ],
  practical: {
    label: "Example: scoping a test",
    lead: "Name the assumption first, then remove everything from the build that does not bear on it.",
    bullets: [
      "Which single assumption is this release designed to test?",
      "Could a landing page, a spreadsheet or a manual service test it instead?",
      "If the result is negative, will we believe it, or blame the build?",
      "What have we added that serves reputation rather than the test?",
      "What is the cost of this test against the cost of being wrong?"
    ]
  },
  application:
    "Founders and boards both drift towards larger launches, for the same reason: a bigger release is easier to describe to the next investor. The countervailing question is what the release is meant to establish and whether a cheaper instrument would establish it. Approving a smaller test is often the higher governance contribution, because it preserves the capital to run the next one.",
  models: ["validated-learning", "optionality", "constraint", "adoption-lifecycle"],
  connections: [
    { to: "tls-leap-of-faith", type: "extends" },
    { to: "tls-build-measure-learn", type: "reinforces" },
    { to: "tls-limits-of-the-method", type: "contrasts" },
    { to: "zto-secrets", type: "related" },
    { to: "tbs-convexity", type: "related" }
  ],
  quote: null
},

{
  id: "tls-leap-of-faith", num: 5, book_id: "tls", category: "strategy",
  title: "Leap of Faith Assumptions",
  thesis: "State the value and growth hypotheses precisely enough that a result could prove them wrong.",
  reading_time: 3,
  explanation: [
    "Every new business rests on a small number of beliefs that cannot be established from existing evidence. Ries reduces them to two: the value hypothesis, which says customers will find this genuinely useful, and the growth hypothesis, which says the number of them will rise through a specific mechanism. Everything else in the plan is downstream of those two.",
    "The discipline is in the wording. Customers will love this product is not testable and cannot be wrong. Forty per cent of users who complete onboarding will return in week four is testable, and stating it that way commits the team to a number before the number arrives. Assumptions written vaguely survive every result, which is precisely why they get written vaguely.",
    "The two hypotheses also fail in different ways and need testing separately. Products that people love and cannot be distributed and products that grow quickly while nobody keeps using them are distinct failures with distinct remedies, and a single blended metric such as signups hides which one you have. Separating them tells you which part of the business is actually broken."
  ],
  practical: {
    label: "Example: writing the two hypotheses",
    lead: "Write the value and growth hypotheses as numbers with dates, then ask what result would falsify each.",
    bullets: [
      "What is our value hypothesis, expressed as a behaviour and a number?",
      "What is our growth hypothesis, and through which specific mechanism?",
      "What result would tell us that each one is wrong?",
      "Which of the two is currently less evidenced?",
      "Are we testing both, or only the one we expect to pass?"
    ]
  },
  application:
    "Ask for both hypotheses in writing at the first board meeting and keep the document. Most decks contain neither, and the exercise of producing them tends to surface disagreement inside the founding team that had been sitting under agreeable language. Revisiting the same page each quarter shows whether the company is converging on an answer or rewriting the question.",
  models: ["validated-learning", "decision-quality", "confirmation-bias", "probability"],
  connections: [
    { to: "tls-minimum-viable-product", type: "extends" },
    { to: "tls-innovation-accounting", type: "reinforces" },
    { to: "zto-distribution", type: "related" },
    { to: "tib-not-sure", type: "reinforces" },
    { to: "tfs-premortem", type: "related" }
  ],
  quote: null
},

{
  id: "tls-innovation-accounting", num: 6, book_id: "tls", category: "learning",
  title: "Vanity Metrics and Cohorts",
  thesis: "Cumulative totals always rise. Cohort behaviour is the only measure that can say no.",
  reading_time: 3,
  explanation: [
    "Total registered users, cumulative revenue and page views share a property that makes them useless for decisions: they cannot fall while the company continues to operate. A chart of a running total goes up during genuine improvement and during slow decline, so it flatters management in both cases and distinguishes nothing. Ries calls these vanity metrics because their function is reassurance.",
    "The alternative is to measure per cohort. Take the customers who arrived in a given month and follow what that group did: how many activated, how many were still active at week eight, how much each paid. Comparing successive cohorts tells you whether the product is getting better, because each cohort is a separate small experiment on a comparable population.",
    "Innovation accounting is the habit of running that comparison against the hypotheses. It has a second function, which is to make progress visible without revenue, so that a team improving retention from four per cent to eight per cent can demonstrate that it is working even though the absolute numbers are still small. Without it, teams under pressure reach for the totals."
  ],
  practical: {
    label: "Example: reading a metrics pack",
    lead: "Convert every cumulative number in the pack into a per cohort number before drawing any conclusion.",
    bullets: [
      "Which numbers here are incapable of going down?",
      "How does the most recent cohort compare with the one six months earlier?",
      "What share of each cohort is still active after eight weeks?",
      "Has the definition of an active user changed during the period?",
      "Which metric would fall first if the product were getting worse?"
    ]
  },
  application:
    "Cohort tables are the single highest yield addition to a board pack and the one most often resisted, because they show the truth about retention immediately. Ask for the same table in the same format every meeting, with the definitions fixed in writing. Most disputes about whether a company is working dissolve once the cohorts are visible side by side.",
  models: ["accounting-quality", "validated-learning", "incentives", "wysiati"],
  connections: [
    { to: "tls-validated-learning", type: "extends" },
    { to: "tls-pivot-or-persevere", type: "reinforces" },
    { to: "fsh-metric-games", type: "reinforces" },
    { to: "tic-growth-quality", type: "related" },
    { to: "tfs-wysiati", type: "related" }
  ],
  quote: null
},

{
  id: "tls-pivot-or-persevere", num: 7, book_id: "tls", category: "leadership",
  title: "Pivot or Persevere",
  thesis: "The hardest part of the decision is that a slow grind looks exactly like progress.",
  reading_time: 3,
  explanation: [
    "A pivot is a change of strategy while the vision is kept, and Ries lists a dozen kinds: a change of customer segment, of platform, of the feature that becomes the whole product. It is not an admission that the company was wrong about everything, and treating it that way is what delays it. Most successful companies have made at least one.",
    "The failure mode is not a wrong pivot, it is the absence of a decision. A company with slightly improving numbers, a committed team and enough cash for another two quarters has no forcing event, and every month produces a reason to wait for the next release. Ries calls this the land of the living dead, and the cost is measured in years rather than in money.",
    "The remedy is procedural rather than emotional. Set the pivot or persevere meeting in advance, on a date, with the hypotheses and the cohort numbers as the agenda, so that the question gets asked when nobody is in crisis. Deciding in the calm meeting is the only version of this decision anybody makes well. A quarterly cadence is usually enough."
  ],
  practical: {
    label: "Example: calling the meeting",
    lead: "Book the decision, bring the hypotheses and the cohorts, and require an explicit choice at the end.",
    bullets: [
      "What did we predict this quarter, and what actually happened?",
      "Are the cohort curves improving, flat, or improving too slowly to matter?",
      "If we persevere, what specifically will be different next quarter?",
      "What would we do with this team and this cash if we started today?",
      "Have we already made this same decision to wait twice before?"
    ]
  },
  application:
    "Boards are usually the last to force this conversation, because the numbers are not bad enough to compel it and the founder is working hard. The useful intervention is to schedule it while things are calm and to ask directly what would have to be true to justify another year. Treating a pivot as an ordinary strategic choice rather than a failure is largely the board's to establish.",
  models: ["decision-quality", "loss-aversion", "opportunity-cost", "validated-learning"],
  connections: [
    { to: "tls-innovation-accounting", type: "extends" },
    { to: "tls-validated-learning", type: "reinforces" },
    { to: "loss-aversion", type: "reinforces" },
    { to: "tib-ulysses-contract", type: "reinforces" },
    { to: "sshr-reserves", type: "related" }
  ],
  quote: null
},

{
  id: "tls-small-batches", num: 8, book_id: "tls", category: "leadership",
  title: "Small Batches",
  thesis: "Shrink the batch size and everything about the loop gets faster, including the learning.",
  reading_time: 2,
  explanation: [
    "Ries borrows the argument from manufacturing. Work moved in large batches waits, and the waiting is where most of the elapsed time goes, so cutting batch size cuts cycle time far more than working faster does. A quarterly release train means a change written in week one sits for eleven weeks before anybody outside the company sees it.",
    "Small batches also change the cost of a mistake. When twenty changes ship together and something breaks, finding the cause is an investigation, and when one ships alone it is obvious. That is why continuous deployment and rapid rollback tend to arrive together, and why teams that deploy many times a day are usually more stable than teams that deploy monthly rather than less.",
    "The obstacle is that large batches feel efficient. Batching looks like fewer meetings, fewer deployments and less overhead per unit of work, and the cost sits in a place nobody measures, which is the delay between doing something and finding out whether it mattered. Efficiency of the wrong kind is the usual reason a company's learning rate is low."
  ],
  practical: {
    label: "Example: shrinking the batch",
    lead: "Find where work waits, and cut the size of the thing being moved rather than pushing people harder.",
    bullets: [
      "How long does a small change take to reach a customer?",
      "Of that time, how much is work and how much is waiting?",
      "What is the largest batch in our process, and why is it batched?",
      "Can we roll back a bad change in minutes?",
      "Which approval steps exist to protect quality and which protect comfort?"
    ]
  },
  application:
    "Deployment frequency and lead time are cheap diligence questions and are rarely asked outside technical due diligence. They proxy for something a board cares about, which is how many attempts the company gets per unit of capital. A company shipping weekly with fast rollback is buying more experiments from the same money than one shipping quarterly. That difference compounds over a holding period.",
  models: ["feedback-loops", "constraint", "compounding", "second-order"],
  connections: [
    { to: "tls-build-measure-learn", type: "extends" },
    { to: "tls-minimum-viable-product", type: "reinforces" },
    { to: "compounding", type: "related" },
    { to: "cinc-cost-of-failure", type: "reinforces" },
    { to: "tos-decentralisation", type: "related" }
  ],
  quote: null
},

{
  id: "tls-limits-of-the-method", num: 9, book_id: "tls", category: "strategy",
  title: "Where the Method Fails",
  thesis: "Some products cannot be tested in pieces, and some markets punish iterating in public.",
  reading_time: 3,
  explanation: [
    "The loop assumes that a small version of the thing can generate a valid signal about the full thing. That assumption fails where value only appears at completion. A payments network, an aircraft, a drug and a two sided marketplace below critical mass all return a negative result from a partial version, and the negative result says nothing about the complete one.",
    "The second limit is reputational and competitive. In enterprise sales, regulated industries and categories with one shot at a large customer, a public failure is not a cheap experiment, it is the end of the opportunity. Iterating in front of an incumbent also tells the incumbent what you have learned, which converts your experiments into their research at no cost.",
    "None of this invalidates the underlying discipline of naming assumptions and seeking evidence. It changes the instrument. Where public iteration is unavailable, the substitutes are private testing with a small number of committed partners, simulation, prototypes shown under agreement, and long research before launch. What is not available is the comfort of frequent feedback, which means judgement carries more of the weight."
  ],
  practical: {
    label: "Example: checking whether the method applies",
    lead: "Before adopting the loop, establish whether a partial version of this product can produce a valid signal.",
    bullets: [
      "Does this product deliver any value before it is complete?",
      "Would a failed public test cost us the market or just the test?",
      "Who else learns from our experiments, and what does that cost us?",
      "Can we test privately with a handful of committed customers instead?",
      "If iteration is unavailable, what replaces it as a source of evidence?"
    ]
  },
  application:
    "This matters most when a method becomes an expectation. Pressing a deep technology or regulated company to show weekly experiments produces theatre, and the board learns nothing while the team wastes the quarter. The right question is what evidence is obtainable in this market at this stage, and whether the company is gathering it. Sometimes the honest answer is that the risk is binary.",
  models: ["validated-learning", "circle-of-competence", "second-order", "critical-mass"],
  connections: [
    { to: "tls-minimum-viable-product", type: "contrasts" },
    { to: "tls-build-measure-learn", type: "contrasts" },
    { to: "zto-secrets", type: "related" },
    { to: "tbs-forecasting-limits", type: "related" },
    { to: "sshr-where-the-model-fails", type: "reinforces" }
  ],
  quote: null
}

);
