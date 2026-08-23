/* Capital Returns — Marathon Asset Management, edited by Edward Chancellor — 9 ideas */
window.DB.ideas.push(

{
  id: "cr-the-capital-cycle", num: 1, book_id: "cr", category: "investing",
  title: "The Capital Cycle",
  thesis: "High returns attract capital, capital builds supply, supply destroys returns, and withdrawal restores them.",
  reading_time: 3,
  explanation: [
    "The loop has four stages and each one causes the next. Returns above the cost of capital in some industry draw money in, from incumbents expanding, new entrants arriving and investors funding both. The new capacity arrives together, usually several years after the decision to build it, and by the time it is operating the returns that justified it have gone. Capital then leaves, capacity closes, and returns recover for whoever remains.",
    "What makes the pattern usable is the delay between capital being committed and capacity appearing. A refinery, a mine, a fabrication plant or a fleet takes years to build, so the investment decision is made on conditions that no longer hold when the output arrives. Everyone in the industry sees the same high prices and responds at the same time, which is why the supply response overshoots rather than settling neatly at the level demand would support.",
    "The prescription is uncomfortable because it points at whatever looks worst. Depressed industries with closing plants, cancelled projects and no coverage are where the supply side is being repaired, and repair is what future returns are made of. The mirror image is a boom with record spending and unanimous enthusiasm, which is the phase in which the seeds of poor returns are being planted at the price of an optimist."
  ],
  practical: {
    label: "Example: locating the phase",
    lead: "Before valuing the company, work out which stage of its industry's capital cycle you are buying into.",
    bullets: [
      "Is industry capacity growing, flat or shrinking over the next three years?",
      "Are returns in this industry above or below the cost of capital now?",
      "How long is the lag between a spending decision here and new supply?",
      "Who is entering, who is leaving, and what are both assuming?",
      "Am I buying a peak in returns and calling it quality?"
    ]
  },
  application:
    "Venture runs the same loop faster. A category posts a breakout result, funds crowd in, twenty companies get funded to do one thing, customer acquisition costs rise as they bid against each other, gross margins fall and the next round does not arrive. The survivors then compete against two rivals instead of twenty and earn well. Underwriting the phase means asking how much capital has entered this category in the last eighteen months, not only how good the company is.",
  models: ["capital-cycle", "return-on-capital", "feedback-loops", "market-cycles"],
  connections: [
    { to: "tmit-cycles", type: "reinforces" },
    { to: "cr-supply-side", type: "extends" },
    { to: "cr-shrinking-capacity", type: "extends" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "pcs-industry-evolution", type: "related" }
  ],
  quote: null
},

{
  id: "cr-supply-side", num: 2, book_id: "cr", category: "decision-making",
  title: "Work the Supply Side",
  thesis: "Supply is more forecastable than demand, and almost all analytical effort goes to the wrong side.",
  reading_time: 2,
  explanation: [
    "Supply can be counted. Plants under construction are visible, permits are published, order books for ships and aircraft are known years ahead, and the number of competitors funded in a category is a matter of record. Demand depends on the aggregate behaviour of millions of people and on macroeconomic conditions nobody forecasts reliably. One of these is a research task and the other is a guess dressed as a model.",
    "Sell-side research is organised around demand because that is what clients ask about and what generates the next revision. Estimates are produced company by company, quarter by quarter, on a horizon shorter than the time it takes new capacity to arrive. The industry's aggregate capital spending, which is the variable that will set everyone's returns, is nobody's line item, so the most consequential number in the analysis is the one least often produced."
  ],
  practical: {
    label: "Example: counting capacity",
    lead: "Build the industry supply picture before you build the company model, and hold it at industry rather than company level.",
    bullets: [
      "How much new capacity is already committed and when does it arrive?",
      "What is aggregate industry capital spending relative to depreciation?",
      "Which competitors have raised money recently, and what will they spend it on?",
      "Has any capacity actually closed, or only been announced as idle?",
      "If demand grew as expected, would returns still fall on supply alone?"
    ]
  },
  application:
    "The private-market version is a category capacity count. List every funded competitor, the capital each has raised and what it will buy, then ask what the category looks like when all of it is deployed. Most of that is public. It takes an afternoon and it answers a bigger question than another hour on the target's pipeline conversion, because it tells you what everyone's pricing will look like in two years.",
  models: ["capital-cycle", "second-order", "base-rates", "incentives"],
  connections: [
    { to: "cr-the-capital-cycle", type: "extends" },
    { to: "cr-capital-influx-signals", type: "reinforces" },
    { to: "tmit-second-level", type: "related" },
    { to: "second-order-effects", type: "reinforces" },
    { to: "pcs-industry-structure", type: "related" }
  ],
  quote: null
},

{
  id: "cr-capital-influx-signals", num: 3, book_id: "cr", category: "investing",
  title: "Signs of a Capital Influx",
  thesis: "A flood of capital announces itself in issuance, spending, new entrants and analyst enthusiasm.",
  reading_time: 3,
  explanation: [
    "The markers are consistent enough to check as a list. Equity and debt issuance rises, often into a sector that recently had no need of either. Capital spending runs well above depreciation, so the asset base is growing rather than being maintained. New entrants appear, frequently with a story about why this time the economics are different. Merger activity picks up and the prices paid rise with it.",
    "Alongside the hard numbers sit the softer markers, which arrive earlier. Analyst coverage expands and ratings improve. The industry acquires a narrative about structural growth. Accounting becomes more accommodating: useful lives are extended, costs are capitalised, new metrics appear that exclude something. None of these is proof on its own, and the reason to keep the list is that each one is easy to explain away individually while the cluster is not.",
    "The list is a warning rather than a timing device. Capital influx and falling returns are separated by the construction period, which means an industry can look excellent for several years while the case against it is already built. That gap is what makes the signal usable to a patient holder and useless to anyone judged on the next twelve months, and it is also why the signal reads as pessimism at the time."
  ],
  practical: {
    label: "Example: running the checklist",
    lead: "Score the industry against the standard markers of capital arriving, and require several to be absent before paying up.",
    bullets: [
      "What has this sector raised in equity and debt over three years?",
      "Is capital spending above or below depreciation, and by how much?",
      "How many credible new entrants have appeared since the last downturn?",
      "Has coverage and sentiment improved faster than the underlying returns?",
      "Which accounting definitions have been loosened, and what does that flatter?"
    ]
  },
  application:
    "In venture the same markers show up as fund formation, round sizes, seed valuations and the number of new companies pitching an identical wedge. Add conference programming and job postings, which move early. When a category shows all of them at once, the right adjustment is usually to the exit multiple and the competitive assumption rather than to the growth forecast, because that is where the effect of everyone else's capital will land.",
  models: ["capital-cycle", "checklist", "accounting-quality", "social-proof"],
  connections: [
    { to: "cr-the-capital-cycle", type: "extends" },
    { to: "cr-banks-and-cyclicals", type: "related" },
    { to: "fr-warning-signs", type: "reinforces" },
    { to: "tmit-pendulum", type: "related" },
    { to: "fsh-metric-games", type: "related" }
  ],
  quote: null
},

{
  id: "cr-shrinking-capacity", num: 4, book_id: "cr", category: "strategy",
  title: "Shrinking Capacity Is Bullish",
  thesis: "Industries where capacity is closing and rivals are consolidating are where returns are being rebuilt.",
  reading_time: 3,
  explanation: [
    "When an industry's supply side contracts, the effect on returns is mechanical rather than a matter of management skill. Fewer competitors means less pressure to discount, and closed capacity cannot reopen quickly. Consolidation compresses the same demand onto a smaller base, and the survivors gain pricing power they did not have to earn. Marathon's interest in dull industries with departing competitors follows from this rather than from any preference for cheapness.",
    "Not every consolidation delivers. The ones that do involve capacity leaving the industry permanently rather than changing hands, a small number of remaining players, and barriers that stop the vacated space being refilled. A merger that combines two loss-making operations without closing anything has moved the ownership and left the problem. The useful question is whether physical or licensed capacity has actually gone.",
    "The reason the position is available is that the numbers are still bad while the structure is improving. Reported earnings reflect the old competitive conditions, forecasts extrapolate them, and the industry carries the reputation of the period that caused the exits. Buying then requires accepting a poor recent record as evidence of a better forward one, which is the opposite of how most screens and most committees work."
  ],
  practical: {
    label: "Example: testing a consolidation",
    lead: "Check whether capacity has genuinely left the industry, and whether anything stops it coming back.",
    bullets: [
      "How much capacity has closed permanently, as opposed to changing owner?",
      "How many competitors remain, and are any of them irrational?",
      "What would it cost a new entrant to rebuild what has gone?",
      "Are the remaining players investing again, and how soon?",
      "Is pricing behaviour already improving, ahead of reported margins?"
    ]
  },
  application:
    "Down rounds, shutdowns and acqui-hires in a category are the signal, not the reason to avoid it. When funding for a category dries up and half the funded companies disappear, the survivor's acquisition costs fall, churn improves and pricing firms, usually before the metrics show it. That is often the best entry point available in private markets, and it arrives at exactly the moment the category has no advocates left.",
  models: ["capital-cycle", "barriers-to-entry", "five-forces", "return-on-capital"],
  connections: [
    { to: "cr-the-capital-cycle", type: "extends" },
    { to: "cr-capital-influx-signals", type: "contrasts" },
    { to: "pcs-rivalry", type: "reinforces" },
    { to: "pcs-entry-barriers", type: "reinforces" },
    { to: "tmit-contrarianism", type: "related" }
  ],
  quote: null
},

{
  id: "cr-allocation-record", num: 5, book_id: "cr", category: "leadership",
  title: "The Allocation Record",
  thesis: "How management has spent shareholders' money is the most useful single thing to assess.",
  reading_time: 2,
  explanation: [
    "Over a decade, the returns a company produces are largely determined by where its cash went. Operating skill is real and it is bounded. A chief executive who reinvests heavily at low returns will destroy more value than the same person can create by running the existing assets well. This makes the allocation history the highest-yield thing to examine, and it has the advantage of being written down.",
    "What the record reveals is behaviour through a cycle. Did they expand when everyone was expanding and prices were high, or when assets were being sold cheaply by people in trouble? Did they buy back stock at the top and issue at the bottom, which is the common pattern, or the reverse? A management team that has once refused to grow when growth was fashionable has told you something no strategy presentation can."
  ],
  practical: {
    label: "Example: reading the record",
    lead: "Reconstruct where the last ten years of cash went, and what conditions each decision was made in.",
    bullets: [
      "Where did cash go: reinvestment, acquisitions, debt repayment, buybacks, dividends?",
      "What return has the reinvested capital actually earned since?",
      "Did they expand into strength or into a peak in prices?",
      "Were shares issued cheaply and bought back expensively, or the reverse?",
      "Has anything been shrunk or closed, and how quickly?"
    ]
  },
  application:
    "Founders have no allocation record, so the assessment shifts to how the last raise was spent and on what reasoning. Did headcount grow ahead of revenue because capital was available? Was a price rise or a segment exit considered? The pattern to look for is a founder who has declined to spend money that was offered, because that is the only evidence available that they will behave well when the next round is easy.",
  models: ["capital-allocation", "return-on-capital", "cost-of-capital", "capital-cycle"],
  connections: [
    { to: "tos-capital-allocation", type: "reinforces" },
    { to: "cr-over-investment", type: "extends" },
    { to: "cr-shrinking-capacity", type: "related" },
    { to: "ewb-institutional-imperative", type: "reinforces" },
    { to: "fr-management-as-stewards", type: "related" }
  ],
  quote: null
},

{
  id: "cr-over-investment", num: 6, book_id: "cr", category: "people",
  title: "Why Managers Over-invest",
  thesis: "Internal incentives reward growth in assets, so over-investment is the normal outcome rather than an error.",
  reading_time: 3,
  explanation: [
    "Over-investment is usually rational for the people making the decision. Pay, status and career progression inside large companies track the size of what is managed rather than the return on it. Bonus formulas built on revenue, earnings growth or market share are satisfied by expansion funded at any cost of capital. Boards approve because the alternative, returning cash and admitting the opportunity set is thin, reads as an absence of ambition.",
    "The pressure is also lateral. When competitors are expanding, standing still means losing share, and the manager who declines to build is judged against the ones who did for as long as the boom lasts. Investment banks, consultants and equipment suppliers all earn from the decision to expand and nothing from the decision to wait. Every party in the room is paid for the same answer.",
    "Recognising this changes what counts as evidence of a good management team. Not the quality of the growth plan, which everyone has, but the presence of a structure that makes restraint survivable: incentives tied to return on capital, ownership held for long periods, and a board that has previously blocked something. Where those are absent, assume the company will expand into the peak regardless of what its executives say about discipline."
  ],
  practical: {
    label: "Example: reading the incentive",
    lead: "Find out what the decision-makers are paid on, then predict the capital decision from that.",
    bullets: [
      "Is variable pay tied to size and growth, or to return on capital?",
      "Over what period is performance measured, and against whom?",
      "Who in the room earns nothing if the expansion does not happen?",
      "Has restraint ever been rewarded here, or only punished?",
      "Would this project be approved if returns were the only criterion?"
    ]
  },
  application:
    "Fund economics point the same way. Management fees scale with committed capital, so raising more is rewarded before it is judged, and deployment pace is easier to defend than restraint. The equivalent at portfolio level is a founder told to raise as much as the market offers. Both are cases where the person deciding is paid on the size of the decision, and both need a structural answer rather than a resolution to be sensible.",
  models: ["incentives", "capital-allocation", "social-proof", "second-order"],
  connections: [
    { to: "incentives", type: "extends" },
    { to: "cr-allocation-record", type: "reinforces" },
    { to: "cr-the-capital-cycle", type: "related" },
    { to: "ewb-institutional-imperative", type: "reinforces" },
    { to: "tic-management-incentives", type: "related" }
  ],
  quote: null
},

{
  id: "cr-long-horizon", num: 7, book_id: "cr", category: "performance",
  title: "The Holding Period as Edge",
  thesis: "A cycle takes years to turn, so a long horizon is a structural advantage over quarterly measurement.",
  reading_time: 2,
  explanation: [
    "The capital cycle plays out over five to ten years and most investors are assessed over one. That mismatch is the source of the opportunity rather than an inconvenience around it. Buying an industry while capacity is closing means accepting a period of poor reported results and probable underperformance, which almost nobody measured on twelve months can do. The holding period is therefore not a preference but the mechanism by which the insight gets paid.",
    "Holding for years is an organisational property, not a virtue of individuals. It requires clients who understand the approach, a reporting rhythm that does not force explanation of every quarter, and low turnover as a stated policy rather than an outcome. Low turnover also removes cost, which compounds. Firms that claim a long horizon while reporting monthly relative performance to nervous holders will not have one when it is tested."
  ],
  practical: {
    label: "Example: earning the horizon",
    lead: "Check that your capital, your reporting and your incentives all permit the holding period your strategy assumes.",
    bullets: [
      "What is the shortest period over which I am actually judged?",
      "Does my capital base allow three years of underperformance?",
      "Is low turnover a written policy or an accident of inertia?",
      "What would force me to sell something I still believe in?",
      "Am I explaining quarters to people who cannot use the answer?"
    ]
  },
  application:
    "Closed-end fund structures give private investors this advantage by default, and it is routinely given back. Marking quarterly against public comparables, raising the next fund on interim numbers and reporting to committees on an annual cycle all reintroduce the pressure the structure was built to remove. The practical defence is to set deployment pace and reserve policy at the start of the fund and to report progress against the original thesis rather than the current mark.",
  models: ["market-cycles", "compounding", "costs-compound", "capital-cycle"],
  connections: [
    { to: "csup-long-horizon", type: "reinforces" },
    { to: "cr-the-capital-cycle", type: "reinforces" },
    { to: "cr-growth-through-cycle", type: "related" },
    { to: "mos-institutional-limits", type: "related" },
    { to: "long-term-thinking", type: "extends" }
  ],
  quote: null
},

{
  id: "cr-growth-through-cycle", num: 8, book_id: "cr", category: "investing",
  title: "Growth Through the Cycle",
  thesis: "Growth investing works when the supply side is understood, and fails when growth alone is the thesis.",
  reading_time: 3,
  explanation: [
    "Capital cycle analysis is often read as a value discipline applied to depressed cyclicals, which is only half of it. The same framework is what makes a growth holding defensible: a business earning high returns is only worth a high price if something stops capital arriving to compete those returns away. Growth and the capital cycle are the same question asked from either end.",
    "That puts the weight on the barrier rather than the growth rate. A company growing quickly in an industry where new supply is cheap to add has a forecast, not a franchise. One growing in a category where capacity requires a licence, a network or thirty years of accumulated process can compound for a long time, and the growth is worth capitalising because it will not be shared out.",
    "The failure mode is buying growth at the point when its visibility is highest, which is also when the capital response is largest. High reported growth in an open industry is an advertisement, read by every potential entrant and every lender. The correction is to hold the growth forecast and change the return assumption: ask what margins look like once the capital currently being raised has been spent."
  ],
  practical: {
    label: "Example: testing a growth holding",
    lead: "Separate the growth forecast from the return forecast, and ask what protects the second one.",
    bullets: [
      "What stops a well funded competitor adding supply in this market?",
      "Is the high return coming from position or from a shortage?",
      "How much of the price is the growth rate and how much the margin?",
      "What do margins look like after committed industry capacity arrives?",
      "Would I hold this if growth halved but returns held?"
    ]
  },
  application:
    "This is the discipline that separates a durable growth investment from a funding-cycle beneficiary. Fast growth in a category with twenty funded competitors and low technical barriers is measuring the capital that has entered, not the position that has been built. The question worth spending diligence on is which specific thing a rival with equal money cannot replicate, because that is what decides whether today's unit economics survive the category's own boom.",
  models: ["capital-cycle", "durability", "barriers-to-entry", "implied-expectations"],
  connections: [
    { to: "cr-supply-side", type: "extends" },
    { to: "cr-shrinking-capacity", type: "contrasts" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "fr-growth-that-destroys", type: "reinforces" },
    { to: "tpl-late-stage-drift", type: "related" }
  ],
  quote: null
},

{
  id: "cr-banks-and-cyclicals", num: 9, book_id: "cr", category: "investing",
  title: "Where the Accounting Hides the Cycle",
  thesis: "In banks and heavy cyclicals, reported profit peaks precisely when the underlying risk is greatest.",
  reading_time: 3,
  explanation: [
    "Lending shows the pattern in its purest form because the cost of the product is unknown when it is sold. A loan written at the top of a credit cycle books its revenue immediately and its losses several years later, so a bank growing its book fastest at the worst moment reports rising earnings while doing the damage. Provisions, set from recent experience, are lowest when recent experience has been benign.",
    "Heavy industry hides the cycle differently. Depreciation charged on assets bought cheaply understates the cost of replacing them, so mid-cycle earnings look better than they are. Capitalised interest and construction in progress keep spending off the income statement while it is happening. Return on capital calculated on a historic asset base flatters an old plant and penalises a new one, which is the opposite of what an investor needs to know.",
    "The defence in both cases is to work in units the accounting cannot smooth. Loan book growth relative to the system, tangible equity, and the ratio of provisions to loans across a full cycle for a bank. Physical capacity, spending against depreciation, and replacement cost for an industrial. These are cruder measures than reported earnings and they have the advantage of moving with the cycle rather than against it."
  ],
  practical: {
    label: "Example: cycle-adjusting the numbers",
    lead: "Restate the accounts in physical or balance sheet terms before comparing this year's earnings to any other.",
    bullets: [
      "Is this business booking revenue now for costs that arrive later?",
      "How does the growth rate compare to the rest of the industry?",
      "Is depreciation close to the actual cost of replacing the assets?",
      "What do provisions or reserves look like across a full cycle?",
      "Which of these earnings would survive a normal recession?"
    ]
  },
  application:
    "Private growth companies have their own version, where the cost of revenue arrives after the revenue is counted. Annual recurring revenue booked on annual contracts says nothing about renewal, and payback periods calculated on a cohort too young to churn assume the answer. Growing fastest into a funding boom produces the best metrics and the weakest cohorts at the same time. Cohort-level data is the equivalent of working in physical units.",
  models: ["accounting-quality", "capital-cycle", "owner-earnings", "return-on-capital"],
  connections: [
    { to: "cr-capital-influx-signals", type: "extends" },
    { to: "cr-the-capital-cycle", type: "reinforces" },
    { to: "fsh-metric-games", type: "reinforces" },
    { to: "fr-roe-decomposed", type: "related" },
    { to: "tii-earnings-quality", type: "related" }
  ],
  quote: null
}

);
