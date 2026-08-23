/* Against the Gods — Peter L. Bernstein — 10 ideas */
window.DB.ideas.push(

{
  id: "atg-taming-chance", num: 1, book_id: "atg", category: "history",
  title: "The Boundary of Modern Times",
  thesis: "What separates the modern world from everything before it is the decision to treat the future as measurable rather than as the whim of the gods.",
  reading_time: 3,
  explanation: [
    "For most of history, uncertainty was resolved by consulting oracles, casting lots and reading entrails, because no one had reason to think the future could be measured rather than divined. Bernstein's claim is that the discovery that risk could be quantified is what created the modern economy: insurance, investment, credit and every wager on a future outcome.",
    "The mechanism was not one insight but a set of tools imported and stacked over centuries: Hindu-Arabic numerals, double-entry bookkeeping, the mathematics of combinations, and the habit of recording experience in tables rather than proverbs. Once outcomes could be counted, they could be compared, and once compared, priced.",
    "The line between fate and risk is a line about agency. A society governed by fate makes no distinction between prudence and superstition, because nothing done changes what is coming. A society that has learned to measure risk can choose, size a bet and buy insurance, which is a different relationship with the future altogether."
  ],
  practical: {
    label: "Example: fate or a priced bet",
    lead: "Check whether a decision is being treated as destiny or as a measured exposure.",
    bullets: [
      "Am I describing this outcome as fated, or as a range with odds attached?",
      "What specific number system, table or record makes this comparable to other bets?",
      "Have I priced this, or only felt confident or nervous about it?",
      "What would change if I treated this as choosable rather than inevitable?",
      "Where in this decision have I quietly reverted to reading omens?"
    ]
  },
  application:
    "In investing terms, this is the difference between believing an outcome is simply meant to happen and calculating what it would take to be wrong. Applying probability does not remove uncertainty, but it turns unmeasurable dread into a sized, priced exposure that can be underwritten, diversified or declined, which is the whole difference between speculation dressed as fate and a deliberate bet.",
  models: ["probability", "narrative-fallacy", "decision-quality", "base-rates"],
  connections: [
    { to: "atg-bayes-theorem", type: "extends" },
    { to: "atg-risk-versus-uncertainty", type: "related" },
    { to: "tbs-narrative-fallacy", type: "contrasts" },
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tii-market-history", type: "related" }
  ],
  quote: {
    text: "The revolutionary idea that defines the boundary between modern times and the past is the mastery of risk: the notion that the future is more than a whim of the gods and that men and women are not passive before nature.",
    attribution: "Peter L. Bernstein, Against the Gods: The Remarkable Story of Risk",
    why: "Bernstein states his entire thesis in one sentence before the history begins, naming the mastery of risk rather than any single invention as the actual dividing line between the ancient and modern worlds."
  }
},

{
  id: "atg-problem-of-points", num: 2, book_id: "atg", category: "decision-making",
  title: "The Problem of Points",
  thesis: "Pascal and Fermat's correspondence on dividing an interrupted game's stakes created probability theory by asking what should happen rather than what already had.",
  reading_time: 3,
  explanation: [
    "A gambler asked Pascal a practical question: if a game of chance is interrupted before it finishes, how should the stakes be divided given the score so far? Splitting by current score or splitting evenly both failed to satisfy anyone, because neither counted the game that had not been played.",
    "Pascal and Fermat solved it by enumerating every way the remainder of the game could unfold and weighting the stake by the share of those outcomes each player would have won. It was the first time anyone had reasoned systematically about outcomes that had not happened, rather than tabulating outcomes that already had.",
    "The shift is from history to possibility. Before Pascal, thinking about chance meant recording what had occurred and hoping the pattern held. After Pascal, it meant asking what could occur, assigning each a weight and combining them into an expectation, whether or not any of it happens on a given day."
  ],
  practical: {
    label: "Example: pricing the unfinished game",
    lead: "Enumerate the ways a situation could still resolve before settling on a single number.",
    bullets: [
      "What are the distinct ways this situation could still play out from here?",
      "What weight does each path deserve, on the evidence available now?",
      "Have I stopped at the base rate, or priced the specific interruption in front of me?",
      "Does my number implicitly assume only one continuation is possible?",
      "Would a different, equally reasonable person enumerate the same paths?"
    ]
  },
  application:
    "This is the exact move a venture decision needs: not what happened at the last two companies backed, but an enumeration of how this specific situation could resolve, weighted honestly and added up before the round closes. A memo that stops at the base rate has not finished the Pascal step, because it has not priced the interruption specific to this deal.",
  models: ["probability", "decision-quality", "base-rates", "optionality"],
  connections: [
    { to: "atg-taming-chance", type: "extends" },
    { to: "atg-bayes-theorem", type: "related" },
    { to: "tib-decision-trees", type: "reinforces" },
    { to: "tib-bets", type: "reinforces" },
    { to: "probabilistic-thinking", type: "reinforces" }
  ],
  quote: null
},

{
  id: "atg-law-of-large-numbers", num: 3, book_id: "atg", category: "learning",
  title: "How Many Observations Are Enough",
  thesis: "Jacob Bernoulli proved that averages settle down as a sample grows, and the same theorem defines exactly how large a sample must be before it can be trusted.",
  reading_time: 3,
  explanation: [
    "Bernoulli's law of large numbers states that as a chance event is repeated more times, the observed frequency converges on the true underlying probability. It sounds obvious until you notice what it requires: the number of trials needed for useful precision is far larger than intuition expects, which is why Bernoulli spent some twenty years proving it to his own satisfaction.",
    "The theorem is symmetric in an underappreciated way. It licenses confidence in a large, stable sample and withholds that confidence from a small one, and both halves matter equally. Everyone remembers to invoke the law with plenty of data; almost no one invokes its restriction with a little.",
    "Bernoulli also worried, correctly, about whether the events being counted were actually the same kind of event repeated. A coin flip is the same trial every time. A company's next year is not obviously the same trial as its last five, which is where the theorem's guarantee quietly stops applying."
  ],
  practical: {
    label: "Example: has enough happened yet",
    lead: "Ask whether the sample behind a confident average is actually large enough.",
    bullets: [
      "How many genuinely independent trials sit behind this average?",
      "Is each trial actually the same kind of event, or has the underlying process changed?",
      "What would I need to see before this pattern earned real confidence?",
      "Am I treating a handful of outcomes as a converged average?",
      "What is the smallest sample size below which I refuse to trust a trend?"
    ]
  },
  application:
    "Track records in venture are almost always too short for this theorem to license anything. A partner's three-fund history is a handful of trials in an environment where the trial itself changes each vintage, so treating that record as a converged average applies a theorem past the sample size it needs. The honest move is to say what would need to be seen before the average meant something, and admit it is not there yet.",
  models: ["probability", "base-rates", "regression", "decision-quality"],
  connections: [
    { to: "atg-taming-chance", type: "related" },
    { to: "atg-regression-to-mediocrity", type: "related" },
    { to: "base-rates", type: "reinforces" },
    { to: "survivorship-bias", type: "related" },
    { to: "fbr-rare-events", type: "reinforces" }
  ],
  quote: null
},

{
  id: "atg-utility-not-value", num: 4, book_id: "atg", category: "decision-making",
  title: "A Dollar Is Not a Dollar",
  thesis: "Daniel Bernoulli showed that people value money by what it does for the wealth they already have, not by its raw amount.",
  reading_time: 3,
  explanation: [
    "The St Petersburg paradox is a coin-flip game paying doubling amounts the longer it runs, which makes its mathematical expected value infinite, yet almost nobody will pay more than a modest sum to play it. Bernoulli's resolution was to say the mistake lay in measuring the payoff in currency at all.",
    "His proposal was that satisfaction from an additional sum depends on how much is already held, so the same addition means more to a poor person than a rich one. Valued in utility rather than currency, the infinite expectation collapses to a finite, sensible number and the paradox disappears.",
    "This was the first formal statement that risk cannot be judged by expected value alone, because the same expected amount carries wildly different weight depending on the wealth and circumstances of the person facing it. Two people can behave rationally, look at the identical bet and reach opposite conclusions."
  ],
  practical: {
    label: "Example: sizing against wealth, not odds",
    lead: "Weigh a bet against what a loss would mean, not only against its expected return.",
    bullets: [
      "What does this loss actually mean for the capital I have behind it?",
      "Would someone with different reserves reasonably size this differently?",
      "Am I comparing bets on expected value alone, ignoring what each side can absorb?",
      "Is this position sized to survive the loss, or only to capture the expectation?",
      "What reserve level would make this bet a different decision entirely?"
    ]
  },
  application:
    "The consequence for portfolio decisions is that position size cannot be set from expected return alone, it has to be set against what a loss would mean to the capital actually at risk. A fund with modest reserves and a fund with deep reserves face the same expected-value bet very differently, and sizing that ignores the difference applies arithmetic Bernoulli showed was incomplete three centuries ago.",
  models: ["probability", "decision-quality", "loss-aversion", "margin-of-safety"],
  connections: [
    { to: "atg-problem-of-points", type: "related" },
    { to: "atg-taming-chance", type: "related" },
    { to: "fbr-probability-vs-expectation", type: "reinforces" },
    { to: "tib-bets", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "loss-aversion", type: "reinforces" }
  ],
  quote: null
},

{
  id: "atg-bayes-theorem", num: 5, book_id: "atg", category: "decision-making",
  title: "Revising Belief in Proportion to Evidence",
  thesis: "Bayes' theorem gives a precise rule for how much a new piece of evidence should move a prior belief, neither ignoring it nor treating it as the whole story.",
  reading_time: 3,
  explanation: [
    "Thomas Bayes, a Presbyterian minister, worked out and left unpublished at his death a rule for inferring the probability of a cause from an observed effect: start with a prior, then update it by how much more likely the new evidence is under one hypothesis than another. The size of the update depends on the strength of the evidence, not on how recently it arrived or how vivid it felt.",
    "The theorem is unforgiving about extreme priors. If a hypothesis was very unlikely beforehand, one piece of confirming evidence should move belief only a little, however dramatic that evidence feels in the moment. Misapplied intuition usually runs the other way, letting one striking data point overwrite everything known before it.",
    "Bernstein traces the theorem's slow adoption over more than a century, and the delay is telling. Reasoning correctly from effect back to cause cuts against the mind's preference for reasoning forward, from cause to effect. Computing an update is one thing, actually running one against a settled view of your own is another."
  ],
  practical: {
    label: "Example: updating on purpose",
    lead: "State the prior and the required strength of evidence before new information arrives.",
    bullets: [
      "What is my prior belief here, stated as a number before I look at the new evidence?",
      "How likely is this evidence under my thesis, versus under the alternative?",
      "How far should this specific evidence actually move my estimate?",
      "Am I overreacting to one vivid data point or underreacting to a real signal?",
      "Did my belief move by the amount the evidence justified, or by how it felt?"
    ]
  },
  application:
    "A diligence process that treats each new data point as either confirming the thesis or requiring it to be junked has skipped the Bayesian step. The disciplined version states the prior explicitly before the call, decides in advance how strong a signal would need to be to move it, and updates by that much and no more, which stops both overreaction to one reference call and underreaction to a genuine red flag.",
  models: ["bayesian-updating", "probability", "confirmation-bias", "decision-quality"],
  connections: [
    { to: "atg-problem-of-points", type: "extends" },
    { to: "confirmation-bias", type: "contrasts" },
    { to: "tib-motivated-reasoning", type: "contrasts" },
    { to: "tib-decision-trees", type: "reinforces" },
    { to: "probabilistic-thinking", type: "reinforces" }
  ],
  quote: null
},

{
  id: "atg-regression-to-mediocrity", num: 6, book_id: "atg", category: "decision-making",
  title: "Regression to Mediocrity",
  thesis: "Francis Galton found that extreme parents produce, on average, less extreme children, and the same pull applies to any performance driven partly by luck.",
  reading_time: 2,
  explanation: [
    "Galton measured the heights of fathers and sons and found what looked at first like a paradox: unusually tall fathers had sons who were, on average, shorter than they were, and unusually short fathers had sons who were taller. Nothing was declining generation to generation, the average height stayed constant. What moved was the extremity.",
    "Galton named it regression toward mediocrity, later softened to the mean, and the mechanism is simple once seen. Any measured outcome is part true underlying ability and part chance, and an extreme observation is disproportionately likely to include an unusually large share of the chance component, which will not repeat next time.",
    "The same pull governs anything measured under noise: a fund's best vintage, a founder's best quarter, a stock's best year. None of these decline because something changed. They regress because the extreme reading was flattered by a share of luck a repeat draw is unlikely to hand back."
  ],
  practical: {
    label: "Example: sorting skill from the draw",
    lead: "Split an extreme result into its persistent and its lucky component before forecasting from it.",
    bullets: [
      "What share of this standout result looks like repeatable skill?",
      "What share looks like a favourable draw unlikely to recur?",
      "What would a normal, non-extreme period from this source look like?",
      "Am I forecasting from the peak, or from the underlying trend?",
      "Would I be surprised if the next reading were merely average?"
    ]
  },
  application:
    "The practical failure this causes in investing is extrapolating a standout quarter or a single spectacular vintage into a forecast, then being surprised when the next period is merely good. The correction is mechanical: ask what share of the extreme result was skill that persists and what share was a favourable draw, and forecast from the skill component alone.",
  models: ["regression", "base-rates", "probability", "decision-quality"],
  connections: [
    { to: "regression-to-the-mean", type: "reinforces" },
    { to: "atg-law-of-large-numbers", type: "related" },
    { to: "tii-paying-for-growth", type: "reinforces" },
    { to: "halo-correlation-causality", type: "related" },
    { to: "atg-illusion-of-control", type: "related" }
  ],
  quote: null
},

{
  id: "atg-life-tables-and-insurance", num: 7, book_id: "atg", category: "history",
  title: "Pooling What No One Can Bear Alone",
  thesis: "Edmond Halley's mortality tables turned death, the least controllable of outcomes, into a priced and insurable event by counting it across a large enough population.",
  reading_time: 3,
  explanation: [
    "Halley, better known for the comet, built one of the first reliable life tables from the birth and death records of the city of Breslau, working out at what rate people at each age actually died rather than relying on guesswork. The table let a government or company calculate, for the first time with any rigour, what a life annuity or a policy on a particular life should cost.",
    "No individual death is predictable. Pooled across thousands of lives, the pattern becomes remarkably stable year to year, the same law of large numbers doing the work, applied to the most emotionally loaded outcome available. Insurance is this discovery turned into an institution: a single unbearable risk, spread across enough independent lives, becomes a bearable, priced cost.",
    "The business only works if the lives pooled are genuinely independent. A table built on ordinary mortality says nothing about a plague year, when many deaths share one cause and stop being independent events, which is the gap between the ordinary case the table describes and the tail case it cannot."
  ],
  practical: {
    label: "Example: checking the pool",
    lead: "Ask whether the risks being pooled are actually independent of one another.",
    bullets: [
      "What common factor could make these supposedly separate risks move together?",
      "Does this table or model describe the ordinary case, the tail case, or both?",
      "How many genuinely independent exposures am I actually holding?",
      "What single event would break the independence this pooling relies on?",
      "Is diversity here real, or several positions wearing different names?"
    ]
  },
  application:
    "The venture equivalent is a fund itself: no single portfolio company's odds can be underwritten with confidence, but a fund of enough independent bets converts unbearable idiosyncratic risk into a manageable, roughly forecastable outcome, provided the bets are genuinely independent. A portfolio concentrated in one vintage, one sector or one macro exposure has quietly given up the independence the whole model depends on.",
  models: ["probability", "base-rates", "diversification", "margin-of-safety"],
  connections: [
    { to: "atg-law-of-large-numbers", type: "reinforces" },
    { to: "atg-taming-chance", type: "extends" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tii-diversification", type: "related" },
    { to: "zto-power-law", type: "contrasts" }
  ],
  quote: null
},

{
  id: "atg-covariance-not-volatility", num: 8, book_id: "atg", category: "investing",
  title: "What Matters Is How Things Move Together",
  thesis: "Modern portfolio theory's real insight is that a portfolio's risk depends on how its assets move relative to each other, not on how risky each looks alone.",
  reading_time: 3,
  explanation: [
    "Bernstein traces the mathematics of risk to a practical peak in Harry Markowitz's portfolio theory, which reframed the whole question. Instead of asking how risky an asset is, the useful question became how its movement relates to the movement of everything else already held. A volatile asset that moves against the rest of the portfolio can reduce total risk rather than add to it.",
    "This is counterintuitive because it runs against how risk is felt. Every individual holding still swings, what changes is that the swings partly cancel, provided they are not driven by the same underlying factor. The mathematics rewards genuine independence and punishes the illusion of it: a portfolio that looks diverse by name but is one bet on the same macro factor gets none of the benefit.",
    "The theory's own limits are part of the history. It assumes returns are distributed more tidily than markets actually deliver, and the correlations that hold in ordinary times are exactly the ones that go to one in a crisis, when the benefit is needed most and available least."
  ],
  practical: {
    label: "Example: reading the actual correlation",
    lead: "Check what a set of positions is actually correlated to, not what the labels suggest.",
    bullets: [
      "What single factor would move most of these positions at once?",
      "Do these holdings look diverse by sector but share one funding or demand driver?",
      "Which of these correlations only hold in ordinary conditions?",
      "What happens to this portfolio's risk in a genuine stress scenario?",
      "Is this diversification, or one bet distributed across several names?"
    ]
  },
  application:
    "In practice this argues for checking what a set of positions is actually correlated to, rather than what sector labels suggest. A venture book spread across ten companies that all depend on the same funding environment, the same enterprise budget cycle or the same downstream customer is a single correlated bet wearing ten names, and the portfolio math will not deliver the protection its apparent diversity implies.",
  models: ["diversification", "fat-tails", "probability", "decision-quality"],
  connections: [
    { to: "atg-life-tables-and-insurance", type: "extends" },
    { to: "tii-diversification", type: "reinforces" },
    { to: "zto-power-law", type: "contrasts" },
    { to: "pom-tails-drive-everything", type: "related" },
    { to: "tbs-mediocristan", type: "contrasts" }
  ],
  quote: null
},

{
  id: "atg-risk-versus-uncertainty", num: 9, book_id: "atg", category: "history",
  title: "Risk You Can Measure, Uncertainty You Cannot",
  thesis: "Bernstein closes his own history with a warning that some of what matters most cannot be reduced to a probability distribution, a distinction Keynes and Knight had already drawn.",
  reading_time: 3,
  explanation: [
    "Knight and Keynes separated risk, where the range of outcomes and their odds are knowable in the way a roulette wheel's are, from uncertainty, where the structure of what could happen is not known in advance. A life table describes risk. The next decade of a genuinely new technology, or the next war, is uncertainty, and no amount of data collection converts one into the other.",
    "Bernstein's history is, on its own account, a story about the first kind gradually being conquered by better tools, and his closing caution is that the conquest is partial. The tools work superbly inside the domain where past frequencies are a fair guide to future ones, and they lend false comfort exactly where that condition fails, which tends to be the moments that matter most.",
    "The danger is not the mathematics but the confidence it lends to situations it was never built to describe. A precisely computed number invites treatment as knowledge, even when the process generating the numbers has itself changed in a way no historical table could have recorded."
  ],
  practical: {
    label: "Example: naming which one this is",
    lead: "State plainly whether a forecast rests on measurable risk or on genuine uncertainty.",
    bullets: [
      "Is there a stable historical process here, or a genuinely new situation?",
      "Would more data actually narrow this range, or is the structure itself unknown?",
      "Am I giving this forecast more confidence than its inputs support?",
      "What changed about the underlying process since the historical table was built?",
      "Have I labelled this uncertainty as risk simply because a number was needed?"
    ]
  },
  application:
    "The discipline this implies is naming, deal by deal, whether a forecast rests on genuine risk, a stable process with a known range, or on uncertainty dressed up as risk because a number was needed for the model. A new-category venture bet is almost always the second kind, and treating its projections with the confidence a life table deserves is the exact error Bernstein spent a whole book warning against.",
  models: ["probability", "decision-quality", "illusion-of-control", "narrative-fallacy"],
  connections: [
    { to: "atg-taming-chance", type: "extends" },
    { to: "tmit-cannot-predict", type: "reinforces" },
    { to: "sa-analysis-not-prophecy", type: "reinforces" },
    { to: "tbs-forecasting-limits", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "related" }
  ],
  quote: null
},

{
  id: "atg-illusion-of-control", num: 10, book_id: "atg", category: "decision-making",
  title: "Feeling in Control of What Chance Decides",
  thesis: "People consistently overrate how much their own choices influence an outcome that is substantially down to chance, and the feeling is strongest exactly when they have taken some action.",
  reading_time: 2,
  explanation: [
    "Bernstein closes his history with the psychology of risk, drawing on findings that people who choose their own lottery number, or roll dice themselves rather than watching someone else, will pay more to keep the bet and rate their odds as better, despite the odds being identical either way. Taking an action, any action, manufactures a feeling of influence the mathematics does not support.",
    "The distortion is not stupidity, it is a stable feature of how chance is processed: activity is mistaken for effect, and effort is mistaken for edge. It shows up wherever a process rewards the feeling of control more readily than it rewards being right, which describes most repeated decisions made under uncertainty rather than one-off ones.",
    "It is hardest to see in yourself precisely where it matters most, in domains that reward genuine skill often enough to make the confusion plausible. A process that mixes real skill with real luck is exactly the environment where the illusion is most durable, because it is occasionally, truly, correct."
  ],
  practical: {
    label: "Example: separating diligence from confidence",
    lead: "Write down the odds before the work starts, then check how much they actually moved.",
    bullets: [
      "Did this work change my estimate of the outcome, or only my comfort with it?",
      "How much more certain do I feel after acting, versus after observing?",
      "What specific finding justified each point this estimate moved?",
      "Am I mistaking effort spent for edge gained?",
      "Would I feel the same confidence if someone else had done this work?"
    ]
  },
  application:
    "The tell in venture is a partner who feels more certain about a deal after doing extensive work on it, independent of whether that work actually changed the odds. Diligence should change the estimate of an outcome, it should not be allowed to inflate confidence beyond what the diligence itself established, and the way to check the difference is to write the odds down before the work starts and see how much they moved and why.",
  models: ["illusion-of-control", "probability", "base-rates", "decision-quality"],
  connections: [
    { to: "atg-regression-to-mediocrity", type: "related" },
    { to: "atg-law-of-large-numbers", type: "related" },
    { to: "availability-bias", type: "reinforces" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "fbr-not-wired", type: "reinforces" }
  ],
  quote: {
    text: "The essence of risk management lies in maximizing the areas where we have some control over the outcome while minimizing the areas where we have absolutely no control over the outcome.",
    attribution: "Peter L. Bernstein, Against the Gods: The Remarkable Story of Risk",
    why: "Bernstein defines risk management as sorting the controllable from the uncontrollable rather than eliminating uncertainty, which is the exact discipline the illusion of control causes people to skip."
  }
}

);
