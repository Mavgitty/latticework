/* Only the Paranoid Survive — Andrew S. Grove — 7 ideas */
window.DB.ideas.push(

{
  id: "otps-inflection-point", num: 1, book_id: "otps", category: "strategy",
  title: "Strategic Inflection Points",
  thesis: "When the fundamentals change enough, the old strategy stops working and cannot be repaired.",
  reading_time: 3,
  explanation: [
    "A strategic inflection point is a change in the underlying conditions of a business large enough that the way the business used to work no longer produces the same result. It is not a difficult quarter, an aggressive competitor or a cyclical downturn, all of which the existing approach is designed to absorb. It is a change in what the business is, and Grove's own case was Intel abandoning memories, the product the company had been built around.",
    "The practical difficulty is that the shape only becomes obvious afterwards. At the time there is a curve that has bent slightly and might be noise, and the data that would settle the question arrives after the window for a cheap response has closed. Acting early is expensive if you are wrong. Acting late is terminal if you are right. There is no version of the problem in which the evidence and the decision arrive together.",
    "So the response is necessarily a bet placed on incomplete information, which relocates the work. What matters is the quality of the argument beforehand, the honesty of the people in the room, and the willingness to commit to a conclusion that is not yet provable and will be criticised by anyone reading the same data differently."
  ],
  practical: {
    label: "Example: naming the change",
    lead: "Separate the change that alters how the business works from the pressures the current approach already handles.",
    bullets: [
      "Which of our fundamentals has changed, rather than merely worsened?",
      "Would the old approach still work if we executed it perfectly?",
      "What evidence would confirm this, and when will it actually arrive?",
      "What does acting a year early cost, against acting a year late?",
      "Who in the company already believes this and has said so?"
    ]
  },
  application:
    "Most portfolio problems are execution problems and a small number are inflections, and the two are handled entirely differently. The distinguishing question is whether flawless execution of the current plan would restore the numbers. Where it would not, replacing the operating team solves nothing and buys another year of decline. Management that can state which fundamental has moved is thinking about the right problem, whether or not you agree with the answer.",
  models: ["inflection-point", "disruption", "probability", "second-order"],
  connections: [
    { to: "otps-ten-x-force", type: "extends" },
    { to: "otps-signal-vs-noise", type: "related" },
    { to: "lbbw-moat-erosion", type: "reinforces" },
    { to: "tbs-forecasting-limits", type: "related" },
    { to: "gsbs-inertia-entropy", type: "reinforces" }
  ],
  quote: null
},

{
  id: "otps-ten-x-force", num: 2, book_id: "otps", category: "strategy",
  title: "A 10X Force",
  thesis: "One competitive force can grow so large that the balance of the whole business changes.",
  reading_time: 2,
  explanation: [
    "Grove takes the structural forces acting on an industry, adds complementors to the standard list, and introduces magnitude. Any one of competitors, suppliers, customers, potential entrants, substitutes or complementors can change by something like an order of magnitude, and when one does the rules of the industry change with it rather than being stretched. The precise multiple is not the point. It marks a change of kind rather than a change of degree.",
    "This matters because a business is a configuration tuned to a particular balance of those forces. The cost structure, the sales organisation, the hiring profile and the capital intensity all assume it. A tenfold change in one force therefore does not degrade performance proportionally. It makes an internally consistent configuration wrong, which is why the symptoms appear everywhere at once and each department can plausibly blame another.",
    "Identifying which force moved determines what the response has to be. A tenfold change in substitutes mistaken for a competitor problem produces price cuts and a sales push against a structural shift, which is the most common and most expensive misreading available. The force that moved also tells you whether the answer is a new product, a new channel, a new cost base or an exit."
  ],
  practical: {
    label: "Example: locating the force",
    lead: "Work through the six forces and ask which one has changed by something closer to tenfold than to a percentage.",
    bullets: [
      "Which force has moved by an order of magnitude rather than a margin?",
      "What in our configuration was built assuming the old level of that force?",
      "Is this a competitor, a substitute, or a change in who complements us?",
      "Has our key complementor's business or interest changed direction?",
      "Does the response required follow from the force, or from habit?"
    ]
  },
  application:
    "Structural questions are worth asking at every board meeting, because the answers change slowly and then suddenly. The most instructive one is about complementors, since dependence on another company's platform, distribution or pricing rarely appears anywhere in the accounts. A business whose economics rest on someone else's decision is exposed to a force it does not monitor, and management usually describes that dependence as a partnership.",
  models: ["five-forces", "inflection-point", "disruption", "second-order"],
  connections: [
    { to: "otps-inflection-point", type: "extends" },
    { to: "otps-signal-vs-noise", type: "related" },
    { to: "pcs-five-forces", type: "extends" },
    { to: "zto-ten-x", type: "related" },
    { to: "lbbw-industry-structure", type: "related" }
  ],
  quote: null
},

{
  id: "otps-signal-vs-noise", num: 3, book_id: "otps", category: "strategy",
  title: "Signal or Noise",
  thesis: "Every real inflection first appears as ordinary noise, so the tests have to be deliberate.",
  reading_time: 3,
  explanation: [
    "Threats arrive continuously and nearly all of them amount to nothing. A management team that treats each one as structural exhausts the organisation and loses credibility for the occasion when it matters. A team that dismisses them all will eventually dismiss the one that ends the business. Nothing in the moment separates the two categories, because a genuine inflection and a passing scare present identically in the early data.",
    "Grove's tests are about the character of the change rather than its size. Is your most important competitor about to change, or has a new one appeared that you did not previously respect? Is your key complementor losing its position? Have the people whose judgement you have relied on started to sound uncertain about their own area? Would this change matter if a competitor acted on it before you did?",
    "The remaining discipline is procedural. The claim has to be stated in a form that could be shown to be false, and it has to be argued with people who hold the opposite view and are safe to say so. Grove's decision took months of contested analysis with credible data on both sides, and the length of that argument was a feature of it."
  ],
  practical: {
    label: "Example: running the tests",
    lead: "Apply a fixed set of questions to the threat in front of you, rather than judging its size on impression.",
    bullets: [
      "Is our most important competitor changing, or has a new one appeared?",
      "Is a key complementor losing position or changing its interests?",
      "Do the people who know this area best sound less certain than usual?",
      "Would this matter more if a competitor moved on it before us?",
      "Have we stated the claim in a form that evidence could refute?"
    ]
  },
  application:
    "This is what a good risk conversation with management looks like, and its absence is itself informative. Ask what would have to happen for the business to stop working, and whether anything in the last year moved in that direction. Teams with a real answer usually name a complementor or a technology rather than a competitor. Teams with no answer have not held the argument internally, which is the condition Grove treats as dangerous.",
  models: ["inflection-point", "probability", "base-rates", "narrative-fallacy"],
  connections: [
    { to: "otps-inflection-point", type: "extends" },
    { to: "otps-strategic-dissonance", type: "reinforces" },
    { to: "fbr-noise-and-signal", type: "reinforces" },
    { to: "tib-not-sure", type: "related" },
    { to: "tfs-illusion-validity", type: "related" }
  ],
  quote: null
},

{
  id: "otps-strategic-dissonance", num: 4, book_id: "otps", category: "strategy",
  title: "Strategic Dissonance",
  thesis: "The gap between the stated strategy and what people actually do is the earliest warning.",
  reading_time: 3,
  explanation: [
    "Dissonance is the condition where a company's declared strategy and its own behaviour have separated. Intel described itself as a memory company while its production planners were steadily allocating scarce capacity to microprocessors, because that was where the margin was. Nobody decided to change strategy. A long series of locally rational allocations did it, and the official position simply stopped describing the company.",
    "This makes dissonance a better indicator than opinion. Operating decisions respond to conditions as they are now, because the person making them is judged on the result. The stated strategy responds to conditions as they were when it was written and is defended by people whose standing depends on it. The distance between the two is therefore a measurement of how far the world has moved, taken from behaviour rather than from views.",
    "Reading it means looking at particular things: arguments that recur every quarter and never resolve, resources quietly redirected without an approval, exceptions to the plan granted so often they have become the plan, and the salespeople selling something other than the priority product. Senior management is normally last to see this, because the reporting system was designed to show progress against the stated strategy."
  ],
  practical: {
    label: "Example: measuring the gap",
    lead: "Compare what the strategy document says the company is doing with where the resources and the exceptions actually go.",
    bullets: [
      "Where are engineering hours and capital actually going this quarter?",
      "Which argument comes back every quarter and never gets resolved?",
      "How many exceptions to the plan have been granted, and for what?",
      "What are the salespeople leading with, and is it the priority product?",
      "If an outsider read only our decisions, what strategy would they infer?"
    ]
  },
  application:
    "This is one of the few strategic signals available from ordinary reporting. Compare the stated priorities with headcount by function, the roadmap actually shipped, and the deals discounted hardest. Persistent divergence means the operating layer has already concluded something the board has not, and they are usually right, since they are closer to the customer. The useful step is to find out what they know rather than to enforce the plan.",
  models: ["inflection-point", "incentives", "strategy-kernel", "feedback-loops"],
  connections: [
    { to: "otps-inflection-point", type: "extends" },
    { to: "otps-news-from-the-edge", type: "reinforces" },
    { to: "gsbs-the-kernel", type: "contrasts" },
    { to: "cinc-hidden-problems", type: "reinforces" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "otps-news-from-the-edge", num: 5, book_id: "otps", category: "leadership",
  title: "News from the Edge",
  thesis: "People at the periphery meet the change first, and structure decides whether anyone hears them.",
  reading_time: 3,
  explanation: [
    "The information arrives at the edges. A salesperson hears an objection that did not exist last year. An engineer sees a technology that was a curiosity become adequate. Support staff watch customers use the product for something it was not built for. All of this exists inside the company well before it exists in any report, because senior management reads summaries and summarising works by removing the anomalies.",
    "It fails to travel for reasons that are structural rather than personal. The messenger is junior and the message contradicts a plan that senior people have publicly committed to, so the safe move is to soften it. Middle managers aggregate upward and round off. Bad news competes with a target the same manager is accountable for, and it usually loses. By the time anything reaches the top it has become a footnote or a complaint about quotas.",
    "What makes it travel is arrangement rather than virtue. Direct unstructured contact between senior people and the edge, tolerance for the version that has not been polished, and forums where rank is suspended for the duration of the argument. Grove's point is that the same executive in a badly arranged company hears nothing, and will believe the organisation is calm."
  ],
  practical: {
    label: "Example: opening the channel",
    lead: "Build a route from the edge of the organisation to the top that does not pass through anyone's target.",
    bullets: [
      "When did I last hear something unfiltered from a customer-facing person?",
      "Who told me the last piece of genuinely bad news, and what happened to them?",
      "Which layer between me and the customer is doing the summarising?",
      "What are our salespeople hearing that has not reached any report?",
      "Is there a forum where a junior person can contradict me safely?"
    ]
  },
  application:
    "Board reporting is filtered by definition, so build a second channel. Reference calls with customers, conversations with engineers and sales staff outside the management chain, and attention to what departing employees say in exit interviews. The information is usually present nine to twelve months before it appears in the numbers. The measure of a management team here is whether they welcome that access or manage it.",
  models: ["inflection-point", "incentives", "wysiati", "social-proof"],
  connections: [
    { to: "otps-strategic-dissonance", type: "reinforces" },
    { to: "otps-signal-vs-noise", type: "reinforces" },
    { to: "cinc-candour-not-honesty", type: "reinforces" },
    { to: "cinc-hidden-problems", type: "related" },
    { to: "ewb-candid-reporting", type: "related" }
  ],
  quote: null
},

{
  id: "otps-valley-of-death", num: 6, book_id: "otps", category: "strategy",
  title: "The Valley of Death",
  thesis: "Between the old business and the new one lies a passage where half-measures are worst.",
  reading_time: 3,
  explanation: [
    "The crossing has a characteristic shape. The old business is declining and still funds everything, including the transition. The new one is small, unproven and staffed by people taken from the thing that currently works. Revenue, margin and morale all get worse before they get better, and everyone involved can see that. This is the passage, and the only useful thing to know in advance is that it exists and has to be traversed rather than avoided.",
    "Half-measures are the most dangerous response because they damage both ends. A partial commitment gives the new business too little to reach viability while removing enough from the old business to accelerate its decline, so the company pays twice and arrives nowhere. Ambiguity has the same effect on people. When nobody can say what the company is becoming, the capable ones hedge, and hedging inside a transition is what makes it long.",
    "The leadership demand is specific and unpleasant. Resources must be moved away from the people who earned them, and someone senior has to say clearly that the old business is the past. That sentence is expensive to say and far more expensive to leave unsaid, because every month of vagueness is a month in which nobody can act on the new direction."
  ],
  practical: {
    label: "Example: committing to the crossing",
    lead: "Decide what the company is becoming, then move enough resource that both statements are credible.",
    bullets: [
      "Have we said plainly what the new business is, and what the old one now is?",
      "Is the new effort funded at a level that could actually succeed?",
      "Who are the best people working on, and does that match the statement?",
      "How bad do the numbers get before they turn, and can we fund that?",
      "What are we still doing only because it was once central?"
    ]
  },
  application:
    "A company in this passage will show declining headline numbers whether it is doing this well or badly, so the headline numbers cannot be the read. Look instead at the new line's own trajectory, at where the strongest people sit, and at whether funding is sufficient rather than symbolic. This is also the moment where a portfolio company's capital need is largest and its reported performance is at its least persuasive.",
  models: ["inflection-point", "constraint", "capital-allocation", "opportunity-cost"],
  connections: [
    { to: "otps-inflection-point", type: "extends" },
    { to: "otps-let-chaos-reign", type: "reinforces" },
    { to: "gsbs-leverage", type: "reinforces" },
    { to: "tos-capital-allocation", type: "related" },
    { to: "cinc-fear", type: "related" }
  ],
  quote: null
},

{
  id: "otps-let-chaos-reign", num: 7, book_id: "otps", category: "leadership",
  title: "Let Chaos Reign",
  thesis: "While the new shape is unknown, run experiments, then close them down on purpose.",
  reading_time: 2,
  explanation: [
    "The prescription has two phases and the sequence matters. Before the new direction is clear, tight control is actively harmful, because control enforces a plan built for conditions that have gone. Deliberate looseness lets several attempts run in parallel and produces information that no amount of analysis would have generated, since the questions at that stage are empirical rather than analytical.",
    "Reining it in is the harder half and the one that gets neglected. Once one direction is visibly better, the remaining experiments become a tax: resource split several ways, nothing funded at the level that would let it win, and internal politics about which effort is the real one. Ending them is a decision with a right moment, and the moment is usually earlier than it feels.",
    "What makes the sequence work is deciding in advance what evidence would settle the question. Without that, chaos continues by default, because nobody volunteers to close their own experiment and no criterion exists to force it. The company then reaches the far side of the inflection holding four half-built businesses and the resources for none of them."
  ],
  practical: {
    label: "Example: opening and closing the experiments",
    lead: "Set the exploration loose on purpose, and name in advance the evidence that will end it.",
    bullets: [
      "Is the shape of this business still unknown, or do we now know it?",
      "What would we have to observe to conclude one direction has won?",
      "Are these efforts genuinely independent, or competing for the same people?",
      "Which experiment is still running because nobody wants to close it?",
      "Once we choose, is anything funded at less than a serious level?"
    ]
  },
  application:
    "Judge the phase before judging the discipline. Several parallel bets at a company that has not yet found its position is the correct behaviour, and the same picture two years later is an unmade decision. The question to put to management is what evidence would resolve it, and by when. A team that can answer is exploring. A team that cannot has turned optionality into a way of avoiding a choice.",
  models: ["inflection-point", "validated-learning", "optionality", "decision-quality"],
  connections: [
    { to: "otps-valley-of-death", type: "extends" },
    { to: "otps-signal-vs-noise", type: "related" },
    { to: "cinc-ugly-babies", type: "related" },
    { to: "tbs-barbell", type: "reinforces" },
    { to: "zto-definite-optimism", type: "contrasts" }
  ],
  quote: null
}

);
