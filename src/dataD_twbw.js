/* The Warren Buffett Way — Robert Hagstrom — 7 ideas */
window.DB.ideas.push(

{
  id: "twbw-lineage", num: 1, book_id: "twbw", category: "investing",
  title: "Three Teachers, One Method",
  thesis: "Buffett's method is Graham's arithmetic, widened by Fisher's qualitative work and Munger's insistence on quality.",
  reading_time: 3,
  explanation: [
    "Hagstrom's most useful contribution is to trace the parts to their sources. Graham supplied the price discipline and the statistical screen: buy cheap against assets, buy many, sell on reversion. Fisher supplied the opposite emphasis, a handful of exceptional businesses understood through primary conversation and held for decades. Munger supplied the argument that closed the gap, that a fair price for an outstanding business beats an outstanding price for a mediocre one.",
    "The shift from the first approach to the second was forced by the size of the capital rather than chosen on principle. Statistical bargains live in small, illiquid, ignored securities, and there are never enough of them to absorb a large balance sheet. As Berkshire grew, the only positions big enough to move the result were large and well followed, and those are never cheap against assets. Quality stopped being a preference and became a requirement.",
    "That contingency matters for anyone borrowing the method. The late Buffett is the version everybody quotes, and it is the version shaped by a constraint most investors do not have. Someone running a small fund can still operate where Graham's arithmetic works, and choosing the large-cap quality approach instead means surrendering a structural advantage in exchange for the comfort of imitating the famous period."
  ],
  practical: {
    label: "Example: locating yourself in the lineage",
    lead: "Work out which version of the method your capital, horizon and access actually permit, then commit to it.",
    bullets: [
      "Is my capital small enough that neglected, illiquid situations are open to me?",
      "Am I buying cheapness against assets, or quality against a long horizon?",
      "Which of my beliefs come from Graham, which from Fisher, and do they conflict?",
      "Am I imitating a method that was shaped by a constraint I do not face?",
      "What would I have to give up to run the other version properly?"
    ]
  },
  application:
    "Venture funds inherit the same fork. A small fund can be genuinely enterprising in overlooked geographies and unfashionable categories, where price still moves with attention. A large fund cannot, because the cheques it must write only fit into competitive, well-covered rounds, so its edge has to come from judgement about durability rather than from entry price. Knowing which fund you are running settles most sourcing arguments before they start.",
  models: ["margin-of-safety", "scuttlebutt", "circle-of-competence", "durability"],
  connections: [
    { to: "tii-margin-of-safety", type: "extends" },
    { to: "csup-scuttlebutt", type: "extends" },
    { to: "circle-of-competence", type: "reinforces" },
    { to: "twbw-four-tenets", type: "related" },
    { to: "twbw-method-and-the-man", type: "related" }
  ],
  quote: null
},

{
  id: "twbw-four-tenets", num: 2, book_id: "twbw", category: "investing",
  title: "The Four Sets of Tenets",
  thesis: "Business, management, financial and market tests, applied in that order, do most of the filtering.",
  reading_time: 3,
  explanation: [
    "Hagstrom organises the method into four groups. The business tenets ask whether the operation is simple and understandable, whether its operating history is consistent, and whether its long-term prospects are favourable. The management tenets ask whether managers are rational with capital, candid with owners, and able to resist copying their peers. The financial tenets look at return on equity, owner earnings, margins and whether retained dollars create value. The market tenets ask what the business is worth and whether it can be bought for less.",
    "The ordering carries most of the weight. Business and management questions are cheap to ask and eliminate the large majority of candidates, so valuation work is only spent on names that have already survived. Most screens run the sequence backwards, starting from a cheapness filter, which guarantees that the expensive analytical effort lands on the least promising population and that quality gets argued about afterwards to justify a price that was found first.",
    "None of the tenets has a numerical threshold, which is deliberate. This is a checklist rather than a formula, and its value comes from asking identical questions every time. Consistency makes cases comparable across years and analysts, and it makes omissions visible, because a tenet nobody can answer is a gap in the work rather than a matter of taste."
  ],
  practical: {
    label: "Example: running the four groups in order",
    lead: "Take the four groups in sequence and stop at the first one that fails, before any valuation work begins.",
    bullets: [
      "Can I explain this business, and its economics, in a few plain sentences?",
      "Is the operating history consistent, or a series of reinventions?",
      "Has management been candid about mistakes in writing, not only about wins?",
      "What return does the business earn on the capital it retains?",
      "Only now: what is it worth, and what is being asked?"
    ]
  },
  application:
    "Most investment committees hold the sequence upside down, opening with price and round dynamics because those are the urgent facts. Reordering the paper so that business quality and founder candour are resolved before valuation is discussed changes which deals survive, and it removes the common failure where a team talks itself into quality because the entry price is attractive and the process is closing on Friday.",
  models: ["checklist", "owner-earnings", "return-on-capital", "intrinsic-value"],
  connections: [
    { to: "twbw-lineage", type: "extends" },
    { to: "csup-fifteen-points", type: "related" },
    { to: "tii-intrinsic-value", type: "reinforces" },
    { to: "zto-seven-questions", type: "related" },
    { to: "twbw-equity-as-a-bond", type: "related" }
  ],
  quote: null
},

{
  id: "twbw-focus-investing", num: 3, book_id: "twbw", category: "investing",
  title: "Focus Investing",
  thesis: "Hold few positions, chosen for high expected value, and accept the wider dispersion that follows.",
  reading_time: 3,
  explanation: [
    "The arithmetic behind concentration is simple and hard to argue with. If your best idea carries a materially higher expected return than your fifteenth, then adding the fifteenth lowers the expected return of the whole portfolio. Wide diversification is the correct price to pay for not knowing which of your ideas is which. Where you genuinely do know, spreading capital thinly converts an analytical advantage into an average one.",
    "Hagstrom's simulations of concentrated portfolios show what the trade actually is. Small portfolios beat the index far more often than broadly diversified active portfolios do, and they also lag it far more often. The distribution of outcomes widens in both directions at once, so the same structure that produces the exceptional records also produces the disasters, and nothing about the approach separates the two in advance.",
    "The binding constraint is therefore capital rather than insight. Concentration only works if the money cannot leave during the periods when the dispersion is running against you, which means the structure has to be settled before the positions are taken. An investor with a good process and redeemable capital will be forced to abandon the process at the worst possible moment, and will look imprudent while doing it."
  ],
  practical: {
    label: "Example: sizing to conviction",
    lead: "Rank your ideas by expected value, then check whether the position sizes reflect that ranking honestly.",
    bullets: [
      "Which position is my best idea, and is it also my largest?",
      "What does my tenth-best idea add, other than the appearance of prudence?",
      "Do I have a real edge here, or am I concentrating on a feeling?",
      "Can this capital stay in place through three bad years?",
      "Is any position sized so that being wrong ends the fund?"
    ]
  },
  application:
    "Venture arithmetic pushes the same way but for a different reason: returns follow a power law, so wide portfolios reliably own the winner and reliably dilute it into irrelevance. The practical resolution is enough entry positions for a tail to appear, then heavy concentration of reserves into the few companies that show it. Most funds do the opposite, reserving evenly and defending the average position out of loyalty.",
  models: ["power-law", "probability", "diversification", "opportunity-cost"],
  connections: [
    { to: "tii-diversification", type: "contrasts" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "selectivity", type: "reinforces" },
    { to: "twbw-four-tenets", type: "extends" },
    { to: "twbw-holding-through-drawdown", type: "related" }
  ],
  quote: null
},

{
  id: "twbw-holding-through-drawdown", num: 4, book_id: "twbw", category: "people",
  title: "Sitting Through the Lag",
  thesis: "A concentrated portfolio will trail the market for years at a time, and that is its cost.",
  reading_time: 3,
  explanation: [
    "With few holdings, the result depends on a small number of businesses being repriced on their own schedule, and that schedule has no relationship to the reporting calendar. Multi-year stretches behind the index are not a symptom of the approach failing. They are the mechanism that makes it available at all, because if the lag were comfortable, enough capital would compete it away and the excess return would disappear.",
    "That makes the measurement problem the real one. If you cannot tell a sound process in a lean period from a broken process, you will drop the sound one at the bottom. The answer Hagstrom draws from Buffett is to measure the businesses rather than the quotations: look-through earnings, return on capital, competitive position, whether the original tenets still hold. Those change slowly and honestly.",
    "The rest is social rather than analytical. A lag is survivable in private and close to unsurvivable when it is reported quarterly to people who hold a benchmark alongside it. Faced with that, reducing concentration is the individually rational move, which is why structure ends up determining behaviour far more often than temperament does. Fix the reporting period and the mandate first."
  ],
  practical: {
    label: "Example: measuring the business, not the mark",
    lead: "Decide in advance which business facts would tell you the thesis is wrong, and track only those.",
    bullets: [
      "Which underlying metrics, not prices, would falsify this position?",
      "Are the tenets that justified the purchase still true this year?",
      "Is my reporting period shorter than my intended holding period?",
      "Who will pressure me during a two-year lag, and what did I promise them?",
      "Have I written down, now, what would make me sell?"
    ]
  },
  application:
    "Private portfolios hide the lag behind carrying values, which is a mixed blessing: the pressure arrives later but arrives all at once, usually at a fundraise when the interim IRR is compared to peers. The defence is to report business progress alongside marks from the first quarter, so that limited partners are already fluent in the operating metrics by the time the paper number stops flattering the fund.",
  models: ["loss-aversion", "social-proof", "decision-quality", "market-cycles"],
  connections: [
    { to: "twbw-focus-investing", type: "extends" },
    { to: "csup-long-horizon", type: "reinforces" },
    { to: "temperament", type: "reinforces" },
    { to: "patience", type: "reinforces" },
    { to: "twbw-turnover-cost", type: "reinforces" }
  ],
  quote: null
},

{
  id: "twbw-equity-as-a-bond", num: 5, book_id: "twbw", category: "investing",
  title: "Equities as Bonds With Variable Coupons",
  thesis: "Treat a share as a bond whose coupon is the business's earnings, and whose coupon moves.",
  reading_time: 3,
  explanation: [
    "Buffett's habit of describing an equity as a bond with a variable coupon does real work. The purchase price is the principal, owner earnings are the coupon, and the coupon is uncertain but in the right business tends to grow. Framed that way, the return question stops being about price movement and becomes about the yield on your cost and the rate at which that yield rises.",
    "Two useful consequences follow. The comparison to a long government bond becomes direct, so the risk-free yield turns into the hurdle rather than a footnote in a model. And retained earnings become visible as coupon reinvested on your behalf, which makes the return the business earns on those retained dollars the central question. Each dollar kept should produce at least a dollar of value over time, or it should be paid out.",
    "The frame also states its own limits. There is no maturity, no contractual claim, and the coupon can shrink or vanish. It is therefore useful precisely where earnings are predictable and actively misleading where they are not, which is the point: applying it forces you to decide whether this business has a coupon you can name at all, before you start discounting one."
  ],
  practical: {
    label: "Example: naming the coupon",
    lead: "State the owner earnings you are buying, the yield on your price, and the growth you require.",
    bullets: [
      "What are owner earnings here, after the capital spending needed to hold position?",
      "What yield does that give me on the price being asked?",
      "How does that compare to the long bond, today?",
      "For each dollar retained over five years, how much value appeared?",
      "Can I name the coupon at all, or am I guessing at one?"
    ]
  },
  application:
    "Pre-profit companies have no coupon, so the honest version is to define the coupon the business would produce at maturity: gross margin, retention, the steady-state cost of serving a customer. Then judge whether the entry price is reasonable against that number rather than against a revenue multiple. It converts a growth story into a yield question, and most growth stories become noticeably less attractive when asked that way.",
  models: ["owner-earnings", "cost-of-capital", "free-cash-flow", "return-on-capital"],
  connections: [
    { to: "tii-intrinsic-value", type: "extends" },
    { to: "tos-cash-flow-per-share", type: "related" },
    { to: "tii-paying-for-growth", type: "contrasts" },
    { to: "twbw-four-tenets", type: "reinforces" },
    { to: "twbw-turnover-cost", type: "related" }
  ],
  quote: null
},

{
  id: "twbw-turnover-cost", num: 6, book_id: "twbw", category: "investing",
  title: "Turnover Is a Cost",
  thesis: "Trading subtracts from returns through friction and tax, and signals almost nothing about skill.",
  reading_time: 2,
  explanation: [
    "Selling carries three charges, and only the first is usually counted. There is commission and spread, there is tax on the realised gain, and there is the permanent loss of compounding on the money handed over in tax. An unrealised gain functions as an interest-free loan from the state, working inside the position for as long as you hold it, and every sale repays part of that loan early and voluntarily.",
    "Activity is nonetheless read as diligence. High turnover looks like responsiveness and low turnover looks like inattention, so anyone whose work is observed has an incentive to trade more than the analysis requires. Hagstrom's point is that the observed record does not reward it: the returns come from a small number of decisions held for a long time, and the intervening activity mostly transfers value to intermediaries."
  ],
  practical: {
    label: "Example: pricing a sale properly",
    lead: "Before selling, count the tax and the lost compounding on it, then ask what the alternative must return to justify both.",
    bullets: [
      "What does this sale cost in tax, and what would that tax have earned over ten years?",
      "Has the business changed, or has only the price changed?",
      "Is the replacement clearly better, or merely newer to me?",
      "Am I trading because the analysis demands it or because inactivity feels negligent?",
      "What was my turnover last year, and what did it buy me?"
    ]
  },
  application:
    "Private investors face the mirror image: they cannot trade, so the cost shows up as premature secondaries and as pressure to sell winners early to return capital and prove the fund. The Buffett arithmetic argues for holding the compounders through the fund's life where the structure allows it, using continuation vehicles or extensions rather than crystallising a good position to meet a distribution schedule.",
  models: ["costs-compound", "compounding", "loss-aversion", "opportunity-cost"],
  connections: [
    { to: "csup-when-to-sell", type: "reinforces" },
    { to: "pom-confounding-compounding", type: "reinforces" },
    { to: "tos-tax-efficiency", type: "reinforces" },
    { to: "twbw-holding-through-drawdown", type: "reinforces" },
    { to: "twbw-equity-as-a-bond", type: "related" }
  ],
  quote: null
},

{
  id: "twbw-method-and-the-man", num: 7, book_id: "twbw", category: "learning",
  title: "The Method and the Man",
  thesis: "Buffett's principles are transferable. His temperament, structure and access are considerably less so.",
  reading_time: 3,
  explanation: [
    "The two things worth separating are the method and the machine it ran inside. The tenets, the valuation arithmetic and the price discipline can all be written down and taught, and they improve the work of anyone who adopts them. The rest of the record rests on permanent capital, insurance float bought at a negative cost, a reputation that brings proprietary transactions to the door, and sixty years of applying the same rules without a break.",
    "Honesty about that split matters more than it sounds. The principles do not reproduce the returns, and the most direct evidence is the mediocre performance of funds run on explicitly Buffett-derived rules, including Hagstrom's own. Copying the holdings turns out to be the least transferable act available, because the holdings were selected for a balance sheet, a tax position and a horizon that are not yours.",
    "What survives translation is procedural. Write down the criteria, refuse everything that fails them, size positions according to genuine conviction, and arrange the capital so that waiting is possible rather than merely admirable. Anything that requires float, a fifty-year horizon or a phone that rings with private deals is a description of a position in the world, not a method you can adopt on Monday."
  ],
  practical: {
    label: "Example: separating rules from advantages",
    lead: "Sort what you admire in an investor into rules you can adopt and advantages you cannot.",
    bullets: [
      "Which parts of this record come from rules, and which from structural advantages?",
      "Do I have permanent capital, or capital that can be recalled?",
      "Am I copying positions, or copying the questions that produced them?",
      "What advantage do I have that this investor did not?",
      "Which of my rules would survive if my returns lagged for three years?"
    ]
  },
  application:
    "The venture version is the persistent belief that a firm can adopt a famous fund's stated philosophy and approach its results, when the results largely came from brand-driven access to the best rounds. A newer firm's transferable choices are the criteria, the discipline to pass, and the sourcing angle nobody else has. Its non-transferable disadvantage is that the strongest founders currently take other people's calls first.",
  models: ["float", "survivorship", "base-rates", "checklist"],
  connections: [
    { to: "tpl-skill-or-luck", type: "related" },
    { to: "fbr-lucky-fool", type: "related" },
    { to: "multidisciplinary-thinking", type: "related" },
    { to: "twbw-lineage", type: "extends" },
    { to: "twbw-focus-investing", type: "related" }
  ],
  quote: null
}

);
