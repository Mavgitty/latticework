/* Competition Demystified — Bruce Greenwald and Judd Kahn — 9 ideas */
window.DB.ideas.push(

{
  id: "cd-only-barriers-matter", num: 1, book_id: "cd", category: "strategy",
  title: "Barriers to Entry Are the Question",
  thesis: "Of Porter's five forces, only barriers to entry decide whether a strategy problem exists.",
  reading_time: 3,
  explanation: [
    "Greenwald's contribution is subtraction. Porter's framework gives buyer power, supplier power, substitutes, rivalry and entry roughly equal billing, and a generation of analysts has dutifully filled in all five for every industry it examined. Greenwald argues that four of them govern how profit is divided among the firms already present, while one governs whether anyone new can arrive. Only the last can make high returns persist.",
    "The reason is arithmetic rather than taste. Where entry is free, high returns attract capital until returns fall back towards the cost of capital, and no amount of favourable bargaining structure prevents it. Where entry is blocked, an incumbent can be indifferently run, sell to powerful buyers and buy from concentrated suppliers, and still earn well for decades. The other four forces set the level of profitability. Entry decides whether it survives.",
    "This is a claim about where to look first rather than a claim that the rest is fiction. Buyer power matters a great deal to a supplier negotiating next quarter's contract. But that is a question about operating performance, and treating it as strategy is how firms end up with a thick document and no answer to the one question that determines whether strategy is available to them at all."
  ],
  practical: {
    label: "Example: testing for a barrier",
    lead: "Ask what an incumbent can do that a well funded newcomer cannot, and answer it with evidence.",
    bullets: [
      "Who has entered this market in the past ten years, and how did they fare?",
      "What would a competent entrant with capital be unable to replicate here?",
      "Are incumbent returns above the cost of capital, and for how long?",
      "Am I describing rivalry and calling it structure?",
      "If entry is genuinely free, what am I still analysing?"
    ]
  },
  application:
    "Most venture theses assert a barrier in the future tense. The useful discipline is to name which source the barrier will come from and what observable fact would show it forming. In categories where entry is cheap and capital is abundant, unit economics that look attractive today are a forecast about competition rather than a moat, and the rate at which new entrants appear is the number worth tracking.",
  models: ["barriers-to-entry", "five-forces", "return-on-capital", "durability"],
  connections: [
    { to: "pcs-five-forces", type: "contrasts" },
    { to: "pcs-entry-barriers", type: "extends" },
    { to: "cd-the-test", type: "reinforces" },
    { to: "cd-no-strategy-problem", type: "extends" },
    { to: "s7p-power", type: "related" }
  ],
  quote: null
},

{
  id: "cd-the-test", num: 2, book_id: "cd", category: "investing",
  title: "The Observable Test",
  thesis: "Competitive advantage shows up as market share that stays put and returns that stay high.",
  reading_time: 3,
  explanation: [
    "The test is deliberately backward looking, because it rests on evidence rather than argument. Take the market as customers actually experience it, list the shares over ten years, and see whether the leader's share has moved. Then look at returns on invested capital across the same period. Stable shares alongside returns comfortably above the cost of capital is the signature of a barrier. Either one on its own is not.",
    "Stability without high returns usually means a settled industry that competes away its profit anyway, or an oligopoly that cannot stop discounting. High returns without stability usually means a good run that competition has not yet arrived to correct, and the correction tends to appear in the share table before it shows up in the income statement, which is what makes the share table worth assembling first.",
    "The test does not identify the barrier, only its existence. That ordering is the point. Diagnosis comes before explanation, which reverses the common practice of naming a source of advantage from the company's own materials and then collecting numbers that agree with it. A firm whose share has drifted down for a decade does not have a brand advantage, however well regarded the brand is."
  ],
  practical: {
    label: "Example: reading the share table",
    lead: "Assemble ten years of market shares and returns on capital before accepting any account of the advantage.",
    bullets: [
      "Has the leader's share moved materially over the past decade?",
      "Are returns on invested capital above the cost of capital every year?",
      "Did any competitor gain share, and did it hold what it gained?",
      "Am I looking at the market customers see, or an industry label?",
      "Which of the two conditions is failing, stability or returns?"
    ]
  },
  application:
    "This turns defensibility from an assertion into a measurement, and it works on private companies with cohort data standing in for share. Retention by cohort tells you whether customers stay, and gross margin against comparable volumes tells you whether the cost position is real. A company whose logo churn is rising while it reports expanding revenue is failing the stability half of the test.",
  models: ["return-on-capital", "durability", "barriers-to-entry", "base-rates"],
  connections: [
    { to: "cd-only-barriers-matter", type: "reinforces" },
    { to: "cd-valuing-the-franchise", type: "extends" },
    { to: "lbbw-moat-in-the-numbers", type: "reinforces" },
    { to: "mck-roic", type: "related" },
    { to: "s7p-power", type: "related" }
  ],
  quote: null
},

{
  id: "cd-three-sources", num: 3, book_id: "cd", category: "strategy",
  title: "Three Sources of Advantage",
  thesis: "Advantage comes from customer captivity, a proprietary cost position, or scale that captivity protects.",
  reading_time: 3,
  explanation: [
    "Only three things have ever produced a durable barrier. Demand advantages come from customer captivity: habit, switching costs, or search costs that make an incumbent's customers expensive for a rival to reach. Supply advantages come from a cost position competitors cannot copy, which in practice means protected technology or privileged access to an input rather than being good at procurement. The third is economies of scale.",
    "Scale is different in kind because it is not self-sufficient. A large fixed cost spread over more units gives a cost advantage, and a rival who reaches similar volume erases it. Scale therefore becomes a barrier only in combination with some customer captivity, which is what prevents the challenger accumulating the volume it would need to match your costs. The two work as a pair, and neither is reliable alone.",
    "Everything else that gets called a moat either sits underneath these three or is not a barrier. A strong brand is a form of captivity when it changes repurchase behaviour and merely an expense when it does not. Excellent management, a superior product and a healthy culture are real assets that raise returns without preventing anyone from entering, which is why they belong in the operations conversation instead."
  ],
  practical: {
    label: "Example: naming the source",
    lead: "Force the claimed advantage into one of the three categories, and reject explanations that fit none of them.",
    bullets: [
      "Do customers stay because leaving is costly, or only because they are satisfied?",
      "Is the cost advantage protected, or is it competence a rival could hire?",
      "If scale is the answer, what stops a rival reaching similar volume?",
      "Which named source does this advantage actually belong to?",
      "Am I calling a strength a barrier because it is genuinely admirable?"
    ]
  },
  application:
    "Diligence tends to produce a list of strengths where a barrier was requested. Requiring the answer to name one of the three sources dismisses most moat claims quickly and makes the survivors testable. Captivity should appear in cohort retention, a cost position in gross margin against comparable volumes, and scale in whether share has consolidated over time. A strength fitting none of the three is a reason to expect competition.",
  models: ["barriers-to-entry", "switching-costs", "scale-economies", "cornered-resource"],
  connections: [
    { to: "cd-local-scale", type: "extends" },
    { to: "cd-only-barriers-matter", type: "extends" },
    { to: "lbbw-four-sources", type: "reinforces" },
    { to: "s7p-benefit-and-barrier", type: "related" },
    { to: "pcs-entry-barriers", type: "related" }
  ],
  quote: null
},

{
  id: "cd-local-scale", num: 4, book_id: "cd", category: "strategy",
  title: "Scale Is Local",
  thesis: "Scale advantages depend on share of a defined market, not on absolute company size.",
  reading_time: 3,
  explanation: [
    "The scale that counts is relative to the market being served, and that market is usually smaller than the industry. A distributor with seventy per cent of one city has denser routes and a lower cost per delivery than a national competitor holding three per cent of the same city, whatever the two revenue lines look like side by side. The relevant denominator is wherever the fixed cost is genuinely shared.",
    "This is why large diffuse companies keep losing to small concentrated ones, and why so many attempts to grow into an advantage dismantle the one already held. Moving into an adjacent market means starting again at low local share, funded by the profits of the strong position, and it usually enlarges the fixed cost base that the strong position had been carrying comfortably.",
    "It also changes what a good strategy looks like. Deepening share inside a boundary you already dominate compounds the advantage, while widening the boundary dilutes it. Wal-Mart's early decades were dominance of a contiguous set of small towns rather than national retailing, and the advantage thinned as the map filled in and the phrase local market stopped describing anything in particular."
  ],
  practical: {
    label: "Example: finding the boundary",
    lead: "Define the market where the fixed cost is actually shared, then measure share inside that boundary.",
    bullets: [
      "What is the smallest market in which this advantage operates?",
      "What is our share of that market, rather than of the industry?",
      "Would expansion enlarge the fixed cost the strong position is carrying?",
      "Is a smaller competitor dominant in a niche we merely visit?",
      "Which is worth more here, deeper share or wider coverage?"
    ]
  },
  application:
    "Investors reward expansion because it supplies the revenue growth the model needs, and the same expansion often dismantles the advantage that made the company worth owning. Ask what share of the original market the company holds, whether that share is still rising, and how the new market's local economics stand on their own. A company entering markets where it will be subscale is buying revenue with its moat.",
  models: ["scale-economies", "critical-mass", "barriers-to-entry", "network-economies"],
  connections: [
    { to: "cd-three-sources", type: "extends" },
    { to: "cd-industry-map", type: "related" },
    { to: "zto-small-market", type: "reinforces" },
    { to: "s7p-scale-economies", type: "related" },
    { to: "lbbw-industry-structure", type: "related" }
  ],
  quote: null
},

{
  id: "cd-no-strategy-problem", num: 5, book_id: "cd", category: "strategy",
  title: "Most Industries Have No Barriers",
  thesis: "Where entry is free there is no strategy problem, only an operations problem.",
  reading_time: 2,
  explanation: [
    "The honest conclusion of the framework is that it does not apply to most businesses. In restaurants, construction, most professional services, most retail and most manufacturing, entry is cheap enough that returns sit near the cost of capital and nothing structural protects anybody. That is not a diagnosis of failure. It is the normal condition of a competitive market, and pretending otherwise is what fills strategy documents with aspiration.",
    "What follows is a reallocation of management attention rather than a counsel of despair. Firms in unprotected industries make money by being better run than the firms beside them, through lower costs, faster cycles, better hiring and tighter working capital. That advantage is real and it is available to anyone, so it has to be re-earned continuously, which is what operational excellence actually means.",
    "The mistake this diagnosis prevents is an expensive one. A firm that believes it holds a barrier will price as though customers are captive, spend as though volume is protected, and treat entrants as irrational rather than as inevitable. The same firm, correctly diagnosed, would compete on efficiency and leave its prices where they are, which is duller and considerably more profitable."
  ],
  practical: {
    label: "Example: accepting no barrier",
    lead: "Decide honestly whether a barrier exists, and where it does not, redirect the effort to operations.",
    bullets: [
      "Have entrants arrived and stayed in this market recently?",
      "Are our returns actually distinguishable from the cost of capital?",
      "Which three operating costs are we worse at than our closest rival?",
      "Are we pricing as though customers have nowhere else to go?",
      "Is our strategy document describing an advantage we do not have?"
    ]
  },
  application:
    "A large share of pitches describe unprotected businesses in the language of moats. The category is often genuinely attractive and the winner will be whoever executes, which changes what to underwrite: operating discipline, cost per unit of output, and management's candour about competition rather than a defensibility story. It changes the price too, because an operating advantage does not support the multiple a barrier does.",
  models: ["barriers-to-entry", "generic-strategy", "return-on-capital", "constraint"],
  connections: [
    { to: "cd-only-barriers-matter", type: "extends" },
    { to: "cd-the-test", type: "reinforces" },
    { to: "s7p-not-operations", type: "contrasts" },
    { to: "lbbw-not-moats", type: "reinforces" },
    { to: "pcs-generic-strategies", type: "related" }
  ],
  quote: null
},

{
  id: "cd-small-numbers", num: 6, book_id: "cd", category: "strategy",
  title: "Competition Among the Few",
  thesis: "Inside a barrier, competition becomes a small-numbers game to be reasoned about rather than described.",
  reading_time: 3,
  explanation: [
    "Once a barrier exists the number of relevant players is small, and each one's returns depend on what the others choose. That is a different analytical problem from describing a market. Averages and industry trends stop being informative, because the outcome turns on specific decisions by named firms with known capacity, known cost structures and a documented history of how they have responded to similar moves before.",
    "Greenwald borrows the apparatus of game theory here and keeps it deliberately plain. List the players, list the moves available to each, work out the payoffs under every combination, and look for the outcome nobody has an incentive to leave. The value is not in the mathematics. It is in being made to write down the rival's payoff rather than assuming the rival will do whatever suits you.",
    "The discipline exposes a common error. Firms plan a price cut or a capacity addition using a forecast in which competitors hold still, then treat the response as an unfair surprise. Anticipating the response usually reveals that the move leaves everyone worse off, which is a reason not to make it rather than a reason to make it sooner and larger."
  ],
  practical: {
    label: "Example: writing down the payoffs",
    lead: "Name the two or three firms that matter, then work out what each of them gains from every response.",
    bullets: [
      "Who are the players whose decisions actually change our outcome?",
      "What does each of them gain from matching our move?",
      "How have they responded the last three times something similar happened?",
      "Where does this end if everyone behaves in their own interest?",
      "Am I planning our move while assuming they stand still?"
    ]
  },
  application:
    "Boards approve competitive moves on plans that hold rivals constant, and the resulting price war arrives two quarters later described as a market problem. Requiring the competitive response in the paper, with the rival's payoff written out, costs almost nothing and changes decisions. In a concentrated market it also identifies the moves that cannot be answered, and those are the only ones worth funding.",
  models: ["barriers-to-entry", "second-order", "incentives", "probability"],
  connections: [
    { to: "cd-cooperation", type: "extends" },
    { to: "cd-only-barriers-matter", type: "related" },
    { to: "pcs-competitor-analysis", type: "extends" },
    { to: "pcs-rivalry", type: "related" },
    { to: "tib-decision-trees", type: "related" }
  ],
  quote: null
},

{
  id: "cd-cooperation", num: 7, book_id: "cd", category: "strategy",
  title: "Cooperation Without Collusion",
  thesis: "Where a few protected firms meet repeatedly, restrained pricing is an equilibrium rather than a conspiracy.",
  reading_time: 3,
  explanation: [
    "In a market with two or three protected incumbents, aggressive pricing is mutually destructive and everyone can see it. What emerges instead is restraint. Prices sit above the competitive level, territories and segments are left alone, capacity is added slowly. No agreement is needed and in most jurisdictions none would be lawful. Repetition does the work, because a firm that undercuts today expects to be undercut tomorrow.",
    "What sustains the restraint is the credibility of the response rather than any goodwill. Incumbents who can retaliate quickly, visibly and in the defector's most valuable segment produce more stable pricing than those who cannot. Transparency helps, since a price cut nobody notices goes unpunished. So does symmetry, because a firm with a very different cost structure wants different things and is usually the one that breaks the pattern.",
    "Read the other way, this explains where price wars come from. A new entrant with no history to protect, a firm in distress, or an incumbent whose capacity has just doubled all have payoffs that reward defection. The arrival of any of them signals that pricing discipline is about to end, and each is observable well before the margin moves."
  ],
  practical: {
    label: "Example: reading pricing discipline",
    lead: "Work out whether the restraint you are observing is stable, and name what would break it.",
    bullets: [
      "Has pricing held through the last downturn in demand?",
      "Could each incumbent retaliate quickly and visibly against a cut?",
      "Is anyone here in distress, or newly burdened with capacity?",
      "Are the players' cost structures similar enough to want the same thing?",
      "Who has the least to lose from starting a price war?"
    ]
  },
  application:
    "Pricing discipline is much of what makes a concentrated market worth owning, and it fails in a specific and predictable way. Before underwriting margins that depend on it, identify the party most likely to defect and what would prompt them. A venture-funded entrant with a mandate to buy share is exactly the payoff structure that ends restraint, and it arrives without warning from the incumbents' point of view.",
  models: ["incentives", "second-order", "barriers-to-entry", "feedback-loops"],
  connections: [
    { to: "cd-small-numbers", type: "extends" },
    { to: "cd-three-sources", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "cr-over-investment", type: "related" },
    { to: "pcs-rivalry", type: "contrasts" }
  ],
  quote: null
},

{
  id: "cd-valuing-the-franchise", num: 8, book_id: "cd", category: "investing",
  title: "Asset Value, Earnings Power, Growth",
  thesis: "Value the assets, then the earnings power, and count growth only inside a barrier.",
  reading_time: 3,
  explanation: [
    "The valuation runs in three layers of decreasing reliability. Asset value is what it would cost to reproduce the business, and it is the firmest because it rests on things that exist. Earnings power value takes sustainable current earnings and capitalises them at the cost of capital with no growth assumed at all. Growth value is the third layer, and it is where nearly all of the error lives.",
    "The comparison between the first two layers is itself diagnostic. If earnings power value exceeds reproduction cost, something is preventing competitors from building the same business and taking the excess away, and that something is a barrier appearing in the numbers. If it does not exceed reproduction cost, the business earns its cost of capital and the franchise language in the pitch is decoration.",
    "Growth creates value only where the returns on the capital it consumes exceed the cost of that capital, and outside a barrier they cannot for long. Growth in an unprotected industry therefore consumes cash and adds nothing to value, however impressive the revenue line looks. Inside a barrier the same growth compounds. The barrier decides whether the third layer is worth anything, which is why it comes last."
  ],
  practical: {
    label: "Example: three layers in order",
    lead: "Build the asset value, then earnings power at zero growth, and only then consider paying for growth.",
    bullets: [
      "What would it cost a competitor to reproduce these assets today?",
      "What are sustainable earnings, averaged over a cycle and adjusted for one-offs?",
      "Does earnings power exceed reproduction cost, and why would that persist?",
      "Is the growth I am paying for happening inside a barrier?",
      "What return does the capital funding this growth actually earn?"
    ]
  },
  application:
    "This gives a clean rule for growth investing. Growth is worth paying for where a barrier exists and worth discounting where it does not, and most high-growth companies belong in the second group, which makes their revenue trajectory a claim about future competition rather than future profit. Establishing the barrier before pricing the growth reverses the usual order and removes most of the enthusiasm from the exercise.",
  models: ["intrinsic-value", "return-on-capital", "terminal-value", "cost-of-capital"],
  connections: [
    { to: "cd-the-test", type: "extends" },
    { to: "cd-only-barriers-matter", type: "reinforces" },
    { to: "mck-growth-and-returns", type: "reinforces" },
    { to: "afv-value-and-growth", type: "related" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
},

{
  id: "cd-industry-map", num: 9, book_id: "cd", category: "strategy",
  title: "Mapping the Industry",
  thesis: "Map the market, read the share table, then ask what protects the firms inside it.",
  reading_time: 2,
  explanation: [
    "The procedure is fixed and it starts before any judgement is exercised. Define the market properly, meaning the set of products and geographies where customers actually substitute one thing for another, which is usually narrower than the industry label suggests. List every competitor in that market and their share for as many years as you can find. Nothing has been interpreted yet, and much of the answer is already visible.",
    "Then read the table. Entry and exit, share drifting steadily in one direction, and returns near the cost of capital all point to an unprotected market, and the work stops there and becomes an operating review. Persistent shares alongside persistently high returns mean a barrier, and the next question is which of the three sources produced it and whether that source is still intact.",
    "Only after that does the competitive reasoning begin, on a short list of firms whose payoffs can be written down. The order matters because it prevents the usual sequence, which is to assume the barrier, name it from the company's own materials, and then assemble the evidence that agrees. Doing the map first means the evidence arrives before the story does."
  ],
  practical: {
    label: "Example: running the map",
    lead: "Work through the sequence in order, and let each step decide whether the next one is needed.",
    bullets: [
      "Where do these customers actually substitute, product by product and place by place?",
      "What are the shares in that market over the last decade?",
      "Has anyone entered or exited, and what happened to them?",
      "Do returns sit above the cost of capital, persistently?",
      "Which of the three sources is doing the work here?"
    ]
  },
  application:
    "Run this before the management meeting rather than after it. A share table assembled from independent sources sets the questions and makes the company's own market definition visible as a choice, which it always is. Where the map shows no barrier, the meeting becomes a conversation about operating execution and pricing, which is more useful than another hour spent on defensibility.",
  models: ["checklist", "barriers-to-entry", "value-chain", "base-rates"],
  connections: [
    { to: "cd-only-barriers-matter", type: "extends" },
    { to: "cd-local-scale", type: "reinforces" },
    { to: "pcs-industry-structure", type: "extends" },
    { to: "pcs-strategic-groups", type: "related" },
    { to: "tic-written-checklist", type: "related" }
  ],
  quote: null
}

);
