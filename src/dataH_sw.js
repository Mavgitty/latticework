/* Seeking Wisdom — Peter Bevelin — 7 ideas */
window.DB.ideas.push(

{
  id: "sw-body-and-judgment", num: 1, book_id: "sw", category: "decision-making",
  title: "Judgement Has a Body",
  thesis: "Fatigue, stress hormones, hunger and pain reshape decisions before any named bias gets involved.",
  reading_time: 3,
  explanation: [
    "Bevelin's addition to the standard catalogue of biases is that misjudgement is not purely a matter of cognitive software. It is affected by chemistry and physiology. Under acute stress, cortisol and adrenaline narrow attention onto the immediate threat and shorten the time horizon, which helps you escape a predator and hurts you when you are trying to read a term sheet calmly.",
    "Sleep deprivation degrades working memory and impulse control, which are exactly the functions needed to catch an error before it is committed to. Hunger, pain and illness recalibrate risk tolerance and patience in similar ways, usually below the level of awareness. The person feels they are reasoning the same as always. The machine underneath is running on different settings.",
    "The upshot is that the state a decision was made in matters as much as the logic used to make it. A conclusion reached at two in the morning, on four hours of sleep, against someone else's deadline, deserves a second look at a different hour before it is trusted, regardless of how sound it seemed at the time."
  ],
  practical: {
    label: "Example: checking your own state",
    lead: "Before trusting a big decision, check the state you made it in, not only its logic.",
    bullets: [
      "Have I slept enough tonight to trust my own judgement?",
      "Is this deadline one I actually face, or one someone else set for their convenience?",
      "Would I reach the same conclusion after a proper night's sleep?",
      "Is hunger, illness or pain narrowing my patience right now?",
      "Who reviews this once the adrenaline of the moment has settled?"
    ]
  },
  application:
    "In venture and portfolio work the highest-stakes decisions cluster in exactly the conditions that degrade judgement: all-night diligence pushes before a closing deadline, a crisis call with a struggling portfolio company at midnight, a term sheet signed on the last day of an exclusivity window. The useful rule is procedural rather than a matter of willpower. Treat sleep, deadline pressure and physical state as inputs worth checking before any irreversible signature, and build in a fresh-eyes review the next morning for anything decided under those conditions the night before.",
  models: ["dual-process", "wysiati", "decision-quality", "narrow-framing"],
  connections: [
    { to: "tib-tilt", type: "reinforces" },
    { to: "sw-action-bias", type: "related" },
    { to: "sw-lollapalooza-effect", type: "related" },
    { to: "temperament", type: "reinforces" },
    { to: "tfs-two-systems", type: "related" }
  ],
  quote: null
},

{
  id: "sw-deprival-superreaction", num: 2, book_id: "sw", category: "decision-making",
  title: "Deprival Superreaction",
  thesis: "The reaction to losing something, or to the threat of losing it, runs far past the value of the thing itself and recruits other biases to justify the excess.",
  reading_time: 3,
  explanation: [
    "Loss aversion says a loss is felt more sharply than an equivalent gain. Bevelin's distinct claim goes further. Past a certain intensity, deprival does not merely outweigh gain, it produces a disproportionate overreaction that overrides ordinary calculation. A person will destroy value rather than accept a loss, escalate a small dispute rather than concede a minor point, or keep a losing position specifically because closing it makes the loss real.",
    "The superreaction rarely operates alone. It recruits whatever else is available to justify itself, most often commitment and consistency and a sunk-cost story built after the fact rather than before it. The reasons arrive to support a reaction that has already happened, not to produce it.",
    "This explains behaviour that plain loss aversion under-predicts: fights over amounts too small to be worth the legal fees, refusal to sell at a fair price once half a position is already gone, negotiations that blow up over a clause worth less than the time spent arguing it. The reaction is to the deprival itself, not to the object in dispute."
  ],
  practical: {
    label: "Example: separating the object from the reaction",
    lead: "Notice when a dispute has stopped being about the thing and started being about the loss of it.",
    bullets: [
      "Is the size of this reaction proportionate to what is actually at stake?",
      "Am I defending a position because giving it up would feel like a loss, not because it is worth defending?",
      "What reasons did I have before the deprival, versus the ones I have found since?",
      "Would I have fought this hard for the same amount if I had never had it?",
      "Is conceding early cheaper than winning this argument?"
    ]
  },
  application:
    "In cap table and term negotiations, a counterparty asked to give up even a minor pre-agreed right will often fight far harder than the right is worth, because the fight has become about the deprival rather than the number. Recognising the syndrome, in a counterparty or in yourself, means separating the object in dispute from the size of the reaction to losing it. Sometimes the practical response is to concede the point early and cheaply, before the superreaction sets in, rather than negotiate it on its merits once it has.",
  models: ["loss-aversion", "endowment", "commitment-consistency", "narrow-framing"],
  connections: [
    { to: "loss-aversion", type: "extends" },
    { to: "tfs-endowment", type: "reinforces" },
    { to: "sw-lollapalooza-effect", type: "related" },
    { to: "tib-tilt", type: "related" },
    { to: "commitment-and-consistency", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sw-lollapalooza-effect", num: 3, book_id: "sw", category: "decision-making",
  title: "When Biases Compound",
  thesis: "Several distortions acting on one decision at the same time do not add together, they multiply, and the resulting error is larger than any one of them explains.",
  reading_time: 3,
  explanation: [
    "Catalogued individually, biases look survivable, each shifts a judgement a little. Bevelin's point, built out from scattered examples in Munger's own material, is that real failures are rarely caused by one tendency in isolation. They happen when several line up in the same direction at once and reinforce each other, producing a joint effect far larger than the sum of the parts.",
    "A bubble, a fraud, or a bad group decision usually shows this pattern on close inspection. An investor overpaying is not merely anchored to a number. They are also following what everyone around them is doing, defending an earlier public commitment to the position, and being paid on this quarter's mark rather than next year's outcome. Any one of those alone would produce a modest error. Together they produce a large one.",
    "The practical implication is that the size of an error is a poor guide to how many mechanisms produced it. The right response to a surprisingly large mistake is to look for several compounding causes rather than settle for the first explanation that fits."
  ],
  practical: {
    label: "Example: counting the mechanisms",
    lead: "When an error looks unusually large, look for several biases reinforcing each other rather than one big cause.",
    bullets: [
      "Which distortions are pointing in the same direction on this decision, not just the most obvious one?",
      "Is social pressure, an earlier commitment and an incentive all lined up on the same side here?",
      "Would this error be plausible if only one of these mechanisms were operating?",
      "What would remove the reinforcement, rather than address a single cause?",
      "Who in the room is unaffected by any of these pressures, and have I asked them?"
    ]
  },
  application:
    "In diligence, the worst blow-ups almost always show four or five reinforcing distortions operating together rather than one. When reviewing a deal that went wrong, or stress-testing one still live, the useful discipline is to list every plausible bias in play rather than stop at the first one found, because the ones stacking in the same direction are where the real damage sits, and guarding against only one of them leaves the rest free to do the work unopposed.",
  models: ["authority-bias", "social-proof", "confirmation-bias", "incentives"],
  connections: [
    { to: "antidotes", type: "extends" },
    { to: "sw-deprival-superreaction", type: "related" },
    { to: "sw-body-and-judgment", type: "related" },
    { to: "social-proof", type: "reinforces" },
    { to: "confirmation-bias", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sw-misjudgment-checklist", num: 4, book_id: "sw", category: "learning",
  title: "A Checklist of Misjudgement",
  thesis: "Turn the whole catalogue of ways judgement fails into one written list, and check every significant decision against it before it is final.",
  reading_time: 2,
  explanation: [
    "Bevelin's practical contribution is to convert the catalogue of psychological and physiological failure modes into a single operating document, gone through deliberately before a decision closes rather than a set of concepts read once and half-remembered under pressure.",
    "The list works because it substitutes a mechanical check for the very faculty that is compromised in the moment. A person in the grip of confirmation bias or a deprival superreaction cannot reliably notice it happening. The same person can reliably answer a fixed question from a list and notice when the answer is uncomfortable.",
    "To do this job the list has to be specific enough to bite, named tendencies and named questions rather than vague reminders to be rational, and short enough to actually survive being used every time. It also has to be consulted before commitment. A checklist read afterwards is a post-mortem, not a safeguard."
  ],
  practical: {
    label: "Example: building the list",
    lead: "Write the checklist once, keep it short, and use it before signing rather than after.",
    bullets: [
      "What are the five or six failure modes that have cost me the most in the past?",
      "Have I written a specific question for each one, not a vague reminder?",
      "Am I going through this before commitment, or only reviewing it afterwards?",
      "Which question on this list am I most tempted to skip today?",
      "Does anyone else check my answers, or do I mark my own work?"
    ]
  },
  application:
    "The venture equivalent is a short, standing checklist attached to every investment memo and gone through before signature: whose incentives point which way on this deal, what would make me wrong, am I anchored on the first term sheet I saw, is this decision driven by a deadline someone else set. Used mechanically at the point of commitment rather than during the excitement of the pitch, it catches exactly the errors that reasoning alone reliably misses under pressure.",
  models: ["checklist", "confirmation-bias", "decision-quality", "incentives"],
  connections: [
    { to: "tic-written-checklist", type: "extends" },
    { to: "tfs-premortem", type: "related" },
    { to: "sw-lollapalooza-effect", type: "reinforces" },
    { to: "sw-body-and-judgment", type: "related" },
    { to: "antidotes", type: "related" }
  ],
  quote: null
},

{
  id: "sw-denial", num: 5, book_id: "sw", category: "decision-making",
  title: "Denial",
  thesis: "Under enough threat the mind does not just favour comfortable evidence, it blocks the unbearable fact altogether.",
  reading_time: 3,
  explanation: [
    "Confirmation bias is the selective weighting of evidence already admitted into view. Denial is a step further back: an outright refusal to admit a fact that is too threatening to hold in mind at all. A founder who does not update the forecast though the pipeline has visibly collapsed, a doctor who reassures a family past the point the diagnosis is obvious, an investor who stops opening statements from a fund in trouble, are not weighing evidence badly. They are not letting it in.",
    "Bevelin ties denial to the same physiological threat response that narrows attention under acute pressure. The chemistry that helps you focus on an immediate danger also suppresses processing of information that would confirm a threat is real, because the emotional cost of admitting it now feels more immediate than the practical cost of denying it.",
    "Denial is hardest to see from inside, because its whole function is keeping the fact out of awareness. The behavioural signature, avoiding a report, delaying a call, changing the subject when it comes up, is usually visible to someone else well before it is visible to the person doing it."
  ],
  practical: {
    label: "Example: spotting it from outside",
    lead: "Watch for avoidance behaviour rather than wait for someone to admit the problem.",
    bullets: [
      "Has anyone stopped asking for a number they used to track closely?",
      "Is a scheduled review being quietly delayed or reframed?",
      "Are miss explanations changing the definition rather than the plan?",
      "Would I be comfortable stating this fact out loud to the board today?",
      "Who is positioned to say the unwelcome thing before it becomes obvious to everyone?"
    ]
  },
  application:
    "In portfolio management the tell is behavioural rather than analytical: a board member who quietly stops asking for the metric that used to matter most, a founder who reframes a miss as a definitional change, a partner who avoids a scheduled catch-up with a struggling company. The fix is procedural rather than persuasive. Pre-commit to reviewing specific numbers on a fixed schedule regardless of mood, because by the time someone chooses to look properly, denial has often already chosen not to.",
  models: ["confirmation-bias", "wysiati", "loss-aversion", "decision-quality"],
  connections: [
    { to: "confirmation-bias", type: "contrasts" },
    { to: "tib-motivated-reasoning", type: "related" },
    { to: "sw-deprival-superreaction", type: "reinforces" },
    { to: "sw-body-and-judgment", type: "reinforces" },
    { to: "fbr-hindsight-habit", type: "related" }
  ],
  quote: null
},

{
  id: "sw-borrowed-catastrophes", num: 6, book_id: "sw", category: "learning",
  title: "Borrowed Catastrophes",
  thesis: "The cheapest error to avoid is one that has already happened, in full documented detail, to somebody else in a completely different field.",
  reading_time: 2,
  explanation: [
    "Bevelin builds his method by assembling case histories from well outside investing: air crashes, misdiagnoses, military intelligence failures, engineering collapses, alongside business ones. Reading across domains rather than staying inside one matters because the underlying mechanism, a warning ignored, an authority deferred to past its competence, an incentive quietly misaligned, repeats with only the surface details changed, and a pattern is far easier to see the second or third time it turns up wearing a different industry's clothes.",
    "A single field's failures teach you that field's failures. A library built across aviation, medicine, the military and markets teaches the small number of mechanisms that produce most failures, because the effective sample size for any one mechanism grows once you stop filtering by industry.",
    "The discipline is collecting the case, not merely reading it once: naming the mechanism, filing it against the kind of decision it would have prevented, so it is retrievable at the moment a live decision starts to resemble it, rather than admired once and forgotten."
  ],
  practical: {
    label: "Example: filing the case",
    lead: "Collect specific failures by mechanism, from any field, and check new decisions against the file.",
    bullets: [
      "What is the named mechanism behind this failure, not just its industry label?",
      "Have I filed it somewhere I will actually find it again?",
      "Does this live decision rhyme with a case already in the file?",
      "Am I only reading failures from my own industry?",
      "What decision, specifically, would this case have prevented?"
    ]
  },
  application:
    "Practically this means keeping a standing file of specific, named failures, a fund blow-up, a covenant that did not hold, a diligence process that missed a known pattern, indexed by mechanism rather than by company or sector, and consulting it before a decision that rhymes with one of them. A young analyst's disadvantage is a short personal history of mistakes. Borrowing several hundred years of other people's documented case histories, from any field that has written its failures down, is the fastest way to close that gap.",
  models: ["base-rates", "silent-evidence", "checklist", "second-order"],
  connections: [
    { to: "base-rates", type: "reinforces" },
    { to: "learning-from-mistakes", type: "extends" },
    { to: "fbr-survivorship-in-data", type: "related" },
    { to: "sw-misjudgment-checklist", type: "reinforces" },
    { to: "tbs-silent-evidence", type: "related" }
  ],
  quote: null
},

{
  id: "sw-action-bias", num: 7, book_id: "sw", category: "decision-making",
  title: "The Urge to Do Something",
  thesis: "Under uncertainty or after a loss, acting feels safer than waiting, even when waiting is the better decision.",
  reading_time: 3,
  explanation: [
    "Bevelin identifies a specific, physiologically grounded pull towards visible action once something has gone wrong or looks uncertain. Doing something, even the wrong thing, relieves the discomfort of an unresolved problem. Doing nothing, the objectively correct move in a good number of cases, leaves the discomfort in place and looks, to an observer, like failing to respond.",
    "The bias is asymmetric in a specific way. An active mistake and a passive one that produce an identical loss are not judged the same, by others or by the decision-maker. The active mistake feels far worse to have caused, so there is pressure to act defensively even where inaction has the better expected outcome, simply to be seen, and to feel, as having tried.",
    "It compounds with time pressure and stress physiology, since both push towards resolving discomfort quickly rather than sitting with an open decision, which is usually exactly when the case for waiting is strongest."
  ],
  practical: {
    label: "Example: naming the itch to act",
    lead: "Before a reactive decision, ask whether acting is better than waiting, stated on its own terms.",
    bullets: [
      "Am I proposing this because it is the best move, or because doing nothing feels unbearable?",
      "What is the actual case for waiting, argued as strongly as the case for acting?",
      "Would I judge an identical outcome differently depending on whether I acted or waited?",
      "Is this decision driven by wanting to be seen to respond?",
      "What happens if I deliberately do nothing for a set period, and review then?"
    ]
  },
  application:
    "A board reacting to one soft quarter by replacing a management team, or a fund making a defensive follow-on to be seen doing something about a struggling position rather than triaging it properly, both often trade a real cost now for relief from the discomfort of an open problem. The corrective question before any reactive decision is whether the case for acting now beats the case for a deliberately unresolved wait, stated on its own merits, rather than reached for as relief from having to sit with the uncertainty.",
  models: ["loss-aversion", "decision-quality", "illusion-of-control", "resulting"],
  connections: [
    { to: "sw-body-and-judgment", type: "reinforces" },
    { to: "tib-resulting", type: "related" },
    { to: "tfs-premortem", type: "contrasts" },
    { to: "patience", type: "contrasts" },
    { to: "sw-lollapalooza-effect", type: "related" }
  ],
  quote: null
}

);
