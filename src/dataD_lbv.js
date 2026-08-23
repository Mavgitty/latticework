/* The Little Book of Valuation — Aswath Damodaran — 8 ideas */
window.DB.ideas.push(

{
  id: "lbv-four-inputs", num: 1, book_id: "lbv", category: "investing",
  title: "The Four Inputs",
  thesis: "Every intrinsic valuation reduces to cash flows, growth, risk, and how long the advantage lasts.",
  reading_time: 3,
  explanation: [
    "Strip any discounted cash flow model of its spreadsheet and four questions remain. How much cash does the business generate now. How fast will that cash grow. How risky is it. And for how long can the business earn more than its cost of capital. Every other line, every tax rate and working capital schedule and depreciation assumption, exists only to answer one of those four with more precision.",
    "Which input decides the answer changes with the age of the company. For a mature business most of the value sits in cash it already produces, so the argument is about margins and the spending needed to hold position. For a young one almost all of it sits in growth and in the length of the period where returns exceed the cost of capital, which is exactly where confidence is lowest.",
    "The consequence is a preference for models small enough that the four inputs stay visible and separately arguable. A two hundred row spreadsheet does not contain more information than a ten line one. It contains the same four judgements, distributed so widely that no reviewer can locate them. Detail is not accuracy, and past a point it functions as camouflage for the assumption doing all the work."
  ],
  practical: {
    label: "Example: locating the four inputs",
    lead: "Before checking any formula, write the four inputs on a single page and hold the argument there instead.",
    bullets: [
      "What cash does this business actually generate today, before any growth is assumed?",
      "What growth rate is assumed, and what has to happen for it?",
      "What discount rate is being used, and what does it say about risk?",
      "How many years of excess returns does the model grant, and on what grounds?",
      "Can I move each of the four separately and watch the value respond?"
    ]
  },
  application:
    "Venture models rarely fail on arithmetic. They fail because the four inputs are never stated: a revenue ramp stands in for growth, a target exit multiple stands in for both risk and duration, and current cash generation is negative and therefore ignored. Forcing each input into the open turns a plan into a valuation, and usually reveals that the whole answer rests on a duration assumption nobody wrote down.",
  models: ["intrinsic-value", "free-cash-flow", "cost-of-capital", "durability"],
  connections: [
    { to: "lbv-terminal-value", type: "extends" },
    { to: "lbv-risk-in-the-rate", type: "extends" },
    { to: "tii-intrinsic-value", type: "extends" },
    { to: "ewb-owner-earnings", type: "related" },
    { to: "fr-valuation-tools", type: "related" }
  ],
  quote: null
},

{
  id: "lbv-story-and-numbers", num: 2, book_id: "lbv", category: "decision-making",
  title: "Story and Numbers",
  thesis: "A valuation is a story and a set of numbers, and each must discipline the other.",
  reading_time: 3,
  explanation: [
    "Two kinds of valuation fail in opposite directions. One is a spreadsheet whose inputs arrived from a previous spreadsheet, defensible line by line and connected to no view of the business at all. The other is a narrative about a category and a founder that never resolves into a revenue figure, a margin or a share of a defined market. Each input is a sentence in the story, and each sentence should appear somewhere as a number.",
    "The constraint bites hardest where the two contradict. A story about winning on price cannot carry the margins of a premium brand. A story about capturing a large share of a market cannot imply revenue larger than that market. Running the story through three filters, asking whether it is possible, then plausible, then probable, eliminates most of what a narrative on its own would happily allow through.",
    "Bias enters through the story rather than the model, which is why review so rarely catches it. Once you want the deal the story adjusts, and each input moves a little in the favourable direction while remaining individually defensible. The test is whether you would build this same story from this same evidence if you were selling the position rather than buying it."
  ],
  practical: {
    label: "Example: testing the story",
    lead: "State the story in plain sentences, then check that every sentence has a number and every number a sentence.",
    bullets: [
      "What is the story, said in five sentences without adjectives?",
      "Which number in the model does each of those sentences correspond to?",
      "Is the story possible, given market size and the margins this industry earns?",
      "Which numbers would have to change if the story were half right?",
      "Would I write this story if I held the other side of the trade?"
    ]
  },
  application:
    "Investment memos usually contain both halves and never join them: pages of narrative followed by a model built from a target ownership and an exit multiple. The connective work is short and unpopular, because it exposes the terminal year revenue the story implies and invites comparison with the largest company in the category. Doing that before the committee does it is the cheaper order in which to find out.",
  models: ["intrinsic-value", "narrative-fallacy", "confirmation-bias", "implied-expectations"],
  connections: [
    { to: "lbv-four-inputs", type: "reinforces" },
    { to: "lbv-young-companies", type: "related" },
    { to: "tbs-narrative-fallacy", type: "contrasts" },
    { to: "tfs-planning-fallacy", type: "related" },
    { to: "tib-motivated-reasoning", type: "reinforces" }
  ],
  quote: null
},

{
  id: "lbv-growth-costs-capital", num: 3, book_id: "lbv", category: "investing",
  title: "Growth Has to Be Paid For",
  thesis: "Growth adds value only when the return on the capital it consumes exceeds the cost of that capital.",
  reading_time: 3,
  explanation: [
    "Growth is an output of reinvestment rather than a free input. Revenue does not rise without something being bought first: capacity, inventory, salespeople, engineers, occasionally another company. In a valuation that spending sits between the earnings line and the cash line, which is how a company can grow quickly, report rising profit, and hand its owners nothing. What is created is only what remains once the growth has been funded.",
    "The arithmetic is unforgiving. A growth rate is the product of how much a company puts back in and what it earns on that money, so two businesses growing at identical rates can be worth very different amounts. Where the return on new capital sits above the cost of capital, growth adds value. Where it sits below, faster growth simply destroys value faster, and more funding accelerates the destruction.",
    "The exception is what makes a few businesses extraordinary. Where an additional unit of revenue requires almost no additional capital, every point of growth converts almost entirely into value, and the ceiling on what the company can be worth is set by the size of the market rather than by its balance sheet. That claim is also the most frequently asserted in pitches and the least often checked."
  ],
  practical: {
    label: "Example: pricing a point of growth",
    lead: "Work out what each point of growth costs in capital, and what the company earns on it.",
    bullets: [
      "How much capital went in over five years, and what growth came out?",
      "What is the return on newly invested capital, as distinct from the average?",
      "Does that return sit above or below this company's cost of capital?",
      "Which parts of growth need capital, and which genuinely do not?",
      "If growth halved, would free cash flow rise or fall?"
    ]
  },
  application:
    "This is the test that separates two companies showing identical growth rates in a pitch. Ask what was spent to buy the last year of revenue: sales headcount, paid acquisition, discounting, working capital in anything holding inventory. A company purchasing growth at a return below its cost of capital is not an early version of a compounder, and the next round makes the problem larger rather than smaller.",
  models: ["return-on-capital", "cost-of-capital", "free-cash-flow", "compounding"],
  connections: [
    { to: "lbv-four-inputs", type: "extends" },
    { to: "lbv-terminal-value", type: "related" },
    { to: "tii-paying-for-growth", type: "contrasts" },
    { to: "fr-growth-that-destroys", type: "reinforces" },
    { to: "ewb-franchise-vs-commodity", type: "related" }
  ],
  quote: null
},

{
  id: "lbv-risk-in-the-rate", num: 4, book_id: "lbv", category: "investing",
  title: "Risk as a Discount Rate",
  thesis: "The discount rate carries risk you can diversify away, and almost none of the risk that ruins you.",
  reading_time: 3,
  explanation: [
    "A discount rate is a price for waiting and for uncertainty. It is built from what money earns risk-free, plus a premium for exposure to the forces that move all assets at once, adjusted for how the business is financed. Its job is narrow: convert cash arriving later into cash worth something now, at a rate reflecting what the same money could earn elsewhere at comparable risk.",
    "What it does not carry is the risk that this particular business fails outright. Fraud, a key person leaving, a regulator withdrawing a licence, running out of cash before the plan arrives: none of that is priced by raising a percentage. Those belong in the cash flows, as scenarios with probabilities attached, or as an explicit chance that the value goes to zero and the position returns nothing.",
    "This makes the habit of lifting the rate whenever uneasy a blunt instrument. Adding four points punishes cash arriving in year ten far more than cash arriving next year, which is rarely the shape of the actual worry. It also leaves no record of what was being priced, so the adjustment cannot be argued with, revisited, or removed once the concern behind it has been resolved."
  ],
  practical: {
    label: "Example: putting risk where it belongs",
    lead: "Separate risk that a rate can price from risk that needs a scenario, then handle each in its own place.",
    bullets: [
      "What exactly am I worried about, stated as an event rather than a feeling?",
      "Would that event show up in the cash flows or in the rate?",
      "What probability of outright failure am I assuming, and is it written down?",
      "Does my rate reflect this business or the last one I valued?",
      "Have I priced the same risk twice, once in the rate and once in the case?"
    ]
  },
  application:
    "Venture practice tends to invert this. A single high hurdle rate applied to every company at a stage prices the possibility of total loss that portfolio construction already handles, while the risks that actually decide the outcome sit unmodelled. The cleaner form is a probability-weighted set of outcomes that includes zero, discounted at a rate reflecting the money's genuine alternative, which makes the failure assumption explicit and arguable.",
  models: ["cost-of-capital", "risk-not-volatility", "probability", "diversification"],
  connections: [
    { to: "lbv-four-inputs", type: "extends" },
    { to: "lbv-young-companies", type: "related" },
    { to: "tmit-risk-is-loss", type: "reinforces" },
    { to: "fbr-probability-vs-expectation", type: "related" },
    { to: "tii-diversification", type: "related" }
  ],
  quote: null
},

{
  id: "lbv-terminal-value", num: 5, book_id: "lbv", category: "investing",
  title: "Terminal Value Is Most of the Answer",
  thesis: "Most of a growth company's value sits beyond the forecast, in three lines nobody argues about.",
  reading_time: 3,
  explanation: [
    "In a discounted cash flow of a fast-growing company, the great majority of the value usually sits in the terminal value, and the explicit forecast years contribute a minority of it. That is an awkward result, because the forecast years are where the work goes: the cohort analysis, the margin build, the hiring plan. Three assumptions written at the bottom of the model outweigh all of it combined.",
    "Three things sit inside that figure. A perpetual growth rate, which cannot exceed the long-run growth of the economy the company operates in, because nothing outgrows its host forever. A return on capital, which competition drags towards the cost of capital over time. And reinvestment consistent with both. Models routinely combine growth above nominal economic growth with permanent excess returns and no reinvestment, which is three impossibilities in one line.",
    "Using an exit multiple instead does not avoid the assumption, it conceals it. A multiple applied to a year ten figure imports today's pricing of today's companies into a world nobody has described, and it usually implies a perpetual growth rate the modeller would never have written down voluntarily. Converting the multiple back into the growth and return it implies is a two minute check that changes conclusions."
  ],
  practical: {
    label: "Example: opening up the terminal year",
    lead: "Work out what share of value sits past the forecast, then test the assumptions holding it up.",
    bullets: [
      "What percentage of total value comes from beyond the forecast period?",
      "What perpetual growth rate am I using, against nominal growth in that economy?",
      "Does the terminal year assume excess returns continuing forever?",
      "Is reinvestment in the terminal year consistent with the growth I assumed?",
      "If I used an exit multiple, what growth and return does it imply?"
    ]
  },
  application:
    "For a growth deal underwritten to an exit multiple, this is the entire valuation in one cell. The discipline is to state the year of exit, the revenue and margin at that point, and the companies trading on the assumed multiple today, then ask whether the buyers paying it were buying a business that looked like this one. If not, the multiple is a wish rather than a comparable.",
  models: ["terminal-value", "durability", "return-on-capital", "regression"],
  connections: [
    { to: "lbv-four-inputs", type: "extends" },
    { to: "lbv-growth-costs-capital", type: "reinforces" },
    { to: "zto-last-mover", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "s7p-power", type: "related" }
  ],
  quote: null
},

{
  id: "lbv-reading-a-multiple", num: 6, book_id: "lbv", category: "investing",
  title: "Four Questions for Any Multiple",
  thesis: "A multiple is a valuation with the assumptions removed, so ask what has been left out.",
  reading_time: 3,
  explanation: [
    "Most valuation in practice is relative: a multiple drawn from a set of comparable companies. That is not a lesser method, it is a compressed intrinsic valuation, and the compression is where the errors hide. The first check is definitional. An equity value belongs over an equity figure and an enterprise value over an operating one, and mixing them produces a number that cannot be compared with anything, including itself.",
    "The second check is descriptive. What does this multiple look like across the sector: its median, its spread, how skewed it is, and how many companies were quietly dropped because the denominator was negative. The third is analytical. Every multiple is driven by growth, risk and return on capital, so a company at twice the sector median is expensive only once you have checked whether it earns twice the return.",
    "The fourth concerns application: which companies form the peer set, and who selected them. This is the largest unpoliced freedom in valuation, because a peer set can be assembled to support almost any conclusion and nothing in the arithmetic afterwards reveals the selection. Choosing the set before looking at the answer, and stating what was excluded and why, removes most of the abuse available here."
  ],
  practical: {
    label: "Example: interrogating a comparable set",
    lead: "Take any multiple presented to you and run the four questions before accepting the comparison.",
    bullets: [
      "Are the numerator and denominator consistent, both equity or both enterprise?",
      "What is the distribution of this multiple across the sector, not just the median?",
      "What drives this multiple, and does this company have more or less of it?",
      "Who chose the peer set, and which obvious companies are missing from it?",
      "Would the conclusion survive a peer set chosen by someone arguing the other side?"
    ]
  },
  application:
    "Private comparable sets are assembled from a handful of transactions with unobservable terms, which makes the fourth question the decisive one. Preference structure, ratchets and secondary components mean two deals at the same headline multiple can be quite different prices. The honest version states the entry multiple, the terms attached to it, and the three or four transactions actually doing the work, rather than a sector average.",
  models: ["implied-expectations", "base-rates", "return-on-capital", "anchoring"],
  connections: [
    { to: "lbv-four-inputs", type: "contrasts" },
    { to: "lbv-price-and-value", type: "related" },
    { to: "mos-valuation-methods", type: "related" },
    { to: "base-rates", type: "related" },
    { to: "ouww-pe-and-growth", type: "reinforces" }
  ],
  quote: null
},

{
  id: "lbv-young-companies", num: 7, book_id: "lbv", category: "investing",
  title: "Valuing a Company With No History",
  thesis: "No history and no comparables make valuation harder, not impossible, and not optional.",
  reading_time: 3,
  explanation: [
    "Three of the usual footholds are missing. There is no operating history to extrapolate, the current earnings figure is negative and so cannot be grown, and the obvious comparable companies are other young firms priced by the same uncertainty. Survival itself is in question, which a discounted cash flow quietly assumes away. None of that makes the exercise impossible, and none of it justifies replacing it with a negotiation.",
    "The method runs forwards instead of backwards. Start with the market the company will eventually sell into and take a share of it you can defend. Apply the operating margin that mature companies in that industry actually earn rather than the one the plan promises. Work out the capital required to get there. Then apply an explicit probability that the company never survives to reach any of it.",
    "Every one of those numbers is uncertain and the output is a range rather than a figure. That is the correct result, and more useful than it looks, because the width tells you where the disagreement lives. If value swings on the eventual market size, the argument is about the market. If it swings on survival, the argument is about funding, and diligence should follow the swing."
  ],
  practical: {
    label: "Example: valuing forwards",
    lead: "Build the value from the eventual market back towards today, and price the chance of survival as its own number.",
    bullets: [
      "What market is this company selling into at maturity, defined narrowly?",
      "What share is defensible, and who holds that share now?",
      "What margin do mature companies in this industry actually earn?",
      "What capital is needed between here and there, and from whom?",
      "What probability of failure am I applying, and does it match the base rate?"
    ]
  },
  application:
    "This is the venture case, and skipping the exercise is a choice rather than a necessity. A price set by round dynamics and ownership targets can still be tested against the maturity picture it requires, and the test costs an afternoon. Where the implied market share exceeds anything an incumbent has ever held, or the implied margin exceeds the industry's best operator, the entry price is the risk being taken.",
  models: ["intrinsic-value", "base-rates", "probability", "terminal-value"],
  connections: [
    { to: "lbv-story-and-numbers", type: "reinforces" },
    { to: "lbv-risk-in-the-rate", type: "extends" },
    { to: "zto-last-mover", type: "related" },
    { to: "tfs-planning-fallacy", type: "contrasts" },
    { to: "base-rates", type: "reinforces" }
  ],
  quote: null
},

{
  id: "lbv-price-and-value", num: 8, book_id: "lbv", category: "investing",
  title: "The Value Game and the Pricing Game",
  thesis: "Price and value are set by different forces, and only some things close the gap between them.",
  reading_time: 3,
  explanation: [
    "Two different games run on the same asset. In the value game the drivers are cash flows, growth, risk and duration. In the pricing game the drivers are demand and supply, mood, momentum and the most recent piece of news, and the skills that win it are not valuation skills. Confusing the two produces the investor who buys on a discounted cash flow and sells on sentiment, losing at both.",
    "Nothing closes the gap on its own. Something has to act: an acquirer, a change of control, capital returned to owners, a disclosure that ends the argument, or an investor able to hold long enough for the cash to accumulate and speak for itself. A gap with no mechanism attached to it and no patience behind it is an observation about the world rather than an investment in it.",
    "So the discipline is to name which game the return depends on. If it comes from the cash the business eventually produces, monitor the business. If it comes from the next buyer paying more, monitor the buyers, their appetite and their funding, and accept that being right about value while wrong about mood is a perfectly ordinary way to lose money over a period that matters."
  ],
  practical: {
    label: "Example: naming the game",
    lead: "Decide whether this return comes from the asset or from the next buyer, then watch the right thing.",
    bullets: [
      "Is my return coming from cash generated or from a higher price later?",
      "What specific mechanism converts my view of value into a realised return?",
      "Who is the eventual buyer, and what will they be paying for?",
      "How long can I wait if nothing acts on the gap?",
      "Am I using value arguments to justify what is really a pricing bet?"
    ]
  },
  application:
    "In private markets the two games are blended and rarely separated. Value comes from a company that eventually produces cash, while interim marks and the next round come entirely from pricing, and both feed the same reported return. The distinction matters most when the pricing game closes: a company whose plan assumes an available next round is exposed to the mood of buyers rather than to its own performance.",
  models: ["mr-market", "intrinsic-value", "market-cycles", "second-level-thinking"],
  connections: [
    { to: "lbv-reading-a-multiple", type: "related" },
    { to: "lbv-four-inputs", type: "contrasts" },
    { to: "tmit-price-is-everything", type: "reinforces" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "mos-catalysts", type: "related" }
  ],
  quote: null
}

);
