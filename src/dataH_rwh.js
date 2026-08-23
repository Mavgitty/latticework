/* Richer, Wiser, Happier — William Green — 7 ideas */
window.DB.ideas.push(

{
  id: "rwh-point-of-maximum-pessimism", num: 1, book_id: "rwh", category: "investing",
  title: "Buying at Maximum Pessimism",
  thesis: "The best entries come at the point of maximum pessimism, when a plausible case for permanent loss has convinced almost everyone else to sell.",
  reading_time: 3,
  explanation: [
    "Templeton built his early fortune buying every stock listed under a dollar in 1939, at the outbreak of a war that most investors treated as a reason to hold nothing at all. He later did the same with postwar Japan and with emerging markets that Western managers considered uninvestable. The common feature was never contrarianism as a style. It was a search for situations where price had detached from underlying value because fear, not analysis, was setting the quote.",
    "The discipline that makes this work rather than reckless is distinguishing cheap because of temporary fear from cheap because of genuine and permanent impairment. Templeton did the analysis first and let the unpopularity confirm the opportunity rather than define it, which is a much harder standard than simply buying whatever the crowd currently despises.",
    "He also worked at a scale few of his contemporaries did, treating the whole world's markets as one pool for comparison, so despair in one country could be measured against calm prevailing elsewhere. That global vantage point let him see maximum pessimism as a local condition, not a universal one.",
    "The position is only available to someone willing to feel wrong for a while. Buying when everyone else is selling is uncomfortable exactly when it is correct, and the discomfort does not lift until well after the decision has been made."
  ],
  practical: {
    label: "Example: testing the pessimism",
    lead: "Separate a price collapsed by fear from a price collapsed by fact before treating unpopularity as opportunity.",
    bullets: [
      "What is my own conservative estimate of value, reached independently of the current mood?",
      "Is the case for permanent impairment specific and evidenced, or general and atmospheric?",
      "Where else in the world, or the market, is the equivalent asset priced calmly?",
      "Am I buying because it is cheap, or because everyone else has already sold?",
      "Can I sit through being visibly wrong for a year or more before this is proved right?"
    ]
  },
  application:
    "Applied to venture, the equivalent is deploying into a sector immediately after a crash, when a whole category has been abandoned by capital and survivors face far less competition for the best terms. Confirm that underlying demand persists and that failures are cyclical rather than proof the category was never durable, before treating the exodus of other investors as opportunity rather than warning.",
  models: ["contrarian", "probability", "base-rates", "loss-aversion"],
  connections: [
    { to: "tmit-contrarianism", type: "related" },
    { to: "tii-mr-market", type: "reinforces" },
    { to: "cr-the-capital-cycle", type: "related" },
    { to: "temperament", type: "reinforces" },
    { to: "tmit-patient-opportunism", type: "reinforces" },
    { to: "rwh-thorp-edge-and-sizing", type: "related" }
  ],
  quote: {
    text: "Bull markets are born on pessimism, grow on skepticism, mature on optimism, and die on euphoria. The point of maximum pessimism is the best time to buy, and the point of maximum optimism is the best time to sell.",
    attribution: "Sir John Templeton",
    why: "This is the line Green returns to throughout the book as the organising idea behind Templeton's whole career, and it states plainly that sentiment, not valuation work alone, sets the calendar for when the work pays off."
  }
},

{
  id: "rwh-thorp-edge-and-sizing", num: 2, book_id: "rwh", category: "investing",
  title: "Size the Bet to the Edge",
  thesis: "Size every position in proportion to a genuine, quantifiable edge, and refuse to bet at all where no such edge exists.",
  reading_time: 3,
  explanation: [
    "Ed Thorp's path from counting cards in blackjack to pricing warrants to running one of the first successful quantitative hedge funds rested on a single transferable habit. Identify a repeatable, measurable statistical edge, then work out mathematically how much capital that specific edge justifies risking, rather than sizing the bet on how good the situation feels.",
    "This is a sharp departure from how most investors size positions, which is by conviction, by how compelling the story sounds, or by how much room is left in the portfolio. None of those has any necessary relationship to how much real edge exists. Thorp's method forces the two into alignment: a small verified edge earns a small stake, a large one a large stake, and an attractive situation with no verifiable edge earns nothing, however good the story attached to it.",
    "Full mathematical sizing is aggressive and unforgiving of estimation error, so in practice Thorp and those who adopted his approach typically staked a fraction of what the formula recommended, trading some expected growth for a much smaller chance of a ruinous run of bad luck."
  ],
  practical: {
    label: "Example: separating edge from enthusiasm",
    lead: "Test whether a position is sized to a real advantage or to how convinced you feel.",
    bullets: [
      "Can I state the specific, measurable edge this position relies on?",
      "How confident am I in that edge, and does the position size reflect that confidence honestly?",
      "Would I still hold this size if the story were removed and only the numbers remained?",
      "What single estimation error would make this position too large?",
      "Where in my portfolio is size being set by conviction rather than by edge?"
    ]
  },
  application:
    "Venture rarely offers an edge precise enough to size mathematically, but the underlying discipline still transfers. Separate a genuine informational or access advantage, a proprietary customer relationship, a pattern seen across many prior deals, from a strong opinion that merely feels well informed, and let position size and follow-on reserve be a function of the former. A fund with a real edge in one niche should concentrate its capital there and hold back everywhere its advantage is really just enthusiasm.",
  models: ["probability", "margin-of-safety", "circle-of-competence", "decision-quality"],
  connections: [
    { to: "tib-bets", type: "reinforces" },
    { to: "tmit-risk-is-loss", type: "reinforces" },
    { to: "fbr-probability-vs-expectation", type: "related" },
    { to: "tii-margin-of-safety", type: "reinforces" },
    { to: "rwh-point-of-maximum-pessimism", type: "related" }
  ],
  quote: null
},

{
  id: "rwh-nomad-returning-capital", num: 3, book_id: "rwh", category: "investing",
  title: "Cap the Strategy, Not Just the Position",
  thesis: "When growing assets under management would dilute the approach that produced the returns, cap the fund and return the capital rather than raise more of it.",
  reading_time: 3,
  explanation: [
    "Nick Sleep and Qais Zakaria ran Nomad Partnership for more than a decade holding a small number of scale businesses, Amazon and Costco among them, for years at a time while most of the industry turned its portfolio over annually. Their letters described this as a matter of horizon rather than stock selection alone. Some businesses only reveal their true economics over five or ten years, and almost no institutional structure can hold a position that long, because it is marked and judged every quarter regardless.",
    "The more unusual decision came after the record was made. Rather than raising a larger fund on the strength of strong returns, which is the standard move in the industry, Sleep and Zakaria closed Nomad and returned outside capital once they judged that further growth in assets would force the fund into more, and larger, and less differentiated positions than the approach depended on.",
    "Asset gathering and investment performance are frequently in tension, and fee structures reward the former regardless of what happens to the latter. Choosing to shrink the fee base in order to protect the process is a decision almost no incentive in the industry encourages a manager to make voluntarily."
  ],
  practical: {
    label: "Example: testing for asset bloat",
    lead: "Check whether growth in capital under management is starting to work against the strategy that attracted it.",
    bullets: [
      "Has the number of positions I hold grown simply because the fund has grown?",
      "Am I in businesses I would not have chosen at a smaller scale?",
      "Is turnover rising because the fund needs somewhere to put new capital?",
      "Would returning capital now protect the record better than raising more?",
      "Whose interest does the next raise actually serve?"
    ]
  },
  application:
    "The analogous temptation in venture is raising a materially larger fund on the strength of one exceptional vintage, when the approach that produced it depended on staying small enough to be selective and genuinely hands-on with each company. The discipline is asking, honestly and before the next raise, whether the additional capital will serve the portfolio companies or only the management fee, and being willing to answer that question against the manager's own short-term interest.",
  models: ["scale-economies", "capital-allocation", "opportunity-cost", "incentives"],
  connections: [
    { to: "mos-institutional-limits", type: "reinforces" },
    { to: "cr-long-horizon", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "patience", type: "reinforces" },
    { to: "rwh-li-lu-learning-machine", type: "related" }
  ],
  quote: null
},

{
  id: "rwh-li-lu-learning-machine", num: 4, book_id: "rwh", category: "learning",
  title: "Compound the Learning, Not Just the View",
  thesis: "Edge comes from being a more disciplined and more relentless learner than everyone else studying the same company, not from a faster reaction or a sharper forecast.",
  reading_time: 3,
  explanation: [
    "Li Lu's path from student protest leader during Tiananmen Square to refugee to one of the few outside managers ever entrusted with Charlie Munger's own capital was built on an unusual personal standard. Before committing to a position, he aimed to understand the business better than its own management did, working through years of filings, competitor disclosures and industry material until the picture converged from enough independent angles to be trusted.",
    "The habit generalised well beyond any single company into a lifelong accumulation of knowledge. Each investigation left him with a wider base of comparisons to draw on for the next one, so the marginal hour of research became more productive over time rather than less, which is the logic of compounding applied to understanding itself rather than to capital.",
    "The distinguishing feature was patience with the process ahead of patience with the position. He was willing to spend years reaching conviction on a company like BYD, and equally willing to hold once he had it, because the same depth of study that justified buying also justified sitting through the volatility that followed."
  ],
  practical: {
    label: "Example: auditing the depth of study",
    lead: "Check whether a view has actually converged from independent evidence or only feels settled.",
    bullets: [
      "Have I read enough independent sources that my view would survive losing any single one?",
      "Do I understand this business better than I did on the last one I studied?",
      "Am I reaching a view faster than the depth of research actually supports?",
      "What would someone who has followed this company for a decade know that I don't yet?",
      "Is my conviction built from study, or borrowed from someone else's?"
    ]
  },
  application:
    "The transferable discipline for a venture analyst is treating each diligence process as an addition to a permanent base of pattern recognition, rather than a task that closes out once the memo is filed, and refusing to reach a view faster than the study behind it justifies even when a deal is moving quickly and a fast opinion is exactly what is being asked for. The payoff arrives slowly, in the form of pattern recognition across dozens of prior deals rather than any single one.",
  models: ["circle-of-competence", "compounding", "specialisation", "scuttlebutt"],
  connections: [
    { to: "long-term-thinking", type: "reinforces" },
    { to: "multidisciplinary-thinking", type: "related" },
    { to: "learning-from-mistakes", type: "reinforces" },
    { to: "tib-truthseeking-group", type: "related" },
    { to: "rwh-eveillard-career-risk", type: "related" }
  ],
  quote: null
},

{
  id: "rwh-eveillard-career-risk", num: 5, book_id: "rwh", category: "people",
  title: "Career Risk Versus Business Risk",
  thesis: "Genuine independence means being willing to look wrong and lose clients rather than protect a career by following the crowd into a price that makes no sense.",
  reading_time: 3,
  explanation: [
    "Jean-Marie Eveillard's defining period was the late 1990s, when he declined to buy into the technology bubble because the prices could not be justified by any conservative estimate of value, and held cash and unfashionable holdings instead. Assets under management fell by roughly half as clients left for managers who were participating in the rally, and for two years the decision looked like a professional failure rather than a principled one.",
    "The distinction that matters is between career risk and business risk. Following the crowd protects a manager's career even when the crowd turns out to be wrong, because failing conventionally gets forgiven in a way that failing unconventionally does not. A rational, self-interested manager will often prefer being wrong alongside everyone else to being right alone, since only the second kind of failure tends to end a career.",
    "When the bubble burst, funds that had held their ground recovered sharply relative to those that had chased the rally, but the point of the episode is not that patience was eventually rewarded. The decision was correct before the recovery arrived, and would have remained correct even in a world where prices had never corrected, because it never depended on timing the reversal, only on refusing to pay prices that had already stopped making sense."
  ],
  practical: {
    label: "Example: naming which risk you are managing",
    lead: "Check whether a decision is protecting the client's capital or your own standing.",
    bullets: [
      "If this goes wrong, is it my career at risk, the client's capital, or both?",
      "Am I holding this position because of the evidence, or because it is defensible if it fails?",
      "Would I still make this call if no one would ever know it was mine?",
      "What would following consensus cost the client, versus what it would cost me personally?",
      "Have I confused a decision being forgivable with a decision being right?"
    ]
  },
  application:
    "For an allocator or analyst, the same test applies whenever consensus and personal judgement diverge: is a position being taken, or avoided, because of what is actually likely to happen, or because of how the outcome will be explained if it goes wrong. A fund that passes on an overpriced, heavily hyped round it cannot honestly underwrite is making the same trade Eveillard made, and should expect the same criticism beforehand and only sometimes the same vindication afterward.",
  models: ["incentives", "social-proof", "loss-aversion", "decision-quality"],
  connections: [
    { to: "temperament", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "mos-institutional-limits", type: "related" },
    { to: "tii-chief-problem", type: "reinforces" },
    { to: "rwh-point-of-maximum-pessimism", type: "related" }
  ],
  quote: null
},

{
  id: "rwh-miller-surviving-drawdowns", num: 6, book_id: "rwh", category: "performance",
  title: "A Streak and a Collapse Can Share a Cause",
  thesis: "A long record of outperformance is compatible with long stretches of being badly wrong, and while it is happening the two look almost identical.",
  reading_time: 3,
  explanation: [
    "Bill Miller beat the S&P 500 for fifteen consecutive years running Legg Mason's Value Trust, a run that made him the most celebrated stock picker of his generation, and then gave back a large share of the accumulated advantage in 2008, when concentrated bets on financial stocks he judged cheap kept getting cheaper. The same judgement and the same process produced both the streak and the collapse.",
    "The uncomfortable lesson is that a long run of good results does not certify a process as sound, and a severe drawdown does not certify it as broken, because a genuinely good process and a genuinely bad one can both produce either outcome over any finite stretch, particularly one built on a small number of concentrated, high-conviction positions rather than a wide spread of small bets.",
    "What separates recovery from ruin in these episodes is usually structural rather than psychological: whether the capital behind the position is patient enough, and the position sized conservatively enough, to survive being wrong-looking for longer than seems reasonable. Client redemptions during 2008 forced selling near the bottom of Miller's fund, turning a survivable mistake into a permanent one."
  ],
  practical: {
    label: "Example: judging process versus outcome",
    lead: "Separate whether a decision was sound from whether the recent result was good.",
    bullets: [
      "Would I have made this same decision with the same information, regardless of how it turned out?",
      "Is this a long streak of skill, or a long run that has not yet met its bad year?",
      "Is my capital structured to survive being wrong-looking for three or four years?",
      "Could redemptions or forced selling turn a recoverable mistake into a permanent one here?",
      "Am I judging this manager, or this decision, on process or on the scoreboard?"
    ]
  },
  application:
    "The relevant question for a venture portfolio is not whether a vintage's marks are up or down in a given year, since both directions are compatible with a good decision process this early, but whether the fund is structured to survive being wrong-looking for the years it typically takes for a thesis to be proved out either way, without forced selling or a change of strategy imposed by nervous capital. Judging a young portfolio by its interim marks is resulting dressed up as prudence.",
  models: ["decision-quality", "resulting", "fat-tails", "portfolio-construction"],
  connections: [
    { to: "tib-resulting", type: "reinforces" },
    { to: "tib-luck-vs-skill", type: "reinforces" },
    { to: "tmit-role-of-luck", type: "reinforces" },
    { to: "pom-luck-and-risk", type: "related" },
    { to: "fbr-rare-events", type: "related" }
  ],
  quote: null
},

{
  id: "rwh-compounding-character", num: 7, book_id: "rwh", category: "learning",
  title: "Compounding Judgement, Not Just Capital",
  thesis: "The investors who compounded capital longest also spent decades deliberately compounding their own judgement and temperament, and treated the second project as the harder one.",
  reading_time: 4,
  explanation: [
    "Green's throughline across a book of otherwise very different investors, from Templeton's global contrarianism to Thorp's mathematics to Munger's rationality, is that none of them treated their edge as fixed. Each describes decades of deliberate work on how they thought and behaved: reading widely outside finance, building routines that slowed decisions down, seeking out critics rather than flatterers, and treating every serious mistake as material to study rather than a result to forget.",
    "This reframes the usual question about what made these investors successful. The specific techniques, concentrated positions, global search, statistical edge, patient holding, differ enough between them that no single method explains the group. What is present in every case is the underlying practice of continuously auditing and revising one's own judgement, and it is a practice rather than an insight, which means it has to be repeated rather than simply understood once and retained.",
    "This also explains why so few people who read the same books reproduce the results. The analytical content of value investing has been public for close to a century, yet the compounding of temperament, the years of practising patience, independence and honest self-criticism under real financial pressure, cannot be shortcut by reading about it. It only accumulates through doing it, repeatedly, at the moments it is genuinely uncomfortable."
  ],
  practical: {
    label: "Example: budgeting for the second compounding",
    lead: "Treat the discipline behind decisions as something to build deliberately, not a fixed trait.",
    bullets: [
      "Do I keep a written record of decisions and the reasoning behind them, reviewed later?",
      "Who is arranged to disagree with me as a standing habit, not an occasional favour?",
      "What did I do with my last serious mistake: study it, or move past it quickly?",
      "What am I reading or doing outside the immediate task that widens my own base of comparison?",
      "Is my process today more disciplined than it was two years ago, and can I point to why?"
    ]
  },
  application:
    "For an analyst, the practical implication is to budget time and attention for the second project as deliberately as for the first: the process of decisions, not only their outcomes. That habit, more than any single technique, is what these very different careers turn out to share.",
  models: ["compounding", "decision-quality", "checklist", "confirmation-bias"],
  connections: [
    { to: "temperament", type: "reinforces" },
    { to: "learning-from-mistakes", type: "reinforces" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "tii-chief-problem", type: "reinforces" },
    { to: "rwh-li-lu-learning-machine", type: "extends" },
    { to: "rwh-eveillard-career-risk", type: "extends" }
  ],
  quote: null
}

);
