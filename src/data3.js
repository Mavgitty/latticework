/* Ideas 19-27 */
window.DB.ideas.push(

{
  id: "probabilistic-thinking", num: 19, book_id: "pca", category: "decision-making",
  title: "Probabilistic Thinking",
  thesis: "Decisions are bets. Think in odds and distributions rather than single predictions.",
  reading_time: 3,
  explanation: [
    "A forecast expressed as a single outcome hides the thing that matters. Two decisions can share the same expected value while one has a distribution you can live with and the other has a tail that ends you. Only the distribution tells you which is which.",
    "Working in probabilities also makes you accountable in a way narratives do not. A stated 30% is checkable across enough decisions. \"This is a strong opportunity\" is not, and cannot be improved because it was never wrong.",
    "The habit is unnatural but shallow. Attaching rough numbers to the two or three ways a decision can go, and multiplying rather than describing, gets most of the benefit without any formal apparatus. The precision is spurious; the structure is not."
  ],
  practical: {
    label: "Example: pricing a venture outcome",
    lead: "Write the outcome bands and their weights, then check whether the expected value actually clears the hurdle.",
    bullets: [
      "10% chance of a 15x outcome contributes 1.5x",
      "20% chance of a 3x outcome contributes 0.6x",
      "30% chance of a 1x return of capital contributes 0.3x",
      "40% chance of a total loss contributes nothing",
      "Expected value is roughly 2.4x, which fails a 4x hurdle, and the fix is either a lower entry price or a genuine reason to move the top band"
    ]
  },
  application:
    "Venture returns are driven by the top band, so the honest question is not whether the company is good but whether the outsized outcome is plausible and how much weight it can carry. Writing the bands down at entry also creates the record you need later to distinguish a bad decision from a bad draw.",
  models: ["probability", "base-rates", "margin-of-safety", "compounding"],
  connections: [
    { to: "base-rates", type: "reinforces" },
    { to: "outcome-bias", type: "reinforces" },
    { to: "margin-of-safety", type: "related" },
    { to: "avoiding-ruin", type: "extends" },
    { to: "regression-to-the-mean", type: "related" }
  ],
  quote: {
    text: "If you don't get this elementary, but mildly unnatural, mathematics of elementary probability into your repertoire, then you go through a long life like a one-legged man in an ass-kicking contest.",
    attribution: "Charlie Munger, A Lesson on Elementary, Worldly Wisdom, USC Business School, 1994",
    why: "The claim is about a low bar rather than a high one. Munger is not asking for statistical sophistication; he is pointing out that basic expected-value arithmetic is both unnatural to humans and cheap to acquire, which makes skipping it an unusually poor trade."
  }
},

{
  id: "base-rates", num: 20, book_id: "pca", category: "decision-making",
  title: "Base Rates",
  thesis: "Start with how often this kind of thing works, then adjust for the specifics.",
  reading_time: 2,
  explanation: [
    "Every case feels unique because you can see its detail, and the detail is compelling. The statistical history of similar cases is abstract, unavailable to memory, and a far better starting estimate than the story in front of you.",
    "The correct procedure is to take the outside view first: what happens to companies of this type, at this stage, in this market, on average? Then move from that anchor on the strength of the specific evidence, and move less than you want to.",
    "This is not a counsel of pessimism. It is a counsel of starting in the right place. If 10% of companies at this stage reach the outcome being underwritten, the specific case has to justify why it belongs in that 10%, and the answer has to be something other than the founder's confidence."
  ],
  practical: {
    label: "Example: the outside view first",
    lead: "Build the estimate in two steps, in this order.",
    bullets: [
      "Step one: what proportion of companies like this achieve the outcome I am underwriting?",
      "Step two: what specifically about this one moves it away from that rate?",
      "Is that specific factor causally connected to the outcome, or merely impressive?",
      "How many comparable cases am I drawing the base rate from?",
      "Would the founder's plan look unusual against the population, or standard?"
    ]
  },
  application:
    "Base rates are the cheapest available correction to venture optimism. The proportion of seed companies reaching a given revenue level, the share of Series A companies raising a B, and median time between rounds are all knowable and rarely written into the memo. Stating the base rate before the thesis makes the thesis do real work.",
  models: ["base-rates", "probability", "regression", "survivorship"],
  connections: [
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "regression-to-the-mean", type: "extends" },
    { to: "survivorship-bias", type: "related" },
    { to: "availability-bias", type: "contrasts" },
    { to: "outcome-bias", type: "related" }
  ],
  quote: null
},

