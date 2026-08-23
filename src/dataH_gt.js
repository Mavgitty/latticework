/* The General Theory of Employment, Interest and Money - John Maynard Keynes - 8 ideas */
window.DB.ideas.push(

{
  id: "gt-effective-demand", num: 1, book_id: "gt", category: "decision-making",
  title: "Effective Demand Sets Output",
  thesis: "The level of output and employment is fixed by how much total spending is expected, not by how much the economy is capable of producing.",
  reading_time: 3,
  explanation: [
    "Classical theory before Keynes assumed that supply creates its own demand: whatever is produced generates enough income, somewhere in the system, to buy it. Keynes rejects this as a special case rather than a general law. A firm decides how much to produce and how many people to employ based on the revenue it expects from selling that output, not on the economy's physical capacity to produce it.",
    "Effective demand is the point where total spending firms expect to receive matches the cost of producing at a given level of output. Firms keep expanding output and hiring as long as expected receipts exceed cost, and stop, sometimes well short of full employment, once expected receipts flatten out. Nothing automatically pushes that stopping point up to where everyone willing to work is employed.",
    "This reverses the usual causal arrow. Employment depends on how much output firms expect to sell, built from consumption and investment spending, both of which can settle below what full capacity would require. An economy can sit for an extended period with idle workers and idle plant, and nothing internal to that equilibrium forces a correction."
  ],
  practical: {
    label: "Example: reading a slowdown",
    lead: "Separate a shortfall in expected spending from a shortfall in productive capacity.",
    bullets: [
      "Is output constrained by what firms can produce, or by what they expect to sell?",
      "Are firms holding spare capacity and headcount idle rather than expanding?",
      "What would have to change in buyer expectations, not in supply, to move output?",
      "Is idle capacity concentrated in sectors most exposed to a spending shortfall?",
      "Am I assuming a capacity constraint where the actual constraint is demand?"
    ]
  },
  application:
    "For an analyst reading a downturn, the question is whether growth across a portfolio is capped by a market's physical limits or by a shortfall in expected spending no single company can fix. A portfolio company can build a better product and still miss plan because the aggregate spending it depends on has settled below what its unit economics assumed, which points diligence toward macro exposure rather than execution.",
  models: ["feedback-loops", "opportunity-cost", "base-rates", "probability"],
  connections: [
    { to: "gt-multiplier-effect", type: "extends" },
    { to: "gt-saving-investment-imbalance", type: "reinforces" },
    { to: "gt-paradox-of-thrift", type: "reinforces" },
    { to: "tmit-cycles", type: "related" },
    { to: "cr-the-capital-cycle", type: "related" }
  ],
  quote: null
},

{
  id: "gt-paradox-of-thrift", num: 2, book_id: "gt", category: "decision-making",
  title: "The Paradox of Thrift",
  thesis: "If everyone tries to save more at once, total income can fall by enough that total saving does not rise.",
  reading_time: 2,
  explanation: [
    "For a single household, saving more is straightforwardly prudent: spend less than income, and wealth accumulates. Keynes's point is that this reasoning does not scale up to the whole economy, because one household's spending is another household's income. A widespread decision to spend less reduces the income of the businesses and workers who would otherwise have received that spending.",
    "As income falls in response, the reduced income itself constrains how much can be saved, even though the desire to save has gone up. Saving a larger share of a shrinking income can produce less total saving than a smaller share of the larger income that existed before the attempt began.",
    "The mechanism runs through output and employment. Businesses facing weaker sales cut production and staff, which lowers the wage income households have to save from in the first place. This does not make saving irrational for one household. It means a simultaneous, economy-wide shift toward caution can be self-defeating, because it removes the very income the extra saving was meant to be drawn from."
  ],
  practical: {
    label: "Example: spotting the fallacy of composition",
    lead: "Check whether a rule that works for one actor still works when every actor follows it at once.",
    bullets: [
      "Is this a sound individual decision, or does it depend on other people not doing the same thing?",
      "If spending across the board fell by this much, whose income would fall as a result?",
      "Is a simultaneous pullback in spending being read as a healthy shift toward caution?",
      "Does the drop in income undermine the very saving the pullback was meant to produce?",
      "What would restore spending without requiring any individual to spend against their own interest?"
    ]
  },
  application:
    "In a portfolio, a widespread pullback in discretionary spending by customers is not simply demand shifting to next quarter. Each company's caution about its own costs and hiring is a small version of the same withdrawal, and if enough portfolio companies cut simultaneously the combined effect can shrink the revenue pool all of them are competing for, which is worth separating from any single company's execution problem when reading a weak quarter across the book.",
  models: ["feedback-loops", "opportunity-cost", "base-rates", "probability"],
  connections: [
    { to: "gt-effective-demand", type: "reinforces" },
    { to: "gt-multiplier-effect", type: "reinforces" },
    { to: "gt-saving-investment-imbalance", type: "related" },
    { to: "cr-the-capital-cycle", type: "contrasts" },
    { to: "tmit-pendulum", type: "related" }
  ],
  quote: null
},

{
  id: "gt-liquidity-preference", num: 3, book_id: "gt", category: "decision-making",
  title: "Liquidity Preference Sets the Interest Rate",
  thesis: "The interest rate is the price of giving up cash for a period, set by how strongly people prefer to hold cash rather than by the balance of saving and investment.",
  reading_time: 3,
  explanation: [
    "The older view treats the interest rate as the price that equates saving with investment: it rises when investment demand exceeds available saving and falls when saving exceeds it. Keynes proposes a different mechanism. People hold wealth either as cash, which pays no return but is instantly usable, or as bonds and other assets, which pay a return but cannot always be converted to cash without cost or delay.",
    "The interest rate compensates a holder for giving up that usability. It is set where the supply of money matches the demand to hold money rather than other assets, and that demand is what Keynes calls liquidity preference. It rises when uncertainty is high or asset prices are expected to fall, and it falls when those pressures ease.",
    "This reframes monetary policy as an operation on the supply of money relative to the public's desire to hold it, rather than a direct dial on saving and investment. Adding money lowers the rate only to the extent it satisfies liquidity preference at the margin, which is why the rate can stay low without stimulating investment, or stay high even when saving looks abundant. The rate is pricing the reluctance to part with cash, not matching savers to borrowers."
  ],
  practical: {
    label: "Example: reading a rate move",
    lead: "Ask what is happening to the desire to hold cash before attributing a rate move to saving or investment alone.",
    bullets: [
      "Has the demand to hold cash risen because of higher uncertainty, or because saving genuinely increased?",
      "Is a rate cut failing to move investment because liquidity preference has hardened at the same time?",
      "What expectation about future asset prices is embedded in the current preference for cash?",
      "Is the money supply expanding faster than the demand for it is being satisfied?",
      "Does the rate move reflect a change in the price of patience, or a change in the price of certainty?"
    ]
  },
  application:
    "For venture and growth investing, the discount rate applied to future cash flows tracks liquidity preference as much as it tracks the underlying growth outlook, which is why valuations can compress sharply even when a company's own numbers have not deteriorated. Reading a rate cycle as a change in how strongly capital wants to stay liquid, rather than purely as a change in the supply of savings, gives a better account of why funding conditions can tighten well before any credit event forces them to.",
  models: ["liquidity-preference", "opportunity-cost", "feedback-loops", "probability"],
  connections: [
    { to: "gt-animal-spirits", type: "related" },
    { to: "gt-saving-investment-imbalance", type: "contrasts" },
    { to: "gt-uncertainty-vs-risk", type: "reinforces" },
    { to: "mck-wacc", type: "related" },
    { to: "mck-expectations-treadmill", type: "related" }
  ],
  quote: null
},

{
  id: "gt-animal-spirits", num: 4, book_id: "gt", category: "decision-making",
  title: "Animal Spirits in Investment Decisions",
  thesis: "Business investment rests partly on spontaneous confidence rather than a precise calculation of expected return, because the calculation cannot actually be done with the precision it appears to have.",
  reading_time: 3,
  explanation: [
    "A capital investment decision requires an estimate of returns stretching years into the future, over a period in which almost everything relevant is unknowable in any rigorous sense: future demand, future competitors, future costs. Keynes's observation is that businesses make these decisions anyway, and that the confidence to act, faced with an estimate that cannot really be made precise, comes from something other than the calculation itself.",
    "He calls this animal spirits: a spontaneous urge to act rather than wait, supplying the resolve that a purely rational weighing of an unknowable future could never supply alone. The more honestly anyone examined the true uncertainty involved, the less any investment would get made, since inaction carries no matching downside.",
    "This is not a claim that businesses are irrational. It is a claim that confidence does real economic work alongside calculation, and can collapse or recover for reasons only loosely tied to the fundamentals a formal model would treat as the whole story. Aggregate investment is therefore less stable than a model built purely on expected returns would predict, because part of what drives it moves in waves that calculation does not explain and cannot fully restrain."
  ],
  practical: {
    label: "Example: separating sentiment from the numbers",
    lead: "Identify how much of a given investment appetite is arithmetic and how much is mood.",
    bullets: [
      "Has the underlying arithmetic changed, or has confidence changed while the arithmetic held steady?",
      "Would this investment still clear the bar if optimism about the environment were removed from the estimate?",
      "Is a wave of enthusiasm across a sector being mistaken for a wave of improved fundamentals?",
      "What would have to happen to confidence, not to the numbers, to reverse this decision?",
      "Am I relying on the same spontaneous confidence I am trying to assess objectively?"
    ]
  },
  application:
    "Venture funding cycles are a clean illustration: capital availability and founder willingness to start companies both swing with confidence well beyond what any change in addressable market or unit economics would justify, and the same company can be fundable in one year and unfundable in the next with its own numbers largely unchanged. Recognising which part of a deployment pace is animal spirits, rather than an improved read on returns, is useful for deciding when to lean against the prevailing mood rather than with it.",
  models: ["animal-spirits", "feedback-loops", "probability", "liquidity-preference"],
  connections: [
    { to: "gt-uncertainty-vs-risk", type: "reinforces" },
    { to: "gt-liquidity-preference", type: "related" },
    { to: "tmit-pendulum", type: "reinforces" },
    { to: "tbs-forecasting-limits", type: "related" },
    { to: "mvcg-pitch-as-uncertainty-reduction", type: "contrasts" }
  ],
  quote: null
},

{
  id: "gt-multiplier-effect", num: 5, book_id: "gt", category: "decision-making",
  title: "The Multiplier Effect",
  thesis: "New spending becomes someone else's income, part of which is spent again, so an injection into the economy raises total income by more than the original amount.",
  reading_time: 2,
  explanation: [
    "When a pound of new spending occurs, it becomes income for whoever receives it, whether a worker, a supplier or a landlord. That recipient in turn spends a portion of the new income, which becomes income for the next recipient, and so on. Each round is smaller than the last because some of every pound received is saved rather than spent, but the rounds accumulate.",
    "The size of the total effect depends on how much of each additional pound of income is spent again rather than saved. A higher propensity to spend produces a larger multiplier, because less leaks out of the chain at each round, while a higher propensity to save produces a smaller one.",
    "The same logic runs in reverse: a withdrawal of spending contracts income by more than the initial amount, because the first recipient's lower income lowers their own spending, and the contraction compounds through the same chain. A relatively small initial change in spending can therefore produce a much larger change in total output, and a one-off burst that is not sustained produces a smaller cumulative effect than a steady flow."
  ],
  practical: {
    label: "Example: tracing the second-round effects",
    lead: "Follow spending through at least one further round before judging its total effect.",
    bullets: [
      "Where does this spending land as someone else's income, and what do they typically do with new income?",
      "What proportion of new income in this population tends to be spent rather than saved?",
      "Is this an isolated injection, or is it recurring enough to sustain successive rounds of re-spending?",
      "If this spending is withdrawn, whose income falls first, and where does the contraction spread?",
      "Am I measuring only the first-round effect and missing the rounds that follow?"
    ]
  },
  application:
    "A portfolio company's own revenue is frequently someone else's re-spent income rather than a fresh injection, which means a slowdown in one part of an economy can echo into adjacent sectors well beyond the original point of weakness. When underwriting a company exposed to a specific spending category, tracing where that category's spending has come from, and how many rounds of re-spending stand behind it, gives a better read on how a shock upstream will show up downstream than looking at the company's own demand signals alone.",
  models: ["multiplier-effect", "feedback-loops", "probability", "opportunity-cost"],
  connections: [
    { to: "gt-effective-demand", type: "reinforces" },
    { to: "gt-paradox-of-thrift", type: "related" },
    { to: "gt-saving-investment-imbalance", type: "related" },
    { to: "cr-the-capital-cycle", type: "related" },
    { to: "tii-market-history", type: "related" }
  ],
  quote: null
},

{
  id: "gt-sticky-wages", num: 6, book_id: "gt", category: "decision-making",
  title: "Why Wages Resist Falling",
  thesis: "Nominal wages adjust downward slowly and unevenly, and that stickiness is part of why unemployment can persist rather than clear quickly through lower pay.",
  reading_time: 3,
  explanation: [
    "A simple supply-and-demand account of the labour market predicts that unemployment should push wages down until everyone willing to work at the lower wage is hired. Keynes's observation is that this adjustment does not happen cleanly. Workers resist a cut to their own nominal pay far more strongly than they resist an equivalent fall in real pay achieved through prices rising while nominal pay holds steady.",
    "Part of the resistance is about relative position rather than absolute income. A worker usually accepts a general price rise that erodes everyone's purchasing power together, but resists a cut aimed specifically at their own wage, since it reads as a change in status rather than a shared adjustment. Employers are often reluctant to be first to cut nominal pay, since it damages morale and can drive away the most capable staff.",
    "Even where a cut is agreed, it need not solve the aggregate problem. Lower wages across an economy reduce the income available for spending, which lowers demand for what labour produces, leaving employment no better off, echoing the mechanism behind the paradox of thrift. Unemployment can therefore settle well above what a frictionless labour market would produce, and stay there, since whatever restores employment has to work through demand for output rather than the price of labour."
  ],
  practical: {
    label: "Example: reading a labour market stuck below full employment",
    lead: "Check whether wage stickiness, rather than wage levels, is the actual constraint on hiring.",
    bullets: [
      "Are nominal wages actually falling in response to unemployment, or holding roughly flat?",
      "If a wage cut were imposed, would the resulting fall in spending offset the intended effect on hiring?",
      "Is resistance to a pay cut about the amount, or about relative standing against other workers?",
      "Is the employer reluctant to cut pay for reasons unrelated to what the market wage should be?",
      "Would restoring demand for output do more to reduce unemployment than any feasible wage adjustment?"
    ]
  },
  application:
    "When a portfolio company faces a downturn, headcount cost typically gets addressed through layoffs rather than uniform pay cuts, and that pattern is the same stickiness at work: cutting everyone's pay is harder to execute and retain talent through than reducing the number of people employed. Reading unemployment data or hiring freezes across a sector as evidence of weak demand for output, rather than as evidence that wages are simply too high, is usually the more accurate diagnosis.",
  models: ["feedback-loops", "loss-aversion", "base-rates", "opportunity-cost"],
  connections: [
    { to: "gt-effective-demand", type: "reinforces" },
    { to: "gt-paradox-of-thrift", type: "related" },
    { to: "loss-aversion", type: "reinforces" },
    { to: "tfs-endowment", type: "related" },
    { to: "tmit-cycles", type: "related" }
  ],
  quote: null
},

{
  id: "gt-saving-investment-imbalance", num: 7, book_id: "gt", category: "decision-making",
  title: "Saving and Investment Do Not Automatically Balance",
  thesis: "There is no automatic mechanism that equates planned saving with planned investment at the level of output that would fully employ the workforce.",
  reading_time: 3,
  explanation: [
    "In the older framework, saving and investment are brought into balance by the interest rate: if people want to save more than businesses want to invest, the rate falls until investment rises and saving falls to match. Keynes accepts that saving and investment are always equal after the fact, as an accounting identity, but denies that this equality has anything to do with full employment.",
    "The reconciliation happens through changes in total income and output, not through the interest rate settling at a level. If households want to save more than businesses plan to invest, the shortfall in spending reduces output and income, which reduces saving until it again matches investment, exactly as the paradox of thrift describes. Nothing in that adjustment guarantees it happens at full employment rather than well below it.",
    "This removes a load-bearing assumption of the older view: that an economy left alone gravitates to full use of its resources because prices and rates do the equilibrating work. Keynes's claim is that output and employment themselves are usually the equilibrating variable, so an economy can find a stable resting point with substantial unemployment that persists rather than self-corrects, and does not fix itself simply by waiting."
  ],
  practical: {
    label: "Example: checking whether an economy will self-correct",
    lead: "Test whether a shortfall in demand is being closed through falling output rather than through rates or prices.",
    bullets: [
      "Is planned investment currently below what households would want to save if the economy were at full employment?",
      "Is the gap being closed through falling income and output, rather than through a falling interest rate reviving investment?",
      "What specifically would raise investment demand back to the level consistent with full employment?",
      "Is the assumption that the economy will self-correct resting on an interest-rate mechanism that is not actually operating?",
      "How long has output settled below capacity without a visible corrective force?"
    ]
  },
  application:
    "For a fund reading macro conditions, the useful question is not whether saving and investment are equal, which they always are by definition, but whether the level of income at which they are equal is one with idle capacity in it. A prolonged period of soft growth despite low rates is consistent with investment demand simply not responding, which argues for treating a rate cut as insufficient on its own to revive portfolio company growth, rather than assuming lower rates mechanically restore full activity.",
  models: ["feedback-loops", "liquidity-preference", "probability", "opportunity-cost"],
  connections: [
    { to: "gt-liquidity-preference", type: "reinforces" },
    { to: "gt-paradox-of-thrift", type: "reinforces" },
    { to: "gt-effective-demand", type: "extends" },
    { to: "cr-the-capital-cycle", type: "contrasts" },
    { to: "mck-wacc", type: "related" }
  ],
  quote: null
},

{
  id: "gt-uncertainty-vs-risk", num: 8, book_id: "gt", category: "decision-making",
  title: "Uncertainty That Cannot Be Priced as Risk",
  thesis: "Some of the most important economic decisions rest on a genuine uncertainty that has no known probability distribution, which is different from an ordinary risk that can be priced.",
  reading_time: 3,
  explanation: [
    "Keynes draws a distinction that matters for how confidently anyone should hold a forecast. An ordinary risk, such as the outcome of a roulette wheel or an actuarially stable event, can be assigned a probability from known frequencies. Many of the things that matter most to a long-lived investment, such as where an industry will be in twenty years, have no comparable frequency to draw on.",
    "About questions of this kind, Keynes's position is that there is, strictly speaking, no scientific basis for a calculable probability at all. There is not enough stable, repeatable structure behind the event for a distribution to mean anything, and treating such a judgement as though it carried the same status as a priced risk is a kind of false precision.",
    "This is not a counsel of paralysis. People still have to decide, and Keynes's answer, tied to animal spirits, is that they rely on convention: treating the present as a reasonably reliable guide to the future and assuming existing expectations will not be radically upset, absent any better basis. This is why confidence can be more fragile than a risk-based model suggests: a shift in what others appear to believe can overturn a convention-based judgement far more abruptly than new information overturns a properly calculated probability."
  ],
  practical: {
    label: "Example: telling risk apart from genuine uncertainty",
    lead: "Ask whether a stable frequency actually exists behind a probability being used in a decision.",
    bullets: [
      "Is there a real historical frequency behind this probability, or is it a guess dressed as a number?",
      "Am I treating a genuinely novel situation as though it had the same evidential basis as an actuarial one?",
      "How much of my confidence rests on convention, meaning an assumption that things will continue roughly as they are?",
      "What specific piece of news could overturn this view abruptly, given that it was never based on a calculation?",
      "Would I size this decision differently if I admitted the probability attached to it is not really known?"
    ]
  },
  application:
    "Long-dated venture bets on new categories are a clear case of genuine uncertainty rather than priceable risk, and the honest response is to size positions for that admission rather than produce a false-precision return model. Recognising when a forecast is really a convention, resting on current sentiment holding, helps identify which parts of a portfolio thesis are most exposed to a change in prevailing belief rather than to any new fact.",
  models: ["probability", "animal-spirits", "liquidity-preference", "feedback-loops"],
  connections: [
    { to: "gt-animal-spirits", type: "reinforces" },
    { to: "gt-liquidity-preference", type: "related" },
    { to: "tbs-black-swan", type: "related" },
    { to: "tbs-problem-of-induction", type: "reinforces" },
    { to: "fbr-probability-vs-expectation", type: "related" },
    { to: "tbs-forecasting-limits", type: "reinforces" }
  ],
  quote: null
}

);
