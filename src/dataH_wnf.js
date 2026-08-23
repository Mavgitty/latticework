/* Why Nations Fail — Daron Acemoglu and James A. Robinson — 10 ideas */
window.DB.ideas.push(

{
  id: "wnf-extractive-vs-inclusive", num: 1, book_id: "wnf", category: "history",
  title: "Extractive and Inclusive Institutions",
  thesis: "Whether a nation grows rich and stays rich is set by whether its institutions are extractive or inclusive, not by its geography, climate or culture.",
  reading_time: 3,
  explanation: [
    "Why Nations Fail argues against three standard explanations for the wealth gap between nations: geography, culture, and the ignorance of leaders about correct economic policy. Each explanation struggles with the same evidence, pairs of neighbouring or even genetically identical populations that diverge sharply once separated by a political border. If soil, climate or ancestry explained the gap, the divergence should not appear where those factors are held constant.",
    "Their alternative rests on a single distinction. Extractive institutions concentrate political power in a narrow elite and organise the economy to extract wealth from the many for the benefit of the few. Inclusive institutions distribute political power broadly and protect property rights and free entry widely enough that most people have a genuine incentive to invest, innovate and work hard, because they expect to keep the return.",
    "The two reinforce each other within each type. Inclusive political institutions make inclusive economic institutions harder to reverse, because power is too dispersed for any single elite to seize the gains. Extractive political institutions do the reverse: whoever holds power writes the economic rules to serve that power, and uses the resulting wealth to entrench it further."
  ],
  practical: {
    label: "Example: reading institutional quality",
    lead: "Judge institutions by whether ordinary participants can keep the return on their own effort, not by the formal rules.",
    bullets: [
      "Do property rights hold up against politically connected parties, or only against everyone else?",
      "Can a new entrant compete with an incumbent close to those in power?",
      "Does the court system enforce contracts against the state as well as against private parties?",
      "Is political power concentrated in a narrow group, and does the economy serve that group first?",
      "What does the base rate say about growth that has occurred under similarly concentrated power?"
    ]
  },
  application:
    "For an investor reading a country as a market, the practical test is who actually keeps the return on an investment years out, not what the constitution says. Look at whether property rights hold against the politically connected, whether courts enforce contracts against the state as well as against private parties, and whether new entrants can compete with incumbents close to power. A market can look extractive on paper and function inclusively in practice, or the reverse, and the difference matters more than the headline growth rate.",
  models: ["extractive-institutions", "inclusive-institutions", "incentives", "base-rates"],
  connections: [
    { to: "wnf-critical-junctures", type: "extends" },
    { to: "wnf-reversal-of-fortune", type: "reinforces" },
    { to: "wnf-vicious-circle", type: "extends" },
    { to: "wnf-virtuous-circle", type: "extends" },
    { to: "incentives", type: "reinforces" }
  ],
  quote: {
    text: "Poor countries are poor because those who have power make choices that create poverty. They get it wrong not by mistake or ignorance but on purpose.",
    attribution: "Daron Acemoglu and James A. Robinson, Why Nations Fail",
    why: "This is the book's argument stated as directly as it gets stated. Poverty is presented as a choice made by whoever holds power, not an accident of geography or an error correctable by better advice, which is what makes institutions rather than policy the object worth analysing."
  }
},

{
  id: "wnf-critical-junctures", num: 2, book_id: "wnf", category: "history",
  title: "Critical Junctures",
  thesis: "Major shocks unsettle existing institutions, and the small differences in how societies respond then compound into large and durable divergence.",
  reading_time: 3,
  explanation: [
    "A critical juncture is a moment, a war, a plague, the opening of new trade routes, a collapse of empire, that breaks the existing institutional equilibrium and makes the future genuinely open. Because the old arrangement of power no longer holds automatically, small and often accidental differences in who is organised, who has leverage, and who moves first can decide which institutions emerge afterward.",
    "The Black Death is the clearest case. It struck Western and Eastern Europe with similar severity, killing a comparable share of the population in both. In the west, the resulting labour shortage let peasants bargain away serfdom, because lords competing for scarce workers had to offer better terms. In the east, landowners responded to the same shortage by tightening it, because a weaker urban class and weaker peasant organisation left lords with more power to coerce rather than bargain. One shock, two institutional paths, diverging for centuries after.",
    "The mechanism matters more than the trigger. A critical juncture does not force a particular outcome, it removes the inertia that normally keeps institutions where they are, and hands the outcome to whichever side is better organised, more numerous, or simply better placed when the old order gives way."
  ],
  practical: {
    label: "Example: reading a shock",
    lead: "Identify who is best organised to shape the rules once a shock removes the old inertia.",
    bullets: [
      "What existing equilibrium has just been unsettled, and by what event?",
      "Which groups are best organised to act before the old order re-forms?",
      "Is this shock large enough to change who holds power, or just who holds office?",
      "What would the losing side need to do to reassert the previous arrangement?",
      "Am I positioned to act in the window before the new arrangement sets?"
    ]
  },
  application:
    "Investors should watch for the venture-scale equivalent, a regulatory shock, a technology platform shift, a change of government, that reopens who gets to write the rules of a market. The period right after such a shock is unusually cheap to influence and unusually consequential, because the participants who organise fastest often lock in the advantage for years. Reading who is positioned to shape the new arrangement is more useful than reading the shock itself.",
  models: ["critical-juncture", "second-order", "base-rates", "feedback-loops"],
  connections: [
    { to: "wnf-extractive-vs-inclusive", type: "extends" },
    { to: "wnf-de-facto-de-jure-power", type: "reinforces" },
    { to: "wnf-natural-experiments", type: "related" },
    { to: "otps-inflection-point", type: "related" },
    { to: "tbs-black-swan", type: "related" }
  ],
  quote: null
},

{
  id: "wnf-reversal-of-fortune", num: 3, book_id: "wnf", category: "history",
  title: "The Reversal of Fortune",
  thesis: "Many places that were richest and most densely populated before European colonisation are poor today, while many that were poorest have become rich, because colonisation installed institutions suited to extraction where local populations and wealth were greatest.",
  reading_time: 3,
  explanation: [
    "In 1500 the most prosperous and densely populated regions of the pre-colonial world included Mexico, Peru and much of South and Southeast Asia, while North America, Australia and parts of the Caribbean were thinly populated and comparatively poor. Ranked today by income, the order is close to inverted. The pattern holds too consistently to be an accident of geography, since the same latitudes and similar climates now sit on opposite sides of the divide.",
    "The explanation lies in what colonisers built once they arrived. Where dense populations and existing wealth made extraction the more profitable strategy, colonial powers installed extractive institutions on top of existing hierarchies, forced labour, tribute, monopoly, and often kept them after independence because the new domestic elite found them just as useful. Where populations were thin and there was little to extract, colonisers who intended to settle had to build institutions that attracted their own labour and investment, security of property, courts, representation, because extraction had nothing to extract.",
    "The reversal is strong evidence against the geography and culture theories on its own terms. The same soil and the same climate produced opposite institutional choices depending on what was already there to extract, and it is the institutional choice, not the underlying land, that predicts income five centuries later."
  ],
  practical: {
    label: "Example: reading a colonial history",
    lead: "Ask what the founding institutions were built to do, not just how old they are.",
    bullets: [
      "Were the country's institutions originally built for extraction or for broad participation?",
      "Did independence replace the extractive machinery, or just the people running it?",
      "Is the resource base concentrated in a way that still rewards extraction over investment?",
      "Does the current income level track the founding institutional choice better than geography does?",
      "What would count as evidence the reversal has itself reversed?"
    ]
  },
  application:
    "The lesson for assessing any market with a colonial or extractive economic history is to ask what the founding institutions were built to do, since institutions built for extraction tend to survive the reason they were built and keep serving whichever group inherits the machinery. A resource-rich country with weak courts and concentrated ownership of the resource is showing you the reversal in miniature, and the base rate for that pattern producing durable middle-income growth is poor.",
  models: ["extractive-institutions", "inclusive-institutions", "base-rates", "critical-juncture"],
  connections: [
    { to: "wnf-extractive-vs-inclusive", type: "reinforces" },
    { to: "wnf-critical-junctures", type: "extends" },
    { to: "wnf-vicious-circle", type: "reinforces" },
    { to: "tii-market-history", type: "related" },
    { to: "wnf-centralization-prerequisite", type: "related" }
  ],
  quote: null
},

{
  id: "wnf-growth-under-extraction", num: 4, book_id: "wnf", category: "decision-making",
  title: "Growth Has a Ceiling Under Extraction",
  thesis: "Extractive institutions can produce real growth for a period, by directing resources into specific high-return activities, but that growth cannot survive the creative destruction genuine innovation requires.",
  reading_time: 3,
  explanation: [
    "Extractive institutions are compatible with growth, and the book is careful to say so. An elite that controls the state can move labour and capital into a small number of activities it wants to see grow, plantation agriculture, natural resource extraction, or in the Soviet case heavy industry, and get real output gains from that concentration for a meaningful stretch of time.",
    "What extractive growth cannot do is survive the next technology. Genuine innovation is disruptive by nature, it changes who is productive and who is not, and that always threatens to displace whoever currently controls the extractive machine. An elite facing a choice between an innovation that grows the pie and a threat to the political control that lets it keep the pie will very often choose to block the innovation, because losing control is worse for the elite than losing growth.",
    "The Soviet Union is the clearest modern case: extraordinary catch-up growth through forced industrialisation, followed by stagnation once the easy gains from reallocating labour into known activities were exhausted and the economy needed innovation the political system could not tolerate. The growth was real. It was also, by its own logic, temporary."
  ],
  practical: {
    label: "Example: pricing the ceiling",
    lead: "Separate growth from reallocation from growth from open competition, then price accordingly.",
    bullets: [
      "Is this growth coming from redirecting existing resources into known activities, or from new entry?",
      "Who controls the reallocation, and do they benefit from stopping it once the easy gains are gone?",
      "What happens to the growth rate once the current easy reallocation is exhausted?",
      "Would the innovation needed for the next leg threaten whoever currently controls the system?",
      "Is the growth rate closer to a one-off catch-up or a compounding trend?"
    ]
  },
  application:
    "In diligence terms this means a market's recent growth rate tells you little about whether it keeps compounding unless you also know whether the growth came from reallocation under a controlling elite or from broad-based competition and entry. Strong numbers under a concentrated, extractive ownership structure sit closer to the Soviet case than to a durable compounding story, and the honest question is what happens once the easy reallocation is used up.",
  models: ["extractive-institutions", "second-order", "incentives", "regression"],
  connections: [
    { to: "wnf-extractive-vs-inclusive", type: "extends" },
    { to: "wnf-creative-destruction-elites", type: "reinforces" },
    { to: "regression-to-the-mean", type: "related" },
    { to: "tii-paying-for-growth", type: "related" },
    { to: "cr-the-capital-cycle", type: "related" }
  ],
  quote: null
},

{
  id: "wnf-creative-destruction-elites", num: 5, book_id: "wnf", category: "decision-making",
  title: "Elites Resist Creative Destruction",
  thesis: "Rulers often block innovations that would grow the economy because the same innovations threaten to displace their political power.",
  reading_time: 3,
  explanation: [
    "Creative destruction, the process by which new firms, technologies and methods replace old ones, is the mechanism through which inclusive economies keep compounding. It is also the mechanism every incumbent elite has the most reason to fear, because it does not respect existing hierarchies. A railway, a printing press, or a new class of merchant can shift wealth and organisation away from whoever currently controls the state.",
    "This produces a recurring historical pattern: rulers who could adopt a growth-enhancing innovation choose not to, because the political risk to their own position outweighs the economic gain to the country. Russia's and Austria-Hungary's slowness to industrialise, and the Ottoman Empire's active suppression of the printing press for two and a half centuries, are read this way, not as ignorance of what the technology could do, but as an accurate assessment of what it would do to the existing order.",
    "The logic generalises past the historical cases. Any incumbent with concentrated power over a system, a regulator, a monopolist, a controlling family, faces the same trade-off when a disruptive alternative appears, and the choice to resist is frequently the individually rational one even when it is collectively costly."
  ],
  practical: {
    label: "Example: testing an incumbent's incentive to block",
    lead: "Weigh the incumbent's political or organisational risk from adoption against its economic upside.",
    bullets: [
      "Does adopting this innovation threaten the incumbent's control, or only its margins?",
      "Has the incumbent blocked similar innovations before, and through what channel?",
      "Who inside the incumbent loses status or control if the change proceeds?",
      "Is the resistance likely to show up as a market response or a regulatory one?",
      "What would make blocking the innovation more costly than adopting it, for the incumbent specifically?"
    ]
  },
  application:
    "This is worth pricing into any thesis that assumes an incumbent will adopt an obviously superior approach once it exists. If adoption threatens the incumbent's control rather than just its margins, expect resistance disproportionate to the apparent economics, and expect it through political or regulatory channels rather than the market. The disruption case for a venture bet often depends less on the technology being better than on the incumbent's actual capacity to block it.",
  models: ["extractive-institutions", "critical-juncture", "incentives", "second-order"],
  connections: [
    { to: "wnf-growth-under-extraction", type: "reinforces" },
    { to: "wnf-vicious-circle", type: "related" },
    { to: "tid-good-management", type: "related" },
    { to: "otps-inflection-point", type: "related" },
    { to: "second-order-effects", type: "reinforces" }
  ],
  quote: null
},

{
  id: "wnf-vicious-circle", num: 6, book_id: "wnf", category: "history",
  title: "The Vicious Circle",
  thesis: "Extractive institutions tend to reproduce themselves because whoever seizes power under them has every incentive to keep the same extractive arrangement rather than open it up.",
  reading_time: 3,
  explanation: [
    "Extractive political institutions concentrate power narrowly, and that concentration is precisely what makes the prize of controlling the state worth fighting for. A revolution or a coup against an extractive regime frequently succeeds only in replacing the elite at the top, because the new group that fought its way to power inherits the same machinery of extraction and finds it just as useful as the group it displaced did.",
    "This is the book's answer to the naive hope that removing a bad ruler fixes a bad system. Sierra Leone's succession of coups after independence, and many post-colonial states with similar histories, replaced individuals repeatedly without ever replacing the underlying institutions, because the institutions themselves were the object worth capturing, not an obstacle to be dismantled.",
    "The circle is reinforced by the absence of the checks that inclusive institutions build in. Without an independent judiciary, a free press or a broad political coalition able to punish abuse of power, there is no mechanism to stop the next elite from doing exactly what the last one did, and every incentive for it to try."
  ],
  practical: {
    label: "Example: testing whether a change is structural",
    lead: "Check whether removing the current leadership removes the incentive, or only the person.",
    bullets: [
      "Would a new leader inherit the same unchecked power the old one had?",
      "What independent mechanism exists to punish abuse of power, regardless of who is in charge?",
      "Has this jurisdiction cycled through leaders before without changing outcomes?",
      "Is the prize being fought over the institutions themselves, or a policy within them?",
      "What would have to change structurally, not personally, for the pattern to break?"
    ]
  },
  application:
    "This is the reason regime change, in a market or a country, rarely repairs weak institutions on its own. A new management team, a new government or a new controlling shareholder operating inside the same unchecked structure tends to reproduce the old behaviour, because the structure rewards it regardless of who occupies it. The diligence question worth asking is whether the institutions constrain the next occupant of power, not whether the current one seems reasonable.",
  models: ["extractive-institutions", "feedback-loops", "incentives", "critical-mass"],
  connections: [
    { to: "wnf-extractive-vs-inclusive", type: "reinforces" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "wnf-de-facto-de-jure-power", type: "related" },
    { to: "wnf-creative-destruction-elites", type: "related" },
    { to: "incentives", type: "reinforces" }
  ],
  quote: null
},

{
  id: "wnf-virtuous-circle", num: 7, book_id: "wnf", category: "history",
  title: "The Virtuous Circle",
  thesis: "Inclusive institutions reinforce themselves over time, because broad distribution of power creates constituencies with an interest in defending pluralism against any single group trying to seize control.",
  reading_time: 2,
  explanation: [
    "Where power is genuinely distributed, no single actor, not a monarch, a party, or a business elite, is able to capture the state and rewrite the rules for its own benefit, because too many other groups have both the standing and the incentive to resist. That resistance is not a one-off event, it operates continuously, and it is what makes the arrangement durable rather than a fortunate accident a future ruler could simply undo.",
    "Britain after the Glorious Revolution of 1688 is the book's central case. Parliament's new leverage over the crown did not just constrain one king, it created a durable check that outlasted the individuals involved, because merchants, gentry and an increasingly broad political class all had a stake in Parliament's power and defended it as their own interests, not as loyalty to an abstract principle.",
    "Pluralism also has a compounding property that extraction lacks: broader participation in politics tends to widen further, because groups newly included in the system gain the standing to bring in the next group behind them. Each expansion makes the next one more likely rather than less."
  ],
  practical: {
    label: "Example: testing whether protections have a constituency",
    lead: "Ask who defends the current rules and whether their interest in defending them is durable.",
    bullets: [
      "Which groups have a direct stake in defending the current legal or regulatory protections?",
      "Would those protections survive a change of government or ownership?",
      "Is the judiciary, press or professional body independent of whoever currently holds power?",
      "Has participation in this system been widening or narrowing over the recent period?",
      "Is the institutional quality here a durable asset or one administration's preference?"
    ]
  },
  application:
    "The equivalent test in a market is whether legal and regulatory protections are defended by a broad coalition with a stake in them, professional associations, an independent judiciary, a free financial press, rather than resting on the goodwill of whoever currently holds office. Institutional quality that depends on one administration's preferences is not the same asset as institutional quality with its own constituency, and the second is the one worth underwriting a long holding period on.",
  models: ["inclusive-institutions", "feedback-loops", "incentives", "compounding"],
  connections: [
    { to: "wnf-vicious-circle", type: "contrasts" },
    { to: "compounding", type: "reinforces" },
    { to: "wnf-extractive-vs-inclusive", type: "extends" },
    { to: "wnf-centralization-prerequisite", type: "related" },
    { to: "long-term-thinking", type: "related" }
  ],
  quote: null
},

{
  id: "wnf-natural-experiments", num: 8, book_id: "wnf", category: "decision-making",
  title: "Natural Experiments in Institutions",
  thesis: "Comparing genetically and culturally identical populations split by a political border isolates institutions as the cause of divergent outcomes, ruling out geography and culture as explanations.",
  reading_time: 2,
  explanation: [
    "The strongest evidence in the book comes from cases where geography, climate, culture and history are held constant and only institutions differ. Korea after 1948 split one people, one language, one set of traditions, into two states that adopted opposite institutions, and the income gap between them since is one of the largest ever measured between neighbouring populations.",
    "Nogales, the town split by the Arizona-Mexico border, is the smaller-scale version. Residents on both sides share ancestry, climate, diet and culture, and differ sharply in income, health and safety in a way that tracks the border and nothing else, because the border is where the institutions change and everything else does not.",
    "The value of these cases is methodological. Most comparisons between countries carry too many differences at once to say which one is doing the causal work. A natural experiment removes every variable except the one in question, which is what lets a single case rule out entire rival explanations."
  ],
  practical: {
    label: "Example: finding the natural experiment",
    lead: "Look for a case where nearly everything is held constant except the one variable in question.",
    bullets: [
      "Is there a comparable population or unit differing mainly in the one factor I want to test?",
      "What confounding differences remain even in this comparison, and how large are they?",
      "Does the comparison track a border, a policy change, or a governance split cleanly?",
      "Would a sceptic accept this as isolating the cause, or find another explanation?",
      "What would I expect to see if the factor in question were not actually doing the work?"
    ]
  },
  application:
    "The nearest equivalent in diligence is a company or a market with an internal split, one business unit, one regional office, one product line, operating under different governance or incentive rules than the rest. Where such a natural experiment exists inside a portfolio company, it is usually the fastest way to test whether a proposed structural change would actually work, because it shows the counterfactual directly rather than requiring you to construct one.",
  models: ["extractive-institutions", "inclusive-institutions", "base-rates", "probability"],
  connections: [
    { to: "wnf-extractive-vs-inclusive", type: "reinforces" },
    { to: "base-rates", type: "related" },
    { to: "wnf-reversal-of-fortune", type: "related" },
    { to: "halo-correlation-causality", type: "contrasts" },
    { to: "probabilistic-thinking", type: "related" }
  ],
  quote: null
},

{
  id: "wnf-centralization-prerequisite", num: 9, book_id: "wnf", category: "history",
  title: "Centralisation Before Pluralism",
  thesis: "A degree of political centralisation, a state able to enforce order over its territory, has to exist before pluralism produces inclusive institutions rather than fragmentation.",
  reading_time: 2,
  explanation: [
    "Inclusive political institutions require two things at once, and it is easy to notice only one of them. Power has to be distributed pluralistically, and it has to be centralised enough that the state can actually enforce the law and the order it agrees to. Without centralisation, dispersing power does not produce pluralism, it produces the absence of any authority capable of making commitments stick.",
    "Somalia after the collapse of central government is the book's example of the failure mode: no single group monopolises power, but the result is warlordism and violence rather than broad participation, because there is no state capacity for competing groups to share. Pluralism without centralisation is not a milder version of inclusive institutions, it is a different and worse condition.",
    "This is why the sequence usually runs centralisation first. A state has to exist with enough capacity to be worth contesting and constraining before the contest and the constraint can produce anything durable, which is also why building institutions from nothing in a fragmented territory is a far harder and slower problem than reforming an already centralised one."
  ],
  practical: {
    label: "Example: checking state capacity first",
    lead: "Confirm the state can enforce basic order before assessing whether its institutions are extractive or inclusive.",
    bullets: [
      "Can this government enforce a contract, collect a tax and hold its borders reliably?",
      "Is authority fragmented among competing armed or political groups?",
      "Would removing the current elite produce broader participation or a vacuum?",
      "Is the absence of central authority being mistaken for pluralism?",
      "What is the state's basic capacity trend, improving or eroding?"
    ]
  },
  application:
    "For sovereign or country-level assessment, weak central state capacity is a warning sign distinct from and prior to the extractive-versus-inclusive question, since a fragmented state cannot deliver either kind of institution reliably. Before asking whether a government's institutions are extractive or inclusive, check whether it can enforce a contract, collect a tax, or hold a border at all, because the answer to that question sets whether the other one is even answerable.",
  models: ["inclusive-institutions", "critical-juncture", "base-rates", "incentives"],
  connections: [
    { to: "wnf-virtuous-circle", type: "related" },
    { to: "long-term-thinking", type: "extends" },
    { to: "wnf-natural-experiments", type: "related" },
    { to: "wnf-extractive-vs-inclusive", type: "related" },
    { to: "wnf-de-facto-de-jure-power", type: "related" }
  ],
  quote: null
},

{
  id: "wnf-de-facto-de-jure-power", num: 10, book_id: "wnf", category: "decision-making",
  title: "De Facto and De Jure Power",
  thesis: "Formal political power can change hands while informal power, wealth, arms, local control, stays with the old elite, who use it to reassert control over the new rules.",
  reading_time: 3,
  explanation: [
    "Political power comes in two forms that do not always move together. De jure power is what the constitution, the vote or the formal office grants. De facto power is whatever a group can exercise regardless of formal position, through wealth, armed force, control of local administration or the ability to organise collective action. Losing one does not mean losing the other.",
    "This gap explains why formal reform so often fails to change outcomes. The American South after the Civil War lost slavery and, on paper, the political dominance of the planter elite. That elite retained enough local economic and social control, through land tenure, credit and intimidation, to rebuild a system, Jim Crow, that reproduced much of the old extraction under new legal language for close to a century.",
    "The general pattern is that an elite facing a loss of de jure power will invest in de facto power instead, and an elite facing a loss of de facto power will invest in capturing de jure power to protect it. Institutional change that addresses only the formal layer, a new law, a new constitution, a change of government, without touching the underlying distribution of real power leaves the second channel open."
  ],
  practical: {
    label: "Example: tracing real control",
    lead: "Identify who holds de facto control before crediting a formal change of power.",
    bullets: [
      "Who controls land, credit, distribution or enforcement locally, regardless of the formal chart?",
      "Has a change in law or leadership actually touched that underlying control?",
      "Could the prior holders of power reassert influence through an informal channel?",
      "Is the reform addressing only the de jure layer while leaving de facto power untouched?",
      "What would it take for the old arrangement to reappear under new labels?"
    ]
  },
  application:
    "In practice this means reading who actually controls land, credit, distribution or local enforcement in a market before crediting a change in formal ownership, regulation or leadership as a real shift. A new board, a new regulator or a new government that leaves the previous holders of real economic leverage untouched is likely to see the old arrangement reassert itself through the channel that was never actually reformed.",
  models: ["critical-juncture", "incentives", "second-order", "base-rates"],
  connections: [
    { to: "wnf-vicious-circle", type: "reinforces" },
    { to: "wnf-critical-junctures", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "wnf-centralization-prerequisite", type: "related" },
    { to: "second-order-effects", type: "reinforces" }
  ],
  quote: null
}

);
