/* The Business of Venture Capital — Mahendra Ramsinghani — 9 ideas */
window.DB.ideas.push(

{
  id: "bvc-venture-as-a-business", num: 1, book_id: "bvc", category: "investing",
  title: "A Firm Is a Business Too",
  thesis: "A venture firm has its own revenue, costs and balance of power, separate from its investments.",
  reading_time: 3,
  explanation: [
    "Ramsinghani's framing is that a firm sells one product to one kind of customer: exposure to private companies, committed for ten years by institutions. Revenue is contracted in advance and barely varies with performance. Costs are salaries, travel, audit, legal fees and the expense of being visible in a market. That leaves an operating margin, and the margin decides how many people the firm can carry and how deeply any of them can work.",
    "Almost nobody running a small fund thinks in these terms, which is why so many second funds fail to close. The investing record is only half of what an allocator assesses. The other half is whether the firm has a finance function, a defensible valuation policy, a clear account of who does what, and enough surplus to survive a year in which no fund closes.",
    "The distinction matters because the two profit and loss statements move on different clocks. The operating one settles quarterly and is unforgiving. The investment one settles over a decade and is invisible until late. A firm that lets the quarterly one dictate behaviour raises too much and hires too fast, and one that ignores it runs out of money while its portfolio is still working."
  ],
  practical: {
    label: "Example: reading the firm's own accounts",
    lead: "Separate the firm's operating economics from the fund's investment returns, then look at each on its own terms.",
    bullets: [
      "What does the firm cost to run for a year, fully loaded?",
      "Which of those costs are fixed regardless of whether a fund closes?",
      "How many investing hours does the fee actually buy at current headcount?",
      "What happens to the firm if the next fund is delayed eighteen months?",
      "Is anyone accountable for the firm's own margin, or only for deals?"
    ]
  },
  application:
    "Run the firm's budget on the same basis you would demand from a portfolio company: fixed costs named, headcount tied to committed fee income, and a scenario where the next close slips two years. Most partnerships discover they are carrying a cost base sized for the fund they hope to raise rather than the one they have. Sitting on boards while your own firm is under-capitalised is a poor position from which to give advice about runway.",
  models: ["capital-allocation", "incentives", "free-cash-flow", "opportunity-cost"],
  connections: [
    { to: "bvc-fee-and-carry", type: "extends" },
    { to: "bvc-firm-building", type: "related" },
    { to: "sshr-fund-structure", type: "reinforces" },
    { to: "tos-lean-centre", type: "related" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "bvc-raising-a-fund", num: 2, book_id: "bvc", category: "investing",
  title: "The First Fund Is the Hardest",
  thesis: "Institutions buy a manager's evidence of judgement, and a first-time manager has almost none to show.",
  reading_time: 3,
  explanation: [
    "What an institution diligences is not the pitch but the attribution. It wants to know which deals you sourced rather than inherited, what you argued for inside the previous partnership, and what you did when a company deteriorated. That record is held by your former employer, is rarely documented in a form you can take with you, and is checked against co-investors and founders who remember it differently.",
    "The first fund is hard because the evidence is thinnest in exactly the place that matters. An allocator is buying eleven years of unverifiable judgement from someone with no institutional history of exercising it. The usual response is to reduce the size of the ask, accept worse terms, and find one anchor investor whose name performs the diligence for everyone who follows.",
    "The people supplying the capital also have obligations of their own, which shapes what they can say yes to. A pension fund with a minimum cheque size cannot write into a thirty million dollar fund without breaching its own concentration limit, however much it likes the manager. A large share of rejections are structural rather than a verdict on the strategy."
  ],
  practical: {
    label: "Example: what the record has to show",
    lead: "Assemble the evidence an allocator will actually test, then find the gaps before they do.",
    bullets: [
      "Which deals can I claim, and who will confirm the claim?",
      "What did I argue for that the partnership declined, and how did it end?",
      "Who is the anchor, and what does their diligence save everyone else?",
      "Is the fund size set by strategy or by what feels raisable?",
      "Which rejections are about me and which are about their own constraints?"
    ]
  },
  application:
    "Write your own attribution before you need it: every deal, your specific role, the internal argument, the outcome and what you now think you got wrong. Doing this annually while employed is cheap, and reconstructing it afterwards is close to impossible. On boards you are generating exactly this evidence, so keep a contemporaneous record of what you advised rather than a retrospective account of what happened.",
  models: ["incentives", "base-rates", "decision-quality", "resulting"],
  connections: [
    { to: "bvc-fee-and-carry", type: "related" },
    { to: "bvc-lp-relations", type: "extends" },
    { to: "sshr-limited-partners", type: "reinforces" },
    { to: "tib-resulting", type: "related" },
    { to: "tpl-skill-or-luck", type: "related" }
  ],
  quote: null
},

{
  id: "bvc-fee-and-carry", num: 3, book_id: "bvc", category: "investing",
  title: "Fee Runs the Firm, Carry Pays for the Outcome",
  thesis: "Management fee funds the operating business and carried interest funds the result, and they pull differently.",
  reading_time: 3,
  explanation: [
    "The fee is a percentage of committed capital, paid whether or not anything works, and it is the only reliable money in venture. It pays salaries and rent for a decade. Carried interest is a share of profits, arrives late if at all, and is the only line that rewards being right. The two are not alternatives, but they reward different behaviour, and the balance between them is set by fund size.",
    "Fund size therefore decides the shape of the firm. A fee on fifty million supports perhaps three or four investing professionals, which caps how many boards can be served properly and how many new companies can be met in a year. Raise more and the firm can afford depth, but the cheque size has to rise with it, which moves the firm to later stages and different competitors.",
    "The failure mode is a fee large enough that carry stops mattering. Once guaranteed income exceeds what a good fund would plausibly pay a partner, the incentive shifts from maximising the outcome to maximising assets under management, and behaviour follows within a cycle. Institutions watch for this, which is why they ask how the fee is spent and how the carry is split rather than only what the headline terms are."
  ],
  practical: {
    label: "Example: sizing the firm to the fee",
    lead: "Work out what the fee actually supports before deciding how many people and how many deals.",
    bullets: [
      "What annual fee income does this fund size produce, net of fund expenses?",
      "How many investing professionals does that support at market compensation?",
      "How many boards can each of them serve without becoming decorative?",
      "Does the cheque size implied by fund size match where we have an edge?",
      "Would a good outcome pay any partner materially more than their salary?"
    ]
  },
  application:
    "The number to test is carry per partner in a good case, not the headline fund size. If a strong result adds little to a partner's lifetime earnings, the firm has been built to collect fees and no governance will repair that. The fee also sets the honest limit on capacity: three or four board seats done properly is a full role, and pretending otherwise shows up in the companies rather than in the reporting.",
  models: ["incentives", "portfolio-construction", "opportunity-cost", "scale-economies"],
  connections: [
    { to: "bvc-venture-as-a-business", type: "extends" },
    { to: "bvc-portfolio-construction", type: "related" },
    { to: "sshr-fund-structure", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tpl-late-stage-drift", type: "related" }
  ],
  quote: null
},

{
  id: "bvc-portfolio-construction", num: 4, book_id: "bvc", category: "investing",
  title: "Construction Sets the Distribution",
  thesis: "Position count, entry ownership and reserve ratio decide the return profile before any company is chosen.",
  reading_time: 3,
  explanation: [
    "Three numbers largely determine what a fund can return: how many first cheques it writes, what ownership each one buys, and what proportion of the fund is held back for follow-on. Choose them and you have chosen the range of outcomes available to you. A fund with forty positions at four per cent ownership cannot produce a three times return from one company, whatever that company goes on to do.",
    "The arithmetic runs backwards from the fund size. Decide the multiple you are underwriting to, ask what exit value and what ownership at exit would deliver it, then work back through expected dilution to the ownership you must buy now. That calculation, rather than conviction, is what tells you whether an entry price and a cheque size are compatible with the mandate you sold.",
    "Reserves are where most funds drift. Money not reserved at the start has to come from somewhere later, usually by skipping a round in the best company because capital went to the noisiest one. Setting the ratio in advance and reviewing it against the whole portfolio, rather than against the request in front of you, is the entire discipline."
  ],
  practical: {
    label: "Example: three numbers, set in advance",
    lead: "Fix position count, target ownership and reserve ratio at the start, and treat changes as mandate changes.",
    bullets: [
      "How many first cheques does this fund write, and over how many years?",
      "What ownership must an entry buy to matter at exit after dilution?",
      "What share of the fund is reserved, and who can release it?",
      "Which single outcome would return the fund, and is it plausible here?",
      "Are we drifting to more positions because deciding is uncomfortable?"
    ]
  },
  application:
    "Test the construction against the tail rather than the average. Model one company at fifty times, four at three times and the rest at zero, then check whether your ownership and reserve policy convert that into the fund multiple you promised. If it does not, the problem is arithmetic and no amount of selection skill will repair it. Review reserves quarterly against the whole portfolio, never in the meeting where a company asks.",
  models: ["portfolio-construction", "power-law", "dilution", "probability"],
  connections: [
    { to: "bvc-investment-process", type: "related" },
    { to: "bvc-fee-and-carry", type: "extends" },
    { to: "sshr-reserves", type: "reinforces" },
    { to: "tii-diversification", type: "contrasts" },
    { to: "zto-power-law", type: "reinforces" }
  ],
  quote: null
},

{
  id: "bvc-sourcing-system", num: 5, book_id: "bvc", category: "investing",
  title: "Sourcing Is a System",
  thesis: "Deal flow that arrives by luck cannot be measured, repeated or improved, so build the machine.",
  reading_time: 2,
  explanation: [
    "Every firm claims proprietary deal flow and most mean that a founder emailed them first. The useful definition is narrower: a source of opportunities competitors cannot easily replicate, because it rests on a relationship, a reputation in a specific category, or a position in a community that took years to earn. Anything a competitor could reproduce with a job advertisement and a budget is not proprietary.",
    "Treated as a system, sourcing has inputs, a conversion rate and a cost. Count the companies seen, the proportion reaching diligence, the proportion invested in, and where each one came from. Most firms find that a small number of sources produce nearly all the good outcomes and that the largest volume channel produces almost none. The measurement is worth more than any new channel.",
    "The second-order effect is what the market says about you when you are absent. Founders route deals towards firms with a reputation for being decisive, honest in a decline and useful afterwards, and away from firms that are slow and extractive. That reputation is built one declined deal at a time, and it is the cheapest sourcing asset a firm will ever own."
  ],
  practical: {
    label: "Example: measuring the funnel",
    lead: "Attribute every investment to its source, then judge channels by outcomes rather than by volume.",
    bullets: [
      "Where did each of our last twenty investments actually originate?",
      "Which sources produce volume, and which produce companies we would fund again?",
      "What could a competitor replicate in six months with money alone?",
      "How long does a founder wait for our answer, and what does that cost us?",
      "What do founders we declined tell other founders about us?"
    ]
  },
  application:
    "Run the attribution annually and be willing to close a channel that produces meetings and no investments. The scarce resource is partner attention, and events, accelerators and inbound mail consume it in quantity. Board seats are themselves a sourcing asset, because the operators around a company you know well are the next generation of founders, but only if you are the person they would call rather than the one who chaired the meeting.",
  models: ["feedback-loops", "specialisation", "opportunity-cost", "base-rates"],
  connections: [
    { to: "bvc-investment-process", type: "extends" },
    { to: "bvc-portfolio-support", type: "reinforces" },
    { to: "tpl-networks", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "related" },
    { to: "specialisation", type: "related" }
  ],
  quote: null
},

{
  id: "bvc-investment-process", num: 6, book_id: "bvc", category: "investing",
  title: "Getting to a Decision",
  thesis: "A partnership decision is a process with a sponsor, a sequence and a rule for saying no.",
  reading_time: 3,
  explanation: [
    "Between the first meeting and the wire there is a defined sequence: a partner takes ownership, the questions that would kill the deal are identified, references are taken, the memo is written and the partnership argues. Firms differ on whether a single sponsor can commit capital or whether consensus is required, and that one design choice explains most of the difference in what firms end up owning.",
    "Consensus produces fewer errors of commission and many more errors of omission. Every unusual company has something about it that one partner will find disqualifying, so a rule requiring unanimity selects for companies that are easy to agree about. The alternative, a sponsor with authority to commit within limits, produces sharper mistakes and occasionally produces the outcome that returns the fund.",
    "The decision worth measuring is the decline. Declines are the bulk of the output of any investment process and they are almost never reviewed, which means the process never learns anything. Recording the reason at the time, in language specific enough to be checked in three years, is what separates a discipline from a reflex."
  ],
  practical: {
    label: "Example: the shape of the process",
    lead: "Write down who owns a deal, what would kill it, and how the partnership finally decides.",
    bullets: [
      "What are the two or three questions that would end this deal?",
      "Who owns this deal, and what can they commit without the partnership?",
      "Are we requiring agreement, and what does that rule select for?",
      "Was the reason for declining recorded, dated and specific enough to check?",
      "How long did this take, and what did the delay cost the founder?"
    ]
  },
  application:
    "Keep a decline log with each reason stated in falsifiable terms, then review it annually against what actually happened. The pattern that emerges is usually one recurring objection that has been wrong every time. Decide in advance what a single partner may commit, because a firm requiring consensus at seed stage will systematically miss the companies that look strange early, and those are the only ones priced attractively.",
  models: ["decision-quality", "checklist", "resulting", "social-proof"],
  connections: [
    { to: "bvc-sourcing-system", type: "related" },
    { to: "bvc-portfolio-construction", type: "reinforces" },
    { to: "sshr-how-partnerships-decide", type: "extends" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "cinc-candour-not-honesty", type: "related" }
  ],
  quote: null
},

{
  id: "bvc-portfolio-support", num: 7, book_id: "bvc", category: "people",
  title: "Real Help and Decorative Help",
  thesis: "Most investor support is unrequested advice, while the useful kind is specific, scarce and asked for.",
  reading_time: 2,
  explanation: [
    "Firms advertise platform teams, talent partners and operating expertise, and some of it is real. The test is whether the company would pay for it out of its own budget. An introduction to a named buyer, a candidate who signs, a follow-on round assembled when the market has closed: these are scarce and hard to obtain independently. General strategic advice is abundant and mostly costs the founder a day of preparation.",
    "The asymmetry is that partner time is the firm's scarcest input and it is usually spent on the wrong companies. Attention flows towards the loudest problems, which sit in positions that will not return capital, while the company that is working is left alone because nobody there is asking for anything. Deciding in advance where partner hours go is a portfolio decision of the same kind as reserves.",
    "Support also has a governance edge. Help that arrives with an implicit obligation, or that quietly substitutes your judgement for the founder's, damages the relationship you will need when something goes badly wrong. The most valuable version is narrow in scope, delivered when asked for, closed out afterwards, and not counted twice in the next fundraising deck."
  ],
  practical: {
    label: "Example: is this help real?",
    lead: "Ask whether the company would buy this service, and whether anyone else could supply it.",
    bullets: [
      "Would this company pay for this help from its own budget?",
      "Could the founder get this elsewhere in a week without us?",
      "Where did my hours go last quarter, and to which companies?",
      "Am I helping because I was asked, or because I am anxious?",
      "Which of our platform claims would survive a reference call?"
    ]
  },
  application:
    "Allocate partner hours the way you allocate reserves: deliberately, across the portfolio, and reviewed on the same schedule. Track where they went last quarter and expect the answer to be uncomfortable. On boards, the highest-value contributions are usually hiring one or two senior people and assembling the next round early, and both are specific and finishable. Most of the rest is a founder managing you.",
  models: ["opportunity-cost", "portfolio-construction", "halo-effect", "incentives"],
  connections: [
    { to: "bvc-lp-relations", type: "related" },
    { to: "bvc-sourcing-system", type: "reinforces" },
    { to: "mvcg-after-the-money", type: "extends" },
    { to: "sshr-board-duty", type: "related" },
    { to: "tpl-activism", type: "contrasts" }
  ],
  quote: null
},

{
  id: "bvc-lp-relations", num: 8, book_id: "bvc", category: "investing",
  title: "Reporting to the People Whose Money It Is",
  thesis: "Marks are estimates made by the person being judged on them, which is why reporting discipline matters.",
  reading_time: 3,
  explanation: [
    "Between a fund's close and its liquidation, the only visible measure of performance is a set of unrealised valuations produced by the manager. The auditor tests the method rather than the judgement. The number is honest in the sense that it follows a stated policy, and unreliable in the sense that the policy leaves wide latitude and the manager needs the figure to be high while raising the next fund.",
    "The tension is real and it does not resolve. Marking conservatively costs a manager a fundraising cycle. Marking to the last round's headline price treats a preferred security carrying a liquidation preference as though it were common stock, and treats an inside round as a market price. Institutions know all of this, which is why they read cash returned before they read anything else.",
    "The reporting relationship is the other half of the job. Institutions have committees, calendars and reputational exposure of their own, and what they want is no surprises rather than good news. A loss disclosed early with an explanation costs far less credibility than a strong quarter followed by a write-off that was clearly visible two quarters before it appeared."
  ],
  practical: {
    label: "Example: what the mark rests on",
    lead: "Separate marks that reflect a transaction from marks that reflect a model, and label them.",
    bullets: [
      "Which of our marks come from a priced round with a new outside lead?",
      "What would this position be worth with the preference stack applied honestly?",
      "How does our paper multiple compare with cash actually returned?",
      "What bad news do our investors not yet know that we already do?",
      "Would we defend this policy if the next fund did not depend on it?"
    ]
  },
  application:
    "Publish a valuation policy, apply it in the quarters where it hurts, and report preference-adjusted value alongside the headline mark. The credibility that buys is worth more than the interim figure. When a portfolio company deteriorates, tell your investors before the write-down rather than with it, and say what you got wrong. Managers who do this raise in difficult markets, and managers who do not find their record has become a story.",
  models: ["accounting-quality", "incentives", "intrinsic-value", "decision-quality"],
  connections: [
    { to: "bvc-raising-a-fund", type: "extends" },
    { to: "bvc-venture-as-a-business", type: "related" },
    { to: "sshr-limited-partners", type: "reinforces" },
    { to: "ewb-candid-reporting", type: "reinforces" },
    { to: "fsh-metric-games", type: "related" }
  ],
  quote: null
},

{
  id: "bvc-firm-building", num: 9, book_id: "bvc", category: "leadership",
  title: "Why Partnerships Break Up",
  thesis: "Firms fail on succession and on how economics are shared, rarely on investment judgement.",
  reading_time: 3,
  explanation: [
    "A venture firm is one of the few businesses whose entire value sits in a handful of relationships and a record that individuals can carry out of the door. There is no goodwill that survives the departure of the person who sourced the deals. That makes the firm structurally fragile, and the fragility surfaces at the point where a founding generation has to hand over economics and control.",
    "Carry splits are the usual fault line. An equal split feels fair while everyone contributes equally and becomes intolerable the moment one partner sources the outcome that carries the fund. An unequal split is defensible, but it has to be set in advance and revisited on a stated schedule, because renegotiating a share after the result is already visible is how partnerships end.",
    "Succession asks the senior generation to give away the thing they built while they are still good at it. Institutions ask about it directly, because a fund with an eleven-year life and a single ageing decision maker is a specific risk to them. Firms that survive several generations decided the transition early, wrote it down, and let the next partners lose money on their own decisions."
  ],
  practical: {
    label: "Example: agreeing it in advance",
    lead: "Settle how economics, decision rights and succession will work while the numbers are still hypothetical.",
    bullets: [
      "How is carry split, and on what schedule is the split revisited?",
      "Who can commit capital, and does that change as partners are added?",
      "If the founding partner stopped tomorrow, what would our investors do?",
      "Which relationships would leave with any single individual?",
      "Has the next generation ever made a decision that lost money?"
    ]
  },
  application:
    "Write the partnership agreement as though the best outcome is coming, because that is the moment the terms get tested. Set carry splits with a review date, name who may commit capital, and give junior partners real decision rights early enough that their record is legible to allocators. If you sit on boards, ask the succession question of your own firm as directly as you ask it of every founder.",
  models: ["incentives", "decision-quality", "compounding", "opportunity-cost"],
  connections: [
    { to: "bvc-venture-as-a-business", type: "extends" },
    { to: "bvc-fee-and-carry", type: "reinforces" },
    { to: "cap-ownership-and-tenure", type: "reinforces" },
    { to: "tos-decentralisation", type: "related" },
    { to: "incentives", type: "related" }
  ],
  quote: null
}

);
