/* Security Analysis — Benjamin Graham and David Dodd — 10 ideas */
window.DB.ideas.push(

{
  id: "sa-scope-of-analysis", num: 1, book_id: "sa", category: "investing",
  title: "The Scope of Analysis",
  thesis: "Analysis works from established facts and sound logic, and it fails where neither is available.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd open by defining the activity rather than the asset. Analysis is the careful study of available facts, conducted to reach conclusions by established principle and sound logic. That definition is doing work: it excludes acting on tips, on momentum and on the general impression that a company is a good one, none of which involves facts arranged into an argument another person could examine and dispute.",
    "The definition also fixes the limits. Where a security's value depends almost entirely on developments that have not happened yet, there is little for analysis to grip, and conclusions become opinions wearing the costume of arithmetic. Graham and Dodd are explicit that some securities are not analysable at all, and that saying so is a legitimate result rather than a failure of effort.",
    "What follows is a test to apply before starting. Is there a record long enough to measure, are the figures reliable enough to use, and is the value in question of a kind that evidence can bear on. If the answer is no to all three, the work that follows will produce a number without producing knowledge, and the number will be trusted anyway."
  ],
  practical: {
    label: "Example: is this analysable?",
    lead: "Before building the model, ask whether the facts available can actually support a conclusion about value.",
    bullets: [
      "Is there a record long enough to distinguish performance from a single favourable period?",
      "Are the reported figures reliable enough to reason from, or do they need rebuilding?",
      "Does my conclusion rest on established evidence, or on a development I am assuming?",
      "Could another analyst follow my reasoning and identify exactly where they disagree?",
      "If this is not analysable, am I willing to say so and stop?"
    ]
  },
  application:
    "In venture the honest answer is often that a company is not yet analysable in this sense, and the useful response is to change the question rather than force the arithmetic. Early businesses can be assessed on cohort behaviour, unit economics at small scale and the credibility of the team, and those assessments should be labelled as judgement rather than presented as valuation. Presenting them as valuation manufactures a false floor.",
  models: ["intrinsic-value", "circle-of-competence", "checklist", "accounting-quality"],
  connections: [
    { to: "sa-quantitative-qualitative", type: "extends" },
    { to: "sa-analysis-not-prophecy", type: "reinforces" },
    { to: "tii-investment-vs-speculation", type: "reinforces" },
    { to: "circle-of-competence", type: "related" },
    { to: "tbs-problem-of-induction", type: "contrasts" }
  ],
  quote: {
    text: "Analysis connotes the careful study of available facts with the attempt to draw conclusions therefrom based on established principles and sound logic.",
    attribution: "Benjamin Graham and David Dodd, Security Analysis",
    why: "The definition is unusually plain about method: facts, principles, logic. Each term is a constraint, and together they rule out most of what ordinarily passes for investment reasoning, including a good deal of it that is highly paid."
  }
},

{
  id: "sa-three-functions", num: 2, book_id: "sa", category: "decision-making",
  title: "Describe, Select, Criticise",
  thesis: "The analyst has three jobs: to describe accurately, to recommend selectively, and to criticise what management does.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd separate the analyst's work into three functions. The descriptive function is assembling and organising the facts so that the salient ones become visible, which can be done well without holding any opinion. The selective function is passing judgement: this security is worth buying at this price, that one is not. The critical function is directed at the standards and practices of the companies themselves.",
    "Most people conflate the three and then wonder why the output is unsatisfying. A description dressed as a recommendation hides the point where judgement entered. A recommendation with no description behind it cannot be checked by anyone. Doing the descriptive work thoroughly and separately is what makes the selective step arguable rather than merely assertive.",
    "The critical function is the one usually dropped, because it makes enemies. It covers accounting policy, disclosure, capital structure and the treatment of shareholders, and Graham and Dodd treat pressing on these as ordinary professional duty rather than as activism or as somebody else's department. An analyst who never objects to anything ends up describing companies to their own specification, which is closer to publicity than to analysis."
  ],
  practical: {
    label: "Example: separating the three jobs",
    lead: "Write the description first, keep the recommendation separate, and note where management practice deserves challenge.",
    bullets: [
      "Have I assembled the facts before forming a view about the security?",
      "Where exactly in this memo does description end and judgement begin?",
      "Can a reader disagree with my conclusion while accepting my facts?",
      "What accounting or governance practice here should I be objecting to?",
      "Am I avoiding the critical work because raising it would be awkward?"
    ]
  },
  application:
    "A diligence pack that mixes the three reads as advocacy, and the committee then argues about conclusions instead of about evidence. Splitting the memo, with facts and sources first and the recommendation carried on one explicit page, makes the disagreement productive. The critical function maps onto the terms and governance discussion, where an investor's questions about reserves, related parties and reporting are the cheapest protection available.",
  models: ["checklist", "decision-quality", "accounting-quality", "second-level-thinking"],
  connections: [
    { to: "sa-scope-of-analysis", type: "extends" },
    { to: "sa-reserves-and-charges", type: "related" },
    { to: "fsh-forensic-checklist", type: "reinforces" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "tmit-second-level", type: "related" }
  ],
  quote: null
},

