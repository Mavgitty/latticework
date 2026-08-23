/* Influence — Robert B. Cialdini — 8 ideas */
window.DB.ideas.push(

{
  id: "inf-reciprocity", num: 1, book_id: "inf", category: "people",
  title: "The Reciprocity Rule",
  thesis: "An unasked-for favour creates a felt debt that people will overpay to clear.",
  reading_time: 3,
  explanation: [
    "Cialdini's argument is that human groups reward those who give first and punish those who take without returning, so the impulse to repay sits close to automatic and is largely uncalibrated. A stranger who hands you something small feels entitled to ask for something considerably larger in return, and most people grant it rather than sit with the discomfort of being in debt.",
    "The rule works because the size of the return concession is set by the receiver's discomfort rather than by the giver's actual cost. A free sample, an unsolicited compliment, or a small concession early in a negotiation all trigger the same mechanism: give a little, gain leverage on the much larger ask that follows.",
    "The tactic is strongest when it looks unconditional. The moment a gift is recognised as a technique the obligation collapses, which is why skilled operators frame the giving as personal rather than transactional and let time pass before the ask arrives."
  ],
  practical: {
    label: "Example: naming the debt",
    lead: "Notice the favour before deciding whether the request that follows earns its own merits.",
    bullets: [
      "What was given to me, and did I ask for it?",
      "Am I about to agree to something I would not agree to on its own terms?",
      "Is the giver framing this as personal generosity or as a technique?",
      "Would I still say yes if the earlier favour had not happened?",
      "Can I thank the gesture and decline the request separately?"
    ]
  },
  application:
    "In venture and deal work the pattern shows up as unsolicited introductions, early access, or a founder doing an investor a favour before a raise opens. None of it is disqualifying, but each one is worth naming before it shapes the terms you are willing to accept. The clean test is whether you would still say yes to the ask if the favour had never happened.",
  models: ["reciprocity", "incentives", "loss-aversion", "halo-effect"],
  connections: [
    { to: "reciprocation", type: "reinforces" },
    { to: "inf-commitment-consistency", type: "related" },
    { to: "inf-liking", type: "related" },
    { to: "vd-negotiation-posture", type: "related" },
    { to: "inf-click-whirr", type: "reinforces" }
  ],
  quote: null
},

{
  id: "inf-commitment-consistency", num: 2, book_id: "inf", category: "people",
  title: "Commitment and Consistency",
  thesis: "A small, freely chosen first step makes people defend far larger positions built on it later.",
  reading_time: 3,
  explanation: [
    "Once someone states a position, even a trivial one, they come under pressure to behave in ways that match it, because inconsistency reads as a character flaw both to others and to the person holding the view. The mechanism does not require the position to be correct, only for it to have been stated.",
    "Foot-in-the-door tactics exploit this directly: a small request that is easy to agree to becomes the reference point against which every later request is judged reasonable. The commitment is strongest when it is written down, made publicly, and looks freely chosen rather than coerced, because those three features are what make it feel like it says something true about the person holding it.",
    "The trap compounds because people update their self-image to match the commitment before they update their assessment of whether the underlying decision was sound, so later evidence against the original choice gets explained away rather than acted on."
  ],
  practical: {
    label: "Example: checking for escalation",
    lead: "Separate what you decided earlier from what the evidence says now.",
    bullets: [
      "What was my first small commitment here, and when did I make it?",
      "Am I defending this position because it is right or because I already said it?",
      "Has anything material changed since that first commitment?",
      "Who benefits from my staying consistent with an earlier statement?",
      "What would it cost me, honestly, to reverse this in public?"
    ]
  },
  application:
    "The clearest venture version is escalating commitment to a deal: a term sheet drafted, a partner meeting scheduled, an internal memo already written, each of which quietly raises the cost of walking away regardless of what diligence turns up next. The discipline is to keep the decision reversible on the facts for as long as possible and to treat a sunk process as exactly that, sunk.",
  models: ["commitment-consistency", "confirmation-bias", "endowment", "decision-quality"],
  connections: [
    { to: "commitment-and-consistency", type: "reinforces" },
    { to: "tib-motivated-reasoning", type: "related" },
    { to: "tfs-endowment", type: "related" },
    { to: "tib-ulysses-contract", type: "contrasts" },
    { to: "inf-click-whirr", type: "reinforces" }
  ],
  quote: null
},

{
  id: "inf-social-proof", num: 3, book_id: "inf", category: "people",
  title: "Social Proof",
  thesis: "People treat what others are doing as evidence of what is correct, most strongly when they are uncertain themselves.",
  reading_time: 3,
  explanation: [
    "Cialdini's claim is narrower than \"people follow the crowd\": social proof operates specifically as a shortcut for correctness under uncertainty, standing in for judgement the person does not have time or expertise to form directly. Laugh tracks, bestseller lists and crowded restaurants all work the same way, letting the behaviour of others substitute for an assessment of quality.",
    "The effect is strongest between people who see themselves as similar, and it multiplies rather than adds. Each additional person observed to hold a view makes the next observer's adoption of it more likely, which is why the order in which opinions become visible matters more than the merit of any individual opinion inside it.",
    "The failure mode is pluralistic ignorance: everyone privately doubts something, everyone assumes the calm exterior of everyone else means they alone are missing the reasoning, and a room full of private disagreement produces confident public consensus with no one having actually checked."
  ],
  practical: {
    label: "Example: separating crowd from evidence",
    lead: "Write your own assessment before learning who else has committed.",
    bullets: [
      "What is my independent view, formed before I saw who else is in?",
      "Do these other people actually know something I do not, or are they watching me the way I am watching them?",
      "Is this crowded because of the merits or because it has become visibly crowded?",
      "Would I still want in if the same terms were offered with no other names attached?",
      "Am I mistaking consensus for diligence?"
    ]
  },
  application:
    "In venture this shows up as a round filling because other credible names are in it, or a sector getting hot because several funds moved in the same quarter. None of that is information about the company unless you can trace it to something the crowd actually knows that you do not. The useful discipline is writing your own view down before checking who else is in, and noticing when a deal's appeal is really the syndicate's.",
  models: ["social-proof", "critical-mass", "wysiati", "narrative-fallacy"],
  connections: [
    { to: "social-proof", type: "reinforces" },
    { to: "tii-mr-market", type: "contrasts" },
    { to: "independent-thinking", type: "contrasts" },
    { to: "availability-bias", type: "related" },
    { to: "inf-click-whirr", type: "reinforces" }
  ],
  quote: {
    text: "The principle of social proof says so: The greater the number of people who find any idea correct, the more the idea will be correct.",
    attribution: "Robert B. Cialdini, Influence: The Psychology of Persuasion",
    why: "Cialdini states the rule as the mind actually applies it rather than as a criticism, which is what makes it useful: correctness and popularity are being treated as interchangeable, and naming that substitution is most of the defence against it."
  }
},

{
  id: "inf-liking", num: 4, book_id: "inf", category: "people",
  title: "Liking",
  thesis: "People say yes more readily to those they like, and liking itself can be manufactured quickly.",
  reading_time: 2,
  explanation: [
    "Cialdini lists the specific levers that reliably produce liking on short acquaintance: physical attractiveness, similarity real or invented, praise, familiarity through repeated contact, and association with things already regarded well. None of them bear on whether the request that follows is sound, yet all of them measurably raise the odds of a yes.",
    "Similarity is the cheapest lever to fake and the hardest to discount once noticed, because shared background, shared taste or a shared enemy reads as evidence of shared judgement even though it is evidence of nothing beyond overlap. Praise works almost regardless of accuracy, and familiarity alone, mere repeated exposure with no content at all, raises warmth toward a person or a product.",
    "The commercial version is association: pairing a person or a pitch with something already liked transfers warmth across without requiring the underlying claim to be examined at all."
  ],
  practical: {
    label: "Example: isolating the warmth",
    lead: "Score the business and the person separately before letting either colour the other.",
    bullets: [
      "Do I like this person because of the business, or is the business benefiting from the person?",
      "What similarity between us am I treating as a signal of judgement?",
      "Would this pitch land the same if delivered by someone I found neutral?",
      "Has praise or flattery shifted how carefully I am reading the numbers?",
      "What did I actually verify, separate from how the meeting felt?"
    ]
  },
  application:
    "Founders are pitched and hired for likeability constantly, and one who is warm, similar to the partner across the table, and generous with praise gets a materially easier hearing than the numbers alone would produce. The corrective is not to distrust warmth but to isolate it: write the assessment of the business as though the meeting had been conducted by someone else, and check whether the enthusiasm survives that swap.",
  models: ["liking", "halo-effect", "branding", "incentives"],
  connections: [
    { to: "liking-loving", type: "reinforces" },
    { to: "halo-the-halo-effect", type: "related" },
    { to: "mvcg-choosing-the-individual", type: "related" },
    { to: "inf-reciprocity", type: "related" },
    { to: "inf-unity", type: "extends" }
  ],
  quote: null
},

{
  id: "inf-authority-bias", num: 5, book_id: "inf", category: "decision-making",
  title: "Deference to Authority",
  thesis: "People comply with authority far past the point where the authority is right, and often from its symbols alone.",
  reading_time: 3,
  explanation: [
    "Cialdini's reading of Milgram is that the finding was never really about cruelty. It was about how readily ordinary people hand their judgement to a legitimate-seeming authority and stop checking the instructions against their own sense of what is reasonable.",
    "What triggers the deference is often the symbol of authority rather than its substance: a title, a uniform, a fluent manner, an expensive suit, a well-produced deck. These signals are cheap to produce and expensive to verify in the moment, which is exactly why they work on people who would otherwise think of themselves as careful.",
    "The distortion is worst when the authority is genuine but has strayed outside its actual competence, because the deference earned in one domain gets extended, unchecked, into another where it was never earned at all."
  ],
  practical: {
    label: "Example: checking the substance",
    lead: "Treat every credential as a claim to verify, not a conclusion to accept.",
    bullets: [
      "Is this authority speaking inside their actual domain of competence?",
      "What would I ask if this same answer had come from someone junior?",
      "Have I verified the claim, or only the confidence with which it was delivered?",
      "What symbol of authority is doing work here that the substance has not earned?",
      "Who in the room is positioned to disagree with this person, and are they doing so?"
    ]
  },
  application:
    "A recognised name leading a round, a credentialed executive on the founding team, or a confident answer delivered with total fluency all function as authority signals in diligence, and each substitutes for verification unless you deliberately stop it doing so. The practical fix is procedural: ask the same hard question of the impressive answer that you would ask of an unimpressive one, and notice which questions you stopped asking once someone credible was in the room.",
  models: ["authority-bias", "dual-process", "checklist", "decision-quality"],
  connections: [
    { to: "authority-misinfluence", type: "reinforces" },
    { to: "cinc-braintrust", type: "contrasts" },
    { to: "tic-written-checklist", type: "reinforces" },
    { to: "tfs-two-systems", type: "related" },
    { to: "inf-click-whirr", type: "reinforces" }
  ],
  quote: null
},

{
  id: "inf-scarcity", num: 6, book_id: "inf", category: "people",
  title: "Scarcity",
  thesis: "What appears rare or running out is judged more valuable, regardless of whether it has become any more useful.",
  reading_time: 2,
  explanation: [
    "Cialdini's account of scarcity is that people use availability as a shortcut for value because scarce things have historically tended to be worth having, which means the shortcut is usually right on average and badly wrong at the extremes where it is engineered.",
    "Deadlines, limited quantities and exclusive access all work by converting a decision from is this worth having into will I lose the chance to have it, and the second question produces an urgency the first one never would. Freedom that is newly restricted is felt more intensely than freedom that was never offered, which is why removing an option briefly, then reinstating it with conditions, raises its perceived value more than pricing it high from the start.",
    "The distortion is loudest exactly where information is thinnest, because a claim no one can check in the moment, an allocation, a closing date, a last unit, is easy to engineer, while a claim that can be verified is not."
  ],
  practical: {
    label: "Example: pricing without the clock",
    lead: "Value the opportunity on a timeline with no deadline attached, then reintroduce the deadline.",
    bullets: [
      "What would I think this is worth if it were available for another month?",
      "Is the scarcity here real, a hard constraint, or constructed, a tactic?",
      "Am I responding to the chance of missing out or to the merits?",
      "What information, if any, does the deadline actually convey?",
      "Would I regret missing this in a year, or only in the moment?"
    ]
  },
  application:
    "A round closing early, an allocation offered on a short fuse, or a follow-on slot rationed to create demand are scarcity signals rather than valuation evidence, and venture markets manufacture them constantly in hot periods. The check is to price the opportunity as though it would still be available next week, then decide whether the deadline is adding real information or only removing your time to think.",
  models: ["scarcity", "loss-aversion", "anchoring", "opportunity-cost"],
  connections: [
    { to: "loss-aversion", type: "reinforces" },
    { to: "contrast-effects", type: "related" },
    { to: "tfs-reference-points", type: "related" },
    { to: "tmit-pendulum", type: "related" },
    { to: "inf-click-whirr", type: "reinforces" }
  ],
  quote: null
},

{
  id: "inf-unity", num: 7, book_id: "inf", category: "people",
  title: "Unity",
  thesis: "Shared identity moves people further than shared interests, because acting for the group reads as acting for yourself.",
  reading_time: 3,
  explanation: [
    "Cialdini added unity to the original six principles to separate it from ordinary liking. Liking says people similar to you are easier to like; unity says some categories, family, home town, a team, a shared cause, are experienced as extensions of the self, so a request framed as coming from inside that identity is not really weighed against outside interests at all.",
    "The strongest version of the tactic is not claiming similarity but manufacturing joint action: working together on something, even briefly, produces a sense of we that a shared trait alone does not, which is why co-creation and shared struggle build faster loyalty than shared demographics.",
    "Because unity operates below the level of a stated argument, it survives contact with disconfirming evidence better than any of the other principles: information that would sink a stranger's claim gets waved through when it arrives from someone inside the identity."
  ],
  practical: {
    label: "Example: testing the tribe",
    lead: "Check whether the identity, not the deal, is doing the persuading.",
    bullets: [
      "What shared identity, if any, connects me to this person or firm?",
      "Would this opportunity clear my bar if it came from someone outside that group?",
      "Am I discounting a red flag because it came from inside the tribe?",
      "Is the sense of we here based on genuine shared work or a manufactured affiliation?",
      "Who benefits from my treating this group's interests as my own?"
    ]
  },
  application:
    "Founder alumni networks and syndicate culture in venture run on unity rather than on the merits of any specific deal, and the pull is genuine rather than cynical, which is precisely why it is hard to discount. The useful habit is to ask whether a deal would clear your bar arriving from a stranger with no shared affiliation, because that is the version of the analysis unity quietly edits out.",
  models: ["unity", "critical-mass", "branding", "halo-effect"],
  connections: [
    { to: "inf-liking", type: "extends" },
    { to: "inf-social-proof", type: "reinforces" },
    { to: "liking-loving", type: "related" },
    { to: "halo-the-halo-effect", type: "related" },
    { to: "mvcg-choosing-the-individual", type: "related" }
  ],
  quote: null
},

{
  id: "inf-click-whirr", num: 8, book_id: "inf", category: "decision-making",
  title: "Click, Whirr",
  thesis: "Each principle is a fixed response triggered by a single cue, so the defence is noticing the cue, not resisting the pressure.",
  reading_time: 3,
  explanation: [
    "Cialdini's organising idea is that all the principles work the same way: a narrow trigger, a favour, a title, a crowd, a deadline, sets off a standard sequence of behaviour that runs to completion largely without conscious review, the way a fixed action pattern runs in an animal once the releasing stimulus appears. The behaviour is not stupid. It is an efficient shortcut that is right often enough to persist, and wrong exactly when someone has learned to produce the trigger deliberately.",
    "This reframes the defence. Trying to resist the felt pressure of an in-progress reciprocity debt or an authority's confidence is fighting the response after it has already fired, and it mostly fails. The workable point of intervention is earlier: noticing that a specific trigger is present before the automatic sequence starts, which converts an emotional contest into a factual check.",
    "The single tell Cialdini gives for a trigger being used deliberately rather than occurring naturally is disproportion: a gift, deadline or credential that is unusually large, urgent or exact relative to the situation is far more likely to have been manufactured than one that arrived incidentally."
  ],
  practical: {
    label: "Example: running the trigger check",
    lead: "Before committing, name every influence trigger present and ask whether the decision survives without it.",
    bullets: [
      "What favour, commitment, deadline, authority, crowd or identity is present in this decision?",
      "Does the trigger look proportionate to the situation, or unusually large and exact?",
      "Would I make the same call with each of these set aside in turn?",
      "Am I reacting to a cue or evaluating the substance?",
      "Who benefits if I act quickly, before I can check?"
    ]
  },
  application:
    "The operational version for a diligence process is a short, explicit check run at the point a decision is about to be made: name any favour received, any commitment already made public, any deadline attached, any authority or crowd invoked, and any identity appealed to, then ask whether the decision survives with each one set aside. None of the principles are disqualifying on their own; a decision that only survives because of one of them is.",
  models: ["dual-process", "wysiati", "checklist", "decision-quality"],
  connections: [
    { to: "antidotes", type: "reinforces" },
    { to: "tii-chief-problem", type: "reinforces" },
    { to: "tic-written-checklist", type: "reinforces" },
    { to: "tfs-two-systems", type: "related" },
    { to: "inf-authority-bias", type: "reinforces" },
    { to: "inf-social-proof", type: "reinforces" }
  ],
  quote: null
}

);
