/* Fooled by Randomness — Nassim Nicholas Taleb — 12 ideas */
window.DB.ideas.push(

{
  id: "fbr-alternative-histories", num: 1, book_id: "fbr", category: "decision-making",
  title: "Alternative Histories",
  thesis: "The history that happened is one sample from many that could have. Judge accordingly.",
  reading_time: 3,
  explanation: [
    "Taleb asks you to treat the observed past as one realised path drawn from a set of paths that were all available at the time. The set is invisible, because only the branch that occurred leaves records, a balance and a reputation behind it. Reasoning about a decision means reconstructing the other branches, asking what would have followed had the coin landed differently, and weighting the result by how likely its path was.",
    "The generator matters more than the sample it produced. Two operators with identical returns can be running very different distributions, one narrow and one carrying a long left tail that has not yet been drawn from. Nothing in the realised record separates them. The idea does weaken where the number of trials is genuinely large and conditions are stable, because there the observed frequency converges on the underlying odds.",
    "So the useful question is not what happened but how much of the distribution the record has covered. A three-year history in a benign regime has sampled very little of it. That does not make the history worthless, it makes it thin, and the response is to widen the evidence: what the approach would have done in periods it did not live through, and what would have to occur for it to fail outright."
  ],
  practical: {
    label: "Example: reconstructing the branches",
    lead: "Before accepting a result as evidence, describe the outcomes that were available and how likely each one was.",
    bullets: [
      "How many of the paths available at the time would have produced this result?",
      "What would the record look like had one early decision gone the other way?",
      "Which parts of the underlying distribution has this history never sampled?",
      "Am I treating one realised path as the whole set of possibilities?",
      "Would I make the same choice again knowing only what was known then?"
    ]
  },
  application:
    "In venture the realised path is unusually thin: a fund holds thirty positions over a decade, in one vintage, one rate environment, one exit window. Attribution of the result to process has to survive the question of what a different window would have produced. The practical habit is to record, at the point of investment, what would have to happen for the position to fail, then read it back at exit.",
  models: ["alternative-histories", "probability", "resulting", "decision-quality"],
  connections: [
    { to: "fbr-monte-carlo", type: "extends" },
    { to: "fbr-lucky-fool", type: "reinforces" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "outcome-bias", type: "reinforces" },
    { to: "probabilistic-thinking", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-lucky-fool", num: 2, book_id: "fbr", category: "learning",
  title: "The Lucky Fool",
  thesis: "Given enough participants, some will succeed on luck alone and be indistinguishable from the skilled.",
  reading_time: 3,
  explanation: [
    "The lucky fool is the operator whose record is excellent and whose method contains no edge. The point is arithmetic rather than moral: run a large enough population through a random process and a predictable number will finish with long winning streaks, described afterwards in the vocabulary of skill. Their success is real. Its cause is not what they, or the people who backed them, believe it to be.",
    "What makes the type hard to identify is that the disguise is not deliberate. The lucky fool holds an account of why the method works, and the account fits every observation available, because the observations came from a regime in which the method happened to pay. The tell is not the return but the reasoning: whether the operator can say which conditions the approach depends on and what would break it.",
    "The regime change is the test and it arrives without notice. When it comes, the loss looks like bad luck and is in fact structural, because the position was never protected against that state. Recognising the pattern earlier means examining the process while the results are still good, which is the moment at which nobody has any appetite for it."
  ],
  practical: {
    label: "Example: separating method from result",
    lead: "Interrogate a strong record by asking what the method assumes about conditions, rather than by admiring the number.",
    bullets: [
      "How large is the population this record was selected from?",
      "Can the operator state the conditions under which the method fails?",
      "Has the record covered a regime change, or only one regime?",
      "Does the explanation of past success predict anything not yet observed?",
      "Would I still back this process if the last three years reversed?"
    ]
  },
  application:
    "Manager selection and founder assessment both run into this. A partner with two decorated exits from a 2013 vintage and an operator who scaled in a zero-rate market may each hold real skill, and neither record demonstrates it. The workable substitute is process evidence: decisions documented before outcomes were known, reasoning that survived being wrong, and a stated account of the conditions the approach needs.",
  models: ["survivorship", "probability", "resulting", "narrative-fallacy"],
  connections: [
    { to: "fbr-survivorship-in-data", type: "reinforces" },
    { to: "fbr-alternative-histories", type: "extends" },
    { to: "tib-luck-vs-skill", type: "reinforces" },
    { to: "survivorship-bias", type: "related" },
    { to: "tmit-role-of-luck", type: "reinforces" }
  ],
  quote: null
},

{
  id: "fbr-probability-vs-expectation", num: 3, book_id: "fbr", category: "decision-making",
  title: "Probability Is Not Expectation",
  thesis: "How often you are right matters far less than how much you make when right.",
  reading_time: 3,
  explanation: [
    "Two quantities get routinely collapsed into one. The first is the probability that an event happens. The second is the expected value of the position, which is that probability multiplied by the size of the outcome, summed across all outcomes. They can point in opposite directions. A position that pays rarely and pays enormously has positive expectation, and a position that wins nine times in ten can carry negative expectation.",
    "The confusion is durable because the frequency of being right is what gets observed and reported, while magnitude is only settled at the end. Most reporting conventions and most conversation reward the hit rate, so the incentive runs toward approaches that look consistent and cost a great deal on the rare occasions they fail. The asymmetry stays invisible for as long as the rare outcome stays absent.",
    "Practically this means splitting two judgements that feel like one. First, what is the chance of each outcome. Second, what does each outcome pay or cost. Someone can hold a correct view of the odds and a badly wrong view of the payoff, and lose money on a bullish view and a bearish one alike, depending only on how the position was structured."
  ],
  practical: {
    label: "Example: pricing the payoff separately",
    lead: "State the odds and the size of each outcome as two separate numbers before deciding anything.",
    bullets: [
      "What is the probability of each outcome, and what does each one pay?",
      "Am I judging this by hit rate or by expected value?",
      "Which outcome, however unlikely, is large enough to dominate the total?",
      "Could I be right about direction and still lose on this structure?",
      "What would make me wrong in a way that is cheap rather than fatal?"
    ]
  },
  application:
    "Venture portfolios are built on this distinction and are often measured against the other one. A fund with a high loss rate can be excellent and a fund with few write-offs can be mediocre, because the total is set by the largest position rather than by the count of positions that worked. It follows that reserve policy and ownership at the point of maximum evidence matter more than the strike rate.",
  models: ["probability", "power-law", "fat-tails", "decision-quality"],
  connections: [
    { to: "fbr-asymmetry", type: "extends" },
    { to: "fbr-rare-events", type: "reinforces" },
    { to: "probabilistic-thinking", type: "extends" },
    { to: "tpl-power-law-returns", type: "reinforces" },
    { to: "tib-bets", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-survivorship-in-data", num: 4, book_id: "fbr", category: "learning",
  title: "Survivorship in the Data",
  thesis: "Any record you can inspect has already been filtered by who survived long enough to be inspected.",
  reading_time: 2,
  explanation: [
    "The samples available for study are not drawn at random. Funds that closed stop reporting, companies that failed stop filing, and the operators who blew up are not on the panel explaining their method. What remains looks like the population and is in fact the upper slice of it, so any statistic computed from it overstates the returns available and understates the variance around them.",
    "The size of the distortion depends on how heavily the filter cuts and on how closely survival is tied to the thing being measured. Where failure is quiet and common, the effect is severe. This is also why the same data teaches the wrong lesson twice over: the survivors' methods appear effective, and the methods of the absent cannot be compared against them at all.",
    "Correcting for it is mostly a matter of asking who is missing before reading anything into an average. Sometimes the failures can be counted even where they cannot be studied, which is enough to reset the base rate. Where they cannot be counted at all, the honest conclusion is that the sample supports a far weaker claim than it appears to."
  ],
  practical: {
    label: "Example: counting the absent",
    lead: "Ask what the sample was filtered on and how many cases dropped out of it before you saw it.",
    bullets: [
      "Who is missing from this data, and why did they leave it?",
      "Is survival in this sample correlated with the thing I am measuring?",
      "Can I count the failures even if I cannot study them?",
      "What would the average look like with the dropouts included?",
      "Is this a base rate, or the base rate for survivors only?"
    ]
  },
  application:
    "Benchmark data in private markets is reported voluntarily, which filters it twice: weak funds stop reporting and dead companies leave the comparable set. Quartile positions and sector multiples built on it drift upward for structural reasons. The available adjustments are to keep failed deals inside your own comparable sets, to treat any external benchmark as an upper bound, and to record the deals you passed alongside those you did.",
  models: ["survivorship", "silent-evidence", "base-rates", "wysiati"],
  connections: [
    { to: "survivorship-bias", type: "extends" },
    { to: "fbr-lucky-fool", type: "reinforces" },
    { to: "fbr-rare-events", type: "related" },
    { to: "base-rates", type: "reinforces" },
    { to: "tfs-wysiati", type: "reinforces" }
  ],
  quote: null
},

{
  id: "fbr-noise-and-signal", num: 5, book_id: "fbr", category: "decision-making",
  title: "Noise and Signal",
  thesis: "Watching a result more often does not inform you more. It mostly increases the noise.",
  reading_time: 3,
  explanation: [
    "Over a period, the expected return of a process grows roughly in proportion to the length of the period, while the dispersion around that return grows in proportion to the square root of it. The ratio between the two therefore falls as the observation window shortens. A record that is clearly positive across a year can be close to a coin toss across a day and indistinguishable from one across a minute.",
    "The consequence is that monitoring frequency changes what you see. Sampled finely, almost every observation is variance, and the person watching accumulates a long series of small emotional events with almost no informational content. Because losses register more sharply than equivalent gains, frequent observation is also net unpleasant even when the underlying process is sound, and the discomfort invites action.",
    "The practical move is to set the observation interval from the horizon of the decision rather than from the availability of the data. If a thesis plays out over five years, monthly marks are not evidence about it. This is not an argument for ignoring information: a fact that changes the thesis is signal at any frequency. What gets discarded is the price series, not the news."
  ],
  practical: {
    label: "Example: setting the interval",
    lead: "Match how often you look at a result to the horizon on which the decision was actually made.",
    bullets: [
      "What is the horizon of this decision, and how often am I checking it?",
      "Does this observation change the thesis, or only the current number?",
      "How much of the variation I am reacting to is dispersion rather than trend?",
      "Am I checking for information or for reassurance?",
      "What is the longest interval at which I would still catch a real problem?"
    ]
  },
  application:
    "Quarterly marks on private positions are mostly a model output, and treating them as performance information imports the noise the asset class was structured to avoid. A more useful cadence separates two streams: operating facts reviewed as they arrive, and valuation reviewed on a fixed schedule against the original underwriting. The first is signal about the business, the second is closer to a bookkeeping exercise.",
  models: ["probability", "loss-aversion", "risk-not-volatility", "narrow-framing"],
  connections: [
    { to: "fbr-not-wired", type: "reinforces" },
    { to: "fbr-hindsight-habit", type: "related" },
    { to: "tmit-cannot-predict", type: "related" },
    { to: "tfs-narrow-framing", type: "reinforces" },
    { to: "temperament", type: "reinforces" }
  ],
  quote: null
},

{
  id: "fbr-hindsight-habit", num: 6, book_id: "fbr", category: "learning",
  title: "The Explaining Habit",
  thesis: "The mind supplies a cause for every outcome, including outcomes that had none.",
  reading_time: 2,
  explanation: [
    "Given a result, we produce an explanation for it quickly and without effort, and the explanation feels like an observation rather than a construction. Market commentary is the clearest case: the same move gets attributed to whichever news item is nearest to hand, and a contrary move on the same day receives the opposite attribution. The story is generated afterwards and fits perfectly because it was built to fit.",
    "This matters because the explanation then does work. Having a cause for the outcome makes the outcome feel foreseeable, which raises confidence in forecasting the next one, and it hides the possibility that the result was variance. The habit is not a failure of intelligence, and expertise tends to make it worse, because a larger stock of plausible causes makes it easier to find one that fits.",
    "The defence is to fix the account before the result arrives. A view written down in advance, with the reasoning attached, cannot be quietly revised by hindsight, and the gap between what was written and what happened is the only reliable measure of whether the reasoning had content in it. Without a record, every past view was approximately correct."
  ],
  practical: {
    label: "Example: writing it down first",
    lead: "Record the reasoning and the expected outcome before the result exists, then compare the two afterwards.",
    bullets: [
      "Did I write this view down before the outcome, or reconstruct it after?",
      "What would I have said had the result gone the other way?",
      "Is this explanation predictive, or does it only fit what already happened?",
      "How many other causes would fit this outcome equally well?",
      "What did I actually believe at the time, in my own words?"
    ]
  },
  application:
    "Post-mortems on failed investments tend to arrive at a cause that was visible in the file all along, which is the habit at work rather than learning taking place. A dated memo stating the thesis, the two or three things that must go right, and the evidence that would change the view converts the exercise into a real comparison. Without one, every loss is explained and no process improves.",
  models: ["narrative-fallacy", "wysiati", "confirmation-bias", "resulting"],
  connections: [
    { to: "fbr-alternative-histories", type: "reinforces" },
    { to: "fbr-humility", type: "extends" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "reinforces" },
    { to: "outcome-bias", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-rare-events", num: 7, book_id: "fbr", category: "investing",
  title: "Rare Events in Track Records",
  thesis: "A strategy's worst outcome may simply not have happened yet, and the record cannot show it.",
  reading_time: 3,
  explanation: [
    "Some strategies carry a loss that occurs rarely and is very large when it occurs. Between appearances the return series looks smooth and the measured volatility looks low, because the event that defines the risk is absent from the sample. The exposure is nonetheless present the whole time, priced into the true distribution of the strategy and missing from the observed one.",
    "Two features make this hard to manage. The rarer the event, the longer the stretch over which the strategy accumulates a reputation for safety, so confidence in it rises as the accumulated exposure rises. And the standard risk measures are computed from realised observations, so the more thoroughly the tail has stayed away, the better those measures look and the more capital they attract.",
    "What can be done is to reason about the structure of the position rather than about its history. Ask what has to happen for it to lose everything, whether that thing is possible rather than whether it has occurred, and how large the loss would be if it did. None of this requires forecasting the event. It requires knowing the shape of the exposure you hold."
  ],
  practical: {
    label: "Example: finding the absent case",
    lead: "Describe the event that would produce the largest loss, then check whether the record contains one.",
    bullets: [
      "What event would cause the largest possible loss on this position?",
      "Has anything like it occurred in the period the record covers?",
      "Is the smooth return series evidence of safety or evidence of absence?",
      "How much of the return is payment for accepting this exposure?",
      "If it happened tomorrow, would the loss be recoverable?"
    ]
  },
  application:
    "Venture portfolios hold correlated tail exposures that a benign decade never reveals: dependence on one funding market, one platform, one regulatory position, one pattern of customer concentration repeated across companies. The useful test runs the whole portfolio through a single adverse state rather than each company through its own risk list, because the losses that end funds arrive together. A per-company register will not surface them.",
  models: ["fat-tails", "silent-evidence", "margin-of-safety", "probability"],
  connections: [
    { to: "fbr-asymmetry", type: "reinforces" },
    { to: "fbr-survivorship-in-data", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "tmit-risk-is-loss", type: "reinforces" },
    { to: "tii-margin-of-safety", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-asymmetry", num: 8, book_id: "fbr", category: "investing",
  title: "Asymmetric Payoffs",
  thesis: "Prefer positions where being wrong is cheap and being right is not capped.",
  reading_time: 3,
  explanation: [
    "If probability and magnitude are separate quantities, then the shape of a payoff can be chosen independently of any forecast. A position with a bounded loss and an open-ended gain has positive expectation across a wide range of assumptions about the odds, which means it does not depend on predicting well. The reverse shape, small reliable gains against a large rare loss, depends on prediction entirely.",
    "The cost of the favourable shape is that it loses most of the time, and the losses are frequent, visible and dull. Holding it requires absorbing a long run of small negatives without treating them as evidence against the position. Most of the difficulty is organisational rather than analytical, because the reporting cycle rewards consistency and punishes exactly this pattern of results.",
    "The shape is also something you can build rather than something you find. Sizing, staging, contractual terms and the point at which further capital is committed all change the payoff without changing the underlying asset. That is the practical content of the idea: where the odds are unknowable, work on the structure, which is knowable, and set the loss before setting the ambition."
  ],
  practical: {
    label: "Example: shaping the exposure",
    lead: "Fix the maximum loss first, then ask how much of the upside the structure actually keeps.",
    bullets: [
      "What is the worst case on this position, and is it capped?",
      "Is the upside bounded by the structure or open ended?",
      "Does this position need me to predict correctly in order to work?",
      "Am I being paid a small premium for accepting a large rare loss?",
      "Which terms would change the shape without changing the price much?"
    ]
  },
  application:
    "Staged investment is the mechanism: a small first cheque caps the loss, information arrives, and pro rata rights preserve access to the upside without committing to it now. The failure mode is inverting the shape by concentrating at the point of maximum consensus and price, where the remaining upside is bounded and the downside is not. Reserve discipline is where the idea is either applied or quietly abandoned.",
  models: ["optionality", "power-law", "margin-of-safety", "probability"],
  connections: [
    { to: "fbr-probability-vs-expectation", type: "extends" },
    { to: "fbr-rare-events", type: "contrasts" },
    { to: "tpl-stage-by-stage", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" },
    { to: "margin-of-safety", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-monte-carlo", num: 9, book_id: "fbr", category: "decision-making",
  title: "Simulating the Alternatives",
  thesis: "If you cannot observe the other histories, generate them and look at the distribution.",
  reading_time: 2,
  explanation: [
    "Simulation is the tool that makes alternative histories tractable. Specify the process, run it many times, and read the range of outcomes it produces rather than the single one that happened to occur. The output is a distribution: how often the process ends well, how often it ends badly, how bad the bad cases become. It replaces the intuition that a good outcome implies a good process.",
    "Its value depends entirely on the assumptions fed into it, and the usual failure is a generator whose tails are too thin, which produces a comfortable distribution and false precision. Simulation is therefore most useful as a device for thinking rather than for measurement: varying one assumption and watching what the range does tells you which assumption the result actually depends on.",
    "A cruder version works without any code. Write out four or five ways the next three years could go, assign rough weights, and check whether the decision looks the same across all of them. Most of the benefit comes from being forced to name several futures rather than one, which is precisely the step that a single-scenario plan skips."
  ],
  practical: {
    label: "Example: running the range",
    lead: "Instead of one forecast, produce several weighted paths and see whether the decision survives all of them.",
    bullets: [
      "What are four or five distinct ways this could unfold?",
      "Roughly how likely is each, and what does each one pay?",
      "Which single assumption moves the range the most?",
      "Does my decision change across the paths, or hold in all of them?",
      "Are the tails wide enough to include events that have already happened?"
    ]
  },
  application:
    "In practice this replaces the single base case with a small set: the plan, a slower version of it, a flat down round, a distressed sale and the outlier. Weight them, then judge the entry price against the weighted result rather than against the plan. The output number matters less than the discipline of pricing the flat and distressed paths, which are the ones a model usually omits.",
  models: ["probability", "alternative-histories", "base-rates", "fat-tails"],
  connections: [
    { to: "fbr-alternative-histories", type: "extends" },
    { to: "fbr-probability-vs-expectation", type: "reinforces" },
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tfs-premortem", type: "related" },
    { to: "tfs-outside-view", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-not-wired", num: 10, book_id: "fbr", category: "people",
  title: "We Are Not Wired for Probability",
  thesis: "Human judgement handles probability badly by default, and knowing this does not fix it.",
  reading_time: 3,
  explanation: [
    "The machinery that produces our judgements developed for a world of immediate, repeated, small-stakes decisions, and it works by pattern and by feeling rather than by calculation. It is fast and usually adequate. It is also insensitive to sample size, drawn to vivid cases over frequent ones, and unable to represent a small probability of a very large outcome, which is exactly the structure that matters most in markets.",
    "Understanding the failure does not remove it. The reasoning arrives after the reaction, and under time pressure or emotional load the reaction wins. Taleb's own position is that the sensible response is not to trust one's rationality but to arrange one's circumstances so that less of it is required: fewer decisions taken while affected, and fewer occasions to react at all.",
    "That reframes the problem as one of design rather than discipline. Rules set in advance, decisions delayed past the moment of arousal, and information consumed at a chosen rather than an available frequency all work by reducing the number of times the machinery is asked to do something it cannot do. Willpower is not the mechanism, and it fails at the worst possible times."
  ],
  practical: {
    label: "Example: designing around the wiring",
    lead: "Assume your judgement degrades under load, and build the decision process so that it matters less.",
    bullets: [
      "Which of my decisions are made while I am reacting to something?",
      "What rule could I set now that removes a future judgement call?",
      "Am I responding to a vivid case or a frequent one?",
      "Where does a small probability of a large loss sit in this decision?",
      "What would I decide about this tomorrow rather than now?"
    ]
  },
  application:
    "Investment committees exist partly for this reason, and they help only where the structure is real: a written memo circulated before discussion, a stated decision rule, a mandatory dissent, and a gap between the meeting that generates enthusiasm and the one that commits capital. Where the process is a formality that ratifies a view already held, it adds confidence without adding judgement, which is worse than none.",
  models: ["dual-process", "probability", "loss-aversion", "wysiati"],
  connections: [
    { to: "fbr-noise-and-signal", type: "reinforces" },
    { to: "fbr-behaving-well", type: "extends" },
    { to: "tfs-two-systems", type: "reinforces" },
    { to: "tib-ulysses-contract", type: "reinforces" },
    { to: "temperament", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-humility", num: 11, book_id: "fbr", category: "learning",
  title: "Epistemic Humility",
  thesis: "The useful skill is knowing which of your beliefs are guesses, and holding them loosely.",
  reading_time: 2,
  explanation: [
    "Humility here is technical rather than a matter of manner. It means keeping track of which parts of a view rest on evidence, which rest on inference and which rest on nothing at all, then being willing to say so at the level of the individual claim. A person can hold a strong position and remain humble about it, provided they can state what would change their mind.",
    "The obstacle is that confidence is rewarded, socially and professionally, and that certainty is easier to communicate than a range. There is a personal cost as well: revising a stated view feels like a loss, and the longer the view has been held in public the larger that cost becomes. So positions get defended well past the point where they are still believed.",
    "The workable version is procedural. Attach a confidence level to claims, name the evidence that would change each one, and treat a changed mind as a completed piece of work rather than an error admitted. What this buys is speed, because the cost of being wrong falls sharply when the position was never overstated in the first place."
  ],
  practical: {
    label: "Example: grading your own claims",
    lead: "Go through the claims behind a view and mark which are evidenced, which inferred and which assumed.",
    bullets: [
      "Which parts of this view are evidence and which are assumption?",
      "How confident am I, stated as a number rather than a feeling?",
      "What specific evidence would change my mind on this?",
      "Have I defended this because I believe it or because I said it?",
      "What is the cost of being wrong here, and who bears it?"
    ]
  },
  application:
    "In diligence this is the difference between a memo asserting that a market will grow and one marking which claims are verified, which come from management and which are the author's own guess. The second reads better at committee and far better two years later, because it identifies where the thesis was thin and therefore what actually needs monitoring once the money is committed.",
  models: ["circle-of-competence", "confirmation-bias", "probability", "decision-quality"],
  connections: [
    { to: "fbr-hindsight-habit", type: "reinforces" },
    { to: "fbr-not-wired", type: "reinforces" },
    { to: "tib-not-sure", type: "reinforces" },
    { to: "circle-of-competence", type: "related" },
    { to: "tfs-illusion-validity", type: "related" }
  ],
  quote: null
},

{
  id: "fbr-behaving-well", num: 12, book_id: "fbr", category: "people",
  title: "Behaving Well Under Randomness",
  thesis: "You cannot control outcomes, so the standard worth holding yourself to is your conduct.",
  reading_time: 2,
  explanation: [
    "If results are heavily influenced by chance, the thing an operator fully owns is how they behave: the quality of the process, the honesty of the account they give of it, and the dignity with which a bad run is absorbed. Taleb makes this the closing point of the book rather than an aside, because it is what remains once you accept that the outcome was never wholly yours.",
    "This is not offered as consolation. It has a practical edge, because behaviour during a bad run determines whether there is a next run: whether investors stay, whether the reasoning is preserved for later review, whether the operator remains able to think clearly. The most expensive damage from a losing period is usually the decision taken to end the discomfort of it.",
    "The matching discipline in good periods is not attributing the result entirely to oneself, which is harder and matters more, because the belief formed during a winning run sets the position size that the next regime will test. Behaving well means the same standard of self-description in both directions, and the same willingness to be judged on process."
  ],
  practical: {
    label: "Example: conduct in a bad run",
    lead: "Decide in advance how you will describe and handle a losing period, before you are inside one.",
    bullets: [
      "Am I judging myself on the outcome or on what I controlled?",
      "What have I decided to do differently, and on what evidence?",
      "Is this change a correction or a reaction to discomfort?",
      "How am I describing the good run, and to whom?",
      "Would I be comfortable if my reasoning here were read back later?"
    ]
  },
  application:
    "The test lands on how a fund communicates a difficult vintage. Reporting that names what was misjudged, separates it from what was environment, and states what has changed in the process holds investor confidence better than either optimism or silence, and it preserves the record needed to learn anything at all. The same standard applied to a strong vintage stops a fund mispricing its own skill.",
  models: ["decision-quality", "resulting", "enough", "alternative-histories"],
  connections: [
    { to: "fbr-lucky-fool", type: "contrasts" },
    { to: "fbr-humility", type: "reinforces" },
    { to: "temperament", type: "reinforces" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "learning-from-mistakes", type: "related" }
  ],
  quote: null
}

);
