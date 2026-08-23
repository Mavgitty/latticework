/* Good Strategy Bad Strategy — Richard P. Rumelt — 10 ideas */
window.DB.ideas.push(

{
  id: "gsbs-the-kernel", num: 1, book_id: "gsbs", category: "strategy",
  title: "The Kernel",
  thesis: "A strategy has three parts: a diagnosis, a guiding policy, and coherent action.",
  reading_time: 3,
  explanation: [
    "Rumelt reduces strategy to three components. The diagnosis names what is actually going on and gives a confusing situation a shape that can be acted against. The guiding policy is the overall approach chosen for dealing with that shape, and it works mainly by ruling responses out. The coherent actions are the specific coordinated steps that carry the policy out and commit real resources to it. He calls the three together the kernel.",
    "All three have to be present, because each missing part fails in its own particular way. A diagnosis with no policy is analysis. A policy with no diagnosis is a preference, adopted without knowing what it is meant to solve. Actions with no policy behind them are a budget. Most documents carrying the word strategy contain a competent version of one part, usually the ambition, and leave the reader to supply the other two.",
    "The kernel is also small. A real strategy can be stated in a paragraph, which means length in a strategy document tends to indicate the absence of a choice rather than the presence of thought. Targets, budgets, initiative lists and dashboards are machinery for executing a kernel. They are useful once one exists and they cannot stand in for it."
  ],
  practical: {
    label: "Example: testing a strategy document",
    lead: "Take any document called a strategy and try to extract its three parts, using only the author's own words.",
    bullets: [
      "What does this claim is actually going on, stated as a problem?",
      "What overall approach follows from that claim, and what does it rule out?",
      "Which specific actions commit resources, and who is accountable for each?",
      "If a part is missing, which one, and can the author supply it on request?",
      "Could the whole document be restated in one paragraph without losing anything?"
    ]
  },
  application:
    "Ask a chief executive to state the kernel without notes. Most produce growth targets and a list of initiatives, which tells you the diagnosis was never made and the initiatives are therefore uncoordinated by construction. The useful follow-up is what the company has decided not to do. A team that can name the excluded options has genuinely chosen. A team that cannot is running a budget under a strategic title.",
  models: ["strategy-kernel", "decision-quality", "inversion", "second-order"],
  connections: [
    { to: "gsbs-diagnosis", type: "extends" },
    { to: "gsbs-coherence", type: "reinforces" },
    { to: "pcs-generic-strategies", type: "related" },
    { to: "s7p-power", type: "related" },
    { to: "halo-strategy-as-bets", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-diagnosis", num: 2, book_id: "gsbs", category: "strategy",
  title: "Diagnosis First",
  thesis: "Naming the problem is the step almost everyone skips, and it decides everything chosen afterwards.",
  reading_time: 3,
  explanation: [
    "A diagnosis replaces the full complexity of a situation with a simplified account of what makes it hard. It is the same operation a doctor performs: the patient arrives with a list of symptoms and leaves with a name, and the name determines the treatment. In business the symptoms are falling margins, slowing growth, rising churn. The diagnosis says which of those is the disease and which are consequences.",
    "Because the diagnosis sets the treatment, changing it changes everything downstream. Falling sales diagnosed as a pricing problem produces discounts and a cost programme. The same numbers diagnosed as a distribution problem produce a different sales structure. Diagnosed as a segment problem, they produce a decision to abandon customers. Three defensible readings of one set of facts, and the choice between them is made before any of the analysis that follows.",
    "It gets skipped for two reasons. A diagnosis is the only part of a strategy that can be shown to be wrong, so stating one is a risk that a list of goals never carries. And planning processes almost always begin with a target handed down from above, which sends everyone straight to the question of how to hit it."
  ],
  practical: {
    label: "Example: writing the diagnosis",
    lead: "Before choosing anything, write one paragraph on what is actually happening and what specifically makes it hard.",
    bullets: [
      "What is the critical obstacle here, stated in a single sentence?",
      "What are two other diagnoses a competent person could reach from these facts?",
      "What would each of those imply that mine does not?",
      "What evidence would show that my diagnosis is the wrong one?",
      "Did this plan start from a diagnosis, or from a target set elsewhere?"
    ]
  },
  application:
    "Get the diagnosis in writing early, then keep it. Weak management teams describe their situation in terms of what they want rather than what is blocking them, and that failure is visible in a sentence. Where your own reading of the business differs from theirs, you have found the argument that will define the next two years, and it is far cheaper to have it before the capital goes in than after.",
  models: ["strategy-kernel", "constraint", "wysiati", "inversion"],
  connections: [
    { to: "gsbs-the-kernel", type: "extends" },
    { to: "gsbs-chain-link", type: "related" },
    { to: "tfs-wysiati", type: "reinforces" },
    { to: "halo-single-explanations", type: "related" },
    { to: "otps-strategic-dissonance", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-bad-strategy", num: 3, book_id: "gsbs", category: "strategy",
  title: "The Signatures of Bad Strategy",
  thesis: "Bad strategy is not an absence of strategy but a recognisable set of substitutes for it.",
  reading_time: 3,
  explanation: [
    "The first signature is fluff. A statement of the obvious is inflated with abstraction until it sounds like insight, so serving customers well becomes a customer-centric intermediation capability. The test is mechanical: strip the specialised vocabulary, restate the sentence in ordinary words, and see whether any claim survives. Fluff usually appears where a group needed to publish something and had not resolved the disagreement underneath.",
    "The second is failure to face the challenge. A document that never states an obstacle cannot be evaluated, because there is nothing for the proposed actions to be right or wrong about. The third is mistaking goals for strategy. A list of desired outcomes, however precise the percentages, contains no account of how the outcomes are to be produced, and precision in the target is often mistaken for rigour in the plan.",
    "The fourth is bad strategic objectives: objectives that are the list of problems rewritten as aspirations, or a collection of everything each part of the organisation asked for. Both are what a consensus process produces when nobody has the authority or the appetite to choose. That is the common origin of all four. Bad strategy is rarely a thinking error. It is usually the residue of an argument that was avoided."
  ],
  practical: {
    label: "Example: screening for the four signatures",
    lead: "Read a strategy document once for each signature, and note where it fails rather than arguing with the content.",
    bullets: [
      "Restated in plain words, does any sentence here make a real claim?",
      "Is an obstacle named anywhere, or only outcomes and aspirations?",
      "Are these goals, or is there an account of how they get met?",
      "Are the objectives the problem list rewritten with better adjectives?",
      "Which unresolved argument does this document exist to paper over?"
    ]
  },
  application:
    "Board packs are where these four accumulate. Reading a year of them in sequence shows whether the same aspirations reappear with new dates attached, which is the reliable signature of an unmade choice. Fluff in particular tends to increase when a business is deteriorating and management has not yet said so. The vocabulary gets grander at exactly the point the underlying claims are getting thinner.",
  models: ["strategy-kernel", "incentives", "social-proof", "decision-quality"],
  connections: [
    { to: "gsbs-the-kernel", type: "contrasts" },
    { to: "gsbs-coherence", type: "reinforces" },
    { to: "pcs-stuck-in-the-middle", type: "related" },
    { to: "halo-single-explanations", type: "related" },
    { to: "tib-motivated-reasoning", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-coherence", num: 4, book_id: "gsbs", category: "strategy",
  title: "Coherence, Not a List",
  thesis: "Actions must support one another rather than merely coexist, and that mutual support is scarce.",
  reading_time: 3,
  explanation: [
    "A list of priorities distributes resources across whatever the organisation currently cares about. A strategy concentrates them, and the test of concentration is whether each action makes the others work better. Coherence in this sense is a property of the set, not of the items, so it cannot be assessed by reviewing initiatives one at a time, which is exactly how initiatives are normally reviewed.",
    "Incoherence is therefore invisible where people look for it. Every item on the list has a business case and a sponsor and clears its own hurdle. The contradictions live between items: the brand promise that requires service the cost programme has removed, the sales incentive that rewards volume while the retention target requires selectivity. Nothing in the approval process for any single item would ever surface either pair.",
    "Coherence stays scarce because producing it means refusing good ideas, and organisations are built to accumulate them. Each function proposes what is locally sensible, and the sum is a plan in which the parts quietly cancel. Only someone looking at the whole set, with the standing to remove things from it, can create the property."
  ],
  practical: {
    label: "Example: checking the set",
    lead: "Put the current initiative list on one page and examine the relationships between items rather than the items.",
    bullets: [
      "Which of these actions makes another one more effective, and how?",
      "Which pair of items pulls in opposite directions if both succeed?",
      "What would we have to stop doing for the most important item to work?",
      "How many of these could be removed with no effect on the others?",
      "Who last looked at this list as a whole rather than line by line?"
    ]
  },
  application:
    "Coherence is easiest to test on incentives and pricing, because both are written down and both are set locally. Where the compensation plan pays for a behaviour the stated strategy needs less of, the stated strategy is not operating. This is also the most common finding in a portfolio company that is executing hard and going nowhere, and it is usually cheaper to fix than anything on the initiative list.",
  models: ["strategy-kernel", "generic-strategy", "constraint", "opportunity-cost"],
  connections: [
    { to: "gsbs-the-kernel", type: "reinforces" },
    { to: "gsbs-chain-link", type: "extends" },
    { to: "pcs-stuck-in-the-middle", type: "reinforces" },
    { to: "pcs-generic-strategies", type: "related" },
    { to: "selectivity", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-proximate-objectives", num: 5, book_id: "gsbs", category: "leadership",
  title: "Proximate Objectives",
  thesis: "Set targets close enough to be achievable, because ambition becomes work only when it is feasible.",
  reading_time: 2,
  explanation: [
    "An objective is proximate when it sits close enough to current capability that people can see how it might be reached. Rumelt's example is the moon landing, which was proximate in 1961 because the physics was settled and what remained was engineering. The same announcement in 1930 would have been a wish. Proximity is a statement about the distance between the target and what the organisation already knows how to do.",
    "The function of a proximate objective is to absorb ambiguity. A senior team is paid to take an unclear situation and hand the organisation a solvable problem, and the target is where that conversion happens. Become the market leader resolves nothing and passes the whole difficulty downward, where it will be resolved differently by each group that receives it.",
    "Distant objectives also destroy the information value of effort. When the goal is years away and vaguely specified, no quarter of work can be shown to have moved anything, so there is no way to distinguish a team making progress from a team that is busy. That ambiguity protects everyone involved, which is part of why remote targets survive as long as they do."
  ],
  practical: {
    label: "Example: setting the next objective",
    lead: "Convert the ambition into the nearest target whose achievement would be unambiguous and would genuinely matter.",
    bullets: [
      "What is the nearest thing we could achieve that would change our position?",
      "Do the people doing the work know roughly how it would be done?",
      "How would we know within a quarter whether it had been achieved?",
      "What ambiguity does this target resolve for the teams below?",
      "Is this a target we can hit, or a restatement of what we want?"
    ]
  },
  application:
    "Founders under funding pressure set objectives at the distance investors reward rather than the distance the company can reach, and the gap shows up as a plan with no identifiable next step. The productive intervention is to ask what would have to be true in six months, then to fund that. It also improves your own reading of the business, because a proximate objective produces evidence either way.",
  models: ["strategy-kernel", "constraint", "critical-mass", "validated-learning"],
  connections: [
    { to: "gsbs-the-kernel", type: "related" },
    { to: "gsbs-leverage", type: "reinforces" },
    { to: "zto-small-market", type: "reinforces" },
    { to: "tfs-planning-fallacy", type: "contrasts" },
    { to: "critical-mass", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-chain-link", num: 6, book_id: "gsbs", category: "strategy",
  title: "Chain-Link Systems",
  thesis: "Where quality is set by the weakest link, improving any other part changes nothing at all.",
  reading_time: 3,
  explanation: [
    "Some systems have the property that performance is limited by their weakest component rather than by the average of their components. An airline where booking, boarding, baggage and cabin crew all have to work for the journey to be acceptable is one. A car built with excellent engineering, ordinary materials and poor assembly is another. The output is capped by whichever part is worst, and the cap does not move when the others improve.",
    "The management consequence is unwelcome, because incremental improvement is what organisations are set up to reward. Effort spent away from the binding link is genuinely wasted, and it still produces good functional reports. This is also why turnarounds in such businesses are slow. Every link has to be lifted before any of the lift appears in the result, which means a long period of visible cost and no visible improvement, and that period is where most attempts are abandoned.",
    "The same property makes these systems difficult to copy. A competitor must fix all the links to obtain any of the benefit, and partial imitation returns nothing, so excellence survives even when it is fully visible from the outside. Advantage of this kind is often mistaken for culture, because there is no single feature to point at."
  ],
  practical: {
    label: "Example: finding the binding link",
    lead: "Establish whether the system is chain-linked before deciding where the next increment of effort goes.",
    bullets: [
      "Does one weak component cap the whole output, or do the parts average out?",
      "Which link is binding now, and how do we know it is that one?",
      "What return did the last round of improvement elsewhere actually produce?",
      "How long would every link take to lift, and can we fund the flat period?",
      "Is our own advantage here a single feature or a chain a rival cannot part-copy?"
    ]
  },
  application:
    "Chain-link structure explains a specific pattern: a portfolio company where every function reports progress and the customer outcome does not move. It also changes how you read a slow turnaround, since flat results during a genuine multi-link repair look identical to flat results from drift. The distinguishing question is whether management can name the links in order and show which ones are now fixed.",
  models: ["constraint", "process-power", "feedback-loops", "durability"],
  connections: [
    { to: "gsbs-coherence", type: "extends" },
    { to: "gsbs-leverage", type: "contrasts" },
    { to: "s7p-process-power", type: "reinforces" },
    { to: "feedback-loops", type: "related" },
    { to: "lbbw-four-sources", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-leverage", num: 7, book_id: "gsbs", category: "strategy",
  title: "The Pivot Point",
  thesis: "Concentrate effort where a small push produces a disproportionate result, and accept doing less elsewhere.",
  reading_time: 2,
  explanation: [
    "Leverage in Rumelt's sense combines an anticipation, a pivot point and concentration. You form a view about something others have not yet priced or noticed, you find the place where the situation is already poised to move, and you put a disproportionate share of your resources there. The pivot point is what does the work. Without it, concentration is just a larger version of the same push.",
    "The arithmetic argument for concentration is that many effects have a threshold. Below it nothing happens, above it the state changes, and effort spread across ten fronts produces ten pushes that are each under the threshold. A company that funds every front at a level that cannot succeed has spent the whole budget and bought nothing, while reporting activity on all ten.",
    "The uncomfortable part is that a pivot point is a judgement about where the world is out of balance, and judgements are wrong. Rumelt's answer is that the realistic alternative to a concentrated bet is not safety, it is guaranteed dilution, which fails quietly and is therefore never recorded as a failure. A wrong bet is at least visible and can be examined afterwards."
  ],
  practical: {
    label: "Example: finding the pivot",
    lead: "Identify what you believe that others do not, then locate the point where acting on it would move most.",
    bullets: [
      "What do I think is true here that the market has not acted on?",
      "Where is this situation already poised, so that a small push tips it?",
      "What share of resources is going to that point, honestly measured?",
      "Which fronts are funded below the level at which they could work?",
      "If the anticipation is wrong, what does the concentrated bet cost us?"
    ]
  },
  application:
    "Ask where the next dollar goes and why that place. A company with a genuine pivot point can answer in one sentence and will show an uneven allocation. A company without one spreads spending in proportion to the size of each department, which is the allocation pattern of an organisation with no view. Deliberate underfunding of something reasonable is usually the best evidence that a choice was actually made.",
  models: ["constraint", "critical-mass", "second-order", "opportunity-cost"],
  connections: [
    { to: "gsbs-proximate-objectives", type: "reinforces" },
    { to: "gsbs-using-advantage", type: "extends" },
    { to: "critical-mass", type: "reinforces" },
    { to: "zto-small-market", type: "related" },
    { to: "tmit-patient-opportunism", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-using-advantage", num: 8, book_id: "gsbs", category: "strategy",
  title: "Using Advantage",
  thesis: "An advantage is worth nothing where it is not applied, so the question is where to apply it.",
  reading_time: 2,
  explanation: [
    "Advantage exists only relative to a particular arena. A capability that is superior in one setting is ordinary in the next, which means holding an advantage and profiting from one are separate problems. The second is a question about placement: where is this strength scarce, and where is it worth more than it is worth in the place we currently use it?",
    "Two directions are available. Deepen the advantage where it already operates, by widening the benefit to the customer or raising the barrier against imitation. Or extend it into adjacent arenas where the same strength is rare. Both require naming the strength precisely enough to know where it travels, which is the step most diversification omits, and the reason most of it destroys value.",
    "This is why an honest statement of advantage is uncomfortable. It always names something narrow, and narrow things are unflattering to describe. Broad claims about talent, culture or brand are more agreeable and cannot guide any decision about where to compete, which is the only thing the concept is for. The narrower the statement, the more decisions it actually settles."
  ],
  practical: {
    label: "Example: placing the strength",
    lead: "State the advantage narrowly enough to be testable, then ask where else that exact thing is scarce.",
    bullets: [
      "What specifically can we do that competitors in this arena cannot?",
      "Is that a benefit customers pay for, and what stops it being copied?",
      "Where else would this same strength be scarce rather than ordinary?",
      "Can we widen the benefit or raise the barrier where we already are?",
      "Which of our current arenas does this advantage not actually apply to?"
    ]
  },
  application:
    "Expansion plans are the natural place to apply this. A portfolio company entering a new segment should be able to say which existing strength is worth more there than it is at home, and be specific. Where the answer is that the market is large or growing, the plan rests on the market rather than on the company, and the returns will go to whoever in that market does hold an advantage.",
  models: ["strategy-kernel", "circle-of-competence", "barriers-to-entry", "cornered-resource"],
  connections: [
    { to: "gsbs-leverage", type: "extends" },
    { to: "gsbs-growth-by-acquisition", type: "contrasts" },
    { to: "s7p-benefit-and-barrier", type: "reinforces" },
    { to: "circle-of-competence", type: "reinforces" },
    { to: "lbbw-four-sources", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-growth-by-acquisition", num: 9, book_id: "gsbs", category: "strategy",
  title: "Bought Growth",
  thesis: "Buying revenue increases size without creating value, and the two look alike in a report.",
  reading_time: 2,
  explanation: [
    "The pattern is consistent. A company under pressure to grow starts acquiring, revenue rises, the story improves, and no new source of advantage has been created anywhere. The seller was paid a price that already reflected the value of what was sold, so what the buyer's owners received was scale. Scale is not worthless, but it has to be shown to do something, and the arithmetic of that showing is usually skipped.",
    "Healthy growth is a consequence rather than an objective. It arrives because demand exists for something the company can do better than others, and it is the visible sign of an advantage being used. Once growth itself becomes the target, acquisition is the fastest available route to it, and the question about advantage is precisely what the target has displaced.",
    "Real exceptions exist and they are narrow. An acquisition can repair a specific weak link, buy access to a resource that cannot be built, or apply an existing advantage to a larger base. Each of those is a claim about advantage, which can be examined in advance. A claim about scale alone cannot be, and that is the tell."
  ],
  practical: {
    label: "Example: reading an acquisition case",
    lead: "Ask what the acquisition creates that did not exist before, separately from what it adds to the reported totals.",
    bullets: [
      "What advantage exists after this deal that neither party had before?",
      "Has the seller been paid for the value we are claiming to create?",
      "Are the synergies a real change in cost or capability, or arithmetic?",
      "Would we still want this business at this price if growth were not the target?",
      "Is management paid on size, and by how much does this deal move that?"
    ]
  },
  application:
    "A roll-up is the direct case. The test is whether the acquired units are worth more inside the group than outside it, and whether that difference is large enough to cover the multiple paid and the integration cost. Watch the organic line separately, because it is what the acquisitions are usually concealing. Compensation tied to revenue or headcount will generate this behaviour regardless of what the strategy document says.",
  models: ["capital-allocation", "strategy-kernel", "return-on-capital", "incentives"],
  connections: [
    { to: "gsbs-using-advantage", type: "extends" },
    { to: "gsbs-bad-strategy", type: "reinforces" },
    { to: "tos-disciplined-acquisitions", type: "contrasts" },
    { to: "fr-growth-that-destroys", type: "reinforces" },
    { to: "mck-growth-and-returns", type: "related" }
  ],
  quote: null
},

{
  id: "gsbs-inertia-entropy", num: 10, book_id: "gsbs", category: "leadership",
  title: "Inertia and Entropy",
  thesis: "Organisations drift towards disorder, so a strategy must be re-imposed rather than set once.",
  reading_time: 3,
  explanation: [
    "Entropy is the first half. Without continuous maintenance, product lines proliferate, pricing loses its logic, segments blur and the organisation becomes less ordered than it was. This is the default state rather than a management failure, which reframes a large part of senior work as restoring order that has quietly decayed. It is unglamorous and it is why competent leaders spend so much time on things they have already decided.",
    "Inertia is the second half and it runs the other way. Routines, culture and existing customer relationships resist change even after the situation that produced them has gone, and the resistance is strongest where the company has been most successful. Rumelt separates inertia of routine, of culture and of proxy, where the company is slow because its customers are slow. The three call for different interventions, and treating culture as a routine problem is the standard mistake.",
    "For anyone competing with an incumbent, its inertia is the most forecastable thing about it. Predictable slowness in a well-resourced rival is a resource, because it tells you how long a position will remain uncontested and therefore how much can be built inside that window. Estimating that window badly is the ordinary way a better product loses to a slower company."
  ],
  practical: {
    label: "Example: auditing the drift",
    lead: "Look for the order that has decayed since the strategy was set, then decide what to restore and what to accept.",
    bullets: [
      "What has accumulated in the last three years that nobody chose?",
      "Which products, prices or segments no longer fit the stated approach?",
      "Where is our slowness a routine, a cultural commitment, or our customers?",
      "What would we cut today if we were setting this up from scratch?",
      "How predictable is our main competitor, and what does that window allow?"
    ]
  },
  application:
    "Between board meetings a company drifts, and the drift is legible in the product list, the discount file and the organisation chart. Reviewing those three annually finds decisions nobody made. On the other side, when assessing a challenger to an established incumbent, the incumbent's inertia is often more knowable than the challenger's execution, and it is the part of the thesis that can actually be researched.",
  models: ["strategy-kernel", "feedback-loops", "inflection-point", "incentives"],
  connections: [
    { to: "gsbs-the-kernel", type: "reinforces" },
    { to: "gsbs-chain-link", type: "related" },
    { to: "otps-inflection-point", type: "reinforces" },
    { to: "lbbw-moat-erosion", type: "related" },
    { to: "s7p-counter-positioning", type: "related" }
  ],
  quote: null
}

);
