/* Financial Shenanigans — Howard Schilit — 12 ideas */
window.DB.ideas.push(

{
  id: "fsh-why-it-happens", num: 1, book_id: "fsh", category: "people",
  title: "Why Earnings Get Manipulated",
  thesis: "Manipulation is rarely a character defect. It is a predictable response to pressure and opportunity.",
  reading_time: 3,
  explanation: [
    "Schilit's starting point is structural. A chief executive whose bonus, options and reputation all key off a quarterly number faces a standing temptation, and accounting gives him wide legitimate discretion over when revenue is recognised and which costs are capitalised. Add a growth story the market has already priced, a covenant that resets on a ratio, and a compensation plan with a cliff, and the pressure arrives from three directions at once.",
    "It almost always begins small and legal. A receivable is left open a few days past quarter end, a reserve is released, an estimate is nudged. Each step borrows from the next period, so the next period starts in deficit and needs a slightly larger step to look flat. That is why frauds discovered late look absurd in hindsight: the final entries are the compounding of years of modest ones nobody chose to reverse.",
    "For a reader this reorders the work. Rather than scanning for dishonesty, you map where the pressure sits and check the accounts most exposed to judgement in exactly that place. A company about to breach a leverage test, or one whose founder is selling into a lock-up expiry, deserves attention on different line items from a company with slack and no near deadline."
  ],
  practical: {
    label: "Example: mapping the pressure",
    lead: "Before reading a single statement, work out who is paid on what, and what happens if the number misses.",
    bullets: [
      "What number does management get paid on, and how close is it to the threshold?",
      "Are there debt covenants tied to a ratio that reporting choices can move?",
      "Is a raise, a sale or a lock-up expiry sitting just after this reporting date?",
      "Who inside the company could object, and do they report to the person under pressure?",
      "Has the firm publicly committed to a target it now looks unlikely to hit?"
    ]
  },
  application:
    "Private companies face the same pressure with fewer restraints: no auditor of the operating metrics, no quarterly filing, and a valuation set by a single negotiation. A founder eight weeks from a term sheet has a strong reason for ARR to look clean, and nobody independent recalculates it. Ask what the round depends on, then rebuild that exact number from contracts and bank statements rather than from the management pack.",
  models: ["incentives", "accounting-quality", "second-order", "feedback-loops"],
  connections: [
    { to: "incentives", type: "reinforces" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "fsh-forensic-checklist", type: "related" },
    { to: "fsh-governance-signals", type: "reinforces" },
    { to: "csup-integrity", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-premature-revenue", num: 2, book_id: "fsh", category: "investing",
  title: "Recording Revenue Too Soon",
  thesis: "Revenue booked before the work is done borrows from next quarter and leaves a receivables trail.",
  reading_time: 3,
  explanation: [
    "The technique recognises revenue where the earnings process is incomplete: shipping goods before the customer ordered them, billing an annual contract as though the service were already delivered, treating a signed agreement with cancellation rights as final, or recording the full value of a multi-year arrangement in the period the ink dried. The cash has not arrived and in some cases the obligation has barely begun.",
    "It works because the judgement about when an obligation is satisfied is genuinely debatable, so an aggressive reading survives review. The trace is arithmetic. Revenue recognised without cash collected accumulates in receivables, so receivables grow faster than revenue and days sales outstanding drifts up quarter after quarter. Unbilled balances move in the opposite direction to what the growth story implies, and deferred revenue stops keeping pace with reported sales.",
    "Because the revenue is pulled forward rather than invented, the pattern is self-limiting and then self-revealing. The pulled quarter looks strong, the following one starts short, and the shortfall is covered by pulling harder. Eventually collections fail to appear, a large receivable is written off, or the policy is quietly restated. The write-off is usually the first item most readers notice, several years after the ratios started moving."
  ],
  practical: {
    label: "Example: checking the receivables trail",
    lead: "Track revenue growth against receivables growth over eight quarters, and read the revenue recognition policy for changes.",
    bullets: [
      "Are receivables growing faster than revenue, and for how many consecutive quarters?",
      "Has days sales outstanding drifted, and is the drift explained by mix or by policy?",
      "Does deferred revenue still grow in line with subscription sales?",
      "What proportion of the quarter's revenue was recognised in its final two weeks?",
      "Do contracts carry cancellation rights, acceptance clauses or contingent payment terms?"
    ]
  },
  application:
    "The private-market form is bookings recorded as revenue. A three-year contract signed in June becomes annual recurring revenue in June, and the pack shows growth the cash never sees. Ask for a bridge from signed bookings to invoiced amounts to cash received, by month, and compare it to the ARR line. Where the three diverge and the gap widens, the ARR definition is doing the work rather than the business.",
  models: ["accounting-quality", "incentives", "intrinsic-value", "wysiati"],
  connections: [
    { to: "fsh-cash-versus-earnings", type: "reinforces" },
    { to: "fsh-bogus-revenue", type: "extends" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "tfs-wysiati", type: "related" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-bogus-revenue", num: 3, book_id: "fsh", category: "investing",
  title: "Bogus Revenue",
  thesis: "Some revenue is not early, it is fictional: money that never represented a sale to a customer.",
  reading_time: 3,
  explanation: [
    "This family is different in kind. Rather than accelerating a real sale, it books amounts that were never sales at all: cash received from a lender or a supplier rebate presented as revenue, investment income folded into the top line, a swap of services with a counterparty where both sides record income and nothing changes hands, or shipments to a related distributor with a side agreement allowing return.",
    "It survives because the cash is real even when the sale is not, so bank reconciliation offers no protection and the aggregate figures look supported. The trace sits in the composition rather than the total. Gross margin behaves oddly for the mix described, a new revenue category appears without an operating explanation, disclosure of related-party dealings expands, or a single distributor becomes a large share of sales while its own receivable ages.",
    "Gross versus net presentation belongs in the same family and is more common than outright invention. An intermediary that records the whole transaction value as its own revenue can report a very large number on a very small economic contribution, and the only visible symptom is a gross margin of a few per cent. Reading the revenue policy note tells you which convention is in use and whether it changed."
  ],
  practical: {
    label: "Example: testing the substance of a sale",
    lead: "For each large revenue stream, ask who paid, what they received, and whether they were independent of the seller.",
    bullets: [
      "Is revenue recorded gross or net, and did that convention change?",
      "Which counterparties are related parties, and what share of revenue do they represent?",
      "Are supplier rebates, settlements or financing receipts sitting inside the revenue line?",
      "Does gross margin make sense for the business model as described?",
      "Has a new revenue category appeared with no matching operational change?"
    ]
  },
  application:
    "Round-trip revenue is a live risk wherever portfolio companies buy from each other, or where a customer is also an investor. Revenue from an investor at above-market pricing is partly funding, not commercial validation. Check the customer list against the cap table and against other holdings, and treat any concentrated account that arrived alongside a financing as unproven until an independent buyer pays the same price.",
  models: ["accounting-quality", "incentives", "confirmation-bias", "intrinsic-value"],
  connections: [
    { to: "fsh-premature-revenue", type: "extends" },
    { to: "fsh-metric-games", type: "related" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "related" },
    { to: "confirmation-bias", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-one-time-gains", num: 4, book_id: "fsh", category: "investing",
  title: "One-Off Gains Dressed as Operations",
  thesis: "A single asset sale can carry a whole quarter, and reporting can make it look recurring.",
  reading_time: 2,
  explanation: [
    "Income can be boosted by events that have nothing to do with trading: selling a subsidiary or a building at a gain, marking an investment up, releasing a reserve set aside in a better year, or recognising a legal settlement. None of these are improper to record. The manipulation is in the placement, when the gain is reported inside operating income or netted against operating expenses so that margins appear to have improved.",
    "It works because the reader is looking at a subtotal rather than at its components, and because a gain netted inside a cost line leaves no visible entry at all. The tell is asymmetry: gains treated as ordinary and losses of similar size labelled exceptional. Reserve releases are the quieter version, since a provision taken in a strong year can be reversed into income later with no cash movement and no separate disclosure.",
    "The practical response is to rebuild operating income yourself from the components you can identify, then compare the rebuilt series to the reported one. Where the two diverge in a particular period, the difference is the item worth understanding. A margin improvement that disappears once gains are stripped out was never an improvement, and the multiple applied to it was applied to a one-off."
  ],
  practical: {
    label: "Example: rebuilding operating income",
    lead: "Strip every identifiable gain, release and settlement out of operating income, then look at what the trend does.",
    bullets: [
      "Which gains sit above the operating line, and would a loss have been placed there?",
      "Did any reserve or provision get released into income this period?",
      "Is the margin improvement still there once disposals and settlements are removed?",
      "Are items labelled exceptional appearing in most years?",
      "Does other income exceed a tenth of reported operating profit?"
    ]
  },
  application:
    "Adjusted EBITDA is where this lives in private markets. The add-back schedule routinely contains items that recur annually: restructuring in three consecutive years, one-off recruitment, a legal matter that keeps returning. Recompute the metric with only genuinely non-repeating items removed, then apply the entry multiple to that figure. The difference between the two EBITDA numbers is often larger than the whole negotiation over price.",
  models: ["accounting-quality", "intrinsic-value", "anchoring", "incentives"],
  connections: [
    { to: "fsh-shifting-expenses", type: "related" },
    { to: "fsh-metric-games", type: "reinforces" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "tii-intrinsic-value", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-shifting-expenses", num: 5, book_id: "fsh", category: "investing",
  title: "Pushing Expenses Into Later Periods",
  thesis: "Costs that should hit today can be parked on the balance sheet and released slowly.",
  reading_time: 3,
  explanation: [
    "The methods all convert an expense into an asset. Costs that would ordinarily be charged as incurred are capitalised and amortised over years, the useful life of existing assets is extended so annual depreciation falls, inventory that will not sell is left at cost rather than written down, or an allowance for doubtful debts is held flat while receivables grow. Reported profit rises with no change in operations.",
    "Capitalisation is legitimate for some costs and the boundary is a matter of judgement, which is precisely why it is useful. The trace shows up as assets growing faster than revenue, capitalised software or development costs rising as a share of total spend, inventory turns slowing, and a depreciation charge falling as a percentage of the asset base. Each of those movements has an innocent explanation available, and each deserves the question.",
    "Deferred costs do not disappear, they queue. An asset capitalised today becomes amortisation in every year that follows, so the technique raises current profit at the cost of future profit and has to keep expanding to hold the line. The reckoning is usually a large impairment described as a change in strategy, which writes off several years of overstatement in a single period nobody compares to the others."
  ],
  practical: {
    label: "Example: watching what gets capitalised",
    lead: "Compare the growth of capitalised costs and other assets against revenue growth, over at least three years.",
    bullets: [
      "What proportion of development or software spend is capitalised, and is it rising?",
      "Has any asset useful life been extended, and what did that do to depreciation?",
      "Are inventory and receivables growing faster than sales?",
      "Is the bad debt allowance flat while the receivables book expands?",
      "Has amortisation of prior capitalised costs started to arrive yet?"
    ]
  },
  application:
    "Capitalised development is the standard version in software companies, and it flatters both profit and operating cash flow at once, since the spend moves into investing outflows. A business capitalising a third of its engineering payroll is reporting a margin that does not exist. Recalculate margins and cash burn with all engineering cost expensed, and check whether the capitalisation policy changed in the year before the raise.",
  models: ["accounting-quality", "second-order", "incentives", "intrinsic-value"],
  connections: [
    { to: "fsh-cash-flow-games", type: "reinforces" },
    { to: "fsh-cash-versus-earnings", type: "related" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "second-order-effects", type: "reinforces" },
    { to: "tos-cash-flow-per-share", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-hiding-liabilities", num: 6, book_id: "fsh", category: "investing",
  title: "Hiding Liabilities",
  thesis: "An obligation left off the balance sheet improves every ratio a lender or buyer checks.",
  reading_time: 2,
  explanation: [
    "Liabilities are understated by failing to record them, by recording them too low, or by moving them somewhere the reader does not look. Warranty and returns provisions are set below experience, environmental and litigation exposures are described in a note rather than measured, obligations are pushed into an entity that is not consolidated, and commitments under long-term supply or lease arrangements are disclosed as future payments rather than recognised as debt.",
    "Every understated liability is also an understated expense, so the technique flatters profit and leverage in the same entry. That double benefit is what makes it attractive when a covenant is close. The trace is mostly in the notes: provisions as a percentage of revenue falling while volumes rise, contingent liabilities described without a number, guarantees given to unconsolidated entities, and operating commitments that dwarf recognised debt.",
    "The reader's defence is to build the obligation side from the notes rather than from the balance sheet total. Add the commitments schedule, the pension shortfall, the guarantees, the earn-outs and the redemption rights, then recompute leverage on that basis. A company that looks comfortably financed on recognised debt and heavily geared on total obligations is the common case, not the exotic one."
  ],
  practical: {
    label: "Example: rebuilding the obligation side",
    lead: "Read the commitments and contingencies notes first, then recompute leverage including everything the company has promised to pay.",
    bullets: [
      "Are warranty, returns or claims provisions falling as a share of revenue?",
      "What contingent liabilities are described in words with no amount attached?",
      "Which entities are unconsolidated, and has the company guaranteed their obligations?",
      "How large are lease and supply commitments relative to recognised debt?",
      "Do earn-outs, redemption rights or deferred consideration sit outside the debt figure?"
    ]
  },
  application:
    "In venture the hidden obligations are usually contractual rather than financial: liquidation preferences stacked across rounds, participating rights, ratchets, unvested option pools not in the fully diluted count, and convertible notes with discounts. Each reduces what ordinary equity receives at any given exit value. Build the waterfall yourself at three exit prices before agreeing a valuation, because the headline number describes the enterprise, not your claim on it.",
  models: ["accounting-quality", "margin-of-safety", "incentives", "inversion"],
  connections: [
    { to: "fsh-acquisition-accounting", type: "related" },
    { to: "fsh-forensic-checklist", type: "reinforces" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tos-leverage", type: "contrasts" }
  ],
  quote: null
},

{
  id: "fsh-cash-flow-games", num: 7, book_id: "fsh", category: "investing",
  title: "Cash Flow Shenanigans",
  thesis: "Operating cash flow can be manipulated too, mostly by moving items between the three sections.",
  reading_time: 3,
  explanation: [
    "Investors who learned to distrust earnings moved to cash flow, and the techniques followed them. Financing inflows are routed into the operating section, as when receivables are sold to a bank and the proceeds are presented as collections. Operating outflows are routed out of it, by capitalising costs so the spend lands in investing, or by paying suppliers with borrowings rather than cash.",
    "Acquisitions provide a second route. Buying a business brings its collections into operating cash flow while the purchase price sits in investing, and paying an acquired company's outstanding payables can be classified below the operating line. The last family is unsustainable rather than misclassified: stretching creditors, factoring receivables, cutting inventory, and deferring maintenance all generate operating cash once and cannot be repeated.",
    "The traces are visible in working capital and in the cash flow statement's own structure. Days payable outstanding rising sharply, a receivables sale programme disclosed in the notes, capital expenditure growing faster than the asset base, and a jump in operating cash flow in the period an acquisition closed. Free cash flow after all capital expenditure and acquisition spend is the harder number to dress up."
  ],
  practical: {
    label: "Example: reading the three sections together",
    lead: "Read all three sections of the cash flow statement together, and ask which line could sit somewhere else.",
    bullets: [
      "Did operating cash flow improve because payables were stretched rather than sales collected?",
      "Is the company selling or factoring receivables, and where do the proceeds appear?",
      "How much of the operating cash improvement arrived with an acquisition?",
      "Is capital expenditure absorbing costs that used to be operating expenses?",
      "What does free cash flow look like after capital expenditure and acquisition spend?"
    ]
  },
  application:
    "Growth-stage packs often present a cash burn figure that excludes capitalised development, deferred payroll, founder loans and unpaid supplier balances. Rebuild net burn from the bank statements alone, month by month, and compare it to the reported figure. Then check the payables ageing: a business funding itself by stretching suppliers has a shorter runway than the model shows, and the correction arrives as an unplanned bridge.",
  models: ["accounting-quality", "second-order", "incentives", "margin-of-safety"],
  connections: [
    { to: "fsh-cash-versus-earnings", type: "extends" },
    { to: "fsh-shifting-expenses", type: "reinforces" },
    { to: "tos-cash-flow-per-share", type: "related" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "tmit-risk-is-loss", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-metric-games", num: 8, book_id: "fsh", category: "investing",
  title: "Key Metric Shenanigans",
  thesis: "When the accounts are constrained, management defines its own metrics and shows you those instead.",
  reading_time: 2,
  explanation: [
    "Non-standard metrics carry no rules, so they can be defined, redefined and retired at will. Companies present a measure that overstates performance: an adjusted profit figure whose add-backs recur, a user count that includes dormant accounts, same-store sales with a store definition that moves, or a bookings number that mixes contract lengths. The metric is usually the one management has chosen to be judged on.",
    "The second family distorts balance sheet measures to hide deterioration: presenting receivables net of a facility, reporting an inventory figure that excludes goods held on consignment, or netting cash against debt to show a comfortable position. The tells are definitional. A metric that changes definition, loses its reconciliation to reported figures, gets renamed, or quietly disappears from the pack after a weak period is telling you what it was for.",
    "Custom metrics are not inherently misleading and some are the best available measure of a business. The requirement is that the definition is written down, held constant, and reconcilable to something audited. Where a company will not provide the reconciliation, the metric should be treated as a claim rather than as evidence, and the valuation should rest on the figures that do reconcile."
  ],
  practical: {
    label: "Example: pinning down a definition",
    lead: "Ask for each headline metric in writing: the exact definition, the calculation, and the audited figure it reconciles to.",
    bullets: [
      "Has the definition of this metric changed in the period being presented?",
      "Which add-backs recur every year, and why are they still called one-off?",
      "Does the metric reconcile to a reported figure, and by how much?",
      "Which metric was in last year's pack and is missing from this one?",
      "Are any balances shown net, hiding a gross exposure underneath?"
    ]
  },
  application:
    "ARR is the metric that does the most work and has the least discipline. Definitions differ on trials, pilots, usage-based revenue, non-renewing contracts, one-off services and customers already in arrears. Ask for the customer-level file, apply your own definition consistently across two years, and see what the growth rate becomes. A company that cannot produce the file at customer level does not know its own ARR either.",
  models: ["accounting-quality", "incentives", "wysiati", "anchoring"],
  connections: [
    { to: "fsh-one-time-gains", type: "reinforces" },
    { to: "fsh-forensic-checklist", type: "related" },
    { to: "tfs-wysiati", type: "reinforces" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-acquisition-accounting", num: 9, book_id: "fsh", category: "investing",
  title: "Acquisition Accounting Games",
  thesis: "A serial acquirer can hide organic decline inside purchase accounting for years at a time.",
  reading_time: 3,
  explanation: [
    "An acquisition resets the accounts, and the reset creates discretion. Purchase price is allocated across identifiable assets, intangibles and goodwill, and the allocation determines future amortisation. Provisions taken at completion for restructuring or bad debts can be released into later income. Assets can be written down at acquisition so that subsequent margins look higher on a lower cost base.",
    "The larger effect is on the growth rate. Acquired revenue is indistinguishable from organic revenue in the consolidated statements, so an acquirer buying two per cent of its revenue each year can report growth while the underlying business shrinks. Continuous deal activity also makes the comparative periods incomparable, which removes the main tool a reader has. Goodwill rising while return on capital falls is the summary trace.",
    "The response is to insist on organic figures and to build them if they are not given. Take revenue, subtract the acquired contribution as disclosed, and look at what remains over several years. Then check whether goodwill has ever been impaired, since an acquirer that has bought thirty businesses and never written one down is applying an optimism to its own history that the market rarely extends to anyone."
  ],
  practical: {
    label: "Example: separating bought growth from earned growth",
    lead: "Strip acquired revenue out of each year, then look at the organic trend and the cash spent to buy it.",
    bullets: [
      "What is organic revenue growth, excluding every acquisition made in the period?",
      "How much of the purchase price was allocated to goodwill rather than identifiable assets?",
      "Were provisions taken at completion later released into operating income?",
      "Has goodwill from earlier deals ever been impaired?",
      "What is return on total invested capital, including the acquisition spend?"
    ]
  },
  application:
    "Roll-ups are common in growth portfolios and the diligence question is whether the platform earns anything without the next deal. Ask for revenue and gross profit by acquired entity, by month, from before completion onwards, and see how many cohorts declined after purchase. Check whether the reported synergies appear in the accounts or only in the plan, and price the business on organic cash generation.",
  models: ["accounting-quality", "capital-allocation", "incentives", "intrinsic-value"],
  connections: [
    { to: "fsh-cash-flow-games", type: "reinforces" },
    { to: "fsh-one-time-gains", type: "related" },
    { to: "tos-disciplined-acquisitions", type: "contrasts" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "tos-capital-allocation", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-cash-versus-earnings", num: 10, book_id: "fsh", category: "learning",
  title: "The Gap Between Cash and Earnings",
  thesis: "Nearly every manipulation shows up as reported profit rising while operating cash flow does not.",
  reading_time: 3,
  explanation: [
    "This is the single most useful test in the book, and it works because most techniques affect accrual accounting without affecting the bank. Revenue recognised early, expenses capitalised, provisions released and liabilities unrecorded all raise profit while cash stays where it was. Over a long enough period the two series must converge, since a company can only distribute cash. So a persistent divergence is a forecast that one of them will move.",
    "Run it as a ratio over three to five years rather than as a single-period comparison, because timing differences are normal and growth genuinely consumes working capital. A fast-growing business funding receivables and inventory will convert poorly for good reasons. What matters is the direction: conversion that deteriorates steadily while margins improve is the combination that has no innocent explanation available for long.",
    "The test does not tell you which technique is in use, only that something is worth finding. Its value is as a screen that costs a few minutes and points you at a company where the detailed work will pay. Once the divergence is established, the accrual that grew fastest usually names the method: receivables for early revenue, intangibles for deferred costs, payables for borrowed cash flow."
  ],
  practical: {
    label: "Example: running the conversion test",
    lead: "Plot net income and operating cash flow side by side for five years, then explain any widening gap.",
    bullets: [
      "Is cumulative operating cash flow tracking cumulative net income over five years?",
      "Which working capital or asset account absorbed the difference?",
      "Is the gap explained by growth, and does the explanation still hold at this scale?",
      "Are reported margins improving in the same years that cash conversion deteriorates?",
      "What would have to be true next year for the two series to converge?"
    ]
  },
  application:
    "With no audited cash flow statement, run the same test against the bank. Take gross receipts into the account each month and compare them to invoiced revenue and to reported ARR, over two years. Then compare net burn to the loss in the management accounts. Three series that will not reconcile are the finding, and the reconciliation exercise is usually the most informative hour of a financial diligence.",
  models: ["accounting-quality", "intrinsic-value", "base-rates", "inversion"],
  connections: [
    { to: "fsh-premature-revenue", type: "reinforces" },
    { to: "fsh-cash-flow-games", type: "extends" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "tos-cash-flow-per-share", type: "reinforces" },
    { to: "inversion", type: "related" }
  ],
  quote: null
},

{
  id: "fsh-governance-signals", num: 11, book_id: "fsh", category: "people",
  title: "Auditor, Board and Turnover Signals",
  thesis: "The people signals often move before the numbers do, and they are cheaper to read.",
  reading_time: 2,
  explanation: [
    "Manipulation requires participation, and people who will not participate tend to leave. A chief financial officer departing without explanation, a second one leaving within eighteen months, an auditor resigning mid-engagement, an audit committee chair stepping down, a change of auditor to a smaller firm: each is a public event with a date, and the pattern is more informative than any single instance.",
    "Alongside the departures sit structural conditions that make manipulation easier: a dominant founder with no independent counterweight, a board of long-standing associates, related-party transactions with entities the chief executive controls, an audit fee small relative to the consulting fee paid to the same firm, and a compensation committee whose targets keep being reset. None of these prove anything and all of them raise the prior.",
    "These signals are useful precisely because they arrive early and require no accounting skill to notice. The right use is to change what you check rather than to reach a conclusion: after an unexplained finance departure, go back over the accounts that person signed and look for the judgement they were being asked to make. The resignation is a pointer to a location, not a verdict."
  ],
  practical: {
    label: "Example: reading the departures",
    lead: "Build a timeline of finance, audit and board changes, and place it alongside the reporting periods.",
    bullets: [
      "How many finance chiefs has this company had in five years, and why did each leave?",
      "Has the auditor changed, resigned, or reported a control weakness?",
      "Which directors are genuinely independent of the founder, and what do they own?",
      "Are there related-party transactions with entities management controls?",
      "Did any departure fall shortly before a restatement or a policy change?"
    ]
  },
  application:
    "Private companies have thinner governance and the same signals, sharper. Two finance leads leaving during a raise, a bookkeeper rather than a qualified controller, no audit at all, or a first audit that produced a modified opinion each justify slowing down. Speak to the departed finance lead where the reference check allows, ask the auditor what the management letter said, and note who declined to be a reference.",
  models: ["incentives", "authority-bias", "scuttlebutt", "base-rates"],
  connections: [
    { to: "fsh-why-it-happens", type: "reinforces" },
    { to: "fsh-forensic-checklist", type: "related" },
    { to: "csup-integrity", type: "reinforces" },
    { to: "authority-misinfluence", type: "related" },
    { to: "csup-scuttlebutt", type: "extends" }
  ],
  quote: null
},

{
  id: "fsh-forensic-checklist", num: 12, book_id: "fsh", category: "learning",
  title: "A Forensic Reading Checklist",
  thesis: "The techniques are finite, so a fixed reading order catches most of them in an hour.",
  reading_time: 2,
  explanation: [
    "Schilit's material is organised as families rather than as a list of cases, which is what makes it usable. The families are stable across decades because they follow from the structure of accrual accounting, so a reader who knows the seven earnings techniques, the four cash flow techniques and the two metric techniques has a finite search space rather than an open one.",
    "A workable order starts at the back. Read the accounting policy notes and any changes to them, then the related-party and commitments notes, then the cash flow statement, then the ratio series, and only then the narrative at the front. Reading in that sequence means the story arrives after the evidence, which is the whole point, because the front section is written to frame everything that follows it.",
    "The checklist finds questions, not fraud. Most of what it surfaces has an ordinary explanation, and the discipline is asking rather than concluding, since a reader who treats every drifting ratio as evidence of dishonesty will be wrong far more often than right. Its real value is the reverse: a company where nothing on the list moves is one you can hold with less monitoring."
  ],
  practical: {
    label: "Example: an hour with the statements",
    lead: "Work through the same sequence on every company, so that what is missing is as visible as what is present.",
    bullets: [
      "Did any accounting policy, estimate or metric definition change this period?",
      "Do receivables, inventory and intangibles grow faster than revenue?",
      "Does cumulative operating cash flow track cumulative net income?",
      "What sits in the related-party, commitments and contingencies notes?",
      "Has the auditor, the finance chief or the audit committee chair changed?"
    ]
  },
  application:
    "Turn the same sequence into a standing information request. Ask for the customer-level revenue file, the bank statements, the payables ageing, the capitalisation policy, the add-back schedule and the auditor's management letter, before the first financial conversation. What arrives late, arrives in a different format each time, or does not arrive at all is a finding in itself, and it is available well before the numbers are analysed.",
  models: ["accounting-quality", "inversion", "confirmation-bias", "decision-quality"],
  connections: [
    { to: "fsh-cash-versus-earnings", type: "reinforces" },
    { to: "fsh-governance-signals", type: "related" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "confirmation-bias", type: "contrasts" },
    { to: "tfs-premortem", type: "related" }
  ],
  quote: null
}

);
