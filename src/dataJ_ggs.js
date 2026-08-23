/* Guns, Germs, and Steel — Jared Diamond — 9 ideas */
window.DB.ideas.push(

{
  id: "ggs-continental-axis", num: 1, book_id: "ggs", category: "history",
  title: "The Shape of the Continents",
  thesis: "A continent's main axis, east-west or north-south, set how fast crops and livestock could spread between places sharing a climate, and that spread rate shaped everything downstream.",
  reading_time: 3,
  explanation: [
    "Eurasia stretches east-west along similar latitudes, so wheat domesticated in the Fertile Crescent could move to Egypt, India, and China without crossing into a different climate zone. The Americas and Africa run north-south, so a crop bred for one latitude hits a wall of different day length, rainfall, and temperature within a few hundred miles.",
    "A species that thrives in one place usually needs generations of unconscious re-selection before it thrives somewhere with a different climate, even at short distance. Llamas never reached Mexico from the Andes. The wheel, invented in Mesoamerica, stayed a toy because no draft animal existed nearby to pull a cart across the terrain between regions.",
    "The axis itself is an accident of plate tectonics, not culture or ambition. It explains why societies on an east-west landmass could compound borrowed and invented advances across a huge connected zone, while societies on north-south continents kept hitting natural barriers to the same exchange."
  ],
  practical: {
    label: "Map your own diffusion paths",
    lead: "Ideas and practices spread fastest along paths of shared context, not shared ambition.",
    bullets: [
      "Before assuming a good practice will transfer, check whether the receiving context truly matches the one it worked in.",
      "Look for the barriers between you and an idea's origin, not just the distance.",
      "Treat a failed transplant as a context mismatch, not proof the idea was weak.",
      "Seek out the widest zone of genuinely shared context available to you, since that is where borrowing compounds fastest."
    ]
  },
  application: "When you import a process from another team, market, or company, ask what invisible conditions made it work there before assuming it will work in your own, differently shaped, environment.",
  models: ["geographic-determinism", "base-rates", "second-order", "historical-contingency"],
  connections: [
    { to: "ggs-domestication-lottery", type: "extends" },
    { to: "ggs-technology-diffusion", type: "related" },
    { to: "wnf-natural-experiments", type: "related" },
    { to: "won-extent-of-market", type: "related" },
    { to: "ggs-not-intelligence", type: "reinforces" }
  ],
  quote: null
},

{
  id: "ggs-domestication-lottery", num: 2, book_id: "ggs", category: "history",
  title: "The Domestication Lottery",
  thesis: "Only a tiny fraction of the world's wild plants and animals were ever capable of being domesticated, and nearly all the domesticable large mammals happened to live in Eurasia.",
  reading_time: 3,
  explanation: [
    "Of the world's large wild herbivorous mammals, only a handful were ever domesticated, and most of those originated in Eurasia. A species needs the right temperament, diet, growth rate, and social structure to work as livestock. Zebras look like horses but bite hard and refuse the herd hierarchy that makes horses manageable.",
    "Wild ancestors of wheat, barley, and useful pulses were also unusually concentrated in the Fertile Crescent, handing early farmers there a package of complementary crops and animals no other region matched. This was not a matter of which people tried hardest. It was a matter of what raw material existed to try on.",
    "Regions without a domesticable large mammal, like sub-Saharan Africa or the Americas, were locked out of the plow, mounted transport, and animal-based haulage regardless of the ingenuity of their inhabitants."
  ],
  practical: {
    label: "Audit raw material before judging effort",
    lead: "What looks like a gap in ambition is often a gap in available inputs.",
    bullets: [
      "Separate outcomes caused by scarce raw material from outcomes caused by effort or skill.",
      "When a resource looks abundant, check whether it is actually usable, not just present.",
      "Notice package deals: complementary resources multiply each other's value far more than any one resource alone.",
      "Before concluding a team or group failed to build something, ask what inputs were even available to them."
    ]
  },
  application: "Before judging a competitor, a market, or a past version of yourself for not achieving something, check whether the necessary raw materials, skills, capital, or timing were even on the table.",
  models: ["silent-evidence", "survivorship", "base-rates", "geographic-determinism"],
  connections: [
    { to: "ggs-continental-axis", type: "reinforces" },
    { to: "ggs-surplus-specialists", type: "extends" },
    { to: "fbr-survivorship-in-data", type: "related" },
    { to: "tbs-silent-evidence", type: "related" },
    { to: "wnf-natural-experiments", type: "related" }
  ],
  quote: null
},

{
  id: "ggs-germs-weapon", num: 3, book_id: "ggs", category: "history",
  title: "Germs as an Accidental Weapon",
  thesis: "Centuries of living beside domesticated animals gave Eurasians immunity to diseases that then devastated populations with no prior exposure, turning biology into history's deadliest weapon.",
  reading_time: 3,
  explanation: [
    "Most human epidemic diseases jumped to people from domesticated animals after generations of close contact in villages and barns. Populations that endured repeated outbreaks lost their most vulnerable members over centuries and built collective resistance, at a brutal cost paid long before any contact with the Americas.",
    "Societies without a comparable history of animal domestication had no such immunity. When explorers and traders arrived, the germs traveling with them killed the majority of many populations before a single battle was fought, doing more to decide the outcome than any weapon.",
    "This was not biological superiority. It was a side effect of the same domestication lottery: societies that lived close to more domesticable animals for longer paid an early price in disease and later collected an unearned windfall of resistance."
  ],
  practical: {
    label: "Separate the weapon from the wielder",
    lead: "The most decisive advantage in a conflict is often one nobody built on purpose.",
    bullets: [
      "When an outcome looks decisive, check for an unacknowledged structural factor behind the visible cause.",
      "Do not credit winners with foresight for advantages they did not design.",
      "Look for the long, invisible cost behind a sudden visible benefit.",
      "When assessing your own advantages, ask which ones you actually built versus simply inherited."
    ]
  },
  application: "In competitive settings, resist the instinct to explain a lopsided win purely by skill or planning. Check first for an inherited, unearned structural edge that did most of the real work.",
  models: ["second-order", "feedback-loops", "illusion-of-control", "historical-contingency"],
  connections: [
    { to: "ggs-continental-axis", type: "related" },
    { to: "ggs-pizarro-cortes", type: "extends" },
    { to: "wnf-reversal-of-fortune", type: "related" },
    { to: "fbr-alternative-histories", type: "related" },
    { to: "ggs-not-intelligence", type: "reinforces" }
  ],
  quote: null
},

{
  id: "ggs-surplus-specialists", num: 4, book_id: "ggs", category: "strategy",
  title: "Surplus Makes Specialists",
  thesis: "A reliable food surplus and settled, dense populations are what let some people stop farming and become soldiers, priests, bureaucrats, and inventors.",
  reading_time: 3,
  explanation: [
    "Hunter-gatherer bands move constantly and produce only enough food for themselves; there is no stored surplus to feed anyone who is not hunting or gathering. Farming produces more calories per acre than foraging and lets the surplus be stored, taxed, and redistributed.",
    "That stored surplus pays for people who make nothing edible: standing armies, full-time craftsmen, administrators, and thinkers who can spend their days inventing instead of searching for the next meal. Denser, settled populations also multiply the number of minds available to specialize and stumble onto useful ideas.",
    "This is not a story about some cultures valuing knowledge more than others. It is a mechanical result of caloric output per unit of land, itself downstream of which crops and animals a region happened to have access to."
  ],
  practical: {
    label: "Find your surplus before expecting specialists",
    lead: "Innovation and expertise are downstream of a surplus somebody has to produce first.",
    bullets: [
      "Before asking why a team is not innovating, check whether it has slack resources freed from daily survival tasks.",
      "Fund the unglamorous surplus-producing work first; the interesting specialized work depends on it.",
      "Watch for false credit given to a culture of innovation when the real driver is resource surplus.",
      "When scaling a team, plan for the support base a specialist role actually requires."
    ]
  },
  application: "When you want more original thinking from a team or from yourself, look first at whether there is real slack, time and resources freed from immediate output, rather than assuming the gap is one of talent or will.",
  models: ["division-of-labour", "specialisation", "scale-economies", "compounding"],
  connections: [
    { to: "ggs-centralization-writing", type: "extends" },
    { to: "ggs-domestication-lottery", type: "related" },
    { to: "won-pin-factory", type: "related" },
    { to: "won-extent-of-market", type: "related" },
    { to: "wnf-centralization-prerequisite", type: "related" }
  ],
  quote: null
},

{
  id: "ggs-centralization-writing", num: 5, book_id: "ggs", category: "strategy",
  title: "Surplus Breeds Bureaucrats and Scribes",
  thesis: "The same surplus and density that created specialists also produced political centralization and writing, since both are ways of managing complexity small bands never needed.",
  reading_time: 3,
  explanation: [
    "A band of thirty people can resolve disputes and coordinate action through direct conversation. A society of thousands, holding stored grain, land claims, and trade obligations, cannot; it needs formal authority to enforce decisions and a system of records to track what memory alone cannot hold.",
    "Writing arose largely as bookkeeping technology for these surplus economies, tallying grain and tribute before it became a vehicle for literature. Centralized political structures arose to organize labor for irrigation, defense, and construction that surplus and density now made both possible and necessary.",
    "Both are consequences of upstream conditions, crops, animals, climate, rather than independent cultural achievements. Societies without the domestication lottery's rewards rarely produced either, not for lack of intelligence but for lack of the density and surplus that make bureaucracy and writing worth inventing."
  ],
  practical: {
    label: "Match your structure to your complexity",
    lead: "Formal systems appear exactly when informal coordination stops scaling.",
    bullets: [
      "Introduce formal record-keeping and hierarchy when true complexity outgrows informal coordination, not earlier or later.",
      "Treat the need for a written process as a symptom of growth, not a moral failing of the team.",
      "When comparing organizations, ask what scale problem their structure was actually built to solve.",
      "Judge centralization or bureaucracy by the coordination problem it solves, not by reflex for or against it."
    ]
  },
  application: "As your team or project grows past the size where everyone can just talk it through, expect the need for documented process and clearer authority to arrive on schedule, and build it deliberately rather than resisting it as red tape.",
  models: ["critical-juncture", "feedback-loops", "scale-economies", "compounding"],
  connections: [
    { to: "ggs-surplus-specialists", type: "reinforces" },
    { to: "ggs-not-intelligence", type: "related" },
    { to: "wnf-centralization-prerequisite", type: "extends" },
    { to: "wnf-de-facto-de-jure-power", type: "related" },
    { to: "wnf-critical-junctures", type: "related" }
  ],
  quote: null
},

{
  id: "ggs-technology-diffusion", num: 6, book_id: "ggs", category: "strategy",
  title: "Steel Travels Faster Than Seeds",
  thesis: "Once invented, technology diffused across a connected landmass faster than domesticated crops ever could, because ideas cross climate barriers that organisms cannot.",
  reading_time: 3,
  explanation: [
    "A crop or animal has to actually survive and reproduce in a new climate to spread there. A technique only has to be seen, understood, and copied. Metallurgy, the wheel, and writing could jump between societies with very different climates so long as there was contact and a use for them.",
    "This gave Eurasia a second compounding advantage on top of its head start in food production. Not only could founder crops and animals spread along its east-west axis, every later invention anywhere on that landmass could reach every other part of it far faster than a biological transplant, and far faster than technology could cross the climate barriers dividing the Americas or Africa.",
    "The result was a widening gap over centuries: more people in contact, more inventions, and a diffusion network with almost no climate friction, compounding on top of the surplus and specialists that produced the inventions in the first place."
  ],
  practical: {
    label: "Separate the barrier for the idea from the barrier for the resource",
    lead: "What spreads easily and what does not follow different rules entirely.",
    bullets: [
      "When something is not spreading, diagnose whether it is a resource constraint or a communication constraint.",
      "Invest in the connective tissue, shared standards, common language, trusted channels, that lets techniques move faster than raw materials ever could.",
      "Expect information to travel far beyond the original conditions that produced it.",
      "Do not assume a slow-adopting region lacks the idea; check whether it lacks the underlying conditions to use it."
    ]
  },
  application: "When rolling out a new method across teams or markets, separate what needs to be physically rebuilt from what only needs to be explained, since the second travels far faster than the first if you clear the communication channels for it.",
  models: ["geographic-determinism", "network-economies", "critical-mass", "compounding"],
  connections: [
    { to: "ggs-continental-axis", type: "reinforces" },
    { to: "ggs-domestication-lottery", type: "related" },
    { to: "won-extent-of-market", type: "related" },
    { to: "wnf-reversal-of-fortune", type: "related" }
  ],
  quote: null
},

{
  id: "ggs-not-intelligence", num: 7, book_id: "ggs", category: "decision-making",
  title: "Geography, Not Genius",
  thesis: "The book's central argument is that environmental and geographic accidents, not differences in intelligence or culture, explain why some societies ended up with guns, germs, and steel and others did not.",
  reading_time: 3,
  explanation: [
    "Diamond wrote partly against a widespread assumption that Europeans or Eurasians succeeded because they were smarter or more inventive. He argues the opposite causal order: given the same crops, animals, and geography, any population would likely have developed similar advantages, because the conditions themselves reward certain behaviors regardless of who holds them.",
    "The evidence he leans on is reversibility: transplant a Eurasian farming package into a region with the right latitude and climate, as happened repeatedly, and it succeeds regardless of the inhabitants' identity. What varies by continent is not human capacity but the menu of exploitable plants, animals, and connected space available to work with.",
    "This reframing has consequences far beyond history. It shifts credit and blame away from people and onto circumstance, which is uncomfortable for both those who benefited and those who did not, but hard to argue against once the underlying biogeography is laid out."
  ],
  practical: {
    label: "Look for the environment before crediting the person",
    lead: "Structural advantage is easy to mistake for personal or cultural superiority.",
    bullets: [
      "When a group or company wins big, check what starting conditions they inherited before crediting talent alone.",
      "Resist explanations that flatter the winners; look for the resource or timing accident underneath.",
      "Test a claim of superior culture by asking whether it would survive a swap of starting conditions.",
      "Use structural explanations to guide strategy and policy, not to hand out moral praise or blame."
    ]
  },
  application: "The next time you or someone else explains a big success purely by talent, work ethic, or culture, run the swap test: would the same person or group have won starting from a genuinely different set of resources and timing.",
  models: ["halo-effect", "narrative-fallacy", "base-rates", "confirmation-bias"],
  connections: [
    { to: "ggs-explaining-success", type: "reinforces" },
    { to: "ggs-continental-axis", type: "extends" },
    { to: "wnf-extractive-vs-inclusive", type: "contrasts" },
    { to: "halo-the-halo-effect", type: "related" },
    { to: "halo-single-explanations", type: "related" }
  ],
  quote: null
},

{
  id: "ggs-pizarro-cortes", num: 8, book_id: "ggs", category: "history",
  title: "Cajamarca, in Miniature",
  thesis: "The 1532 encounter between Pizarro's tiny force and the Inca emperor Atahualpa compresses the whole thesis into a single afternoon: steel, germs, and centralized organization overwhelming a much larger society caught by surprise.",
  reading_time: 3,
  explanation: [
    "Pizarro landed with under two hundred men and faced an empire of millions, yet captured the emperor within hours and effectively ended the empire's independent existence. Diamond treats this not as a story of individual heroism or treachery but as the endpoint of trajectories set centuries earlier.",
    "Steel swords and armor, horses the Inca had never seen, and a chain of command built on centuries of Eurasian state-building gave the Spanish force capabilities the Inca had no equivalent for. Smallpox had also already swept ahead of the Spanish, killing the previous emperor and triggering a succession war that weakened Inca unity before Pizarro even arrived.",
    "Every advantage on display, the weapons, the immunity, the organization able to project force across an ocean, traces back to the domestication lottery and the continental axis. Cortes's conquest of the Aztec empire a decade earlier followed the same pattern, which is why Diamond treats the case as illustration rather than a one-off anomaly."
  ],
  practical: {
    label: "Trace the compressed history behind a sudden collapse",
    lead: "A dramatic single event usually rests on causes that took centuries to build.",
    bullets: [
      "When a small force or player produces an outsized outcome, look for compounding advantages built long before the encounter.",
      "Check for a hidden precondition, like a weakened opponent, before crediting tactics alone.",
      "Treat decisive-battle narratives as summaries of deep structural asymmetry, not standalone events.",
      "When facing a much larger competitor, ask what long-building asymmetries might already be in play beneath the surface."
    ]
  },
  application: "When a small competitor suddenly upends a much larger incumbent, resist the tidy story of a clever tactic and look instead for the years of quiet, compounding advantage that made the moment possible.",
  models: ["power-law", "second-order", "historical-contingency", "critical-juncture"],
  connections: [
    { to: "ggs-germs-weapon", type: "extends" },
    { to: "ggs-not-intelligence", type: "reinforces" },
    { to: "wnf-reversal-of-fortune", type: "related" },
    { to: "fbr-alternative-histories", type: "related" }
  ],
  quote: null
},

{
  id: "ggs-explaining-success", num: 9, book_id: "ggs", category: "learning",
  title: "How Not to Explain Civilizations",
  thesis: "The book's lasting lesson is a discipline for explaining large-scale success or failure: look for structural, geographic, and biological preconditions before reaching for stories about culture, virtue, or genius.",
  reading_time: 3,
  explanation: [
    "Diamond's method throughout is to keep asking why one level further back than the comfortable answer. Instead of stopping at better technology, he asks why one side had it first, and keeps tracing the chain back to crops, animals, and the shape of continents, accidents nobody chose.",
    "This has a use well outside history. Any time an explanation for large-scale success stops at a trait of the people involved, ambition, intelligence, culture, it is worth checking whether an earlier, more structural cause is doing the real work and simply expressing itself through those people. The visible trait is often a symptom of the precondition, not its origin.",
    "The discipline is not that culture and choices do not matter at all. It is that they operate inside constraints set well before anyone made a choice, and skipping past those constraints produces explanations that flatter or blame the wrong thing."
  ],
  practical: {
    label: "Push your explanation back one more step",
    lead: "Before crediting a trait for an outcome, check what earlier condition produced the trait.",
    bullets: [
      "When you reach an explanation involving culture, genius, or virtue, ask what came before it that let it take hold.",
      "Build a habit of tracing outcomes back through at least one more causal layer than feels natural.",
      "Be suspicious of any single-factor story for something this large; look for the several preconditions that had to align.",
      "Apply the same discipline to your own successes before writing them up as skill alone."
    ]
  },
  application: "The next time you write up a postmortem, on a project, a market, or your own year, add one more round of why before you settle on the explanation, and see whether the story changes.",
  models: ["narrative-fallacy", "alternative-histories", "silent-evidence", "halo-effect"],
  connections: [
    { to: "ggs-not-intelligence", type: "reinforces" },
    { to: "ggs-pizarro-cortes", type: "related" },
    { to: "halo-single-explanations", type: "extends" },
    { to: "halo-correlation-causality", type: "related" },
    { to: "tbs-narrative-fallacy", type: "related" }
  ],
  quote: null
}

);
