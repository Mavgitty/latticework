/* Ideas 01-09 */
window.DB.ideas.push(

{
  id: "inversion", num: 1, book_id: "pca", category: "decision-making",
  title: "Inversion",
  thesis: "Don't just ask how to succeed. Ask what would guarantee failure.",
  reading_time: 2,
  explanation: [
    "Most thinking runs forwards. We picture the outcome we want and then work out a route to it. That direction of travel requires you to be right about an uncertain future, and it quietly rewards optimism, because every step of the plan is something you invented and therefore believe in.",
    "Running the problem backwards asks a different and easier question. Rather than forecasting the one path that works, you list the handful of things that would reliably destroy the outcome. Failure modes tend to be fewer, more concrete and better documented than success paths. They are also less flattering, which is exactly why they get skipped.",
    "The practical value is not pessimism. It is that avoiding the obvious ways to lose removes most of the ways to lose, and what remains is a much smaller set of things you actually need to get right."
  ],
  practical: {
    label: "Example: evaluating a startup",
    lead: "Instead of asking why this could become a billion dollar company, ask what would have to happen for this investment to permanently lose capital.",
    bullets: [
      "The product never reaches product-market fit",
      "Customer acquisition becomes uneconomic as the cheap channels saturate",
      "Competitors commoditise the core feature and price collapses",
      "The founder or a key engineer leaves and the roadmap stalls",
      "The company runs out of cash before the next proof point",
      "The market opportunity turns out to be materially smaller than the deck claims"
    ]
  },
  application:
    "Inverted questions make better diligence questions because they are answerable. \"Why is this a huge market?\" invites a narrative. \"What would make this market smaller than you think?\" invites evidence. Run the failure list first, then spend your remaining time on whichever item you can actually test.",
  models: ["inversion", "margin-of-safety", "second-order", "probability"],
  connections: [
    { to: "margin-of-safety", type: "reinforces" },
    { to: "avoiding-ruin", type: "extends" },
    { to: "outcome-bias", type: "related" },
    { to: "antidotes", type: "reinforces" },
    { to: "second-order-effects", type: "related" }
  ],
  quote: {
    text: "All I want to know is where I'm going to die so I'll never go there.",
    attribution: "Charlie Munger",
    source_note: "Munger's own phrasing of a method he credits to the mathematician Jacobi. Attribution to Munger is uncontested; no single talk or meeting has been established as its origin.",
    why: "The line is a joke about a serious method. Munger is not interested in predicting the good outcome. He wants the map of fatal locations so he can route around them, and he treats that as the higher-value piece of information."
  }
},

{
  id: "incentives", num: 2, book_id: "pca", category: "people",
  title: "Incentives",
  thesis: "If you want to understand what someone will do, look at what they're rewarded for doing.",
  reading_time: 2,
  explanation: [
    "People are not primarily reasoning their way to positions. They are responding to a structure of rewards and punishments, usually without narrating it to themselves. Stated intentions are cheap and often sincere; the incentive is what survives contact with a hard week.",
    "This holds at the level of the individual salesperson and at the level of the institution. An organisation is a machine for converting incentives into behaviour, and it will convert whatever you install, including the things you did not intend to install. Measure calls made and you get calls made, not customers helped.",
    "The discipline is to read the incentive before reading the argument. When someone's conclusion happens to pay them, that is not proof they are wrong, but it does tell you how much independent verification the conclusion needs."
  ],
  practical: {
    label: "Example: reading a recommendation",
    lead: "Before weighing the advice, map who gets paid for what.",
    bullets: [
      "How is this person compensated, and on what timeframe?",
      "What happens to them if they are wrong, and when do they find out?",
      "Is the reward for the transaction happening, or for it working?",
      "What behaviour would the metric produce if someone gamed it deliberately?",
      "Who bears the cost if the downside arrives after they have moved on?"
    ]
  },
  application:
    "Incentive design is one of the highest-leverage things to inspect in a business you are backing. Look at the sales comp plan for discounting behaviour, at the founder's secondary for commitment, and at management's equity vesting against your own hold period. A great business with a badly wired comp plan generates predictable, expensive surprises.",
  models: ["incentives", "second-order", "feedback-loops"],
  connections: [
    { to: "second-order-effects", type: "extends" },
    { to: "feedback-loops", type: "related" },
    { to: "authority-misinfluence", type: "related" },
    { to: "temperament", type: "contrasts" },
    { to: "antidotes", type: "reinforces" }
  ],
  quote: {
    text: "Never, ever, think about something else when you should be thinking about the power of incentives.",
    attribution: "Charlie Munger, The Psychology of Human Misjudgment",
    why: "The phrasing is unusually emphatic for Munger, and deliberately so. He treats incentive analysis as the first move rather than a supplementary consideration, because almost every institutional failure he catalogues turns out to be an incentive that was pointing somewhere nobody checked."
  }
},

{
  id: "compounding", num: 3, book_id: "pca", category: "investing",
  title: "Compounding",
  thesis: "Small advantages become extraordinary when they persist for long enough.",
  reading_time: 2,
  explanation: [
    "Compounding is arithmetic that human intuition gets wrong in a specific direction. We extrapolate linearly, so we consistently underestimate what a modest rate does over a long period, and we overestimate what a spectacular rate does over a short one.",
    "The consequence is that duration matters more than magnitude. A moderate return sustained for thirty years beats an excellent return sustained for eight, and the gap is not close. This is why the interesting question about any compounding machine, whether a business or a career, is not how fast it grows but how long it can keep going.",
    "It also means interruptions are unusually expensive. A single large drawdown, a career break at the wrong moment, a forced sale, does not just remove that period's return; it resets the base that everything after it multiplies from."
  ],
  practical: {
    label: "Example: the cost of an interruption",
    lead: "Compounding punishes gaps far more than it punishes a slightly lower rate.",
    bullets: [
      "Capital compounding at 12% for 25 years multiplies roughly 17 times",
      "The same 12% for 15 years multiplies roughly 5 times, so the last decade does most of the work",
      "A single 50% loss requires a 100% gain to get back to flat",
      "Fees and taxes are not annual costs, they are permanent reductions to the exponent",
      "Retention in a subscription business compounds the same way: 95% annual retention holds most of a cohort for a decade, 80% does not"
    ]
  },
  application:
    "In diligence, treat durability as the compounding variable. Net revenue retention above 120% is a compounding machine; churn of 25% a year is a treadmill regardless of the growth rate on top of it. Ask what would interrupt the compounding, then price that risk rather than the headline growth rate.",
  models: ["compounding", "feedback-loops", "margin-of-safety"],
  connections: [
    { to: "patience", type: "reinforces" },
    { to: "long-term-thinking", type: "extends" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "feedback-loops", type: "related" },
    { to: "scale-economies", type: "related" }
  ],
  quote: {
    text: "The first rule of compounding: Never interrupt it unnecessarily.",
    attribution: "Charlie Munger",
    source_note: "Consistently attributed to Munger and to no one else, but no primary talk, letter or meeting has been established as its source.",
    why: "Note that the rule is about what not to do. Munger's emphasis falls on protecting the process rather than optimising the rate, which is the practical implication most investors invert."
  }
},

{
  id: "circle-of-competence", num: 4, book_id: "pca", category: "investing",
  title: "Circle of Competence",
  thesis: "Know what you genuinely understand and recognise what you do not.",
  reading_time: 2,
  explanation: [
    "Everyone has a domain in which their judgement is meaningfully better than average, and it is smaller than they think. The useful skill is not making the circle bigger. It is knowing precisely where the edge is, because that is where confidence stops tracking competence.",
    "The failure mode is subtle. Inside your circle you have real pattern recognition, and it feels like general intelligence. Step one domain sideways and the pattern recognition keeps firing with the same confidence while its accuracy collapses. Competence does not announce its own boundary.",
    "Honest boundary-marking also removes a lot of anxiety. If a category is outside the circle, it is not an opportunity you are missing. It is a category where you have no reason to expect an edge, which makes declining it a decision rather than a failure of nerve."
  ],
  practical: {
    label: "Example: three baskets",
    lead: "Sort each opportunity into yes, no, or too hard, and treat too hard as a legitimate and final answer.",
    bullets: [
      "Can I explain how this business makes money without using the company's own words?",
      "Can I name the two or three variables that determine whether it works?",
      "Do I know what would change my mind, specifically?",
      "Have I seen this pattern enough times to have a base rate for it?",
      "If the answer to any of these is no, the honest label is too hard, not undervalued"
    ]
  },
  application:
    "The too-hard pile is a competitive advantage if you actually use it. Most poor investments are not made in ignorance but at the edge of competence, where a familiar-looking business hides an unfamiliar variable. Write down the edge of the circle for your own mandate and treat the boundary as a filter applied before valuation, not after.",
  models: ["circle-of-competence", "margin-of-safety", "probability"],
  connections: [
    { to: "selectivity", type: "reinforces" },
    { to: "margin-of-safety", type: "related" },
    { to: "specialisation", type: "extends" },
    { to: "confirmation-bias", type: "contrasts" },
    { to: "multidisciplinary-thinking", type: "contrasts" }
  ],
  quote: {
    text: "Knowing what you don't know is more useful than being brilliant.",
    attribution: "Charlie Munger",
    source_note: "Consistently attributed to Munger. Sourcing is secondary reporting rather than a transcript.",
    why: "This reframes the whole activity. Munger is arguing that calibration beats raw capability, because a brilliant analyst operating outside their circle produces confident, well-argued, expensive errors."
  }
},

{
  id: "opportunity-cost", num: 5, book_id: "pca", category: "investing",
  title: "Opportunity Cost",
  thesis: "Choosing one thing means giving up another. The cost is what you surrendered, not what you spent.",
  reading_time: 2,
  explanation: [
    "Every commitment of money, time or attention consumes the ability to make a different commitment. The real price of an action is the best alternative you no longer get to take, which means nothing can be judged on its own merits alone.",
    "This turns evaluation into comparison. An asset returning 9% is not attractive or unattractive in isolation; it is attractive if your next best use of that capital returns 6% and destructive if it returns 15%. The question is never \"is this good\" but \"is this better than what it displaces\".",
    "The scarcest input is usually attention rather than capital. A mediocre position occupies a slot in the portfolio, but more expensively it occupies a slot in your head, and monitoring it is the thing you cannot buy more of."
  ],
  practical: {
    label: "Example: the comparison test",
    lead: "Judge each option against the specific alternative it displaces, not against zero.",
    bullets: [
      "What is my genuine next best use of this capital right now?",
      "What is the return on that alternative, honestly stated?",
      "Does this option beat it by enough to cover the extra risk and work?",
      "What does this consume that is not money: board time, analyst attention, reputation?",
      "If a better option appears in six months, can I still act on it?"
    ]
  },
  application:
    "Opportunity cost is the argument for a small number of high-conviction positions. Each additional holding is funded not by fresh capital but by dilution of your best idea and your own bandwidth. In practice this means the bar for a new position is your existing portfolio, which is a much higher bar than the risk-free rate.",
  models: ["opportunity-cost", "circle-of-competence", "probability"],
  connections: [
    { to: "selectivity", type: "reinforces" },
    { to: "circle-of-competence", type: "related" },
    { to: "patience", type: "related" },
    { to: "compounding", type: "related" },
    { to: "loss-aversion", type: "contrasts" }
  ],
  quote: null
},

{
  id: "second-order-effects", num: 6, book_id: "pca", category: "strategy",
  title: "Second-Order Effects",
  thesis: "Consequences have consequences, and the later ones usually matter more.",
  reading_time: 3,
  explanation: [
    "First-order thinking stops at the immediate result. The price cut wins the deal, the rule stops the behaviour, the subsidy makes the thing cheaper. Each of those is true and each is only the first move in a sequence that continues without you.",
    "Second-order thinking asks what happens next, and specifically how other people respond once the first effect is visible to them. Competitors match the price cut. The behaviour reappears in a form the rule does not cover. The subsidy is absorbed by the seller as a price increase. In systems with intelligent participants, the second order is where most of the outcome lives.",
    "The reason this is hard is that first-order effects are visible, attributable and arrive quickly, while second-order effects are diffuse, delayed and land on someone else's desk. Organisations therefore systematically over-invest in actions with clean first-order results."
  ],
  practical: {
    label: "Example: and then what?",
    lead: "Take any proposed action and force the chain out three steps before deciding.",
    bullets: [
      "We cut price to win the segment, and then what? The nearest competitor matches within a quarter",
      "And then what? Segment economics reset lower for everyone, permanently",
      "And then what? Our existing customers demand the new price at renewal",
      "And then what? The revenue base is repriced and the segment win does not cover it",
      "The test is cheap and almost nobody runs it to the third step"
    ]
  },
  application:
    "Apply this to any growth lever that looks unusually effective. Aggressive discounting, paid acquisition in a rising-cost channel, and generous free tiers all have excellent first-order metrics and known second-order costs. In diligence, ask what the competitive response has been to the company's last successful move, because that answer tells you whether the advantage is real or borrowed.",
  models: ["second-order", "incentives", "feedback-loops"],
  connections: [
    { to: "incentives", type: "extends" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "inversion", type: "related" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "scale-economies", type: "related" }
  ],
  quote: null
},

{
  id: "margin-of-safety", num: 7, book_id: "pca", category: "investing",
  title: "Margin of Safety",
  thesis: "Leave room between what you expect and what you can survive.",
  reading_time: 2,
  explanation: [
    "The concept comes from engineering before it comes from investing. A bridge rated for the expected load is a bridge that fails, because loads vary, materials degrade and the estimate itself was made by a person. So you build it to hold several times the expected load and you sleep.",
    "Applied to decisions, this means separating your central estimate from your survival threshold. Being approximately right on average is not enough if a plausible bad draw takes you out of the game, because you do not get the average when you are gone.",
    "The buffer costs something real. A margin of safety in price means fewer opportunities clear the bar, and a margin of safety in capital means lower returns in good years. That cost is the premium you pay for continuing to exist through the bad ones, and it is usually underpriced because bad years feel abstract until they arrive."
  ],
  practical: {
    label: "Example: sizing the buffer",
    lead: "Ask what has to be true for this to survive, not what has to be true for it to work.",
    bullets: [
      "If revenue growth halves, does the company still reach its next funding milestone?",
      "If the raise takes nine months instead of three, is there cash to bridge it?",
      "If my entry multiple compresses by a third at exit, does the return still clear the hurdle?",
      "Am I relying on any single customer, channel or person whose loss is unsurvivable?",
      "Is the buffer in the plan, or only in the narrative about the plan?"
    ]
  },
  application:
    "In venture, the margin of safety usually sits in runway and entry price rather than in asset value. Underwriting a deal on the assumption that the next round happens on schedule at a higher price is the equivalent of rating the bridge for the expected load. Underwrite it on the assumption that the round is late, smaller and flat, then see whether you still want the position.",
  models: ["margin-of-safety", "inversion", "probability", "loss-aversion"],
  connections: [
    { to: "inversion", type: "reinforces" },
    { to: "avoiding-ruin", type: "extends" },
    { to: "probabilistic-thinking", type: "related" },
    { to: "circle-of-competence", type: "related" },
    { to: "compounding", type: "reinforces" }
  ],
  quote: null
},

{
  id: "social-proof", num: 8, book_id: "pca", category: "people",
  title: "Social Proof",
  thesis: "Under uncertainty, people treat the behaviour of others as evidence about what is correct.",
  reading_time: 2,
  explanation: [
    "Copying the crowd is usually a sensible shortcut. If you do not know which queue is the right one, the long queue is real information, and the cost of thinking it through yourself exceeds the benefit. The tendency exists because on average it works.",
    "It fails in a specific situation: when the crowd's behaviour is itself the product of copying rather than of independent judgement. Then the apparent evidence is a reflection of itself, and confidence rises with the number of participants while the underlying information stays at zero.",
    "This is why social proof is strongest exactly where it is least reliable. The more novel and uncertain the situation, the less anyone has independent grounds for their view, and the more weight everyone puts on everyone else."
  ],
  practical: {
    label: "Example: separating signal from echo",
    lead: "Before treating consensus as evidence, ask how many independent judgements it actually contains.",
    bullets: [
      "Did each participant reach this view separately, or in sequence?",
      "Who was first, and what did they actually know?",
      "Is the crowd made of people with money at risk, or people with reputation at risk?",
      "Would I hold this view if I had found it alone?",
      "What is the most credible person on the other side of it saying?"
    ]
  },
  application:
    "A competitive round with three respected co-investors contains less independent information than it appears to, because later participants are partly pricing the earlier participants. This does not make the deal bad. It means the diligence you inherit is worth less than the diligence you do, and the price already reflects the consensus you find comforting.",
  models: ["social-proof", "authority-bias", "regression", "confirmation-bias"],
  connections: [
    { to: "independent-thinking", type: "contrasts" },
    { to: "authority-misinfluence", type: "reinforces" },
    { to: "regression-to-the-mean", type: "extends" },
    { to: "critical-mass", type: "related" },
    { to: "temperament", type: "related" }
  ],
  quote: null
},

{
  id: "confirmation-bias", num: 9, book_id: "pca", category: "decision-making",
  title: "Confirmation Bias",
  thesis: "Once a view is formed, the mind starts working for it rather than testing it.",
  reading_time: 2,
  explanation: [
    "The bias is not a failure to look at evidence. It is a change in how evidence gets processed. Supporting facts are accepted quickly and remembered; contradicting facts are examined for flaws, and flaws are usually available, so the contradicting fact gets discounted on apparently reasonable grounds.",
    "Commitment makes it worse. Saying the view out loud, writing it in a memo, or telling other people you hold it converts an opinion into a position you now have to defend, and defending is a different cognitive activity from evaluating.",
    "The only reliable counter is procedural rather than attitudinal. Deciding in advance what evidence would change your mind, and writing it down before you are invested, gives your later self something to check against that the later self cannot quietly reinterpret."
  ],
  practical: {
    label: "Example: the disconfirming question",
    lead: "Give disconfirming evidence extra attention rather than equal attention, because it is arriving against a headwind.",
    bullets: [
      "Write down, before diligence, the three findings that would kill this deal",
      "Assign someone to argue the bear case with real time and no penalty for winning",
      "Read the churned customer's reference call twice",
      "Notice when you are explaining away a data point rather than updating on it",
      "Ask what the most informed sceptic knows that you do not"
    ]
  },
  application:
    "In an investment process, confirmation bias shows up as diligence that gets more confirmatory as it goes on, because early enthusiasm sets the questions. The structural fix is to fix the kill criteria at the start and review them at the end against the original wording, not the remembered version.",
  models: ["confirmation-bias", "inversion", "anchoring"],
  connections: [
    { to: "inversion", type: "reinforces" },
    { to: "commitment-and-consistency", type: "extends" },
    { to: "independent-thinking", type: "related" },
    { to: "antidotes", type: "reinforces" },
    { to: "outcome-bias", type: "related" }
  ],
  quote: {
    text: "The human mind is a lot like the human egg, and the human egg has a shut-off device. When one sperm gets in, it shuts down so the next one can't get in.",
    attribution: "Charlie Munger, The Psychology of Human Misjudgment, 1995",
    why: "The image is crude on purpose. Munger's point is that the closing is automatic and physical rather than considered, which is why he treats openness to a second idea as something you have to engineer deliberately rather than something you can intend."
  }
}

);
