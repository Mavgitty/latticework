/* One Up on Wall Street — Peter Lynch — 9 ideas */
window.DB.ideas.push(

{
  id: "ouww-amateur-edge", num: 1, book_id: "ouww", category: "investing",
  title: "The Amateur's Advantage",
  thesis: "An attentive amateur sees ordinary commercial evidence early and faces none of the constraints professionals do.",
  reading_time: 3,
  explanation: [
    "Lynch's claim rests on a mundane observation: most people encounter commercial evidence before it reaches a filing. The product that is suddenly hard to buy, the store that has queues on a Tuesday, the supplier that has started hiring, the software everyone at work has quietly begun using. None of this is privileged information. It is ordinary experience, and it arrives months before the figures that describe it.",
    "The second advantage is structural rather than informational. An individual has no mandate, no quarterly comparison against peers, no committee to satisfy and no minimum position size. That set of freedoms permits three things a professional often cannot do: own a company too small to be worth an institution's time, hold through several years of nothing happening, and hold cash when nothing on the list is attractive.",
    "The advantage is fragile because it is only a source of candidates. Noticing that a product is selling well says nothing about the price, the balance sheet or how much of the growth is already paid for. Lynch is explicit that the observation earns you the right to do the work rather than the right to skip it, and most of the amateur's real disadvantage is skipping it."
  ],
  practical: {
    label: "Example: turning an observation into a candidate",
    lead: "Treat what you notice at work or as a customer as the start of a shortlist, never as a decision.",
    bullets: [
      "What have I seen working, and how would I know if it is more than local?",
      "Is this observation about the company that captures the value, or about its supplier?",
      "How much of what I noticed is already reflected in the price?",
      "What would I have to check before this became a position?",
      "Am I acting on what I saw, or on the excitement of having seen it?"
    ]
  },
  application:
    "The private-market analogue is operator and customer contact before a round is priced. A reference call with a user who has already renewed twice is ordinary evidence available to anyone who asks, and it arrives well before the metrics pack. The freedom half matters as much: a small fund can hold cash, pass on an entire quarter, and own a company no larger fund could size a position in.",
  models: ["circle-of-competence", "scuttlebutt", "opportunity-cost", "incentives"],
  connections: [
    { to: "ouww-institutional-constraints", type: "contrasts" },
    { to: "ouww-perfect-company", type: "extends" },
    { to: "circle-of-competence", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "reinforces" },
    { to: "tii-defensive-enterprising", type: "related" }
  ],
  quote: null
},

{
  id: "ouww-institutional-constraints", num: 2, book_id: "ouww", category: "people",
  title: "What the Professionals Cannot Buy",
  thesis: "Fund managers are constrained by size, rules and career risk rather than by a lack of insight.",
  reading_time: 3,
  explanation: [
    "Size is the first constraint and it is arithmetic. A fund with billions to deploy needs positions large enough to affect the result and liquid enough to exit, which removes every company below a certain market value from consideration regardless of how good it is. The universe available to a large manager is a small fraction of the universe available to someone investing their own money.",
    "The remaining constraints are behavioural and contractual. Holdings are reported and compared quarterly, unconventional losses are punished far more heavily than conventional ones, and every unusual purchase has to be defended to people who did not do the research. The rational response to that incentive structure is to own what is already respectable, which is exactly the set of companies where expectations are highest.",
    "None of this is a criticism of individuals. It describes a system, and the system produces a predictable pattern: institutional interest arrives after a company has become obviously good and leaves when it becomes obviously troubled, both times in size. The useful conclusion is to know which of these constraints apply to you, because most arrive with scale rather than with a job title."
  ],
  practical: {
    label: "Example: naming your own constraints",
    lead: "Write down the limits that actually govern what you can own, then check which of them are real.",
    bullets: [
      "What is the smallest position size that is worth the work for me?",
      "Which reporting period am I actually judged over, and by whom?",
      "Would an unconventional loss cost me more than a conventional one?",
      "Which of my constraints come from the mandate and which from habit?",
      "Where are the professionals structurally unable to compete with me?"
    ]
  },
  application:
    "Fund size decides strategy far more than taste does. A cheque size and an ownership target set the stage you can invest at, and a large fund cannot do seed work whatever its partners prefer. The same logic governs behaviour inside the firm: if unconventional losses are discussed at every partners meeting and conventional ones are not, the portfolio will drift towards deals that are easy to defend.",
  models: ["incentives", "social-proof", "authority-bias", "opportunity-cost"],
  connections: [
    { to: "ouww-amateur-edge", type: "contrasts" },
    { to: "ouww-tenbagger", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "tos-ignore-the-street", type: "reinforces" },
    { to: "tpl-late-stage-drift", type: "related" }
  ],
  quote: null
},

{
  id: "ouww-six-categories", num: 3, book_id: "ouww", category: "investing",
  title: "Six Kinds of Company",
  thesis: "Sort a company into its type before valuing it, because the type dictates the entire analysis.",
  reading_time: 3,
  explanation: [
    "Lynch sorts companies into six kinds before any valuation work: slow growers, stalwarts, fast growers, cyclicals, turnarounds and asset plays. The sorting keys are simple, mostly the growth rate of earnings, the size of the company relative to its market, the state of the balance sheet and whether the business follows an economic cycle. The classification takes minutes and it governs everything after it.",
    "Each type is owned for a different reason and fails in a different way. A stalwart is owned for a modest reliable return and is ruined by paying too much. A cyclical is owned for the recovery in its own cycle and is ruined by mistaking the peak for a permanent improvement. A turnaround is owned for survival and re-rating, and the balance sheet decides whether it gets the time.",
    "Categories also migrate, which is where most of the error lives. A fast grower that has saturated its market becomes a stalwart, and a stalwart carrying too much debt into a downturn behaves like a cyclical. Holding the original label after the company has moved produces the wrong benchmark, the wrong expectation about growth and the wrong reason to sell."
  ],
  practical: {
    label: "Example: sorting before valuing",
    lead: "Assign the category first, then apply the benchmarks and the sell rule that belong to it.",
    bullets: [
      "Which of the six categories does this company sit in today?",
      "What growth rate and multiple are normal for that category?",
      "Has it moved category since I first formed a view?",
      "Am I applying a fast grower's expectations to a stalwart?",
      "What is the specific failure mode for this category?"
    ]
  },
  application:
    "The equivalent discipline is refusing to apply one benchmark set across different business types. A capital-light software compounder, a marketplace, a hardware business and a services roll-up have different plausible growth rates, margin structures and exit routes, and a single template flatters some and penalises others. Typing the company first, then choosing the benchmarks, prevents most of the arguments about whether a given metric is good.",
  models: ["checklist", "base-rates", "market-cycles", "intrinsic-value"],
  connections: [
    { to: "ouww-when-to-sell", type: "extends" },
    { to: "ouww-pe-and-growth", type: "reinforces" },
    { to: "csup-fifteen-points", type: "related" },
    { to: "tmit-cycles", type: "related" },
    { to: "base-rates", type: "related" }
  ],
  quote: null
},

{
  id: "ouww-tenbagger", num: 4, book_id: "ouww", category: "investing",
  title: "The Tenbagger",
  thesis: "A few positions that multiply many times over decide the result of a whole portfolio.",
  reading_time: 3,
  explanation: [
    "The word is Lynch's for a position that returns ten times what was paid. Its relevance is arithmetic rather than romantic: in a portfolio of ten positions, one tenfold gain covers total losses on the other nine and still leaves the portfolio ahead. The cost of an error is bounded at the amount committed, while the benefit of being right has no equivalent ceiling.",
    "The consequence is that most of the work goes into not interrupting the few that are working. A position that eventually multiplies passes through several stages of looking expensive, and each one is an invitation to take the gain. Selling a double feels like discipline and it is the main way the result is lost, because the remaining nine positions cannot carry the portfolio alone.",
    "The other consequence is where to look. A tenfold gain requires the earnings to grow several times over, which is available in a small company with an unfinished market and rarely available in a large one, where the same multiple would demand an implausible share of world output. Size is the ceiling on the outcome, and it is worth checking before the story."
  ],
  practical: {
    label: "Example: protecting the few that work",
    lead: "Decide in advance what would make you sell a large winner, and make the condition about the business.",
    bullets: [
      "Which position, if it multiplied several times, would change my whole result?",
      "Do any holdings have room for earnings to grow several times over?",
      "Am I about to sell this because of the price or because of the business?",
      "What is the size ceiling on this company's plausible outcome?",
      "Have I trimmed a winner in the last year, and was I right?"
    ]
  },
  application:
    "Venture returns are the extreme version of this arithmetic, which makes reserve policy the central decision. Reserves committed to the positions that are working, plus the discipline to decline early secondary sales in them, do more for a fund than any improvement in initial selection. The matching discipline at entry is a size test: whether this company can plausibly become large enough to matter to the fund.",
  models: ["power-law", "fat-tails", "compounding", "optionality"],
  connections: [
    { to: "ouww-six-categories", type: "extends" },
    { to: "ouww-when-to-sell", type: "contrasts" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "pom-tails-drive-everything", type: "reinforces" },
    { to: "tii-diversification", type: "contrasts" }
  ],
  quote: null
},

{
  id: "ouww-perfect-company", num: 5, book_id: "ouww", category: "strategy",
  title: "The Perfect Company",
  thesis: "The most attractive candidates combine a dull surface with a niche business and reasons to be ignored.",
  reading_time: 3,
  explanation: [
    "Several of Lynch's preferred traits concern neglect rather than quality. A dull or awkward name, an unglamorous activity, a recent spinoff nobody has covered yet, no analyst following, little institutional ownership. None of these make a business better. They make it more likely that the price has not already absorbed the good news, which is the only condition under which good news pays you anything.",
    "The rest concern the business itself. A niche that nobody profitable wants to contest, a product bought repeatedly rather than once, low capital intensity, and a company that buys technology rather than one obliged to keep inventing it. Each trait describes a business whose earnings can grow without a matching growth in the capital and the heroics required to produce them.",
    "Two behavioural signals sit alongside those. Insiders buying shares with their own money, and the company buying its own shares at a sensible price. Insiders sell for many reasons and buy for one. Neither signal is a thesis on its own, and the list as a whole generates candidates rather than substituting for the work of deciding what the thing is worth."
  ],
  practical: {
    label: "Example: building the candidate list",
    lead: "Screen for the traits that suggest neglect, then test the business behind them before going any further.",
    bullets: [
      "Who else is looking at this, and who publishes research on it?",
      "Is the product bought once, or bought again every month?",
      "Does the business need constant invention to hold its position?",
      "Have insiders bought shares with their own money in the last year?",
      "Am I mistaking obscurity for opportunity in a business that is simply bad?"
    ]
  },
  application:
    "The private analogue of neglect is a round that is not an auction: an unfashionable sector, a company raising off cycle, a founder who has not hired a bank. The business traits translate directly, with repeat purchase reading as net revenue retention and low capital intensity as a working capital cycle that does not consume the raise. Insider buying reads as founders and existing investors taking their pro rata.",
  models: ["monopoly", "switching-costs", "return-on-capital", "incentives"],
  connections: [
    { to: "ouww-numbers-that-matter", type: "extends" },
    { to: "ouww-amateur-edge", type: "related" },
    { to: "csup-fifteen-points", type: "related" },
    { to: "zto-small-market", type: "related" },
    { to: "tos-buybacks", type: "related" }
  ],
  quote: null
},

{
  id: "ouww-two-minute-story", num: 6, book_id: "ouww", category: "decision-making",
  title: "The Two Minute Story",
  thesis: "If the reason for owning something cannot be said plainly in two minutes, it is not understood.",
  reading_time: 2,
  explanation: [
    "The test is that you can state, without notes, what the company does, what has to happen for its earnings to be materially larger in a few years, what would prevent that, and what the current price already assumes. Two minutes is enough for all four when the reasoning is real, and never enough when the position rests on a chart or on somebody else's conviction.",
    "Length is usually a symptom. A case that needs twenty minutes and four charts often has no mechanism in it, and the extra material is there to produce the feeling of rigour rather than to support a claim. Compression forces the causal step into the open, where it can be examined by somebody else and disagreed with on its merits.",
    "The story is also the monitoring instrument. Written down at purchase, it gives you something specific to check against events, so a change in the business stays distinguishable from a change in the price. When the story that justified the position is no longer the story you would tell today, that is a decision point rather than a footnote."
  ],
  practical: {
    label: "Example: the two minute test",
    lead: "Say the case out loud to somebody with no context, time it, and notice where you reach for jargon.",
    bullets: [
      "What does this company do, in one sentence a non-specialist would follow?",
      "What specifically has to happen for earnings to be much larger?",
      "What would stop that, and how would I see it early?",
      "What does the current price already assume about all of this?",
      "Where in the telling did I resort to jargon or to somebody else's authority?"
    ]
  },
  application:
    "This is the first paragraph of an investment memo, and it is a fair test of whether the rest is worth writing. A committee paper that takes four pages to reach the mechanism usually does not have one. The monitoring use is stronger still: the memo becomes the document a follow-on decision is checked against, which makes a quiet drift in the thesis visible rather than gradual.",
  models: ["circle-of-competence", "narrative-fallacy", "implied-expectations", "checklist"],
  connections: [
    { to: "ouww-six-categories", type: "related" },
    { to: "ouww-when-to-sell", type: "reinforces" },
    { to: "tmit-second-level", type: "related" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "contrasts" }
  ],
  quote: null
},

{
  id: "ouww-pe-and-growth", num: 7, book_id: "ouww", category: "investing",
  title: "The Multiple Against the Growth Rate",
  thesis: "A multiple means nothing until it is read against the growth rate the earnings actually support.",
  reading_time: 2,
  explanation: [
    "The rule of thumb is to compare the multiple with the growth rate of earnings, treating a company growing at twenty per cent on a multiple of twenty as roughly fairly priced, cheap below that and expensive above. Its usefulness is not precision. It converts an abstract number into a specific claim about how fast the earnings have to grow to justify the price.",
    "As a valuation method it is crude. It treats a year of growth from a durable business and a year from a fragile one as equivalent, ignores how much capital the growth consumes, and says nothing about how long the rate can persist. Lynch uses it as a first sort rather than as an answer, which is the right weight to give it.",
    "Read the other way it is a statement about expectations. A high multiple is not itself a problem and a low one is not itself an opportunity. The question is whether the rate implied by the price has ever been sustained by a comparable business for the number of years the price quietly requires it to be sustained."
  ],
  practical: {
    label: "Example: reading the multiple",
    lead: "Put the multiple next to the growth rate, then ask what rate the price is requiring and for how long.",
    bullets: [
      "What growth rate does this multiple imply, and over how many years?",
      "What rate has the company actually delivered over the last five years?",
      "How much capital does each point of that growth consume?",
      "Which comparable business has sustained this rate for that long?",
      "Am I calling the multiple cheap or expensive without reference to growth?"
    ]
  },
  application:
    "Applied to growth companies the multiple in question is usually revenue rather than earnings, and the same discipline holds. A revenue multiple compared against the growth rate and the retention behind it tells you whether the price is asking for something that has been done before. If the entry price requires four years at a rate almost nobody sustains for two, the rate is the thesis.",
  models: ["implied-expectations", "regression", "base-rates", "intrinsic-value"],
  connections: [
    { to: "ouww-tenbagger", type: "related" },
    { to: "ouww-numbers-that-matter", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "tmit-price-is-everything", type: "reinforces" },
    { to: "regression-to-the-mean", type: "related" }
  ],
  quote: null
},

{
  id: "ouww-numbers-that-matter", num: 8, book_id: "ouww", category: "investing",
  title: "The Numbers Worth Checking",
  thesis: "A short list of figures tells you whether the story can survive a bad year.",
  reading_time: 3,
  explanation: [
    "The list is short: cash and marketable securities per share, total debt with its maturities, inventories relative to sales, the gross and net margin trend over several years, and the proportion of revenue coming from the product the story is actually about. None of these require a model. Most can be assembled in an afternoon with the annual accounts and a calculator.",
    "Each answers a specific question. Net cash sets a floor beneath the price and sometimes accounts for much of it. Debt decides whether a struggling business gets time to recover or is handed to its lenders. Rising inventories are the earliest honest signal that a product has stopped selling. The margin trend shows whether pricing power is holding or being competed away.",
    "The checks are read as trends and against peers rather than as levels, and their main function is disqualification. They are cheap enough to run before any serious work, so a company that fails them is removed while the cost of removing it is still low. Most of the value of a fixed list lies in the candidates it stops you from studying."
  ],
  practical: {
    label: "Example: an afternoon with the accounts",
    lead: "Run the same short set of checks on every candidate, before spending real time on the story.",
    bullets: [
      "What is net cash per share, and how much of the price is it?",
      "What debt is there, when does it fall due, and to whom?",
      "Are inventories growing faster than sales, and for how long?",
      "What has happened to gross and net margin over five years?",
      "Which of these figures would remove this candidate from the list?"
    ]
  },
  application:
    "The private-market list differs in content and matches in function: cash and months of runway, the burn required per unit of new revenue, the definition behind the reported gross margin, receivables and deferred revenue, and the concentration of revenue in the largest customers. Each check is cheap, each has removed a deal before, and running them early is the difference between a short diligence and an expensive one.",
  models: ["accounting-quality", "free-cash-flow", "checklist", "margin-of-safety"],
  connections: [
    { to: "ouww-perfect-company", type: "reinforces" },
    { to: "ouww-six-categories", type: "related" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "fsh-cash-versus-earnings", type: "related" },
    { to: "csup-margins", type: "related" }
  ],
  quote: null
},

{
  id: "ouww-when-to-sell", num: 9, book_id: "ouww", category: "investing",
  title: "When to Sell Each Kind",
  thesis: "The reason to sell depends on the category, and a rising price is not one of them.",
  reading_time: 3,
  explanation: [
    "The exit condition belongs to the category. A stalwart is sold when its multiple has run well ahead of its growth. A cyclical is sold as costs and inventories build into a peak, not when the news is worst. A fast grower is sold when the expansion that drove it runs out of places to go. An asset play ends at realisation and a turnaround ends when it has become ordinary.",
    "What those conditions have in common is that they refer to the business. The two commonest sell decisions refer instead to the entry price: taking a gain because the position has doubled, and adding to a loss because it has to come back. Both treat the price paid as information about value, and the price paid is the one number with no bearing on value at all.",
    "The alternative to a rule is rotation for its own sake, which is expensive and feels productive. Two reasons to sell survive examination: the story has broken, or a materially better story needs the capital. Anything else is usually the discomfort of watching a price move, and discomfort is a reason to look away rather than a reason to act."
  ],
  practical: {
    label: "Example: writing the sell rule",
    lead: "Set the exit condition when you buy, phrased in terms of the business rather than the price.",
    bullets: [
      "What specifically would tell me this story has stopped working?",
      "Which category is this, and what is the standard exit for it?",
      "Am I selling because of the business or because of my entry price?",
      "Is there a materially better use for this capital right now?",
      "Would I buy this again today at this price, knowing what I know?"
    ]
  },
  application:
    "In an illiquid portfolio the same decision appears as follow-on, secondary and hold-to-exit. The category logic transfers: a compounder is held while the reinvestment runway is open, a cyclical business is trimmed into strength rather than out of weakness, and a stalled company is a source of capital rather than a source of hope. Writing the condition at entry is what makes the later decision arguable.",
  models: ["endowment", "anchoring", "opportunity-cost", "decision-quality"],
  connections: [
    { to: "ouww-six-categories", type: "extends" },
    { to: "ouww-tenbagger", type: "contrasts" },
    { to: "csup-when-to-sell", type: "related" },
    { to: "selectivity", type: "related" },
    { to: "tfs-reference-points", type: "contrasts" }
  ],
  quote: null
}

);