{
  id: "survivorship-bias", num: 21, book_id: "pca", category: "decision-making",
  title: "Survivorship Bias",
  thesis: "You only see the survivors, so success looks more likely and more explicable than it was.",
  reading_time: 2,
  explanation: [
    "Any sample assembled from visible outcomes has already been filtered. The companies that failed do not present at conferences, the funds that closed do not report returns, and the founders who followed the same playbook into the ground do not write books about it.",
    "This distorts causal reasoning specifically. If you study only winners, every trait they share looks like a cause, including the traits they share with the losers you cannot see. Boldness looks like a success factor when the reckless failures are missing from the data.",
    "The correction is to go looking for the missing sample. Ask who else did this and where they are now, and treat any strategy whose evidence consists entirely of successful practitioners as untested."
  ],
  practical: {
    label: "Example: finding the missing cases",
    lead: "Before accepting a pattern from the winners, locate the companies that had the same trait and failed.",
    bullets: [
      "Who else pursued this strategy in this market, and what happened to them?",
      "Is this trait present in the failures too, which would make it uninformative?",
      "Where does the data in this benchmark come from, and who is excluded from it?",
      "Am I reasoning from a sample of one because the others are invisible?",
      "What would the same analysis conclude if the failed cohort were included?"
    ]
  },
  application:
    "Sector benchmarks are frequently built from companies still operating, which biases retention, growth and efficiency figures upward. The same applies to advice from successful founders, who are describing a path that also swallowed a large number of similar attempts. Both are usable once you know which direction the bias runs.",
  models: ["survivorship", "base-rates", "probability", "regression"],
  connections: [
    { to: "base-rates", type: "reinforces" },
    { to: "outcome-bias", type: "related" },
    { to: "availability-bias", type: "related" },
    { to: "regression-to-the-mean", type: "related" },
    { to: "learning-from-mistakes", type: "extends" }
  ],
  quote: null
},

