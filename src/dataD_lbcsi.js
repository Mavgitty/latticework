/* The Little Book of Common Sense Investing — John C. Bogle — 6 ideas */
window.DB.ideas.push(

{
  id: "lbcsi-market-return-arithmetic", num: 1, book_id: "lbcsi", category: "investing",
  title: "The Arithmetic of the Whole Market",
  thesis: "Investors as a group must earn the market return before costs and less than it after.",
  reading_time: 3,
  explanation: [
    "Every share is owned by somebody. Add all investors together and their combined holding is the market, so their combined gross return is the market's return, whatever the market does. That is an identity rather than a theory, and no amount of skill on either side alters it: for one investor to beat the average another must trail it by the same amount, before either has paid anybody.",
    "Costs are then subtracted from that fixed pool. Management fees, trading spreads, custody and advice all come out of the same gross return, which means the average investor's net result is the market return minus the average cost. The distribution of outcomes does not merely widen around the market, it moves below it, and the gap is the size of the industry's aggregate charge.",
    "This makes cost the one input you can know in advance. Future returns, manager skill and the timing of cycles are all estimates; the fee schedule is printed. Bogle's conclusion follows from the arithmetic rather than from any view about efficient markets: choosing the cheapest way to own the whole market moves you toward the top of the net distribution without requiring you to be right about anything."
  ],
  practical: {
    label: "Example: locating yourself in the pool",
    lead: "Work out what you are paying in total, then compare it with the average, because that difference is your position in the distribution.",
    bullets: [
      "What is my all-in annual cost, including fees, spreads and platform charges?",
      "Is that above or below the average cost paid by investors in this market?",
      "What return am I assuming, and is it gross or net?",
      "Who has to underperform for my strategy to work as intended?",
      "Am I treating cost as a small detail and return as the whole question?"
    ]
  },
  application:
    "Applied to a fund, this reads as a question about the fee load a strategy has to overcome. A two and twenty structure on a portfolio of listed equities has to generate several points of gross outperformance every year simply to match a cheap index fund, and it has to do so after the fund's own trading costs. Stating that hurdle explicitly before raising capital is more honest than reporting gross returns afterwards.",
  models: ["costs-compound", "compounding", "opportunity-cost", "base-rates"],
  connections: [
    { to: "lbcsi-cost-compounding", type: "extends" },
    { to: "lbcsi-hidden-costs", type: "reinforces" },
    { to: "tii-formula-investing", type: "reinforces" },
    { to: "twbw-turnover-cost", type: "reinforces" },
    { to: "zto-power-law", type: "contrasts" }
  ],
  quote: null
},

{
  id: "lbcsi-cost-compounding", num: 2, book_id: "lbcsi", category: "investing",
  title: "The Tyranny of Compounding Costs",
  thesis: "A fee is not an annual charge but a permanent reduction in the rate at which capital compounds.",
  reading_time: 3,
  explanation: [
    "The damage from a fee is not the fee. Compounding at six per cent rather than eight for several decades does not cost you two per cent a year, it costs you a large share of the final sum, because every dollar taken out early also forgoes everything it would have earned afterwards. The loss grows with time, which is the same property that makes the underlying returns attractive.",
    "Bogle's way of stating it is to compare who supplies the capital with who keeps the return. The investor puts up all of the money and takes all of the risk, and over a long horizon a percentage or two a year can hand a substantial fraction of the accumulated gain to the intermediary who put up nothing. The percentage looks small because it is quoted against assets rather than against returns.",
    "The proportion matters more when returns are lower. A fixed charge against a nominal return of four per cent removes a far larger share of the real result than the same charge against ten, so the case for minimising cost strengthens exactly when conditions are poor. Cost is also the one term in the equation that is certain to be paid, whatever the market delivers."
  ],
  practical: {
    label: "Example: costs in dollars, not percentages",
    lead: "Convert the annual percentage into a share of the terminal sum over your actual holding period, then decide whether you would pay it.",
    bullets: [
      "Over thirty years, what fraction of my final balance does this fee claim?",
      "Would I write that number as a cheque today?",
      "Is the charge quoted against my assets or against my expected return?",
      "If real returns are low, what does the same fee then cost me?",
      "What would I have to gain in return for accepting it?"
    ]
  },
  application:
    "Inside a fund the same arithmetic applies to the management fee itself. A fee drawn on committed capital for ten years is a large claim on a gross multiple, and it compounds against the limited partner in exactly the way Bogle describes. Reporting net returns rather than gross, and modelling the fee drag before the fund is raised, is the difference between a structure that can clear its own cost and one that quietly cannot.",
  models: ["costs-compound", "compounding", "second-order", "opportunity-cost"],
  connections: [
    { to: "lbcsi-market-return-arithmetic", type: "extends" },
    { to: "lbcsi-hidden-costs", type: "reinforces" },
    { to: "compounding", type: "reinforces" },
    { to: "pom-confounding-compounding", type: "related" },
    { to: "twbw-turnover-cost", type: "reinforces" }
  ],
  quote: null
},

{
  id: "lbcsi-performance-does-not-persist", num: 3, book_id: "lbcsi", category: "decision-making",
  title: "Why Past Performance Does Not Persist",
  thesis: "Fund records are mostly noise, so selecting managers on past returns buys reversion rather than skill.",
  reading_time: 3,
  explanation: [
    "The pattern in fund records is that leadership is temporary. Funds at the top of a five year table are scattered through the next five years, and a meaningful number of them stop existing altogether, which removes them from the tables and flatters what remains. Selection made on the visible survivors is therefore made on a sample that has already had its failures deleted.",
    "Three mechanisms drive the reversion. A strong run usually reflects a style or a sector that happened to work, and styles rotate. Success attracts assets, and a larger fund cannot repeat the trades that made a small one, so the strategy is diluted by its own popularity. And the extremity of any short record contains a component of chance, which by construction does not repeat.",
    "None of this proves that skill is absent, only that returns over a few years are a weak instrument for detecting it. Separating a genuinely skilled manager from a lucky one requires a record long enough that chance has been averaged out, and by the time such a record exists the manager is often expensive, closed or retired. The practical response is to stop paying for a signal that arrives too late to use."
  ],
  practical: {
    label: "Example: reading a track record",
    lead: "Before treating a record as evidence, ask how long it is, what it excludes, and what conditions produced it.",
    bullets: [
      "How many years is this record, and how many independent decisions does it contain?",
      "Which funds from the same cohort no longer appear in the comparison?",
      "Did one style or one holding produce most of the outperformance?",
      "Have assets grown to the point where the original approach no longer fits?",
      "Would this record look different measured from a different starting year?"
    ]
  },
  application:
    "For an allocator this argues for weighting structure over recent numbers. Fee level, capacity discipline, turnover and how the manager behaved in the worst year are all observable now, while next decade's return is not. It also argues for asking what a fund's soft closing policy is, because the same asset growth that rewards the manager for a good record is the thing most likely to end it.",
  models: ["regression", "base-rates", "survivorship", "decision-quality"],
  connections: [
    { to: "lbcsi-market-return-arithmetic", type: "reinforces" },
    { to: "lbcsi-what-indexing-gives-up", type: "contrasts" },
    { to: "regression-to-the-mean", type: "extends" },
    { to: "tfs-illusion-validity", type: "reinforces" },
    { to: "tib-luck-vs-skill", type: "related" }
  ],
  quote: null
},

{
  id: "lbcsi-two-sources-of-return", num: 4, book_id: "lbcsi", category: "investing",
  title: "Investment Return and Speculative Return",
  thesis: "Market returns come from business fundamentals plus the changing multiple investors are willing to pay.",
  reading_time: 3,
  explanation: [
    "Bogle splits the return on equities into two components. Investment return is what the businesses produce: the dividend yield at purchase plus the growth in earnings. Speculative return is the change in the price investors will pay for a dollar of those earnings. Over a decade the second component can dominate the first, while over several decades it tends toward zero, because multiples cannot expand forever.",
    "The distinction matters because the two components behave differently. Dividend yield is observable today and earnings growth has been remarkably stable across long periods, so a rough estimate of investment return is available without forecasting anything unusual. Speculative return requires a view on future sentiment, which is why long run projections built by extrapolating the last ten years of total return are usually projecting a multiple expansion that has already happened.",
    "It also tells you where a starting valuation sits in the answer. Buying when the multiple is high borrows return from the future: the speculative component has already been collected by whoever sold to you, and its reversal will subtract from what the businesses earn for you afterwards. The decomposition converts a vague sense that valuations are stretched into a number you can put in a return estimate."
  ],
  practical: {
    label: "Example: building a return estimate",
    lead: "Estimate the two components separately, and be explicit that only one of them requires you to predict sentiment.",
    bullets: [
      "What is the current dividend yield, and what earnings growth am I assuming?",
      "What multiple change is embedded in my expected return?",
      "Is today's multiple above or below its long run range?",
      "How much of the last decade's return came from re-rating rather than earnings?",
      "Does my forecast still work with no multiple expansion at all?"
    ]
  },
  application:
    "Set against a fee, the decomposition is uncomfortable. If investment return is around six or seven per cent and the multiple contributes nothing over the holding period, a total cost load of two per cent is taking roughly a third of the available return. Any fund pitched on long run equity returns should state which component it expects to capture, because a strategy relying on re-rating is relying on other investors rather than on earnings.",
  models: ["implied-expectations", "intrinsic-value", "regression", "market-cycles"],
  connections: [
    { to: "lbcsi-market-return-arithmetic", type: "extends" },
    { to: "lbcsi-performance-does-not-persist", type: "reinforces" },
    { to: "tmit-cycles", type: "related" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "ouww-pe-and-growth", type: "related" }
  ],
  quote: null
},

{
  id: "lbcsi-hidden-costs", num: 5, book_id: "lbcsi", category: "investing",
  title: "The Costs You Are Not Shown",
  thesis: "The published expense ratio is only part of what a fund costs its investors each year.",
  reading_time: 2,
  explanation: [
    "Beyond the stated fee sit costs that never appear as a line item. Every trade pays a spread and moves the price against the fund, so a portfolio turning over most of its holdings each year pays those frictions repeatedly. Cash held for redemptions and for opportunities earns less than the assets the investor is paying to own. None of these are disclosed as charges, and all of them arrive in the net return.",
    "Tax is the largest of the unshown costs for a taxable investor. High turnover realises gains that would otherwise have stayed unrealised and compounding, converting a deferred liability into an annual one. Two funds with identical gross returns can leave their holders in materially different positions purely through when the tax was triggered. Reported performance is almost always pre-tax, which makes the most expensive difference between strategies invisible in the comparison people actually use."
  ],
  practical: {
    label: "Example: finding the unstated costs",
    lead: "Add the frictions the factsheet omits: turnover, spreads, cash drag and tax, then compare funds on what is left.",
    bullets: [
      "What is the annual turnover, and what does that imply in trading costs?",
      "How much cash does this fund carry on average, and why?",
      "Is the performance I am comparing pre-tax or after tax?",
      "What proportion of gains are realised each year rather than deferred?",
      "Which costs are in the expense ratio, and which are not?"
    ]
  },
  application:
    "The direct discipline is to measure your own fund the way you would measure someone else's. Total cost is the management fee plus brokerage, plus the spread on every position entered and exited, plus the drag from undeployed capital. Turnover is the multiplier on most of that, so a decision to trade more actively is a decision to raise the hurdle the strategy must clear, and it should be justified on that basis.",
  models: ["costs-compound", "second-order", "incentives", "accounting-quality"],
  connections: [
    { to: "lbcsi-cost-compounding", type: "extends" },
    { to: "lbcsi-market-return-arithmetic", type: "reinforces" },
    { to: "twbw-turnover-cost", type: "reinforces" },
    { to: "tos-tax-efficiency", type: "reinforces" },
    { to: "mos-cash-is-a-position", type: "contrasts" }
  ],
  quote: null
},

{
  id: "lbcsi-what-indexing-gives-up", num: 6, book_id: "lbcsi", category: "decision-making",
  title: "What Indexing Gives Up",
  thesis: "Owning the average guarantees the average, and forecloses every position a good analyst could take.",
  reading_time: 3,
  explanation: [
    "An index fund buys everything in proportion to price, which means it buys more of what has already risen and holds businesses you would never choose. It cannot decline an overvalued sector, cannot avoid a company whose accounts you distrust, and cannot act on the one occasion in a decade when a market is obviously mispriced. The result is guaranteed to be ordinary, and ordinary is the point being purchased.",
    "The strongest objection is that a shelf of books on valuation, moats and forensic accounting is an argument that judgement pays. Both claims can hold. The arithmetic says the average active dollar must lose to the index after costs, which is a statement about the aggregate and not about any particular investor. It leaves room for a minority with a real edge, and it says nothing about markets where prices are not set by continuous auction.",
    "What the arithmetic does establish is where the burden of proof sits. Anyone charging for judgement is claiming membership of a minority, and the claim should be tested against cost, capacity and the base rate rather than against a good recent year. Indexing is the correct default precisely because it is what you should hold when the claim cannot be substantiated, which for most investors in most markets it cannot."
  ],
  practical: {
    label: "Example: testing a claim to edge",
    lead: "Before paying for judgement, state what the edge is, why it persists, and what cost it has to overcome.",
    bullets: [
      "What specifically do I know or do that the marginal buyer does not?",
      "Is this market priced by continuous auction or by negotiation?",
      "How many points of gross return must the edge produce to pay its cost?",
      "Would I still claim this edge after a bad three years?",
      "Where in my portfolio am I paying for judgement I cannot evidence?"
    ]
  },
  application:
    "The workable arrangement is a barbell in the cost structure. Hold cheap index exposure where you have no edge and pay full fees only where a specific, statable advantage exists, then measure the active portion against the index net of everything. In a fund this argues for narrow mandates and honest benchmarks, because a strategy priced as active and constructed as an index tracker is the worst combination available.",
  models: ["circle-of-competence", "decision-quality", "diversification", "probability"],
  connections: [
    { to: "lbcsi-market-return-arithmetic", type: "contrasts" },
    { to: "lbcsi-performance-does-not-persist", type: "contrasts" },
    { to: "tii-defensive-enterprising", type: "related" },
    { to: "circle-of-competence", type: "related" },
    { to: "tmit-second-level", type: "contrasts" }
  ],
  quote: null
}

);
