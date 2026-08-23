/* The Intelligent Investor — Benjamin Graham — 12 ideas */
window.DB.ideas.push(

{
  id: "tii-margin-of-safety", num: 1, book_id: "tii", category: "investing",
  title: "Margin of Safety",
  thesis: "Buy far enough below value that being wrong about value still leaves you whole.",
  reading_time: 3,
  explanation: [
    "Graham's central concept, and the one he chose when asked to reduce sound investment to three words. The margin of safety is the gap between the price paid and the conservatively estimated value, and its function is to absorb error, bad luck and the ordinary imprecision of any valuation.",
    "It is a statement about the price, not about the asset. The same company is a sound investment at one price and a speculation at another, which means quality alone never settles the question. Buying an excellent business at a price that assumes everything goes right removes the buffer entirely.",
    "The buffer has a cost: fewer opportunities clear the bar, and in rising markets you will look slow. That is the premium paid for the fact that estimates are wrong in both directions and that you would like to still be solvent when they are wrong in the unhelpful one."
  ],
  practical: {
    label: "Example: pricing the buffer",
    lead: "Establish value independently, then require a discount to it before acting.",
    bullets: [
      "What is my own conservative estimate of value, made before seeing the asking price?",
      "What discount to that estimate am I requiring, and why that number?",
      "Which assumptions is the current price relying on being right?",
      "If my central estimate is 30% too high, does this still work?",
      "Am I substituting business quality for a margin of safety?"
    ]
  },
  application:
    "In private markets the buffer usually sits in entry multiple and in runway rather than in observable asset value. The practical version is to underwrite the case where the next round is late, smaller and flat, and check that the return still clears the hurdle. If it only works on the plan, there is no margin of safety in it.",
  models: ["margin-of-safety", "intrinsic-value", "probability", "inversion"],
  connections: [
    { to: "margin-of-safety", type: "extends" },
    { to: "tii-intrinsic-value", type: "reinforces" },
    { to: "inversion", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "contrasts" }
  ],
  quote: {
    text: "Confronted with a challenge to distill the secret of sound investment into three words, we venture the motto, MARGIN OF SAFETY.",
    attribution: "Benjamin Graham, The Intelligent Investor",
    why: "Graham puts this at the end of the book rather than the beginning, having earned it. The choice of the phrase over anything about selection or timing says that he regards price discipline as the load-bearing idea and everything else as technique."
  }
},

{
  id: "tii-mr-market", num: 2, book_id: "tii", category: "investing",
  title: "Mr Market",
  thesis: "The market is a manic business partner who quotes you a price every day. You are never obliged to accept it.",
  reading_time: 3,
  explanation: [
    "Graham's parable: imagine a partner who appears daily and offers to buy your share or sell you his, at a price that swings with his moods. Some days he is euphoric and quotes absurdly high; other days he is despairing and quotes absurdly low. He never takes offence at being ignored.",
    "The point is the reframing of what a quoted price is. It is not information about value, it is an offer. Your only obligations are to know roughly what the thing is worth and to transact when his mood is useful to you.",
    "This turns volatility from a risk into a supply of opportunities, but only for someone whose own value estimate is independent. Without that, Mr Market's prices become your estimate of value, and his mood becomes your mood."
  ],
  practical
: {
    label: "Example: using the mood",
    lead: "Separate the quote from the value, then decide whether the quote is useful.",
    bullets: [
      "What do I think this is worth, arrived at without reference to the current price?",
      "Is today's price an opportunity to buy, an opportunity to sell, or simply noise?",
      "Am I checking the price for information, or for reassurance?",
      "Has anything about the business changed, or only its quotation?",
      "Would I be comfortable holding this if no price were published for three years?"
    ]
  },
  application:
    "Private assets have no daily quote, which removes the temptation and also removes the discipline: the mark is a model, and the model is usually built from public comparables, so Mr Market arrives indirectly. Knowing which of your marks are opinions and which are transactions is the equivalent exercise.",
  models: ["mr-market", "intrinsic-value", "social-proof", "loss-aversion"],
  connections: [
    { to: "tii-chief-problem", type: "reinforces" },
    { to: "tii-intrinsic-value", type: "reinforces" },
    { to: "temperament", type: "reinforces" },
    { to: "social-proof", type: "contrasts" },
    { to: "tfs-endowment", type: "related" }
  ],
  quote: null
},

{
  id: "tii-investment-vs-speculation", num: 3, book_id: "tii", category: "investing",
  title: "Investment or Speculation",
  thesis: "An investment requires analysis, safety of principal and an adequate return. Everything else is speculation.",
  reading_time: 2,
  explanation: [
    "Graham's definition is deliberately strict and it is a definition of the operation rather than of the asset. Buying the same security can be an investment or a speculation depending on the analysis behind it, the price paid and the expectations attached.",
    "He does not condemn speculation. He insists it be labelled, kept in a separate account, and sized so that losing it entirely does not matter. The damage comes from speculating while believing you are investing, because then the position is sized as though it were safe.",
    "The test is uncomfortable to apply honestly. Thorough analysis means you can state what the thing is worth and why; safety of principal means a plausible bad case leaves you intact; adequate return means the number is defined in advance rather than assessed afterwards."
  ],
  practical: {
    label: "Example: labelling the operation",
    lead: "Apply Graham's three tests before committing, and label the result.",
    bullets: [
      "Have I done thorough analysis, or am I acting on a story and momentum?",
      "Is principal reasonably safe in a plausible bad case, not just in the base case?",
      "Have I defined what an adequate return is, in advance?",
      "If any answer is no, is this sized as a speculation?",
      "Is it recorded as a speculation, so the outcome is judged on the right basis?"
    ]
  },
  application:
    "Venture is a speculative operation by Graham's definition, and saying so plainly is useful rather than damning. It sets the correct implications: position sizes that survive total loss, portfolio construction that expects most positions to fail, and no pretence that diligence has made any single outcome safe.",
  models: ["intrinsic-value", "margin-of-safety", "probability", "decision-quality"],
  connections: [
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "probabilistic-thinking", type: "related" },
    { to: "tib-bets", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tii-defensive-enterprising", type: "extends" }
  ],
  quote: null
},

{
  id: "tii-intrinsic-value", num: 4, book_id: "tii", category: "investing",
  title: "Intrinsic Value",
  thesis: "A business has a value independent of its price, and the whole job is estimating it approximately.",
  reading_time: 2,
  explanation: [
    "Intrinsic value is what the business is worth on the evidence of its assets, earnings and prospects, and it is deliberately approximate. Graham's position is that a range is achievable and a point estimate is not, which is enough to act on when price sits far outside the range.",
    "The estimate has to be your own. If it is derived from the price, or from what other people are paying, it cannot tell you anything about the price, and you have simply relabelled consensus as analysis.",
    "Precision is the trap. A model carried to two decimal places creates the impression of knowledge while resting on a growth assumption ten years out. A wide range honestly stated is more useful, because it tells you when you do not know."
  ],
  practical: {
    label: "Example: an honest range",
    lead: "Produce a range, name the assumptions it turns on, and note where you are guessing.",
    bullets: [
      "What are the two or three assumptions that drive most of the value?",
      "What is the plausible range on each, and what range does that imply for value?",
      "Which inputs am I guessing at rather than estimating?",
      "Does the current price sit inside or outside my range?",
      "Am I using a spurious level of precision to hide a large unknown?"
    ]
  },
  application:
    "Reverse the exercise for growth assets: rather than forecasting value, calculate what the price implies must happen, then judge whether it is plausible. It is the same discipline arrived at from the other end, and it makes the embedded assumptions explicit rather than buried in a terminal multiple.",
  models: ["intrinsic-value", "margin-of-safety", "base-rates", "probability"],
  connections: [
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "base-rates", type: "related" },
    { to: "anchoring", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tii-chief-problem", num: 5, book_id: "tii", category: "people",
  title: "Your Chief Problem Is Yourself",
  thesis: "The main obstacle to good returns is not the market or the competition. It is the investor.",
  reading_time: 2,
  explanation: [
    "Graham's judgement, formed over decades of watching capable people, is that the decisive variable is behaviour rather than analysis. The arithmetic of sound investment is not difficult; sitting still while it works, and not acting when others are excited, is.",
    "This means most of the useful effort goes into designing around yourself: policies set in advance, exposure to prices reduced, comparisons to peers lengthened, decisions written down when calm. None of it is intellectually interesting and all of it works.",
    "It also means intelligence offers no protection and can be a liability, since a capable mind produces better justifications for whatever the emotion has already decided."
  ],
  practical: {
    label: "Example: designing around yourself",
    lead: "Identify your own failure pattern and remove the situations that trigger it.",
    bullets: [
      "What have my last three poor decisions had in common, behaviourally?",
      "What rule, set now, would have prevented them?",
      "How often am I exposed to prices, and does that exposure help?",
      "Am I comparing myself to peers over a window shorter than my mandate?",
      "Who is empowered to tell me I am about to repeat a known mistake?"
    ]
  },
  application:
    "This is the same conclusion Munger reaches about temperament and Duke reaches about tilt, from three different starting points. Institutionally it argues for written mandates, pre-committed sizing, and reporting periods matched to the holding period rather than to the calendar.",
  models: ["mr-market", "loss-aversion", "social-proof", "decision-quality"],
  connections: [
    { to: "temperament", type: "reinforces" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "tib-tilt", type: "reinforces" },
    { to: "antidotes", type: "reinforces" },
    { to: "independent-thinking", type: "related" }
  ],
  quote: {
    text: "The investor's chief problem, and even his worst enemy, is likely to be himself.",
    attribution: "Benjamin Graham, The Intelligent Investor",
    why: "Graham places the main risk inside the investor rather than in the market, which relocates the work. If the enemy is internal, the useful interventions are procedural and personal rather than analytical."
  }
},

{
  id: "tii-defensive-enterprising", num: 6, book_id: "tii", category: "investing",
  title: "Defensive or Enterprising",
  thesis: "Decide honestly how much work you will do, then adopt the strategy that suits that answer.",
  reading_time: 2,
  explanation: [
    "Graham splits investors into two types by effort rather than by wealth or risk appetite. The defensive investor wants freedom from effort and worry, and should hold a simple diversified portfolio with mechanical rules. The enterprising investor is willing to devote real, continuous time to analysis, and can look for mispricing.",
    "The important claim is that the middle is the worst place to be. Occasional, enthusiastic effort produces the costs of the enterprising approach with the results of the defensive one, and it is where most people actually operate.",
    "Returns follow effort, not intention. Choosing the defensive path deliberately is a respectable and usually correct decision; drifting into the enterprising path on weekends is not a strategy."
  ],
  practical: {
    label: "Example: choosing honestly",
    lead: "Match strategy to the effort you will actually sustain, not the effort you admire.",
    bullets: [
      "How many hours a month will I genuinely spend on this, in a bad month?",
      "Do I have an information or analytical edge in this area, specifically?",
      "If I am defensive, is my portfolio actually simple and rule-based?",
      "If I am enterprising, is my process written and repeatable?",
      "Am I paying enterprising costs for defensive results?"
    ]
  },
  application:
    "The same test applies to a fund's mandate. A firm with genuine depth in two sectors is enterprising there and defensive everywhere else, and the discipline is refusing to run an enterprising process in categories where the depth is not real. That is Graham's version of the circle of competence.",
  models: ["circle-of-competence", "diversification", "specialisation", "opportunity-cost"],
  connections: [
    { to: "circle-of-competence", type: "reinforces" },
    { to: "specialisation", type: "reinforces" },
    { to: "tii-diversification", type: "related" },
    { to: "selectivity", type: "related" },
    { to: "tii-formula-investing", type: "extends" }
  ],
  quote: null
},

{
  id: "tii-formula-investing", num: 7, book_id: "tii", category: "investing",
  title: "Rules Instead of Forecasts",
  thesis: "A mechanical policy set in advance beats judgement exercised under pressure.",
  reading_time: 2,
  explanation: [
    "Graham's recommendations for the defensive investor are deliberately mechanical: fixed proportions, regular contributions regardless of the market, rebalancing on a rule. The point is not that the rules are optimal but that they are executed.",
    "A policy set when calm removes the decision from the moment when it will be made worst. Buying the same amount every month is a policy that continues to function in a panic, which is a property that no forecast has ever had.",
    "The cost is that you give up the upside from good discretionary calls. Graham's argument is that for most people, across a full cycle, the calls net out negative once behaviour is included, so the rule wins on the realistic comparison rather than the theoretical one."
  ],
  practical: {
    label: "Example: writing the policy",
    lead: "Decide the rule now, in writing, including what would justify breaking it.",
    bullets: [
      "What is the fixed allocation, and what triggers a rebalance?",
      "What am I committing to do regardless of conditions?",
      "What specific, pre-defined circumstance would justify an override?",
      "Who has to agree to an override, and is it recorded?",
      "Over the last cycle, would the rule have beaten my actual decisions?"
    ]
  },
  application:
    "In venture the equivalents are deployment pace, position sizing and reserve policy. Setting all three in advance is what prevents the pace being set by market enthusiasm and the sizing being set by how the last meeting went.",
  models: ["decision-quality", "diversification", "regression", "loss-aversion"],
  connections: [
    { to: "tfs-simple-rules", type: "reinforces" },
    { to: "tii-defensive-enterprising", type: "extends" },
    { to: "antidotes", type: "reinforces" },
    { to: "tib-ulysses-contract", type: "reinforces" },
    { to: "patience", type: "related" }
  ],
  quote: null
},

{
  id: "tii-diversification", num: 8, book_id: "tii", category: "investing",
  title: "Diversification",
  thesis: "Spreading exposure is protection against being wrong, and a limit on being right.",
  reading_time: 2,
  explanation: [
    "Graham treats diversification as the companion of the margin of safety. The buffer works on average across many positions; on any single one, an unlucky draw can still take out the whole thing. Holding enough independent positions is what lets the averages operate.",
    "This is in genuine tension with concentration. Concentration is how outsized results happen, and Graham's answer is that it is only available to someone with a real analytical edge and the temperament to sit through the variance, which is fewer people than believe it.",
    "The resolution depends on the shape of the return distribution. Where outcomes are roughly symmetric, diversification improves the risk-adjusted result. Where they follow a power law, wide diversification guarantees you own the winner and dilutes it into irrelevance."
  ],
  practical: {
    label: "Example: how much spread?",
    lead: "Let the return distribution and your actual edge set the number of positions.",
    bullets: [
      "Are outcomes in this asset class roughly symmetric or power-law distributed?",
      "Do I have a real edge here, or am I paying for the illusion of one?",
      "Is any single position large enough that being wrong is unsurvivable?",
      "Are my positions actually independent, or correlated through a factor I have not named?",
      "Am I diversified, or merely holding many things that fail together?"
    ]
  },
  application:
    "This is the direct counterweight to the power law: Graham's logic and Thiel's produce opposite prescriptions because they describe different distributions. The reconciliation for a venture portfolio is enough positions for the power law to have a chance of appearing, with no position sized so that its failure is fatal.",
  models: ["diversification", "power-law", "margin-of-safety", "probability"],
  connections: [
    { to: "zto-power-law", type: "contrasts" },
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "selectivity", type: "contrasts" },
    { to: "tfs-narrow-framing", type: "related" }
  ],
  quote: null
},

{
  id: "tii-earnings-quality", num: 9, book_id: "tii", category: "investing",
  title: "Earnings Quality",
  thesis: "Reported profit is an opinion. Read enough of the statements to form your own.",
  reading_time: 3,
  explanation: [
    "Graham spends a large part of the book on the mechanics of how earnings are presented, because the headline number is the output of choices: what is capitalised, what is treated as one-off, when revenue is recognised, how costs are allocated.",
    "None of this requires bad faith. Accounting is a set of judgements, and management makes them while being paid on the result. The consequence is that the same underlying performance can be presented across a wide range, and the range is legal.",
    "The defence is to look at multi-year averages, at the relationship between reported earnings and cash, and at the items being excluded as exceptional. Exceptional items that recur every year are not exceptional; they are the business."
  ],
  practical: {
    label: "Example: reading behind the number",
    lead: "Compare what is reported with what arrives in cash, over several years.",
    bullets: [
      "How does reported profit compare to cash generated, over three years?",
      "What is being excluded as one-off, and does it appear in every period?",
      "Has any accounting policy or definition changed, and what did it do to the trend?",
      "Are customer or revenue definitions consistent year to year?",
      "Which single assumption, if changed, would most alter the picture?"
    ]
  },
  application:
    "In private companies the equivalents are adjusted EBITDA, annual recurring revenue definitions and the treatment of capitalised development. Each is a judgement with a range, and the range is where most valuation disputes actually live. Rebuilding the key metric from source data is usually the highest-yield hour in diligence.",
  models: ["intrinsic-value", "incentives", "wysiati", "base-rates"],
  connections: [
    { to: "incentives", type: "reinforces" },
    { to: "tii-intrinsic-value", type: "extends" },
    { to: "tfs-wysiati", type: "related" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "confirmation-bias", type: "related" }
  ],
  quote: null
},

{
  id: "tii-paying-for-growth", num: 10, book_id: "tii", category: "investing",
  title: "The Price of Growth",
  thesis: "Growth is valuable, and a price that assumes it will continue removes the value to you.",
  reading_time: 2,
  explanation: [
    "Graham has no objection to growth companies. His objection is to the arithmetic of paying for growth that has already been extrapolated: once a high rate is in the price, you receive nothing for it happening and lose heavily if it slows.",
    "Two things work against the extrapolation. High growth attracts competition, and large bases are harder to grow than small ones. Both mean the historical rate is a poor guide to the forward one, and the forward one is what has been capitalised.",
    "This is regression to the mean expressed in a price. The higher and more exceptional the recent rate, the more of it is likely to be transient, and the more of it the price is treating as permanent."
  ],
  practical
: {
    label: "Example: what does the price assume?",
    lead: "Work backwards from price to the growth it requires, then judge that requirement.",
    bullets: [
      "What growth rate, for how many years, does this price require?",
      "Has any comparable company sustained that rate for that long?",
      "What happens to the return if growth is two thirds of plan?",
      "Is the recent rate driven by something repeatable or by a one-off?",
      "Am I paying for growth that has already happened?"
    ]
  },
  application:
    "The most common valuation error in growth investing is capitalising a peak year, and the correction is mechanical: normalise to a multi-year trend, state what the entry price requires, and test the return against a materially lower rate. If the deal only works on the peak, the peak is the thesis.",
  models: ["regression", "intrinsic-value", "anchoring", "margin-of-safety"],
  connections: [
    { to: "regression-to-the-mean", type: "reinforces" },
    { to: "tii-margin-of-safety", type: "contrasts" },
    { to: "tii-intrinsic-value", type: "related" },
    { to: "zto-last-mover", type: "related" },
    { to: "tfs-planning-fallacy", type: "related" }
  ],
  quote: null
},

{
  id: "tii-asset-allocation", num: 11, book_id: "tii", category: "investing",
  title: "The Allocation Decision",
  thesis: "How much you hold in each asset matters more than which securities you choose.",
  reading_time: 2,
  explanation: [
    "Graham's practical advice starts with a split between stocks and bonds, never less than a quarter or more than three quarters in either, adjusted only occasionally and by rule. The specific bounds matter less than the principle: the allocation is the primary decision and it is made in advance.",
    "The bounds exist to prevent the two behavioural failures at the extremes. A floor stops you abandoning the asset class at the bottom; a ceiling stops you concentrating into it at the top. Both failures happen at exactly the moment when conviction feels highest.",
    "Security selection gets almost all of the attention and contributes far less to the outcome than the allocation and the discipline of maintaining it."
  ],
  practical: {
    label: "Example: setting the bounds",
    lead: "Fix the range in advance, and let the rule handle the extremes.",
    bullets: [
      "What is my target allocation, and what are the hard bounds either side?",
      "What triggers a rebalance: a date, a threshold, or a judgement?",
      "Which of my exposures are correlated in a way the labels do not reveal?",
      "Am I about to breach a bound because conditions changed or because sentiment did?",
      "How much of my attention goes to selection versus allocation?"
    ]
  },
  application:
    "For a fund the analogues are stage, sector and geography exposure plus reserve policy, and the same logic holds: these decisions dominate the outcome and are usually made implicitly, deal by deal. Setting them explicitly turns a series of individual enthusiasms into a portfolio.",
  models: ["diversification", "decision-quality", "opportunity-cost", "loss-aversion"],
  connections: [
    { to: "tii-diversification", type: "reinforces" },
    { to: "tii-formula-investing", type: "reinforces" },
    { to: "tfs-narrow-framing", type: "reinforces" },
    { to: "opportunity-cost", type: "related" },
    { to: "avoiding-ruin", type: "related" }
  ],
  quote: null
},

{
  id: "tii-market-history", num: 12, book_id: "tii", category: "learning",
  title: "Read the History",
  thesis: "Market history does not tell you what happens next, but it tells you what is possible.",
  reading_time: 2,
  explanation: [
    "Graham opens with a survey of market history for a specific reason: to establish the range of outcomes that have actually occurred. Not to forecast, but to prevent the assumption that the recent range is the possible range.",
    "Every generation of investors learns the limits of the market from the period it happens to live through, and then treats those limits as structural. Anyone whose experience begins after a particular crisis will systematically underestimate that kind of event.",
    "History is also the cheapest available source of base rates. What has happened to companies, sectors and prices in comparable circumstances is written down, and reading it costs far less than discovering it directly."
  ],
  practical: {
    label: "Example: widening the sample",
    lead: "Check your assumptions against a period longer than your own experience.",
    bullets: [
      "What is the worst outcome this asset class has actually produced, and when?",
      "Does my sample include a full cycle, or only the conditions I have worked in?",
      "What happened to companies like this in the last downturn?",
      "Which of my assumptions are true only in the regime I learned in?",
      "What has this market done that everyone present has forgotten?"
    ]
  },
  application:
    "Practically this means keeping the pre-2000, 2008 and 2022 comparables in view when underwriting, particularly on exit multiples and time to liquidity. A model whose downside case is milder than events that have already happened twice is not a downside case.",
  models: ["base-rates", "survivorship", "regression", "probability"],
  connections: [
    { to: "base-rates", type: "reinforces" },
    { to: "availability-bias", type: "contrasts" },
    { to: "learning-from-mistakes", type: "reinforces" },
    { to: "survivorship-bias", type: "related" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
}

);