{
  id: "feedback-loops", num: 22, book_id: "pca", category: "strategy",
  title: "Feedback Loops",
  thesis: "Outputs feed back into inputs. Find the loop and you understand the system.",
  reading_time: 3,
  explanation: [
    "Systems are rarely linear chains. In a reinforcing loop, more produces more: satisfied customers refer others, who become satisfied customers. In a balancing loop, the system resists change and returns toward a set point, which is why so many well-intentioned interventions produce nothing.",
    "The important consequence is timing. Reinforcing loops start slow and look unimpressive for a long period before they look inevitable, so they are systematically underestimated early and overestimated late. Balancing loops make a business feel stuck no matter how much effort is applied, and effort is not the missing input.",
    "The other consequence is delay. When feedback arrives late, actors respond to conditions that no longer exist, which produces oscillation. Hiring booms and busts, inventory cycles and venture funding waves are all the same structure with different labels."
  ],
  practical: {
    label: "Example: locating the loop",
    lead: "Ask what in this business makes the next unit of growth easier or harder than the last.",
    bullets: [
      "Does each new customer make the product better for the next one?",
      "Does each new customer make acquisition more expensive, by exhausting the cheap channel?",
      "How long is the delay between an action and its visible effect?",
      "What is holding the system at its current level despite the effort applied?",
      "If the loop reversed, how fast would it unwind?"
    ]
  },
  application:
    "Reinforcing loops are what distinguish a compounding business from a growing one. Referral-driven acquisition, data that improves the product, and content that accumulates search authority all get cheaper with scale. Paid acquisition into a fixed market is a balancing loop wearing a growth costume, and the diligence question is which of the two you are funding.",
  models: ["feedback-loops", "compounding", "second-order", "critical-mass"],
  connections: [
    { to: "compounding", type: "reinforces" },
    { to: "second-order-effects", type: "extends" },
    { to: "critical-mass", type: "related" },
    { to: "scale-economies", type: "related" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "critical-mass", num: 23, book_id: "pca", category: "strategy",
  title: "Critical Mass",
  thesis: "Some systems do nothing until a threshold is crossed, then change state quickly.",
  reading_time: 2,
  explanation: [
    "Not all processes are gradual. Below a threshold nothing propagates, and just above it the same input produces a self-sustaining reaction. The behaviour on either side of the line is qualitatively different, not merely different in degree.",
    "Businesses with network or liquidity dynamics work this way. A marketplace with too few sellers is useless to buyers and therefore attracts none, which is why the pre-threshold period looks like failure and the post-threshold period looks like genius, with the same team and the same product.",
    "Munger's related point is about confluence: several forces arriving together produce an outcome far larger than the sum of the individual effects. Which means the honest question is often not whether one factor is present but whether enough of them are present at once."
  ],
  practical: {
    label: "Example: is the threshold reachable?",
    lead: "For any network business, establish what the threshold is and whether the capital on the table can reach it.",
    bullets: [
      "What is the minimum liquidity that makes this useful without subsidy?",
      "Is that threshold defined per geography, per category, or globally?",
      "Does the current raise fund reaching it, or only approaching it?",
      "What happens to the business if it stalls just below the line?",
      "Has any comparable player crossed it, and what did it cost them?"
    ]
  },
  application:
    "Threshold businesses are the ones where a partial round is worse than no round, because a marketplace stranded below liquidity has spent the money and kept none of the advantage. Where you can identify a threshold, size the cheque to clear it or decline, rather than funding an experiment that cannot conclude.",
  models: ["critical-mass", "feedback-loops", "scale-economies", "compounding"],
  connections: [
    { to: "feedback-loops", type: "reinforces" },
    { to: "scale-economies", type: "related" },
    { to: "avoiding-ruin", type: "related" },
    { to: "compounding", type: "related" },
    { to: "social-proof", type: "related" }
  ],
  quote: null
},

{
  id: "scale-economies", num: 24, book_id: "pca", category: "strategy",
  title: "Scale Economies",
  thesis: "Size changes unit costs and competitive position, in both directions.",
  reading_time: 3,
  explanation: [
    "Some advantages grow with size. Fixed costs spread over more units, purchasing power improves, brand recognition compounds, and information advantages accumulate. Where this holds, the largest player can be simultaneously the cheapest and the most profitable, which is a very hard structure to attack.",
    "Not all costs behave this way. Coordination overhead, bureaucracy, cultural dilution and slower decision-making all increase with size, and in businesses where the product is judgement or craft the diseconomies can dominate. Scale is not automatically an advantage; it is an advantage in specific cost structures.",
    "The practically useful move is to ask which costs in this particular business fall with volume and which rise. Software distribution falls. Bespoke professional services largely do not, which is why services businesses hit a ceiling that looks like a management problem and is actually a structural one."
  ],
  practical: {
    label: "Example: which way do the costs run?",
    lead: "Decompose the cost base rather than assuming scale helps.",
    bullets: [
      "What proportion of delivery cost is fixed versus per-customer?",
      "Does gross margin improve with cohort size, historically, in this company's own numbers?",
      "Does customer acquisition cost fall with brand, or rise with channel saturation?",
      "Where does headcount grow faster than revenue, and why?",
      "Is the advantage scale itself, or something correlated with having got there first?"
    ]
  },
  application:
    "Scale advantage is one of the more testable claims in a pitch, because the company's own cohort data will show whether unit economics improve with volume. If gross margin is flat across three years of growth, the scale story is a hypothesis rather than a fact, and it should be priced as one.",
  models: ["scale-economies", "compounding", "feedback-loops", "specialisation"],
  connections: [
    { to: "compounding", type: "related" },
    { to: "critical-mass", type: "related" },
    { to: "specialisation", type: "contrasts" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "second-order-effects", type: "related" }
  ],
  quote: null
},

{
  id: "specialisation", num: 25, book_id: "pca", category: "learning",
  thesis: "Depth in a narrow area beats shallow coverage of a wide one.",
  title: "Specialisation",
  reading_time: 2,
  explanation: [
    "Concentrated practice in a defined area produces a quality of judgement that breadth cannot reach. The specialist has seen the same situation enough times to recognise the variant, and that recognition is not reproducible by intelligence applied fresh.",
    "There is real tension here with multidisciplinary thinking, and it is worth holding both rather than resolving it. Breadth supplies the models you reason with; depth supplies the domain where your judgement is actually reliable. The productive shape is broad reading and narrow betting.",
    "Specialisation also has a defined risk. A narrow niche can be eliminated by a shift in technology or regulation, and the specialist is the last to see it because the tools that made them expert are the same tools that make the change look like noise."
  ],
  practical: {
    label: "Example: broad models, narrow bets",
    lead: "Separate where you read widely from where you commit capital.",
    bullets: [
      "In which two or three areas is my judgement genuinely above average?",
      "Am I reading broadly to acquire models, or to justify entering new domains?",
      "What would make my area of depth obsolete, and would I notice early?",
      "Is the specialist advantage in the domain, or in the specific network within it?",
      "Where am I paying a beginner's tuition without acknowledging it?"
    ]
  },
  application:
    "A focused mandate is an underrated source of edge, because repeated exposure to one category builds pattern recognition, proprietary comparisons and a network that generalists cannot assemble. The corresponding discipline is honesty about the boundary, which is where specialisation and circle of competence become the same instruction.",
  models: ["specialisation", "circle-of-competence", "compounding", "opportunity-cost"],
  connections: [
    { to: "circle-of-competence", type: "reinforces" },
    { to: "multidisciplinary-thinking", type: "contrasts" },
    { to: "scale-economies", type: "related" },
    { to: "selectivity", type: "related" },
    { to: "compounding", type: "related" }
  ],
  quote: null
},

{
  id: "regression-to-the-mean", num: 26, book_id: "pca", category: "learning",
  title: "Regression to the Mean",
  thesis: "Extreme results contain luck, and luck does not repeat.",
  reading_time: 2,
  explanation: [
    "Any observed outcome combines skill and chance. The most extreme results are the ones where chance contributed most in the same direction as skill, so the next observation of the same skill will usually be less extreme. Nothing needs to have changed for performance to fall.",
    "This produces a durable illusion of causation. Intervene after any extreme bad result and things improve; intervene after an extreme good one and things get worse. The intervention gets the credit or blame either way, which is how ineffective management practices persist for decades.",
    "It also means hiring, buying or promoting on the strength of a single exceptional year is buying the luck component at full price. The more extreme the result, the more of it is likely to be transient."
  ],
  practical: {
    label: "Example: reading a spectacular year",
    lead: "Decompose the result before extrapolating it.",
    bullets: [
      "How much of this performance is repeatable process and how much is favourable conditions?",
      "What is this person or company's multi-year average, not their best year?",
      "Was there a one-off: a large contract, a market dislocation, a competitor's mistake?",
      "Am I paying a multiple on the peak or on the trend?",
      "Would I still want this if next year came in 30% below?"
    ]
  },
  application:
    "Underwriting off a single exceptional year is the most common valuation error in growth investing, because the exceptional year is what triggered the process. Normalising to a multi-year trend, and asking what specifically made the peak year peak, usually changes the price materially and occasionally changes the answer.",
  models: ["regression", "base-rates", "probability", "survivorship"],
  connections: [
    { to: "base-rates", type: "reinforces" },
    { to: "outcome-bias", type: "related" },
    { to: "survivorship-bias", type: "related" },
    { to: "social-proof", type: "extends" },
    { to: "probabilistic-thinking", type: "related" }
  ],
  quote: {
    text: "Mimicking the herd invites regression to the mean (merely average performance).",
    attribution: "Charlie Munger, Investing Principles Checklist, Poor Charlie's Almanack",
    why: "Munger connects two ideas in one line: copying consensus behaviour does not just fail to produce an edge, it actively converges your result toward average. Average, after costs, is a losing position."
  }
},

{
  id: "antidotes", num: 27, book_id: "pca", category: "learning",
  title: "Antidotes to Human Misjudgment",
  thesis: "Biases cannot be willed away, so build procedures that catch them.",
  reading_time: 3,
  explanation: [
    "Knowing about a bias does very little to stop it. The tendencies are fast and automatic, and by the time a judgement reaches conscious inspection it arrives already formed, with reasons attached. Awareness helps you recognise the error afterwards, which is not the same as avoiding it.",
    "What does work is external structure: checklists that must be completed, criteria set before exposure, a named person assigned to argue the other side, and a written record made in advance. These work because they do not rely on the state of mind you happen to be in when the decision arrives.",
    "The wider principle is a bias toward not being stupid rather than toward being clever. Removing standard errors is unglamorous, has no upside story attached, and is reliably available, which is a better combination than most sources of edge."
  ],
  practical: {
    label: "Example: a practical checklist",
    lead: "Five procedures that do not depend on your mood.",
    bullets: [
      "Write kill criteria before diligence begins and read them back at the end verbatim",
      "Assign a devil's advocate with real time and no penalty for prevailing",
      "State a base rate and a probability estimate in every memo",
      "Set your own price before you see theirs",
      "Record the thesis at entry so the eventual review can grade the decision, not the outcome"
    ]
  },
  application:
    "Most institutional investment processes already contain these steps nominally and skip them under time pressure, which is precisely when they matter. Making the checklist a gate rather than a document, so a deal cannot proceed without it, is the difference between having a process and having a description of one.",
  models: ["inversion", "confirmation-bias", "probability", "base-rates"],
  connections: [
    { to: "inversion", type: "reinforces" },
    { to: "confirmation-bias", type: "contrasts" },
    { to: "learning-from-mistakes", type: "extends" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "temperament", type: "related" }
  ],
  quote: {
    text: "It is remarkable how much long-term advantage people like us have gotten by trying to be consistently not stupid, instead of trying to be very intelligent.",
    attribution: "Charlie Munger",
    source_note: "Consistently attributed to Munger and never credibly to Buffett, but no primary venue has been established.",
    why: "This is the thesis of the whole method. The claim is that error removal compounds more reliably than insight generation, because avoiding standard mistakes is repeatable and brilliance is not."
  }
}

);
