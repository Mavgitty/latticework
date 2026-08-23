/* The Most Important Thing — Howard Marks — 12 ideas */
window.DB.ideas.push(

{
  id: "tmit-second-level", num: 1, book_id: "tmit", category: "decision-making",
  title: "Second-Level Thinking",
  thesis: "Superior returns require thinking the consensus has not already done, then being right about it.",
  reading_time: 3,
  explanation: [
    "First-level thinking reaches a view about the asset: the company is good, the sector is growing, the founder is impressive. Second-level thinking asks a different question: what does everyone else already believe about that, what is therefore in the price, and where specifically is the consensus wrong? The first is a judgement about a business. The second is a judgement about other people's judgement.",
    "The reason this matters is arithmetic rather than philosophical. Returns come from the difference between price and outcome, so a correct view already held by everyone pays nothing. That produces an uncomfortable requirement: to do better than average you have to hold a position most participants would think unwise, and be right. Being different and wrong is the common outcome, and it looks identical at the outset.",
    "So the work is not gathering more facts about the asset. Widely available information is already reflected, and effort spent confirming it produces conviction without edge. The useful question is narrower: what do I believe here that the market does not, and what would make that belief testable? If the answer is a restatement of the consensus with more detail attached, there is no position to take."
  ],
  practical: {
    label: "Example: finding the variant view",
    lead: "Before committing, state the consensus view in one sentence, then state where yours differs and why.",
    bullets: [
      "What is the consensus view here, stated in a way its holders would accept?",
      "What do I believe that differs from it, specifically rather than in tone?",
      "Why would the market be wrong about this, and for how long?",
      "What information or perspective do I have that they do not?",
      "If I am right and the consensus is also right, what do I earn?"
    ]
  },
  application:
    "In private rounds the consensus is visible in the price the round clears at and in how many funds are chasing it. A hot process is a first-level judgement made collectively, and paying up for it earns the average outcome at best. The variant view worth holding is usually about durability or unit economics three years out, not about whether the company is currently impressive.",
  models: ["second-level-thinking", "contrarian", "social-proof", "intrinsic-value"],
  connections: [
    { to: "tmit-contrarianism", type: "extends" },
    { to: "tmit-knowing-where-we-stand", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "zto-contrarian-question", type: "related" },
    { to: "social-proof", type: "contrasts" }
  ],
  quote: {
    text: "First-level thinking is simplistic and superficial, and just about everyone can do it (a bad sign for anything involving an attempt at superiority).",
    attribution: "Howard Marks, The Most Important Thing",
    why: "Marks makes the disqualifying observation early: the very accessibility of first-level thinking is what makes it useless for producing above-average results. The parenthetical does the work, turning a description into a test you can apply to your own reasoning."
  }
},

{
  id: "tmit-risk-is-loss", num: 2, book_id: "tmit", category: "investing",
  title: "Risk Is the Probability of Loss",
  thesis: "Risk is the chance of permanent loss, not the amount prices move around.",
  reading_time: 3,
  explanation: [
    "Academic finance measures risk as volatility because volatility is measurable and fits the mathematics. Marks rejects the substitution. Investors do not fear fluctuation, they fear losing money they cannot recover, and those are different things. An asset can move very little and still be a near-certain loss, and it can move violently while remaining a sound holding at the price paid.",
    "The awkward consequence is that risk cannot be observed, before or after. It is a probability, and probabilities do not appear in a single realised history. An investment that worked may have been reckless and got lucky, and one that failed may have been sensibly priced against a bad draw. Loss requires risk to be present, but risk being present does not require loss to occur.",
    "Which leaves judgement rather than measurement. Risk rises when prices rise, because the same asset at a higher price offers less compensation for the same set of possible futures. This inverts the common reading of a calm, rising market as a safe one. The moments that feel safest are usually the ones in which the least is being paid for bearing uncertainty."
  ],
  practical: {
    label: "Example: naming the loss",
    lead: "Describe the specific way this position loses money permanently, then ask what you are paid to accept it.",
    bullets: [
      "What is the path by which this becomes a permanent loss, not a drawdown?",
      "How much am I being paid, in expected return, for accepting that path?",
      "Has the price risen without the underlying prospects changing?",
      "Am I calling this safe because it has been quiet?",
      "Could I hold through a two-year decline without being forced to sell?"
    ]
  },
  application:
    "Illiquid positions hide the distinction well, because there is no price series to mistake for risk. The real exposures in venture are dilution at a bad round, a capital structure with liquidation preference stacked above you, and the possibility that the company simply stops. Underwriting should name which of those is live and at what price the compensation for it becomes adequate.",
  models: ["risk-not-volatility", "probability", "margin-of-safety", "alternative-histories"],
  connections: [
    { to: "tmit-defence-first", type: "reinforces" },
    { to: "tmit-price-is-everything", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "tib-luck-vs-skill", type: "related" }
  ],
  quote: null
},

{
  id: "tmit-price-is-everything", num: 3, book_id: "tmit", category: "investing",
  title: "It Is Not What You Buy, It Is What You Pay",
  thesis: "No asset is so good that it cannot become a bad investment at a high enough price.",
  reading_time: 3,
  explanation: [
    "Marks separates the two questions that get merged constantly. The quality of a business is one thing. Whether buying it at today's price will produce a return is another, and the second question is the only one that pays. A fine company bought at a price that already assumes an excellent future offers the future for free and the disappointment at full cost.",
    "This also cuts the other way, which is the part usually missed. Poor businesses can be excellent investments when the price has priced in something worse than what happens. Marks built a career in distressed debt on exactly that asymmetry, buying assets nobody wanted at prices that assumed catastrophe. The asset was not attractive. The relationship between price and probable outcome was.",
    "The discipline that follows is to keep the two judgements separate in writing. Assess the business, then assess the price, and refuse to let enthusiasm about the first quietly answer the second. Most poor outcomes trace back to a good analysis of quality being treated as a sufficient answer on value, which is how excellent companies produce mediocre returns for a decade."
  ],
  practical: {
    label: "Example: separating quality from price",
    lead: "Write the quality view and the price view as two separate conclusions, and check the second is not borrowed from the first.",
    bullets: [
      "Is my case for this position about the business or about the price?",
      "What outcome does this price already assume, and how good is that assumption?",
      "At what price would I decline this same company without hesitation?",
      "Am I paying for quality that is already fully recognised by everyone?",
      "Would I buy a worse business at a much lower price instead?"
    ]
  },
  application:
    "Growth rounds are where this bites hardest, because the quality case is genuine and the price still decides the return. A company compounding at sixty percent entered at a multiple that requires that rate to persist for five years is a bet on persistence, not on quality. Naming the entry multiple as a separate decision, with its own veto, is the only reliable defence.",
  models: ["intrinsic-value", "margin-of-safety", "second-level-thinking", "anchoring"],
  connections: [
    { to: "tmit-second-level", type: "reinforces" },
    { to: "tmit-risk-is-loss", type: "related" },
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "extends" },
    { to: "zto-monopoly", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tmit-cycles", num: 4, book_id: "tmit", category: "investing",
  title: "Nothing Moves in a Straight Line",
  thesis: "Most things are cyclical, and the greatest errors come from forgetting it.",
  reading_time: 2,
  explanation: [
    "Marks treats cyclicality as a property of anything involving people and credit. Profits, credit availability, risk appetite and valuation all oscillate, and they do so because success plants the conditions for its reversal. Cheap capital funds excess supply, which compresses returns, which withdraws capital, which sets up the next shortage. The cycle is not a pattern imposed on events but the shape the events take.",
    "What cycles do not offer is timing. They are irregular in length and amplitude, which is why extrapolating the current direction feels reasonable and fails. The error Marks emphasises is not mistiming the turn, it is believing the turn will not come: assuming this expansion is structural, this level of credit is normal, this cohort of returns is the new base rate.",
    "So the usable form is positional rather than predictive. You cannot say when the credit cycle turns, but you can say whether lenders are currently competing on terms or on price, and adjust aggressiveness accordingly. That is a statement about the present, checkable against evidence, and it is the input Marks uses in place of a forecast."
  ],
  practical: {
    label: "Example: reading the current phase",
    lead: "Describe where conditions sit now using observable evidence, and treat the direction of travel as unknown.",
    bullets: [
      "Is capital currently competing on price, on terms, or not competing at all?",
      "How long has the current condition held, and what created it?",
      "Which of my assumptions only work if this phase persists?",
      "What in this expansion is being described as structural?",
      "If conditions reverted to the ten-year average, what breaks first?"
    ]
  },
  application:
    "Venture has its own credit cycle, visible in round sizes, time between rounds, and how much diligence the market tolerates. When bridge rounds are easy and terms are clean, the environment is doing the work and returns will look like skill. The honest adjustment is to underwrite against the average of the last decade rather than the conditions of the last eighteen months.",
  models: ["market-cycles", "feedback-loops", "regression", "base-rates"],
  connections: [
    { to: "tmit-pendulum", type: "extends" },
    { to: "tmit-knowing-where-we-stand", type: "reinforces" },
    { to: "regression-to-the-mean", type: "reinforces" },
    { to: "tii-market-history", type: "reinforces" },
    { to: "feedback-loops", type: "related" }
  ],
  quote: {
    text: "Rule number one: most things will prove to be cyclical. Rule number two: some of the greatest opportunities for gain and loss come when other people forget rule number one.",
    attribution: "Howard Marks, The Most Important Thing",
    why: "The construction is doing something careful. The first rule is common knowledge and the second is where the money is. Marks locates the opportunity not in knowing that cycles exist but in other people's willingness to forget, which makes it a claim about behaviour rather than about economics."
  }
},

{
  id: "tmit-pendulum", num: 5, book_id: "tmit", category: "people",
  title: "The Pendulum of Sentiment",
  thesis: "Investor mood swings between greed and fear, and spends almost no time at the midpoint.",
  reading_time: 2,
  explanation: [
    "Marks's second image for cyclicality is a pendulum, and the important detail is where it spends its time. It swings between euphoria and depression, between believing risk is absent and believing risk is everywhere, and passes through the reasonable middle only in transit. The average of the arc is a place the market visits rather than occupies.",
    "The mechanism is social rather than analytical. Rising prices convert sceptics, and each conversion raises prices further, so the swing carries its own fuel. This is why the extremes are reached: the same evidence that should induce caution at high prices is read as confirmation, and people who were right early are described as having missed it. Fear works identically in reverse.",
    "What makes the pendulum useful is that sentiment is more observable than value. You can hear it. When every conversation assumes the good case, when scepticism is treated as a lack of vision, when the phrase risk management sounds quaint, the pendulum is near one end. That reading does not tell you when it reverses, only which direction it has further to travel."
  ],
  practical: {
    label: "Example: listening for the extreme",
    lead: "Judge sentiment from what is currently unsayable in your own market rather than from price levels alone.",
    bullets: [
      "What view would make me sound foolish in front of peers right now?",
      "Is caution currently being read as insight or as timidity?",
      "Are people describing risk as something to be managed or as absent?",
      "How much of my recent conviction arrived with rising prices?",
      "Which side of the arc has more distance left to run?"
    ]
  },
  application:
    "Fundraising and deployment sit on the same pendulum, which is why capital is abundant precisely when it should be scarce. Practically, the useful signals are qualitative: how quickly processes close, whether founders are choosing between term sheets, what diligence a competitive round permits. When those all point one way, the appropriate response is to slow deployment rather than to raise the target return.",
  models: ["market-cycles", "social-proof", "loss-aversion", "second-level-thinking"],
  connections: [
    { to: "tmit-cycles", type: "extends" },
    { to: "tmit-contrarianism", type: "reinforces" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "social-proof", type: "related" },
    { to: "temperament", type: "related" }
  ],
  quote: null
},

{
  id: "tmit-contrarianism", num: 6, book_id: "tmit", category: "decision-making",
  title: "Contrarianism Done Properly",
  thesis: "Doing the opposite of the crowd is not enough. You also have to be right.",
  reading_time: 3,
  explanation: [
    "The crowd is wrong at the extremes, and mostly right in between, which is why reflexive contrarianism performs badly. Marks's version is narrower: identify moments when consensus has reached a point that cannot be justified by any reasonable set of facts, and act against it then. That requires knowing what the consensus is, why it formed, and what specifically it is ignoring.",
    "The cost is borne in advance and in public. A correct contrarian position looks wrong for as long as the consensus continues to be reflected in prices, which can be years. Being early is functionally indistinguishable from being wrong, both to observers and to your own confidence, and that is the actual barrier rather than the analysis.",
    "Which means the requirement is structural as much as intellectual. The position has to be sized so that being early does not force a sale, the capital has to be patient enough to survive the interval, and the reasoning has to be recorded so it can be distinguished later from stubbornness. Without those, a correct contrarian view still loses money."
  ],
  practical: {
    label: "Example: testing a contrarian view",
    lead: "Before taking the other side, check that the consensus is at an extreme and that you can say why.",
    bullets: [
      "Is the consensus merely popular, or is it at an indefensible extreme?",
      "What do the people on the other side know that I do not?",
      "Am I holding this view because of evidence or because it feels sophisticated?",
      "Can I hold this position for three years without being forced out?",
      "What would tell me I am wrong rather than early?"
    ]
  },
  application:
    "In venture, contrarianism usually means writing cheques in categories that have just disappointed, where the previous cohort failed publicly and the price reflects it. The discipline is distinguishing categories that were early from categories that were mistaken, which requires a view on what has actually changed since. Doing it well also needs a fund structure and a partnership that will tolerate looking wrong for two years.",
  models: ["contrarian", "second-level-thinking", "social-proof", "market-cycles"],
  connections: [
    { to: "tmit-second-level", type: "extends" },
    { to: "tmit-patient-opportunism", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "zto-contrarian-question", type: "related" },
    { to: "tii-mr-market", type: "related" }
  ],
  quote: null
},

{
  id: "tmit-defence-first", num: 7, book_id: "tmit", category: "investing",
  title: "Defence Beats Offence",
  thesis: "Avoiding losers is more reliably achievable than picking winners, so build the portfolio around that.",
  reading_time: 3,
  explanation: [
    "The asymmetry is the whole point and it is easy to state loosely, so be precise. Identifying the assets that will do best is a forecasting problem, and forecasting is unreliable. Identifying the assets carrying obvious hazards, excessive leverage, prices that require perfection, business models dependent on cheap capital, is largely an inspection problem, and inspection is more dependable. The two tasks have different success rates.",
    "Arithmetic reinforces the preference. A fifty percent loss requires a hundred percent gain to recover, so losses damage a compounding series more than equivalent gains help it. A record with fewer bad years compounds better than one with higher peaks and deeper troughs, even where the arithmetic averages match. Consistency is not a lesser goal than brilliance, it is a different route to the same place.",
    "The limit is that defence alone earns nothing. Marks is arguing about where the effort goes, not for abstinence: play offence when the compensation for risk is generous, defend when it is not, and let the environment rather than ambition set the mix. In practice the defensive work is unglamorous and testable, which is exactly why it gets skipped in favour of finding the next winner."
  ],
  practical: {
    label: "Example: eliminating before selecting",
    lead: "Run the exclusion test first, and only then spend effort ranking whatever survives the screen.",
    bullets: [
      "What would have to be true for this to lose most of its value?",
      "Is anything here dependent on continued access to cheap capital?",
      "How much of my effort goes to exclusion versus selection?",
      "Is the compensation for risk currently generous enough to justify aggression?",
      "Which of my last five losses were avoidable by inspection rather than foresight?"
    ]
  },
  application:
    "Venture returns are power-law distributed, which appears to argue the other way, and mostly does not. Picking the winner is not reliably achievable, but excluding the fatal patterns, unfundable capital structures, single-channel dependence, founders who cannot recruit, is. Screening those out raises the quality of the whole portfolio without requiring any forecast, and it protects the reserve capital that funds the winner you did find.",
  models: ["inversion", "risk-not-volatility", "compounding", "margin-of-safety"],
  connections: [
    { to: "tmit-avoiding-pitfalls", type: "extends" },
    { to: "tmit-risk-is-loss", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "inversion", type: "related" },
    { to: "zto-power-law", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tmit-role-of-luck", num: 8, book_id: "tmit", category: "learning",
  title: "The Role of Luck",
  thesis: "Outcomes are a poor guide to decision quality, because one history reveals little about the odds.",
  reading_time: 2,
  explanation: [
    "Marks borrows from Taleb the idea of alternative histories: the world that happened is one draw from a distribution that could have produced others. Judging a decision by the draw that occurred credits skill for favourable randomness and blames judgement for unfavourable. Over short periods this is the dominant effect, and short periods are how most investors are assessed.",
    "The asymmetry that matters is between aggressive and careful strategies. Aggression is rewarded in the states of the world that show up most often, so a manager who took excessive risk usually looks excellent until the rare state arrives. The record is genuine, the process was unsound, and nothing in the numbers distinguishes the two until it is too late to matter.",
    "The remedy is to assess process against the range of outcomes that were available, not against the one that happened. That means asking what the position would have done in the states that did not occur, and treating an untested strategy as untested rather than proven. It also means accepting that your own good years contain a component you did not produce."
  ],
  practical: {
    label: "Example: judging the process",
    lead: "Review the decision as it was made, then ask how it would have fared in the histories that did not happen.",
    bullets: [
      "What did I know at the time, and what was I guessing?",
      "In how many plausible versions of the last three years does this work?",
      "Has this strategy been tested by a hostile environment, or only a kind one?",
      "Which of my wins would look different with slightly worse timing?",
      "Am I revising the process, or only the story about it?"
    ]
  },
  application:
    "Fund track records are the practical case. A vintage entered in a rising market and exited into a generous one is a different sample from the same strategy run through a repricing, and the returns are not comparable. When assessing a co-investor, or your own record, separate what was chosen from what was received: entry environment, exit environment and pace of capital are all luck at the vintage level.",
  models: ["alternative-histories", "resulting", "probability", "survivorship"],
  connections: [
    { to: "tmit-cannot-predict", type: "reinforces" },
    { to: "tmit-defence-first", type: "related" },
    { to: "tib-luck-vs-skill", type: "reinforces" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "survivorship-bias", type: "related" }
  ],
  quote: null
},

{
  id: "tmit-cannot-predict", num: 9, book_id: "tmit", category: "decision-making",
  title: "You Cannot Predict, You Can Prepare",
  thesis: "Forecasts rarely add value, so build positions that survive several futures instead.",
  reading_time: 3,
  explanation: [
    "Marks divides investors into an I know school and an I don't know school. The first believes the future is knowable in enough detail to act on, and behaves accordingly: concentrated positions, leverage, market timing, confident allocation between asset classes. The second accepts that macro forecasts are unreliable and gives up the attempt, which sounds like a handicap and is closer to a release.",
    "The case against forecasting is not that it is always wrong but that it is not differentially right. Consensus forecasts are usually roughly correct and already priced, so they pay nothing. Forecasts that depart from consensus would pay, and are wrong most of the time. The valuable and the accurate are close to disjoint sets, which is a harder problem than inaccuracy.",
    "Preparation replaces prediction with robustness. It means holding positions whose returns do not depend on one macro path, keeping enough liquidity to act when others cannot, avoiding leverage that converts a temporary decline into a permanent loss, and sizing so no single view is fatal. None of that requires knowing what happens next, which is the point."
  ],
  practical: {
    label: "Example: preparing instead of forecasting",
    lead: "List the macro assumptions your position depends on, then remove the dependence rather than improving the forecast.",
    bullets: [
      "Which forecast does this position require to be correct?",
      "How does it perform if that forecast is wrong in either direction?",
      "Do I have liquidity available in the scenario where prices fall furthest?",
      "Am I in the I know school by behaviour, whatever I say?",
      "What would I have to believe to size this twice as large?"
    ]
  },
  application:
    "Reserve policy is the venture form of preparation. Deciding in advance how much follow-on capital is held back, and against what conditions it is released, removes the need to forecast the funding environment two years out. The same logic argues for deployment pace set by rule rather than by opportunity flow, since opportunity flow is highest when conditions are least favourable to the buyer.",
  models: ["probability", "margin-of-safety", "optionality", "base-rates"],
  connections: [
    { to: "tmit-role-of-luck", type: "reinforces" },
    { to: "tmit-knowing-where-we-stand", type: "contrasts" },
    { to: "tib-not-sure", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "reinforces" },
    { to: "avoiding-ruin", type: "related" }
  ],
  quote: null
},

{
  id: "tmit-patient-opportunism", num: 10, book_id: "tmit", category: "investing",
  title: "Patient Opportunism",
  thesis: "There is no obligation to act. Wait for the price to come to you.",
  reading_time: 2,
  explanation: [
    "Marks's version of patience is not passive holding, it is a refusal to manufacture activity when conditions do not warrant it. Opportunities arrive unevenly, clustered in periods when others are selling for reasons unrelated to value. Between those periods the correct behaviour is preparation and restraint, which is difficult because it produces nothing visible to anyone watching.",
    "The pressure runs the other way in every institution. Capital that has been raised is expected to be deployed, fees are charged on committed rather than invested capital, and a quiet quarter reads as a failure of sourcing. So the structural bias is toward transacting, and it is strongest when prices are high, because that is when supply is abundant and processes are competitive.",
    "Waiting only works if it is funded. Patience requires committed capital that cannot be withdrawn at the bottom, an agreed standard that defines what would justify acting, and an owner or committee that accepts inactivity as a decision. Without those the wait ends early, usually within a quarter of the moment it starts being uncomfortable."
  ],
  practical: {
    label: "Example: waiting on purpose",
    lead: "Set the standard that would justify acting, then treat not meeting it as a complete answer.",
    bullets: [
      "What price or condition would make this an obvious yes?",
      "Am I lowering that standard because nothing has cleared it recently?",
      "What pressure is pushing me to transact, and where does it come from?",
      "Is my capital structured so that I can still act at the bottom?",
      "Have I recorded inactivity as a decision, with reasons?"
    ]
  },
  application:
    "Deployment pace is the observable test. A fund that invests at a constant rate through a doubling of entry multiples has decided that pace matters more than price, whatever the memos say. The alternative is a written standard on entry valuation and quality, an acceptance that some quarters produce nothing, and reserves large enough to be useful when the standard is finally met.",
  models: ["opportunity-cost", "market-cycles", "incentives", "margin-of-safety"],
  connections: [
    { to: "tmit-cycles", type: "reinforces" },
    { to: "tmit-contrarianism", type: "reinforces" },
    { to: "patience", type: "extends" },
    { to: "selectivity", type: "reinforces" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "tmit-knowing-where-we-stand", num: 11, book_id: "tmit", category: "investing",
  title: "Knowing Where We Stand",
  thesis: "You cannot know what happens next, but you can assess conditions now.",
  reading_time: 3,
  explanation: [
    "This is the practical resolution of the refusal to forecast. Marks distinguishes predicting the future from taking the temperature of the present, and argues the second is both possible and sufficient. Whether valuations are high or low relative to history, whether credit is being extended carelessly, whether scepticism is being punished, are all matters of current observation rather than projection.",
    "What the reading produces is a setting for aggressiveness, not a trade. Knowing the market is expensive does not imply it falls next quarter, and acting as though it does is forecasting again. It implies a smaller position, a higher bar, more liquidity and less leverage. Those are adjustments to how much you commit, not to when the market turns.",
    "Marks's method for the reading is a checklist of observable pairs rather than an indicator. Are investors eager or reluctant, is capital plentiful or scarce, are lenders competing to lend, is the recent news treated as reassuring or alarming? Count which column dominates. The output is coarse and that is appropriate, because the decision it feeds is also coarse."
  ],
  practical: {
    label: "Example: taking the temperature",
    lead: "Score the current environment on a handful of observable pairs, and let the total set your aggressiveness.",
    bullets: [
      "Is capital plentiful or scarce, and on whose terms is it offered?",
      "Are investors currently eager to buy or reluctant to hold?",
      "Where do valuations sit against the ten-year range for this asset class?",
      "Is bad news being explained away or magnified?",
      "Given the count, should I be more aggressive or less?"
    ]
  },
  application:
    "The venture equivalents are legible if you look for them: round sizes relative to revenue, how many term sheets a decent company receives, whether structure is appearing in preference terms, how long diligence is permitted to take. Recording those quarterly builds a series that tells you where you are without requiring any prediction, and it makes a later change in aggressiveness explicable rather than reactive.",
  models: ["market-cycles", "second-level-thinking", "base-rates", "risk-not-volatility"],
  connections: [
    { to: "tmit-cannot-predict", type: "extends" },
    { to: "tmit-cycles", type: "reinforces" },
    { to: "tmit-pendulum", type: "related" },
    { to: "tii-market-history", type: "reinforces" },
    { to: "base-rates", type: "related" }
  ],
  quote: {
    text: "We may never know where we're going, but we'd better have a good idea where we are.",
    attribution: "Howard Marks, The Most Important Thing",
    why: "The sentence separates two things routinely conflated, forecasting and orientation, and concedes the first in order to insist on the second. It is also a rebuke to the idea that declining to predict means having no view at all."
  }
},

{
  id: "tmit-avoiding-pitfalls", num: 12, book_id: "tmit", category: "learning",
  title: "Avoiding the Pitfalls",
  thesis: "Most losses come from a short list of recurring errors, which can be learned in advance.",
  reading_time: 2,
  explanation: [
    "Marks catalogues the ways investors lose money and the list is shorter than expected. Failures of analysis, chiefly not knowing enough or using too little imagination about what could happen. Failures of psychology, greed, fear, envy, the surrender of independent judgement. And the failure that combines both, believing that because something has not gone wrong it cannot.",
    "The most expensive item is failure of imagination, and it comes in two forms that look opposite. One is not conceiving of an outcome bad enough. The other is conceiving of it and dismissing it as too improbable to bother sizing for. Both leave the portfolio exposed to the same event, and the second is more common among careful people because it feels like analysis.",
    "Because the list is finite, it can be turned into a routine. Marks's practice is essentially a standing checklist applied before commitment and after loss, which is a lower ambition than becoming a better forecaster and a much higher expected value. The errors do not become less tempting with experience, they become recognisable, which is enough."
  ],
  practical: {
    label: "Example: running the checklist",
    lead: "Keep a written list of the errors you have actually made, and check each new decision against it.",
    bullets: [
      "Which known error is this decision most likely to be an instance of?",
      "What outcome have I conceived of and then declined to size for?",
      "Is my confidence coming from analysis or from the absence of recent trouble?",
      "Whose behaviour am I copying, and have I checked their reasoning?",
      "What did my last three losses have in common?"
    ]
  },
  application:
    "The venture version of the checklist is specific and mostly unglamorous: capital structures that make the next round hard, revenue concentrated in one customer, growth bought with capital that is about to become expensive, founders whose story has changed without acknowledgement. Keeping the list current from your own losses, rather than from general principles, is what makes it bite in a competitive process.",
  models: ["inversion", "confirmation-bias", "social-proof", "fat-tails"],
  connections: [
    { to: "tmit-defence-first", type: "reinforces" },
    { to: "tmit-risk-is-loss", type: "related" },
    { to: "learning-from-mistakes", type: "extends" },
    { to: "antidotes", type: "reinforces" },
    { to: "tfs-premortem", type: "related" }
  ],
  quote: null
}

);