{
  id: "sa-quantitative-qualitative", num: 3, book_id: "sa", category: "investing",
  title: "Quantitative and Qualitative",
  thesis: "Figures can be checked and prospects cannot, so weight the analysis towards what the record establishes.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd divide the material into quantitative factors, meaning the statistical record of earnings, assets, dividends and capitalisation, and qualitative factors, meaning the nature of the business, its management, its competitive position and its outlook. Both bear on value. Only one of them can be verified by a second person working from the same documents and reaching an independent answer.",
    "Their conclusion is a weighting rather than an exclusion. Qualitative judgements are indispensable and also unbounded: an enthusiastic view of management or of an industry can justify almost any price, because there is no figure inside it capable of contradicting the enthusiasm. Optimism about the future has no natural ceiling, so it expands until the price contains all of it.",
    "The rule that follows is to require the quantitative record to support the case, and to let qualitative judgement choose between candidates that have already passed. Reversing the order, which a strong story invites, means the figures are recruited afterwards to defend a conclusion already reached, and they can almost always be made to do it."
  ],
  practical: {
    label: "Example: weighting the two",
    lead: "Let the record decide what qualifies, and let judgement about the business choose among what qualifies.",
    bullets: [
      "What does the statistical record establish, independent of any view about prospects?",
      "Which parts of my case rest on qualitative judgement, and how much value is that?",
      "Would this pass on the figures alone if I disliked the management?",
      "Is the story explaining the numbers, or replacing them?",
      "How high could the price go before my qualitative view no longer supports it?"
    ]
  },
  application:
    "Growth investing inverts this deliberately, because the record is short and most of the value sits in the outlook, and that is a defensible choice provided it is a stated one. The discipline that survives the inversion is to name the qualitative judgements individually, attach a price consequence to each, and check whether the entry price already assumes every one of them turns out correct.",
  models: ["accounting-quality", "base-rates", "narrative-fallacy", "durability"],
  connections: [
    { to: "sa-earning-power", type: "extends" },
    { to: "sa-analysis-not-prophecy", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "contrasts" },
    { to: "base-rates", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sa-earning-power", num: 4, book_id: "sa", category: "investing",
  title: "Earning Power",
  thesis: "Earning power is what a business can normally earn, not what it happened to earn last year.",
  reading_time: 3,
  explanation: [
    "Earning power is Graham and Dodd's answer to the question of which earnings figure to use. It is not last year's result, nor the average of a conveniently chosen period, but an estimate of what the business can be expected to earn under normal conditions, derived from a span long enough to contain good years and bad ones in something like their real proportion.",
    "Two conditions have to hold before the concept means anything. The period must actually cover a full cycle for the industry in question, and the business must be sufficiently unchanged across it that the average describes one enterprise rather than several. Where a company has been remade by acquisition or by a shift in its market, the average is arithmetic without a subject.",
    "The value of the idea shows up in what it prevents. Capitalising a peak year at a multiple appropriate to a normal year produces an error in both terms at once, which is how cyclical businesses come to be bought near the top and sold near the bottom by people who believed they were being disciplined about valuation."
  ],
  practical: {
    label: "Example: normalising the earnings",
    lead: "Establish what the business earns in an ordinary year before applying any multiple to it.",
    bullets: [
      "Does my period cover a full cycle for this industry, including a downturn?",
      "Is this the same business across the whole period, or several businesses?",
      "How far is the most recent year above or below the normalised figure?",
      "Which margin am I treating as normal, and when was it last achieved?",
      "Am I applying a normal-year multiple to a peak-year number?"
    ]
  },
  application:
    "Growth companies have no cycle to average, so the equivalent work is normalising the unit economics rather than the profit: contribution margin at a steady acquisition mix, retention on mature cohorts rather than the best one, and pricing without the discounting that won the last quarter. The question does not change. What does this business earn when nothing unusual is helping it.",
  models: ["owner-earnings", "regression", "return-on-capital", "intrinsic-value"],
  connections: [
    { to: "sa-reserves-and-charges", type: "extends" },
    { to: "sa-quantitative-qualitative", type: "related" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "fsh-cash-versus-earnings", type: "reinforces" },
    { to: "regression-to-the-mean", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sa-safety-not-the-lien", num: 5, book_id: "sa", category: "investing",
  title: "Safety Comes From the Enterprise",
  thesis: "A bond is safe because the business can pay, not because a document says it must.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd attack the habit of judging fixed-value securities by their contractual protections. A first mortgage on a property, a prior claim on assets, a restrictive covenant: each is a legal position and none of them generates cash. If the enterprise stops earning, the lien delivers its holder into a receivership where the pledged assets are worth whatever a forced sale happens to fetch.",
    "The correct order of enquiry is therefore the business first and the instrument second. Establish that the enterprise earns enough, by a wide margin and through bad years as well as good, to cover its fixed charges. Only then does position in the capital structure matter, and what it settles is recovery in the case you have already established is unlikely.",
    "The asymmetry of a fixed claim is what makes this so strict. The upside is a coupon and the return of principal, which no amount of good news improves, so every avoidable loss is uncompensated by anything. Graham and Dodd's conclusion is that choosing sound senior securities is mostly a process of rejection rather than of search."
  ],
  practical: {
    label: "Example: testing a fixed claim",
    lead: "Prove the enterprise can service the obligation through a bad year before considering where you rank.",
    bullets: [
      "What is interest cover in the worst year of the last cycle, not the average?",
      "Does the cash to pay come from operations, or from refinancing?",
      "If the business stops earning, what would the pledged assets actually fetch?",
      "What is the most I can make here, and does the risk fit inside it?",
      "Am I taking comfort from a covenant instead of from coverage?"
    ]
  },
  application:
    "Venture debt, convertible notes and liquidation preferences are the same trade in private form: a capped return protected by documents that only bind a solvent company. A 2x preference over a business that has run out of money is a claim on nothing. Underwrite the enterprise's ability to reach its next financing on its own cash, then treat the preference as recovery detail rather than as protection.",
  models: ["margin-of-safety", "free-cash-flow", "risk-not-volatility", "inversion"],
  connections: [
    { to: "sa-capital-structure", type: "extends" },
    { to: "sa-asset-values", type: "contrasts" },
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "tmit-risk-is-loss", type: "reinforces" },
    { to: "avoiding-ruin", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sa-asset-values", num: 6, book_id: "sa", category: "investing",
  title: "What the Balance Sheet Is For",
  thesis: "Net current assets less all liabilities give a floor to value that no forecast supplies.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd are unsentimental about book value: it records what was spent, not what the assets are worth or what they earn, and for most going concerns it says little about value. The exception is the liquid end of the balance sheet. Cash, receivables and inventory, taken at conservative valuations and reduced by every liability, produce a figure that depends on no estimate of the future.",
    "A company available below that figure is being offered for less than its own working capital, with the plant and the business included at nothing. The situation is rare and not automatically attractive, because a business consuming its net current assets will shortly not have them. What the calculation supplies is a floor and a reason to look further, not a conclusion.",
    "The second use of the balance sheet is diagnostic. Comparing it across several years shows whether reported profits arrived as cash, whether inventory and receivables are growing faster than sales, and whether the assets supporting the earnings have been maintained or quietly run down. Read this way it is a check on the income statement rather than a rival source of value."
  ],
  practical: {
    label: "Example: reading the assets",
    lead: "Work out the conservative liquid value, then use the balance sheet to test the reported earnings.",
    bullets: [
      "What are current assets worth after conservative haircuts and after every liability?",
      "Is the business adding to that figure each year or consuming it?",
      "Have receivables or inventory grown faster than sales, and why?",
      "What off balance sheet obligations belong in this calculation?",
      "Does the asset base look maintained, or has necessary spending been deferred?"
    ]
  },
  application:
    "Private valuations run on revenue multiples and the balance sheet gets skimmed, which is where several avoidable surprises live: deferred revenue counted as cash, receivables that are really unbilled hope, convertible notes and accrued founder salaries sitting outside the cap table. Net cash after every obligation is also the honest measure of runway, and it is routinely shorter than the figure carried in the deck.",
  models: ["intrinsic-value", "margin-of-safety", "special-situations", "accounting-quality"],
  connections: [
    { to: "sa-earning-power", type: "contrasts" },
    { to: "sa-safety-not-the-lien", type: "related" },
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "fsh-hiding-liabilities", type: "related" },
    { to: "tmit-price-is-everything", type: "related" }
  ],
  quote: null
},

{
  id: "sa-capital-structure", num: 7, book_id: "sa", category: "investing",
  title: "Capital Structure Changes the Stock",
  thesis: "The same business becomes a different security depending on how much debt sits above the common.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd treat the division of a company's capital between senior claims and common stock as a fact about the common stock rather than a technicality of finance. Fixed charges are paid first, so the common receives what is left, and what is left moves by a much larger proportion than operating earnings do. A modest decline can remove the whole of it.",
    "Gearing therefore manufactures a speculative component out of an ordinary business. Two companies with identical operations and different capitalisations offer investors genuinely different propositions, and the geared one is not the same proposition at a lower price. Graham and Dodd's observation is that markets often value the combined enterprise sensibly and the individual layers within it carelessly.",
    "The corollary is that a judgement about the whole business and a judgement about one slice of it are separate exercises. Working out what the enterprise is worth comes first. Working out what reaches your particular claim, after everything ranking ahead of it has been served in a poor year, is the calculation that determines your return."
  ],
  practical: {
    label: "Example: looking above your claim",
    lead: "Value the whole enterprise first, then work out what reaches your layer in a bad year.",
    bullets: [
      "What sits ahead of my claim, and what does it take before I receive anything?",
      "How far can operating profit fall before the residual disappears entirely?",
      "Is the return here coming from the business or from the gearing?",
      "What happens to my layer if the senior claims have to be refinanced?",
      "Am I comparing companies on operations while ignoring their capitalisations?"
    ]
  },
  application:
    "In venture the senior claims are preference stacks, and a company that has raised several rounds at rising prices can leave its ordinary shares worth nothing in any outcome short of the plan. Modelling the waterfall across a range of exit values, rather than only at the target, is the same calculation Graham and Dodd apply to fixed charges, and it changes which deals look attractive.",
  models: ["cost-of-capital", "margin-of-safety", "probability", "second-order"],
  connections: [
    { to: "sa-safety-not-the-lien", type: "extends" },
    { to: "sa-earning-power", type: "related" },
    { to: "tos-leverage", type: "reinforces" },
    { to: "tii-investment-vs-speculation", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" }
  ],
  quote: null
},

{
  id: "sa-reserves-and-charges", num: 8, book_id: "sa", category: "learning",
  title: "Follow the Charge",
  thesis: "Costs excluded from the income statement do not disappear. Find where they were put instead.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd give sustained attention to the devices that move items around: charges taken against reserves rather than against earnings, losses absorbed into the surplus account, write-downs timed to a year that is already poor, provisions created generously in good years and released quietly in weak ones. None of it alters the economics of the business and all of it alters the reported trend.",
    "The method they recommend is to read the statements as a linked set across several years. The income statement shows what management chose to present. The surplus and reserve accounts show what management chose to route elsewhere. Reconciling the two is what reveals the difference between the earnings that were reported and the earnings that actually occurred.",
    "This is why a single year's figure, however carefully examined, is not enough. A charge suppressed in one period has to surface somewhere, and across a run of years the total is far harder to shape than any individual year within it. Multi-year reconciliation is the cheapest available defence against presentation, and it requires no access that an ordinary shareholder lacks."
  ],
  practical: {
    label: "Example: reconciling several years",
    lead: "Track equity and reserves across years and account for every movement that bypassed the income statement.",
    bullets: [
      "Does the change in equity reconcile to reported profit plus dividends and issuance?",
      "What was charged against reserves rather than against earnings, and why?",
      "Were provisions raised in strong years and released in weak ones?",
      "Do the write-downs cluster in years that were already poor?",
      "Over five years, what is the total of everything excluded as exceptional?"
    ]
  },
  application:
    "The private-market equivalent is the adjustment schedule. Add-backs for restructuring, founder compensation, one-off marketing and capitalised development each carry a defensible rationale, and the schedule as a whole is where the negotiated earnings figure gets manufactured. Totalling the adjustments across every year presented, then asking which of them recur, usually cuts the earnings base materially and says something about the people presenting it.",
  models: ["accounting-quality", "incentives", "owner-earnings", "wysiati"],
  connections: [
    { to: "sa-earning-power", type: "reinforces" },
    { to: "sa-three-functions", type: "related" },
    { to: "fsh-one-time-gains", type: "reinforces" },
    { to: "tii-earnings-quality", type: "extends" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "sa-dividend-policy", num: 9, book_id: "sa", category: "investing",
  title: "The Owner's Cash",
  thesis: "Retained earnings belong to the shareholders, so retention has to be justified rather than assumed.",
  reading_time: 2,
  explanation: [
    "Graham and Dodd take a firm position on dividends: the earnings are the owners' property, and management withholding them is making an investment decision on the owners' behalf. That decision is defensible when the retained cash earns a good return inside the business. It is not defensible merely because retention is prudent, or because the directors are more comfortable with a large balance sheet.",
    "They observe that retained earnings are routinely valued at less than distributed ones, and argue this is often rational rather than a market error. Cash paid out is certain, whereas cash retained must pass through management's judgement first, and a long record of poor reinvestment justifies a discount on everything held back. The discount is not a judgement about the earnings. It is a judgement about the person deciding what happens to them.",
    "The analytical use is to test retention against results. Compare the earnings retained across a decade with the growth in earning power that followed them. Where a large sum went in and little came out, the surplus account is a record of value destroyed, and no explanation offered by the board alters the arithmetic of it."
  ],
  practical: {
    label: "Example: testing retention",
    lead: "Compare what management kept over a decade with what the business earns because of it.",
    bullets: [
      "How much has been retained over ten years, and what did earning power do?",
      "What return is the business earning on incremental invested capital?",
      "Is retention justified by opportunities, or by comfort with a large cash balance?",
      "Would shareholders do better with the cash than management has done?",
      "Does the board explain the retention decision, or simply announce it?"
    ]
  },
  application:
    "Private companies rarely pay dividends, so the test applies to every reinvestment decision instead. Money put into a second product line, a new geography or a larger sales team is retained earnings under another name, and the discipline is to hold each of those decisions to a required return and to review it later against what actually happened. Founders who run this test themselves are unusual and worth noticing.",
  models: ["capital-allocation", "return-on-capital", "free-cash-flow", "incentives"],
  connections: [
    { to: "sa-earning-power", type: "related" },
    { to: "sa-capital-structure", type: "related" },
    { to: "tos-capital-allocation", type: "reinforces" },
    { to: "csup-dividends", type: "contrasts" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "sa-analysis-not-prophecy", num: 10, book_id: "sa", category: "decision-making",
  title: "Analysis Is Not Prophecy",
  thesis: "The analyst's job is to protect against the future, not to predict it.",
  reading_time: 3,
  explanation: [
    "Graham and Dodd accept that value depends on the future and refuse the conclusion that analysis is therefore forecasting. The distinction they draw is between reasoning from the record to a conclusion that carries an allowance for what could go wrong, and asserting what will happen next. The first can be examined and disputed by a reader. The second is a prediction with a spreadsheet attached to it.",
    "The consequence is a different treatment of uncertainty. Rather than sharpening the forecast, the analyst widens the protection: coverage that survives a poor year, a price that does not require the favourable case, a business whose value does not turn on a single contract. Uncertainty is handled by the size of the buffer instead of by the quality of the guess.",
    "There is a professional obligation in this as well. An analyst who presents a forecast as an analysis has transferred a risk to the client while keeping the fee, and the client cannot tell the difference from reading the document. Marking which parts of a conclusion rest on evidence and which rest on assumption is the whole of the distinction."
  ],
  practical: {
    label: "Example: separating evidence from assumption",
    lead: "Mark which parts of the conclusion the record supports and which parts are assumptions you have made.",
    bullets: [
      "Which of my inputs come from the record and which from my forecast?",
      "How much of the value depends on years I cannot see into?",
      "Have I met uncertainty by widening the buffer or by sharpening the estimate?",
      "If every forecast input came in at the low end, does this still work?",
      "Would a reader be able to tell my evidence from my assumptions?"
    ]
  },
  application:
    "Venture underwriting is mostly assumption, and pretending otherwise is what produces committee papers reading as certainty about a company with eighteen months of history. The workable version is to label the forecast section as forecast, state the two or three assumptions the return depends on, and take the protection in entry price, ownership and reserve policy rather than in a more confident model.",
  models: ["implied-expectations", "base-rates", "probability", "planning-fallacy"],
  connections: [
    { to: "sa-scope-of-analysis", type: "extends" },
    { to: "sa-quantitative-qualitative", type: "reinforces" },
    { to: "tbs-forecasting-limits", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
}

);
