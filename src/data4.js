/* Ideas 28-35 */
window.DB.ideas.push(

{
  id: "avoiding-ruin", num: 28, book_id: "pca", category: "investing",
  title: "Avoiding Ruin",
  thesis: "Survival comes first, because compounding requires that you are still there.",
  reading_time: 2,
  explanation: [
    "Most risks are recoverable and a small number are not. The distinction matters more than the size of the expected loss, because an unrecoverable loss removes you from all future outcomes rather than reducing one of them. Averages do not apply to players who are eliminated.",
    "The usual route to ruin is leverage combined with an unexpected correlation, and the correlation is unexpected because it did not exist in the sample period. Anything that forces you to sell at a moment you did not choose belongs in this category, whatever the model says about its probability.",
    "So the primary question in any structure is not what it returns but what could take you out. Once that list is short and each item is either survivable or genuinely remote, the return question becomes worth asking."
  ],
  practical: {
    label: "Example: the ruin checklist",
    lead: "Identify every mechanism that could force an outcome you cannot come back from.",
    bullets: [
      "What obligation could force a sale at a time not of my choosing?",
      "Which exposures look independent but would move together in a crisis?",
      "Is any single position large enough that its failure is unsurvivable?",
      "What is the maximum drawdown I can take and still meet commitments?",
      "Am I relying on liquidity that only exists in normal conditions?"
    ]
  },
  application:
    "In a fund context, ruin usually arrives through concentration plus a liquidity mismatch rather than through any single bad company. Position sizing that assumes the worst plausible cluster of failures, rather than the average one, is the practical expression of putting survival before return.",
  models: ["margin-of-safety", "inversion", "probability", "loss-aversion"],
  connections: [
    { to: "margin-of-safety", type: "reinforces" },
    { to: "inversion", type: "reinforces" },
    { to: "compounding", type: "extends" },
    { to: "probabilistic-thinking", type: "related" },
    { to: "temperament", type: "related" }
  ],
  quote: null
},

{
  id: "patience", num: 29, book_id: "pca", category: "investing",
  title: "Patience",
  thesis: "Most of the return comes from waiting, and waiting is an active skill.",
  reading_time: 2,
  explanation: [
    "Opportunities of real quality are infrequent. If you act at a constant rate you will necessarily fill most of your capacity with mediocre ones, because the good ones do not arrive on a schedule that matches your desire to be busy.",
    "Waiting is difficult for reasons that have nothing to do with analysis. Inactivity looks like underperformance internally, colleagues are transacting, and the fee structure often rewards deployment. The pressure to act is institutional rather than intellectual, which is why it needs an institutional answer.",
    "The skill is therefore preparation while not acting: knowing what you want well enough that you can move quickly when it appears. Patience without preparation is just absence, and it does not get rewarded."
  ],
  practical: {
    label: "Example: waiting productively",
    lead: "Use the quiet period to be ready rather than to lower the bar.",
    bullets: [
      "What are the three specific situations I am waiting for, described in advance?",
      "Am I doing the work now so I can act in days rather than months?",
      "Is my recent activity driven by opportunity quality or by time elapsed?",
      "What is the cost of holding cash against the cost of a mediocre commitment?",
      "Who in my process is rewarded for deploying rather than for being right?"
    ]
  },
  application:
    "A deployment pace set by the calendar guarantees that the vintage average includes whatever was available in a weak quarter. Pre-committing to a written bar, and being willing to report a quiet quarter, is the only mechanism that makes patience survivable inside an institution.",
  models: ["compounding", "opportunity-cost", "circle-of-competence", "specialisation"],
  connections: [
    { to: "selectivity", type: "reinforces" },
    { to: "compounding", type: "reinforces" },
    { to: "opportunity-cost", type: "related" },
    { to: "temperament", type: "related" },
    { to: "long-term-thinking", type: "extends" }
  ],
  quote: {
    text: "The big money is not in the buying and selling, but in the waiting.",
    attribution: "Charlie Munger",
    why: "The line is usually read as advice about holding, and it is also advice about entering. Both the wait for the right price and the wait after the purchase are the same skill, and both are unpaid until they suddenly are not."
  }
},

{
  id: "selectivity", num: 30, book_id: "pca", category: "investing",
  title: "Selectivity",
  thesis: "A small number of decisions produce most of the result, so the filter matters more than the volume.",
  reading_time: 2,
  explanation: [
    "Outcomes in most portfolios are extremely concentrated. A handful of positions produce the return and the rest are noise or drag, which means the quality of the acceptance decision dominates almost everything else you could improve.",
    "This argues for a deliberately high rejection rate. If most of the value comes from a few decisions, the cost of declining a good one is much smaller than the cost of accepting a bad one, particularly once the attention cost of managing it is counted.",
    "It also argues for a fast, honest \"too hard\" category. The purpose of a filter is not to evaluate everything well; it is to spend evaluation capacity on the small number of things where your judgement is likely to be worth something."
  ],
  practical: {
    label: "Example: three baskets",
    lead: "Sort quickly into yes, no, and too hard, and let too hard be a real answer with no stigma.",
    bullets: [
      "Yes: inside the circle, understood, priced acceptably",
      "No: fails a stated criterion, and record which one",
      "Too hard: interesting but not assessable by me, and that is a complete answer",
      "How many hours went into deals that were never going to clear the bar?",
      "What proportion of my time is spent on the top decile of the pipeline?"
    ]
  },
  application:
    "A written bar that produces a high and unembarrassed rejection rate is a competitive advantage, mostly because it protects the attention available for the few things that matter. The associated discipline is recording why each pass was a pass, so the filter itself can be reviewed.",
  models: ["circle-of-competence", "opportunity-cost", "specialisation", "probability"],
  connections: [
    { to: "circle-of-competence", type: "reinforces" },
    { to: "opportunity-cost", type: "reinforces" },
    { to: "patience", type: "reinforces" },
    { to: "contrast-effects", type: "contrasts" },
    { to: "specialisation", type: "related" }
  ],
  quote: {
    text: "We have three baskets for investing: yes, no, and too tough to understand.",
    attribution: "Charlie Munger",
    source_note: "Munger's framing, also recorded in Buffett's better-sourced version: three boxes, In, Out and Too Hard.",
    why: "The third basket is the innovation. Most processes force a binary answer, which pushes genuinely unassessable situations into one of the other two, usually the one the room already prefers."
  }
},

{
  id: "temperament", num: 31, book_id: "pca", category: "investing",
  title: "Temperament",
  thesis: "Disposition beats intelligence, because the errors that matter are emotional.",
  reading_time: 2,
  explanation: [
    "Analytical ability past a modest threshold adds surprisingly little. The decisive failures are not calculation errors; they are acting under envy, boredom, fear, or the need to be seen doing something, and none of those are fixed by being cleverer.",
    "Intelligence can make it worse. A capable mind builds a better justification for whatever the emotion already wants, so the argument is more persuasive and therefore harder to escape. Sophisticated rationalisation is a real cost of capability.",
    "Temperament is partly given and largely structural. Removing the situations that generate the emotion, by not watching prices daily, not comparing to a peer's quarter, and pre-committing to rules, does more than trying to be calmer inside a situation designed to make you anxious."
  ],
  practical: {
    label: "Example: designing around yourself",
    lead: "Identify your own reliable triggers and engineer the exposure rather than the reaction.",
    bullets: [
      "Which emotion has cost me the most money historically: fear, envy, or impatience?",
      "What situation reliably produces it, and can I stop entering that situation?",
      "Am I checking this position for information or for reassurance?",
      "Which of my decisions in the last year were driven by what peers were doing?",
      "What rule, set in a calm moment, would have prevented my worst recent decision?"
    ]
  },
  application:
    "Peer comparison over short windows is the most reliable generator of poor institutional decisions, because it converts a long-horizon mandate into a quarterly one. Reporting structures that lengthen the comparison window are a temperament intervention disguised as an administrative choice.",
  models: ["loss-aversion", "social-proof", "compounding", "circle-of-competence"],
  connections: [
    { to: "patience", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "loss-aversion", type: "related" },
    { to: "social-proof", type: "contrasts" },
    { to: "antidotes", type: "related" }
  ],
  quote: {
    text: "A lot of people with high IQs are terrible investors because they've got terrible temperaments.",
    attribution: "Charlie Munger, Kiplinger's interview, 2005",
    why: "The observation is diagnostic rather than modest. If capability and results come apart this reliably, the binding constraint is somewhere other than analysis, and that is where the effort should go."
  }
},

{
  id: "independent-thinking", num: 32, book_id: "pca", category: "decision-making",
  title: "Independent Thinking",
  thesis: "You are not right because others agree. Reach the view yourself or you cannot hold it.",
  reading_time: 2,
  explanation: [
    "Consensus is comfortable and, in a market, largely priced. A view you hold because others hold it gives you no advantage on the way in and no ability to sit through a drawdown, because you have no independent grounds to distinguish a temporary decline from being wrong.",
    "Independence is not contrarianism. Disagreeing on principle is the same abdication as agreeing on principle, just with worse odds. The requirement is that the reasoning is yours, whatever conclusion it reaches, and that you could reconstruct it without reference to who else agrees.",
    "The practical test is whether you know what would change your mind. Borrowed conviction cannot answer that question, because the original reasoning that would have to be falsified is not available to you."
  ],
  practical: {
    label: "Example: testing your own view",
    lead: "Establish whether you own the reasoning or are holding someone else's.",
    bullets: [
      "Can I state the case without citing who else believes it?",
      "Do I know the two or three facts the whole thesis depends on?",
      "Could I argue the other side convincingly?",
      "If the most respected participant reversed tomorrow, would my view change?",
      "What specific evidence would falsify this?"
    ]
  },
  application:
    "Writing the thesis before speaking to anyone else, then testing it against the consensus rather than assembling it from the consensus, is the operational form of this. It also produces the artefact you need in a drawdown, when the question is whether the reasoning has broken or only the price.",
  models: ["social-proof", "authority-bias", "confirmation-bias", "circle-of-competence"],
  connections: [
    { to: "social-proof", type: "contrasts" },
    { to: "authority-misinfluence", type: "contrasts" },
    { to: "confirmation-bias", type: "related" },
    { to: "temperament", type: "reinforces" },
    { to: "antidotes", type: "reinforces" }
  ],
  quote: null
},

{
  id: "multidisciplinary-thinking", num: 33, book_id: "pca", category: "learning",
  title: "Multidisciplinary Thinking",
  thesis: "Borrow the big ideas from every major discipline, because problems do not respect subject boundaries.",
  reading_time: 3,
  explanation: [
    "A single discipline gives you a single set of explanations, and you will apply them whether or not they fit. The physicist reaches for equilibrium, the psychologist for motivation, the economist for incentives, and each will produce a confident answer to a question that was not theirs.",
    "The remedy is a working knowledge of the major ideas across several fields: compounding and probability from mathematics, incentives and opportunity cost from economics, the reliable biases from psychology, feedback and thresholds from systems thinking, selection and adaptation from biology. You do not need depth in each. You need the two or three ideas that do most of the work.",
    "The payoff is in checking. A problem examined through four unrelated lenses that agree is a different proposition from one examined through the single lens you happen to own, and the disagreements are where the interesting information is."
  ],
  practical: {
    label: "Example: running the lenses",
    lead: "Take one decision and pass it through four disciplines before concluding.",
    bullets: [
      "Economics: who is paid for what, and what does the alternative use of this capital return?",
      "Psychology: which bias is this situation most likely to be triggering in me?",
      "Mathematics: what are the odds and does the expected value clear the bar?",
      "Systems: what loop is operating and how long is the delay in it?",
      "Where the lenses disagree, that is the part of the analysis that is not finished"
    ]
  },
  application:
    "The latticework is what makes the rest of this library usable. A single model applied to everything becomes the man with a hammer; the value is in having enough of them that the choice of model is itself a decision, and in noticing which ones a situation is not answering to.",
  models: ["specialisation", "circle-of-competence", "second-order", "probability"],
  connections: [
    { to: "specialisation", type: "contrasts" },
    { to: "circle-of-competence", type: "contrasts" },
    { to: "antidotes", type: "reinforces" },
    { to: "second-order-effects", type: "related" },
    { to: "long-term-thinking", type: "related" }
  ],
  quote: {
    text: "It's like the old saying, “To the man with only a hammer, every problem looks like a nail.”",
    attribution: "Charlie Munger, USC Business School, 1994, quoting an older saying",
    why: "Munger uses the line but is explicit that he is borrowing it; the underlying idea is the law of the instrument, from Abraham Kaplan and Abraham Maslow in the 1960s. It earns its place here because it explains why breadth is a practical necessity rather than an intellectual luxury. Without a second tool you cannot tell the difference between a problem your model solves and a problem your model merely describes."
  }
},

{
  id: "learning-from-mistakes", num: 34, book_id: "pca", category: "learning",
  thesis: "Errors are the cheapest available education, but only if you look at them directly.",
  title: "Learning from Mistakes",
  reading_time: 2,
  explanation: [
    "Mistakes carry more information than successes, because a success can be produced by luck and a failure usually has a mechanism. The mechanism is what generalises, and it is available only if the failure is examined rather than explained.",
    "The obstacle is that examining it is unpleasant and organisations punish it. So failures get attributed to conditions, timing or other people, all of which may be partly true and none of which produce a lesson you can use next time.",
    "Other people's mistakes are cheaper still. Studying failures in your own category, especially recent ones in similar businesses, buys the lesson without the loss, and almost nobody does it because failures are poorly documented and no one enjoys the reading."
  ],
  practical: {
    label: "Example: an honest post-mortem",
    lead: "Write it as though the reader will use it, not as though the author is being assessed.",
    bullets: [
      "What did I believe, and what specifically was wrong about it?",
      "Was the information available at the time, or genuinely not knowable?",
      "Which step of my own process would have caught this?",
      "Is this a new error or a repeat of one I have already written down?",
      "What rule changes as a result, in words specific enough to apply?"
    ]
  },
  application:
    "A maintained error log, reviewed before each new commitment, is one of the few process improvements that compounds. Its value comes from repetition: the same three or four errors recur across a career, and recognising the pattern early is worth more than any single insight.",
  models: ["confirmation-bias", "survivorship", "base-rates", "regression"],
  connections: [
    { to: "outcome-bias", type: "reinforces" },
    { to: "antidotes", type: "reinforces" },
    { to: "survivorship-bias", type: "related" },
    { to: "commitment-and-consistency", type: "contrasts" },
    { to: "long-term-thinking", type: "related" }
  ],
  quote: {
    text: "I like people admitting they were complete stupid horses' asses. I know I'll perform better if I rub my nose in my mistakes.",
    attribution: "Charlie Munger",
    source_note: "Wording is stable across compilations and attribution to Munger is uncontested, but no original interview or meeting has been traced.",
    why: "The vocabulary is doing work. Munger is arguing that a comfortable account of a failure is a failure to learn from it, and that the discomfort is the mechanism rather than a side effect."
  }
},

{
  id: "long-term-thinking", num: 35, book_id: "pca", category: "strategy",
  thesis: "Choose the horizon deliberately, because it changes which decisions are correct.",
  title: "Long-Term Thinking",
  reading_time: 2,
  explanation: [
    "Time horizon is not a preference, it is an input. The same decision can be right over ten years and wrong over one, and most disagreements about strategy turn out to be undeclared disagreements about horizon rather than about facts.",
    "A long horizon buys two specific advantages. Compounding needs duration to do anything interesting, and a long horizon lets you accept short-term costs that competitors on a quarterly clock cannot. That second one is a genuine structural edge and it is available to anyone willing to be judged slowly.",
    "The cost is that the horizon has to be real. A long-term strategy funded by short-term capital, or defended to stakeholders measuring quarters, will be abandoned at exactly the moment it becomes valuable, which is worse than never having started it."
  ],
  practical: {
    label: "Example: declaring the horizon",
    lead: "Fix the horizon before the analysis, and check that everything downstream can survive it.",
    bullets: [
      "Over what period does this decision have to work?",
      "Is my capital, and my stakeholders' patience, committed for that period?",
      "What short-term cost am I accepting, and can I explain it in advance?",
      "Would I still hold this view if it looked wrong for two years?",
      "Am I competing against people on a shorter clock, and can I use that?"
    ]
  },
  application:
    "Horizon mismatch is a common and underdiagnosed source of loss: a five-year thesis funded by capital that needs an answer in two, or a board pushing quarterly targets onto a company built for a decade. Stating the horizon explicitly at underwriting, and checking it against the fund's own life, prevents a class of error that looks like bad judgement and is actually bad structure.",
  models: ["compounding", "second-order", "opportunity-cost", "feedback-loops"],
  connections: [
    { to: "compounding", type: "reinforces" },
    { to: "patience", type: "reinforces" },
    { to: "second-order-effects", type: "extends" },
    { to: "multidisciplinary-thinking", type: "related" },
    { to: "avoiding-ruin", type: "related" }
  ],
  quote: {
    text: "Spend each day trying to be a little wiser than you were when you woke up.",
    attribution: "Charlie Munger, USC Law School commencement address, 2007",
    why: "It is a compounding instruction applied to yourself. The daily increment is deliberately small because the mechanism is duration, not intensity, which is the same argument he makes about capital."
  }
}

);
