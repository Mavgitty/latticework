/* The Psychology of Money — Morgan Housel — 12 ideas */
window.DB.ideas.push(

{
  id: "pom-no-one-is-crazy", num: 1, book_id: "pom", category: "people",
  title: "No One Is Crazy",
  thesis: "Financial decisions that look irrational are usually reasonable given the narrow evidence a person actually lived through.",
  reading_time: 3,
  explanation: [
    "Everyone forms a view of how money works from a small and non-random sample: the inflation, job market and asset prices of their own formative years. Someone who came of age during a long bull run and someone who watched a currency collapse are not disagreeing about the same evidence. Each is generalising correctly from a different slice of history, and neither slice is representative of anything.",
    "This dissolves most arguments about who is being stupid with money. The reluctance to hold equities, the appetite for property, the preference for cash: each usually traces to something the person watched happen at close range. What it does not do is make every position sound. Evidence drawn from one period is still evidence, so a view can be sincerely held, internally consistent and badly calibrated at the same time.",
    "The useful response to a decision you find baffling is therefore to ask what the person has seen, rather than what they have failed to understand. The same question turns inward. Your own confidence about what is normal for interest rates, valuations or hiring markets is largely a record of the years you happened to work through, not a finding about how markets behave."
  ],
  practical: {
    label: "Example: reading someone else's evidence",
    lead: "Before judging a financial decision, work out which period of history taught the person making it.",
    bullets: [
      "What did this person live through financially, and at what age?",
      "Which of my own convictions date from a single market period?",
      "Is this behaviour irrational, or rational on evidence I do not share?",
      "What would I believe if my first ten working years had been different?",
      "Am I calling a view stupid because it is unfamiliar to me?"
    ]
  },
  application:
    "An investment committee is usually a collection of formative decades sitting around one table. A partner who raised a first fund in 2009 prices risk differently from one whose first cycle was 2021, and neither view is a forecast. Naming the vintage behind a strong opinion is more productive than arguing with it, and it is a reason to want partners whose experience does not all rhyme.",
  models: ["wysiati", "base-rates", "narrative-fallacy", "social-proof"],
  connections: [
    { to: "pom-reasonable-not-rational", type: "reinforces" },
    { to: "pom-you-will-change", type: "related" },
    { to: "availability-bias", type: "reinforces" },
    { to: "tii-market-history", type: "reinforces" },
    { to: "tfs-wysiati", type: "related" }
  ],
  quote: {
    text: "Your personal experiences with money make up maybe 0.00000001% of what's happened in the world, but maybe 80% of how you think the world works.",
    attribution: "Morgan Housel, The Psychology of Money",
    why: "The line does its work through the gap between the two numbers. It concedes that the sample is worthless as evidence while insisting it is decisive as belief, which is exactly why disagreements about money are so rarely settled by argument."
  }
},

{
  id: "pom-luck-and-risk", num: 2, book_id: "pom", category: "learning",
  title: "Luck and Risk Are Siblings",
  thesis: "Luck and risk are the same force seen from opposite ends, so outcomes never fully reflect effort.",
  reading_time: 3,
  explanation: [
    "Every result contains a contribution from forces nobody controlled. When those forces help we call it luck and attribute the outcome to skill. When they hurt we call it risk and attribute the outcome to circumstance. The two are mirror images of one fact: the world moves in ways not caused by the person acting in it, and it moves in both directions with roughly equal indifference.",
    "This is hard to apply because neither is measurable in the individual case. There is no method for separating the portion of a specific success that was earned from the portion that was granted. The honest position is not that skill is irrelevant, but that any single result is weak evidence of it, which is why the lessons drawn from individual careers should be held loosely.",
    "The workable move is to shift attention from specific people to broad patterns. Study failures for what generally goes wrong and successes for what generally goes right, rather than reverse-engineering one biography into a method. It also argues for restraint in both directions: less certainty that a good outcome proves competence, less certainty that a bad one proves negligence."
  ],
  practical: {
    label: "Example: separating result from process",
    lead: "Ask what would have had to change for this outcome to reverse, and how much of it anyone controlled.",
    bullets: [
      "Which parts of this outcome did the decision-maker actually control?",
      "If the timing had shifted by two years, would the result still hold?",
      "Am I drawing a general method from one biography?",
      "What is the base rate for this approach across everyone who tried it?",
      "Would I judge this decision the same way if the outcome had reversed?"
    ]
  },
  application:
    "Attribution is the standing problem in venture, where a record can rest on two or three positions and one vintage. The disciplined version is to write down the reasoning at the time of each decision and to review against that record rather than against the mark. It also means treating a founder's prior exit as a weaker signal than it feels, particularly when the cycle did much of the work.",
  models: ["alternative-histories", "resulting", "survivorship", "probability"],
  connections: [
    { to: "pom-tails-drive-everything", type: "related" },
    { to: "pom-room-for-error", type: "extends" },
    { to: "tib-luck-vs-skill", type: "reinforces" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "tmit-role-of-luck", type: "reinforces" }
  ],
  quote: null
},

{
  id: "pom-never-enough", num: 3, book_id: "pom", category: "people",
  title: "Never Enough",
  thesis: "The goalpost moves: rising means raise expectations just as fast, so satisfaction never arrives.",
  reading_time: 2,
  explanation: [
    "The mechanism is comparison. Wealth is experienced against a reference point, and the reference point rises with income, so each gain resets the standard it was meant to satisfy. Because the ladder is effectively infinite, and because the people above you on it are also looking up, the position that would have felt like success five years ago registers as ordinary by the time it arrives.",
    "The failure mode is not dissatisfaction, it is risk. People with substantial wealth take unnecessary chances to reach a number that keeps receding, and some of those chances are the kind you do not come back from. Risking what you have and need in order to reach what you do not have and do not need is the specific error, and status is almost always the reason for it.",
    "The defence is a definition of enough, written before the money arrives rather than negotiated afterwards. It does not have to be modest, only fixed, because its function is to make one class of risk unavailable rather than to limit ambition. Housel treats stopping the goalpost from moving as a skill to be practised, not a temperament some people are issued with."
  ],
  practical: {
    label: "Example: fixing the number",
    lead: "Define what a sufficient outcome looks like now, in writing, so the number cannot drift upward later.",
    bullets: [
      "What would count as enough, stated as a number and a date?",
      "Which of my recent goals were revised upward without a reason?",
      "What am I risking that I already have and genuinely need?",
      "Who am I comparing myself to, and did I choose them?",
      "Is this next step for the outcome or for the ranking?"
    ]
  },
  application:
    "Fund-level versions include raising a larger vehicle because peers did, extending into stages where the firm has no edge, and holding a winner well past the point where the return was made. Each of those is the goalpost moving. Writing down at the outset what a successful fund looks like, including a target return and a size ceiling, converts a recurring judgement into a decision already taken.",
  models: ["enough", "social-proof", "opportunity-cost", "loss-aversion"],
  connections: [
    { to: "pom-man-in-the-car", type: "reinforces" },
    { to: "pom-freedom", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tfs-reference-points", type: "related" },
    { to: "tii-chief-problem", type: "reinforces" }
  ],
  quote: null
},

{
  id: "pom-confounding-compounding", num: 4, book_id: "pom", category: "investing",
  title: "Confounding Compounding",
  thesis: "Compounding is counterintuitive because we extrapolate in straight lines, so duration matters more than rate.",
  reading_time: 3,
  explanation: [
    "The arithmetic is simple and the intuition is not. Growth applied to a base that keeps growing produces results the mind cannot picture, because the mind projects forward by adding rather than by multiplying. This is why the largest fortunes look implausible in advance, and why the numbers involved read like errors when they finally arrive rather than like the consequence of an ordinary rate.",
    "It follows that the impressive part of a great long-run record is usually its length rather than its annual figure. A moderate rate sustained for fifty years beats a spectacular rate sustained for fifteen, by margins that are not close. Since the rate attracts all of the attention and the duration attracts almost none, most of the available effort goes into the smaller of the two variables.",
    "Duration is a function of survival, so anything that ends the run early destroys more value than a mediocre year does. That reframes the objective: not the highest return achievable in a favourable period, but a return you can keep producing through unfavourable ones without being forced to stop. Uninterrupted and adequate beats brilliant and interrupted, and the gap widens with every additional decade."
  ],
  practical: {
    label: "Example: valuing the duration",
    lead: "Compare what an extra decade at a modest rate produces against a few years at a spectacular one.",
    bullets: [
      "What annual return am I assuming, and over how many years?",
      "Which of the two, rate or duration, am I actually working on?",
      "What could force me to stop before the compounding does its work?",
      "Am I projecting this forward by adding rather than multiplying?",
      "Would a lower return I can sustain beat a higher one I cannot?"
    ]
  },
  application:
    "The fund analogue is the difference between a strong vintage and a franchise. Returns compound at firm level through reputation, access and the ability to keep raising, all of which need continuity of people and no fatal vintage along the way. Ten-year holding periods only pay if the structure, the team and the investor base survive to collect them, which makes retention and reserve policy return drivers rather than administration.",
  models: ["compounding", "power-law", "durability", "base-rates"],
  connections: [
    { to: "pom-getting-vs-keeping", type: "reinforces" },
    { to: "pom-tails-drive-everything", type: "related" },
    { to: "compounding", type: "extends" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "contrasts" }
  ],
  quote: null
},

{
  id: "pom-getting-vs-keeping", num: 5, book_id: "pom", category: "investing",
  title: "Getting Wealthy Versus Staying Wealthy",
  thesis: "Acquiring wealth takes optimism and risk. Keeping it takes frugality, paranoia and plain survival.",
  reading_time: 2,
  explanation: [
    "The two tasks call for close to opposite skills. Getting wealthy requires taking risk, being optimistic and putting yourself where good outcomes can find you. Staying wealthy requires the reverse: humility about how much of the result was luck, active fear that it can be taken away, and a willingness to accept a lower return in exchange for continuing to exist.",
    "The second skill attracts less attention because it produces nothing to point at. There is no story in a position that merely survived, and no credit for a loss that did not happen. Survival is also unfashionable in a way the culture around money reinforces, which is why most of the writing and most of the effort concentrates on the acquisition half of the problem.",
    "In practice survival means avoiding the specific set of outcomes from which there is no recovery: forced selling, ruinous leverage, concentration you cannot ride out. Nearly everything else is recoverable and therefore secondary. The test is not whether a plan maximises the expected result, but whether it keeps you in position through the long stretches when the expected result does not turn up."
  ],
  practical: {
    label: "Example: testing for survival",
    lead: "Separate the decisions that build the position from the ones that determine whether you keep it.",
    bullets: [
      "What single event could end this, rather than merely damage it?",
      "Where am I using leverage, and what does it do in a bad case?",
      "Could I be forced to sell at the worst possible moment?",
      "Am I optimising the return or the odds of still being here?",
      "What return would I give up in exchange for certainty of survival?"
    ]
  },
  application:
    "Firms fail from the structural and funding side more often than from picking badly. Fund life that expires before the portfolio matures, reserves committed too early, and a partnership that fractures after one weak vintage are survival failures rather than selection failures. The corresponding discipline is unglamorous: reserves actually held back, deployment pace insulated from market mood, and a cost base that a slow fundraising year does not break.",
  models: ["margin-of-safety", "risk-not-volatility", "inversion", "compounding"],
  connections: [
    { to: "pom-room-for-error", type: "extends" },
    { to: "pom-confounding-compounding", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tmit-defence-first", type: "reinforces" },
    { to: "tii-margin-of-safety", type: "related" }
  ],
  quote: null
},

{
  id: "pom-tails-drive-everything", num: 6, book_id: "pom", category: "investing",
  title: "Tails Drive Everything",
  thesis: "A small number of events account for most of the result, in portfolios and in careers.",
  reading_time: 3,
  explanation: [
    "Outcomes in many domains are not distributed around an average. A handful of positions produce nearly all of the gain, a handful of decisions produce nearly all of the value, and the remainder net out to something close to nothing. This is not a flaw in the process. It is the shape of the distribution, and any process operating inside it will look mostly wrong most of the time.",
    "The consequence is that a high failure rate is compatible with excellent results, and that demanding a high hit rate will destroy them. Anyone judged on the proportion of their decisions that worked will avoid precisely the positions capable of carrying the portfolio, because those positions are also the ones most likely to fail outright. The incentive and the distribution point in opposite directions.",
    "The same shape appears inside a career and inside a company. Most of what a person produces is unremarkable and a few pieces of work account for the whole reputation, so the useful strategy is to stay in position long enough for a tail to arrive rather than to raise the average. The number of attempts matters more than the quality of any one, up to the point where an attempt could be fatal."
  ],
  practical: {
    label: "Example: judging by the distribution",
    lead: "Ask whether this domain pays on averages or on extremes, then set your expectations to match.",
    bullets: [
      "What share of my result comes from my three best positions?",
      "Am I being judged on hit rate in a power-law domain?",
      "Does my process allow for most individual decisions being wrong?",
      "Have I taken enough attempts for a tail to be possible?",
      "Is any single attempt large enough to end the sequence?"
    ]
  },
  application:
    "Portfolio construction follows from the distribution: position count high enough for a tail to appear, sizing that keeps the tail material to the fund, and reserves held so a winner can be followed rather than diluted. The behavioural half is harder. Reporting that highlights the failures quarter by quarter pushes a team toward safer positions, which is the one adjustment that reliably removes the return.",
  models: ["power-law", "fat-tails", "probability", "optionality"],
  connections: [
    { to: "pom-luck-and-risk", type: "related" },
    { to: "pom-price-of-returns", type: "related" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "tpl-power-law-returns", type: "reinforces" },
    { to: "tii-diversification", type: "contrasts" }
  ],
  quote: null
},

{
  id: "pom-freedom", num: 7, book_id: "pom", category: "people",
  title: "Control Over Your Time",
  thesis: "The highest return money offers is control over your own time, not a higher standard of living.",
  reading_time: 2,
  explanation: [
    "The claim is that autonomy rather than consumption is what money reliably converts into wellbeing. What people report as satisfaction tracks having control over what they do, when they do it and who they do it with, and that relationship holds across income levels in a way that the accumulation of possessions does not. Autonomy is the return; the goods are a by-product.",
    "The difficulty is that income and autonomy frequently trade against each other. Higher pay tends to arrive with less discretion over hours, location and priorities, and each addition to fixed commitments buys a further obligation to keep earning. People therefore end up wealthier and less free, having optimised the variable that is easy to measure against the one they actually wanted.",
    "Treating autonomy as the return changes what counts as a good financial decision. Savings become an option to say no rather than a store of deferred consumption. A lower offer with genuine control over the work can be the better deal on the terms that matter, and a raise that commits you to a permanently higher cost base can be the worse one."
  ],
  practical: {
    label: "Example: pricing autonomy",
    lead: "Value each financial decision by what it does to your control over your own time, not only to your income.",
    bullets: [
      "How much of my week is genuinely mine to allocate?",
      "What would this raise cost me in discretion over my time?",
      "Which fixed commitments have I added that require me to keep earning?",
      "What does my current saving buy me the option to refuse?",
      "Am I optimising income because it is the number I can see?"
    ]
  },
  application:
    "The same trade shows up in how funds are built. Larger vehicles raise fee income and reduce freedom, because a bigger fund has to deploy into deals a smaller one could decline. Committed capital, investor expectations and headcount all convert into obligation. A firm that keeps its size below what it could raise is buying discretion over which deals it does, which is the only position from which selectivity is real.",
  models: ["enough", "opportunity-cost", "incentives", "second-order"],
  connections: [
    { to: "pom-never-enough", type: "reinforces" },
    { to: "pom-man-in-the-car", type: "related" },
    { to: "tib-temporal-discounting", type: "reinforces" },
    { to: "opportunity-cost", type: "extends" },
    { to: "long-term-thinking", type: "related" }
  ],
  quote: {
    text: "Controlling your time is the highest dividend money pays.",
    attribution: "Morgan Housel, The Psychology of Money",
    why: "Housel borrows the language of financial return to describe something that never appears in a return calculation. Calling autonomy a dividend puts it on the same ledger as the money itself, which is the move the chapter needs in order to make the trade-off visible."
  }
},

{
  id: "pom-man-in-the-car", num: 8, book_id: "pom", category: "people",
  title: "The Man in the Car Paradox",
  thesis: "We notice the car, not the driver, so possessions bought for admiration do not deliver it.",
  reading_time: 2,
  explanation: [
    "The observation is that when you see an expensive car you rarely think about the person driving it. You imagine yourself in the seat. Everybody does this, which means the admiration a costly signal is meant to produce gets spent on the object and never transfers to the owner. The signal is received in full and the sender is skipped entirely.",
    "It persists because the mistake is invisible from the inside. Buying the thing does produce attention, and attention feels enough like respect to confirm the purchase. What has actually been bought is a supporting role in someone else's fantasy about themselves, which is not a form of regard that survives the object being noticed and is not what the buyer was paying for.",
    "What people say they want from wealth, to be liked and respected, is generally produced by humility, kindness and competence, none of which require spending. This is not an argument against buying things you enjoy using. It is an argument for being clear about which purchases are for the experience and which are for an audience that is not paying attention."
  ],
  practical: {
    label: "Example: separating the two motives",
    lead: "For any significant purchase, name whether the value sits in using it or in being seen with it.",
    bullets: [
      "Would I still want this if nobody could see that I owned it?",
      "Whose respect am I buying, and do they actually notice?",
      "Which recent purchases were for use, and which for signalling?",
      "What have I done that people genuinely respect, and did it cost money?",
      "Am I mistaking the attention an object attracts for regard toward me?"
    ]
  },
  application:
    "The fund equivalent is spending that signals rather than works: offices, conference presence, brand-building aimed at other investors instead of at founders. A founder choosing an investor is looking for evidence of usefulness, not evidence of prosperity, and they check with founders who have already taken the money. Reputation among that group is the asset, and it is built by behaviour during hard periods rather than by anything a budget buys.",
  models: ["social-proof", "branding", "incentives", "narrative-fallacy"],
  connections: [
    { to: "pom-never-enough", type: "reinforces" },
    { to: "pom-freedom", type: "related" },
    { to: "social-proof", type: "extends" },
    { to: "liking-loving", type: "related" },
    { to: "s7p-branding", type: "contrasts" }
  ],
  quote: null
},

{
  id: "pom-room-for-error", num: 9, book_id: "pom", category: "investing",
  title: "Room for Error",
  thesis: "Plan so that a range of futures works, because the specific future you forecast will not arrive.",
  reading_time: 3,
  explanation: [
    "Room for error is the gap between what you expect and what you need in order to keep going. Its purpose is not to cover a forecast being slightly off, but to make forecasting less load-bearing in the first place. A plan that requires the central case is a plan resting on the least reliable input available to it, which is a prediction about the future.",
    "It is often read as pessimism, or as leaving returns on the table, and both readings miss the arithmetic. Accepting a somewhat lower expected result in exchange for surviving a much wider range of outcomes is a favourable trade whenever the alternative range contains an unrecoverable case. The buffer is what allows a strategy to be endured long enough to work, which is the condition compounding also requires.",
    "The most valuable buffer usually sits in liquidity and in time rather than in the model. Cash that is not committed, runway longer than the plan needs, an assumption set that still clears the bar at two thirds of expectations. A buffer that exists only as a lower number in a spreadsheet is not a buffer, because it changes nothing about what you are able to do when conditions turn."
  ],
  practical: {
    label: "Example: building the buffer",
    lead: "Stress the plan until it breaks, then work out what would have to be true to survive that point.",
    bullets: [
      "What is the one assumption this plan cannot tolerate being wrong about?",
      "Does this still work at two thirds of the central case?",
      "Where is my buffer held: in cash, in time, or only in a forecast?",
      "What would force a decision I have not planned for?",
      "Am I treating my central forecast as though it were a floor?"
    ]
  },
  application:
    "The version that gets missed in private markets is buffer measured in time rather than in price. Runway built on the round closing to schedule, reserves modelled on the follow-on being available, and fund life assumed sufficient for the exit are all forecasts doing structural work. Adding twelve months to each and checking the position still holds is a cheap test, and it changes decisions more often than people expect.",
  models: ["margin-of-safety", "probability", "inversion", "risk-not-volatility"],
  connections: [
    { to: "pom-getting-vs-keeping", type: "reinforces" },
    { to: "pom-confounding-compounding", type: "related" },
    { to: "margin-of-safety", type: "extends" },
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" }
  ],
  quote: null
},

{
  id: "pom-you-will-change", num: 10, book_id: "pom", category: "learning",
  title: "You Will Change",
  thesis: "Your future self will want different things, so plans built for who you are now tend to fail.",
  reading_time: 2,
  explanation: [
    "People consistently underestimate how much their preferences will change, while readily accepting that those preferences have already changed a great deal. The end-of-history illusion is the finding that at any age we treat our current tastes, values and goals as settled, and are then surprised by the scale of the revision a decade later. Long-range plans are made on behalf of a person who does not yet exist.",
    "This makes precise long-term optimisation less useful than it looks. A plan tuned exactly to present preferences carries a cost when those preferences move, because unwinding it means abandoning sunk effort while continuing means persisting with something you no longer want. Both are expensive, and the second is more common, because people resist conceding that a long commitment was made by somebody else.",
    "The response is to prefer plans with moderate commitments at every point over plans that require an extreme at any point. Avoiding the ends of the range, neither no saving at all nor a decade of deprivation, keeps the set of futures you could accept wide. It also means treating sunk costs as the price of changing your mind rather than as an argument for continuing."
  ],
  practical: {
    label: "Example: planning for a stranger",
    lead: "Ask whether this commitment still makes sense if what you want in ten years is materially different.",
    bullets: [
      "How different were my priorities ten years ago, honestly?",
      "What does this plan require me to still want in a decade?",
      "Which commitments would be expensive to unwind if I changed my mind?",
      "Am I persisting with something because of what it has already cost?",
      "Does this plan sit at an extreme rather than in the middle?"
    ]
  },
  application:
    "This applies to careers inside a firm as much as to portfolios. Partnership tracks, vesting schedules and ten-year fund lives all assume the people who signed will want the same things at the end, and the mid-fund partner departure is that assumption failing in public. Structures with genuine review points, and honest conversations held before they are forced, cost far less than learning about the change through a resignation.",
  models: ["endowment", "planning-fallacy", "decision-quality", "opportunity-cost"],
  connections: [
    { to: "pom-reasonable-not-rational", type: "reinforces" },
    { to: "pom-no-one-is-crazy", type: "related" },
    { to: "tfs-two-selves", type: "extends" },
    { to: "tfs-planning-fallacy", type: "related" },
    { to: "tib-ulysses-contract", type: "contrasts" }
  ],
  quote: null
},

{
  id: "pom-price-of-returns", num: 11, book_id: "pom", category: "investing",
  title: "Everything Has a Price",
  thesis: "Volatility is the admission fee for market returns, not a fine for having done something wrong.",
  reading_time: 3,
  explanation: [
    "Market returns are not free. The price of holding an asset that compounds is enduring the periods when it falls sharply, with no way at the time to tell whether the fall is temporary. That experience is the fee, and it is charged in discomfort rather than in cash, which is why most people never recognise it as a cost of the thing they say they want.",
    "Treating the decline as a penalty rather than a price leads to attempts to collect the return without paying for it: selling to avoid the drawdown, waiting for clarity, rotating into whatever has not fallen yet. Each is an attempt to take the reward and skip the cost, and the usual outcome is paying the fee in full and forfeiting the return anyway.",
    "The reframing has to be established in advance, because it is unavailable in the moment. Deciding beforehand that a fall of a given size is the ordinary cost of the position, and writing down what would make that no longer true, separates the two situations that feel identical during a decline: an asset behaving exactly as expected, and a thesis that has actually broken."
  ],
  practical: {
    label: "Example: naming the fee",
    lead: "Decide in advance what decline is the ordinary cost of holding this, and what would signal something else.",
    bullets: [
      "What drawdown has this asset class produced historically, and how often?",
      "Am I willing to pay that in exchange for the long-run return?",
      "What specific development, rather than price move, would change my thesis?",
      "Is my plan to avoid the fee, and what does that avoidance cost?",
      "Have I written this down while conditions are calm?"
    ]
  },
  application:
    "Illiquidity is the private-market version of the same fee, paid in forgone optionality rather than in visible volatility. The error is reading a quiet mark as evidence that no cost is being charged, then discovering the charge during a stretch when nothing can be sold. The related case is founder patience: a hard eighteen months is usually the price of the position rather than proof that the thesis was wrong.",
  models: ["risk-not-volatility", "loss-aversion", "market-cycles", "compounding"],
  connections: [
    { to: "pom-confounding-compounding", type: "reinforces" },
    { to: "pom-room-for-error", type: "related" },
    { to: "tmit-risk-is-loss", type: "related" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "patience", type: "reinforces" }
  ],
  quote: null
},

{
  id: "pom-reasonable-not-rational", num: 12, book_id: "pom", category: "decision-making",
  title: "Reasonable Beats Rational",
  thesis: "A reasonable plan you will actually follow beats an optimal one you will abandon.",
  reading_time: 2,
  explanation: [
    "The distinction is between a decision that is coolly correct on paper and one a person can live with through the stretches where it is uncomfortable. Financial plans are executed by humans over decades, so the probability of adherence forms part of the expected return. A plan with a slightly lower theoretical result and a much higher chance of being followed is the better plan on the only comparison that matters.",
    "This licenses choices that look inefficient. Holding more cash than the model recommends, clearing a low-rate loan for the relief of it, keeping a position because it is the reason you stay invested at all. Each carries a cost and each can be worth that cost. The limit is that reasonable is not a licence for whatever you feel like: the concession has to buy adherence to a plan that is otherwise sound.",
    "Applied honestly, this means designing around your own known behaviour rather than around a version of yourself that never flinches. Simpler rules, fewer decisions taken in the moment, and commitments made while calm all raise the probability of adherence. The relevant comparison is not the optimal strategy against yours, but the optimal strategy as you would actually execute it against yours."
  ],
  practical: {
    label: "Example: testing for adherence",
    lead: "Judge a plan by whether you will still be following it in the third consecutive bad year.",
    bullets: [
      "Have I abandoned a plan like this before, and at what point?",
      "What concession would make this one I actually stick to?",
      "Is this complexity buying return, or buying the appearance of rigour?",
      "What does this plan require me to do when I am frightened?",
      "Which decisions can I make now rather than in the moment?"
    ]
  },
  application:
    "The fund version is an investment process that survives contact with a busy quarter. A checklist nobody completes and a memo template that gets abbreviated under time pressure produce worse decisions than a shorter process genuinely applied every time. The same holds for deployment discipline: a pace rule the partners accept and follow is worth more than a theoretically optimal one suspended whenever the market turns competitive.",
  models: ["decision-quality", "dual-process", "loss-aversion", "base-rates"],
  connections: [
    { to: "pom-no-one-is-crazy", type: "reinforces" },
    { to: "pom-you-will-change", type: "reinforces" },
    { to: "tfs-simple-rules", type: "related" },
    { to: "temperament", type: "reinforces" },
    { to: "tii-formula-investing", type: "contrasts" }
  ],
  quote: null
}

);
