/* The Halo Effect — Phil Rosenzweig — 7 ideas */
window.DB.ideas.push(

{
  id: "halo-the-halo-effect", num: 1, book_id: "halo", category: "learning",
  title: "The Halo Effect",
  thesis: "A general impression of performance colours the assessment of every specific attribute said to produce it.",
  reading_time: 3,
  explanation: [
    "Rosenzweig borrows the halo effect from social psychology, where one global impression of a person contaminates ratings of traits that were never observed. Applied to companies, the mechanism is the same. Once performance is known, ratings of culture, leadership, customer focus and execution follow from it, because the result is the most available evidence about everything else. Respondents are not lying. They are inferring the parts from the whole, which is what people do when the whole is easier to see.",
    "The diagnostic is that attributes change name when results change. A culture praised as focused and disciplined in the good years is described as rigid and insular after two poor quarters, with no evidence that anyone behaved differently. Rosenzweig traces this through the press coverage of Cisco, ABB and Nokia, where the same practices were reported first as strengths and later as causes of decline. The behaviour was never measured. The result was, and the description followed.",
    "That contamination reaches almost every source on intangibles, because the intangibles are measured by asking people who already know how the company is doing. Employee engagement scores, customer satisfaction, journalist assessment and manager recollection are all collected after the fact. The correlation they produce between good practice and good performance is partly one variable counted twice, which is why it looks so much stronger than anything you can act on."
  ],
  practical: {
    label: "Example: reading a company profile",
    lead: "Take any admiring account of a company and ask what was actually observed rather than inferred from the result.",
    bullets: [
      "Was this attribute measured before the results were known, or after?",
      "Who supplied the rating, and did they know how the company was performing?",
      "Would the same behaviour be described this way if the numbers were poor?",
      "Which words in this profile are observations and which are compliments?",
      "Is any practice here described identically at a company that failed?"
    ]
  },
  application:
    "The practical exposure for an investor sits in reference calls and management assessment. A customer of a fast-growing company describes the account team as responsive, and a customer of a struggling one calls the same response times slow. Both are reporting an overall impression. The way through is to ask for specific events with dates and numbers, since those survive the halo, and to treat adjectives about culture and leadership as data about the respondent's view of performance.",
  models: ["halo-effect", "wysiati", "confirmation-bias", "narrative-fallacy"],
  connections: [
    { to: "halo-correlation-causality", type: "extends" },
    { to: "halo-rigorous-research", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "related" },
    { to: "tfs-wysiati", type: "reinforces" },
    { to: "confirmation-bias", type: "related" }
  ],
  quote: null
},

{
  id: "halo-correlation-causality", num: 2, book_id: "halo", category: "decision-making",
  title: "Correlation and Causality",
  thesis: "Two things moving together does not tell you which one is moving the other.",
  reading_time: 3,
  explanation: [
    "The standard finding is that employee satisfaction and company performance correlate, and the standard conclusion is that satisfied employees produce good results. The correlation is real and the direction is an assumption. Working at a company that is winning, with rising share prices, expanding budgets and options worth something, is pleasant. The satisfaction may be the result and the performance the cause, and a snapshot of both cannot separate the two readings.",
    "Rosenzweig's objection is not that satisfaction never helps but that the studies used to prove it are almost all cross-sectional. High scores measured at high performers are compatible with either arrow, and with a third factor driving both. The published claim consistently chooses the arrow that yields a management prescription, because that is the version anyone will pay to read.",
    "What would settle it is harder work. Measure the attribute before the performance appears, track the same firms through a reversal of fortune, or find a shock that hits one variable and not the other. These designs exist in economics and are rare in business research. Without one of them the honest statement is that the two travel together and the direction is unknown."
  ],
  practical: {
    label: "Example: which way does the arrow point?",
    lead: "For any claimed driver of performance, ask whether the reverse causation is at least as plausible as the stated one.",
    bullets: [
      "Could good results be producing this attribute rather than the other way round?",
      "Was the attribute measured before the performance, or at the same time?",
      "Is there a third factor that would comfortably produce both?",
      "Has anyone tracked these firms through a downturn in the same terms?",
      "Does the claimed direction happen to be the one that sells advice?"
    ]
  },
  application:
    "This is the most common defect in diligence narratives about culture and process. A company presents its Glassdoor scores, its low attrition and its net promoter score, all measured while revenue was compounding. Each is at least as likely to be an effect of growth as a cause of it. The test is whether the attribute was visible before the growth arrived, which is why the most informative reference is often a former employee from a flat year.",
  models: ["halo-effect", "second-order", "feedback-loops", "probability"],
  connections: [
    { to: "halo-the-halo-effect", type: "extends" },
    { to: "halo-single-explanations", type: "related" },
    { to: "tbs-narrative-fallacy", type: "reinforces" },
    { to: "second-order-effects", type: "related" },
    { to: "feedback-loops", type: "related" }
  ],
  quote: null
},

{
  id: "halo-single-explanations", num: 3, book_id: "halo", category: "decision-making",
  title: "Single Explanations",
  thesis: "Overlapping factors each credited with the whole effect produce explanations that sum to more than the result.",
  reading_time: 2,
  explanation: [
    "Studies routinely report that a strong culture explains a large share of the variation in performance, and separately that customer focus explains a large share, and separately that leadership does. Read together, the shares exceed the variation available to be explained. The factors are not independent of one another. Firms with strong cultures tend also to have engaged leadership and satisfied customers, so each study is measuring a good deal of the same underlying thing.",
    "The consequence is that any single-factor claim overstates its factor. Isolating a contribution requires modelling the factors together, which shrinks each one and sometimes removes it. Almost no popular business research does this, because the interesting finding is the large one, and the method that produces a large number is the method that leaves the other factors out of the model.",
    "This compounds with the halo. The factors are correlated with each other and they are also all measured through the same impression of performance, so their shared component is partly the outcome itself. Adding more explanatory variables of that kind does not decompose the result, it restates it under different names. The list of drivers grows and the explanation does not improve."
  ],
  practical: {
    label: "Example: auditing a list of drivers",
    lead: "When a memo lists several reasons a company wins, test whether the reasons are actually separate from each other.",
    bullets: [
      "Are these factors independent, or different names for one thing?",
      "If each explains what it claims, does the total exceed the result?",
      "Which single factor would I keep if forced to choose one?",
      "Has anyone estimated these together rather than one at a time?",
      "Would a company with only this factor and none of the others succeed?"
    ]
  },
  application:
    "Investment memos accumulate reasons because each one survives review, and a long list reads as thorough. The problem is that the reasons are usually one advantage described five ways, so the argument looks diversified while resting on a single point. Forcing the list down to the one or two mechanisms that could each carry the case alone is a better test of a thesis than lengthening it, and it shows immediately when there is only one.",
  models: ["halo-effect", "base-rates", "probability", "second-order"],
  connections: [
    { to: "halo-correlation-causality", type: "extends" },
    { to: "halo-rigorous-research", type: "reinforces" },
    { to: "base-rates", type: "related" },
    { to: "tfs-illusion-validity", type: "reinforces" },
    { to: "lbbw-not-moats", type: "related" }
  ],
  quote: null
},

{
  id: "halo-winning-dots", num: 4, book_id: "halo", category: "learning",
  title: "Connecting the Winning Dots",
  thesis: "Studying only successes cannot identify what caused success, because the failures did most of the same things.",
  reading_time: 3,
  explanation: [
    "The dominant method in business writing is to select companies that performed well, look for what they share, and present the shared features as causes. The design cannot work. Any feature common to successful firms may be equally common among the ones that disappeared, and since the failures were never sampled, there is no way to find out. A practice present in every winner carries no information until the losers have been checked.",
    "Rosenzweig's targets include the best-known examples of the genre, whose chosen companies went on to perform ordinarily or badly within a few years of publication. That is what regression looks like when a sample has been selected on an extreme outcome. The features identified were partly the ordinary practices of large firms and partly the residue of a good run, and neither travels well to a reader trying to copy them.",
    "The library already carries the general form of this error. Rosenzweig's contribution is the specific machinery of business research: how the sample gets chosen, what dependence on interview access does to the answers, and why a book of this kind must end with a formula in order to sell. It is the same bias operating at industrial scale, run by people with a commercial reason not to notice it."
  ],
  practical: {
    label: "Example: finding the missing sample",
    lead: "Before accepting a list of practices drawn from winners, construct the comparison group the author left out.",
    bullets: [
      "Which failed companies also had this practice, and how many?",
      "How were the successful companies selected, and over what period?",
      "What happened to these companies in the ten years after selection?",
      "Is this practice simply what large firms in this industry do?",
      "What would this study have to look like to be conclusive?"
    ]
  },
  application:
    "Pattern-matching from a portfolio's winners is the same design at a smaller sample size. The three best outcomes shared a founder profile, a go-to-market motion and a board structure, and so did four of the write-offs, which nobody revisits when the pattern is written up. Keeping the losses in the sample while deriving a thesis costs nothing and removes most of the false patterns. Purchased case studies carry the identical defect with better prose.",
  models: ["survivorship", "silent-evidence", "base-rates", "narrative-fallacy"],
  connections: [
    { to: "halo-the-halo-effect", type: "reinforces" },
    { to: "halo-relative-performance", type: "related" },
    { to: "survivorship-bias", type: "extends" },
    { to: "tbs-silent-evidence", type: "extends" },
    { to: "fbr-survivorship-in-data", type: "reinforces" }
  ],
  quote: null
},

{
  id: "halo-rigorous-research", num: 5, book_id: "halo", category: "learning",
  title: "The Delusion of Rigorous Research",
  thesis: "Volume of data does not repair data that is contaminated at the point of measurement.",
  reading_time: 2,
  explanation: [
    "The credibility of business research usually rests on scale: thousands of survey responses, decades of records, hundreds of interviews. Rosenzweig's objection is that quantity answers the wrong worry. Sample size reduces random error and does nothing at all about systematic error, and the halo, the reversed arrow and the selected sample are all systematic. Multiplying a contaminated measure produces a tighter estimate of the wrong number.",
    "Presentation makes this worse. Volume licenses confident language, confident language attracts citation, and the least sound findings can therefore become the most repeated. Readers assess rigour by the visible markers, which are effort and size, rather than by the design of the measurement, which is where the failure sits and which is rarely described in enough detail to be checked at all.",
    "The useful question is about the measurement rather than the sample. What exactly was recorded, by whom, and at what point relative to the outcome being explained? A study of forty firms with attributes captured before performance was known is worth more than one of four thousand captured afterwards, and the second will always look the more impressive of the two."
  ],
  practical: {
    label: "Example: testing a study's rigour",
    lead: "Judge research by how each variable was captured, not by how much of it there is.",
    bullets: [
      "What was measured directly, and what was inferred from the outcome?",
      "When was each variable recorded relative to the performance it explains?",
      "Does more data here reduce random error or systematic error?",
      "Would the finding survive if the sample were half as large but clean?",
      "Is the confident language supported by the design or by the volume?"
    ]
  },
  application:
    "Diligence has the same failure mode. Twenty reference calls arranged by the company are not better evidence than five sourced independently, and a data room of two hundred documents can be less informative than one cohort file rebuilt from raw records. The count of calls and documents is the easy number to report to an investment committee, which is precisely why it should not become the measure of how much has actually been established.",
  models: ["wysiati", "base-rates", "survivorship", "checklist"],
  connections: [
    { to: "halo-winning-dots", type: "reinforces" },
    { to: "halo-correlation-causality", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "extends" },
    { to: "tbs-expert-problem", type: "related" },
    { to: "fbr-noise-and-signal", type: "related" }
  ],
  quote: null
},

{
  id: "halo-relative-performance", num: 6, book_id: "halo", category: "strategy",
  title: "Absolute and Relative Performance",
  thesis: "Improving in absolute terms can still mean losing, because results are settled relative to competitors.",
  reading_time: 2,
  explanation: [
    "Company performance is not a score against a fixed standard, it is a position in a contest. A firm can raise productivity, cut costs and improve its product every year and lose share throughout, because rivals moved faster on the same dimensions. This is one reason studies that regress performance on internal practices explain less than expected: the practices are real, and the outcome depends on what everyone else did with theirs.",
    "Rosenzweig uses Kmart against Wal-Mart. Kmart's logistics and systems improved substantially through the years in which it was destroyed. Judged against its own past it was a company getting better at retail. Judged in the only way that determines survival, it was falling behind steadily. Any account of the decline written as a list of internal failures misses the structure of what happened to it.",
    "The implication for anyone taking advice from research is uncomfortable. If the payoff depends on relative position, then a practice everyone adopts cannot produce advantage, and widely published best practice is by definition the version everyone now has. Improvement available to all competitors is a cost of remaining in the industry rather than a source of return within it."
  ],
  practical: {
    label: "Example: measuring against the field",
    lead: "Assess progress against the competitors' rate of progress, not against the company's own prior year.",
    bullets: [
      "How fast is this company improving compared with its closest two rivals?",
      "Is share rising, flat or falling while the internal metrics improve?",
      "Which of these improvements are available to every competitor?",
      "What would a rival have to do to make this gain worthless?",
      "Am I judging this business against its past or against its field?"
    ]
  },
  application:
    "Company updates report internal series, since those are the numbers a company controls and they usually rise. Growth of sixty per cent is a different proposition in a market growing at thirty than in one growing at a hundred, and the second case is a business losing a race while reporting a good year. Asking each quarter for win rates and a share estimate keeps the relative frame in view when the absolute one looks favourable.",
  models: ["five-forces", "barriers-to-entry", "second-order", "regression"],
  connections: [
    { to: "halo-the-halo-effect", type: "related" },
    { to: "halo-strategy-as-bets", type: "extends" },
    { to: "pcs-rivalry", type: "reinforces" },
    { to: "s7p-power", type: "related" },
    { to: "lbbw-moat-erosion", type: "related" }
  ],
  quote: null
},

{
  id: "halo-strategy-as-bets", num: 7, book_id: "halo", category: "decision-making",
  title: "What Is Left",
  thesis: "Strip out the delusions and strategy and execution remain as bets under uncertainty rather than formulas.",
  reading_time: 3,
  explanation: [
    "Rosenzweig is not arguing that management does not matter. He is arguing that its effect is probabilistic, and that the effect is smaller than the literature claims because much of the apparent size is the outcome reflected back into the explanation. Strategy consists of choices about customers, markets and capabilities, made on poor information against opponents who are choosing at the same time. That is a description of a bet.",
    "Two consequences follow. The first is that sound decisions produce bad outcomes at a rate high enough to matter, so managers have to be assessed on the reasoning available to them at the time rather than on the result. The second is that the search for a formula is misconceived. A reliable formula, once published, would be adopted widely enough to remove the advantage it described.",
    "What survives is modest and usable. Think in probabilities, prefer choices whose downside is survivable, decide with the information that exists instead of waiting for certainty, and accept that a competent process will still lose sometimes. This reads as a disappointment only against the promise the genre made. Against the alternative of copying a formula derived from survivors, it is a considerable improvement."
  ],
  practical: {
    label: "Example: judging a management team",
    lead: "Assess the decisions a team made against what was knowable at the time, rather than against how they turned out.",
    bullets: [
      "What did this team know when the decision was taken?",
      "Which competitors were making the opposite bet, and why?",
      "Was the downside of this choice survivable if it failed?",
      "Am I crediting a good outcome to a decision I have not examined?",
      "How would I judge the same reasoning if the result had been poor?"
    ]
  },
  application:
    "This shifts the weight of manager assessment onto process rather than track record, which matters most at small sample sizes. A founder with two successes and a founder with one failure may have made equally defensible decisions, and three data points cannot separate them. What can be examined is how each of them reasons now: what they treat as genuinely uncertain, how they size a bet, and what they volunteer having been wrong about.",
  models: ["probability", "decision-quality", "resulting", "alternative-histories"],
  connections: [
    { to: "halo-relative-performance", type: "extends" },
    { to: "halo-the-halo-effect", type: "contrasts" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "tib-bets", type: "reinforces" },
    { to: "tmit-role-of-luck", type: "related" }
  ],
  quote: null
}

);
