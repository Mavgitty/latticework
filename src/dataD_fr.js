/* The Five Rules for Successful Stock Investing — Pat Dorsey — 8 ideas */
window.DB.ideas.push(

{
  id: "fr-five-rules", num: 1, book_id: "fr", category: "decision-making",
  title: "The Five Rules as a Sequence",
  thesis: "Do the homework, find a moat, demand a discount, hold long, know when to sell.",
  reading_time: 2,
  explanation: [
    "The five rules are an ordered filter rather than a list of virtues held simultaneously. Do your homework, find businesses with a durable competitive advantage, insist on a margin of safety, hold for the long haul, and know when to sell. Each stage disposes of candidates the previous one admitted, and the order carries information: valuation work on a business with no moat is precise arithmetic applied to an unknown.",
    "Each rule answers a different question. Homework establishes whether you are in a position to hold a view at all. The moat test establishes whether the view has a shelf life. Price establishes whether being right is worth anything. The holding period is the mechanism by which a moat is actually converted into a return. The sell rule exists to stop that holding period turning into inertia.",
    "What makes this survive as an operating discipline is that it is short enough to apply every time and specific enough to fail loudly. Skipping a stage is visible afterwards in the post mortem. In practice most of the damage comes not from ignoring the framework but from completing four of the five, usually the four that are enjoyable, and treating the result as a decision."
  ],
  practical: {
    label: "Example: running the filter in order",
    lead: "Apply the rules as gates in sequence, and record which gate a rejected idea failed at.",
    bullets: [
      "Do I understand how this business makes money, in one paragraph, unaided?",
      "Which moat does it have, and how long should it hold?",
      "What discount to my own value estimate am I getting?",
      "What is my intended holding period, and can I actually hold it?",
      "Which of the five did I skip because it was the tedious one?"
    ]
  },
  application:
    "The gate order translates well to a private process: understanding first, defensibility second, price third, hold and exit last. The benefit shows in where an idea dies. A firm rejecting most deals on price has a pipeline problem, while a firm rejecting most on defensibility has a sourcing thesis worth revisiting. Recording the failing gate turns a series of individual passes into information about the strategy.",
  models: ["checklist", "circle-of-competence", "margin-of-safety", "durability"],
  connections: [
    { to: "fr-when-to-sell", type: "extends" },
    { to: "fr-valuation-tools", type: "related" },
    { to: "lbbw-four-sources", type: "reinforces" },
    { to: "csup-fifteen-points", type: "related" },
    { to: "tii-margin-of-safety", type: "reinforces" }
  ],
  quote: null
},

{
  id: "fr-three-statements", num: 2, book_id: "fr", category: "investing",
  title: "Read the Three Statements Together",
  thesis: "Any one statement can be managed. Read together, the three constrain each other.",
  reading_time: 3,
  explanation: [
    "The three statements contain different amounts of discretion. The income statement is the most managed, because it turns on when revenue is recognised and which costs are capitalised. The balance sheet records what has accumulated from every previous decision. The cash flow statement is the hardest to dress. That is why the relationships between the three carry more information than any single line in any one of them.",
    "The productive comparisons are specific. Profit rising while cash from operations falls. Revenue growing more slowly than receivables or inventory. Retained earnings that never turn into equity growth. Capital expenditure sitting persistently below depreciation, which says the asset base is being run down to support the reported margin. Each of these is a pair of numbers from two statements that should move together and are not.",
    "The habit that makes it work is mechanical. Put five years side by side, calculate the cross-statement ratios in the same order every time, and read direction rather than level. An absolute ratio needs an industry to interpret it. A ratio that has moved consistently one way for four years needs an explanation instead, and the explanation is usually more informative than the ratio ever was."
  ],
  practical: {
    label: "Example: reading across, not down",
    lead: "Lay five years of all three statements together and check the pairs that should move in step.",
    bullets: [
      "How has operating cash flow tracked reported profit over five years?",
      "Are receivables and inventory growing faster or slower than sales?",
      "Is capital expenditure above or below depreciation, and for how long?",
      "Where has the equity growth gone, if earnings were retained?",
      "Which cross-statement pair has diverged most, and what explains it?"
    ]
  },
  application:
    "Private companies present a management pack rather than statements, and the pack is usually built outwards from the income statement. Asking for the cash flow statement and the balance sheet at the same monthly granularity is a small request that frequently changes the picture, because working capital and capitalised development are where the gap between reported and economic performance is normally held.",
  models: ["accounting-quality", "free-cash-flow", "owner-earnings", "checklist"],
  connections: [
    { to: "fr-warning-signs", type: "extends" },
    { to: "fr-roe-decomposed", type: "related" },
    { to: "fsh-cash-versus-earnings", type: "reinforces" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "csup-margins", type: "related" }
  ],
  quote: null
},

{
  id: "fr-warning-signs", num: 3, book_id: "fr", category: "investing",
  title: "Warning Signs in the Accounts",
  thesis: "A short list of recurring signals separates ordinary mess from something worth walking away from.",
  reading_time: 3,
  explanation: [
    "Dorsey's list is short and checkable. Cash flow falling while earnings rise. Serial acquisitions that make organic growth impossible to isolate. Receivables or inventory growing faster than sales. One-time charges appearing in most years. Changes to depreciation schedules, revenue recognition or the definition of a reported metric. Rising pension or other non-operating income doing work that the operating business is not doing.",
    "A second group concerns who is watching. A change of auditor, a departing finance chief, related-party transactions, and a widening gap between statutory results and the adjusted figure management prefers to discuss. None of these establishes anything alone. Each has an innocent explanation available, and in isolation the innocent explanation is usually the correct one, which is what makes the group easy to wave away.",
    "The list works as triage rather than verdict. Three signs together move a company from the reading pile to the work pile, and the realistic finding is not fraud but a reported number sitting at the optimistic end of a legitimate range. That matters because the valuation multiple is applied to that number, so an optimistic presentation compounds into an overpayment without anyone having lied."
  ],
  practical: {
    label: "Example: counting the signs",
    lead: "Score the flags mechanically, then let the count decide how much additional work the company earns.",
    bullets: [
      "How many of the standard warning signs are present, and how many recur?",
      "Have any accounting policies or metric definitions changed in the period?",
      "Do the one-time charges appear in more than half the years?",
      "Has the auditor, the finance chief or the reporting format changed recently?",
      "How wide is the gap between statutory results and the preferred figure?"
    ]
  },
  application:
    "The private-market versions are adjusted earnings bridges, recurring revenue definitions, capitalised development and revenue recognised across multi-year contracts. Each addback is an argument, and the count of arguments is itself the signal. A bridge carrying fifteen adjustments is telling you where the diligence hours belong, and rebuilding the headline metric from raw invoices is usually cheaper than negotiating the definition afterwards.",
  models: ["accounting-quality", "incentives", "checklist", "owner-earnings"],
  connections: [
    { to: "fr-three-statements", type: "extends" },
    { to: "fr-management-as-stewards", type: "related" },
    { to: "fsh-forensic-checklist", type: "reinforces" },
    { to: "fsh-metric-games", type: "related" },
    { to: "tii-earnings-quality", type: "reinforces" }
  ],
  quote: null
},

{
  id: "fr-roe-decomposed", num: 4, book_id: "fr", category: "investing",
  title: "Return on Equity, Taken Apart",
  thesis: "The same return on equity can mean margin, efficiency or borrowing, and only the parts inform.",
  reading_time: 2,
  explanation: [
    "Return on equity is three things multiplied together: net margin, asset turnover and financial leverage. Left whole, it makes a high-margin franchise and a thinly capitalised lender look identical. Taken apart, the same figure resolves into completely different businesses carrying completely different risks, and the resolution takes about a minute per company. It is the cheapest analytical step in the book.",
    "The components have different persistence. Margin-driven returns come from pricing power and tend to be the most durable, because they usually rest on something a customer cannot easily replace. Turnover-driven returns come from operating discipline, which is harder to hold and also harder to copy quickly. Returns driven by borrowing are available to anyone with access to credit, and they reverse when that access does.",
    "The measure has known distortions as well. Buybacks shrink equity and raise the ratio without improving the business. Acquisitions load the denominator with goodwill and depress it. Old depreciated assets flatter it. That is why return on invested capital, or return on assets for a lender, is the better basis for comparing across companies, with the decomposition reserved for understanding any single one."
  ],
  practical: {
    label: "Example: taking the ratio apart",
    lead: "Split every return on equity into its three components before comparing two companies on the headline.",
    bullets: [
      "How much of this return comes from margin, turnover and borrowing respectively?",
      "Would the return survive if the balance sheet were financed conservatively?",
      "Has the mix between the three components shifted over five years?",
      "Is equity shrinking because of buybacks rather than the business improving?",
      "What does return on invested capital say that return on equity does not?"
    ]
  },
  application:
    "Growth-stage companies rarely have meaningful equity returns, so the transferable part is the decomposition habit rather than the ratio. Gross margin, capital intensity and how much of the growth is funded by customers rather than investors are the same three questions in a different form. Capital intensity is the one worth isolating early, because it determines how much of the next round is optional.",
  models: ["return-on-capital", "accounting-quality", "cost-of-capital", "durability"],
  connections: [
    { to: "fr-growth-that-destroys", type: "reinforces" },
    { to: "fr-three-statements", type: "related" },
    { to: "lbbw-moat-in-the-numbers", type: "extends" },
    { to: "csup-margins", type: "reinforces" },
    { to: "tos-cash-flow-per-share", type: "related" }
  ],
  quote: null
},

{
  id: "fr-growth-that-destroys", num: 5, book_id: "fr", category: "investing",
  title: "Growth That Destroys Value",
  thesis: "Growth adds value only when the capital it consumes earns more than that capital costs.",
  reading_time: 2,
  explanation: [
    "Growth is a multiplier applied to the spread between the return on new capital and the cost of that capital. Where the spread is positive, faster growth compounds value. Where it is negative, faster growth destroys value faster, and the company growing quickest is the one that reaches insolvency first. Growth on its own carries no sign, which is why a growth rate is not a quality claim.",
    "The cases are recognisable once looked for. A roll-up paying full prices for businesses with no shared advantage. Capacity added to a commodity industry at the top of a cycle. Revenue bought with discounts that never revert, or with acquisition costs a customer's lifetime never repays. In each, the top line does exactly what was promised while the economics get worse in every year the plan succeeds.",
    "The valuation consequence is that growth rates are not comparable across businesses. Twenty per cent growth behind a barrier deserves a higher multiple than forty per cent where entry is free, because the second is converting capital into a position competitors will take. A multiple is a claim about the spread persisting rather than about the rate, and it is usually quoted as though it were the reverse."
  ],
  practical: {
    label: "Example: pricing the spread",
    lead: "Estimate the return on the next dollar invested and compare it with what that dollar costs.",
    bullets: [
      "What return has incremental capital earned over the last three years?",
      "Is that above or below a defensible cost of capital?",
      "Is revenue growth being bought with price, or won at price?",
      "Would slowing growth improve or worsen the value of this business?",
      "Does the multiple I am paying assume the spread persists, and for how long?"
    ]
  },
  application:
    "This is the sharpest available question for a growth round. Take the use of proceeds, work out the return the new capital must earn to justify the round's price, and compare it with what the previous tranche actually earned. Where incremental returns have been falling while headline growth held, the growth is being purchased, and the next round will have to purchase more of it again.",
  models: ["return-on-capital", "cost-of-capital", "compounding", "capital-allocation"],
  connections: [
    { to: "fr-roe-decomposed", type: "reinforces" },
    { to: "fr-valuation-tools", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "lbbw-moat-trend", type: "related" },
    { to: "zto-last-mover", type: "related" }
  ],
  quote: null
},

{
  id: "fr-valuation-tools", num: 6, book_id: "fr", category: "investing",
  title: "When Each Valuation Tool Lies",
  thesis: "Every valuation tool has a specific situation where it is confidently, systematically wrong.",
  reading_time: 3,
  explanation: [
    "Every multiple has a situation in which it is confidently wrong. Price to earnings fails at cyclical peaks and troughs, on loss-making companies, and wherever earnings are heavily adjusted. Price to sales is silent on whether a sale is profitable, which is the entire question in a low-margin business. Price to book is informative for a bank and close to meaningless where the assets are people.",
    "Cash-based measures trade one problem for another. A free cash flow yield is honest about what an owner receives, but it penalises a company genuinely investing ahead of demand and flatters one that has stopped. A discounted cash flow is the most complete tool and the most sensitive: the terminal assumption usually carries most of the answer, so the model transmits that assumption rather than testing it.",
    "The working practice is to run several and treat the disagreement as the output. When an earnings multiple and a cash flow model diverge widely, the divergence names the assumption in dispute, which is more useful than either number. A single method producing a confident answer is a sign that one set of assumptions has been adopted without ever having been made to compete."
  ],
  practical: {
    label: "Example: making the methods argue",
    lead: "Value the business three ways, then investigate the largest gap rather than averaging the results.",
    bullets: [
      "Which method is least misleading given this business model and cycle position?",
      "How much of the discounted value sits beyond the forecast period?",
      "What does the current price require to be true, stated as a rate?",
      "Where do two methods disagree most, and which assumption causes it?",
      "Am I averaging methods to avoid choosing between their assumptions?"
    ]
  },
  application:
    "Private rounds are usually priced on a forward revenue multiple, the method carrying the least information. Running the implied-expectations version alongside costs an hour. At this entry price and a plausible exit multiple, what revenue and margin does the company need in year five, and has any comparable achieved it. The answer is often a number nobody in the room would have proposed out loud.",
  models: ["intrinsic-value", "terminal-value", "implied-expectations", "free-cash-flow"],
  connections: [
    { to: "fr-growth-that-destroys", type: "related" },
    { to: "fr-five-rules", type: "extends" },
    { to: "tii-intrinsic-value", type: "reinforces" },
    { to: "tmit-price-is-everything", type: "reinforces" },
    { to: "fbr-monte-carlo", type: "related" }
  ],
  quote: null
},

{
  id: "fr-management-as-stewards", num: 7, book_id: "fr", category: "leadership",
  title: "Management as Stewards of Capital",
  thesis: "Judge managers on what they do with the cash, not on how they present the business.",
  reading_time: 2,
  explanation: [
    "The questions Dorsey aims at management are almost all about cash. Where has it gone over the last five years, in what proportions between reinvestment, acquisition, debt repayment and distributions, and what did each of those choices earn. Then how pay is structured, and whether shares have been repurchased at low prices or at high ones, which is a test almost nobody passes by accident.",
    "Disclosure behaviour is the second body of evidence and it is free to collect. Whether bad news is reported early and plainly. Whether previous forecasts are revisited when they proved wrong, or quietly replaced. Whether the metrics presented stay the same from year to year. A metric that changes in the year it stops working is a decision about the message rather than about the measurement.",
    "The boundary matters, because good management is not itself a barrier. Stewardship counts most where there is substantial cash and real discretion over where it goes, which is where the difference between a competent allocator and a poor one compounds. In a business with a strong position and no reinvestment options, the main thing to assess is the capacity to do damage."
  ],
  practical: {
    label: "Example: following the cash",
    lead: "Reconstruct five years of capital allocation from the statements, then compare it with what was said.",
    bullets: [
      "Where did the cash go, in proportions, over the last five years?",
      "What return did the largest single allocation decision actually earn?",
      "Were shares repurchased when the price was low or when it was high?",
      "Is incentive pay tied to returns on capital or to size?",
      "Has any reported metric been redefined in the year it deteriorated?"
    ]
  },
  application:
    "In venture the allocation record is short, so the evidence comes from smaller decisions: how the last round was spent against what was said at the time, hiring pace relative to revenue, and what got cut when the plan missed. The most informative single behaviour is how a founder reports a bad quarter, because it predicts the quality of information available for every decision after it.",
  models: ["capital-allocation", "incentives", "accounting-quality", "opportunity-cost"],
  connections: [
    { to: "fr-warning-signs", type: "related" },
    { to: "fr-when-to-sell", type: "related" },
    { to: "lbbw-not-moats", type: "contrasts" },
    { to: "tos-capital-allocation", type: "reinforces" },
    { to: "csup-integrity", type: "reinforces" }
  ],
  quote: null
},

{
  id: "fr-when-to-sell", num: 8, book_id: "fr", category: "decision-making",
  title: "Deciding to Sell",
  thesis: "Sell for one of a few stated reasons, decided before the position starts to hurt.",
  reading_time: 2,
  explanation: [
    "Dorsey allows a short list of reasons. The original analysis was wrong. The business has changed materially, for better or worse. The price has moved far beyond any defensible estimate of value. Or the capital has a clearly better use somewhere else. The price having fallen is not on the list, and neither is the price having risen by some arbitrary proportion since purchase.",
    "What makes the decision hard is that the two loudest facts are irrelevant. The purchase price, which the business has never known about, and the research already invested, which is spent whatever happens next. The reframing that removes both is whether you would establish this position today, at today's price, in this size, with the information you now hold rather than the information you had.",
    "The way to make it operable is to write the reasons at entry. A sell decision then becomes a comparison against a statement made calmly, rather than a fresh judgement formed while the position is moving. Recording what would prove the thesis wrong is the part most often skipped, and it is the part that separates selling on evidence from capitulating on discomfort."
  ],
  practical: {
    label: "Example: writing the exit at entry",
    lead: "State at purchase what would make you sell, then test any later sale against that statement.",
    bullets: [
      "Which of the four legitimate reasons applies right now?",
      "Would I buy this today, at this price, in this size?",
      "Has the business changed, or only its price and my comfort?",
      "What did I write at entry that would prove the thesis wrong?",
      "Is the better use of this capital identified, or merely assumed?"
    ]
  },
  application:
    "Illiquidity removes the sell decision and replaces it with follow-on and secondary decisions, which take the same form. A reserve allocated to a company whose thesis has broken is the same error as holding a loser, committed with fresh capital, and the entry note is the check against it. The equivalent of the price test is a secondary bid above what the forward case can support.",
  models: ["opportunity-cost", "endowment", "decision-quality", "checklist"],
  connections: [
    { to: "fr-five-rules", type: "extends" },
    { to: "fr-management-as-stewards", type: "related" },
    { to: "csup-when-to-sell", type: "reinforces" },
    { to: "tii-chief-problem", type: "reinforces" },
    { to: "tfs-endowment", type: "related" }
  ],
  quote: null
}

);
