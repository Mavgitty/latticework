/* The Wealth of Nations - Adam Smith - 8 ideas */
window.DB.ideas.push(

{
  id: "won-pin-factory", num: 1, book_id: "won", category: "strategy",
  title: "Division of Labour",
  thesis: "Splitting one job into many narrow, repeated steps multiplies the output the same hands can produce.",
  reading_time: 3,
  explanation: [
    "Smith opens with a small pin factory to make an abstract argument concrete. One worker doing every step alone might finish a handful of pins in a day. Divide the job into distinct operations, wire drawing, straightening, cutting, pointing, and put a different person on each, and ten workers turn out many thousands. Nothing about the workers changed. Only the arrangement of the work did.",
    "Three separate effects are doing the work. Repetition builds a worker's dexterity at one narrow motion far beyond what switching between tasks allows. Time is no longer lost moving between one kind of work and another. And a task reduced to one repeated motion is the task most likely to get a machine built for it, since the improvement to chase is obvious and narrow rather than diffuse.",
    "The pin factory is a demonstration, not a special case. The same multiplication is available wherever a job can be broken into steps and handed to different hands, across a firm, a profession or an economy. The limiting factor is rarely willingness. It is whether the work has actually been redesigned around the split, rather than assumed to already exist."
  ],
  practical: {
    label: "Example: finding the split",
    lead: "Look for one role doing several distinct jobs badly instead of several roles doing one job well.",
    bullets: [
      "Which role currently combines two or more genuinely different skills?",
      "What would each split-off step look like done by a specialist, repeatedly?",
      "Is there enough volume in each step to keep a specialist occupied?",
      "What tool or process would only be worth building once the step stands alone?",
      "Has the arrangement of work actually changed, or only the headcount?"
    ]
  },
  application:
    "In a growing company the equivalent moment arrives when a generalist role becomes several narrower ones, support splitting from sales, sales splitting by segment, and the output per person on each step rises well beyond what adding headcount to the old undivided role would have bought. The same logic applies across a portfolio: a fund that lets partners specialise by sector or stage is running its own pin factory, and the gain shows up as depth of judgement per deal rather than as anything visible on an org chart.",
  models: ["division-of-labour", "specialisation", "scale-economies", "compounding"],
  connections: [
    { to: "specialisation", type: "reinforces" },
    { to: "won-extent-of-market", type: "extends" },
    { to: "s7p-scale-economies", type: "related" },
    { to: "compounding", type: "related" },
    { to: "won-gains-from-trade", type: "related" }
  ],
  quote: null
},

{
  id: "won-invisible-hand", num: 2, book_id: "won", category: "history",
  title: "The Invisible Hand",
  thesis: "Someone pursuing only their own gain within a competitive market can end up serving everyone else's interest too, without meaning to.",
  reading_time: 3,
  explanation: [
    "Smith's example is a merchant deciding where to put capital to work. The merchant is not weighing the national interest. He is weighing his own security and his own return, and for good private reasons he generally prefers to invest close to home, in ventures he can watch and understand, rather than send capital abroad on trust. The public benefit, more capital retained and employed domestically, arrives as a side effect of a decision made for entirely private reasons.",
    "The claim is narrower than the phrase is usually made to carry. Smith is not arguing that self-interest is always benign, or that markets need no rules. He is making a specific observation: within a competitive structure, the pursuit of private advantage can produce a public good that no one set out to design and that no one had to be persuaded to want.",
    "The mechanism depends entirely on the structure holding. Competition, open entry and enforceable property are doing the coordinating. Remove them and the same self-interest, pursued just as sincerely, stops producing anything resembling a public benefit and starts producing the opposite."
  ],
  practical: {
    label: "Example: checking the structure",
    lead: "Before trusting self-interest to produce a good outcome, check that the competitive conditions still hold.",
    bullets: [
      "Is entry into this market genuinely open, or blocked in practice?",
      "Who benefits if this particular self-interest is left alone to operate?",
      "Is there real competition disciplining the outcome, or the appearance of it?",
      "What would this same actor do if the competitive constraint disappeared?",
      "Am I crediting the market for a result the structure is actually producing?"
    ]
  },
  application:
    "In allocating capital, this is the argument for letting price and competition do coordination work that no single fund or founder could do by planning: nobody centrally decides which start-ups deserve capital, yet capital seeking its own return finds its way toward the uses the market currently values most, however imperfectly. The discipline for an investor is remembering the second half of the claim as often as the first, since the coordination is conditional on real competition, and wherever competition is missing, self-interest stops being a reliable proxy for the public good and has to be checked directly.",
  models: ["invisible-hand", "incentives", "spontaneous-order", "feedback-loops"],
  connections: [
    { to: "won-butcher-brewer-baker", type: "extends" },
    { to: "incentives", type: "reinforces" },
    { to: "cd-no-strategy-problem", type: "related" },
    { to: "goal-local-efficiency", type: "contrasts" },
    { to: "won-merchants-interest", type: "contrasts" }
  ],
  quote: {
    text: "He intends only his own gain, and he is in this, as in many other cases, led by an invisible hand to promote an end which was no part of his intention.",
    attribution: "Adam Smith, The Wealth of Nations",
    why: "Smith uses the image once in the whole book, in passing, to describe a specific case of capital staying home. It has since been stretched to cover markets generally, which is worth knowing whenever the phrase gets deployed as a universal law rather than the narrow, conditional observation it originally was."
  }
},

{
  id: "won-butcher-brewer-baker", num: 3, book_id: "won", category: "decision-making",
  title: "Self-Interest at the Dinner Table",
  thesis: "People respond far more reliably to an appeal to their own advantage than to an appeal to your need.",
  reading_time: 2,
  explanation: [
    "Smith's illustration is deliberately domestic. Your dinner does not arrive because the butcher, the brewer and the baker feel warmly toward you. It arrives because you have offered each of them a trade that serves their own interest, and you addressed your request to that interest rather than to their goodwill.",
    "The practical force of the observation is that self-interest is dependable in a way goodwill is not. Goodwill has to be renewed, noticed and maintained. Self-interest, once correctly identified, keeps operating on its own, which is why arrangements built on it tend to survive changes in mood, personnel and relationship far better than arrangements that depend on someone continuing to feel generous.",
    "None of this makes Smith a cynic about human motive generally. He wrote at length elsewhere about sympathy and fellow feeling. The claim is specific to commerce: when you need something from a stranger, reliably, at scale, the durable route runs through their interest, not their character."
  ],
  practical: {
    label: "Example: addressing the right motive",
    lead: "Before asking for something, check whether the request is aimed at goodwill or at interest.",
    bullets: [
      "Am I asking this person to help me, or offering them a reason of their own?",
      "What does the other side actually get, stated plainly rather than implied?",
      "Would this arrangement survive if the relationship cooled tomorrow?",
      "Have I confused their politeness with their actual incentive?",
      "Is there a version of this ask that serves their interest more directly?"
    ]
  },
  application:
    "The same test applies to a pitch, a partnership or a hire. A deal that depends on the other side liking you, or feeling obliged, is fragile the moment either fades. A deal built so that the other side's own interest is genuinely served, clearly stated and not merely implied, keeps working after the goodwill has worn off, and it is the version worth designing for by default.",
  models: ["incentives", "decision-quality", "opportunity-cost", "second-order"],
  connections: [
    { to: "won-invisible-hand", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tic-management-incentives", type: "related" },
    { to: "vd-negotiation-posture", type: "related" },
    { to: "ewb-compensation", type: "reinforces" }
  ],
  quote: {
    text: "It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
    attribution: "Adam Smith, The Wealth of Nations",
    why: "Smith picks the most intimate example available, where you would expect goodwill to matter most, and shows self-interest doing the work instead. That choice of example is the argument."
  }
},

{
  id: "won-gains-from-trade", num: 4, book_id: "won", category: "strategy",
  title: "Gains from Trade",
  thesis: "Two parties who differ in what they produce most cheaply both gain by specialising in that and trading for the rest.",
  reading_time: 3,
  explanation: [
    "Smith's argument starts at the level of a household. A tailor does not make his own shoes and a shoemaker does not cut his own coat. Each buys the other's output with the proceeds of what he does best, and both end up better clothed and better shod than if each had insisted on doing everything himself.",
    "Scaled up, the same logic runs between towns, regions and nations. If another producer can supply something more cheaply than you can make it yourself, buying it from them and applying your own effort where you have the advantage leaves everyone with more in total than either party's self-sufficiency would.",
    "The comparison is always relative to your own alternatives, not absolute. What matters is not whether you could technically make the thing at all, but what you give up elsewhere by choosing to make it rather than buy it. That is why the argument survives even when one party is better at nearly everything: the question is never who is best, it is what each party's own effort is worth doing instead."
  ],
  practical: {
    label: "Example: the make-or-buy test",
    lead: "Ask what your own effort is worth doing instead, not whether you could do the thing at all.",
    bullets: [
      "Could I build this in-house, and separately, what would that effort cost elsewhere?",
      "Who can supply this more cheaply than my own alternative use of the same resources?",
      "Am I comparing absolute skill, or the relative worth of each party's next best option?",
      "What would I have to give up to bring this in-house?",
      "Does specialising here and trading for the rest leave more value overall?"
    ]
  },
  application:
    "The same reasoning runs every make-or-buy and outsourcing decision a company faces, and every debate about vertical integration in a portfolio company: the right test is never whether the in-house version could be built at all, it is what the resources spent building it are worth doing elsewhere. For an investor, it is also the honest answer to why specialist funds persist alongside generalists rather than being competed away, since each holds a comparative edge worth trading on rather than an absolute one.",
  models: ["gains-from-trade", "specialisation", "opportunity-cost", "division-of-labour"],
  connections: [
    { to: "won-pin-factory", type: "reinforces" },
    { to: "opportunity-cost", type: "reinforces" },
    { to: "circle-of-competence", type: "related" },
    { to: "specialisation", type: "reinforces" },
    { to: "won-extent-of-market", type: "related" }
  ],
  quote: null
},

{
  id: "won-extent-of-market", num: 5, book_id: "won", category: "strategy",
  title: "The Extent of the Market",
  thesis: "How finely a job can be divided is set by the size of the market it serves, so a bigger market supports deeper specialisation.",
  reading_time: 2,
  explanation: [
    "In a small village, one man is blacksmith, carpenter and wheelwright together, because no single trade generates enough demand on its own to occupy a person full time. In a large town, someone can make nothing but nails and still be busy, because the market is big enough to absorb one person's entire output of that one thing.",
    "This is why Smith devotes real attention to roads, rivers and shipping. Anything that widens the market a producer can reach, cheaper transport, safer trade routes, permits a finer division of labour behind it, because specialists need enough buyers to be worth becoming. The division of labour and the size of the market grow together, each enabling more of the other.",
    "The modern equivalent is reach rather than roads. A platform, a marketplace or simply the internet can widen the addressable market for a narrow offering from a neighbourhood to a continent, which is what lets a business survive on a specialism so narrow it would have starved a generation earlier."
  ],
  practical: {
    label: "Example: sizing the market behind the niche",
    lead: "Check that the addressable market is large enough before betting on a narrow specialism.",
    bullets: [
      "How many buyers can this offering actually reach, given current distribution?",
      "Would this narrow a position have been viable with a smaller addressable market?",
      "What is widening the reachable market here: a channel, a platform, a falling cost?",
      "Is the specialism narrow because the market allows it, or despite the market?",
      "What happens to this business if its reach stops growing?"
    ]
  },
  application:
    "For a founder, this reframes a common positioning question: the issue is rarely whether a narrow, specialised offering is good, it is whether the addressable market behind it is actually large enough to support that narrowness at a viable scale. A venture bet on deep specialisation is implicitly also a bet that the market has grown wide enough to carry it, and that second bet deserves at least as much diligence as the product itself.",
  models: ["division-of-labour", "critical-mass", "distribution", "scale-economies"],
  connections: [
    { to: "won-pin-factory", type: "extends" },
    { to: "zto-small-market", type: "contrasts" },
    { to: "csp-cold-start-problem", type: "related" },
    { to: "ctc-beachhead", type: "related" },
    { to: "s7p-scale-economies", type: "related" }
  ],
  quote: null
},

{
  id: "won-natural-price", num: 6, book_id: "won", category: "decision-making",
  title: "Natural Price and Market Price",
  thesis: "Price is pulled toward the ordinary cost of producing a thing, and any gap between what is paid today and that level is temporary, not a fact about worth.",
  reading_time: 3,
  explanation: [
    "Smith separates two prices for the same good. The natural price is what covers land, labour and capital at their ordinary going rates in that place. The market price is whatever is actually being paid today, set by how much has been brought to market against how much people want at that price right now.",
    "The two are pulled together by entry and exit rather than by anyone deciding they should match. When the market price sits above the natural price, the extra return draws in more producers and more capital until supply catches up and the surplus is competed away. When it sits below, producers drift elsewhere until scarcity pushes the price back up. Nobody plans the correction. The gap itself is what recruits the correction.",
    "The mechanism assumes free entry and exit. Smith goes on, at length, to describe how guilds, licences and exclusive privileges hold a market price above its natural level indefinitely by blocking the correction, which is the exception that proves how much work the free movement of capital is normally doing."
  ],
  practical: {
    label: "Example: reading a persistent gap",
    lead: "Treat a price sitting above ordinary cost as a question about what is blocking entry, not a fact about demand.",
    bullets: [
      "What would the ordinary cost of land, labour and capital justify here?",
      "How far above or below that level does the current price sit?",
      "What is stopping new supply from arriving to close the gap?",
      "Is that blocker structural, or just slow, and for how long?",
      "Would this return survive genuinely free entry into the market?"
    ]
  },
  application:
    "A price that sits durably above what the ordinary cost of capital in an industry would justify is really a statement about a barrier, not about demand, since ordinary competitive entry would otherwise have closed the gap already. The useful diligence question for a return that looks unusually good is not whether it is real today but what specifically is stopping capital from arriving to compete it away, and how long that specific thing is likely to hold.",
  models: ["feedback-loops", "cost-of-capital", "capital-cycle", "incentives"],
  connections: [
    { to: "cr-the-capital-cycle", type: "reinforces" },
    { to: "won-invisible-hand", type: "related" },
    { to: "tmit-cycles", type: "related" },
    { to: "cd-only-barriers-matter", type: "related" },
    { to: "won-merchants-interest", type: "related" }
  ],
  quote: null
},

{
  id: "won-merchants-interest", num: 7, book_id: "won", category: "history",
  title: "The Merchant's Interest Is Not the Public's",
  thesis: "Those who trade in a good understand it best, and Smith warns they will use that knowledge to narrow competition for themselves rather than to serve the public.",
  reading_time: 3,
  explanation: [
    "Smith spends much of the book defending open markets, which makes his repeated warnings about merchants and manufacturers land harder. People in the same trade, he observes, rarely gather even socially without the conversation drifting toward some scheme to raise prices or keep a rival out. The knowledge that makes them expert in their own trade is the same knowledge that lets them see exactly where to narrow it.",
    "His practical advice follows directly. Any proposed regulation of trade that comes from the merchants and manufacturers of that trade should be received with real suspicion and examined at length before being adopted, because their interest in the matter is never quite the public's, and they generally have an interest in restricting supply to their own benefit.",
    "The asymmetry is durable because it is structural, not a matter of bad character. The people with the deepest knowledge of an industry are also the people with the clearest stake in its being harder to enter, so expertise and self-interest tend to arrive together, and the second does not announce itself when the first is doing the talking."
  ],
  practical: {
    label: "Example: reading a proposed rule",
    lead: "Ask who benefits before accepting an industry's own case for regulating itself.",
    bullets: [
      "Who is proposing this rule, and what trade are they in?",
      "Does the rule make entry into their own trade easier or harder for others?",
      "What is the public-interest case, and is it the whole story?",
      "Who currently sits on the body writing the standard or the licence?",
      "Would this rule survive being written by someone with no stake in the trade?"
    ]
  },
  application:
    "The modern form is an incumbent proposing the standard, sitting on the body that writes the licence, or funding the research used to justify the restriction. A founder or investor should treat industry-authored rules as a candidate moat rather than a neutral safeguard, ask directly who the restriction actually protects, and price the durability of that protection on its own terms rather than accepting the public-interest framing that usually accompanies it.",
  models: ["incentives", "monopoly", "barriers-to-entry", "authority-bias"],
  connections: [
    { to: "won-natural-price", type: "related" },
    { to: "won-invisible-hand", type: "contrasts" },
    { to: "s7p-power", type: "related" },
    { to: "cd-only-barriers-matter", type: "related" },
    { to: "incentives", type: "reinforces" }
  ],
  quote: {
    text: "Consumption is the sole end and purpose of all production; and the interest of the producer ought to be attended to, only so far as it may be necessary for promoting that of the consumer.",
    attribution: "Adam Smith, The Wealth of Nations",
    why: "Smith states this as the corrective to mercantile thinking generally, only after several hundred pages spent showing how often producers persuade governments to reverse the priority. The line is a summary judgement delivered at the end of the argument, not a starting assumption."
  }
},

{
  id: "won-real-price-of-toil", num: 8, book_id: "won", category: "strategy",
  title: "The Real Price of a Thing",
  thesis: "What something truly costs is the toil and trouble of acquiring it, not the number stamped on the money you hand over.",
  reading_time: 2,
  explanation: [
    "Smith distinguishes the nominal price of a thing, its price in money, from its real price, which is what it actually costs someone in labour and trouble to obtain. Money is a convenient common measure, but it is not a stable one. The same sum can command wildly different amounts of effort at different times, because the value of money itself moves.",
    "This is Smith's own version of a point that recurs across the book: two things carrying the same money price can cost entirely different amounts in what was actually given up to get them, depending on who is paying and when. Comparing purchases, wages or prices across long stretches of time by their money figures alone is comparing numbers that have quietly stopped meaning the same thing.",
    "The corrective is to translate back into what was actually forgone: hours of labour, output commanded, or the next best alternative use of the same resources. That translation is unglamorous and rarely the number reported in headlines, which is exactly why it is usually the more honest one."
  ],
  practical: {
    label: "Example: translating the nominal figure",
    lead: "Restate a money figure in terms of what it actually cost to acquire before comparing it across time.",
    bullets: [
      "What does this money figure actually command, in hours or output, today?",
      "How has the value of the currency itself moved since the comparison period?",
      "Am I comparing two nominal numbers that no longer mean the same thing?",
      "What was genuinely forgone to pay this price, beyond the number itself?",
      "Does the real cost look different once translated out of money terms?"
    ]
  },
  application:
    "The equivalent discipline in investing is refusing to compare valuations, fees or returns across periods by their nominal figures alone, since inflation, currency and changing units of account can make a headline number cheap or expensive independent of anything about the underlying business. Restating a price in terms of what it actually costs in real purchasing power, or in the opportunities forgone to pay it, is the same move Smith is making, applied three centuries later to a spreadsheet instead of a loaf of bread.",
  models: ["opportunity-cost", "anchoring", "intrinsic-value", "base-rates"],
  connections: [
    { to: "tii-intrinsic-value", type: "reinforces" },
    { to: "opportunity-cost", type: "reinforces" },
    { to: "won-natural-price", type: "related" },
    { to: "pom-price-of-returns", type: "related" },
    { to: "anchoring", type: "reinforces" }
  ],
  quote: null
}

);
