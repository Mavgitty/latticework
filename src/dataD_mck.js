/* Valuation — McKinsey & Company — 10 ideas */
window.DB.ideas.push(

{
  id: "mck-value-driver-principle", num: 1, book_id: "mck", category: "investing",
  title: "Growth, Returns and Value",
  thesis: "Value comes from growth and from returns on invested capital above the cost of capital.",
  reading_time: 3,
  explanation: [
    "The whole framework rests on one relationship. A company creates value by investing capital to earn a return above what that capital costs, and by growing the amount it can invest at those returns. Both terms are needed. Growth without a return above the cost of capital adds revenue and consumes cash, and a high return on a base that cannot expand produces a good business that stays small.",
    "The two drivers trade off against each other because growth has to be funded. Reinvesting a larger share of profit lowers the cash available now in exchange for a bigger stream later, and whether that exchange is worthwhile depends entirely on the spread between the return earned and the cost of capital. A company earning twenty per cent on new capital that costs nine should reinvest everything it can. One earning seven should not.",
    "Which driver matters more depends on where the company already sits. Businesses earning high returns gain most from growth, because each additional unit of capital carries a wide spread. Businesses earning close to their cost of capital gain almost nothing from growth and a great deal from raising returns, which usually means pricing, mix or capital intensity rather than volume. Pushing growth at the second kind of company is expensive activity."
  ],
  practical: {
    label: "Example: separating the two drivers",
    lead: "Work out the return on new capital and the rate of reinvestment separately, then judge whether the growth is worth funding.",
    bullets: [
      "What return is this business earning on capital invested in the last three years?",
      "What is the spread between that return and a defensible cost of capital?",
      "What share of profit is being reinvested, and at what return?",
      "If the spread is negative, does the plan add revenue or value?",
      "Would raising returns beat raising growth here, and which is management pursuing?"
    ]
  },
  application:
    "Early companies rarely show a positive spread, so the useful version is forward looking. At maturity, what return on capital does this model support, and how much capital can it absorb at that return? A software business with negative working capital and low incremental cost can compound at very high returns on a small base. A logistics or hardware model may grow faster and never earn its cost of capital.",
  models: ["return-on-capital", "cost-of-capital", "compounding", "capital-allocation"],
  connections: [
    { to: "mck-growth-and-returns", type: "extends" },
    { to: "mck-roic", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "tos-capital-allocation", type: "reinforces" },
    { to: "compounding", type: "reinforces" }
  ],
  quote: null
},

{
  id: "mck-conservation-of-value", num: 2, book_id: "mck", category: "investing",
  title: "The Conservation of Value",
  thesis: "Anything that does not change cash flows does not change value, however it is packaged.",
  reading_time: 3,
  explanation: [
    "The principle is a constraint on what can be true. Value comes from the cash a business will produce and the risk attached to it, so a transaction that rearranges claims on the same cash cannot create value by itself. Substituting debt for equity, changing an accounting policy, issuing a different class of share or moving an asset between subsidiaries all leave the cash unchanged, and therefore leave value unchanged.",
    "This disposes of a large family of arguments. A buyback does not create value by raising earnings per share, because it only changes the number of shares dividing the same cash. An acquisition does not create value because the target trades on a lower multiple than the buyer. Debt does not create value by being cheaper than equity, because adding debt makes the remaining equity riskier and raises the return it requires.",
    "The principle does not say that structure never matters. It says structure matters only through cash: the tax deductibility of interest, the discipline that debt imposes on spending, transaction costs avoided, the information a decision conveys to the market. Those effects are real, have cash consequences and can be estimated. Whatever is left over once they are counted is presentation, and presentation is where most value creation claims are actually made."
  ],
  practical: {
    label: "Example: testing a value creation claim",
    lead: "Ask which line of the cash flow statement changes, and by how much, before accepting that a transaction creates value.",
    bullets: [
      "Which cash flows change as a result of this, and in which year?",
      "Is the effect real cash, or a change in how earnings are reported?",
      "If risk has moved, has the required return been adjusted for it?",
      "Would the same argument work in reverse, and does anyone make it?",
      "What tax, cost or behavioural change survives once the accounting is stripped out?"
    ]
  },
  application:
    "Recapitalisations, secondary structures and preference stacks all invite this test. A higher headline price bought with a participating liquidation preference and a ratchet has not raised the value of the company, it has moved value between classes of holder. The discipline is to value the enterprise once, on cash, and then treat the structure as a separate question about who receives what and in which scenarios.",
  models: ["free-cash-flow", "accounting-quality", "cost-of-capital", "capital-allocation"],
  connections: [
    { to: "mck-value-driver-principle", type: "reinforces" },
    { to: "mck-multiples", type: "related" },
    { to: "tos-cash-flow-per-share", type: "reinforces" },
    { to: "fsh-cash-versus-earnings", type: "reinforces" },
    { to: "tos-buybacks", type: "related" }
  ],
  quote: null
},

{
  id: "mck-growth-and-returns", num: 3, book_id: "mck", category: "strategy",
  title: "Not All Growth Is Equal",
  thesis: "Growth won from new customers is worth several times the same growth bought by acquisition.",
  reading_time: 2,
  explanation: [
    "Growth is usually reported as a single percentage, and it is not a single thing. A unit of revenue growth from bringing new customers into a category carries far more value than the same unit bought by acquiring a company at a full price, because the capital required to produce the two differs by an order of magnitude. The ranking of growth types is built on exactly that difference.",
    "The order runs roughly from new market creation and share gain in a fast growing category, through share gain in a mature one, down to large acquisitions. Price increases that stick sit near the top because they consume no capital at all. Acquisitions sit at the bottom, since the seller usually captures the value of the expected improvement in the premium paid, which leaves the buyer holding the execution risk.",
    "The consequence is that a growth forecast has to be decomposed before it can be valued. Ten per cent from volume in an expanding market, from price, from a bolt-on and from a currency movement have four different capital requirements and four different levels of durability. A model that treats them identically prices the cheapest growth and the most expensive growth at the same number, which is how acquisitive companies are overvalued."
  ],
  practical: {
    label: "Example: decomposing a growth rate",
    lead: "Break reported growth into its sources, then attach a capital requirement and a durability judgement to each one.",
    bullets: [
      "How much of last year's growth came from price, volume, mix and acquisition?",
      "What capital was consumed to produce each component?",
      "Which components repeat next year without a further transaction?",
      "Is organic growth accelerating, or being masked by acquired revenue?",
      "What did the last acquisition cost relative to the cash it added?"
    ]
  },
  application:
    "The private-market equivalent is separating expansion inside existing accounts from new logo acquisition, and both from paid growth. Net revenue retention well above one hundred per cent consumes almost no capital and tends to persist. Growth bought at a rising customer acquisition cost consumes cash every month and stops when the spending stops. Same headline rate, different businesses, and only one of them deserves a growth multiple.",
  models: ["return-on-capital", "capital-allocation", "durability", "compounding"],
  connections: [
    { to: "mck-value-driver-principle", type: "extends" },
    { to: "mck-expectations-treadmill", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "scale-economies", type: "related" },
    { to: "zto-last-mover", type: "related" }
  ],
  quote: null
},

{
  id: "mck-roic", num: 4, book_id: "mck", category: "investing",
  title: "Return on Invested Capital",
  thesis: "Divide operating profit after tax by the capital actually invested, and read the result carefully.",
  reading_time: 3,
  explanation: [
    "The metric is net operating profit after tax divided by invested capital, and both terms have to be built rather than read off a page. NOPAT starts from operating profit, taxes it at the operating tax rate, and excludes interest and non-operating income. Invested capital is operating working capital plus net fixed assets plus other operating assets, funded by debt and equity, and it excludes cash held beyond operating needs.",
    "The measure is deliberately unlevered, which is what separates it from return on equity. Return on equity mixes operating performance with the financing decision, so a mediocre business carrying a lot of debt can show a flattering number until the cycle turns. This asks one question instead: what does the business earn on the money tied up in it, before anyone argues about who supplied that money.",
    "Reading the result means decomposing it. The return is margin multiplied by capital turnover, and the two routes to a high number describe different businesses with different vulnerabilities. It also means deciding what to do with goodwill. Including it measures whether acquisitions were worth their price, excluding it measures the operating business, and both are useful, so state which version you are quoting before comparing anything."
  ],
  practical: {
    label: "Example: building the number",
    lead: "Rebuild returns from the statements rather than accepting a reported figure, then decompose the result into margin and turnover.",
    bullets: [
      "Is the numerator operating profit after tax, with financing effects removed?",
      "Does invested capital exclude surplus cash and non-operating assets?",
      "Is the return driven by margin or by capital turnover?",
      "What happens to the number with and without goodwill included?",
      "How has the return moved over five years, and why?"
    ]
  },
  application:
    "Private companies rarely present this, and building it is often the most informative hour of financial diligence. Capitalised development costs, operating leases and negative working capital all move invested capital materially, and each is a judgement. For an asset-light business the number can look absurd, because the real capital sits in a sales force expensed through the income statement, so the useful comparison becomes cumulative spend against gross profit created.",
  models: ["return-on-capital", "accounting-quality", "owner-earnings", "cost-of-capital"],
  connections: [
    { to: "mck-reorganised-accounts", type: "extends" },
    { to: "mck-value-driver-principle", type: "reinforces" },
    { to: "fr-roe-decomposed", type: "related" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "s7p-benefit-and-barrier", type: "related" }
  ],
  quote: null
},

{
  id: "mck-reorganised-accounts", num: 5, book_id: "mck", category: "investing",
  title: "Reorganise Before You Value",
  thesis: "Statements are built for reporting, so rebuild them into operating and financing before valuing anything.",
  reading_time: 2,
  explanation: [
    "Published accounts mix operating performance with financing and with non-operating items, because they are built to satisfy reporting rules rather than to support a valuation. The first step is mechanical. Split the balance sheet into invested capital and the claims that fund it, and split the income statement into operating profit before financing and everything else. Nothing is added at this stage and no forecast is made yet.",
    "The work sits in the classifications, and each one is a judgement with consequences. Excess cash, pension deficits, deferred tax, minority interests, capitalised leases and non-consolidated subsidiaries all have to be assigned somewhere. Getting an assignment wrong shows up twice, once in the returns you measure and once in the bridge from enterprise value to equity value, and the two errors do not conveniently cancel each other out.",
    "Doing this before forecasting changes what the forecast is about. Once the accounts are organised, growth and returns become visible as separate drivers and the historical record reads as a pattern rather than a run of headline numbers. Analysts who skip the step tend to forecast revenue and margin directly, which hides the capital required to produce them and quietly assumes it arrives free."
  ],
  practical: {
    label: "Example: rebuilding the statements",
    lead: "Reorganise five years of accounts into invested capital and operating profit before any forecast is built on top.",
    bullets: [
      "Which balance sheet items are operating, and which are financing or surplus?",
      "Has operating profit been separated from interest and non-operating income?",
      "Are leases and capitalised development treated consistently across all years?",
      "Does the rebuilt series reconcile to the reported figures each year?",
      "Do the same classifications carry through into the forecast?"
    ]
  },
  application:
    "The private-market version is unglamorous and worth the hours. Rebuild the management accounts into a consistent operating series, then reconcile every adjustment back to the reported numbers. Adjusted EBITDA presented by a vendor is a classification exercise performed by the seller. Doing your own usually reveals that a third of the adjustments are recurring costs, and it establishes the base from which the forecast has to grow.",
  models: ["accounting-quality", "return-on-capital", "free-cash-flow", "owner-earnings"],
  connections: [
    { to: "mck-roic", type: "reinforces" },
    { to: "mck-free-cash-flow", type: "extends" },
    { to: "fr-three-statements", type: "reinforces" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "fsh-cash-versus-earnings", type: "related" }
  ],
  quote: null
},

{
  id: "mck-free-cash-flow", num: 6, book_id: "mck", category: "investing",
  title: "The Cash Flow Being Discounted",
  thesis: "Discount the cash the operations produce for all investors, not the cash left for shareholders.",
  reading_time: 3,
  explanation: [
    "Free cash flow in this framework is NOPAT plus non-cash charges, less the investment in working capital and fixed assets. It is the cash the operating business generates for every provider of capital, before any interest is paid, which is why it is discounted at the weighted average cost of capital and produces an enterprise value. Equity value follows afterwards, by subtracting debt and the other non-equity claims.",
    "Two errors recur. The first is including interest in the cash flow and then discounting at a rate that already accounts for the tax benefit of debt, which counts the same benefit twice. The second is treating movements in surplus cash or non-operating assets as part of the operating flow. The test in both cases is whether the item sat in invested capital, because the flow and the capital must be defined consistently.",
    "The definition has an unwelcome property which is really the point of it. A growing business earning high returns still consumes cash while it grows, because working capital and capacity have to be funded ahead of the revenue. Free cash flow can therefore be negative for years in a company creating substantial value, and positive in a company liquidating itself slowly. Neither observation means anything read on its own."
  ],
  practical: {
    label: "Example: defining the flow",
    lead: "Check that the cash flow being discounted matches the discount rate applied and the capital base it came from.",
    bullets: [
      "Is the flow before interest, and is the discount rate a weighted average?",
      "Have taxes been calculated on operating profit rather than profit after interest?",
      "Is investment in working capital and capacity funded in the year it occurs?",
      "Are non-operating assets excluded from the flow and valued separately?",
      "Does negative cash flow reflect growth, or losses dressed as growth?"
    ]
  },
  application:
    "Venture models often forecast revenue and a terminal margin while skipping the capital needed to get there. Stating the cumulative cash the plan consumes before it turns is the more useful output, because that figure determines how many rounds are required and therefore how much dilution sits between this entry and the exit. A plan that creates real value and needs three more rounds to reach it can still return little.",
  models: ["free-cash-flow", "owner-earnings", "cost-of-capital", "return-on-capital"],
  connections: [
    { to: "mck-reorganised-accounts", type: "reinforces" },
    { to: "mck-wacc", type: "reinforces" },
    { to: "tos-cash-flow-per-share", type: "related" },
    { to: "ewb-owner-earnings", type: "related" },
    { to: "tii-intrinsic-value", type: "extends" }
  ],
  quote: null
},

{
  id: "mck-wacc", num: 7, book_id: "mck", category: "investing",
  title: "The Weighted Average Cost of Capital",
  thesis: "One blended rate converts future cash into present value, on assumptions worth stating out loud.",
  reading_time: 3,
  explanation: [
    "The rate blends the cost of equity and the after-tax cost of debt, weighted by the market value of each. Debt costs are close to observable. The cost of equity is not, and is usually estimated from a risk free rate, a market risk premium and a beta measuring how the shares move with the market. All three inputs are contestable, and small differences between defensible choices move a valuation a long way.",
    "The formula carries assumptions that quietly matter. It assumes the capital structure used for the weights is the one that will persist, that the tax shield is actually realised, and that risk can be captured by a single number applied to every year of the forecast. Long-dated cash flows are usually riskier than near ones, and a constant rate does not say so. Market weights rather than book weights are not optional here.",
    "Precision is false comfort. A rate quoted to two decimal places, resting on a beta estimated from five years of weekly returns, implies knowledge that nobody has. The productive use of the number is as a hurdle and a comparison: is this business earning above what its capital costs, and how far does the answer move across a plausible range of rates? A range reported honestly beats a single figure."
  ],
  practical: {
    label: "Example: interrogating the rate",
    lead: "State every input to the discount rate, then test the valuation across the plausible range of each of them.",
    bullets: [
      "What risk free rate, market premium and beta produced this number?",
      "Are the debt and equity weights at market value or book value?",
      "Does the assumed capital structure match what the company will actually run?",
      "How much does value move if the rate is one point higher?",
      "Am I quoting a precision the inputs cannot support?"
    ]
  },
  application:
    "Private-market practice often replaces the whole calculation with a target return, which is defensible as long as everyone recognises what has been done. A twenty-five per cent hurdle bundles the cost of capital, illiquidity, dilution and the probability of failure into one figure, then applies it to a plan that already assumes success. Separating the risk of the business from the required return on the fund keeps those two errors apart.",
  models: ["cost-of-capital", "intrinsic-value", "terminal-value", "risk-not-volatility"],
  connections: [
    { to: "mck-free-cash-flow", type: "reinforces" },
    { to: "mck-continuing-value", type: "reinforces" },
    { to: "tmit-risk-is-loss", type: "contrasts" },
    { to: "tii-intrinsic-value", type: "related" },
    { to: "mos-valuation-methods", type: "related" }
  ],
  quote: null
},

{
  id: "mck-continuing-value", num: 8, book_id: "mck", category: "investing",
  title: "Continuing Value",
  thesis: "Most of the answer sits beyond the forecast, so build that part from drivers rather than a multiple.",
  reading_time: 3,
  explanation: [
    "In a typical discounted cash flow the period after the explicit forecast contributes the majority of the value, often two thirds or more. That is not a flaw, since companies do not stop at year ten, but it does mean the assumption used for the tail deserves at least as much scrutiny as the years modelled line by line. Most of the effort usually goes the other way around.",
    "The recommended approach expresses the tail through the drivers rather than a multiple: operating profit after tax in the first year beyond the forecast, reduced by the share of it that must be reinvested to sustain growth, divided by the cost of capital less that growth rate. Written out, it forces two statements. Growth cannot exceed the economy for long, and returns on new capital converge towards the cost of capital as competition arrives.",
    "The common failures become visible once the formula is written out. Perpetual growth set close to the discount rate produces an enormous number and no economics. A return on new capital held far above the cost of capital forever assumes a competitive position that has never been observed to last. Substituting an exit multiple hides both assumptions inside a figure borrowed from whatever today's market happens to pay."
  ],
  practical: {
    label: "Example: testing the tail",
    lead: "Work out what share of value sits beyond the forecast, then state the growth and return assumptions inside it.",
    bullets: [
      "What percentage of total value comes from the continuing period?",
      "What perpetual growth rate is assumed, relative to nominal economic growth?",
      "What return on new capital is assumed to persist, and for how long?",
      "Would a shorter competitive advantage period change the conclusion?",
      "If an exit multiple is used, what growth and return does it imply?"
    ]
  },
  application:
    "Venture underwriting puts almost everything in the tail, usually as an exit multiple on a year five revenue figure. Converting that multiple back into the growth and margin it implies is the same discipline run in reverse, and it often reveals an exit that assumes a company larger and more profitable than any listed peer. If the tail carries most of the return, it deserves more work than a comparables table.",
  models: ["terminal-value", "return-on-capital", "cost-of-capital", "implied-expectations"],
  connections: [
    { to: "mck-wacc", type: "extends" },
    { to: "mck-multiples", type: "contrasts" },
    { to: "tii-intrinsic-value", type: "related" },
    { to: "zto-last-mover", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
},

{
  id: "mck-expectations-treadmill", num: 9, book_id: "mck", category: "investing",
  title: "The Expectations Treadmill",
  thesis: "Share returns come from beating expectations, not from performing well against them.",
  reading_time: 3,
  explanation: [
    "A company's share price already contains a forecast of its performance. Returns to a shareholder from here depend on performance relative to that forecast, which means an excellent company priced for excellence delivers an ordinary return if it merely does what was expected. The better the recent record, the higher the expectations that have been capitalised into the price, and the faster management has to run to stand still.",
    "This creates a treadmill with no exit at the top. Managers of highly valued companies are pushed towards ever larger commitments to justify the price, and the acquisitions and expansions made under that pressure are the ones that most often destroy value. The alternative, allowing expectations to reset to something achievable, is unpleasant for a year or two and rational over a decade, which is why it is rare.",
    "For an investor the useful move is to read the price as a forecast and then judge the forecast. Over long periods market values do track returns on capital and growth reasonably closely, so the question is not whether the market is rational in general but whether this specific set of embedded expectations is achievable. A great company priced for perfection and a weak one priced for decline can both disappoint."
  ],
  practical: {
    label: "Example: reading the embedded forecast",
    lead: "Translate the price into the performance it requires, then ask whether that performance has ever been delivered.",
    bullets: [
      "What growth and return on capital does the current price require?",
      "Has any comparable company sustained that combination for that long?",
      "Is management making commitments to defend a valuation rather than build a business?",
      "What happens to the return if the company performs well but not perfectly?",
      "Am I confusing a good business with a good investment?"
    ]
  },
  application:
    "This is the sharpest available critique of momentum-priced private rounds. A company that raised at a hundred times revenue has embedded a forecast, and the founders now have to run against it, usually by hiring ahead of demand and buying growth. The next round prices the same company against the same forecast. Underwriting the entry against a plausible outcome rather than the embedded one is what lets the return survive a reset.",
  models: ["implied-expectations", "second-level-thinking", "regression", "return-on-capital"],
  connections: [
    { to: "mck-value-driver-principle", type: "reinforces" },
    { to: "mck-multiples", type: "related" },
    { to: "tmit-second-level", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "regression-to-the-mean", type: "related" }
  ],
  quote: null
},

{
  id: "mck-multiples", num: 10, book_id: "mck", category: "investing",
  title: "Using Multiples Properly",
  thesis: "A multiple is a compressed valuation, and it only informs when the compression is consistent.",
  reading_time: 3,
  explanation: [
    "A multiple contains the same drivers as a discounted cash flow, compressed into one number. Enterprise value over invested capital, or over operating profit after tax, is a statement about growth, return on capital and the cost of capital taken together. Used well it is a cross-check on a full valuation and a way of asking what the market believes. Used badly it imports another company's assumptions without inspecting any of them.",
    "Four rules do most of the work. Use forward estimates rather than trailing ones, because value depends on future cash. Put enterprise value against a pre-interest operating measure, so that differences in gearing do not contaminate the comparison. Adjust for non-operating items and for accounting differences, particularly leases and capitalised costs. Choose peers on the economics that drive value, meaning similar returns on capital and growth prospects, not on the industry label.",
    "Peer selection decides the answer and is the least examined step. Two companies in the same sector earning different returns on capital should trade at different multiples, and averaging them produces a figure that describes neither. The honest use is to account for the dispersion within the set before using anything from it. If the spread between the highest and lowest peer cannot be explained by growth and returns, the set is wrong."
  ],
  practical: {
    label: "Example: building a peer set",
    lead: "Justify each peer on returns and growth, and explain the dispersion in the set before using its average.",
    bullets: [
      "Are these multiples forward looking, and on whose estimates?",
      "Is the numerator enterprise value where the denominator is pre-interest?",
      "Do the peers earn similar returns on capital, not merely sell similar things?",
      "Can I explain why the highest and lowest peer differ?",
      "Have accounting differences on leases and capitalised costs been normalised first?"
    ]
  },
  application:
    "Private comparables carry two extra problems: the sample is small and the terms disclosed are incomplete. A reported revenue multiple on a round carrying a two times participating preference is not the multiple that was paid. The workable approach is to hold a small set of genuinely comparable businesses, know their growth and gross margin, and treat the multiple as a summary of a view rather than as evidence for one.",
  models: ["implied-expectations", "return-on-capital", "intrinsic-value", "accounting-quality"],
  connections: [
    { to: "mck-continuing-value", type: "contrasts" },
    { to: "mck-roic", type: "reinforces" },
    { to: "ouww-pe-and-growth", type: "related" },
    { to: "mos-valuation-methods", type: "related" },
    { to: "tii-intrinsic-value", type: "related" }
  ],
  quote: null
}

);
