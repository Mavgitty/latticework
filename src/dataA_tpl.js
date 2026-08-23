/* The Power Law — Sebastian Mallaby — 12 ideas */
window.DB.ideas.push(

{
  id: "tpl-power-law-returns", num: 1, book_id: "tpl", category: "investing",
  title: "Venture Returns Are a Power Law",
  thesis: "A handful of investments produce nearly all the returns, and everything else follows from that.",
  reading_time: 3,
  explanation: [
    "Venture outcomes are not distributed around an average. A small number of positions return many times the capital of an entire fund, while the majority return little or nothing, and the best single result can exceed the sum of everything else. Mallaby's history treats this shape as the organising fact of the industry rather than as a curiosity observed in a few unusual funds.",
    "The mechanism is asymmetry compounded by market structure. Loss on any position is capped at the amount invested, while the gain is bounded only by how large the company becomes, and technology markets tend to concentrate on one or two winners because software costs almost nothing to copy and networks reward the leader. Capped downside plus winner-take-most markets, repeated across many attempts, produces the shape rather than merely permitting it.",
    "What follows is a set of behaviours that look reckless measured against ordinary investing. The relevant question about any position is not whether it will work but how large it becomes if it does, since a position that cannot return the fund is not worth the slot. Failure rates of two thirds or more are accepted as the cost of holding enough attempts, and the expensive error is the winner declined rather than the loser funded."
  ],
  practical: {
    label: "Example: underwriting for the tail",
    lead: "Test each candidate against the size it must reach to matter, not against the probability that it survives.",
    bullets: [
      "If this works, how large does it get, and what does that return the fund?",
      "Could this outcome be a top position, or is it merely likely to be fine?",
      "Am I declining risk in a way that also declines the possible tail?",
      "How many positions do I hold, and is that enough for a tail to appear?",
      "What is the cost of missing this, measured against the cost of losing the cheque?"
    ]
  },
  application:
    "In practice this argues for sizing and reserves that follow conviction upward rather than spreading capital evenly. It also argues against the instinct to trim risk by preferring companies with modest, credible plans, because that filter removes exactly the outcomes that pay for the fund. Growth investing inverts the emphasis: by the later rounds the winner is largely identified, so the return depends on entry price rather than on finding the tail.",
  models: ["power-law", "fat-tails", "optionality", "probability"],
  connections: [
    { to: "zto-power-law", type: "reinforces" },
    { to: "tii-diversification", type: "contrasts" },
    { to: "tpl-risk-capital", type: "extends" },
    { to: "tpl-skill-or-luck", type: "related" },
    { to: "selectivity", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tpl-risk-capital", num: 2, book_id: "tpl", category: "investing",
  title: "What Risk Capital Is For",
  thesis: "Equity that expects most bets to fail can fund projects no lender would touch.",
  reading_time: 3,
  explanation: [
    "Some projects cannot be financed with debt. A lender needs collateral and a repayment schedule, and a company whose only assets are a team, some code and an unproven claim about the future offers neither. Venture capital is the instrument built for that gap: equity that takes ownership rather than security, expects most of its positions to fail, and is repaid entirely out of the few that do not.",
    "The fit is real but narrow. The structure works where an idea can be tested cheaply, iterated quickly and then scaled without heavy physical assets, because that pattern lets small amounts of money resolve large uncertainties. It works badly where the uncertainty can only be resolved by building something expensive over many years, since a ten year fund cannot wait and cannot absorb a project whose first useful signal arrives late.",
    "The practical consequence is a question asked too rarely: does this company actually need equity that prices total loss? A profitable services business with predictable receivables is paying a very high cost of capital to fund working capital, and the founder is selling ownership to buy something a bank would have lent. Matching the instrument to the shape of the risk is part of the judgement, not an afterthought."
  ],
  practical: {
    label: "Example: matching capital to risk",
    lead: "Ask what kind of uncertainty the money is buying down, then check that the instrument suits it.",
    bullets: [
      "What specific uncertainty does this round resolve, and how would we know it had?",
      "Could this be funded with debt or revenue, and if so why equity?",
      "Is the capital intensity here compatible with a ten year fund life?",
      "Does the plan need one large bet or a sequence of cheap tests?",
      "Are we pricing total loss, or quietly assuming a floor under the downside?"
    ]
  },
  application:
    "Screening improves when the first question is what the money is for rather than how large the market is. Capital-intensive businesses can still work, but they need a route to a tail outcome and a realistic view of how many rounds sit between here and it. For growth deals the equivalent test is whether equity is funding expansion or covering an operating shortfall the business has not fixed.",
  models: ["optionality", "risk-not-volatility", "power-law", "capital-allocation"],
  connections: [
    { to: "tpl-power-law-returns", type: "reinforces" },
    { to: "tpl-stage-by-stage", type: "extends" },
    { to: "tii-investment-vs-speculation", type: "related" },
    { to: "avoiding-ruin", type: "related" },
    { to: "zto-power-law", type: "related" }
  ],
  quote: null
},

{
  id: "tpl-stage-by-stage", num: 3, book_id: "tpl", category: "investing",
  title: "Financing Stage by Stage",
  thesis: "Releasing money in tranches buys information, and each round prices the risk that has actually gone.",
  reading_time: 3,
  explanation: [
    "Staged financing is the industry's main technical device. Instead of funding a company to completion, investors commit an amount sufficient to reach a specific milestone, and the next tranche is priced only once that milestone has been reached or missed. Each round therefore buys a piece of information as well as a piece of the company, and the price of the next piece reflects what the last piece revealed.",
    "The device does three things at once. It caps the loss on a failure, because funding stops at the round where the evidence stops. It disciplines spending, because the next tranche has to be earned rather than assumed. And it gives the investor a genuine option to abandon, which is worth something in itself: much of the value in an early position is the right to buy more of it later on better information.",
    "The mechanism degrades when money is plentiful. Rounds get larger, gaps between them stretch, milestones become vague, and pre-emptive offers arrive before the previous milestone has been tested at all. At that point the price is set by competition for allocation rather than by risk retired, and the information function of the round is gone while its cost remains. Founders also lose the discipline that a hard next milestone imposes."
  ],
  practical: {
    label: "Example: pricing the next tranche",
    lead: "Define what the round is meant to prove, then judge the next price by whether it was proved.",
    bullets: [
      "What exactly does this round buy, expressed as a testable milestone?",
      "What risk has been retired since the last round, and what is the new price paying for?",
      "If the milestone is missed, what is the decision, and who makes it?",
      "Is this round being priced on evidence or on competition for the allocation?",
      "How much runway does this leave before the next set of evidence exists?"
    ]
  },
  application:
    "Reserve policy is where this idea becomes operational. Holding capital back to fund the companies that clear their milestones is the mechanism by which a portfolio concentrates into its winners, and a fund that deploys everything at entry has given up the option it paid for. The related discipline is writing down, before wiring, what a missed milestone means, because that judgement is much harder to make once the relationship exists.",
  models: ["optionality", "incentives", "decision-quality", "margin-of-safety"],
  connections: [
    { to: "tpl-risk-capital", type: "extends" },
    { to: "tpl-late-stage-drift", type: "contrasts" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "tib-ulysses-contract", type: "related" }
  ],
  quote: null
},

{
  id: "tpl-liberation-capital", num: 4, book_id: "tpl", category: "people",
  title: "Liberation Capital",
  thesis: "Venture money let talented people leave large employers and build the thing themselves.",
  reading_time: 2,
  explanation: [
    "The first function of venture money was not selecting companies but freeing people. An engineer inside a large firm with an idea the firm did not want had no alternative route, because the capital, the equipment and the salary all belonged to the employer. External equity created another option: leave, take colleagues, own a share of the result. Mallaby treats the departure of technical talent from established laboratories as the founding move of the industry.",
    "This reframes what a firm actually supplies. Money is the visible part, but the useful part is making departure survivable: a salary, a credible plan, colleagues willing to come, and a share of ownership worth the risk of leaving. It also explains why places that enforce non-compete agreements strictly, or that treat leaving as disloyalty, generate far fewer new firms. The constraint on formation is rarely capital alone. It is whether talented people can move."
  ],
  practical: {
    label: "Example: what the founder is leaving",
    lead: "Look at what the founding team gave up to be here, because it tells you what they believe.",
    bullets: [
      "What did each founder leave, and what did leaving cost them?",
      "Did they bring colleagues, and what does that say about how they are regarded?",
      "Could this idea have been built inside their former employer, and why was it not?",
      "Is the equity split one that will still look fair in three years?",
      "Who else would follow this founder out of a good job?"
    ]
  },
  application:
    "Sourcing follows from this directly. Teams spinning out of a strong technical organisation are a repeatable channel, and the people who leave with them are the most useful references available, since they have already made a costly judgement about the founder. It also sets a diligence question worth asking plainly: what did this person give up, and does the ownership on offer make that decision rational for the next hire?",
  models: ["incentives", "cornered-resource", "network-economies", "opportunity-cost"],
  connections: [
    { to: "tpl-clusters", type: "reinforces" },
    { to: "tpl-networks", type: "related" },
    { to: "zto-founding-team", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tpl-founder-power", type: "related" }
  ],
  quote: null
},

{
  id: "tpl-activism", num: 5, book_id: "tpl", category: "people",
  title: "Investors Who Shape Outcomes",
  thesis: "Some venture returns come from work done after the cheque, not from selection alone.",
  reading_time: 3,
  explanation: [
    "Mallaby argues against the picture of the venture investor as a picker who waits. A large part of the historical record is intervention: recruiting the executives a founder cannot reach, forcing a change of product direction, arranging the next round, introducing the first serious customer, engineering the sale. Where that work changes what the company becomes, part of the return was made rather than identified, and the selection story understates the job.",
    "The claim is easy to make and hard to verify. A firm that gets into the best companies will observe good outcomes whatever it does afterwards, so influence and access are confounded in every track record. Causation also runs backwards more often than firms admit: strong companies choose their investors, which means the presence of a celebrated name is evidence about the company rather than proof of contribution.",
    "The useful distinction is between help that leaves a trace and help that does not. Recruiting a named executive, opening a specific sales channel, leading the round nobody else would lead: each of these can be checked with the founder afterwards. Being supportive in board meetings cannot. A firm serious about the claim keeps a record of the specific interventions it made and asks its founders which ones mattered, rather than counting introductions."
  ],
  practical: {
    label: "Example: testing value added",
    lead: "Ask founders what an investor actually did, and check whether the answer names anything specific.",
    bullets: [
      "Which hires, customers or rounds happened because of this investor?",
      "Would the same outcome have occurred with a passive cheque instead?",
      "Is the firm's record evidence of influence, or only of access to good companies?",
      "What did this investor do in the companies that struggled?",
      "Which of our own interventions last year can we name and verify?"
    ]
  },
  application:
    "For a firm this argues for a short written list of the things it can reliably do, and for declining to claim the rest. Reference calls with founders of portfolio companies that did not work are the most useful version of this check, because the help is easy to describe when everything is going well. On the investing side, treat a strong syndicate as information about the company, not as support for the price.",
  models: ["process-power", "survivorship", "scuttlebutt", "alternative-histories"],
  connections: [
    { to: "tpl-skill-or-luck", type: "extends" },
    { to: "tpl-founder-power", type: "contrasts" },
    { to: "survivorship-bias", type: "related" },
    { to: "social-proof", type: "contrasts" },
    { to: "tib-resulting", type: "related" }
  ],
  quote: null
},

{
  id: "tpl-networks", num: 6, book_id: "tpl", category: "strategy",
  title: "The Network Is the Asset",
  thesis: "A venture firm's returns depend on who calls it first, and that advantage compounds.",
  reading_time: 2,
  explanation: [
    "Capital is abundant and the companies that matter are few, so the binding constraint is access. Access comes from people: founders a firm has backed, the engineers who worked for them, the lawyers and recruiters around them, other investors who share deals. Backing one company that works produces a cohort of people who will refer the next one, and referral is how the best opportunities are allocated rather than advertised.",
    "The loop is reinforcing, which is why the same names persist across decades of the record. It is not permanent, though. The relationships sit with individual partners rather than with the letterhead, so departures move the asset out of the building, and the loop runs in reverse when a firm becomes known for behaving badly in a down round or removing founders carelessly. Reputation in a small community is built slowly and repriced quickly."
  ],
  practical: {
    label: "Example: auditing the funnel",
    lead: "Trace where your best opportunities came from, then invest in the sources rather than the volume.",
    bullets: [
      "Which relationships produced our best three positions, and are they still warm?",
      "Who refers us deals, and what have we done for them lately?",
      "Does our access depend on the firm or on one partner?",
      "How do founders of our failed companies describe us to others?",
      "Are we seeing the best opportunities in this category, or the ones still available?"
    ]
  },
  application:
    "This is why behaviour in the bad outcomes shows up in later returns. A firm that handles a wind-down decently keeps the founder as a source for a decade, and the cost of the alternative is invisible on any spreadsheet. Practically it argues for tracking sourcing by relationship rather than by channel, and for treating partner retention as an investment decision, since much of the pipeline leaves when a partner does.",
  models: ["network-economies", "feedback-loops", "compounding", "cornered-resource"],
  connections: [
    { to: "tpl-clusters", type: "reinforces" },
    { to: "tpl-power-law-returns", type: "related" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "compounding", type: "reinforces" },
    { to: "tpl-crossing-borders", type: "extends" }
  ],
  quote: null
},

{
  id: "tpl-skill-or-luck", num: 7, book_id: "tpl", category: "learning",
  title: "Is Venture Skill or Luck?",
  thesis: "Persistent returns at a few firms suggest skill, but the evidence cannot fully separate it from access.",
  reading_time: 3,
  explanation: [
    "The question is hard because of the distribution. If a fund's result depends on one or two positions, then a partner's twenty year record contains a handful of decisions that actually mattered, which is far too small a sample to separate judgement from chance. Ordinary statistical intuition fails here: an impressive track record is exactly what luck also produces when outcomes are this uneven and the number of consequential draws is this small.",
    "Mallaby's answer is that the persistence of a small group of firms across successive technology waves is the strongest available evidence for skill, since pure chance would reshuffle the leaders. The difficulty is that a second explanation fits the same data: reputation attracts the best founders, which produces the best outcomes, which renews the reputation. Skill and privileged access predict identical results, and no available dataset cleanly separates them.",
    "The practical response is to judge decisions on the reasoning available at the time and to keep that reasoning written down, because memory reconstructs it in favour of the result. It also changes how a manager is assessed. The informative questions concern the opportunities declined and why, the process for changing a view, and what the partner believed before the outcome was known. Logos on a page are the least useful evidence on offer."
  ],
  practical: {
    label: "Example: separating the two",
    lead: "Before judging a record, ask how many decisions it rests on and what those decisions were.",
    bullets: [
      "How many positions drove this record, and who decided each one?",
      "What did the memo say at the time, and does it read well now?",
      "Which declined opportunities went on to succeed, and what was the reason for passing?",
      "Is the firm's edge in judgement, in access, or in the terms it can command?",
      "Would this record still look like skill with two outcomes removed?"
    ]
  },
  application:
    "Manager selection is where this bites hardest for an allocator. A single strong fund tells you very little, and the readable signals are process ones: how memos are written, whether losses are examined, how reserves are decided, whether the partner who made the winning call is still there. For a firm's own review, keeping a log of passes and their reasons is the cheapest way to make judgement measurable.",
  models: ["resulting", "survivorship", "alternative-histories", "base-rates"],
  connections: [
    { to: "tib-luck-vs-skill", type: "reinforces" },
    { to: "survivorship-bias", type: "reinforces" },
    { to: "tpl-power-law-returns", type: "extends" },
    { to: "tpl-activism", type: "related" },
    { to: "tib-resulting", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tpl-founder-power", num: 8, book_id: "tpl", category: "people",
  title: "The Shift to Founder Power",
  thesis: "As capital became plentiful, control moved from the investors to the founders.",
  reading_time: 2,
  explanation: [
    "Terms follow scarcity. When funds were few and starting a company was expensive, capital held the bargaining power, and the standard pattern was an investor-controlled board and a founder replaced by professional management once the company reached scale. As the number of funds multiplied and the cost of launching software fell, the scarce input became the founder, and documents changed to match: dual-class shares, fewer investor seats, weaker protective provisions.",
    "Part of the shift was a correction. The record contains founders removed too early who would have built something larger, and the returns from leaving an exceptional operator in place are hard to argue with. The problem is that the change came through competition rather than judgement: founder-friendliness became a way to win allocations, so the check on the founder was traded away deal by deal, by investors who would each have preferred the check to exist."
  ],
  practical: {
    label: "Example: reading the control terms",
    lead: "Read the governance terms as a statement about who holds the power, not as boilerplate.",
    bullets: [
      "Who controls the board after this round, on paper and in practice?",
      "What voting rights attach to founder shares, and for how long?",
      "Which decisions require investor consent, and which do not?",
      "If performance deteriorates for two years, what can anyone actually do?",
      "Are we accepting these terms on reasoning, or because the round is competitive?"
    ]
  },
  application:
    "The honest version of this is to price the terms rather than pretend they do not matter. A position with no governance rights in a company whose founder holds voting control is a different asset from the same economics with a board seat, and it should clear a higher return bar. Where the terms cannot be improved, the substitute is conviction in the person, held explicitly rather than assumed.",
  models: ["incentives", "power-law", "social-proof", "second-order"],
  connections: [
    { to: "tpl-governance-limits", type: "extends" },
    { to: "tpl-activism", type: "contrasts" },
    { to: "incentives", type: "reinforces" },
    { to: "social-proof", type: "related" },
    { to: "zto-founding-team", type: "related" }
  ],
  quote: null
},

{
  id: "tpl-clusters", num: 9, book_id: "tpl", category: "strategy",
  title: "Why Place Still Matters",
  thesis: "Venture concentrates in a few places because people, money and knowledge circulate faster there.",
  reading_time: 2,
  explanation: [
    "The industry concentrates geographically, and the reason is circulation speed rather than any inherent quality of the place. In a dense cluster a founder can hire someone who has already done the specific job, raise from an investor who has seen the pattern before, and get a technical question answered over lunch by someone who solved it last year. Each of those loops is shorter, so companies resolve their uncertainties faster.",
    "What the cluster supplies is tacit knowledge and labour mobility, which is why distributed work reduced the advantage without removing it: documents travel easily and judgement does not. Clusters also limit themselves, since cost rises until ordinary companies cannot afford to be there. The pattern has repeated wherever the underlying conditions were assembled, usually an anchor research institution, an equity culture and easy movement between employers. The mechanism travels. The postcode does not."
  ],
  practical: {
    label: "Example: assessing a local ecosystem",
    lead: "Judge a location by how quickly people, capital and practical know-how move through it, not by the number of startups.",
    bullets: [
      "Can this company hire someone locally who has done the role before?",
      "Where does the second and third round of capital come from?",
      "How often do senior people move between companies here?",
      "Is there an anchor institution producing the relevant technical talent?",
      "What has to be imported, and what does importing it cost?"
    ]
  },
  application:
    "For a fund outside a major cluster the useful question is which parts of the mechanism are missing locally and whether they can be supplied. Later-stage capital and experienced operators are the two most often missing, and both can be imported deliberately through syndication and hiring. The failure mode is backing companies that must relocate to grow, then discovering that the relocation consumes a round and half the team.",
  models: ["network-economies", "critical-mass", "scale-economies", "feedback-loops"],
  connections: [
    { to: "tpl-networks", type: "reinforces" },
    { to: "tpl-liberation-capital", type: "reinforces" },
    { to: "critical-mass", type: "reinforces" },
    { to: "scale-economies", type: "related" },
    { to: "tpl-crossing-borders", type: "extends" }
  ],
  quote: null
},

{
  id: "tpl-crossing-borders", num: 10, book_id: "tpl", category: "strategy",
  title: "Adapting the Model Across Borders",
  thesis: "The venture model exported successfully only where local conditions were adapted, not copied.",
  reading_time: 3,
  explanation: [
    "The financing structure exported widely, but the practice around it changed at each border. In China the imported element was staged equity financing while much else differed: heavier operational involvement by investors, a working relationship with the state as a condition of doing business, and a willingness to build a proven model for a local market rather than insisting on invention. The structure was portable. The surrounding practice was rebuilt locally.",
    "The conditions that decide whether it takes hold are specific rather than cultural. Can employees leave and join a new company without legal penalty? Can they be granted equity that is worth something and taxed sensibly? Is there a route to liquidity, whether a listing venue or a population of acquirers? Will courts enforce the documents? Where one of these is missing, the paperwork can be copied exactly and it will not function.",
    "For an investor in a smaller market the consequence is about benchmarks. Round sizes, growth rates, exit multiples and time to liquidity from a deep market do not transfer to a shallow one, because the acquirer population, the listing options and the supply of later capital are all different. Underwriting local companies against imported comparables is the standard error, and it usually shows up as an exit assumption nobody in that market has achieved."
  ],
  practical: {
    label: "Example: testing a local market",
    lead: "Check the specific conditions the model needs, then build local comparables rather than borrowing them.",
    bullets: [
      "Who has actually bought companies like this here, and at what size?",
      "Is there enough later-stage capital locally, or must it be imported?",
      "Can employees be granted meaningful equity, and do they value it?",
      "Which of our assumptions come from a deeper market than this one?",
      "What does the local base rate for exits look like over ten years?"
    ]
  },
  application:
    "The practical output is a local comparable set, built from transactions in the market you actually invest in, with the imported set kept separately and labelled. Where local exits are smaller and slower, the correction runs through entry price and ownership rather than through optimism about the exit. Cross-border syndication is the other lever, and it works best when the relationship is established well before the round that needs it.",
  models: ["base-rates", "network-economies", "incentives", "barriers-to-entry"],
  connections: [
    { to: "tpl-clusters", type: "extends" },
    { to: "tpl-stage-by-stage", type: "related" },
    { to: "base-rates", type: "reinforces" },
    { to: "tfs-outside-view", type: "reinforces" },
    { to: "tii-market-history", type: "related" }
  ],
  quote: null
},

{
  id: "tpl-late-stage-drift", num: 11, book_id: "tpl", category: "investing",
  title: "When Venture Money Became Growth Money",
  thesis: "Large pools of late-stage capital changed the business from pricing risk to buying growth.",
  reading_time: 3,
  explanation: [
    "From the 2010s a great deal of capital arrived at the late stage, from crossover funds, sovereign investors and vehicles far larger than any traditional partnership. Its purpose was different. Early venture money buys the resolution of uncertainty. This money bought growth that had already been demonstrated, and it was often deployed with the explicit aim of helping one competitor outspend the others until the market settled.",
    "Two consequences followed. Companies stayed private much longer, so the scrutiny that a public listing imposes arrived late or never, and the marginal private buyer set the price with no short seller and little disclosure to argue against it. The other was a category error. A late position cannot return a large fund several times, so the tail logic that justifies early venture does not apply, yet prices were often set as though it did.",
    "At the late stage the discipline becomes the ordinary one: entry price, unit economics, a credible path to funding itself, and structure that protects the downside. There is also a competitive point worth stating plainly. A company whose advantage is subsidised pricing has an advantage that lasts exactly as long as the subsidy, and when the funding environment turns, the position it bought turns out not to have been a position at all."
  ],
  practical: {
    label: "Example: late-stage discipline",
    lead: "At the growth stage, judge the price and the economics rather than the size of the story.",
    bullets: [
      "What return does this entry price require, and what exit does that assume?",
      "Is growth here funded by customers or by the last round?",
      "Would the unit economics work if discounting stopped tomorrow?",
      "Who set the last mark, and was it a transaction or a model?",
      "What protects us if the next round is flat or lower?"
    ]
  },
  application:
    "This is the point where growth investing and venture investing genuinely diverge and should be run with different bars. A late position needs a defensible entry price, downside structure and a plausible route to profit without further primary capital, because the tail cannot rescue a bad price. Marks deserve the same scepticism: a valuation set by one enthusiastic buyer in a competitive round is a data point, not a value.",
  models: ["market-cycles", "power-law", "intrinsic-value", "second-level-thinking"],
  connections: [
    { to: "tpl-stage-by-stage", type: "contrasts" },
    { to: "tpl-governance-limits", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "tii-mr-market", type: "related" },
    { to: "zto-monopoly", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tpl-governance-limits", num: 12, book_id: "tpl", category: "investing",
  title: "Governance Failures and the Limits of the Model",
  thesis: "The late 2010s failures showed what happens when nobody at the table wants to ask.",
  reading_time: 3,
  explanation: [
    "The prominent failures of the late 2010s share a structure. A compelling founder, a funding market that rewarded growth over evidence, investors competing hard for the allocation, a board where authority was divided or nominal, and operating figures that no outside party had independently checked. In most cases the information needed to raise a question was available. What was missing was anyone with both the standing and the appetite to raise it.",
    "The reason is incentive, not negligence. An investor who presses a celebrated founder risks the next allocation, the referral flow and the relationship, while the carrying value of the existing position depends on the story continuing. Everyone around the table is long the narrative, which leaves nobody positioned to test it. That makes the failure structural: it recurs with different people each time, which is the signature of a mechanism rather than a character flaw.",
    "The remedies are procedural and dull. Verify the two or three metrics that carry the valuation from source data rather than from management reporting. Ensure at least one board member whose future does not depend on the next allocation. Agree the triggers for intervention in advance, when nothing is wrong. Record concerns in writing at the time they arise. None of this prevents a determined fraud, and the honest conclusion is that the model finances outcomes it cannot fully control."
  ],
  practical: {
    label: "Example: checks that survive enthusiasm",
    lead: "Decide before the round who verifies which numbers, and what specific event would trigger an intervention.",
    bullets: [
      "Which two numbers carry the valuation, and who has checked them from source?",
      "Does anyone on this board have nothing to lose by asking hard questions?",
      "What specific event triggers intervention, and is that agreed in writing?",
      "Am I quiet because there is no concern, or because raising it is costly?",
      "Who last verified the customer numbers by speaking to customers?"
    ]
  },
  application:
    "For an investor without board control, the practical substitute is verification at entry and a written record afterwards. Rebuilding the key metric from raw data, speaking to customers directly, and reading the accounting policies is the work that survives a competitive process being run against you. Where the timetable will not allow it, the honest response is either a smaller position or a pass, not a faster confirmation of what you were told.",
  models: ["incentives", "accounting-quality", "scuttlebutt", "narrative-fallacy"],
  connections: [
    { to: "tpl-founder-power", type: "extends" },
    { to: "tpl-late-stage-drift", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "tib-truthseeking-group", type: "related" }
  ],
  quote: null
}

);
