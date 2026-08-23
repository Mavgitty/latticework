/* Zero to One — Peter Thiel with Blake Masters — 12 ideas */
window.DB.ideas.push(

{
  id: "zto-zero-to-one", num: 1, book_id: "zto", category: "strategy",
  title: "Zero to One",
  thesis: "Copying what works takes the world from one to n. Creating something new takes it from zero to one.",
  reading_time: 3,
  explanation: [
    "Thiel splits progress into two kinds. Horizontal progress is copying things that work: taking a proven model into a new market, adding a competitor to an existing category, going from one to n. Vertical progress is doing something nobody has done, going from zero to one.",
    "Both create value and they are not equally available. Horizontal progress is legible, fundable and crowded, which is exactly why its returns get competed away. Vertical progress is hard to evaluate precisely because there is nothing to compare it to, and that illegibility is where the excess return lives.",
    "The uncomfortable implication is that a plan which is easy to explain by analogy is usually a plan whose economics will be competed to zero. If the pitch is that this is the X of Y, the question is what stops the next four teams making the same pitch."
  ],
  practical: {
    label: "Example: which kind of progress is this?",
    lead: "Establish whether the company is creating a new thing or arbitraging a proven one, and price it accordingly.",
    bullets: [
      "Is the core claim that this model works elsewhere, or that this has never existed?",
      "How many teams could credibly make the identical pitch this year?",
      "What does the company know or possess that a fast follower would have to rebuild?",
      "If this is horizontal, what is the durable local advantage: regulation, distribution, relationships?",
      "If this is vertical, what is the evidence it works at all, given there are no comparables?"
    ]
  },
  application:
    "Horizontal businesses can be excellent investments where the local advantage is real, and they should be underwritten as execution bets with compressing margins rather than as category creators. Vertical ones carry technical and market risk instead, and the diligence has to shift from comparables to whether the thing functions.",
  models: ["monopoly", "contrarian", "durability", "power-law"],
  connections: [
    { to: "zto-monopoly", type: "extends" },
    { to: "zto-secrets", type: "reinforces" },
    { to: "zto-ten-x", type: "extends" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "scale-economies", type: "related" }
  ],
  quote: {
    text: "Doing what we already know how to do takes the world from 1 to n, adding more of something familiar. But every time we create something new, we go from 0 to 1.",
    attribution: "Peter Thiel, Zero to One",
    why: "The framing matters more than the arithmetic. Thiel is arguing that most activity described as innovation is replication, and that the two have entirely different return profiles despite being funded on the same terms."
  }
},

{
  id: "zto-monopoly", num: 2, book_id: "zto", category: "strategy",
  title: "Competition Is for Losers",
  thesis: "Perfect competition destroys profit. The only durably valuable position is a monopoly of something.",
  reading_time: 3,
  explanation: [
    "In a perfectly competitive market, price falls to marginal cost and no participant earns an economic profit. That is the textbook result and Thiel's point is that it is also the practical destination of any business without a defensible difference.",
    "His conclusion is deliberately provocative: aim to be the only provider of something specific, rather than a better provider of something contested. Not a legal monopoly, but a position where you own a well-defined market because your product is genuinely different in a way customers care about.",
    "The tell is in how founders describe their market. Companies with real pricing power describe a narrow market they dominate. Companies without it describe a vast market of which they hold a tiny share, because the enormous denominator hides the absence of a position."
  ],
  practical: {
    label: "Example: reading the market definition",
    lead: "Watch how the company draws its own market boundary; the drawing tells you what it has.",
    bullets: [
      "Does the company describe a small market it owns or a huge market it participates in?",
      "Can it raise prices without losing volume, and has it tested that?",
      "What is the gross margin, and what has it done over three years?",
      "Who is the second-best option for its customers, and how far behind is it?",
      "If competitors doubled their spend, what would actually change?"
    ]
  },
  application:
    "Pricing power is the cleanest observable proxy for a defensible position, and it is measurable: price increases taken, discount rates, win rates against the named alternative. A market-size slide is not evidence of a position, and an intersecting-circles market definition is usually evidence of its absence.",
  models: ["monopoly", "durability", "scale-economies", "incentives"],
  connections: [
    { to: "zto-last-mover", type: "extends" },
    { to: "zto-small-market", type: "reinforces" },
    { to: "zto-ten-x", type: "reinforces" },
    { to: "second-order-effects", type: "related" },
    { to: "scale-economies", type: "related" }
  ],
  quote: {
    text: "All happy companies are different: each one earns a monopoly by solving a unique problem. All failed companies are the same: they failed to escape competition.",
    attribution: "Peter Thiel, Zero to One",
    why: "The inversion of Tolstoy is doing real work. Thiel is claiming that failure has one dominant cause and success has many forms, which implies the useful diligence question is about escape from competition rather than about the quality of execution."
  }
},

{
  id: "zto-last-mover", num: 3, book_id: "zto", category: "strategy",
  title: "The Last Mover Advantage",
  thesis: "It is better to be the last to make a great improvement in a market than the first to enter it.",
  reading_time: 2,
  explanation: [
    "First-mover advantage is real but frequently overstated, because being first is only a means to an end. The end is durable market share and cash flow, and plenty of first movers spend their advantage discovering the market for someone else.",
    "The value of a business is the present value of cash flows it will generate over its whole life, and for most technology companies the great majority of that value sits many years out. So the question is not who arrives first but who is still generating cash a decade later.",
    "This reframes diligence toward durability. A company growing quickly into a position that will be contested in three years is worth far less than a slower one whose position compounds, even though the first looks better on this year's numbers."
  ],
  practical: {
    label: "Example: testing durability",
    lead: "Ask what the business looks like in ten years, and what has to hold for that to be true.",
    bullets: [
      "Where does the cash flow come from in year eight, and who else could take it?",
      "What has strengthened as the company has grown, rather than merely got bigger?",
      "Which of its advantages are structural and which are a function of being early?",
      "What technology shift would make the current product irrelevant?",
      "Has any incumbent ever lost this kind of position, and how?"
    ]
  },
  application:
    "Most venture models are dominated by terminal value, which means they are dominated by an assumption about durability that rarely gets tested as hard as the growth rate does. Underwriting the tenth year explicitly, and asking who competes it away, changes both the price and sometimes the answer.",
  models: ["durability", "monopoly", "compounding", "power-law"],
  connections: [
    { to: "zto-monopoly", type: "extends" },
    { to: "compounding", type: "reinforces" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "zto-seven-questions", type: "related" },
    { to: "scale-economies", type: "related" }
  ],
  quote: null
},

{
  id: "zto-secrets", num: 4, book_id: "zto", category: "strategy",
  title: "Secrets",
  thesis: "Every great company is built on a secret: something important and true that most people do not yet believe.",
  reading_time: 3,
  explanation: [
    "Thiel's category of a secret sits between the conventional and the impossible. Conventional truths are already priced. Impossible things cannot be built. A secret is something hard but achievable that the consensus has not accepted, and it is the only place a durable advantage can start.",
    "He argues that the modern default is to believe there are no secrets left, which is convenient because looking for them is uncomfortable and mostly unrewarded. The belief is self-fulfilling: if you assume the important things are known, you stop looking in the places where they are not.",
    "Secrets tend to be found where inquiry is socially discouraged rather than where it is technically difficult. Areas that are unfashionable, embarrassing, or dismissed as solved are where the searching is cheapest and least crowded."
  ],
  practical: {
    label: "Example: finding the secret in a pitch",
    lead: "Ask what this team believes that informed people in the industry do not.",
    bullets: [
      "What does the founder know that the market has not accepted?",
      "How did they come to know it, and can it be verified?",
      "Why has nobody acted on it: is it hard, unfashionable, or newly possible?",
      "What would have to be true for the consensus to be right and them wrong?",
      "Is the insight about technology, about customers, or merely about timing?"
    ]
  },
  application:
    "The strongest pitches contain a specific, falsifiable claim about the world that the industry currently disputes, usually formed from direct operating experience. The weakest ones contain only a market map and a plan. Where there is no secret, returns depend on execution against equally informed competitors, which is a much thinner reason to invest.",
  models: ["contrarian", "monopoly", "circle-of-competence", "social-proof"],
  connections: [
    { to: "zto-contrarian-question", type: "extends" },
    { to: "zto-zero-to-one", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "social-proof", type: "contrasts" },
    { to: "circle-of-competence", type: "related" }
  ],
  quote: null
},

{
  id: "zto-power-law", num: 5, book_id: "zto", category: "investing",
  title: "The Power Law",
  thesis: "In venture, one investment outperforms the entire rest of the portfolio combined.",
  reading_time: 3,
  explanation: [
    "Returns are not normally distributed. In a venture portfolio the best investment typically returns more than all the others put together, and the second best returns more than everything below it. This is not a statistical curiosity, it is the central fact of the asset class.",
    "The consequences are counterintuitive and largely unimplemented. Diversifying to reduce variance also reduces the chance of holding the one company that matters. Every investment must be capable of returning the whole fund, which means an investment that could plausibly return three times is not a small win but a category error.",
    "It also applies within a company. A small number of products, customers and employees generate most of the value, and treating them proportionally to their number rather than their contribution is a common and expensive mistake."
  ],
  practical: {
    label: "Example: the fund-returner test",
    lead: "Apply the only question the power law permits.",
    bullets: [
      "Could this single investment return the entire fund? If not, why is it in the portfolio?",
      "What has to be true for that outcome, and is it plausible rather than merely arithmetic?",
      "Am I diversifying because it improves returns or because it feels safer to defend?",
      "Which one company in the current portfolio is most likely to matter, and is it getting proportionate attention?",
      "Am I allocating follow-on capital by conviction or by evenness?"
    ]
  },
  application:
    "The power law and loss aversion pull in opposite directions, which is why the discipline has to be set as policy rather than decided per deal. It also explains why the honest question at entry is about the top outcome band rather than about the expected case, and why a good business with a capped outcome can still be the wrong investment for this structure.",
  models: ["power-law", "probability", "narrow-framing", "opportunity-cost"],
  connections: [
    { to: "tfs-narrow-framing", type: "reinforces" },
    { to: "probabilistic-thinking", type: "extends" },
    { to: "selectivity", type: "reinforces" },
    { to: "tii-diversification", type: "contrasts" },
    { to: "opportunity-cost", type: "related" }
  ],
  quote: null
},

{
  id: "zto-small-market", num: 6, book_id: "zto", category: "strategy",
  title: "Start With a Small Market",
  thesis: "Dominate a market small enough to own, then expand outward from a position of strength.",
  reading_time: 2,
  explanation: [
    "Every large monopoly began by owning something small. The initial market should be narrow enough that a small company can become the obvious choice within it, and specific enough that the boundary is real rather than a segment on a slide.",
    "Starting broad feels ambitious and is usually fatal. A tiny share of a huge market means no pricing power, no reference customers, no word of mouth and a permanent fight on every deal. A dominant share of a small market produces all four, which is what funds the expansion.",
    "The sequencing is what matters: concentric expansion into adjacent markets from a base you already own, rather than simultaneous attack on several fronts. The base is what makes the next market winnable."
  ],
  practical: {
    label: "Example: testing the beachhead",
    lead: "Establish whether the first market is genuinely ownable and genuinely a stepping stone.",
    bullets: [
      "What is the specific first market, described in a sentence a customer would recognise?",
      "What share does the company hold in it now?",
      "Could this company be the obvious default there within two years?",
      "What is the adjacent market, and what does winning the first one give you there?",
      "Is the expansion path concentric, or a change of business?"
    ]
  },
  application:
    "A crisply defined beachhead with high share is a better signal than a large addressable market with low share, and it is more diligenceable: you can call every customer in a narrow market. Beware companies that have widened their stated market between rounds without having won the first one.",
  models: ["monopoly", "critical-mass", "distribution", "specialisation"],
  connections: [
    { to: "zto-monopoly", type: "reinforces" },
    { to: "critical-mass", type: "reinforces" },
    { to: "specialisation", type: "extends" },
    { to: "zto-distribution", type: "related" },
    { to: "circle-of-competence", type: "related" }
  ],
  quote: null
},

{
  id: "zto-ten-x", num: 7, book_id: "zto", category: "strategy",
  title: "Ten Times Better",
  thesis: "Proprietary technology must be dramatically better than the alternative, not incrementally better.",
  reading_time: 2,
  explanation: [
    "Thiel's rule of thumb is an order of magnitude. A product that is twenty or thirty per cent better than the incumbent is an improvement, and improvements do not overcome switching costs, incumbency, distribution and inertia. A tenfold difference does.",
    "The multiple can be on any axis customers care about: cost, speed, accuracy, or the elimination of a step. What matters is that the difference is large enough to be obvious without a comparison chart, because a difference that requires explanation will not survive a procurement process.",
    "This is also a test of a claimed technical moat. If the advantage cannot be stated as a large multiple on a specific dimension, it is probably a feature rather than a position, and features get copied."
  ],
  practical: {
    label: "Example: locating the multiple",
    lead: "Name the axis and the size of the difference, in the customer's own terms.",
    bullets: [
      "On what dimension is this better, stated as a number?",
      "Is that dimension the one customers actually buy on?",
      "Would a customer notice the difference without being shown a chart?",
      "How long would a well-resourced incumbent need to close the gap?",
      "Is the advantage in the technology, the data, or the workflow it sits inside?"
    ]
  },
  application:
    "This is the most useful single question to ask of an AI-era product claim, because a thin wrapper around a general model can look impressive and rarely produces a tenfold difference on any axis a buyer cares about. Where the multiple is real, it usually rests on proprietary data, a workflow the incumbent cannot restructure, or both.",
  models: ["monopoly", "durability", "distribution", "contrarian"],
  connections: [
    { to: "zto-monopoly", type: "reinforces" },
    { to: "zto-zero-to-one", type: "extends" },
    { to: "zto-seven-questions", type: "related" },
    { to: "scale-economies", type: "related" },
    { to: "second-order-effects", type: "related" }
  ],
  quote: null
},

{
  id: "zto-distribution", num: 8, book_id: "zto", category: "strategy",
  title: "Distribution Decides",
  thesis: "A superior product with no route to customers loses to an inferior one that has a route.",
  reading_time: 3,
  explanation: [
    "Engineers and founders systematically undervalue distribution because it is not the part they enjoy and because good sales is invisible when done well. The bias produces a specific failure: a genuinely better product that never reaches enough customers to matter.",
    "Distribution methods have to match deal size, and the middle is where companies die. Very large contracts justify direct enterprise selling. Very small ones require viral or self-serve motion at near-zero acquisition cost. Deals in between are too small to fund a salesperson and too large to sell themselves.",
    "The corollary is that distribution capability is part of the product's viability, not a subsequent activity. A company whose economics only work with a channel it does not have is not an execution risk, it is a design problem."
  ],
  practical: {
    label: "Example: does the motion match the price?",
    lead: "Check that the acquisition method is economically consistent with the contract value.",
    bullets: [
      "What is the average contract value, and what does it cost to win one?",
      "Is the motion self-serve, inside sales, field sales, or channel, and does the price support it?",
      "Is this company stuck in the dead zone: too expensive to sell itself, too cheap to justify a rep?",
      "Has payback period improved or worsened as the company has grown?",
      "What proportion of revenue comes from channels that will not scale?"
    ]
  },
  application:
    "Acquisition cost relative to contract value is where a great deal of otherwise good software goes to die, and it is knowable early from the company's own cohort data. A product-led company adding an enterprise motion, or the reverse, is making a distribution change as significant as a product change and should be diligenced as one.",
  models: ["distribution", "scale-economies", "incentives", "monopoly"],
  connections: [
    { to: "zto-small-market", type: "reinforces" },
    { to: "scale-economies", type: "reinforces" },
    { to: "incentives", type: "related" },
    { to: "zto-seven-questions", type: "related" },
    { to: "feedback-loops", type: "related" }
  ],
  quote: null
},

{
  id: "zto-definite-optimism", num: 9, book_id: "zto", category: "strategy",
  title: "Definite Optimism",
  thesis: "Believing the future will be better is not enough. You need a specific plan for making it so.",
  reading_time: 2,
  explanation: [
    "Thiel sorts attitudes to the future along two axes: optimistic or pessimistic, definite or indefinite. Definite optimism holds that the future will be better and that someone has to design it. Indefinite optimism holds that things will improve without anyone in particular being responsible for how.",
    "His claim is that indefinite optimism dominates modern institutions, and that it produces characteristic behaviour: diversification over conviction, process over product, optionality over commitment. It is comfortable and it does not build anything specific.",
    "A definite plan can be wrong, which is exactly what makes it useful. It is falsifiable, it can be executed against, and it lets you tell the difference between progress and activity."
  ],
  practical: {
    label: "Example: definite or indefinite?",
    lead: "Test whether the plan describes a designed outcome or a hope with milestones.",
    bullets: [
      "Can the founder describe what the company looks like in five years, concretely?",
      "Does the plan have a specific sequence, or a list of options to be kept open?",
      "Is the strategy to build one thing well or to test many things cheaply?",
      "What would falsify the plan, and when would that be visible?",
      "Am I funding a designed outcome, or funding optionality and calling it strategy?"
    ]
  },
  application:
    "Definite plans are easier to underwrite and easier to hold through a drawdown, because there is something specific to check against. Indefinite plans, including highly optionality-driven ones, require you to trust the operator rather than the thesis, which is a legitimate bet but a different one and should be priced as such.",
  models: ["contrarian", "durability", "decision-quality", "power-law"],
  connections: [
    { to: "zto-seven-questions", type: "reinforces" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "independent-thinking", type: "related" },
    { to: "tib-decision-trees", type: "contrasts" },
    { to: "zto-secrets", type: "related" }
  ],
  quote: null
},

{
  id: "zto-contrarian-question", num: 10, book_id: "zto", category: "learning",
  title: "The Contrarian Question",
  thesis: "What important truth do very few people agree with you on? A good answer is rare and valuable.",
  reading_time: 2,
  explanation: [
    "Thiel's interview question is hard for structural reasons. Answering it requires holding a view that is both consequential and unpopular, and unpopular views are expensive to hold, so most people quietly do not have any.",
    "A good answer has a specific shape: it names something most informed people believe, and gives a reason to think the opposite, which can be tested. Answers that are merely provocative fail, and so do answers that are conventional wisdom dressed as heresy.",
    "The value of the question is diagnostic rather than rhetorical. It reveals whether someone has done independent work in an area, because independent work is how you end up disagreeing with people who have not."
  ],
  practical: {
    label: "Example: pressure-testing an answer",
    lead: "A real contrarian view survives four follow-up questions.",
    bullets: [
      "What exactly does the consensus believe, stated fairly?",
      "What is your reason for the opposite, and where did it come from?",
      "What evidence would show you were wrong?",
      "Who are the best-informed people who disagree, and what is their strongest argument?",
      "What are you doing differently as a result of holding this view?"
    ]
  },
  application:
    "Asked of a founder, this separates operators with earned insight from ones fluent in the category's vocabulary. Asked of yourself before an investment, it forces you to state what your edge on this deal actually is, and the absence of an answer is informative.",
  models: ["contrarian", "social-proof", "confirmation-bias", "circle-of-competence"],
  connections: [
    { to: "zto-secrets", type: "extends" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "social-proof", type: "contrasts" },
    { to: "confirmation-bias", type: "related" },
    { to: "tib-wanna-bet", type: "related" }
  ],
  quote: {
    text: "The most contrarian thing of all is not to oppose the crowd but to think for yourself.",
    attribution: "Peter Thiel, Zero to One",
    why: "It closes off the easy misreading of his own argument. Reflexive contrarianism is still outsourcing your view to the crowd, just with the sign reversed, and it has worse odds than following."
  }
},

{
  id: "zto-founding-team", num: 11, book_id: "zto", category: "people",
  title: "The Founding Configuration",
  thesis: "Early decisions about people and equity are close to irreversible, so they deserve disproportionate care.",
  reading_time: 2,
  explanation: [
    "Thiel's analogy is that founding a company is like a marriage entered into quickly with people you barely know, with the added feature that the terms are difficult to change later. Cap tables, titles and expectations set in the first months persist for a decade.",
    "What matters is not credentials but prehistory: whether the founders knew each other before the opportunity, whether they have already survived a disagreement, and whether the division of responsibility is clear enough to prevent slow conflict over the same territory.",
    "Alignment also has to be structural rather than cultural. Vesting, decision rights and what happens if someone leaves are the mechanisms that determine behaviour when relations deteriorate, which is when the mechanisms are the only thing operating."
  ],
  practical: {
    label: "Example: diligencing the founding team",
    lead: "Look at history and structure, not chemistry in the meeting.",
    bullets: [
      "How long have the founders known each other, and in what context?",
      "What is the hardest disagreement they have had, and how was it resolved?",
      "Is the split of responsibility clear, or do two people own the same thing?",
      "Is equity vesting properly, with sensible treatment on departure?",
      "What happens to the company if the second most important person leaves?"
    ]
  },
  application:
    "Founder disputes are among the most common causes of loss at early stage, and they are among the most predictable from prehistory and structure. Both are knowable before investing and neither is well served by a good first meeting.",
  models: ["incentives", "distribution", "monopoly", "authority-bias"],
  connections: [
    { to: "incentives", type: "reinforces" },
    { to: "liking-loving", type: "contrasts" },
    { to: "avoiding-ruin", type: "related" },
    { to: "zto-seven-questions", type: "related" },
    { to: "commitment-and-consistency", type: "related" }
  ],
  quote: {
    text: "Positively defined, a startup is the largest group of people you can convince of a plan to build a different future.",
    attribution: "Peter Thiel, Zero to One",
    why: "The definition is about persuasion and size rather than about product or funding. It implies the binding constraint early on is how many capable people share a specific belief, which is why the founding configuration is the thing to examine."
  }
},

{
  id: "zto-seven-questions", num: 12, book_id: "zto", category: "strategy",
  title: "The Seven Questions",
  thesis: "Every business must answer seven questions. Most companies get two or three and fail on the rest.",
  reading_time: 3,
  explanation: [
    "Thiel's checklist covers engineering, timing, monopoly, people, distribution, durability and the secret. His claim is that a great company answers all seven, and that partial answers do not compound: strength on four does not compensate for silence on three.",
    "The value of the list is that it is a checklist, in Kahneman's sense. It is applied identically to every business, it forces the unglamorous questions alongside the interesting ones, and it makes gaps visible instead of letting a strong answer on one dimension colour the whole assessment.",
    "The two most commonly skipped are distribution and durability, because both are boring relative to product and both take longer to verify. They are also the two that determine whether the value ever gets captured."
  ],
  practical: {
    label: "Example: the seven, applied",
    lead: "Answer each one explicitly, and note which have no answer.",
    bullets: [
      "Engineering: is this a breakthrough or an incremental improvement?",
      "Timing: why is now the right moment for this business?",
      "Monopoly: are you starting with a big share of a small market?",
      "People: do you have the right team, configured properly?",
      "Distribution: can you deliver the product as well as create it, at this price point?",
      "Durability: will your position hold in ten and twenty years?",
      "Secret: have you identified something others do not see?"
    ]
  },
  application:
    "This maps cleanly onto a diligence structure: product and technology, market timing, competitive position, team and governance, go-to-market economics, defensibility, and thesis. Running it as a scored checklist rather than a narrative is what stops one strong answer from carrying a weak set.",
  models: ["decision-quality", "monopoly", "durability", "distribution"],
  connections: [
    { to: "zto-monopoly", type: "reinforces" },
    { to: "zto-distribution", type: "reinforces" },
    { to: "zto-last-mover", type: "reinforces" },
    { to: "tfs-simple-rules", type: "reinforces" },
    { to: "antidotes", type: "related" }
  ],
  quote: null
}

);
