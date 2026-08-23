/* Sapiens: A Brief History of Humankind — Yuval Noah Harari — 10 ideas */
window.DB.ideas.push(

{
  id: "sap-shared-fictions", num: 1, book_id: "sap", category: "people",
  title: "The Fiction That Built Civilization",
  thesis: "Sapiens outcompeted every rival not through raw intelligence but through a unique capacity to invent and believe in shared fictions that let unlimited strangers cooperate as if they were kin.",
  reading_time: 3,
  explanation: [
    "Roughly seventy thousand years ago something shifted in how sapiens communicated. Other animals, and even other human species, could warn each other about a lion or argue over a mate. What sapiens gained was the ability to talk about things that do not physically exist: spirits, tribal ancestors, later gods, nations, and legal entities. That sounds like a minor party trick, but it solved the single hardest problem facing any large group of primates, which is trust among individuals who have never met.",
    "A troop of chimpanzees or a band of foragers can cooperate closely up to the point where everyone knows everyone else personally, a ceiling of roughly a hundred and fifty individuals. Beyond that, cooperation collapses unless there is something to believe in together. A shared myth, a shared god, a shared currency, or a shared flag lets two total strangers act as allies because both recognize the same fiction as binding.",
    "This is why a Catholic in Manila and a Catholic in Lisbon who will never meet can still trust each other's oath, and why two traders from opposite ends of the world can strike a deal in a currency neither of their governments issued. The fiction is not the trick of a con artist; everyone involved knows it is constructed, and it works precisely because enough people agree to act as if it were real."
  ],
  practical: {
    label: "Test the fictions you rely on",
    lead: "Large-scale cooperation always runs on some shared story, so it pays to know which one you are standing on.",
    bullets: [
      "What shared story (mission, brand, currency, law) is actually holding this group of strangers together?",
      "What would happen to cooperation here if people stopped believing in that story tomorrow?",
      "Are you trying to solve a trust problem with facts when what is missing is a shared narrative?",
      "Which of your own beliefs about institutions are objective facts and which are useful fictions everyone has agreed to honor?"
    ]
  },
  application:
    "In organizations, leaders who understand this build shared narratives, a mission, a culture, a brand, deliberately, because that story is what lets employees, investors, and customers who have never met each other coordinate as if they were one team. Auditing which fictions your own group depends on, and reinforcing the ones worth keeping, is a more durable lever than adding more rules.",
  models: ["unity", "spontaneous-order", "critical-mass", "social-proof"],
  connections: [
    { to: "sap-imagined-order", type: "extends" },
    { to: "sap-money-fiction", type: "extends" },
    { to: "sap-three-unifiers", type: "related" },
    { to: "rts-spontaneous-order", type: "related" },
    { to: "inf-unity", type: "reinforces" },
    { to: "csp-atomic-network", type: "related" }
  ],
  quote: null
},

{
  id: "sap-agricultural-trap", num: 2, book_id: "sap", category: "history",
  title: "Agriculture's Bargain",
  thesis: "The agricultural revolution multiplied the total food supply and population sapiens could sustain, while making the daily life of the average person harder, narrower, and more precarious than foraging had been.",
  reading_time: 3,
  explanation: [
    "Around twelve thousand years ago, groups across several continents began domesticating wheat, rice, and other grains. Textbooks tend to describe this as an upgrade: a stable food supply, permanent settlements, the foundations of civilization. Judged by total calories produced and total humans alive, that framing holds up. Judged by the experience of the person doing the planting, it does not.",
    "Foragers ate a varied diet and worked comparatively few hours; early farmers bent over the same few crops from dawn to dusk, suffered more from famine when a single harvest failed, caught new diseases from crowding near animals and grain stores, and developed joint damage from repetitive labor foraging never demanded. The trap is structural: a bit of surplus food does not buy leisure, it buys population growth, and that larger population then needs the entire surplus just to stay fed at roughly the same subsistence margin as before.",
    "Once a group has committed to this cycle, there is no way back. Land, storable grain, and permanent settlements also invite hierarchy, since surplus can now be seized, taxed, or hoarded in ways nomadic foraging never allowed. Civilization's later achievements were built on this base, but the species' success and the individual's wellbeing had already begun to move in opposite directions."
  ],
  practical: {
    label: "Separate scale from wellbeing",
    lead: "A system can succeed by its own metrics while making life harder for the people inside it.",
    bullets: [
      "Does this growth improve the experience of the people involved, or only the aggregate number?",
      "Is the extra output being captured as leisure and welfare, or absorbed entirely by more mouths to feed?",
      "Is this a one-way commitment you cannot easily reverse once you have scaled into it?",
      "Who captures the surplus this system produces, and who just keeps producing it?"
    ]
  },
  application:
    "The same trap shows up in careers and companies: headcount, revenue, or user growth can climb every year while the people inside the system work harder for a wellbeing gain that never quite arrives, because the extra capacity gets absorbed by more obligations rather than banked as slack. Before celebrating growth, check whether it is actually buying anyone a better life or just a bigger number to maintain.",
  models: ["second-order", "feedback-loops", "opportunity-cost", "compounding"],
  connections: [
    { to: "sap-happiness-paradox", type: "related" },
    { to: "wnf-growth-under-extraction", type: "related" },
    { to: "pom-never-enough", type: "related" },
    { to: "sap-unification-of-humankind", type: "extends" },
    { to: "tib-resulting", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sap-money-fiction", num: 3, book_id: "sap", category: "history",
  title: "Money, the Fiction Everyone Trusts",
  thesis: "Money is the most universal and successful shared fiction ever devised because it is the only trust system flexible enough to let people who share no language, religion, or politics cooperate anyway.",
  reading_time: 3,
  explanation: [
    "A coin, a banknote, or a number in a database has no nutritional value and no practical use on its own. It works only because everyone who touches it believes everyone else will also accept it later. That belief solved a problem barter never could: a farmer with surplus grain who wants shoes has to find a shoemaker who happens to want grain at that exact moment. Money lets the farmer sell grain to anyone and buy shoes from anyone else entirely.",
    "What makes money unusual among shared fictions is what it does not require. A shared religion asks you to believe specific claims about the world; a shared political ideology asks for loyalty to a specific order. Money asks only that you believe others will keep accepting it, which is why a merchant of one faith and a moneylender of another could do business across a border neither of their rulers controlled, using a currency invented by neither.",
    "The cost of this universality is that money converts everything, land, labor, reputation, even devotion, into a single comparable unit, which dissolves older bonds that were never meant to be priced. Money is a remarkably effective tool for cooperation between strangers precisely because it is indifferent to everything else about them."
  ],
  practical: {
    label: "Notice what money can and cannot buy",
    lead: "Money is a powerful fiction for coordinating strangers, but it is not a neutral one.",
    bullets: [
      "What non-monetary value gets erased or distorted once this good or relationship gets a price?",
      "Where would reputation, custom, or direct trust actually work better than a market price here?",
      "Who benefits from turning this particular thing into something that can be bought and sold?",
      "Is the price you are trusting a genuine market signal, or one somebody is engineering?"
    ]
  },
  application:
    "For anyone allocating capital, remembering that a currency's usefulness rests entirely on continued collective belief is a practical warning, not just a philosophical point: when that belief cracks, in hyperinflation, a bank run, or a broken peg, the fiction can unwind faster than any of the assets priced in it, which is one reason to treat currency credibility itself as a risk to manage rather than a constant to assume.",
  models: ["gains-from-trade", "invisible-hand", "division-of-labour", "knowledge-problem"],
  connections: [
    { to: "sap-shared-fictions", type: "extends" },
    { to: "won-invisible-hand", type: "related" },
    { to: "won-gains-from-trade", type: "related" },
    { to: "won-extent-of-market", type: "related" },
    { to: "rts-knowledge-problem", type: "related" },
    { to: "sap-three-unifiers", type: "related" }
  ],
  quote: null
},

{
  id: "sap-three-unifiers", num: 4, book_id: "sap", category: "strategy",
  title: "Three Roads to One World",
  thesis: "Empire, religion, and money each expanded across cultures by their own independent logic, and together, without any single actor planning it, they unified humanity into one interconnected system.",
  reading_time: 3,
  explanation: [
    "Each of these forces unifies for a different reason. Empire absorbs diverse peoples under one political and military order regardless of their culture, language, or prior loyalties, and it tends to expand because there is almost always another region worth conquering. Universal religions claim their truth applies to every human being, not just one tribe or nation, which gives them a built-in incentive to spread rather than stay local. Money accepts anyone as a trading partner regardless of their politics or god, which makes it the most indifferent, and therefore the most portable, unifier of the three.",
    "These forces frequently traveled together: empires built roads that missionaries and merchants both used, state religions gave conquered populations a reason to accept a new ruler, and money financed the armies and temples of both. Yet none of the three needed the others to spread. A currency could cross a border no army had ever reached, and a religious idea could outlive the empire that first carried it.",
    "The modern world, with its shared markets, shared scientific institutions, and a thin layer of shared international law, is the descendant of all three converging over centuries, not the output of any single design."
  ],
  practical: {
    label: "Look for independent unifying logics",
    lead: "Convergence between groups is usually being driven by more than one force at once, and they are rarely coordinated.",
    bullets: [
      "Is this convergence being driven mainly by financial integration, shared belief, or formal authority?",
      "Are the forces at work here reinforcing each other, or starting to pull in different directions?",
      "Which of the three is currently expanding fastest, and where is it likely to reach next?",
      "Who or what remains outside all three unifying forces, and why has it stayed outside?"
    ]
  },
  application:
    "In business and geopolitics, watching which unifying force, capital flows, shared standards and culture, or formal rules and enforcement, is actually doing the work of integrating a market or region tells you more about where consolidation will happen next than watching any single company or policy in isolation.",
  models: ["network-economies", "critical-mass", "distribution", "scale-economies"],
  connections: [
    { to: "sap-money-fiction", type: "related" },
    { to: "sap-unification-of-humankind", type: "extends" },
    { to: "sap-shared-fictions", type: "related" },
    { to: "wnf-extractive-vs-inclusive", type: "related" },
    { to: "csp-atomic-network", type: "related" },
    { to: "inf-unity", type: "related" }
  ],
  quote: null
},

{
  id: "sap-unification-of-humankind", num: 5, book_id: "sap", category: "history",
  title: "The Long Arc Toward One World",
  thesis: "Across thousands of years, human history has moved in a single broad direction, from countless isolated cultures toward fewer, larger, more interconnected ones, culminating in today's single global system.",
  reading_time: 3,
  explanation: [
    "Ten thousand years ago there were probably tens of thousands of distinct, mutually unintelligible human cultures scattered across the planet, each with its own gods, customs, and trade networks that rarely reached beyond a valley or a coastline. Over the following millennia that number fell steadily as empires absorbed neighbors, trade routes stitched regions together, and religions and languages spread far beyond their point of origin. By the early modern age, oceangoing trade and colonization had connected every inhabited continent into one overlapping economic and political web.",
    "None of this was planned as a single project, and no step guaranteed the next. But the direction, once set moving by the combined pull of empire, religion, and money, tends to reinforce itself: a bigger connected network offers bigger gains from trade and coordination than a smaller isolated one, which keeps pulling outside groups in, whether they want to join or not.",
    "It is worth resisting the temptation to read this arc as moral progress. Unification has usually proceeded through conquest, disease, and coerced absorption rather than voluntary agreement, and the size of the resulting network says nothing about whether it made life better for the people folded into it."
  ],
  practical: {
    label: "Read integration, not just events",
    lead: "The more useful question about any development is often whether it is connecting separate systems or splitting an existing one apart.",
    bullets: [
      "Is this trend connecting previously separate systems together, or fragmenting one that used to be unified?",
      "What has the direction of travel been over decades, not just the last data point?",
      "Who is being pulled into this larger system without much say in the matter?",
      "Does a bigger, more integrated network actually mean a better outcome for the individuals inside it?"
    ]
  },
  application:
    "For anyone reading markets or technology cycles, tracking which industries are becoming more standardized and interconnected, versus which are fragmenting into incompatible camps, points toward where scale and consolidation will pay off next, and where a bet on unification is premature.",
  models: ["critical-juncture", "geographic-determinism", "imperial-overreach", "scale-economies"],
  connections: [
    { to: "sap-three-unifiers", type: "extends" },
    { to: "sap-money-fiction", type: "related" },
    { to: "wnf-critical-junctures", type: "related" },
    { to: "won-extent-of-market", type: "related" },
    { to: "sap-history-no-direction", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sap-scientific-ignorance", num: 6, book_id: "sap", category: "learning",
  title: "Science Starts With 'We Don't Know'",
  thesis: "The scientific revolution's decisive break was not a new discovery but a new admission, that existing knowledge might be radically incomplete, and that admission is what made systematic investigation worth funding at all.",
  reading_time: 3,
  explanation: [
    "For most of history, the dominant knowledge systems treated their core texts and authorities as essentially complete. Scripture, classical philosophy, and inherited tradition were assumed to already contain the important answers; the scholar's job was to interpret them correctly, not to go looking for what they had missed. Under that assumption, there was little reason to fund voyages, dissections, or instruments built to find out something nobody currently knew.",
    "What changed was the willingness to say plainly that the existing body of knowledge had serious gaps, and that filling them was worth the cost. That admission had immediate practical consequences: once ignorance became an acceptable starting point, exploration, observation, and experiment turned into investments with a plausible payoff, whether the payoff was a cure, a new territory, or a working machine. Science attracted the patronage of empires and capital precisely because uncertainty had been reframed as opportunity.",
    "The same posture explains why science keeps correcting itself. A claim built on admitted ignorance leaves room for revision by design; a claim built on assumed completeness does not, which is why the older knowledge systems tended to defend their conclusions rather than test them."
  ],
  practical: {
    label: "Practice admitted ignorance",
    lead: "Treating your own knowledge as provisional, rather than settled, is what keeps you able to update it.",
    bullets: [
      "What are you currently treating as settled that is actually just an unexamined assumption?",
      "What specific observation would tell you that you are wrong about this?",
      "Where is effort or funding flowing only because someone was willing to admit a gap existed?",
      "Are you testing this position, or quietly defending it?"
    ]
  },
  application:
    "In decision-making and investing, holding your forecasts and models as provisional rather than proven is the practical version of this admission: it keeps you actively looking for disconfirming evidence instead of collecting confirmation, which is the real difference between durable judgment and overconfident prediction.",
  models: ["circle-of-competence", "bayesian-updating", "wysiati", "contrarian"],
  connections: [
    { to: "atg-bayes-theorem", type: "reinforces" },
    { to: "tfs-outside-view", type: "related" },
    { to: "fbr-humility", type: "related" },
    { to: "tib-not-sure", type: "reinforces" },
    { to: "sap-history-no-direction", type: "related" }
  ],
  quote: null
},

{
  id: "sap-imagined-order", num: 7, book_id: "sap", category: "people",
  title: "Fictions With the Force of Law",
  thesis: "Imagined orders such as human rights, nations, and corporations have no existence outside collective belief, yet that belief routinely produces courts, armies, and skyscrapers as real as anything found in nature.",
  reading_time: 3,
  explanation: [
    "It helps to separate three kinds of reality. Objective reality, like gravity, exists whether or not anyone believes in it. Subjective reality, like a private pain, exists in one mind and nowhere else. Imagined orders sit in a third category: they exist only in the shared belief of many minds at once, yet that shared belief makes them every bit as consequential as objective facts, because enough people are acting on them simultaneously.",
    "A corporation is a clean example. The legal entity survives the death of its founder and the demolition of its factories, because it exists purely as a recognized fiction in law and shared convention, and yet it can own property, sign contracts, and be sued in court. The same is true of a nation's borders, a currency's value, or a human right: none of them can be pointed to directly, but all of them shape where armies march and what a court will enforce.",
    "These orders are not self-sustaining. They require constant reinforcement through education, ritual, architecture, and law, precisely because if enough people stopped acting as if they were real on the same day, the order would simply stop functioning."
  ],
  practical: {
    label: "Map what is holding the order up",
    lead: "Every imagined order depends on continuous belief, which makes it both powerful and fragile in a specific, findable way.",
    bullets: [
      "Is this rule enforced by physical reality, by one person's judgment, or by widespread shared belief?",
      "What rituals, symbols, or routines are actively keeping people invested in this particular fiction?",
      "What would actually happen the day a majority of people stopped treating this as real?",
      "Whose interests does this specific imagined order serve, and who bears its costs?"
    ]
  },
  application:
    "Investors and leaders who treat brands, currencies, and legal structures as intersubjective rather than solid see both sides clearly: the fragility of a belief that can evaporate overnight in a bank run or a loss of confidence, and the durable value a well-maintained shared story can compound for decades without any physical asset behind it at all.",
  models: ["authority-bias", "commitment-consistency", "halo-effect", "social-proof"],
  connections: [
    { to: "sap-shared-fictions", type: "extends" },
    { to: "inf-social-proof", type: "reinforces" },
    { to: "inf-authority-bias", type: "related" },
    { to: "inf-commitment-consistency", type: "related" },
    { to: "wnf-extractive-vs-inclusive", type: "related" },
    { to: "sap-money-fiction", type: "related" }
  ],
  quote: null
},

{
  id: "sap-evolutionary-mismatch", num: 8, book_id: "sap", category: "performance",
  title: "A Forager's Body in a Farmer's World",
  thesis: "Human bodies and instincts were shaped by roughly two million years of foraging and only a few thousand years of everything since, so much modern stress, diet trouble, and social friction comes from a mismatch between ancient wiring and a radically new environment.",
  reading_time: 3,
  explanation: [
    "By evolutionary timescales, agriculture, cities, industry, and screens all arrived a moment ago. Genes shaped for small, mobile foraging bands, with a varied diet, near-constant movement, and face-to-face groups of a few dozen, now have to operate inside sedentary, calorie-dense, digitally mediated societies of millions of near-strangers. The hardware has not caught up with the environment it now runs in.",
    "That gap produces specific, recognizable frictions. A craving for sugar and fat that was adaptive when such calories were rare and valuable becomes a liability when they are always within reach. A threat-detection system built to spot a predator in tall grass now fires at an inbox or a news headline. A social brain built to track roughly a hundred and fifty relationships is now asked to hold opinions about thousands of people it will never meet.",
    "Framing modern dysfunction this way, as mismatch rather than personal failure, changes where you look for a fix: less at willpower, more at redesigning the immediate environment to look a bit more like the one the body was actually built for."
  ],
  practical: {
    label: "Design around the mismatch",
    lead: "Fighting an instinct rarely works as well as changing the environment that keeps triggering it.",
    bullets: [
      "What ancient craving or fear is this modern situation triggering at a scale it was never built to handle?",
      "Can you shrink your circle of real, tracked relationships back toward a workable size instead of managing everyone?",
      "Is willpower actually the right lever here, or is the environment the thing that needs to change?",
      "Which modern abundance are you still instinctively treating as scarce?"
    ]
  },
  application:
    "For personal performance, redesigning the environment, limiting what junk food and notifications are within reach, keeping a short list of relationships you actually maintain, works better than relying on discipline to override instincts that were never built for the scale of the world you now live in.",
  models: ["loss-aversion", "scarcity", "illusion-of-control", "dual-process"],
  connections: [
    { to: "sap-happiness-paradox", type: "related" },
    { to: "sap-agricultural-trap", type: "related" },
    { to: "sw-lollapalooza-effect", type: "related" },
    { to: "pom-reasonable-not-rational", type: "reinforces" },
    { to: "sap-imagined-order", type: "related" }
  ],
  quote: null
},

{
  id: "sap-happiness-paradox", num: 9, book_id: "sap", category: "people",
  title: "More Power, Same Happiness",
  thesis: "Despite an enormous rise in wealth, health, and technological capability since the agricultural revolution, there is little solid evidence that humans have become any happier, because wellbeing tracks expectations and biology more than material circumstances.",
  reading_time: 3,
  explanation: [
    "The objective story of human progress is easy to tell: life expectancy up, calories up, information access up, violent death down almost everywhere. The subjective story is far harder to establish and rarely gets asked at all, because felt experience does not show up in the archaeological or economic record the way granaries and populations do. What little evidence exists suggests reported happiness has moved surprisingly little across huge material transitions, and may even have dipped during some of the hardest ones, like early industrialization.",
    "One likely mechanism is that happiness is relative and adaptive. People judge their circumstances against a reference point, their own recent past or the people around them, that rises right along with their actual circumstances, canceling out much of the gain before it registers. Biology may also set a rough baseline that outside conditions can only nudge for a while before drifting back.",
    "That raises an uncomfortable question about what progress is actually for. If capability and output keep climbing while the one thing that was supposedly the point does not, the metric being tracked may not be the metric that matters."
  ],
  practical: {
    label: "Track wellbeing, not just capability",
    lead: "A gain that moves a measurable capability is not the same as a gain that moves how anyone actually feels.",
    bullets: [
      "Is this improvement moving a felt experience, or just a number that is easier to measure?",
      "What will this gain be judged against once it becomes the new normal?",
      "Are you optimizing a metric that has already stopped correlating with how you or your team actually feel?",
      "What would genuinely count as enough here, stated in advance rather than discovered after the fact?"
    ]
  },
  application:
    "In personal and organizational goal-setting, deliberately checking whether the metric you are chasing, revenue, growth, output, still connects to the wellbeing it was originally meant to serve prevents the common trap of hitting every target while feeling no better off than when you started.",
  models: ["enough", "narrative-fallacy", "wysiati", "loss-aversion"],
  connections: [
    { to: "sap-evolutionary-mismatch", type: "extends" },
    { to: "sap-agricultural-trap", type: "related" },
    { to: "pom-never-enough", type: "reinforces" },
    { to: "pom-man-in-the-car", type: "related" },
    { to: "tfs-reference-points", type: "related" }
  ],
  quote: null
},

{
  id: "sap-history-no-direction", num: 10, book_id: "sap", category: "decision-making",
  title: "History Had No Destination",
  thesis: "What looks like an inevitable path in hindsight, from foraging to empire to the internet, was in fact a narrow accident among countless directions history could have taken, and mistaking the outcome for the plan is a standing trap in how we read the past.",
  reading_time: 3,
  explanation: [
    "There are two very different jobs someone can attempt when reasoning about the past: describing what happened and how, or explaining why it had to happen that way. The second job is usually impossible, because the honest answer is that it did not have to happen that way at all. Attempting it anyway produces tidy, satisfying stories that erase the genuine uncertainty that existed for the people actually living through the moment.",
    "The standard test is to ask, at any given branch point, what else was plausible. Which religion would dominate a region, which empire would industrialize first, which technology would win out, all of these had multiple live possibilities at the time, and small contingent events, not deep necessity, tipped the outcome one way rather than another. The branch that survived is the only one we can study, which makes it look chosen by fate rather than by chance.",
    "This matters for the present as much as the past. Current arrangements, nation-states, particular technologies, the shape of today's markets, feel permanent and necessary partly because the abandoned alternatives that once looked equally likely are no longer visible to compare against."
  ],
  practical: {
    label: "Resist the illusion of inevitability",
    lead: "The outcome that actually happened is only one of several that genuinely could have.",
    bullets: [
      "What alternative outcomes were genuinely live at this juncture, not just the one that actually occurred?",
      "Are you explaining why something happened, or quietly assuming it had to happen that way?",
      "Whose account got left out of the story because it did not end up on the winning branch?",
      "Does the current arrangement feel permanent because it is necessary, or because the alternatives are no longer visible?"
    ]
  },
  application:
    "For anyone making forecasts or long-term bets, treating the present as one branch among several that could have occurred, rather than the necessary output of history, keeps you honest about how much of any outcome, including your own track record, rode on chance rather than design.",
  models: ["historical-contingency", "narrative-fallacy", "alternative-histories", "silent-evidence"],
  connections: [
    { to: "fbr-alternative-histories", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "reinforces" },
    { to: "tbs-silent-evidence", type: "related" },
    { to: "fbr-hindsight-habit", type: "related" },
    { to: "sap-unification-of-humankind", type: "contrasts" },
    { to: "sap-scientific-ignorance", type: "related" }
  ],
  quote: null
}

);
