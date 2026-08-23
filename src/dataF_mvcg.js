/* Mastering the VC Game — Jeffrey Bussgang — 7 ideas */
window.DB.ideas.push(

{
  id: "mvcg-what-the-investor-optimises", num: 1, book_id: "mvcg", category: "people",
  title: "Two Different Objective Functions",
  thesis: "The investor is optimising a portfolio's tail outcome and the founder is optimising one company's survival.",
  reading_time: 3,
  explanation: [
    "Bussgang has sat on both sides, and the most useful thing he carries across is that the person opposite is solving a different problem. Their problem is whether this company can be one of the two or three in a fund that produce almost all of the return. The founder's problem is whether the company still exists in eighteen months. Both are rational and they do not always recommend the same decision.",
    "This explains behaviour that otherwise reads as bad faith. Pressure to raise more and grow faster, resistance to an acquisition that would change a founder's life, insistence on a market larger than the founder wants to serve: each follows from an objective function in which a solid three times outcome is roughly equivalent to a failure. None of it is a judgement on the founder or the business.",
    "Knowing the objective is what makes the conversation possible. A founder who understands that an eighty million dollar sale does not move a large fund can raise the subject early, ask what outcome the investor actually needs, and choose an investor whose fund size makes the ending they want acceptable, rather than discovering the mismatch when an offer is on the table."
  ],
  practical: {
    label: "Example: naming the objective",
    lead: "Ask what outcome this investor needs from you, and check it against the ending you want.",
    bullets: [
      "What exit value does this investor need for this position to matter?",
      "Would they support a sale that is excellent for me and mediocre for them?",
      "Which requests follow from their fund rather than from my business?",
      "Have we ever discussed what a good ending looks like, explicitly?",
      "Am I reading structural incentive as personal hostility, or the reverse?"
    ]
  },
  application:
    "Say the number out loud in the first meeting. Telling a founder what outcome your fund needs, and what you would do with an early offer, costs nothing and prevents the argument that otherwise arrives under time pressure four years later. The same disclosure applies to your own position on a board: founders should know when your fund is near the end of its life and when your reserves are exhausted.",
  models: ["incentives", "power-law", "portfolio-construction", "opportunity-cost"],
  connections: [
    { to: "mvcg-reading-the-investor", type: "extends" },
    { to: "mvcg-asymmetries", type: "reinforces" },
    { to: "sshr-fund-structure", type: "related" },
    { to: "sshr-underwriting-for-outliers", type: "reinforces" },
    { to: "tpl-founder-power", type: "related" }
  ],
  quote: null
},

{
  id: "mvcg-reading-the-investor", num: 2, book_id: "mvcg", category: "investing",
  title: "Reading the Firm Across the Table",
  thesis: "Stage, fund size, ownership target and cheque size tell you more than any stated strategy.",
  reading_time: 3,
  explanation: [
    "Four facts describe what a firm can actually do, and all four are knowable before the first meeting. Fund size and vintage tell you how much capital is left and how patient it can afford to be. Cheque size and target ownership tell you what the firm needs to buy. Stage tells you what evidence they expect to see. A stated thesis is marketing, and these four numbers are constraints.",
    "The derived figure is the one that matters: what exit value this position needs in order to produce a meaningful share of the fund. A five million dollar cheque from a hundred million dollar fund behaves very differently from the same cheque written out of a billion. The first needs a very large outcome to justify the seat, and the second can be close to indifferent to a good one.",
    "Vintage year is the fact founders most often miss. A fund in its eighth year has little reserve capital, an approaching end of life and partners whose attention is on the next raise. The same firm and the same people will behave differently towards a company funded in year two. Asking which fund the cheque comes from, and what remains in it, is an entirely normal question."
  ],
  practical: {
    label: "Example: four numbers and a date",
    lead: "Establish fund size, vintage, cheque size and ownership target before deciding whether this firm fits.",
    bullets: [
      "How large is the current fund, and what year of its life is it in?",
      "How much of it is already reserved for existing positions?",
      "What ownership do they need to buy, and at what price does that break?",
      "What exit value makes this position matter to that fund?",
      "How many new investments will this partner make in the next year?"
    ]
  },
  application:
    "Publish these facts about your own fund rather than waiting to be asked, because the founders who ask are the ones who have raised before and the ones who stay quiet are the ones who will be surprised later. In diligence on co-investors, the same four numbers predict who will support a bridge and who will be absent. Vintage explains more syndicate behaviour than character does.",
  models: ["portfolio-construction", "dilution", "power-law", "incentives"],
  connections: [
    { to: "mvcg-what-the-investor-optimises", type: "extends" },
    { to: "mvcg-choosing-the-individual", type: "contrasts" },
    { to: "bvc-fee-and-carry", type: "reinforces" },
    { to: "sshr-reserves", type: "related" },
    { to: "vd-pro-rata", type: "related" }
  ],
  quote: null
},

{
  id: "mvcg-pitch-as-uncertainty-reduction", num: 3, book_id: "mvcg", category: "people",
  title: "The Pitch Removes Doubts in Order",
  thesis: "A pitch is not a performance but the sequential removal of the specific doubts blocking a yes.",
  reading_time: 2,
  explanation: [
    "Every company has a small number of things that would stop a rational investor committing, and they are usually visible from outside. Whether the market is large enough. Whether this team can build the thing. Whether anyone will pay the price. Whether a route to customers exists. The pitch is the work of finding out which of these is live for this particular investor and answering that one with evidence.",
    "Order matters because attention is finite and the objections are not equal. Answering the third most important doubt beautifully while leaving the first untouched produces a polite decline that gets attributed to fit. The stronger move is to name the largest risk yourself in the first ten minutes and say what you have done to reduce it, which also reveals quickly whether the investor is engaged.",
    "This reframes what is worth rehearsing. Not delivery, but the two or three pieces of evidence that convert a doubt into a fact: the cohort that retained, the customer that expanded, the senior hire who joined at a discount to market. A deck cannot argue on your behalf. Evidence can, and it survives being forwarded to a partner who was never in the room."
  ],
  practical: {
    label: "Example: listing the doubts first",
    lead: "Write down the objections that would stop a sensible investor, then rank them and answer the top one.",
    bullets: [
      "What are the three reasons a reasonable person would decline this?",
      "Which of them can I answer with evidence rather than argument?",
      "Am I spending the meeting on the risk they care about most?",
      "What did the questions asked tell me about their real objection?",
      "Would this evidence still persuade someone who was not in the room?"
    ]
  },
  application:
    "Run your own process the same way. Tell a founder in the first meeting which two questions will decide the outcome, then design diligence to answer exactly those. It shortens the process, makes a decline legible and useful, and prevents the common pattern where a partnership circles a deal for six weeks and then declines on a concern nobody ever put to the founder directly.",
  models: ["decision-quality", "checklist", "wysiati", "base-rates"],
  connections: [
    { to: "mvcg-asymmetries", type: "related" },
    { to: "mvcg-what-the-investor-optimises", type: "reinforces" },
    { to: "bvc-investment-process", type: "extends" },
    { to: "sshr-how-partnerships-decide", type: "reinforces" },
    { to: "tfs-wysiati", type: "related" }
  ],
  quote: null
},

{
  id: "mvcg-choosing-the-individual", num: 4, book_id: "mvcg", category: "people",
  title: "You Are Choosing a Person, Not a Logo",
  thesis: "The partner who takes the seat matters more over a decade than the firm's name does.",
  reading_time: 2,
  explanation: [
    "The relationship being entered lasts eight to twelve years and cannot be exited. The brand on the door helps modestly with hiring and with the next round. The individual in the seat affects every board meeting, every difficult conversation, and what happens when the plan stops working. Founders routinely optimise for the first of these and then live with the second.",
    "Diligence in this direction is available and rarely done. Founders who went through a hard period with that partner will say what actually happened if asked privately, and the most informative ones run companies that did not work. A list of successful portfolio founders supplied by the firm tells you about outcomes rather than about conduct.",
    "Two questions predict most of the experience. What did this partner do when a company was failing, and did they stay in the room. And how much of their standing inside their own firm rests on this deal, because a partner with little internal credit cannot deliver the follow-on support they are describing, however sincerely they describe it."
  ],
  practical: {
    label: "Example: references in the other direction",
    lead: "Take references on the individual from founders whose companies did not work, privately and specifically.",
    bullets: [
      "What did this partner do when the company missed plan for three quarters?",
      "Who in their firm sponsors this deal, and how much credit do they have?",
      "How many boards do they already sit on, and how present are they?",
      "Would a founder they wrote off take their call today?",
      "Am I choosing the brand because it is easier to explain?"
    ]
  },
  application:
    "Assume you are being diligenced this way, because in a competitive market the founders you most want will do exactly this. Your reputation is set almost entirely by conduct in the companies that failed, where there is no upside left and the temptation to disengage is strongest. That is also where a director's obligations are sharpest, and it is where the next founder's reference call will eventually land.",
  models: ["incentives", "halo-effect", "scuttlebutt", "decision-quality"],
  connections: [
    { to: "mvcg-after-the-money", type: "extends" },
    { to: "mvcg-reading-the-investor", type: "contrasts" },
    { to: "bvc-portfolio-support", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "related" },
    { to: "halo-the-halo-effect", type: "related" }
  ],
  quote: null
},

{
  id: "mvcg-after-the-money", num: 5, book_id: "mvcg", category: "people",
  title: "What Happens After the Wire",
  thesis: "Governance begins at the close, and the reporting rhythm set early is the one you keep.",
  reading_time: 3,
  explanation: [
    "A board changes the company's operating system. Decisions previously made in a corridor now require papers, a meeting and a minute. Bussgang's practical observation is that the rhythm is established in the first three meetings and almost never reset. A founder who arrives with a clear pack, a short list of open decisions and last quarter's misses already named trains the board to be useful rather than investigative.",
    "Bad news is the whole test. Information that reaches directors late converts a business problem into a trust problem, and trust is what decides whether the next bridge gets funded. Delivered early, a miss is a shared problem with several capable people working on it. Delivered in the meeting, the same miss becomes evidence about the founder rather than about the market.",
    "The meeting itself should not be a performance of the pack. Circulating materials several days ahead, spending the session on the two or three decisions that are genuinely open, and holding the contentious conversation with each director beforehand is how boards produce anything. The alternative is a founder narrating a spreadsheet to people who have already read it."
  ],
  practical: {
    label: "Example: setting the rhythm",
    lead: "Establish the reporting cadence and the rule for bad news in the first two board meetings.",
    bullets: [
      "Does the pack go out early enough for anyone to have read it?",
      "Which two decisions actually need the board, and are they on the agenda?",
      "How does bad news reach directors, and how quickly?",
      "Have I pre-briefed the contentious item with each director separately?",
      "Is the meeting reviewing the past or deciding about the future?"
    ]
  },
  application:
    "Tell a new founder exactly how you want to hear bad news and that hearing it early carries no penalty, then behave that way the first time it happens, because that single reaction sets the pattern for the remaining decade. Insist on packs circulated in advance and refuse to sit through a read-out. A board that spends its time being informed has stopped deciding anything.",
  models: ["feedback-loops", "incentives", "decision-quality", "second-order"],
  connections: [
    { to: "mvcg-founder-or-chief-executive", type: "extends" },
    { to: "mvcg-choosing-the-individual", type: "reinforces" },
    { to: "sshr-board-duty", type: "reinforces" },
    { to: "cinc-hidden-problems", type: "related" },
    { to: "ewb-candid-reporting", type: "related" }
  ],
  quote: null
},

{
  id: "mvcg-founder-or-chief-executive", num: 6, book_id: "mvcg", category: "leadership",
  title: "Founder or Chief Executive",
  thesis: "The job changes as the company scales, and sometimes the person who started it should not hold it.",
  reading_time: 3,
  explanation: [
    "The role at twenty people is invention, and at three hundred it is the design and maintenance of an organisation. These draw on different capabilities. Founders who make the transition usually did it deliberately, by hiring people better than themselves into functions they had been running badly. The prior question is not loyalty or capability but whether the person wants the second job at all.",
    "The replacement conversation goes badly when it arrives as a surprise, which it nearly always does. The honest version starts long before: an agreed account of what the company will need at the next stage, the gaps named specifically, and a genuine attempt to close them with hires and coaching. If a change does come, it should read as the conclusion of a discussion that has been running for a year.",
    "Founders who move to chief technologist or product lead often do better work, and hold more value, than founders removed entirely. Boards that force the binary lose the person and the institutional memory together. The mechanics also matter, since vesting, board composition and consent rights determine whether this is a negotiation between adults or an event that happens to someone."
  ],
  practical: {
    label: "Example: the conversation before the conversation",
    lead: "Name the gap between the role and the person early, in writing, while there is still time to close it.",
    bullets: [
      "What will this role require in eighteen months that it does not today?",
      "Which gaps are we actively trying to close, and with what support?",
      "Does this founder want the job the company will need next?",
      "Is there a role where they contribute more than as chief executive?",
      "Would this change be a surprise, and what does that say about us?"
    ]
  },
  application:
    "Do the assessment annually with the chief executive present rather than in a directors' session they are excluded from. If you are contemplating a change and the founder does not know your concern, the failure belongs to the board. Decide in advance what outcome you want: a founder who stays in a role they are excellent at, with their equity intact, is usually worth more than a clean transition.",
  models: ["incentives", "decision-quality", "second-order", "deal-terms"],
  connections: [
    { to: "mvcg-after-the-money", type: "extends" },
    { to: "mvcg-asymmetries", type: "related" },
    { to: "vd-vesting-and-acceleration", type: "reinforces" },
    { to: "tpl-founder-power", type: "contrasts" },
    { to: "sshr-board-duty", type: "related" }
  ],
  quote: null
},

{
  id: "mvcg-asymmetries", num: 7, book_id: "mvcg", category: "investing",
  title: "The Honest Asymmetries",
  thesis: "Repetition, information and a portfolio sit on one side, and one company sits on the other.",
  reading_time: 2,
  explanation: [
    "The investor has done this a hundred times and the founder is doing it once or twice. The gap shows up in documents, in what counts as a normal term, in knowing which concessions are cosmetic, and in the ability to walk away from any single negotiation without consequence. None of this is misconduct. It is the structural consequence of one party playing a repeated game and the other playing a single hand.",
    "The portfolio asymmetry is the sharper one. An investor's result is the sum of many positions, so optimal behaviour on any one of them can include letting it fail, declining a bridge, or preferring a riskier path with a larger tail. The founder has no such diversification, which means identical information can support genuinely different decisions without either party being unreasonable.",
    "The practical response is not suspicion but the deliberate purchase of repetition: a lawyer who does these deals weekly, other founders who have seen the same terms, and a second serious offer, which is the only thing that reliably shifts the balance. Trust the individual and price the structure separately, because a person can be entirely straight while the incentives still point away from you."
  ],
  practical: {
    label: "Example: buying back the gap",
    lead: "Close the experience gap with advisers, peers and a competing offer rather than with goodwill.",
    bullets: [
      "Has my lawyer done twenty of these, or is this their second?",
      "Which two founders can tell me whether this term sheet is normal?",
      "Do I have a second live option, and does the other side know?",
      "Where do their interests and mine diverge on this specific clause?",
      "Am I relying on trust in a place where a document would do?"
    ]
  },
  application:
    "Assume the asymmetry is visible to the founders you want and reduce it voluntarily, by saying which terms you will not move on and why, and by explaining what is standard instead of letting the process discover it. The founders who accept the fastest offer are rarely the best ones. Being the firm that explains its own paper costs little, and it is repeated to everyone that founder later talks to.",
  models: ["incentives", "portfolio-construction", "deal-terms", "probability"],
  connections: [
    { to: "mvcg-what-the-investor-optimises", type: "reinforces" },
    { to: "mvcg-pitch-as-uncertainty-reduction", type: "related" },
    { to: "vd-negotiation-posture", type: "extends" },
    { to: "sshr-where-the-model-fails", type: "reinforces" },
    { to: "tpl-founder-power", type: "related" }
  ],
  quote: null
}

);
