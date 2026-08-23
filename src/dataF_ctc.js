/* Crossing the Chasm — Geoffrey A. Moore — 9 ideas */
window.DB.ideas.push(

{
  id: "ctc-adoption-lifecycle", num: 1, book_id: "ctc", category: "strategy",
  title: "Five Audiences, Not One Curve",
  thesis: "The adoption curve conceals five audiences whose reasons for buying do not transfer to each other.",
  reading_time: 3,
  explanation: [
    "Moore starts from the familiar diffusion curve of innovators, early adopters, early majority, late majority and laggards. His change is to stop reading it as one population arriving at different speeds and to read it as five audiences holding incompatible reasons to buy. Enthusiasts buy the technology to examine it. Visionaries buy a strategic leap. Pragmatists buy a proven improvement. Conservatives buy a commodity cheaply. The sequence is real, but nothing about the motivation carries forward from one group to the next.",
    "That reframing changes what a sales record tells you. Cumulative revenue rises under either reading, so a company can post a strong year while selling entirely into one audience it has nearly exhausted. The useful question is which audience the last ten customers came from and what each said they were buying. A list of enthusiasts and visionaries is not an early lead in the mainstream market. It is a completed campaign in a much smaller one.",
    "A continuous line also encourages a bad plan, because smoothness implies momentum. Persuading one group builds no standing with the next, and the transitions are where products stop rather than accelerate. Moore's contribution is to make the joins visible so they can be planned as separate campaigns, each with its own argument, evidence and buyer, instead of being treated as a single market gradually warming up to the same pitch."
  ],
  practical: {
    label: "Example: reading your own customer list",
    lead: "Sort recent customers by the reason each gave for buying, then see which audience the revenue actually comes from.",
    bullets: [
      "Which of the five groups did each of my last ten customers belong to?",
      "What did each of them say they were buying, in their own words?",
      "Is growth coming from a new audience or from a deeper cut of the current one?",
      "Which group is my sales material actually written for?",
      "How much of the reachable population in that group is already sold?"
    ]
  },
  application:
    "Ask which audience produced the revenue before asking how fast it grew. A company with ten million in visionary-funded pilots and one with ten million in pragmatist renewals sit at different points in the same story, and only the second has evidence that the next customer will resemble the last. Segmenting the reference list by buying motive is a cheap diligence step, and the growth rate on its own will never reveal it.",
  models: ["adoption-lifecycle", "incentives", "second-order", "distribution"],
  connections: [
    { to: "ctc-the-chasm", type: "extends" },
    { to: "ctc-pragmatist-logic", type: "related" },
    { to: "pcs-industry-evolution", type: "related" },
    { to: "csp-atomic-network", type: "contrasts" },
    { to: "critical-mass", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-the-chasm", num: 2, book_id: "ctc", category: "strategy",
  title: "The Chasm",
  thesis: "Visionaries buy a change and pragmatists buy a safe improvement, so early success proves very little.",
  reading_time: 3,
  explanation: [
    "The gap Moore names sits between the visionary and the pragmatist. A visionary is buying discontinuity and will accept an incomplete product, custom work and risk, because the payoff being sought is an advantage over competitors. A pragmatist is buying a dependable improvement to an existing operation and wants the opposite of all of that. The product does not change at the boundary. The definition of a good purchase does, completely.",
    "The consequence is that the asset built in the first market has no value in the second. A visionary reference describes a bold bet, custom integration and a result that has not yet been repeated, which is precisely the profile a cautious buyer screens out. Ten enthusiastic early customers can therefore leave a company with no usable evidence at all, and the harder the earlier sale was fought, the less transferable the story tends to be.",
    "What makes this dangerous is the timing. Visionary revenue arrives in large, slow, negotiated deals, so growth looks healthy for as long as that population lasts and then flattens without an obvious cause. The instinctive readings are a sales execution problem or a product gap, and both invite more of what worked before. Moore's diagnosis is that the audience has changed and the go-to-market has not."
  ],
  practical: {
    label: "Example: testing whether you are in it",
    lead: "Look for the pattern rather than the number, because pipeline stops converting while the product and the pitch keep improving.",
    bullets: [
      "Are deals stalling at the same stage for a different stated reason each time?",
      "Who is my strongest reference, and would a cautious buyer recognise them?",
      "Am I being asked for another pilot or for a production deployment?",
      "Has the last year of revenue come from a narrowing set of buyer types?",
      "Do prospects want an advantage, or an improvement their peers have already made?"
    ]
  },
  application:
    "A flat quarter after two strong years of pilot growth is the signature, and it is usually presented as a hiring problem. Before funding more sales capacity, check whether anyone in the pipeline resembles the customers already closed. Capacity added on the wrong side of this boundary raises burn without changing conversion, and the company will have less runway when it finally has to rebuild the go-to-market.",
  models: ["adoption-lifecycle", "social-proof", "critical-mass", "inflection-point"],
  connections: [
    { to: "ctc-pragmatist-logic", type: "extends" },
    { to: "ctc-beachhead", type: "related" },
    { to: "social-proof", type: "reinforces" },
    { to: "csp-cold-start-problem", type: "related" },
    { to: "tpl-stage-by-stage", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-pragmatist-logic", num: 3, book_id: "ctc", category: "people",
  title: "Why Pragmatists Buy From Leaders",
  thesis: "Pragmatists take references only from peers in their own industry, which makes the first sale circular.",
  reading_time: 3,
  explanation: [
    "The pragmatist is accountable for the result and collects no reward for being early. That position produces a consistent set of preferences: a market leader rather than the best product, a supplier likely to still exist in five years, an implementation that resembles one already completed elsewhere. Buying the leader is also defensible internally if it goes wrong, which is a real benefit to the individual doing the buying and rarely appears in any vendor's competitive analysis.",
    "References follow the same logic and are narrower than sellers expect. A pragmatist in general insurance wants to hear from another general insurer, in a comparable role, with a comparable process. A brilliant case study from logistics is treated as interesting rather than as evidence. This is why volume of references matters far less than their fit, and why a broad customer list assembled one industry at a time persuades nobody.",
    "Put those two together and the problem is circular. Pragmatist customers require pragmatist references from their own segment, which can only come from pragmatist customers in that segment. No amount of argument breaks the loop, because the objection is not about the claim being wrong. The only way through is to change the geometry of the attack so that one group of peers ends up referencing each other."
  ],
  practical: {
    label: "Example: auditing your references",
    lead: "Judge every reference by whether the next buyer would accept it, not by how enthusiastic the customer is.",
    bullets: [
      "Which of my references share an industry and a role with my current prospect?",
      "Would that prospect's peers already know the referencing company by name?",
      "Am I offering enthusiasm where the buyer is asking for precedent?",
      "How many completed deployments exist in this segment, not across all segments?",
      "Which segment am I closest to having enough references in?"
    ]
  },
  application:
    "This is the mechanism behind the observation that vertical software compounds while horizontal software grinds. When assessing a company, count references inside its single largest segment rather than across the whole logo list, and ask whether wins are getting easier there. Falling sales cycle length within one industry is early evidence the loop has closed. A flat cycle length across a scattered logo list suggests every deal is still being won from cold.",
  models: ["social-proof", "adoption-lifecycle", "switching-costs", "authority-bias"],
  connections: [
    { to: "ctc-beachhead", type: "extends" },
    { to: "ctc-whole-product", type: "related" },
    { to: "social-proof", type: "reinforces" },
    { to: "authority-misinfluence", type: "related" },
    { to: "tic-why-they-stay", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-beachhead", num: 4, book_id: "ctc", category: "strategy",
  title: "Take One Segment Completely",
  thesis: "Attack a segment small enough that you can become its obvious default within a year.",
  reading_time: 3,
  explanation: [
    "A beachhead is one narrowly defined segment attacked hard enough to win most of it. Moore's definition of a segment is behavioural rather than demographic: a set of buyers who share a problem, share a vocabulary and talk to each other. Enterprises with two hundred to a thousand staff is not a segment by that test. Claims managers at mid-sized general insurers, who all attend the same two conferences, is one.",
    "The reason for going narrow is the reference loop rather than pricing power. Word of mouth only travels inside a community, so becoming the default in a small community delivers something that the same revenue spread across ten communities does not. Fifty customers can constitute market leadership in a segment that contains four hundred buyers, and leadership is the thing the next pragmatist is checking for before agreeing to look at all.",
    "The cost is refusing revenue. A company mid-crossing is usually short of cash, and every quarter brings a qualified opportunity from outside the target that would close and would break the concentration. Moore's position is that the discretionary money and attention go to the segment until it is held, which is a decision founders find far easier to agree with in principle than to make in the specific case in front of them."
  ],
  practical: {
    label: "Example: defining the beachhead",
    lead: "Pick the segment by whether its members talk to each other, then size it so that dominance is achievable this year.",
    bullets: [
      "Do these buyers read the same publications and attend the same events?",
      "Is the segment small enough that fifty customers would make me the default?",
      "Is there a compelling reason for these buyers to act within a year?",
      "Can I deliver the complete result they need, not just my part of it?",
      "What revenue from outside the segment am I prepared to decline?"
    ]
  },
  application:
    "Ask the company to name its beachhead and to state its share of it. A precise segment with a measurable share is a falsifiable claim and can be tracked between rounds. Answers such as mid-market or financial services are not segments and usually mean the concentration was never made. The tell in the data is a customer list scattered across industries with no repeat of the same buyer type more than twice.",
  models: ["monopoly", "critical-mass", "specialisation", "strategy-kernel"],
  connections: [
    { to: "ctc-whole-product", type: "extends" },
    { to: "ctc-positioning", type: "related" },
    { to: "zto-small-market", type: "reinforces" },
    { to: "critical-mass", type: "reinforces" },
    { to: "selectivity", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-whole-product", num: 5, book_id: "ctc", category: "strategy",
  title: "The Whole Product",
  thesis: "Pragmatists buy the complete result, and most of what delivers it is supplied by someone else.",
  reading_time: 3,
  explanation: [
    "Moore separates the generic product, meaning what is shipped and invoiced, from the whole product, meaning everything a customer needs in order to obtain the promised outcome. That usually includes data migration, integration with two or three systems, training, a support arrangement, a compliance sign-off and often a consultant who has done it before. The enthusiast will assemble all of this personally. The pragmatist expects to be handed it, working.",
    "Most of the whole product is therefore not built by the vendor, which makes crossing partly an assembly problem. Implementation partners, systems integrators, data providers and adjacent tools each supply a piece, and the missing piece is where deals die quietly. A company that cannot name who provides each element is describing a product while the buyer is pricing a project, and the gap between those two things is where the sales cycle disappears.",
    "This is the reason narrowness is not optional. A whole product can only be completed for one definition of the customer at a time, because each segment needs different integrations, different certifications and different partners. Two segments means two assemblies, roughly double the partner work and half the reference density. Segment choice and whole-product cost are the same decision looked at from two directions."
  ],
  practical: {
    label: "Example: mapping the whole product",
    lead: "List everything standing between purchase and the promised result, then mark who supplies each item today.",
    bullets: [
      "What does this customer need that we do not ship?",
      "Who supplies each missing piece, and have they done it before here?",
      "Which element is currently the reason deals slow down?",
      "What would a second segment add to this list?",
      "Is any partner in a position to take the customer relationship from us?"
    ]
  },
  application:
    "Whole-product gaps show up as long implementation times, heavy professional services revenue and churn concentrated in the first year. Read the services line as a diagnostic rather than as a margin problem: it is measuring what the customer needs and the vendor has not yet productised or partnered. A company that has moved that work to partners in one segment has built something reusable. A company still doing it itself in five segments has built nothing.",
  models: ["value-chain", "constraint", "network-economies", "multi-sided-market"],
  connections: [
    { to: "ctc-beachhead", type: "extends" },
    { to: "ctc-channel-and-pricing", type: "related" },
    { to: "s7p-network-economies", type: "related" },
    { to: "tic-customer-first", type: "reinforces" },
    { to: "pcs-buyer-power", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-positioning", num: 6, book_id: "ctc", category: "strategy",
  title: "Position Against a Named Alternative",
  thesis: "A positioning claim only lands when it names the alternative the buyer would otherwise choose.",
  reading_time: 2,
  explanation: [
    "Moore's positioning statement has fixed slots: for a stated target customer, who has a stated problem, our product is a category, that provides a benefit, unlike a named alternative. The slot companies leave empty is the last one. Superiority stated in the abstract gives a pragmatist nothing to work with, because the decision in front of them is not whether the product is good but which of two or three named options to sign.",
    "Two alternatives matter and they are different. The market alternative is the incumbent way of doing the job, which owns the budget you intend to spend and is what a finance committee will compare you against. The product alternative is the technically credible rival the buyer would otherwise back, and naming it is what establishes which category you belong in. Refusing to name either leaves the buyer to file you wherever is most convenient.",
    "The statement is also not a slogan, and it is not owned by the company that writes it. It is the shortest description a pragmatist can repeat accurately to a colleague who was not in the room, which means the test is whether it survives that retelling rather than whether the wording pleases the people who drafted it. Most positioning work fails at that point, because it was written to sound distinctive to insiders rather than to be repeatable by a buyer who has other things to do."
  ],
  practical: {
    label: "Example: filling the empty slot",
    lead: "Write the claim with the competitive alternative named, then check whether a customer can repeat it unaided.",
    bullets: [
      "Which budget does this purchase come out of, and what has it been spent on?",
      "Which named product would this buyer choose if we did not exist?",
      "What category does the buyer think we are in, in their words?",
      "Can a customer restate our claim accurately to a colleague?",
      "Does the claim survive contact with the alternative's strongest point?"
    ]
  },
  application:
    "In a first meeting, ask who the company is displacing and listen for a name. Founders who answer with a category, a spreadsheet or nothing usually have unqualified pipeline and unpredictable win rates, because nobody in the company knows which comparison is being run. A precise named alternative also lets you check the claim independently through win and loss records, which is one of the few positioning tests that does not rely on the founder's own account.",
  models: ["counter-positioning", "branding", "generic-strategy", "anchoring"],
  connections: [
    { to: "ctc-beachhead", type: "related" },
    { to: "ctc-whole-product", type: "related" },
    { to: "s7p-counter-positioning", type: "related" },
    { to: "ouww-two-minute-story", type: "reinforces" },
    { to: "s7p-branding", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-channel-and-pricing", num: 7, book_id: "ctc", category: "strategy",
  title: "Channel First, Price to Move It",
  thesis: "Choose the channel the target segment already trusts, then set price so that channel sells.",
  reading_time: 2,
  explanation: [
    "Once the segment is chosen, the distribution question is largely answered, because pragmatists buy through the channels they already use and trust. The test of a channel is not its reach but whether it can carry the whole product to that specific buyer, which rules out most low-touch options for complex purchases and rules out direct enterprise sales for small transactions. Building a new channel and crossing at the same time is two campaigns, not one.",
    "Price during the crossing is therefore a channel decision rather than a demand-curve decision. The number has to be close to the market leader's, because a pragmatist reads a large discount as an admission of being second choice, and it has to leave enough margin for whoever is doing the selling to prefer selling this over the alternatives available to them. Discounting to win a deal removes the channel's reason to work.",
    "This inverts later in the lifecycle. Conservatives buy on price against a well-understood commodity, and by then the channel is established, trained and cheap to use, so competing on the number is reasonable. Applying that logic during the crossing, on the theory that a low price accelerates adoption, removes the margin that would have paid for the reference-building and whole-product work the segment actually requires. The order of the two pricing regimes is not interchangeable."
  ],
  practical: {
    label: "Example: pricing the channel in",
    lead: "Work out who will do the selling in this segment, then price so that selling your product is their best option.",
    bullets: [
      "Where does this buyer already go to buy things like this?",
      "Can that channel deliver the whole product without our engineers?",
      "What does the channel earn per deal, compared with its alternatives?",
      "Is our price within sight of the market leader's, and if not, why?",
      "Am I discounting to win a deal at the cost of the channel's motivation?"
    ]
  },
  application:
    "Channel and price are where segment choice becomes checkable. A company claiming an enterprise beachhead while selling self-serve, or claiming product-led growth while running six-month evaluations, has not made the decision it says it has. Watch discount depth over time as well: a widening gap between list and realised price is usually the first quantitative sign that the positioning is not holding, and it appears well before win rates move.",
  models: ["distribution", "five-forces", "incentives", "opportunity-cost"],
  connections: [
    { to: "ctc-whole-product", type: "extends" },
    { to: "ctc-after-the-chasm", type: "related" },
    { to: "zto-distribution", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "csup-sales-organisation", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-organisational-cost", num: 8, book_id: "ctc", category: "people",
  title: "Different People Cross the Chasm",
  thesis: "The people who win visionaries are usually not the people who satisfy pragmatists.",
  reading_time: 3,
  explanation: [
    "The salesperson who wins visionaries is a specialist in ambiguity. They sell an outcome that does not exist yet, negotiate custom scope, work one enormous deal for a year and are comfortable with the founder rewriting the product around the customer. Selling to pragmatists rewards the opposite behaviour: a repeatable process, a standard configuration, references handled carefully and a service commitment that will be honoured after the contract is signed.",
    "The same split runs through engineering and management. The crossing rewards documentation, versioning, reliability and saying no to one-off requests, which is precisely the work that the people who built the early product experience as a demotion. Moore is direct about what usually happens instead. The founders keep the pioneers in the same seats, the pioneers keep selling and building the way that worked, and the flat quarters are attributed to the market not being ready.",
    "His practical advice is to change roles and compensation together and to say plainly what is happening. Pioneers are valuable and should be moved to the next new thing rather than managed out or asked to become something else. Compensation designed to reward hunting single large deals will keep producing single large deals, whatever the strategy document says about the target segment."
  ],
  practical: {
    label: "Example: matching people to the stage",
    lead: "Name what the next twelve months actually require, then check whether the current team is paid to do it.",
    bullets: [
      "Does this role now need repeatability where it once needed improvisation?",
      "Who on the team is doing work they no longer find interesting?",
      "What behaviour does the commission plan currently reward?",
      "Where can pioneers be moved so their strengths still pay off?",
      "Am I explaining the change, or hoping people adapt quietly?"
    ]
  },
  application:
    "Team change is the most commonly underestimated cost of crossing and it lands in the same eighteen months as the go-to-market rebuild. When underwriting, ask who the company thinks it needs to hire next and whether the early team has been told. Founder reluctance here is a genuine risk factor, not a soft one, because a strategy that requires a different sales motion and keeps the same sellers and the same incentives will not be executed.",
  models: ["specialisation", "incentives", "process-power", "adoption-lifecycle"],
  connections: [
    { to: "ctc-the-chasm", type: "extends" },
    { to: "ctc-beachhead", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "cap-hiring-for-temperament", type: "related" },
    { to: "s7p-process-power", type: "related" }
  ],
  quote: null
},

{
  id: "ctc-after-the-chasm", num: 9, book_id: "ctc", category: "strategy",
  title: "Once You Are Across",
  thesis: "Inside the mainstream, advantage shifts from winning individual deals to owning the standard.",
  reading_time: 2,
  explanation: [
    "Holding one segment changes what is available next. Adjacent segments become reachable because the references now travel, since a claims manager will listen to an underwriter more readily than to a logistics firm, and each conquered segment shortens the next campaign. Moore describes this as rolling from segment to segment rather than launching at the market as a whole, and the growth constraint moves from credibility to capacity, hiring and the channel's ability to deliver.",
    "The position also hardens on its own. Partners build integrations around the leader, consultants train their staff on it, buyers standardise procurement on it, and each of those raises the cost of choosing someone else. The lasting value of crossing is that accumulation rather than the revenue recorded during it, which is why the same revenue earned across scattered segments is worth materially less than revenue concentrated in one.",
    "Two things then go wrong. The habits that won the beachhead, meaning close relationships and generous customisation, become expensive at scale and hard to withdraw. And the company is now the incumbent, which is a different job: the next entrant will do exactly what it did, taking one dense segment where the leader is broad but thin."
  ],
  practical: {
    label: "Example: choosing the next segment",
    lead: "Pick the adjacent segment where existing references carry the most weight, and check what the beachhead habits now cost.",
    bullets: [
      "Which neighbouring segment would recognise my current customers as peers?",
      "What does that segment need added to the whole product?",
      "Which practices from the beachhead are now too expensive to repeat?",
      "Where is my position broad but thin enough for an entrant to attack?",
      "Is the constraint now credibility, or capacity and channel?"
    ]
  },
  application:
    "This is where the durable multiple is earned, so track evidence of the standard forming rather than the growth rate alone. Useful signals are third-party integrations built without being paid for, competitors positioning against the company by name, and shortening sales cycles in each new segment. Their absence in a company growing quickly across many segments usually means it is buying revenue rather than compounding a position, and the growth will need the same spend next year.",
  models: ["scale-economies", "network-economies", "monopoly", "durability"],
  connections: [
    { to: "ctc-beachhead", type: "extends" },
    { to: "ctc-whole-product", type: "reinforces" },
    { to: "s7p-network-economies", type: "reinforces" },
    { to: "zto-last-mover", type: "related" },
    { to: "csp-escape-velocity", type: "related" }
  ],
  quote: null
}

);
