/* Accounting for Value — Stephen Penman — 8 ideas */
window.DB.ideas.push(

{
  id: "afv-anchor-on-the-balance-sheet", num: 1, book_id: "afv", category: "investing",
  title: "Anchor on What You Know",
  thesis: "Start from the book value the accounting gives you, then add value only where evidence supports it.",
  reading_time: 3,
  explanation: [
    "Penman's method begins with the balance sheet because it is the one number in a valuation that has been audited, recorded and constrained by rules. Book value is not intrinsic value, and Penman never claims it is. It is a starting position established by evidence rather than by forecast, and it has the property that every subsequent step away from it can be named, justified and argued about separately.",
    "The alternative is to build value from a forecast of cash flows, which starts from nothing solid and puts speculation into every line. A discounted cash flow model has no anchor: change the growth rate in year six and the answer moves by half, with no accounting fact anywhere in the calculation to resist the change. The forecast is the model rather than an addition to it.",
    "What follows is a rule about bookkeeping in your own head. Keep the anchor and the speculation in separate columns, so that at any moment you can say how much of your valuation rests on recorded performance and how much on a view about the future. If the second column carries most of the value, that is worth knowing before you commit, not afterwards."
  ],
  practical: {
    label: "Example: separating fact from forecast",
    lead: "Write the valuation in two columns, one for what the accounting records and one for what you are assuming.",
    bullets: [
      "What is the audited book value of equity, and what is in it?",
      "How much of my valuation sits above book value, as a percentage?",
      "Which specific assumption produces most of that excess?",
      "Would the valuation still clear my hurdle on the anchor alone?",
      "Am I treating a forecast as though it were a recorded fact?"
    ]
  },
  application:
    "Early-stage companies have almost no anchor, which is the honest finding rather than a reason to abandon the method. In growth-stage deals there is usually a real one: recognised revenue, gross margin actually earned, and a book of contracted customers. Building the entry case from those figures first, and adding the expansion story as a separate and labelled layer, shows immediately how much of the price is a bet on the layer.",
  models: ["intrinsic-value", "accounting-quality", "anchoring", "margin-of-safety"],
  connections: [
    { to: "afv-residual-earnings", type: "extends" },
    { to: "afv-value-and-growth", type: "related" },
    { to: "tii-intrinsic-value", type: "reinforces" },
    { to: "sa-asset-values", type: "reinforces" },
    { to: "anchoring", type: "contrasts" }
  ],
  quote: null
},

{
  id: "afv-residual-earnings", num: 2, book_id: "afv", category: "investing",
  title: "Residual Earnings",
  thesis: "Value equals book value plus the earnings a business makes above the charge for its capital.",
  reading_time: 3,
  explanation: [
    "Residual earnings are what remains after charging the business for the equity it uses: profit minus book value at the start of the period multiplied by the required return. If a company earns ten per cent on equity while the required return is ten per cent, residual earnings are zero, and the business is worth its book value no matter how large the profit figure looks.",
    "This makes the calculation a bridge rather than a forecast from scratch. Intrinsic value is book value plus the present value of future residual earnings, so the accounting already supplies the base and the only thing left to estimate is the excess. Competition works in the estimator's favour here, because excess returns decay, and a series that decays to zero is far easier to bound than a growth rate.",
    "The construction has a property that makes it robust to accounting choice. If a conservative rule lowers book value today, it raises later earnings by the same amount, and the two effects offset inside the calculation. That is why the method tolerates the judgement embedded in the statements: an aggressive write-up flatters the anchor and penalises the residual, and the sum is unmoved."
  ],
  practical: {
    label: "Example: charging for the capital",
    lead: "Take reported profit, subtract a fair charge for the equity employed, and look at what is actually left.",
    bullets: [
      "What return on equity has this business earned over the last five years?",
      "What required return am I charging it, and can I defend that number?",
      "Are residual earnings positive at all, or is book value the answer?",
      "How many years of excess return am I assuming, and why that many?",
      "Does my assumed decay reflect the competition this business actually faces?"
    ]
  },
  application:
    "Venture rarely has positive residual earnings at entry, so the useful version is forward-looking: at what scale, and in what year, does this business first earn above its cost of capital? A plan that never answers that question is a growth plan rather than a value plan. Asking it also disciplines the capital consumed on the way, because every additional round raises the charge the eventual returns have to clear.",
  models: ["intrinsic-value", "return-on-capital", "cost-of-capital", "regression"],
  connections: [
    { to: "afv-anchor-on-the-balance-sheet", type: "extends" },
    { to: "afv-price-to-book", type: "extends" },
    { to: "fr-roe-decomposed", type: "reinforces" },
    { to: "tii-intrinsic-value", type: "related" },
    { to: "regression-to-the-mean", type: "reinforces" }
  ],
  quote: null
},

{
  id: "afv-price-to-book", num: 3, book_id: "afv", category: "investing",
  title: "Price to Book Is a Forecast",
  thesis: "A price to book ratio states what the market expects the business to earn above its capital charge.",
  reading_time: 3,
  explanation: [
    "Once value is book value plus discounted residual earnings, the ratio of price to book stops being a rule of thumb and becomes an equation. A company trading at three times book is being priced for future residual earnings worth twice its recorded equity. That is a claim about profitability and duration, and it can be written down, examined and disagreed with.",
    "This dissolves the habit of treating a low multiple as cheap and a high one as expensive. A business at one times book is correctly priced if it will earn exactly its cost of capital forever, and a business at five times book is correctly priced if the excess return is large and durable enough. Neither number tells you anything until the implied earnings are compared with the business.",
    "The ratio also reports on the accounting itself. Book value excludes most internally built intangibles, so a business that spends heavily on research or brand carries a small denominator and a high ratio for reasons that have nothing to do with expectations. Knowing which part of a high multiple is missing assets and which part is anticipated performance is most of the work."
  ],
  practical: {
    label: "Example: reading the multiple as a claim",
    lead: "Convert the multiple into the residual earnings it implies, then test that stream against what the business does.",
    bullets: [
      "What excess return over how many years does this multiple require?",
      "Has this business ever earned that return, in its best year?",
      "How much of book value is missing because intangible spending was expensed?",
      "Is the low multiple cheap, or a correct reading of poor returns?",
      "What would the multiple be if excess returns decayed within five years?"
    ]
  },
  application:
    "Private rounds are priced on revenue multiples, which hide the same claim less legibly. The translation is worth doing: a given entry multiple, a plausible terminal margin and an assumed capital base together imply a return on invested capital, and that number can be checked against comparable businesses at maturity. Where the implied return exceeds anything the sector has produced, the multiple is the thesis and nothing else needs examining.",
  models: ["implied-expectations", "return-on-capital", "intrinsic-value", "accounting-quality"],
  connections: [
    { to: "afv-residual-earnings", type: "extends" },
    { to: "afv-reverse-the-valuation", type: "related" },
    { to: "tmit-price-is-everything", type: "reinforces" },
    { to: "ouww-pe-and-growth", type: "related" },
    { to: "lbbw-moat-in-the-numbers", type: "reinforces" }
  ],
  quote: null
},

{
  id: "afv-value-and-growth", num: 4, book_id: "afv", category: "investing",
  title: "Accounting for Value, Accounting for Growth",
  thesis: "Price the assets in place first, then price growth as a separate decision you can decline.",
  reading_time: 3,
  explanation: [
    "Penman splits a price into two parts. The first is what the business is worth if it simply continues earning what it currently earns, with no expansion. The second is everything paid for growth beyond that. The split matters because the two parts rest on completely different evidence: the first on a recorded earnings stream, the second on a forecast that has not yet happened.",
    "The two parts also carry different risk, which is the part most valuations get wrong. Earnings already being produced are reasonably reliable. Growth is the residual claim, so it absorbs the disappointment first and completely: a modest shortfall in expansion can remove the whole growth component while the assets in place are untouched. Paying a large share of the price for growth is therefore a leveraged position, not a longer one.",
    "Growth is also not automatically worth anything. Expansion adds value only when the new capital earns more than it costs, and a business growing at twenty per cent on returns below its cost of capital is destroying value faster the more it grows. Separating the two components forces the question of which kind of growth is on offer, rather than treating the rate as the answer."
  ],
  practical: {
    label: "Example: splitting the price",
    lead: "Value the business on current earnings with no growth, then look at what the remainder of the price is buying.",
    bullets: [
      "What is this worth if earnings never grow from here?",
      "What percentage of the price sits above that no-growth value?",
      "Does new capital in this business earn above its cost?",
      "If growth comes in at half the plan, what survives?",
      "Am I being paid to take growth risk, or charged for it?"
    ]
  },
  application:
    "Growth-stage pricing is almost entirely the second component, which is the honest description of the asset class rather than a criticism of it. What the split adds is a floor: a business with real recurring revenue and a path to positive contribution has a no-growth value, and comparing it with the entry price shows exactly how much is at stake if expansion stalls. Most downside cases skip this arithmetic.",
  models: ["return-on-capital", "cost-of-capital", "intrinsic-value", "margin-of-safety"],
  connections: [
    { to: "afv-anchor-on-the-balance-sheet", type: "extends" },
    { to: "afv-terminal-speculation", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "fr-growth-that-destroys", type: "reinforces" },
    { to: "ouww-pe-and-growth", type: "related" }
  ],
  quote: null
},

{
  id: "afv-conservative-accounting", num: 5, book_id: "afv", category: "investing",
  title: "Conservative Accounting Protects You",
  thesis: "Accounting that understates assets and defers profit works in the buyer's favour, not against them.",
  reading_time: 2,
  explanation: [
    "Conservative accounting expenses spending whose payoff is uncertain, recognises revenue late and writes assets down quickly. The usual complaint is that this understates the business. Penman's reply is that the understatement is deliberate and useful: the balance sheet refuses to record value on the strength of a forecast, so the anchor a buyer starts from is never inflated by management's optimism about the future.",
    "There is a second benefit that follows from the arithmetic. Understating assets today means higher reported earnings later, because the cost has already been taken and the revenue has not. So conservative accounting converts a hidden asset into visible future profit, and the growth in reported earnings becomes evidence about the business rather than an accounting artefact. Fair value accounting removes this and books the expectation directly.",
    "The distinction to hold onto is between accounting that is cautious and accounting that is quiet. Caution is applied consistently and makes the numbers harder to inflate. Manipulation moves the caution around, taking large charges in a bad year to create the appearance of recovery in the next. The test is whether the conservatism is a standing policy or a device deployed when the reported result needs help."
  ],
  practical: {
    label: "Example: testing the conservatism",
    lead: "Ask whether the accounting policies push value out of the balance sheet consistently, or only when it suits the year.",
    bullets: [
      "Are development costs expensed or capitalised, and has that changed?",
      "Have write-downs clustered in a year when the result was already poor?",
      "Is revenue recognised earlier or later than peers doing the same work?",
      "Does conservative treatment today mean reported earnings must rise later?",
      "Would I rather the accounting flattered this business, and why?"
    ]
  },
  application:
    "In private companies the pressure runs the other way, because a founder raising capital gains from capitalising development spend and recognising revenue early. A company that expenses its build costs and reports a worse number is giving you a cleaner anchor and a harder question about growth. Treating that as a negative in diligence rewards the opposite behaviour, and the metric definitions in the data room are where this usually shows up.",
  models: ["accounting-quality", "incentives", "margin-of-safety", "intrinsic-value"],
  connections: [
    { to: "afv-anchor-on-the-balance-sheet", type: "reinforces" },
    { to: "afv-residual-earnings", type: "related" },
    { to: "fsh-shifting-expenses", type: "contrasts" },
    { to: "sa-reserves-and-charges", type: "related" },
    { to: "incentives", type: "reinforces" }
  ],
  quote: null
},

{
  id: "afv-operating-and-financing", num: 6, book_id: "afv", category: "investing",
  title: "Separate Operating from Financing",
  thesis: "Operations create value and financing merely divides it, so mixing the two hides where returns come from.",
  reading_time: 3,
  explanation: [
    "Penman's first act on any set of statements is to reorganise them. Operating assets and liabilities are grouped separately from debt and cash, and operating income separately from interest. What emerges is net operating assets, the capital actually employed in the business, and the return it earns. That return is the only place a business can generate value, because it is the only place value is produced rather than shared out.",
    "The reason this matters is that borrowing raises return on equity without improving the business at all. Debt at a cost below the operating return lifts the headline number, and the lift is compensation for risk transferred to shareholders rather than performance. Two companies with identical operations and different capital structures report different returns on equity, and only the reorganised statements show that the operations are the same.",
    "The separation also cleans up the forecast. Financing items are close to zero-value activities, priced in competitive markets at their fair rate, so there is nothing to forecast there and no advantage to find. Effort belongs on the operating drivers: margin, asset turnover and the growth in net operating assets. Anything else is arithmetic that follows once those three are settled."
  ],
  practical: {
    label: "Example: reorganising the statements",
    lead: "Split the balance sheet and the income statement into operating and financing before calculating a single ratio.",
    bullets: [
      "What are net operating assets, and what return do they earn?",
      "How much of return on equity comes from leverage rather than operations?",
      "Is cash on the balance sheet operating, or genuinely surplus?",
      "Would this business still look attractive with no debt at all?",
      "Which operating driver has moved most over the last three years?"
    ]
  },
  application:
    "Venture balance sheets look financing-heavy because the cash raised dominates them, and that cash tells you nothing about the operations it is funding. Stripping it out and calculating the return on the operating assets alone is often unflattering and always informative. It also separates the two questions a growth deal actually poses: whether the unit of operations works, and whether the funding structure gets the company to the point where that shows.",
  models: ["return-on-capital", "cost-of-capital", "accounting-quality", "free-cash-flow"],
  connections: [
    { to: "afv-residual-earnings", type: "reinforces" },
    { to: "afv-anchor-on-the-balance-sheet", type: "related" },
    { to: "fr-roe-decomposed", type: "extends" },
    { to: "fr-three-statements", type: "reinforces" },
    { to: "tos-leverage", type: "related" }
  ],
  quote: null
},

{
  id: "afv-reverse-the-valuation", num: 7, book_id: "afv", category: "investing",
  title: "Reverse the Valuation",
  thesis: "Take the price as given and solve for the performance it requires, then judge that requirement.",
  reading_time: 2,
  explanation: [
    "The residual earnings model runs backwards as easily as forwards. Put the market price where the answer usually goes, hold the required return fixed, and solve for the stream of residual earnings the price implies. The output is not a valuation but a set of conditions: this return on equity, sustained for this many years, on this much invested capital.",
    "This is a better use of the same arithmetic, because judging a stated requirement is easier than producing a number from nothing. Asking whether a business can hold a twenty five per cent return on equity for fifteen years is a question with evidence attached: history, competitors, industry structure. Asking what a business is worth invites a spreadsheet and a preference.",
    "It also removes the anchor problem in reverse. A forecast built while the price is on the screen drifts toward the price, and the drift is invisible to the person doing it. Starting from the price openly, and treating it as a hypothesis to be refuted rather than a target to be reached, at least makes the influence explicit and leaves the disagreement stated in terms of business performance."
  ],
  practical: {
    label: "Example: solving for the requirement",
    lead: "Set the price as the answer and work out what the business must deliver to justify it.",
    bullets: [
      "What return on capital, for how long, does this price require?",
      "Which comparable businesses have actually sustained that, and for how long?",
      "What single condition would have to fail for the price to be wrong?",
      "Is the required performance above anything this management has produced?",
      "Have I let the price quietly set my forecast instead?"
    ]
  },
  application:
    "This is the most portable part of Penman for private markets, where no price is quoted and the round price is the only hard number available. Solving backwards from the post-money valuation for the revenue, margin and exit multiple needed to return the fund converts a negotiation into a testable claim. The useful question then is not whether the company is good but whether the required path has precedent.",
  models: ["implied-expectations", "base-rates", "anchoring", "intrinsic-value"],
  connections: [
    { to: "afv-price-to-book", type: "extends" },
    { to: "afv-terminal-speculation", type: "reinforces" },
    { to: "tmit-second-level", type: "reinforces" },
    { to: "anchoring", type: "contrasts" },
    { to: "base-rates", type: "reinforces" }
  ],
  quote: null
},

{
  id: "afv-terminal-speculation", num: 8, book_id: "afv", category: "decision-making",
  title: "Where the Speculation Hides",
  thesis: "If most of the answer sits beyond the forecast period, the forecast is decoration.",
  reading_time: 2,
  explanation: [
    "A discounted cash flow model built over five years and closed with a terminal value typically has seventy or eighty per cent of its answer in the closing line. The five years of detailed work, negotiated line by line with management, govern the small part. The terminal assumption, usually a single growth rate or exit multiple chosen with far less care, governs the rest.",
    "Penman's remedy is structural rather than a plea for better assumptions. Anchor on book value and the recorded earnings stream, and the continuing value carries a much smaller share, because most of the answer is already sitting in figures that have been earned. The speculation is still there, but it has been shrunk to the part where it belongs and can be sized honestly.",
    "The practical discipline is to report the split every time, as a percentage, alongside the valuation. A model whose answer is nine tenths continuing value is not a valuation of a business; it is a statement about a perpetuity, wearing five years of detail as a costume. Naming the proportion out loud is usually enough to change how much weight the number is given in the decision."
  ],
  practical: {
    label: "Example: sizing the terminal assumption",
    lead: "Report how much of the valuation sits beyond the forecast period before discussing any of the detail.",
    bullets: [
      "What share of this valuation comes from the terminal line?",
      "What growth rate and multiple sit inside it, stated plainly?",
      "Does the terminal return on capital exceed the cost of capital forever?",
      "How does the answer move if the terminal multiple halves?",
      "Have I spent my effort on the part that matters least?"
    ]
  },
  application:
    "Every venture model is almost entirely terminal value, so the honest response is to stop pretending otherwise and put the exit assumption at the front of the paper. State the exit multiple, the year and the comparable transactions supporting both, and let the committee argue about that rather than about revenue in year three. The forecast years earn their place as a test of feasibility, not as the source of the answer.",
  models: ["terminal-value", "implied-expectations", "cost-of-capital", "wysiati"],
  connections: [
    { to: "afv-anchor-on-the-balance-sheet", type: "reinforces" },
    { to: "afv-reverse-the-valuation", type: "reinforces" },
    { to: "mos-valuation-methods", type: "related" },
    { to: "tbs-forecasting-limits", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
}

);
