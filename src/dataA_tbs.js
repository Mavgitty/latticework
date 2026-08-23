/* The Black Swan — Nassim Nicholas Taleb — 12 ideas */
window.DB.ideas.push(

{
  id: "tbs-black-swan", num: 1, book_id: "tbs", category: "decision-making",
  title: "What a Black Swan Is",
  thesis: "A Black Swan is an unforeseen event of extreme impact that looks obvious afterwards.",
  reading_time: 3,
  explanation: [
    "Taleb's definition rests on three properties held together. The event sits outside the range of regular expectations, because nothing in the prior record convincingly pointed to it. It carries extreme consequences rather than marginal ones. And once it has happened, human nature supplies an explanation that makes it appear foreseeable, so the event is absorbed into the story of the past without changing anyone's method.",
    "The third property is what allows the first two to persist. If rare large events were simply recorded as unexplained, the lesson would be about the limits of the record. Instead they are explained, filed and forgotten, which leaves the same forecasting apparatus in place for the next one. The retrospective account is not a lie, it is a plausible reconstruction, and that is exactly what makes it durable.",
    "It also follows that a Black Swan is defined relative to the observer. The event that ruins the buyer of a security is often routine to the person who sold it, and the turkey's Thursday is unremarkable to the butcher. So the useful question is not which events are unforeseeable in general, but which are unforeseeable given what you specifically know and record."
  ],
  practical: {
    label: "Example: naming your own blind spot",
    lead: "Test an exposure by asking which unrecorded event would break it, and whether your evidence could ever have shown it.",
    bullets: [
      "Which single event, absent from my sample, would change this outcome completely?",
      "Is this surprise unforeseeable in general, or only unforeseeable to me?",
      "What explanation am I already reaching for, and is it doing real work?",
      "Does my process change after a large surprise, or only my story about it?",
      "Who on the other side of this trade treats my worst case as routine?"
    ]
  },
  application:
    "Most venture Black Swans are not macroeconomic. They are a platform policy change that removes a channel overnight, a single customer that was quietly forty per cent of revenue, a founder departure, or a category that appears from nothing and takes the market. The practical step is to write down, for each position, the one unrecorded event that would take the return to zero, and to ask whether anything in diligence would have surfaced it.",
  models: ["fat-tails", "narrative-fallacy", "wysiati", "probability"],
  connections: [
    { to: "tbs-mediocristan", type: "extends" },
    { to: "tbs-narrative-fallacy", type: "reinforces" },
    { to: "tfs-wysiati", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tii-market-history", type: "related" }
  ],
  quote: {
    text: "First, it is an outlier, as it lies outside the realm of regular expectations, because nothing in the past can convincingly point to its possibility.",
    attribution: "Nassim Nicholas Taleb, The Black Swan",
    why: "This is the first of the three attributes, and the clause about the past is the load-bearing part. Taleb is not claiming such events are merely improbable, he is claiming the evidence available beforehand cannot establish their possibility at all. That moves the problem from estimating odds to recognising that the sample is the wrong instrument."
  }
},

{
  id: "tbs-mediocristan", num: 2, book_id: "tbs", category: "decision-making",
  title: "Mediocristan and Extremistan",
  thesis: "Some domains are ruled by averages, others by single observations. Know which one you are in.",
  reading_time: 3,
  explanation: [
    "Taleb separates two kinds of randomness by asking what one additional observation can do to the total. In Mediocristan no single case moves the aggregate: add the tallest person alive to a sample of a thousand and average height barely shifts, because biology bounds the variable. In Extremistan the opposite holds, and one observation can dominate everything, as with wealth, book sales, casualties in a conflict or returns in a venture fund.",
    "The consequence is that the standard toolkit only works in one of them. Averages, standard deviations and confidence intervals all assume the extremes are bounded, so in Extremistan they understate the tail by amounts that are not small. The past sample is also far less informative there, because the largest event so far tells you what has happened rather than what the domain permits.",
    "Most real decisions mix the two. Headcount, rent and monthly churn behave like Mediocristan quantities, while the outcome of a fund, the size of a fraud and the cost of a security failure do not. Sorting each variable onto the correct side of the line is worth more than refining any single estimate, because the error from using the wrong tools is larger than the error in any input."
  ],
  practical: {
    label: "Example: sorting the variables",
    lead: "Before modelling anything, decide whether one observation can dominate the total, and choose your tools from that answer.",
    bullets: [
      "Can a single observation here move the total, or is the variable bounded?",
      "Am I using an average where the distribution has no stable one?",
      "What is the largest case on record, and what limits a case ten times bigger?",
      "Which parts of this decision are Mediocristan and which are Extremistan?",
      "Does my downside case exceed the worst event my sample happens to contain?"
    ]
  },
  application:
    "Fund returns sit firmly in Extremistan, which is why a mean expected outcome per deal carries almost no information and why reserve policy matters more than precision on entry price. The same fund's operating variables sit in Mediocristan. Underwriting improves when the two are kept apart: bounded estimates for burn and hiring, and a distribution with an open right tail for outcome.",
  models: ["fat-tails", "power-law", "probability", "base-rates"],
  connections: [
    { to: "tbs-black-swan", type: "extends" },
    { to: "tbs-scalability", type: "reinforces" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "tpl-power-law-returns", type: "related" },
    { to: "tii-diversification", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tbs-narrative-fallacy", num: 3, book_id: "tbs", category: "learning",
  title: "The Narrative Fallacy",
  thesis: "We bind facts into causal stories, and the story makes the past look ordered.",
  reading_time: 2,
  explanation: [
    "The mind stores a story more cheaply than a list of facts, so it converts one into the other automatically. A causal link compresses two events into a single memorable unit, which is why explanation feels like understanding. The compression is lossy in a particular direction: it discards the facts that do not fit the causal line, and it discards any sense that events could have gone otherwise.",
    "Because the story is assembled after the outcome is known, it always fits. Every market fall acquires its causes within a day, and each cause was visible beforehand to nobody in particular. The account is coherent, unfalsifiable and produces confidence that the next such event will be seen coming, which is the mechanism by which a large surprise teaches nothing.",
    "Resisting this does not mean refusing to explain. It means keeping the record separate from the account of the record: dated notes on what was believed and why, written before outcomes arrive, plus a habit of asking which facts the current story leaves out. An explanation that would have survived the opposite outcome is worth more than one that fits this outcome perfectly."
  ],
  practical: {
    label: "Example: keeping the record honest",
    lead: "Write the reasoning down before the outcome, then compare the two rather than reading the reasoning backwards.",
    bullets: [
      "Was this reasoning written down before the outcome, or reconstructed after it?",
      "Which facts does my explanation have to ignore in order to stay coherent?",
      "Would the same story have been told if the outcome had reversed?",
      "Am I treating a plausible cause as a demonstrated one?",
      "What did the people involved actually believe at the time, on the record?"
    ]
  },
  application:
    "Post-mortems on failed investments are where this does most damage, because a tidy cause makes the loss feel addressed. The correction is procedural: keep the original memo, compare it line by line against what happened, and record which specific belief was wrong rather than which factor caused the failure. The same discipline applies to the winners, where the narrative is more flattering and therefore less examined.",
  models: ["narrative-fallacy", "wysiati", "confirmation-bias", "alternative-histories"],
  connections: [
    { to: "tbs-silent-evidence", type: "reinforces" },
    { to: "tbs-problem-of-induction", type: "related" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "tfs-wysiati", type: "extends" },
    { to: "outcome-bias", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tbs-silent-evidence", num: 4, book_id: "tbs", category: "learning",
  title: "Silent Evidence",
  thesis: "Every observed record excludes the failures, so it overstates how well the visible strategy works.",
  reading_time: 3,
  explanation: [
    "Silent evidence is the systematic absence of the unsuccessful from anything you can observe. Records are compiled by and about those who came through, so the sample you study has already been filtered by the outcome you are trying to explain. This is not a sampling error that more data corrects, because the extra data arrives through the same filter.",
    "The consequence is that any trait shared by successful cases looks causal, while the same trait may be just as common among the failures nobody wrote up. Risk appetite, conviction and speed all read as virtues in a sample of survivors, when their real contribution can only be judged against the cases where they produced ruin. The absent cases hold the information about how often the strategy kills.",
    "Reconstructing the missing side is difficult and usually approximate. It means locating the population before the filter: the cohort of companies founded that year, the funds raised in that vintage, the applications that were rejected. An approximate denominator changes conclusions far more often than a precise numerator does, because it restores the failures to the count."
  ],
  practical: {
    label: "Example: finding the denominator",
    lead: "Ask who is missing from the sample you are learning from, and what removed them from it.",
    bullets: [
      "What population was this sample drawn from, and what filtered it?",
      "Do the failures share the traits I am calling causes of success?",
      "Can I find the cohort that started, not only the cohort that finished?",
      "Is this record compiled by the participants who happened to survive it?",
      "How many attempts stand behind the one outcome I am studying?"
    ]
  },
  application:
    "The visible record in venture is almost entirely survivors: the funds still raising, the companies still reporting, the founders still speaking on panels. Reference calls reach the customers who stayed and the staff who remain. Deliberately sourcing the absent side, churned customers, departed executives and same-vintage companies that quietly wound down, is one of the few diligence steps that changes conclusions rather than confirming them.",
  models: ["silent-evidence", "survivorship", "base-rates", "wysiati"],
  connections: [
    { to: "survivorship-bias", type: "extends" },
    { to: "tbs-narrative-fallacy", type: "reinforces" },
    { to: "tbs-expert-problem", type: "related" },
    { to: "base-rates", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "related" }
  ],
  quote: null
},

{
  id: "tbs-ludic-fallacy", num: 5, book_id: "tbs", category: "decision-making",
  title: "The Ludic Fallacy",
  thesis: "Games have fixed rules and stated odds. Real decisions have neither, and confusing them misleads.",
  reading_time: 2,
  explanation: [
    "The ludic fallacy is the mistake of taking the tidy uncertainty of games as a model for uncertainty in general. A casino is the one environment where the probabilities are known, the rules are fixed, the payouts are published and the sample space is closed. That is what makes it useful for teaching probability and close to useless as an analogy for anything outside it.",
    "Away from the game the distribution itself is unknown, the rules can change while you are playing, and the largest losses come from outside the stated sample space. A casino's own worst experiences have involved events that no bet at any table accounted for. The error is not in the arithmetic of probability, which is sound, but in treating the inputs as given when they were assumed.",
    "This is not an argument against modelling. It is an argument for keeping the model's boundary visible: which parameters were estimated from a short sample, which distribution was chosen for convenience, and what happens to the answer if that choice is wrong. Sensitivity to structure matters more than sensitivity to inputs, and a model with its structural assumptions written on the front page is much harder to over-read."
  ],
  practical: {
    label: "Example: checking the model's edge",
    lead: "Ask what the model assumes about the shape of uncertainty, then test whether that assumption is evidenced or merely convenient.",
    bullets: [
      "Where did this distribution come from, and what evidence would falsify the choice?",
      "Which risks sit outside the sample space the model defines?",
      "Am I treating estimated parameters as though they were known ones?",
      "What could break the rules of the game I think I am playing?",
      "Does the answer survive a different distribution, not just different inputs?"
    ]
  },
  application:
    "Venture models tend to be precise about the mechanics of a scenario and silent about the structure around it: an exit multiple drawn from three favourable years, a probability of failure taken from a benign vintage, a discount rate applied to outcomes with no stable variance. Stating the structural assumptions on the front page of the model, rather than only the input assumptions, is the version of this that changes decisions.",
  models: ["probability", "fat-tails", "decision-quality", "base-rates"],
  connections: [
    { to: "tbs-forecasting-limits", type: "reinforces" },
    { to: "tbs-problem-of-induction", type: "related" },
    { to: "probabilistic-thinking", type: "extends" },
    { to: "tfs-illusion-validity", type: "related" },
    { to: "tmit-cannot-predict", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tbs-problem-of-induction", num: 6, book_id: "tbs", category: "learning",
  title: "The Problem of Induction",
  thesis: "No number of confirming observations proves a rule. One contrary observation can destroy it.",
  reading_time: 2,
  explanation: [
    "Induction moves from observed cases to a general claim, and the move is never secure. A thousand days of being fed raise a turkey's confidence in the arrangement to its highest point on the day before slaughter. That confidence is not irrational given the data, which is the uncomfortable part: the evidence genuinely pointed that way, and the evidence was simply the wrong instrument.",
    "The asymmetry is what makes the idea usable. Confirmations accumulate without ever establishing the rule, while a single counter-example settles it. So the informative question about any belief is what would refute it, and whether such a case could ever appear in the data you collect. A claim that no available observation could disturb is not strong, it is untestable.",
    "The exposure tends to grow with the length of the good run. The longer a system operates without incident, the more confident everyone becomes and the more weight is placed on it, so the loss when the record finally breaks is larger than it would have been earlier. Track records are least informative precisely where they are longest and smoothest."
  ],
  practical: {
    label: "Example: testing the good run",
    lead: "Ask what your evidence could never have shown you, and whether confidence has grown with exposure rather than knowledge.",
    bullets: [
      "What single observation would refute this belief, and could it appear in my data?",
      "Is my confidence based on repetition or on understanding the mechanism?",
      "Has the smooth record itself been the reason for increasing the position?",
      "How long is the sample, and which regimes does it exclude?",
      "Am I the turkey in this arrangement, and who is doing the feeding?"
    ]
  },
  application:
    "Smooth performance is the pattern to interrogate: a lender with no defaults through a benign credit period, a marketplace whose take rate has never been tested by a funded competitor, a business whose retention has only ever been measured in a rising market. The productive diligence question is what has not yet been tested rather than what has been achieved, and how much exposure sits on the untested part.",
  models: ["probability", "base-rates", "fat-tails", "silent-evidence"],
  connections: [
    { to: "tbs-forecasting-limits", type: "extends" },
    { to: "tbs-ludic-fallacy", type: "related" },
    { to: "tii-market-history", type: "reinforces" },
    { to: "base-rates", type: "related" },
    { to: "tib-luck-vs-skill", type: "related" }
  ],
  quote: null
},

{
  id: "tbs-scalability", num: 7, book_id: "tbs", category: "strategy",
  title: "Scalable and Non-Scalable Work",
  thesis: "Work paid by the hour has a ceiling. Work that scales has no ceiling and no floor.",
  reading_time: 2,
  explanation: [
    "Taleb divides occupations by whether income is tied to effort. A dentist is paid per procedure, so earnings are bounded by available hours and cannot be enormous or, short of disaster, negligible. A writer, trader or founder produces something that can be reproduced at no further cost, so identical effort can yield nothing at all or an amount with no obvious limit.",
    "The distinction matters because scalable work moves the whole activity into Extremistan. Once output can be copied without more effort, attention and demand concentrate on a few winners and the median participant earns far less than the mean. That gap is not a market failure, it is the arithmetic of the distribution, and it stays invisible to anyone reasoning from the average.",
    "Neither category is better. Non-scalable work is bounded and comparatively reliable, while scalable work offers a tail at the cost of a likely poor outcome. The error is choosing a scalable path while planning as though the returns were bounded, or assembling a portfolio of non-scalable positions and expecting one of them to become very large."
  ],
  practical: {
    label: "Example: checking the ceiling",
    lead: "Ask whether output can be reproduced without more effort, then plan for the distribution that follows from the answer.",
    bullets: [
      "Does more revenue here require proportionally more people and more hours?",
      "If output is reproducible, who captures the concentration and why them?",
      "Am I reasoning from an average in an activity with no meaningful median?",
      "Is the cost base scalable in the same way the revenue is?",
      "What is my plan for the likely case rather than the tail case?"
    ]
  },
  application:
    "This is the substance behind the services-versus-software question in diligence. Revenue that grows with headcount is bounded and comparatively predictable, and should be valued on that basis rather than on software multiples. The harder case is the hybrid, where a scalable product sits on a non-scalable delivery model, because reported gross margin only improves if the delivery component genuinely falls away as volume grows.",
  models: ["power-law", "fat-tails", "scale-economies", "specialisation"],
  connections: [
    { to: "tbs-mediocristan", type: "extends" },
    { to: "tbs-convexity", type: "related" },
    { to: "zto-power-law", type: "related" },
    { to: "scale-economies", type: "reinforces" },
    { to: "csup-margins", type: "related" }
  ],
  quote: null
},

{
  id: "tbs-expert-problem", num: 8, book_id: "tbs", category: "people",
  title: "The Expert Problem",
  thesis: "Expertise transfers well in some fields and not at all in others. Confidence does not distinguish them.",
  reading_time: 3,
  explanation: [
    "Taleb separates fields where practice produces genuine skill from fields where it produces only confidence. Where the system is stable and feedback is fast and unambiguous, experience compounds into judgement: chess, surgery, handling an aircraft. Where outcomes are dominated by rare events and feedback arrives years later in a form open to interpretation, repetition builds fluency without building accuracy.",
    "The second group is not a small residual. It covers most forecasting about economies, markets, technologies and political events, which is precisely where expert advice is most sought and best paid. What experience delivers there is a richer vocabulary and a higher degree of certainty, and both make a forecast more persuasive without making it more likely to hold.",
    "So the test is a property of the domain rather than of the person. Ask what the feedback loop looks like: how quickly the answer arrives, how unambiguous it is, and whether the practitioner ever sees their own error rate. Where those conditions fail, use the expert as a source of mechanism and measured evidence, and discount the predictions."
  ],
  practical: {
    label: "Example: separating mechanism from prediction",
    lead: "Use experts for how something works and for what has been measured, and discount their forecasts of outcomes.",
    bullets: [
      "How fast and how clear is the feedback in this person's field?",
      "Does this expert see a recorded score of their own past calls?",
      "Am I buying a mechanism I could not construct, or a forecast?",
      "Is the certainty in this answer coming from evidence or from fluency?",
      "Would a well-briefed generalist do measurably worse on this specific question?"
    ]
  },
  application:
    "Sector specialists are indispensable on mechanism: how procurement actually works in a hospital, what a payments licence permits, why a particular chip design is hard to copy. They are no better than anyone else on which company wins, and their confidence is higher, which makes the two uses easy to conflate. Separating them inside reference calls, and recording which is which, raises the value of the calls.",
  models: ["probability", "base-rates", "authority-bias", "decision-quality"],
  connections: [
    { to: "tbs-forecasting-limits", type: "reinforces" },
    { to: "tbs-problem-of-induction", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "extends" },
    { to: "authority-misinfluence", type: "related" },
    { to: "circle-of-competence", type: "related" }
  ],
  quote: null
},

{
  id: "tbs-barbell", num: 9, book_id: "tbs", category: "investing",
  title: "The Barbell Strategy",
  thesis: "Hold most capital in the very safe and a little in the very aggressive, with nothing between.",
  reading_time: 3,
  explanation: [
    "The barbell is a shape for an allocation rather than a view about any asset. A large majority of capital sits in instruments chosen because they cannot fail in a way that matters, and a small minority sits in positions with unbounded upside whose total loss has already been accepted. The middle, where moderate risk is taken for moderate return, is deliberately left empty.",
    "The case for the shape is that risk in the middle is the risk you cannot measure. A moderately leveraged, moderately diversified, moderately correlated position looks calculable and behaves calculably right up to the point where the tail arrives, at which stage the estimate of its risk turns out to have been the load-bearing assumption. Splitting the exposure removes the dependence on that estimate.",
    "The cost is real and should be stated plainly. The safe side earns very little, the aggressive side usually returns nothing, and the pair underperforms a middling portfolio through any long benign period. A barbell buys survival in the bad state at the price of looking unambitious in the good one, and whether that trade is acceptable is a question about the mandate rather than about the arithmetic."
  ],
  practical: {
    label: "Example: emptying the middle",
    lead: "Sort each position by whether it can fail fatally, then ask what the moderate-risk block is actually doing.",
    bullets: [
      "Which positions carry unmeasurable risk in return for a moderate expected gain?",
      "Is the safe portion genuinely safe, or safe according to a model?",
      "Have I accepted a total loss on the aggressive portion in advance?",
      "What is the split between the two ends, and what would change it?",
      "Am I holding the middle because it is right or because it is conventional?"
    ]
  },
  application:
    "For an allocator this argues against the semi-liquid middle: leveraged credit, late-stage crossover positions marked off public comparables, structures whose safety rests on a covenant. Inside a fund the equivalent is a cash and reserve position held without stretching for yield, alongside genuinely early positions sized for total loss, and scepticism about anything sold as venture returns with the downside removed.",
  models: ["margin-of-safety", "optionality", "diversification", "fat-tails"],
  connections: [
    { to: "tbs-convexity", type: "related" },
    { to: "tbs-robustness", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tii-asset-allocation", type: "contrasts" },
    { to: "margin-of-safety", type: "related" }
  ],
  quote: null
},

{
  id: "tbs-convexity", num: 10, book_id: "tbs", category: "investing",
  title: "Convexity and Optionality",
  thesis: "Prefer payoffs where the loss is capped and known and the gain is open-ended.",
  reading_time: 3,
  explanation: [
    "Convexity is a property of a single payoff rather than of a whole portfolio. A position is convex when the downside is bounded and paid up front while the upside has no fixed limit, so the result improves with the size of the surprise. A barbell is one way to assemble a set of such positions, but a payoff can be convex inside any allocation shape.",
    "The value of convexity is that it does not require a forecast. If losses are capped and gains are not, exposure to variance is worth something on its own, and being wrong about the direction and timing of the surprise costs a known amount. So the question about a convex position is not how likely the good case is, but whether the price of the option is small against the payoff if it arrives.",
    "Two things destroy it. Paying too much for the option converts a convex payoff into an expensive directional bet, and any hidden obligation, leverage, a guarantee, a commitment to follow on, uncaps the loss without adding anything to the gain. Convexity has to be verified in the terms rather than inferred from the story about the upside."
  ],
  practical: {
    label: "Example: checking the payoff shape",
    lead: "Establish the maximum loss in writing, then ask whether the upside has any structural ceiling on it.",
    bullets: [
      "What is the largest amount I can lose here, and is that contractual?",
      "Is there any obligation that could increase that amount later?",
      "Does the upside have a cap, in the terms or in the market itself?",
      "What am I paying for the option, relative to the payoff if it works?",
      "Am I calling this convex because of the terms or because of the story?"
    ]
  },
  application:
    "Early-stage equity is convex by construction, which is a large part of why the asset class works, and the convexity is regularly eroded in practice. Follow-on obligations, pro rata commitments agreed in advance, side letters and cross-fund exposure all extend the loss beyond the first cheque. Preserving the shape means keeping every subsequent commitment discretionary and sizing the first cheque as though it were the whole of the loss.",
  models: ["optionality", "power-law", "margin-of-safety", "probability"],
  connections: [
    { to: "tbs-barbell", type: "related" },
    { to: "tbs-scalability", type: "reinforces" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "tpl-risk-capital", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tbs-forecasting-limits", num: 11, book_id: "tbs", category: "decision-making",
  title: "The Limits of Forecasting",
  thesis: "Forecast error grows with the horizon and with the tails, and it is rarely measured.",
  reading_time: 2,
  explanation: [
    "Two failures compound in forecasts of complex systems. The estimate is wrong by more than the forecaster expects, and the estimate of that error is wrong in the same direction, so the stated range is too narrow. Adding detail makes both worse rather than better, because a specific scenario feels more plausible than a vague one while being less likely to occur.",
    "The degradation is not linear in time. Anything depending on knowledge not yet discovered cannot be forecast at all, since predicting it would require already having it, and that puts a hard boundary around long-horizon technological and economic projection. Over short horizons in stable systems forecasts do work, which is how the technique keeps its reputation in the domains where it does not.",
    "What follows is not paralysis but a change in what a forecast is for. Use it to establish an order of magnitude and to identify which variable dominates the answer, then design so that being wrong about that variable is survivable. Effort moves from improving the estimate to reducing dependence on it, and that shift is available immediately whereas a better forecast generally is not."
  ],
  practical: {
    label: "Example: using a forecast properly",
    lead: "Treat the forecast as a rough scale and a list of dependencies, not as a number to be refined.",
    bullets: [
      "How far out does this forecast run, and what has to hold for that long?",
      "What error range have my forecasts actually shown, rather than claimed?",
      "Which single variable dominates the answer, and how well is it known?",
      "Does the plan still work if that variable comes in at half?",
      "Am I adding detail because it improves accuracy or because it improves conviction?"
    ]
  },
  application:
    "Five-year plans in growth deals are useful for two things: checking internal consistency, and identifying the two or three drivers the whole case rests on. The number in year five is not information. Underwriting to a materially slower path, and to a next round that is later, smaller and flat, is the practical substitute for a better forecast, and it is available immediately.",
  models: ["planning-fallacy", "probability", "fat-tails", "base-rates"],
  connections: [
    { to: "tbs-problem-of-induction", type: "extends" },
    { to: "tbs-robustness", type: "reinforces" },
    { to: "tfs-planning-fallacy", type: "reinforces" },
    { to: "tmit-cannot-predict", type: "reinforces" },
    { to: "tfs-outside-view", type: "related" }
  ],
  quote: null
},

{
  id: "tbs-robustness", num: 12, book_id: "tbs", category: "strategy",
  title: "Robustness to the Unknown",
  thesis: "Since large events cannot be forecast, build positions that survive them without identifying them first.",
  reading_time: 3,
  explanation: [
    "Robustness relocates the work. Rather than trying to name which rare event will arrive, arrange the position so that no single unforeseen event is fatal. The design criterion becomes exposure rather than probability: what happens if this fails, instead of how likely it is to fail, because the probability is the quantity you cannot establish in the first place.",
    "The practical content comes down to a small number of things. Avoid leverage that forces action at the worst moment, hold more liquidity than the base case requires, remove single points of dependency in customers, suppliers, channels and people, and size positions so that a total loss on any one is absorbable. None of this requires knowing what is coming.",
    "Robustness is not free, and its cost is visible while its benefit is not. Idle liquidity, duplicated suppliers and unused reserves all appear as drag through any period without incident, which is most periods, so the pressure to remove them peaks shortly before they are needed. Carrying the cost as an explicit, agreed line is what makes it survive that pressure."
  ],
  practical: {
    label: "Example: designing for survival",
    lead: "Work through each dependency and ask what its sudden absence would cost, without estimating how likely that is.",
    bullets: [
      "Which single failure, in any one place, would end this position outright?",
      "Where does leverage force me to act at the worst possible moment?",
      "How much liquidity do I hold beyond the base case, and why that amount?",
      "Which dependency has no alternative, and how long would substitution take?",
      "What is the annual cost of this robustness, stated as a number?"
    ]
  },
  application:
    "At portfolio level this is reserve policy, deployment pace and limits on correlated exposure, particularly the correlation hiding behind different sector labels that share a single funding market. At company level it is runway measured against a downside case rather than a plan, explicit revenue concentration limits, and a second route to market. The standing board question is which dependency currently has no substitute.",
  models: ["margin-of-safety", "fat-tails", "inversion", "second-order"],
  connections: [
    { to: "tbs-barbell", type: "reinforces" },
    { to: "tbs-forecasting-limits", type: "extends" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "inversion", type: "related" },
    { to: "tmit-defence-first", type: "reinforces" }
  ],
  quote: null
}

);
