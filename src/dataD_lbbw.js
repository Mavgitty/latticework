/* The Little Book That Builds Wealth — Pat Dorsey — 7 ideas */
window.DB.ideas.push(

{
  id: "lbbw-four-sources", num: 1, book_id: "lbbw", category: "strategy",
  title: "Four Sources, Nothing Else",
  thesis: "Only four things keep competitors out for long, and everything else is decoration.",
  reading_time: 3,
  explanation: [
    "Dorsey's taxonomy has four entries: intangible assets, customer switching costs, network effects, and cost advantages. The value of fixing the number is diagnostic rather than descriptive. A closed list turns moat analysis into a matching exercise, where the analyst has to name which entry applies and by what mechanism, instead of assembling a list of pleasant company attributes that all happen to be true.",
    "Two of the four sit on the producer's side of the transaction. Intangible assets cover brands, patents and regulatory approvals, and a brand qualifies only when it changes what a customer will pay or how often they return, not when it is merely well known. Cost advantages come from cheaper processes, better locations, unique resources or real scale, and each of those has a different life expectancy: a process can be copied, a deposit cannot be moved.",
    "The question the list is built to answer is whether a well funded competitor could take these customers at a profit. Naming the source answers it, because each source implies a different attacker and a different way of failing. If nothing on the list fits, the honest conclusion is that returns are high for reasons that will not last, which is the normal condition of a good business."
  ],
  practical: {
    label: "Example: naming the source",
    lead: "Work through the four entries and require a mechanism, not an adjective, before recording a moat.",
    bullets: [
      "Which of the four sources applies here, and what is the mechanism?",
      "What would a competitor with equal funding have to do to take a customer?",
      "If the answer is a brand, does it change price paid or repeat rate?",
      "If the answer is cost, is it process, location, resource or scale?",
      "If no entry fits, am I recording that plainly or reaching for a fifth?"
    ]
  },
  application:
    "In venture the question arrives early and gets answered with product quality. Forcing the answer onto the four sources is a useful constraint at seed stage: if the defence is speed of shipping, that is not on the list, and the underwriting should assume the advantage is temporary. Where a source is nameable, it also tells you which milestone to fund, because each barrier is built by a different activity.",
  models: ["durability", "barriers-to-entry", "monopoly", "return-on-capital"],
  connections: [
    { to: "s7p-benefit-and-barrier", type: "extends" },
    { to: "lbbw-customer-captivity", type: "related" },
    { to: "lbbw-not-moats", type: "contrasts" },
    { to: "pcs-entry-barriers", type: "reinforces" },
    { to: "zto-monopoly", type: "related" }
  ],
  quote: null
},

{
  id: "lbbw-customer-captivity", num: 2, book_id: "lbbw", category: "strategy",
  title: "Moats Held by the Customer",
  thesis: "Switching costs and network effects sit in the customer's ledger, not the company's cost base.",
  reading_time: 3,
  explanation: [
    "Switching costs are measured on the customer's side, as the loss taken by moving. Dorsey separates the varieties that matter: money spent on retraining and reimplementation, time and disruption while the change happens, and the risk that the replacement does not work. A long contract is not a switching cost. It is a delay before the moment the customer gets to express what the switching cost actually is.",
    "Network effects are the rarest of the four and the strongest when genuinely present, because the barrier grows as the company does. They appear mostly where the product is information or a transaction rather than a physical good, since a physical good's value to me does not usually rise because you bought one too. Dorsey's caution is that most claimed network effects are scale economies wearing a better name.",
    "Both of these moats are held by someone else, which changes how they are checked. Retention rates, renewal pricing and the behaviour of the newest cohort are the evidence, and they look forward in a way that a market share figure does not. A moat sitting in the customer's ledger can also be handed back by the company, through a clumsy repricing or a failed migration."
  ],
  practical: {
    label: "Example: measuring captivity",
    lead: "Estimate the loss a customer would take by leaving, then check whether observed behaviour matches the estimate.",
    bullets: [
      "What would this customer lose in money, time and data by switching?",
      "Is the product embedded in a workflow, or sitting beside one?",
      "What proportion of customers renewed last year without being discounted?",
      "Does each new user make the product better for existing users, and how?",
      "Is the retention I see loyalty, or a contract that has not expired?"
    ]
  },
  application:
    "In growth investing this separates net revenue retention that comes from captivity from net revenue retention that comes from a category still expanding. The test is the cohort that had a real reason to leave: a budget cut, a new head of function, a competitor on the shortlist. Retention through those events is evidence of a switching cost. Retention through a boom is evidence of a boom.",
  models: ["switching-costs", "network-economies", "critical-mass", "durability"],
  connections: [
    { to: "s7p-switching-costs", type: "extends" },
    { to: "s7p-network-economies", type: "related" },
    { to: "lbbw-four-sources", type: "extends" },
    { to: "lbbw-moat-in-the-numbers", type: "reinforces" },
    { to: "pcs-buyer-power", type: "contrasts" }
  ],
  quote: null
},

{
  id: "lbbw-not-moats", num: 3, book_id: "lbbw", category: "decision-making",
  title: "Things That Look Like Moats",
  thesis: "Great products, big market share, fine execution and good managers do not keep competitors out.",
  reading_time: 3,
  explanation: [
    "Take the four impostors in turn. A great product is an invitation to imitation unless something stops the imitator, and that something is the moat rather than the product. Large market share is an outcome and not a cause, and share held in an industry where nobody earns a return above their cost of capital is share of nothing. Airlines have had dominant carriers on most routes for decades.",
    "Operational excellence and good management fail for the same reason: both can be acquired. A competitor can recruit the operator, buy the system and copy the process, and the good manager can leave. Dorsey's argument is not that these attributes are worthless, since they clearly produce results, but that they produce results which must be re-earned every year rather than results protected by a structure.",
    "The mistake is systematic rather than careless. Product quality, share, execution and management are visible, measurable and present in every management presentation, while barriers are structural, dull and mostly invisible. The available evidence therefore points at the wrong four attributes, and analysis that follows the available evidence keeps arriving at a moat that is not there. The correction is to treat all four as prompts to look harder rather than as findings."
  ],
  practical: {
    label: "Example: separating quality from defence",
    lead: "For each attribute the company is proud of, ask what stops a competitor acquiring the same thing.",
    bullets: [
      "Is this product advantage protected by anything a competitor cannot buy?",
      "Does anyone in this industry earn a return above their cost of capital?",
      "Which of these operating strengths would survive the departure of five people?",
      "Has a competitor already copied the thing we are calling an advantage?",
      "Am I describing why the business is good or why it stays good?"
    ]
  },
  application:
    "This is the most common failure in venture memos, where product depth, a named logo list and a strong founding team are presented as defensibility. All three are real and none is a barrier. The discipline is a separate section on what a competitor with the same capital would have to overcome, written without reference to how good the team is, then compared honestly with the moat section.",
  models: ["wysiati", "narrative-fallacy", "barriers-to-entry", "checklist"],
  connections: [
    { to: "s7p-not-operations", type: "reinforces" },
    { to: "lbbw-four-sources", type: "contrasts" },
    { to: "lbbw-industry-structure", type: "related" },
    { to: "csup-people-depth", type: "contrasts" },
    { to: "tbs-narrative-fallacy", type: "related" }
  ],
  quote: null
},

{
  id: "lbbw-moat-trend", num: 4, book_id: "lbbw", category: "strategy",
  title: "Width and Direction",
  thesis: "A moat has a width and a direction, and the direction is what the price usually misses.",
  reading_time: 2,
  explanation: [
    "Two readings are available and they are independent. Width is how far returns exceed the cost of capital and how long that gap should hold. Trend is whether the barrier is thickening or thinning right now. Dorsey treats the second as a separate rating because a business can have an unarguable moat and a deteriorating one at the same moment, and which reading matters depends on the holding period.",
    "The dangerous combination is wide and narrowing, because that is when the reported numbers look their best. Returns are still being harvested from an installed base won under the old conditions, so margins and retention lag the change in the barrier by years. The opposite case, narrow and widening, tends to be underpriced for exactly the same reason, since nothing in the current accounts shows it yet.",
    "Trend shows up in the marginal customer rather than the average one. Pricing achieved on new contracts against renewals, win rates against a named new entrant, gross margin on the most recent cohort, whether attempts to enter the market are being abandoned or repeated. Each is a small number attached to a large question, and each moves well before the aggregate figures do."
  ],
  practical: {
    label: "Example: reading the direction",
    lead: "Rate width and trend separately, and gather the trend evidence from the newest business only.",
    bullets: [
      "Is the barrier wider or narrower than it was three years ago?",
      "What price is being achieved on new business versus renewals?",
      "Who has entered this market recently, and did they get traction?",
      "Are the best numbers coming from customers won under conditions that no longer hold?",
      "Which single trend indicator would I check first if I could check one?"
    ]
  },
  application:
    "For a growth position the trend rating is the one that sets the exit multiple, since a buyer several years out is paying for the barrier as it will be then. Practically this means separating the metrics that describe the installed base from those that describe this quarter's new logos, and underwriting the exit on the second set. Most models do the reverse and blend the two together.",
  models: ["durability", "feedback-loops", "regression", "return-on-capital"],
  connections: [
    { to: "lbbw-moat-erosion", type: "extends" },
    { to: "lbbw-moat-in-the-numbers", type: "reinforces" },
    { to: "s7p-benefit-and-barrier", type: "related" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "pcs-industry-evolution", type: "reinforces" }
  ],
  quote: null
},

{
  id: "lbbw-moat-in-the-numbers", num: 5, book_id: "lbbw", category: "investing",
  title: "The Moat in the Numbers",
  thesis: "A real moat leaves a signature: high returns on capital that persist when they should not.",
  reading_time: 3,
  explanation: [
    "The signature is a return on invested capital that stays above the cost of capital for longer than competition should allow. One good year proves nothing, because a cyclical peak produces the same figure. Dorsey's standard is a long history including a downturn, which is enough time for entrants to have arrived and for the return to have been competed away if it was ever going to be.",
    "Free cash flow does the confirming work that earnings cannot. A business converting a high proportion of profit into cash, and still doing so once growth slows, is being paid for something other than growth. Stable gross margins through a period when volumes fell are the other useful trace, because they show that price held at the moment when the pressure to discount was real.",
    "The inference runs one way only. Numbers confirm a moat, they do not identify one. High returns with no nameable source are a cyclical peak, an accounting artefact, or a barrier in the last part of its life, and all three look identical in a spreadsheet. Both directions have to be run: name the source, then require the figures to agree with what was named."
  ],
  practical: {
    label: "Example: checking the trace",
    lead: "Run a long history of returns on capital and cash conversion, then require it to match the named source.",
    bullets: [
      "How many years has return on capital exceeded the cost of capital?",
      "Does the series include a downturn, or only favourable conditions?",
      "What proportion of reported profit arrived as free cash flow, by year?",
      "Did gross margin hold in the year volumes fell?",
      "Do the numbers agree with the source I named, or only with each other?"
    ]
  },
  application:
    "Private companies rarely have a long history, so the equivalent evidence is narrower and has to be built. Contribution margin by cohort, payback on acquisition cost across successive years, and pricing achieved as buyers became larger and more sophisticated. Where the history is too short to test persistence at all, that is a fact about how much confidence is available rather than an argument for using the plan instead.",
  models: ["return-on-capital", "free-cash-flow", "cost-of-capital", "accounting-quality"],
  connections: [
    { to: "lbbw-four-sources", type: "reinforces" },
    { to: "lbbw-moat-trend", type: "reinforces" },
    { to: "fsh-cash-versus-earnings", type: "related" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "fr-roe-decomposed", type: "extends" }
  ],
  quote: null
},

{
  id: "lbbw-industry-structure", num: 6, book_id: "lbbw", category: "strategy",
  title: "Where Moats Are Available",
  thesis: "Some industries produce moats routinely and others produce almost none, whatever the companies do.",
  reading_time: 2,
  explanation: [
    "The rate at which moats occur varies enormously by industry, and Dorsey is direct about the consequence. Asset management, exchanges, medical devices and narrow industrial niches throw up defensible positions regularly. Airlines, retail, restaurants, construction and commodity manufacturing almost never do, and the exceptions there tend to be local and temporary rather than structural features of the industry.",
    "The mechanism is capacity. Where output is undifferentiated, customers face no cost in moving, and anyone with financing can add supply within a year or two, high returns are an invitation that gets accepted. The return is competed away before an operator can bank it, and the operator who fights hardest to defend share is often the one who destroys the industry's economics fastest.",
    "That argues for an order of work: industry first, company second. Searching for the best operator in a structurally hostile industry costs more effort and returns less than accepting a merely competent operator where the structure does the defending. It also calibrates what management can be expected to achieve, since the ceiling in a poor industry sits well below the floor in a good one."
  ],
  practical: {
    label: "Example: starting with the structure",
    lead: "Establish what the industry pays its participants before forming any view on a particular company.",
    bullets: [
      "What return on capital do the median and the best participants here earn?",
      "How quickly can new capacity be added, and by whom?",
      "Is the output differentiated in any way the customer will pay for?",
      "How many durable moats has this industry produced in twenty years?",
      "Am I underwriting an exceptional operator to escape an ordinary industry?"
    ]
  },
  application:
    "This is the argument for sector concentration in a fund rather than opportunistic breadth. Some categories generate defensible companies at a rate that repays continuous coverage and some do not, and the base rate is knowable in advance from public comparables. A deal in a category that has produced no durable winner in two decades needs a specific reason why this one differs, stated before diligence starts rather than after.",
  models: ["five-forces", "capital-cycle", "barriers-to-entry", "base-rates"],
  connections: [
    { to: "pcs-industry-structure", type: "extends" },
    { to: "pcs-five-forces", type: "reinforces" },
    { to: "lbbw-four-sources", type: "related" },
    { to: "lbbw-not-moats", type: "reinforces" },
    { to: "zto-monopoly", type: "related" }
  ],
  quote: null
},

{
  id: "lbbw-moat-erosion", num: 7, book_id: "lbbw", category: "strategy",
  title: "How Moats Are Lost",
  thesis: "Moats close from outside by technology and from inside by decisions that look like growth.",
  reading_time: 3,
  explanation: [
    "Technology closes a moat by changing the basis of the barrier rather than by beating the company on its own terms. Switching costs disappear when the workflow they were embedded in is replaced. Distribution advantages disappear when the channel does. Dorsey's observation is that the incumbent usually wins the fight it is having and loses the one it did not notice beginning, because the second one arrives in a different category.",
    "The more interesting failure is self-inflicted, and it usually arrives dressed as growth. Extending a premium brand into a segment that buys on price. Expanding beyond the region where the cost advantage exists. Buying businesses in industries the moat does not cover. Discounting to hold share against a competitor with nothing to lose. Each decision is defensible alone, and each spends part of the barrier to buy revenue.",
    "This kind of erosion appears in the company's actions well before it appears in the accounts, because the installed base keeps paying while the barrier is being dismantled. Watching where capital is going is therefore a better early indicator than watching margins, and the specific question is whether new spending is being applied inside the moat or somewhere the moat does not reach."
  ],
  practical: {
    label: "Example: watching the spending",
    lead: "Track where the last three years of capital went, and mark each deployment inside or outside the moat.",
    bullets: [
      "Which recent decisions traded barrier for revenue, and was that trade named?",
      "Has the brand been extended into a segment that buys on price?",
      "Does the cost advantage exist in the geography being entered next?",
      "What technology change would make the switching cost irrelevant rather than smaller?",
      "Is the current margin being earned by the business or by its history?"
    ]
  },
  application:
    "Growth capital tends to fund precisely the moves that spend a moat, because those are the moves that produce revenue fastest. A use of proceeds pointed at new geographies, adjacent segments and acquisitions deserves the question of whether the advantage travels, asked one line item at a time. Where it does not travel, the plan is buying growth with defensibility, and the exit is being priced on the wrong one.",
  models: ["capital-allocation", "second-order", "durability", "incentives"],
  connections: [
    { to: "lbbw-moat-trend", type: "extends" },
    { to: "lbbw-customer-captivity", type: "related" },
    { to: "s7p-counter-positioning", type: "related" },
    { to: "tos-capital-allocation", type: "contrasts" },
    { to: "pcs-industry-evolution", type: "related" }
  ],
  quote: null
}

);
