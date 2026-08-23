/* Shoe Dog - Phil Knight - 9 ideas */
window.DB.ideas.push(

{
  id: "sd-betting-the-company", num: 1, book_id: "sd", category: "decision-making",
  title: "Growing at the Edge of the Cliff",
  thesis: "For most of two decades Knight ran Nike by staking its entire existence on the next shipment, treating slow, conservative growth as the greater danger.",
  reading_time: 3,
  explanation: [
    "Blue Ribbon Sports, and then Nike, spent the 1960s and 70s in a permanent cash crunch of its own making. The moment a container of shoes from Japan sold through, Knight plowed the proceeds and whatever the banks would lend into an even bigger order, before the previous one had finished paying for itself. There was rarely a quarter where the company held more cash than it owed.",
    "Knight's logic was that the real risk wasn't overextension, it was under-ordering. Demand for running shoes was compounding faster than any bank's comfort level, and a competitor happy to fill a gap on the shelf would take a customer that never came back. In a market being grabbed rather than served, growing cautiously felt to him like a slower way of losing.",
    "He is candid in hindsight that this wasn't a clean, confident strategy so much as a decade of barely sleeping. The company survived less because the bet was obviously correct and more because it kept surviving, one shipment at a time, until the math started working in its favor."
  ],
  practical: {
    label: "Growth versus survival",
    lead: "Fast growth and reckless growth look identical from the outside. The test is what happens in your worst realistic month, not your average one.",
    bullets: [
      "Before scaling ordering or hiring ahead of revenue, work out the single worst-case timing gap you could face and whether you'd survive it.",
      "Know exactly which supplier, lender, or customer could end the company if they changed their mind next quarter.",
      "Revisit your growth rate as a deliberate choice at intervals, rather than defaulting to 'as fast as the market allows.'",
      "Separate the times you were early and right from the times you were reckless and lucky before treating either as a repeatable formula."
    ]
  },
  application: "For a founder or operator, the lesson isn't that betting the company is admirable, it's that Knight made the bet with open eyes and kept re-checking it against the specific failure modes in front of him, rather than treating growth as a virtue that excused the risk. The same discipline applies to any aggressive expansion: know precisely what kills you, not just what grows you.",
  models: ["capital-allocation", "compounding", "opportunity-cost", "margin-of-safety"],
  connections: [
    { to: "sd-bank-on-a-knife-edge", type: "extends" },
    { to: "sd-death-by-a-thousand-crises", type: "reinforces" },
    { to: "sd-risk-as-edge", type: "related" },
    { to: "htht-wartime-peacetime", type: "related" },
    { to: "zto-definite-optimism", type: "reinforces" },
    { to: "mos-risk-first", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sd-bank-on-a-knife-edge", num: 2, book_id: "sd", category: "history",
  title: "The Bank That Kept Saying No",
  thesis: "Nike's ordinary growth looked so aggressive on paper that its own bankers repeatedly tried to cut off the credit line that kept the company alive.",
  reading_time: 3,
  explanation: [
    "Blue Ribbon Sports ran on borrowed money almost from its first order, and its bankers periodically panicked at what they saw: revenue climbing, debt climbing faster, and a company that plowed every dollar of profit straight back into more inventory instead of building a cushion. More than once, a banker told Knight plainly that the account was becoming more trouble than it was worth.",
    "What looked to the bank like a company living dangerously close to the edge was, from Knight's side, just what growth at that pace required. The mismatch wasn't really about Nike's health, it was about two parties reading the same numbers through different risk tolerances, one trained to protect a loan and one trying to build a company.",
    "Each near-severance forced Knight into fresh workarounds: new banks, new financing partners like the Japanese trading house Nissho Iwai, anything that bought another season. The company's survival depended as much on finding lenders who could tolerate its shape as on the underlying business being sound."
  ],
  practical: {
    label: "Reading your own numbers like a lender would",
    lead: "If your growth would alarm a cautious banker, know why before they tell you.",
    bullets: [
      "Run your own numbers the way a nervous lender would: debt trend against cash trend, not just revenue trend.",
      "Diversify financing relationships before you need to, so one skittish counterparty can't set your company's expiration date.",
      "When a lender gets nervous, treat it as information about your risk profile worth examining, not just an obstacle to route around.",
      "Keep a short list of alternative financing sources ready before the current one is your only option."
    ]
  },
  application: "Operators who fund growth with debt or supplier credit should read Knight's recurring bank crises as a reminder that solvency risk is often invisible until a single counterparty decides to enforce it. The fix isn't necessarily slower growth, it's knowing in advance who could pull the rug and having somewhere else to stand if they do.",
  models: ["free-cash-flow", "cost-of-capital", "risk-not-volatility", "second-order"],
  connections: [
    { to: "sd-betting-the-company", type: "extends" },
    { to: "sd-customs-shakedown", type: "related" },
    { to: "sd-death-by-a-thousand-crises", type: "reinforces" },
    { to: "tmit-defence-first", type: "contrasts" },
    { to: "pom-room-for-error", type: "contrasts" },
    { to: "otps-valley-of-death", type: "related" }
  ],
  quote: null
},

{
  id: "sd-onitsuka-break", num: 3, book_id: "sd", category: "strategy",
  title: "Forced Out of Someone Else's Brand",
  thesis: "Nike only became a brand at all because its Japanese supplier tried to cut it out, turning a distribution deal into an identity Knight hadn't planned to need yet.",
  reading_time: 3,
  explanation: [
    "For years Blue Ribbon Sports existed to import and sell shoes made by Onitsuka Tiger in Japan. It was a comfortable arrangement in one sense: someone else designed and manufactured the product, and Knight's team just had to sell it well in America. But it left the company's entire future dependent on a manufacturer that owed it no particular loyalty.",
    "When Knight discovered Onitsuka was negotiating with another distributor behind his back, the relationship collapsed into lawsuits and mutual accusations. The split was not a strategic decision made from strength, it was survival forced by someone else's move, and it happened before Nike had a fully worked out product line, factory relationships, or even a name people recognized.",
    "The Onitsuka split is a reminder that being a distributor for someone else's product, however good the margins look for a while, means the ceiling on the business is set by a relationship you don't control. Nike became Nike because that relationship broke, not because Knight had a five-year plan to build a brand."
  ],
  practical: {
    label: "Distribution isn't a moat",
    lead: "If your business depends on distributing someone else's product, you don't control your own ceiling.",
    bullets: [
      "Ask what happens to your business the day your supplier or platform decides to compete with you directly.",
      "Build the capability to stand alone, your own product, your own name, before you're forced to, not after.",
      "Treat a key supplier or channel relationship as a risk to be managed continuously, not a stable asset.",
      "When a key partner turns adversarial, move fast on your own identity rather than trying to salvage the old arrangement."
    ]
  },
  application: "Any founder building on top of a supplier, platform, or reseller relationship should treat the Onitsuka break as a live warning: the day the upstream partner sees you as competition instead of a customer, the terms change overnight. Building your own name and product earlier, even when the existing arrangement is profitable, is cheaper than being forced into it during a crisis.",
  models: ["distribution", "branding", "cornered-resource", "second-order"],
  connections: [
    { to: "sd-marketing-before-margin", type: "related" },
    { to: "sd-death-by-a-thousand-crises", type: "related" },
    { to: "tid-value-networks", type: "related" },
    { to: "s7p-cornered-resource", type: "contrasts" },
    { to: "lbbw-customer-captivity", type: "related" },
    { to: "gsbs-the-kernel", type: "related" }
  ],
  quote: null
},

{
  id: "sd-marketing-before-margin", num: 4, book_id: "sd", category: "investing",
  title: "Spending on Belief Before the Balance Sheet Could Justify It",
  thesis: "Knight repeatedly spent Nike's scarcest cash on athletes and marketing years before the company could obviously afford it, betting on brand meaning over financial safety.",
  reading_time: 3,
  explanation: [
    "At almost every point where a conservative operator would have hoarded cash, Knight instead paid runners, sponsored teams, and built relationships with coaches like Bill Bowerman, spending money the company technically didn't have to spare on things that produced no immediate, measurable return.",
    "The reasoning wasn't naive. Knight understood that in a category where product performance differences were narrow and easily copied, what a runner or a store believed about the shoe mattered as much as its cushioning. Early endorsements, even small unglamorous ones, were purchasing something a balance sheet doesn't have a line item for: credibility with the exact people whose opinion other buyers would trust.",
    "This is a genuinely uncomfortable bet to make with money you might need for payroll or the next shipment. Knight made it anyway, repeatedly, on the theory that a company that waited until it could afford marketing would never build a brand strong enough to be worth defending."
  ],
  practical: {
    label: "Buying belief, not just inventory",
    lead: "Decide in advance what portion of scarce cash you'll spend on things that build belief rather than things that build stock.",
    bullets: [
      "Separate spending that builds brand credibility from spending that just buys more units to sell, and budget for both deliberately.",
      "Look for endorsement or advocacy relationships priced below what they're actually worth to you, before competitors notice.",
      "Accept that brand-building spend won't show up in this quarter's numbers, and measure it on a longer clock than working capital.",
      "Know the line between an investment in credibility and a vanity expense you can't actually justify."
    ]
  },
  application: "For an operator with more growth opportunity than cash, the Nike pattern argues for treating brand-building spend as a real capital allocation decision worth the same scrutiny as inventory or hiring, not an indulgence to be cut first when money is tight. The hard part is doing this while genuinely strapped for cash, which is exactly when the temptation to cut it is strongest and exactly when Knight didn't.",
  models: ["branding", "durability", "opportunity-cost", "optionality"],
  connections: [
    { to: "sd-onitsuka-break", type: "extends" },
    { to: "sd-betting-the-company", type: "reinforces" },
    { to: "lbbw-customer-captivity", type: "related" },
    { to: "s7p-branding", type: "reinforces" },
    { to: "zto-definite-optimism", type: "related" },
    { to: "ewb-institutional-imperative", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sd-buttface-culture", num: 5, book_id: "sd", category: "people",
  title: "The Buttfaces",
  thesis: "Knight surrounded himself with a small, fiercely loyal, deliberately blunt group of early employees who argued constantly and never quit, and their annual retreats became the company's real decision-making engine.",
  reading_time: 3,
  explanation: [
    "Nike's early management team, the men Knight nicknamed the Buttfaces, were an unlikely group: a former accountant, a lawyer, a hurdler, a fellow runner, thrown together less by resume than by a shared willingness to work absurd hours for a company that might not survive the year. Their annual retreats were loud, insulting, and often personal, closer to a fight than a strategy offsite.",
    "Knight tolerated and even encouraged the bluntness because he distrusted polite consensus. He wanted people who would tell him an idea was bad in the room, not sabotage it quietly afterward, and he built a culture where loyalty and open argument coexisted rather than substituting for each other.",
    "What held the group together wasn't process or org chart, it was years of shared risk. People who had personally guaranteed loans or gone unpaid alongside Knight earned a kind of standing that no title conferred, and that standing is what let the arguments stay honest instead of political."
  ],
  practical: {
    label: "Loyalty that argues back",
    lead: "Build a culture where people are safe enough to fight about ideas and committed enough to stay after they lose the argument.",
    bullets: [
      "Reward people who tell you your idea is wrong in the room over people who agree in the room and complain outside it.",
      "Let shared risk, not seniority, be what earns someone the standing to argue hard with you.",
      "Keep the group small enough that bluntness reads as trust rather than as attack.",
      "Separate a culture of candid argument from one of simple conflict; the difference is whether people stay loyal after they lose."
    ]
  },
  application: "For a founder building an early team, the Buttfaces suggest hiring less for polish and more for people willing to bet years of their life alongside you and tell you the truth while doing it. The retreats worked because the loyalty came first and the arguing was built on top of it, not the reverse.",
  models: ["founder-mode", "competitive-fire", "process-power", "reciprocity"],
  connections: [
    { to: "cinc-braintrust", type: "related" },
    { to: "cinc-candour-not-honesty", type: "reinforces" },
    { to: "htht-hire-for-strength", type: "related" },
    { to: "sd-risk-as-edge", type: "related" },
    { to: "sd-doubt-behind-swoosh", type: "related" },
    { to: "cap-hiring-for-temperament", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sd-customs-shakedown", num: 6, book_id: "sd", category: "history",
  title: "A Tariff Bill That Could Have Ended Nike",
  thesis: "A little-known customs law let U.S. authorities demand tens of millions of dollars in back duties from Nike, a single administrative dispute large enough to bankrupt the company outright.",
  reading_time: 3,
  explanation: [
    "Buried in an old countervailing duty statute was a rule about shoes imported below a certain price, and U.S. Customs used it to argue Nike owed enormous back payments on years of imports from Japan, a sum large enough to wipe out the company several times over. It had nothing to do with product quality, competition, or strategy, and everything to do with a regulatory technicality nobody at Nike had been watching closely.",
    "The dispute dragged on for years, consuming management attention and legal fees while the number hanging over the company never fully went away. It was eventually resolved through negotiation and political help rather than a clean legal victory, which is its own lesson: some existential threats get settled, not won.",
    "What makes this crisis distinct from Nike's chronic cash problems is that it came from outside the business entirely. Knight could out-hustle competitors and out-negotiate bankers, but a regulatory ruling doesn't respond to hustle, it responds to lawyers, lobbying, and time."
  ],
  practical: {
    label: "The risk you aren't watching",
    lead: "Some threats to the business have nothing to do with the market you're competing in.",
    bullets: [
      "Maintain a standing list of regulatory, legal, and compliance exposures separate from your competitive and financial risk list.",
      "Assign someone to actually monitor obscure rules that touch your supply chain or import structure, not just the obvious ones.",
      "When a regulatory dispute appears, resource it seriously early rather than treating it as a distraction from the real business.",
      "Recognize that some crises get settled through negotiation and relationships, not resolved through being right."
    ]
  },
  application: "Any operator dependent on cross-border supply chains should treat the customs dispute as a reminder to inventory the regulatory exposures nobody in the building is actively watching, since the size of the threat has no relationship to how much attention the team has been paying it.",
  models: ["fat-tails", "alternative-histories", "second-order", "illusion-of-control"],
  connections: [
    { to: "sd-bank-on-a-knife-edge", type: "related" },
    { to: "sd-death-by-a-thousand-crises", type: "extends" },
    { to: "otps-news-from-the-edge", type: "related" },
    { to: "fbr-rare-events", type: "reinforces" },
    { to: "tbs-black-swan", type: "related" },
    { to: "sd-onitsuka-break", type: "related" }
  ],
  quote: null
},

{
  id: "sd-death-by-a-thousand-crises", num: 7, book_id: "sd", category: "leadership",
  title: "How Many Times Nike Almost Didn't Exist",
  thesis: "An SEC investigation, a customs dispute, and a chronic banking crisis each threatened to end Nike on their own, and the company's survival owes as much to not losing any single roll of the dice as to any deliberate design.",
  reading_time: 3,
  explanation: [
    "Read end to end, Shoe Dog is less a single story of triumph than a sequence of near-misses that happened not to compound at the same moment. The SEC opened an investigation into Nike's finances around the time of its public offering, at the same period the customs dispute was unresolved and the bank relationship was fragile. Any one of these, escalated slightly further, plausibly ends the company.",
    "Knight's own account resists tidying this into a plan. He describes fear and exhaustion more often than confidence, and the throughline isn't a masterstroke that solved each crisis, it's that the company kept finding just enough runway, just enough goodwill, just enough of a settlement to survive to the next one.",
    "This matters because the finished, famous version of Nike's history reads backward from the outcome, making each crisis look survivable in a way it didn't feel at the time. A slightly less favorable SEC ruling, a slightly larger customs demand, or one more bank pulling out could have ended the story at any of several points."
  ],
  practical: {
    label: "Surviving isn't the same as having a plan",
    lead: "When you look at a company's history of surviving crises, ask how many of them had to break your way at once.",
    bullets: [
      "List the two or three simultaneous failures that would actually have ended your company, and check whether you're currently tempting more than one of them at once.",
      "Resist the instinct to read a survived crisis as proof the underlying decision was sound; sometimes it's proof you were fortunate in the timing.",
      "When evaluating another company's success story, ask what near-misses got edited out of the version you're hearing.",
      "Build slack specifically against the scenario where two of your live risks resolve badly in the same quarter."
    ]
  },
  application: "For anyone studying a successful company after the fact, including your own past decisions, the discipline is to reconstruct how many independent threats were live at once rather than accepting the smoothed narrative that treats survival as inevitable. Knight's own telling is unusually honest about this, which is part of why the book reads less like a victory lap than most founder memoirs.",
  models: ["survivorship", "silent-evidence", "resulting", "alternative-histories"],
  connections: [
    { to: "sd-bank-on-a-knife-edge", type: "extends" },
    { to: "sd-customs-shakedown", type: "extends" },
    { to: "sd-risk-as-edge", type: "reinforces" },
    { to: "fbr-survivorship-in-data", type: "related" },
    { to: "tbs-silent-evidence", type: "related" },
    { to: "otps-valley-of-death", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sd-risk-as-edge", num: 8, book_id: "sd", category: "performance",
  title: "Comfort With Discomfort as a Competitive Advantage",
  thesis: "Knight's genuine, practiced ease with risk and financial discomfort let Nike make moves that better-capitalized, more conservative rivals wouldn't, and that tolerance itself became a source of advantage.",
  reading_time: 3,
  explanation: [
    "Adidas and Puma had more capital, more manufacturing experience, and a longer head start, but they also had more to protect. Knight, running a company perpetually near insolvency, had comparatively little downside left to guard and had built, through years of practice, an unusual tolerance for operating in that state.",
    "This wasn't recklessness he was born with, it was something closer to a trained callus. Years of not knowing whether payroll would clear made the ordinary discomfort of a large bet feel less threatening to him than it would to a competitor whose company had never lived that close to the edge, and that gap in tolerance let Nike move when others hesitated.",
    "The advantage is subtle and easy to overstate: comfort with risk isn't the same as good judgment about which risks to take. But paired with judgment, it meant Knight's real constraint was rarely his own nerve, while a more conservative rival's often was."
  ],
  practical: {
    label: "Tolerance as a trained skill",
    lead: "Treat your own comfort with financial and reputational risk as a capability you can build deliberately, not a fixed trait.",
    bullets: [
      "Notice which decisions you're avoiding because of discomfort rather than because of the odds, and separate the two explicitly.",
      "Build risk tolerance gradually through smaller bets before it's tested by a large one, rather than discovering your limit during the large one.",
      "Watch for competitors whose caution comes from having more to protect, and look for the moves they structurally can't make.",
      "Keep judgment about which risks are worth taking separate from raw tolerance for discomfort; one without the other is dangerous."
    ]
  },
  application: "An operator competing against better-funded incumbents should ask honestly where the incumbent's caution comes from and whether comfort with a harder path is a real, ownable edge in that specific market, not just a story told after the fact to explain a win.",
  models: ["callusing-the-mind", "competitive-fire", "contrarian", "risk-not-volatility"],
  connections: [
    { to: "sd-betting-the-company", type: "reinforces" },
    { to: "sd-death-by-a-thousand-crises", type: "related" },
    { to: "htht-courage-over-intelligence", type: "reinforces" },
    { to: "rwh-eveillard-career-risk", type: "contrasts" },
    { to: "otps-ten-x-force", type: "related" },
    { to: "sd-doubt-behind-swoosh", type: "related" }
  ],
  quote: null
},

{
  id: "sd-doubt-behind-swoosh", num: 9, book_id: "sd", category: "learning",
  title: "The Founder Who Never Believed the Legend",
  thesis: "Knight's own account of Nike is full of constant self-doubt and fear, sitting uneasily against the outward story of Nike as an inevitable, destined success.",
  reading_time: 3,
  explanation: [
    "The public version of Nike's origin, repeated in advertising and business-school case studies, tends toward destiny: a visionary founder, a legendary shoe designer, a swoosh that was obviously going to mean something. Knight's own telling in Shoe Dog undercuts this deliberately, returning again and again to how uncertain, frightened, and unresolved he felt at nearly every stage.",
    "This gap matters beyond biography. Companies that succeed get their history rewritten, including sometimes by their own founders in other contexts, into a story where the outcome looks like it was always the likely one. Knight's insistence on the doubt is unusual precisely because it resists that rewrite, showing how much of what looks like conviction from the outside was closer to persistence through fear.",
    "The tension isn't a contradiction to resolve, it's the more honest description of what building something actually feels like from inside it, compared to how it reads once it has obviously worked."
  ],
  practical: {
    label: "Don't outsource your history to the outcome",
    lead: "The story a successful company tells about its own founding is usually smoother than what it felt like at the time.",
    bullets: [
      "When studying a founder's success, weight their own account of doubt and fear over the polished retrospective version.",
      "If you're building something now, expect the felt experience to include real uncertainty even when it later reads as inevitable.",
      "Be suspicious of any origin story, including your own, that has been edited to remove the periods where it plausibly could have failed.",
      "Separate confidence you project outward from confidence you actually feel; the first can be necessary even when the second is absent."
    ]
  },
  application: "For anyone building something uncertain, the useful move is to notice that persistent self-doubt and eventual success are not actually in tension, they coexist constantly, and expecting the doubt to resolve before the outcome does is a misreading of how the process usually works.",
  models: ["narrative-fallacy", "wysiati", "resulting", "halo-effect"],
  connections: [
    { to: "sd-buttface-culture", type: "related" },
    { to: "sd-risk-as-edge", type: "contrasts" },
    { to: "halo-the-halo-effect", type: "reinforces" },
    { to: "halo-winning-dots", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "related" },
    { to: "fbr-lucky-fool", type: "related" }
  ],
  quote: null
}

);
