/* The Investment Checklist — Michael Shearn — 8 ideas */
window.DB.ideas.push(

{
  id: "tic-written-checklist", num: 1, book_id: "tic", category: "learning",
  title: "Write the Checklist Down",
  thesis: "A written list of questions asked every time turns research from impression into a reviewable process.",
  reading_time: 3,
  explanation: [
    "An experienced investor asked to describe a company will produce a fluent account within minutes, and the account will be built from whatever came to hand. The written question set does something a fluent account cannot: it shows what was not asked. Omissions are invisible in narrative form and obvious in list form, which is the whole mechanical advantage, and it does not depend on the questions being clever.",
    "The list has to be built from your own record rather than adopted whole. A borrowed checklist covers the previous author's mistakes, and mistakes are personal: some investors are repeatedly fooled by charismatic founders, others by accounting they did not rebuild, others by markets they wanted to be larger. Each error you can name earns a permanent question, so the list grows slowly and every line has a scar behind it.",
    "Most checklists fail on use rather than on content. A hundred items get abandoned in the first busy week, and a list consulted after the decision is a filing exercise. The versions that survive are short enough to finish, tied to a point in the process where the answer can still change the outcome, and answered in writing so that next year you can see what you believed and how thin the evidence was."
  ],
  practical: {
    label: "Example: building a list you will use",
    lead: "Start from the errors you have actually made, and give each one a permanent question.",
    bullets: [
      "Which questions did I skip on the last three deals, and why those?",
      "Is this list short enough that I will finish it in a busy week?",
      "At what point is each question answered, and can the answer still change the decision?",
      "Where is my answer written down, and would a colleague be able to check it?",
      "Which recurring mistake of mine is still not represented by a question here?"
    ]
  },
  application:
    "In venture the checklist has to fit a two-week window and a data room that is mostly a deck, so the useful version is roughly fifteen questions with a named owner and a written answer for each. The value shows up later: when a position fails, the file tells you whether the question was asked and answered badly or never asked at all, and only the second kind is fixable by process.",
  models: ["checklist", "decision-quality", "confirmation-bias", "wysiati"],
  connections: [
    { to: "tfs-simple-rules", type: "reinforces" },
    { to: "csup-fifteen-points", type: "related" },
    { to: "zto-seven-questions", type: "contrasts" },
    { to: "tic-reasons-to-sell", type: "extends" },
    { to: "tic-how-it-makes-money", type: "related" }
  ],
  quote: null
},

{
  id: "tic-how-it-makes-money", num: 2, book_id: "tic", category: "investing",
  title: "Explain How It Makes Money",
  thesis: "Until you can explain in plain terms how the company earns a dollar, analysis has not started.",
  reading_time: 2,
  explanation: [
    "The test is a plain description: what is the unit being sold, who signs the payment, what the buyer gives up to get it, and what the seller spends to deliver it. A description that survives without industry vocabulary usually means the mechanism is understood. One that collapses into category language, platform, ecosystem, solution, is a description of a category rather than of a company.",
    "Revenue is rarely earned evenly. In most companies a minority of products, segments or contracts produces nearly all the profit, and the rest is either absorbing overhead or actively loss-making. Management presentations aggregate, because aggregation flatters, so the analytical work is disaggregation: profit by product line, by customer cohort, by geography, until the shape of where money is made becomes visible rather than assumed.",
    "The explanation is load-bearing for the rest of the checklist. A forecast is a claim about the mechanism repeating, so it can only be judged by someone who has stated the mechanism. Risks work the same way. You cannot list what would break the earnings without knowing which two or three things the earnings depend on. Skipping the description does not save time, it moves the guessing to a later and more expensive stage."
  ],
  practical: {
    label: "Example: describing the mechanism",
    lead: "Write the earnings mechanism in a paragraph a non-specialist could follow, then check it against the accounts.",
    bullets: [
      "What exactly is the unit of sale, and who signs the payment for it?",
      "Which products or segments produce most of the profit, and which absorb it?",
      "What does it cost to deliver one more unit, and what is fixed?",
      "Can a reasonably informed outsider follow my description without industry vocabulary?",
      "Which two or three variables would change the earnings most, and who controls them?"
    ]
  },
  application:
    "Early-stage companies have a mechanism that has worked a few dozen times rather than a few thousand, which changes the exercise from description to identification: which of the closed deals were bought by the founder personally and which were bought by the product. Rebuilding revenue from the contracts rather than accepting the reported number is the version of this test that survives a young company.",
  models: ["circle-of-competence", "checklist", "value-chain", "return-on-capital"],
  connections: [
    { to: "circle-of-competence", type: "reinforces" },
    { to: "zto-seven-questions", type: "related" },
    { to: "csup-margins", type: "related" },
    { to: "tic-customer-first", type: "extends" },
    { to: "tic-growth-quality", type: "related" }
  ],
  quote: null
},

{
  id: "tic-customer-first", num: 3, book_id: "tic", category: "strategy",
  title: "Start With the Customers",
  thesis: "The customer is the source of every number in the model, so diligence should begin there.",
  reading_time: 3,
  explanation: [
    "Financial statements are a record of what customers have already decided. Working from them forwards means forecasting the output of a process without examining the process, which is why a strong recent trend can look like evidence when it is only a summary. Beginning with the customer reverses the order: understand who buys, what problem they were solving, and what they would have done otherwise.",
    "The productive question is what the purchase does for the buyer's own accounts. A product that removes a measurable cost or wins a measurable sale is bought by a manager who can defend it, and it survives a budget review. A product bought from a discretionary line because it is pleasant to have is bought by a manager who cannot, and the first bad quarter at the customer ends it.",
    "None of this is in the data room. It comes from talking to buyers, users and the people who evaluated the product and chose something else, and the selection of who you speak to decides the answer. A list supplied by the company is a list of advocates. The instructive conversations are with a customer who churned and a customer who ran the evaluation and said no."
  ],
  practical: {
    label: "Example: interrogating demand",
    lead: "Ask who the buyer is, what problem they were solving, and what they would do without the product.",
    bullets: [
      "Who inside the customer signs, who uses it, and who could cancel it?",
      "What did this customer do before, and what would they do if we vanished?",
      "Does the purchase remove a cost, win a sale, or satisfy a preference?",
      "Which budget line does this come from, and does it survive a spending freeze?",
      "Can I speak to a customer who left and one who evaluated and declined?"
    ]
  },
  application:
    "In venture the customer calls are the only part of diligence not constructed by the company, so they carry disproportionate weight. Ten calls across a spread of segments, including two the founder did not nominate, will usually resolve what the metrics cannot: whether the product is bought or sold, whether the buyer would pay more, and whether renewal is a decision or a default.",
  models: ["scuttlebutt", "five-forces", "checklist", "durability"],
  connections: [
    { to: "csup-scuttlebutt", type: "extends" },
    { to: "pcs-buyer-power", type: "related" },
    { to: "csup-sales-organisation", type: "related" },
    { to: "tic-why-they-stay", type: "extends" },
    { to: "tic-how-it-makes-money", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tic-why-they-stay", num: 4, book_id: "tic", category: "investing",
  title: "What It Would Take Them to Leave",
  thesis: "Revenue durability is a question about the cost of leaving, and about how few customers matter.",
  reading_time: 3,
  explanation: [
    "Retention is usually reported as a rate and understood as a property of the product, when it is a property of the alternative. The measurable version asks what leaving would cost this customer in money, time, retraining, migrated data and internal political capital. Where that sum is a week of work and no lost history, a reported ninety-five percent retention describes recent contentment rather than any structural hold.",
    "Concentration decides how much a single conversation matters. A business where the ten largest accounts are sixty percent of revenue has ten negotiations rather than a market, and each renewal is a repricing. The relevant figure is not the count of logos but the share of gross profit, because the largest accounts are frequently the most discounted and the most expensive to serve.",
    "Where switching is cheap and revenue is concentrated, price is set by the customer, and the evidence sits in the history of renewals rather than in the list price. A company that has raised prices and kept its largest accounts has demonstrated something no cohort chart can. One that has held price by conceding on term length, support or scope has been repricing quietly."
  ],
  practical: {
    label: "Example: testing the hold",
    lead: "Price the switch from the customer's side, then check how few customers the revenue depends on.",
    bullets: [
      "What would leaving cost this customer in money, time and lost history?",
      "What share of gross profit comes from the ten largest accounts?",
      "When did we last raise prices, and what did we concede to keep the account?",
      "Which renewals in the next year are decisions rather than defaults?",
      "Is any single customer large enough that its exit changes the plan?"
    ]
  },
  application:
    "Growth-stage revenue quality is where the largest diligence errors live, because net revenue retention above one hundred percent can be produced by a handful of expanding accounts while the base quietly leaks. Splitting the cohort by customer size and reading logo retention in the smallest band usually reveals whether the product holds customers or whether the sales team keeps replacing them.",
  models: ["switching-costs", "durability", "barriers-to-entry", "scuttlebutt"],
  connections: [
    { to: "s7p-switching-costs", type: "reinforces" },
    { to: "pcs-buyer-power", type: "related" },
    { to: "zto-monopoly", type: "related" },
    { to: "tic-customer-first", type: "extends" },
    { to: "tic-growth-quality", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tic-operating-record", num: 5, book_id: "tic", category: "people",
  title: "The Record, Not the Presentation",
  thesis: "Judge management on what they have done with capital and people, not on how well they explain it.",
  reading_time: 3,
  explanation: [
    "Articulacy is the most available management signal and among the least predictive. A founder who presents well is demonstrating a skill that matters for hiring and for raising money, and that has no established relationship with operating judgement. The reverse also holds. A formidable operator who presents badly is routinely marked down on a criterion nobody intended to be scoring, because the meeting is where the impression forms.",
    "The record is a set of specific past decisions and what followed them. Which markets they entered and left, what they paid for acquisitions, how they behaved in the last downturn, who they hired into the senior roles and how long those people stayed. Each of these has a date, a stated reason at the time, and an outcome, which makes it checkable in a way that a strategy narrative is not.",
    "Doing this properly means reading before the meeting rather than after it. Old letters, old plans, old board materials and old interviews state what management expected, and the comparison with what happened is the cheapest calibration available. A manager whose past statements were roughly right, including the ones admitting error, has earned a different weighting from one whose past statements were uniformly optimistic."
  ],
  practical: {
    label: "Example: auditing the record",
    lead: "Reconstruct what management said would happen three years ago, then compare it with what did.",
    bullets: [
      "What did they predict three years ago, and how did it turn out?",
      "Which decisions have they reversed, and did they say why?",
      "Where has capital gone, and what did the last acquisition earn?",
      "Who have they hired into senior roles, and how long did those people stay?",
      "Am I scoring operating judgement, or scoring how the meeting felt?"
    ]
  },
  application:
    "Founder assessment is the weakest-evidence part of venture diligence and the heaviest weighted, which argues for structure rather than more meetings. Prior company outcomes, references from people who reported to them rather than alongside them, and a written comparison of last year's plan against actual delivery give three independent readings. Where all three agree, the meeting adds little. Where they disagree, that is the agenda for the meeting.",
  models: ["capital-allocation", "base-rates", "narrative-fallacy", "return-on-capital"],
  connections: [
    { to: "tos-capital-allocation", type: "reinforces" },
    { to: "csup-integrity", type: "contrasts" },
    { to: "tpl-founder-power", type: "related" },
    { to: "tic-management-incentives", type: "extends" },
    { to: "tic-written-checklist", type: "related" }
  ],
  quote: null
},

{
  id: "tic-management-incentives", num: 6, book_id: "tic", category: "leadership",
  title: "How Management Is Paid, and What They Own",
  thesis: "Read the pay plan and the share register before believing anything management says about the long term.",
  reading_time: 2,
  explanation: [
    "Compensation documents are the most reliable published statement of intent a company produces, because they describe what will actually be rewarded rather than what is aspired to. A plan measured on revenue growth predicts revenue growth pursued at whatever cost, and a plan measured on adjusted earnings predicts adjustments. This is not cynicism about individuals, it is the ordinary consequence of paying a capable person for a specific number.",
    "Ownership matters, and the manner of acquisition matters more than the quantity. Shares bought with personal money at market prices sit differently from shares granted, and a founder selling steadily into secondary rounds is stating a view. The useful comparison is holding against annual pay. Where the stake is many times salary the incentive genuinely resembles an owner's, and where pay dominates the horizon is the pay cycle.",
    "The alignments that fail are usually about time horizon rather than direction. Everyone wants the value higher, and the disagreement is about when it should be realised. A management team whose vesting is complete and whose strike sits well below the current price has a different preferred exit date from an investor who entered last year, and that gap decides how the next financing conversation goes."
  ],
  practical: {
    label: "Example: reading the incentives",
    lead: "Find out what management is paid for, what they own, and how they came to own it.",
    bullets: [
      "What specific metrics determine the bonus, and over what period?",
      "How large is each executive's holding relative to annual pay?",
      "Were the shares bought with their own money or granted?",
      "Who has sold in the last two years, and how much?",
      "Whose vesting or strike price implies a different exit date from mine?"
    ]
  },
  application:
    "In private rounds the equivalent documents are the cap table, the option pool and the liquidation preference stack, and they are more revealing than the operating plan. Founders sitting behind three turns of preference are playing for an outcome rather than a return, which changes how they behave in front of a mediocre acquisition offer. Secondary sales at the round price deserve a direct question rather than a raised eyebrow.",
  models: ["incentives", "capital-allocation", "checklist", "second-order"],
  connections: [
    { to: "incentives", type: "extends" },
    { to: "tos-outsider-temperament", type: "related" },
    { to: "csup-people-depth", type: "related" },
    { to: "tic-operating-record", type: "reinforces" },
    { to: "tic-reasons-to-sell", type: "related" }
  ],
  quote: null
},

{
  id: "tic-growth-quality", num: 7, book_id: "tic", category: "investing",
  title: "Growth That Pays for Itself",
  thesis: "Growth funded by capital and growth generated by the business are different things wearing the same label.",
  reading_time: 3,
  explanation: [
    "A growth rate on its own is a number without a denominator. The same twenty percent can come from a business that reinvests a fifth of its cash and from one that consumes external funding every eighteen months, and only the first is compounding. The question is what was spent to buy the increment: capital, discounting, acquisition, or nothing beyond the ordinary operation of the business.",
    "Return on the capital employed settles it. Where incremental capital earns well above its cost, growth is worth paying for and more of it is better. Where it earns below, growth destroys value at a rate proportional to how fast it happens, and the company is converting shareholder money into revenue. The calculation is the same whether the capital arrives as retained earnings, debt or new equity.",
    "Bought growth leaves marks. Receivables and inventory outrunning sales, acquisitions filling the gap left by a slowing core, gross margin drifting down while volumes rise, discounting concentrated in the final weeks of a quarter. Each is a way of borrowing revenue from the future, and the pattern in the working capital usually appears a year or two before it appears in the growth rate."
  ],
  practical: {
    label: "Example: pricing the growth",
    lead: "Work out what each additional dollar of revenue cost, and what the capital behind it earns.",
    bullets: [
      "What did the last year of growth consume in capital and cash?",
      "What does incremental capital earn, and how does that compare with its cost?",
      "Is growth coming from the existing business or from acquisitions?",
      "Have receivables, inventory or deferred costs grown faster than sales?",
      "If external funding stopped tomorrow, what growth rate remains?"
    ]
  },
  application:
    "In growth equity this separates a company that could slow spending and remain solvent from one that cannot, and it is answerable from the cohort data rather than from the plan. Payback on customer acquisition, the trend in that payback across eight quarters, and gross margin by cohort together tell you whether the growth is a product of the business or a product of the last round.",
  models: ["return-on-capital", "cost-of-capital", "free-cash-flow", "capital-cycle"],
  connections: [
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "compounding", type: "related" },
    { to: "csup-margins", type: "related" },
    { to: "tic-how-it-makes-money", type: "extends" },
    { to: "tic-why-they-stay", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tic-reasons-to-sell", num: 8, book_id: "tic", category: "decision-making",
  title: "Write the Sell Reasons at the Buy",
  thesis: "Decide in advance what would make you exit, while you still have no position to defend.",
  reading_time: 3,
  explanation: [
    "The best time to specify the conditions for selling is before owning anything, because at that moment there is no holding to justify. Afterwards the same analysis is done by someone with a position, a stated view and a colleague who remembers the recommendation, and the evidence gets read accordingly. The written exit conditions are a message from the version of you who had nothing at stake.",
    "They only function if they name observable events. A condition such as deteriorating fundamentals will be satisfied by nothing, because deterioration is always arguable in the moment. Two consecutive quarters of falling gross margin, the departure of the named executive, the loss of either of the two largest customers: these are checkable by someone who disagrees with you, which is the property that matters.",
    "A trigger is not an instruction to sell. It is an instruction to reopen the file and defend the position again from the beginning, which is a lower bar to set and therefore one that gets honoured. The benefit arrives at the review, because the original document says what you thought would matter, so you can see whether the thesis broke, whether you misjudged it, or whether you lost patience."
  ],
  practical: {
    label: "Example: writing the exit conditions",
    lead: "At the point of investing, write down the observable events that would end the position and who checks them.",
    bullets: [
      "What specific, observable events would tell me this thesis is broken?",
      "Which two assumptions am I most likely to be wrong about?",
      "Who reviews the file when a trigger fires, and how soon?",
      "What would I need to see to add rather than exit?",
      "Is any condition worded so vaguely that it can never be met?"
    ]
  },
  application:
    "Illiquidity makes the discipline more useful rather than less, because the decision it governs is the follow-on rather than the exit. Writing the conditions at entry gives the reserve decision a standard that predates the relationship with the founder, the board seat and the carried mark. Firms that skip this tend to fund their losers in proportion to how well they know them.",
  models: ["decision-quality", "checklist", "endowment", "loss-aversion"],
  connections: [
    { to: "csup-when-to-sell", type: "extends" },
    { to: "tib-ulysses-contract", type: "reinforces" },
    { to: "tib-backcasting", type: "related" },
    { to: "tic-written-checklist", type: "extends" },
    { to: "tic-why-they-stay", type: "related" }
  ],
  quote: null
}

);
