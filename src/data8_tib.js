/* Thinking in Bets — Annie Duke — 12 ideas */
window.DB.ideas.push(

{
  id: "tib-bets", num: 1, book_id: "tib", category: "decision-making",
  title: "Every Decision Is a Bet",
  thesis: "You are always betting on an uncertain future with incomplete information, whether you frame it that way or not.",
  reading_time: 3,
  explanation: [
    "Duke's starting move is to treat every decision as a bet against the alternative futures you did not choose. The framing is not metaphorical: you are committing resources on the basis of beliefs about outcomes you cannot verify, which is what a bet is.",
    "Accepting the frame changes the questions. Instead of asking whether a decision is right, you ask what odds you are getting, what the range of outcomes is, and what fraction of your resources belongs on it. Certainty stops being the goal because it was never available.",
    "It also fixes how decisions get evaluated. A bet at good odds that loses was still a good bet, and a bet at bad odds that wins was still a bad one. Without the frame, only the second kind gets repeated."
  ],
  practical: {
    label: "Example: stating the bet",
    lead: "Write down what you are betting on, at what odds, and what would settle it.",
    bullets: [
      "What exactly am I betting will happen?",
      "How confident am I, as a number rather than a feeling?",
      "What are the odds being offered, in price or in terms?",
      "What is the appropriate size given that confidence?",
      "What observable event would settle whether I was right?"
    ]
  },
  application:
    "Recording the bet at entry, with a probability and a settlement condition, is what makes a later review honest. It also exposes the cases where nobody can state what would settle the question, which usually means the thesis is not yet a thesis.",
  models: ["probability", "decision-quality", "base-rates", "resulting"],
  connections: [
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tib-resulting", type: "extends" },
    { to: "tib-not-sure", type: "extends" },
    { to: "tii-investment-vs-speculation", type: "related" },
    { to: "tfs-narrow-framing", type: "related" }
  ],
  quote: {
    text: "Thinking in bets starts with recognizing that there are exactly two things that determine how our lives turn out: the quality of our decisions and luck.",
    attribution: "Annie Duke, Thinking in Bets",
    why: "The value is in the word exactly. If only two factors operate and one is outside your control, then all available improvement sits in decision quality, and the effort spent explaining outcomes is spent in the wrong place."
  }
},

{
  id: "tib-resulting", num: 2, book_id: "tib", category: "decision-making",
  title: "Resulting",
  thesis: "Judging a decision by how it turned out is the most common and most expensive analytical error.",
  reading_time: 2,
  explanation: [
    "Resulting is Duke's term for working backwards from the outcome to a verdict on the decision. It is nearly automatic, because the outcome is a hard fact and the decision process is a memory, so the fact colonises the memory.",
    "The asymmetry is what does the damage. Bad outcomes get examined and often over-corrected; good outcomes get filed as confirmation and the process that produced them is never inspected. So the lucky win is the more dangerous case, because it gets repeated at increasing size.",
    "Breaking the habit requires a written record made before the outcome. Without it, you are asking your post-outcome self to reconstruct what your pre-outcome self believed, which it cannot do."
  ],
  practical: {
    label: "Example: reviewing without resulting",
    lead: "Review the process against what was knowable, not against what happened.",
    bullets: [
      "What did I believe at the time, and what was the written basis for it?",
      "Was the information that would have changed my mind available then?",
      "Which part of this outcome was the thesis and which was the environment?",
      "If the same situation arose, would the same decision be correct?",
      "Have I examined my wins as carefully as my losses?"
    ]
  },
  application:
    "This is the strongest argument for separating decision quality from returns in how analysts are assessed. A team graded purely on outcomes learns to take variance, because variance occasionally produces a result that gets remembered, and the process that produced it never gets questioned.",
  models: ["resulting", "decision-quality", "probability", "regression"],
  connections: [
    { to: "outcome-bias", type: "extends" },
    { to: "tib-luck-vs-skill", type: "extends" },
    { to: "tfs-illusion-validity", type: "related" },
    { to: "learning-from-mistakes", type: "reinforces" },
    { to: "tib-bets", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tib-luck-vs-skill", num: 3, book_id: "tib", category: "decision-making",
  title: "Sorting Luck From Skill",
  thesis: "Every outcome mixes decision quality and chance, and the mix is what you need to identify.",
  reading_time: 3,
  explanation: [
    "Duke's poker background supplies the useful discipline: after every hand, the question is which part of the result came from how it was played and which from the cards. Both are always present, and separating them is the only route to learning anything.",
    "The natural attribution is self-serving and consistent. Good outcomes get credited to skill, bad ones to luck, and the same pattern runs in reverse for other people. The result is a learning system that confirms whatever you already believed about yourself.",
    "Fields differ in how hard the separation is. In poker, feedback arrives in minutes. In investing it arrives over years, is confounded by the market, and often never arrives cleanly at all, which makes deliberate accounting essential rather than optional."
  ],
  practical: {
    label: "Example: the attribution audit",
    lead: "Split each outcome explicitly, and watch for the self-serving pattern.",
    bullets: [
      "What part of this result did I control, and what part happened to me?",
      "Would a competent person with the same information have decided the same way?",
      "Am I crediting my wins to skill and my losses to conditions?",
      "How much of the return came from the market rather than the thesis?",
      "What feedback would I need to answer this properly, and can I get it?"
    ]
  },
  application:
    "Attribution across a portfolio is the practical form: separating the contribution of market beta, sector timing and selection. It is uncomfortable because it usually shrinks the skill component, and useful for the same reason.",
  models: ["resulting", "regression", "survivorship", "decision-quality"],
  connections: [
    { to: "tib-resulting", type: "extends" },
    { to: "regression-to-the-mean", type: "reinforces" },
    { to: "outcome-bias", type: "reinforces" },
    { to: "tfs-outside-view", type: "related" },
    { to: "survivorship-bias", type: "related" }
  ],
  quote: null
},

{
  id: "tib-not-sure", num: 4, book_id: "tib", category: "decision-making",
  title: "I'm Not Sure",
  thesis: "Saying you are not sure is not weakness. It is the accurate description of nearly every situation.",
  reading_time: 2,
  explanation: [
    "Duke argues that the binary of right and wrong is the source of a great deal of poor thinking. Most claims are neither; they are more or less likely, and forcing them into a binary discards the information contained in the degree.",
    "Admitting uncertainty is socially penalised, particularly in professional settings where confidence reads as competence. The penalty is why people state positions more firmly than they hold them, and once stated firmly the position becomes something to defend.",
    "Expressing beliefs as probabilities solves several problems at once. It is more accurate, it makes updating cheap because moving from 60 to 40 is not a reversal, and it makes calibration measurable over time."
  ],
  practical
: {
    label: "Example: replacing right and wrong",
    lead: "Attach a number to the belief and treat updating as normal maintenance.",
    bullets: [
      "How confident am I in this, expressed as a percentage?",
      "What would move that number up or down, and by how much?",
      "Am I stating this more firmly than I hold it, and why?",
      "Can I disagree with someone by comparing numbers rather than positions?",
      "Over my last ten calls, were my 70% claims right about seven times?"
    ]
  },
  application:
    "In an investment committee, probabilities change the character of the discussion: two people at 40% and 70% have a tractable disagreement about specific evidence, where two people at yes and no have a contest. It also creates the record needed to know whether anyone in the room is calibrated.",
  models: ["probability", "decision-quality", "base-rates", "wysiati"],
  connections: [
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tib-wanna-bet", type: "extends" },
    { to: "tib-bets", type: "extends" },
    { to: "commitment-and-consistency", type: "contrasts" },
    { to: "tfs-wysiati", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tib-wanna-bet", num: 5, book_id: "tib", category: "decision-making",
  title: "Wanna Bet?",
  thesis: "Asking whether someone would bet on their claim converts loose talk into a real estimate.",
  reading_time: 2,
  explanation: [
    "The question works because it changes the cost of the statement. Asserting something is free; being willing to stake money on it is not. The moment a bet is on the table, people revisit the claim and usually revise it downward, in seconds.",
    "Duke's point is not that you should bet, but that the question forces an internal audit that would otherwise not happen: how do I know this, how confident am I really, what would I accept as settlement. The stake is a prompt rather than a transaction.",
    "It also improves disagreement. Two people who have both named a probability and a settlement condition are having a productive argument, because there is something in it that can be resolved."
  ],
  practical: {
    label: "Example: applying the test",
    lead: "Apply it to your own claims before applying it to anyone else's.",
    bullets: [
      "Would I stake real money on this at the odds I am implying?",
      "At what odds would I decline, and what does that reveal about my confidence?",
      "How would we know who was right, and by when?",
      "What do I actually know here versus what have I absorbed?",
      "If I would not bet on it, why am I asserting it?"
    ]
  },
  application:
    "A light version works well in diligence: asking a founder or a colleague what they would stake on a projection reliably produces a more honest number than asking for the forecast again. It is also a fast way to find out which parts of a plan the team privately doubts.",
  models: ["probability", "resulting", "decision-quality", "contrarian"],
  connections: [
    { to: "tib-not-sure", type: "extends" },
    { to: "zto-contrarian-question", type: "related" },
    { to: "tib-bets", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "tib-motivated-reasoning", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tib-motivated-reasoning", num: 6, book_id: "tib", category: "people",
  title: "Motivated Reasoning",
  thesis: "We process evidence in the service of the conclusion we want, and expertise makes us better at it.",
  reading_time: 2,
  explanation: [
    "The mind does not weigh evidence neutrally and then conclude. It arrives with a preference, then evaluates evidence for how well it serves that preference, accepting supportive facts quickly and subjecting inconvenient ones to careful scrutiny.",
    "Duke emphasises a finding that should be alarming to anyone who reasons for a living: greater expertise and intelligence can make motivated reasoning worse. A more capable mind builds a more persuasive case for the preferred conclusion, and is therefore harder to argue out of it.",
    "Because the mechanism is invisible from inside, the only reliable counter is external: people whose job is to disagree, structures that reward finding the flaw, and beliefs stated in advance so that movement is visible."
  ],
  practical: {
    label: "Example: catching yourself",
    lead: "Look for asymmetry in how you are treating evidence rather than for the bias itself.",
    bullets: [
      "Which conclusion do I want here, and what would I gain from it?",
      "Am I scrutinising the inconvenient evidence harder than the convenient evidence?",
      "Have I looked as hard for disconfirming data as for supporting data?",
      "Who benefits from my believing this, including me?",
      "Who has been asked to argue the other side, and were they listened to?"
    ]
  },
  application:
    "Deal enthusiasm is the strongest source of motivated reasoning in an investment process, and it builds as sunk cost accumulates. Assigning the bear case to someone with no ownership of the deal, early enough that the answer can still change the outcome, is the practical countermeasure.",
  models: ["confirmation-bias", "resulting", "incentives", "social-proof"],
  connections: [
    { to: "confirmation-bias", type: "extends" },
    { to: "tib-truthseeking-group", type: "reinforces" },
    { to: "incentives", type: "related" },
    { to: "commitment-and-consistency", type: "reinforces" },
    { to: "tfs-substitution", type: "related" }
  ],
  quote: null
},

{
  id: "tib-truthseeking-group", num: 7, book_id: "tib", category: "people",
  title: "The Truthseeking Group",
  thesis: "Good thinking is a group activity, but only in a group organised for accuracy rather than agreement.",
  reading_time: 3,
  explanation: [
    "Since you cannot reliably detect your own motivated reasoning, Duke's answer is to borrow other people's. A small group with an explicit charter to seek accuracy can catch errors that no individual can catch in themselves.",
    "The charter has to be explicit because the default settles into mutual confirmation. Groups reward agreement, and a group of people who like each other and share a position will amplify errors faster than any individual could. Diversity of view is the functional requirement, not a courtesy.",
    "Two practices matter most. Dissent has to be rewarded rather than tolerated, so that the person who spots the flaw gains standing rather than losing it. And information has to be presented without the conclusion attached, since telling the group what you concluded invites them to evaluate you rather than the evidence."
  ],
  practical
: {
    label: "Example: designing the group",
    lead: "Set the rules before the first hard case rather than during it.",
    bullets: [
      "Is the group's stated purpose accuracy, or support?",
      "Does anyone in it reliably hold a different prior to mine?",
      "Are facts presented before conclusions, so the group evaluates the evidence?",
      "Is there a named person whose role is to argue against the proposal?",
      "Does dissent get credited when it turns out to be right?"
    ]
  },
  application:
    "This is what separates a functioning investment committee from a ratification meeting. Written individual views submitted before discussion, an assigned devil's advocate with real time, and a record of who dissented are all cheap and all rare.",
  models: ["decision-quality", "social-proof", "authority-bias", "confirmation-bias"],
  connections: [
    { to: "tib-motivated-reasoning", type: "reinforces" },
    { to: "authority-misinfluence", type: "contrasts" },
    { to: "social-proof", type: "contrasts" },
    { to: "antidotes", type: "reinforces" },
    { to: "tfs-premortem", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tib-backcasting", num: 8, book_id: "tib", category: "decision-making",
  title: "Backcasting and Premortems",
  thesis: "Work backwards from both the good outcome and the disaster, and give each a probability.",
  reading_time: 2,
  explanation: [
    "Backcasting starts at a successful future and works back to now: given that this worked, what must have happened along the way? It produces a specific route rather than a general intention, and it exposes steps that were being assumed rather than planned.",
    "The premortem does the same from failure. Duke's contribution is insisting on both, and on attaching probabilities: not just what could go wrong but how likely each path is, so mitigation effort goes where the probability mass actually sits.",
    "Doing both also corrects the natural bias of each. Backcasting alone breeds optimism; premortems alone breed paralysis. Together they produce a realistic map with weights on it."
  ],
  practical: {
    label: "Example: both directions, with weights",
    lead: "Two lists, each with probabilities that sum to something honest.",
    bullets: [
      "Assume this succeeded: what were the three or four things that had to happen?",
      "Assume it failed: what were the three or four ways it failed?",
      "What probability do I put on each path, and do they add up sensibly?",
      "Which failure paths are detectable early, and what is the signal?",
      "What am I doing differently as a result of this exercise?"
    ]
  },
  application:
    "Applied at investment, this produces the outcome bands and the monitoring plan in one exercise. The failure paths that are detectable early become the metrics reported to the board, which turns the analysis into something that runs after the decision rather than stopping at it.",
  models: ["inversion", "planning-fallacy", "probability", "decision-quality"],
  connections: [
    { to: "tfs-premortem", type: "reinforces" },
    { to: "inversion", type: "extends" },
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tfs-planning-fallacy", type: "related" },
    { to: "tib-decision-trees", type: "extends" }
  ],
  quote: null
},

{
  id: "tib-tilt", num: 9, book_id: "tib", category: "people",
  title: "Tilt",
  thesis: "After a bad outcome you make worse decisions, and you will not notice at the time.",
  reading_time: 2,
  explanation: [
    "Tilt is the poker term for the emotional state following a bad beat, in which decision quality degrades sharply. The dangerous property is that it does not announce itself: the decisions feel normal, sometimes especially clear, while being measurably worse.",
    "It runs in both directions. A run of wins produces its own version, in which risk appetite expands and process gets skipped because the recent evidence says you cannot lose. Both are states in which you should not be making consequential decisions.",
    "Because self-detection fails, the countermeasure is a rule set in advance: a mandatory pause after a large loss or an unusual win, or a colleague authorised to call it. The rule has to be automatic, because the state that requires it is the state that argues against it."
  ],
  practical: {
    label: "Example: a tilt rule",
    lead: "Decide now what happens after a large loss or an unusual win.",
    bullets: [
      "What counts as a big enough result to trigger a pause?",
      "How long is the pause, and what is prohibited during it?",
      "Who is authorised to tell me I am tilted, and will I have to listen?",
      "What are my personal early signs: speed, certainty, irritation, checking prices?",
      "Have my worst decisions historically followed a big loss or a big win?"
    ]
  },
  application:
    "Institutionally, tilt shows up as a rushed follow-on after a write-off, or as loosened standards during a hot run. A pre-agreed cooling-off period on major decisions following an unusual result is one of the cheapest process improvements available, and one of the least popular.",
  models: ["loss-aversion", "decision-quality", "resulting", "endowment"],
  connections: [
    { to: "temperament", type: "reinforces" },
    { to: "tii-chief-problem", type: "reinforces" },
    { to: "tib-ulysses-contract", type: "extends" },
    { to: "loss-aversion", type: "related" },
    { to: "tib-resulting", type: "related" }
  ],
  quote: null
},

{
  id: "tib-temporal-discounting", num: 10, book_id: "tib", category: "people",
  title: "Recruiting Your Future Self",
  thesis: "The present self takes the reward and hands the bill to a future self who was not consulted.",
  reading_time: 2,
  explanation: [
    "Duke's device is to treat your future self as a real party with interests, because the discounting is severe and largely automatic: benefits now are weighted far above costs later, and the later self is the one who pays.",
    "The fix is to bring that self into the room. Imagining the specific person who will live with the consequence, and how they will describe this decision, reliably changes present behaviour more than an abstract appeal to the long term does.",
    "The mirror-image error is over-weighting whatever just happened. A single recent result feels like it defines the situation, when in a long sequence of decisions it is one observation. Widening the time frame in both directions is the same corrective move."
  ],
  practical: {
    label: "Example: consulting the future self",
    lead: "Move the decision out of this moment before making it.",
    bullets: [
      "How will I describe this decision in a year, to someone I respect?",
      "Who bears the cost of this, and when does it arrive?",
      "Am I over-weighting something that happened in the last week?",
      "Is this decision consistent with the policy I would set for the next ten of these?",
      "What would my past self, at the time of setting the plan, want me to do here?"
    ]
  },
  application:
    "Horizon mismatch inside a firm is often this bias in institutional form: quarterly pressure applied to a decade-long thesis, or a mark protected today at the cost of a real outcome later. Naming who pays and when, explicitly, is what makes the trade visible.",
  models: ["narrow-framing", "decision-quality", "endowment", "compounding"],
  connections: [
    { to: "tfs-two-selves", type: "reinforces" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "tib-ulysses-contract", type: "extends" },
    { to: "availability-bias", type: "related" },
    { to: "tfs-narrow-framing", type: "related" }
  ],
  quote: null
},

{
  id: "tib-decision-trees", num: 11, book_id: "tib", category: "decision-making",
  title: "Draw the Tree",
  thesis: "Map the branches and put rough numbers on them. Crude explicit odds beat precise intuition.",
  reading_time: 2,
  explanation: [
    "A decision tree is just the set of paths a decision can take, with probabilities and outcomes attached. Duke's argument is that a rough tree drawn on a page is dramatically better than an unwritten sense of the situation, even when the numbers are guesses.",
    "The value is in the structure rather than the arithmetic. Drawing the branches reveals paths that were never considered, forces the probabilities to sum to one, and shows which branch is carrying the whole decision. Most of the insight arrives before any multiplication.",
    "Objections about spurious precision miss the comparison. The alternative is not precision, it is an unexamined weighting that is also a guess and cannot be inspected or improved."
  ],
  practical: {
    label: "Example: a tree in five minutes",
    lead: "Branches, probabilities, outcomes, then look at what dominates.",
    bullets: [
      "What are the three or four distinct ways this can go?",
      "What probability do I assign each, and do they sum to one?",
      "What is the outcome at the end of each branch, in the units I care about?",
      "Which single branch is carrying most of the expected value?",
      "Which branch did I not think of until I drew this?"
    ]
  },
  application:
    "For an investment this produces the outcome bands directly: the fund-returner path, the modest exit, the return of capital, the loss. Writing them with weights at entry is what allows a later review to separate a bad decision from a bad draw, and it usually reveals that the whole case rests on one branch.",
  models: ["probability", "decision-quality", "power-law", "base-rates"],
  connections: [
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tib-backcasting", type: "extends" },
    { to: "zto-power-law", type: "related" },
    { to: "tfs-simple-rules", type: "related" },
    { to: "base-rates", type: "reinforces" }
  ],
  quote: null
},

{
  id: "tib-ulysses-contract", num: 12, book_id: "tib", category: "learning",
  title: "Ulysses Contracts",
  thesis: "Bind yourself in advance, while calm, to the behaviour you want when you are not.",
  reading_time: 2,
  explanation: [
    "Ulysses had himself tied to the mast before the sirens, on the correct assumption that his future self would want to steer toward them. A Ulysses contract is any commitment made in a good state that constrains a predictably worse one.",
    "It works because it moves the decision to the moment when you are competent to make it. Deciding your selling rule during a calm week is a different cognitive act from deciding it during a crash, and only one of the two is worth trusting.",
    "The contract needs teeth: something that makes deviation costly or visible, whether a rule requiring another person's sign-off, a written kill criterion, or an automatic action that happens without your involvement. A private intention is not a contract."
  ],
  practical: {
    label: "Example: writing the contract",
    lead: "Name the predictable failure, then build a constraint with real friction.",
    bullets: [
      "What do I predictably do badly, and in which state?",
      "What rule, set now, would prevent it?",
      "What makes breaking the rule costly or visible to someone else?",
      "Who has to agree to an override, and is it recorded?",
      "Is this a contract or just a good intention?"
    ]
  },
  application:
    "Kill criteria written before diligence, position limits set before deployment, and a cooling-off rule after unusual results are all Ulysses contracts. Their function is to be inconvenient at exactly the moment you want them not to apply, which is why they have to be agreed with someone else.",
  models: ["decision-quality", "loss-aversion", "resulting", "incentives"],
  connections: [
    { to: "antidotes", type: "reinforces" },
    { to: "tib-tilt", type: "extends" },
    { to: "tii-formula-investing", type: "reinforces" },
    { to: "tib-temporal-discounting", type: "extends" },
    { to: "commitment-and-consistency", type: "contrasts" }
  ],
  quote: null
}

);
