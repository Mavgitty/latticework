/* You Can Be a Stock Market Genius — Joel Greenblatt — 8 ideas */
window.DB.ideas.push(

{
  id: "ycbsmg-where-mispricing-survives", num: 1, book_id: "ycbsmg", category: "investing",
  title: "Where Mispricing Survives",
  thesis: "Corporate events create sellers who are not judging value, and that is where opportunity concentrates.",
  reading_time: 3,
  explanation: [
    "Prices are approximately right where many well resourced people compete to set them, which is most of the time in large liquid securities. Corporate events interrupt that competition. A spin-off, a reorganisation or a merger hands new securities to holders who never chose them, in quantities too small to matter to the institutions receiving them, at a moment when nobody is paid to have an opinion about what they are worth.",
    "Three mechanics do the work. Mandates force sales, because a fund permitted to hold only large companies must dispose of a small one it has been given. Indifference does the rest, since the recipient did not ask for the position, does not know the business and sells at whatever the screen shows. Index exclusion removes the buyer of last resort, so supply arrives with no matching demand behind it.",
    "What makes this useful rather than merely interesting is that the events are documented. There is a filing, a timetable, a capital structure and a set of insider arrangements, all published before the price settles. The work is reading rather than forecasting, and few people do it, because the situations are small, awkwardly shaped and impossible to cover systematically from a desk that must produce views on everything."
  ],
  practical: {
    label: "Example: finding the forced seller",
    lead: "Before analysing the business, work out who is selling it and whether their reason has anything to do with value.",
    bullets: [
      "Who received this security without choosing it, and what will they do with it?",
      "Does any mandate or size rule compel a holder to sell regardless of price?",
      "Is the security in an index, and does anyone publish research on it?",
      "Does the selling have a deadline, and what does the price do afterwards?",
      "Am I early because I did the reading, or late because everyone did?"
    ]
  },
  application:
    "The private analogue is any asset that arrives with an unwilling owner: secondaries sold for liquidity rather than valuation, positions held by a fund past the end of its life, orphaned companies in a wind-down, divisions a corporate parent has decided are no longer strategic. In each case the seller's constraint is visible and separable from the asset's prospects, and that separation is the whole of the opportunity.",
  models: ["special-situations", "mr-market", "second-level-thinking", "contrarian"],
  connections: [
    { to: "ycbsmg-spin-off-selling", type: "extends" },
    { to: "ycbsmg-merger-securities", type: "extends" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "tmit-patient-opportunism", type: "reinforces" },
    { to: "selectivity", type: "related" }
  ],
  quote: null
},

{
  id: "ycbsmg-spin-off-selling", num: 2, book_id: "ycbsmg", category: "investing",
  title: "Why Spin-offs Get Dumped",
  thesis: "Spin-off shares are distributed rather than bought, so the first sellers are people with no view.",
  reading_time: 3,
  explanation: [
    "A spin-off arrives as a distribution. Holders of the parent wake up owning a smaller company they did not research and cannot easily size. Some receive a position worth a rounding error on the portfolio. Nobody has pitched them the story, because there is no offering and therefore nobody being paid to pitch it, so early trading is dominated by people deciding what to discard.",
    "The sellers have reasons and none of them are valuation. A large-company fund cannot keep the small one. An income fund loses its dividend. Index funds sell because the new entity is not in the index they track. Analysts who covered the parent have no mandate to cover a business a tenth of the size. The result is a supply of shares priced by convenience.",
    "The correction is not instant, which is what makes the position workable rather than a race. Attention arrives with the first reported quarter as a standalone company, with the first coverage, with eventual index inclusion. Until then the price reflects the disposition of the sellers, and a buyer who has read the information statement is competing against people who have not opened it."
  ],
  practical: {
    label: "Example: watching the distribution",
    lead: "Treat the first weeks of trading as a supply event, and ask who is still holding once it clears.",
    bullets: [
      "How large is the spun-off entity relative to the parent, and to typical holders?",
      "Which holders of the parent are structurally unable to keep this position?",
      "Has anyone published anything, or is the information statement the only source?",
      "When does forced selling exhaust, and what is the price doing around it?",
      "Would I want this business at this price if it had been floated normally?"
    ]
  },
  application:
    "Distributions in kind create the same effect in private portfolios. Limited partners receive listed positions they never underwrote and often sell at whatever the first bid is. The same applies to tail assets moved into a continuation vehicle and to a division an acquirer inherited and does not want. In each case the seller's timetable is the reason for the price, and the timetable is knowable in advance.",
  models: ["special-situations", "mr-market", "incentives", "base-rates"],
  connections: [
    { to: "ycbsmg-where-mispricing-survives", type: "extends" },
    { to: "ycbsmg-reading-a-spin-off", type: "related" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "incentives", type: "related" },
    { to: "tmit-patient-opportunism", type: "related" }
  ],
  quote: null
},

{
  id: "ycbsmg-reading-a-spin-off", num: 3, book_id: "ycbsmg", category: "investing",
  title: "Reading a Spin-off",
  thesis: "The useful questions are who benefits, what becomes visible, and what the parent was starving.",
  reading_time: 3,
  explanation: [
    "The information statement is the document, and management incentives are the first thing to read in it. Option grants, the size of the equity pool and whether the new executives are taking stock rather than cash all say something about why the separation is happening and what the people running it expect from it. Where insiders arrange to own a large share of a small company, they usually have a reason.",
    "Separation also produces disclosure that did not previously exist. A division inside a consolidated group has no statements of its own, so its assets, margins and capital needs are invisible. The first standalone accounts can reveal property carried at cost, accumulated tax losses, or a profitable segment that was being netted against a weak sibling. None of this is secret. It is simply being published for the first time.",
    "Then ask what the parent was doing to it. A unit competing for capital against a favoured division is usually underinvested, and independence changes that quickly. The opposite case matters just as much, because some separations exist to move a declining business or an awkward liability off the parent's books, and the same document usually tells you which of the two you are being handed."
  ],
  practical: {
    label: "Example: reading the information statement",
    lead: "Work through the filing with three questions in mind: who gains, what is newly visible, and what changes once it is independent.",
    bullets: [
      "What is management paid on, and are insiders taking equity rather than cash?",
      "What assets or tax attributes appear now that were invisible inside the parent?",
      "Was this unit starved of capital, and what would sensible reinvestment do?",
      "Is the parent shedding a liability, a declining business, or a good asset?",
      "Why this structure, and why now, in the parent's own words?"
    ]
  },
  application:
    "Corporate carve-outs present exactly this document problem. The unit has never had its own accounts, the allocated overhead is an accounting convention rather than a real cost, and the management team is being offered meaningful equity for the first time. The work is separating genuine underinvestment, which new capital can fix, from structural decline the parent has chosen to hand over. The transition services agreement often tells you more than the model.",
  models: ["incentives", "special-situations", "capital-allocation", "accounting-quality"],
  connections: [
    { to: "ycbsmg-spin-off-selling", type: "extends" },
    { to: "ycbsmg-partial-spin-offs", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "tos-capital-allocation", type: "related" },
    { to: "fsh-governance-signals", type: "related" }
  ],
  quote: null
},

{
  id: "ycbsmg-partial-spin-offs", num: 4, book_id: "ycbsmg", category: "investing",
  title: "Partial Spin-offs and Rights",
  thesis: "Half-finished separations and offers that require action both produce discounts out of pure inertia.",
  reading_time: 2,
  explanation: [
    "A partial separation lists a minority of a subsidiary and keeps the rest, usually with a stated intention to complete later. This creates something unusual: a public price for one piece of a company whose parent still trades as a single line. Subtract the market value of the retained stake from the parent's own value and the remainder is sometimes implausibly small, which is a claim about the market rather than about the business.",
    "Rights offerings work on the opposite failure. Instead of receiving something they did not ask for, holders are offered the chance to buy more, usually at a discount, and must take a deliberate step to do it. A meaningful proportion never open the envelope. The rights themselves trade thinly, among a buyer base consisting largely of people who were not seeking more exposure in the first place.",
    "Both cases turn on details in the documents rather than on a view about the business. Whether the second step is contractual or merely intended, how the distribution is taxed, who has committed to taking up rights and what happens to holders who do nothing: these are answerable questions, and answering them is what separates a discount you can collect from one that simply persists."
  ],
  practical: {
    label: "Example: valuing the retained stake",
    lead: "Mark the listed piece at market, subtract it, and look hard at what the remainder implies about everything else.",
    bullets: [
      "What is the retained stake worth at market, and what does the remainder imply?",
      "Is completion of the separation contractual, intended, or merely mentioned?",
      "How is the distribution taxed, and does that change who will hold it?",
      "For a rights issue, what does inaction cost a holder who ignores it?",
      "Who has committed to taking up rights, and what is left over?"
    ]
  },
  application:
    "Private rounds run the same mechanism through pro rata rights and pay-to-play terms. Existing holders who fail to act are diluted, and the shares they decline go to whoever did the work on the term sheet. Partial separations appear as minority stakes in a subsidiary or as joint venture interests carried at cost. Marking those holdings honestly often changes what the remaining operations are actually being valued at.",
  models: ["special-situations", "implied-expectations", "optionality", "intrinsic-value"],
  connections: [
    { to: "ycbsmg-reading-a-spin-off", type: "extends" },
    { to: "ycbsmg-where-mispricing-survives", type: "related" },
    { to: "tii-intrinsic-value", type: "related" },
    { to: "tmit-price-is-everything", type: "reinforces" },
    { to: "tbs-convexity", type: "related" }
  ],
  quote: null
},

{
  id: "ycbsmg-merger-securities", num: 5, book_id: "ycbsmg", category: "investing",
  title: "Unwanted Paper",
  thesis: "Acquirers often pay partly in securities the sellers never wanted, and unwanted paper trades cheaply.",
  reading_time: 3,
  explanation: [
    "Acquisitions are not always paid for in cash. Part of the consideration can be a bond, a preferred share or a warrant issued directly to the selling shareholders. Those recipients held common stock in an operating company and now hold a small, oddly structured piece of paper in a different one. Most of them want out, and there is nobody whose job it is to find them a buyer.",
    "Nothing about the issue is designed for trading. There was no underwriter, no marketing and often no rating, so the funds that buy bonds for a living cannot hold it, and the equity holders who received it do not want it. The issue is frequently too small to attract any coverage at all. Terms set to be accepted in a negotiation therefore end up available at prices set by people leaving.",
    "The offsetting cost is that the analysis is document work. Value sits in covenants, conversion terms, call schedules and the instrument's place in the capital structure, none of which appears on a screen. That is precisely why the discount survives. The effort is unglamorous, the available position sizes are small, and the reward for doing it accrues only to whoever bothers to do it."
  ],
  practical: {
    label: "Example: reading the consideration",
    lead: "When a deal pays in paper rather than cash, find out what the paper is and who has been left holding it.",
    bullets: [
      "What securities are being issued as consideration, and to whom?",
      "Can the recipients hold this instrument under their own mandates?",
      "Where does it sit in the capital structure, and what protects it?",
      "What are the conversion, call and covenant terms actually worth?",
      "Is anyone publishing a price, or is this a negotiated quote?"
    ]
  },
  application:
    "The private-market version is the non-cash part of an exit: vendor notes, deferred consideration, rollover equity and preferred stock accepted because the buyer would not fund more cash. Holders take the paper to get the deal closed, then find it cannot be sold and does not fit their mandate. Buying it from them is one of the few places where the counterparty's motivation is transparent and unrelated to the underlying business.",
  models: ["special-situations", "incentives", "optionality", "margin-of-safety"],
  connections: [
    { to: "ycbsmg-where-mispricing-survives", type: "extends" },
    { to: "ycbsmg-bankruptcy-claims", type: "related" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "circle-of-competence", type: "related" },
    { to: "fbr-asymmetry", type: "related" }
  ],
  quote: null
},

{
  id: "ycbsmg-arbitrage-payoff", num: 6, book_id: "ycbsmg", category: "decision-making",
  title: "The Shape of Arbitrage Returns",
  thesis: "Risk arbitrage pays small frequent gains and rare large losses, which suits almost nobody.",
  reading_time: 2,
  explanation: [
    "The trade is simple to describe. After a deal is announced the target trades below the agreed terms, and a buyer who holds until completion collects the difference. The gain is fixed by the terms, the timing is uncertain, and the loss if the deal fails is the fall back to the undisturbed price or below it, since a broken deal usually means something has gone wrong.",
    "That produces a distinctive shape: frequent small gains and occasional severe losses. Worse, the losses are correlated. Deals break when financing dries up or when regulators harden, conditions that affect every open position at once. A record of steady monthly returns therefore says very little about the strategy, because the periods that decide the outcome are the ones that have not happened yet.",
    "The generic spread is also the most competed part of the field. Specialists with better legal information, lower funding costs and full-time attention set the price, and what remains compensates only thinly for the tail. What survives the reasoning is the non-generic case: an unusual structure, a security most participants cannot hold, or a discount that exists for some reason other than deal risk."
  ],
  practical: {
    label: "Example: judging a spread",
    lead: "Decide whether you are being paid enough for a payoff that is capped upward and open downward.",
    bullets: [
      "What is the annualised spread, and what timeline does that number assume?",
      "What is the fall if the deal breaks, not just the spread forgone?",
      "How many of my open positions would break in the same conditions?",
      "Who else is doing this trade, and what do they know that I do not?",
      "Is anything here non-generic, or am I collecting a commodity spread?"
    ]
  },
  application:
    "The same payoff shape appears whenever a private position is underwritten to a near-term liquidity event: a signed term sheet, an agreed trade sale, a bridge that assumes a specific round. Upside is bounded by the agreed price and downside is the company without the transaction. Correlation is the part usually missed, because the financing conditions that break one of these tend to break all of them in the same quarter.",
  models: ["probability", "fat-tails", "opportunity-cost", "decision-quality"],
  connections: [
    { to: "ycbsmg-where-mispricing-survives", type: "contrasts" },
    { to: "ycbsmg-leveraged-residual", type: "related" },
    { to: "tbs-convexity", type: "contrasts" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "fbr-rare-events", type: "reinforces" }
  ],
  quote: null
},

{
  id: "ycbsmg-bankruptcy-claims", num: 7, book_id: "ycbsmg", category: "investing",
  title: "Buy the Claim, Not the Company",
  thesis: "In a restructuring the decisive question is which layer of the capital structure receives the value.",
  reading_time: 3,
  explanation: [
    "Bankruptcy analysis is two questions rather than one. What is the reorganised business worth, and which claim in the capital structure receives that value. The old equity is usually cancelled, and the instrument that converts into ownership sits at the point where value runs out, so an identical view about the business produces completely different results depending on which layer you happened to buy.",
    "The seller side repeats the pattern found elsewhere. Banks and funds cannot hold defaulted paper. Suppliers with trade claims want cash now rather than a distribution in two years. Mandates prohibit bonds that are no longer accruing. The process itself is slow, procedural and expensive to follow, so prices are partly set by holders who have run out of patience for the docket.",
    "The equity that emerges is the most reliably unwanted security in the market. It is handed to creditors who chose to be lenders, frequently with no listing and no coverage, sometimes carrying accumulated tax losses that shelter years of future earnings. The distribution dynamics are those of a spin-off, applied to a holder base with even less interest in staying around."
  ],
  practical: {
    label: "Example: locating the fulcrum",
    lead: "Value the reorganised business first, then work down through the claims until the value runs out.",
    bullets: [
      "What is the business worth after reorganisation, on conservative assumptions?",
      "Which claim sits where that value stops, and what does it cost today?",
      "Who is prohibited from holding this paper, and are they still selling?",
      "What tax attributes survive the reorganisation, and who can use them?",
      "How long is the process, and what does the delay cost me?"
    ]
  },
  application:
    "Wind-downs and restructurings of private companies raise the same question in a smaller frame. Where the preference stack exceeds any plausible exit value, ordinary equity is a formality and the real negotiation runs between preferred layers and lenders. Buying into a recapitalisation, or providing the bridge that reprices everything above it, is a claim decision rather than a company decision. Reading the deed matters more than the growth forecast.",
  models: ["special-situations", "intrinsic-value", "margin-of-safety", "incentives"],
  connections: [
    { to: "ycbsmg-merger-securities", type: "related" },
    { to: "ycbsmg-leveraged-residual", type: "extends" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "tmit-risk-is-loss", type: "related" },
    { to: "patience", type: "reinforces" }
  ],
  quote: null
},

{
  id: "ycbsmg-leveraged-residual", num: 8, book_id: "ycbsmg", category: "investing",
  title: "Stub Equity and Leverage",
  thesis: "After a recapitalisation the remaining equity is a small geared claim on a large business.",
  reading_time: 3,
  explanation: [
    "A recapitalisation borrows heavily and distributes the proceeds, leaving shareholders with cash plus a thin slice of equity sitting on top of substantial debt. That slice behaves differently from ordinary shares. A modest change in the value of the business produces a large percentage change in the residual, in both directions, because the debt is fixed and everything above it belongs to the sliver.",
    "It also screens terribly. Book equity can be negative, debt to earnings looks alarming, and conventional ratios flag the company as distressed. Holders who owned a stable dividend payer find themselves with something small and volatile, and most of them sell. The instrument requires arithmetic that is unfamiliar rather than hard: value the business, subtract the debt, compare what remains with the price of the residual.",
    "Long-dated options produce a similar shape by choice rather than by accident. A multi-year call caps the loss at the premium and gives geared exposure to a view that needs time to be proved, which suits a situation with a known catalyst and an uncertain date. In both cases the structure magnifies the quality of the underlying judgement, so it belongs only where that judgement is genuinely good."
  ],
  practical: {
    label: "Example: sizing the residual",
    lead: "Value the whole business, subtract the debt, and treat the leftover equity as the geared claim it is.",
    bullets: [
      "What is the enterprise worth, and what does the debt claim first?",
      "What does a twenty per cent move in enterprise value do to the residual?",
      "Are the debt maturities and covenants survivable through a weak year?",
      "Is the position sized for the geared outcome rather than the headline value?",
      "Am I using structure to express a view I am not confident about?"
    ]
  },
  application:
    "Structured private rounds create stubs constantly. A large participating preference, a secondary payment to founders funded with debt, or a recapitalisation that resets the stack all leave ordinary equity as a thin residual on a much larger enterprise. Underwriting it means valuing the whole company, subtracting everything senior, then sizing for the gearing that remains. The same logic makes a small structured position preferable to a large unstructured one.",
  models: ["optionality", "special-situations", "capital-allocation", "implied-expectations"],
  connections: [
    { to: "ycbsmg-bankruptcy-claims", type: "related" },
    { to: "ycbsmg-arbitrage-payoff", type: "contrasts" },
    { to: "tbs-convexity", type: "reinforces" },
    { to: "tos-leverage", type: "related" },
    { to: "avoiding-ruin", type: "contrasts" }
  ],
  quote: null
}

);
