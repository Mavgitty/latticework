/* Secrets of Sand Hill Road — Scott Kupor — 9 ideas */
window.DB.ideas.push(

{
  id: "sshr-fund-structure", num: 1, book_id: "sshr", category: "investing",
  title: "What the Fund Structure Forces",
  thesis: "A ten-year fund, fees on committed capital and carry on profits explain most venture behaviour.",
  reading_time: 3,
  explanation: [
    "A venture fund is a closed-end vehicle with a defined life, commonly ten years with provision for extensions. Investors commit capital rather than transferring it, and the firm calls it as needed across an investment period of perhaps three to five years, holding the rest back for follow-on. The firm earns an annual management fee, often around two per cent of commitments, and a share of profits, conventionally twenty per cent, paid only after the capital is returned.",
    "Those two lines interact in a way that sets the target. Fees are paid from the committed capital, so a hundred million dollar fund with ten years of fees at that rate has roughly eighty million to invest. Returning three times the commitment net of carry requires gross proceeds around three hundred and fifty million, which is more than four times the money actually invested. The gross number, not the net one, is what each investment is measured against.",
    "The clock does the rest. A company backed in year six has four years to reach liquidity inside the fund's life, which is why late-fund investments look different from early ones and why firms raise a successor every two to four years. Carry pays on realisations while the next fund is raised on marks, so the two things the firm is optimising for are not quite the same thing."
  ],
  practical: {
    label: "Example: reading the fund's arithmetic",
    lead: "Work out how much of the committed capital is actually invested, and what gross multiple the target requires.",
    bullets: [
      "How much of the commitment goes to fees over the full life?",
      "What gross proceeds does the promised net return require?",
      "How many years remain for an investment made today?",
      "Is carry calculated on the whole fund or deal by deal?",
      "What is the firm optimising this year, realisations or marks?"
    ]
  },
  application:
    "Do this arithmetic on your own fund and then on the funds sitting alongside you in a syndicate, because their position in their own fund's life predicts their behaviour better than anything they say in a board meeting. A co-investor in year nine with no reserves and a fundraise underway will push for a sale, and a first-year fund with capital to deploy will not. Knowing which one you are dealing with changes how you prepare.",
  models: ["incentives", "portfolio-construction", "opportunity-cost", "cost-of-capital"],
  connections: [
    { to: "sshr-limited-partners", type: "extends" },
    { to: "sshr-underwriting-for-outliers", type: "extends" },
    { to: "incentives", type: "reinforces" },
    { to: "tpl-risk-capital", type: "related" },
    { to: "ewb-compensation", type: "related" }
  ],
  quote: null
},

{
  id: "sshr-limited-partners", num: 2, book_id: "sshr", category: "investing",
  title: "Who Supplies the Capital",
  thesis: "Venture money comes from institutions with obligations of their own, and those obligations set the constraints.",
  reading_time: 3,
  explanation: [
    "The money in a venture fund comes from endowments, foundations, pension schemes, sovereign funds, insurers, funds of funds and family offices. For most of them venture is a small slice of a much larger allocation, chosen for the return it might add to a portfolio rather than for any interest in the companies themselves. That framing explains a great deal about what they ask for and how patient they can afford to be.",
    "Each has obligations of its own. A university endowment supports a spending rate of roughly four to five per cent a year and needs distributions to meet it, so an illiquid asset returning nothing for a decade has to be carried by the rest of the portfolio. Allocations are set as percentages, commitments are paced across vintages to avoid concentrating in one year, and performance is measured against a benchmark chosen by someone answering to a board.",
    "Those obligations constrain the firm in specific ways. Fund size has to match a strategy that can genuinely deploy it, since a fee stream is easier to raise than a return on it. Pacing has to be steady enough that investors can re-commit on schedule. And when public markets fall, the private allocation rises as a share of a smaller total, which slows new commitments for reasons that have nothing to do with the firm's performance."
  ],
  practical: {
    label: "Example: understanding the capital behind the fund",
    lead: "Ask what each investor in the fund needs from it and by when, then test the strategy against those answers.",
    bullets: [
      "Which kinds of institution supply this fund's capital?",
      "What do they need in distributions, and on what timetable?",
      "Is the fund sized to a strategy that can deploy it?",
      "What happens to their commitments if public markets fall a third?",
      "What are they comparing this fund's return against?"
    ]
  },
  application:
    "Read the fund's own agreement with the attention you would give a term sheet, because the pacing, size and reporting obligations in it decide what you can do with a company later. A firm that has raised more than its strategy absorbs will write larger cheques into worse companies, and the pressure arrives as a mandate rather than as a choice. That constraint is set at the fundraise, not at the investment committee.",
  models: ["incentives", "portfolio-construction", "capital-allocation", "opportunity-cost"],
  connections: [
    { to: "sshr-fund-structure", type: "extends" },
    { to: "sshr-reserves", type: "related" },
    { to: "tpl-risk-capital", type: "related" },
    { to: "ewb-institutional-imperative", type: "related" },
    { to: "tos-capital-allocation", type: "related" }
  ],
  quote: null
},

{
  id: "sshr-underwriting-for-outliers", num: 3, book_id: "sshr", category: "investing",
  title: "Underwriting Every Deal for an Outlier",
  thesis: "The fund's arithmetic, not the firm's ambition, requires each investment to be capable of enormous scale.",
  reading_time: 3,
  explanation: [
    "The power law itself is documented elsewhere in this library. What matters here is the requirement it places on each individual decision, which follows from the size of the fund rather than from any appetite for risk. If a small number of positions must produce nearly all of the gross proceeds, every position has to be capable of being one of them at the moment it is made, because nobody knows in advance which one it will be.",
    "The number is easy to compute and uncomfortable to state. A hundred million dollar fund aiming to return three times that net needs roughly three hundred and fifty million gross. A position holding ten per cent at exit returns a hundred million on a one billion dollar outcome, which is under a third of the target. A company with a realistic ceiling of two hundred million cannot move that fund, whatever price it is bought at.",
    "So a rejection often has nothing to do with the quality of the business. A profitable company growing steadily toward a two hundred million dollar outcome is a good business and a bad fit for that fund, and the honest version of the conversation says exactly that. The same arithmetic explains the pressure a company feels once the money is taken, because the plan that justified the investment was never the comfortable one."
  ],
  practical: {
    label: "Example: testing a deal against the fund",
    lead: "Before assessing the company, work out what outcome the fund needs this particular position to produce.",
    bullets: [
      "What ownership would I hold at exit after expected dilution?",
      "What exit value returns a meaningful share of the fund?",
      "Is that outcome available in this market at all?",
      "Am I rejecting a good business for being the wrong shape?",
      "Have I told the founder which of those two reasons applies?"
    ]
  },
  application:
    "State the required outcome in the memo, in dollars, before the qualitative assessment. It converts a debate about whether the company is impressive into a question about whether the market permits the result the fund needs, which is answerable. It also disciplines fund sizing, since the same test run across a whole pipeline shows quickly whether the fund you have raised matches the opportunities you actually see.",
  models: ["power-law", "portfolio-construction", "base-rates", "decision-quality"],
  connections: [
    { to: "sshr-fund-structure", type: "reinforces" },
    { to: "sshr-where-the-model-fails", type: "related" },
    { to: "tpl-power-law-returns", type: "extends" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "zto-small-market", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sshr-how-partnerships-decide", num: 4, book_id: "sshr", category: "people",
  title: "How a Partnership Decides",
  thesis: "A founder is not pitching a firm. They are equipping one partner to argue for them.",
  reading_time: 3,
  explanation: [
    "Firms differ in their decision rules, but the shape is consistent. One partner takes an opportunity forward and spends internal credibility doing it, and the partnership meeting is where that partner argues rather than where the founder does. Some firms require broad agreement, some deliberately allow a single partner to proceed over the doubts of others, and the difference determines what kind of company can get funded there.",
    "This changes what a founder is doing in the room. The material has to survive being retold by somebody who was not present, to people who will ask harder questions than the founder heard, and the sponsor has to be able to answer them alone. Giving that person two or three numbers and one crisp explanation of why the market can become large is worth more than a comprehensive deck they cannot carry.",
    "The mechanism has failure modes worth naming. A consensus rule selects against companies that any partner finds strange, which is a poor filter in a business where the strange ones produce the returns. A conviction rule selects for the partner best at internal persuasion. Both weaken when a round is competitive and moving quickly, which is exactly when the process is most needed and least likely to be followed."
  ],
  practical: {
    label: "Example: equipping the sponsor",
    lead: "Find out who will carry the deal internally and what they will be asked, then arm them for it.",
    bullets: [
      "Who is sponsoring this internally, and what does it cost them?",
      "Is the firm's rule broad consensus or single-partner conviction?",
      "What three things must the sponsor be able to say unaided?",
      "Which objection will be raised that the sponsor cannot yet answer?",
      "Is the timetable compressing the process, and who noticed?"
    ]
  },
  application:
    "Sponsoring a deal means committing to answer for it for years, which is a useful discipline and a source of the sunk-cost problem later. Write the objections you expect before the meeting and answer them in the memo, so the discussion starts past the obvious ones. When a competitive process compresses the timetable, say out loud which parts of the process are being skipped, and record it, because the alternative is finding the gap in the post-mortem.",
  models: ["decision-quality", "social-proof", "incentives", "authority-bias"],
  connections: [
    { to: "sshr-team-market-product", type: "extends" },
    { to: "sshr-fund-structure", type: "related" },
    { to: "tib-truthseeking-group", type: "reinforces" },
    { to: "cinc-braintrust", type: "related" },
    { to: "halo-the-halo-effect", type: "related" }
  ],
  quote: null
},

{
  id: "sshr-team-market-product", num: 5, book_id: "sshr", category: "investing",
  title: "Team, Market, Product",
  thesis: "Firms assess the same three things and disagree about their order, and the order matters.",
  reading_time: 3,
  explanation: [
    "The assessment reduces to three questions. Whether this team can attract the people and capital the plan requires, whether the market can become large enough to matter, and whether the product is a real improvement rather than a preference. Each rests on different evidence: the team on what they have done and how they discuss their own weaknesses, the market on structure and adoption, the product on what customers do rather than what they say.",
    "Where firms differ is the ranking. The argument for putting market first is that a capable team in a market with a ceiling has nowhere to go, while an adequate team in an enormous market is often carried by it. The counter-argument is that early companies change what they are doing, so the people are the only durable input. Stage settles part of the dispute, since a seed round has almost no product evidence to weigh.",
    "The value of stating an order is that it tells you what could change your mind. A firm ranking market first can be argued out of a doubt about the team by evidence on the market, and knows it. A firm with no stated ranking resolves each decision by whichever factor happened to look strongest, which is hard to distinguish from having no criteria and produces a portfolio nobody chose."
  ],
  practical: {
    label: "Example: ranking the three",
    lead: "State your order before assessing, then name the evidence in each category that would change the answer.",
    bullets: [
      "Which of the three am I weighting most, and why here?",
      "What evidence about the market would overturn my doubt about the team?",
      "What are customers doing, as distinct from saying?",
      "Does the ceiling on this market permit the outcome required?",
      "Has my ranking moved because I like the founder?"
    ]
  },
  application:
    "Write the ranking into the memo template so that every deal answers the same three questions in the same order, which makes the portfolio comparable and the misses instructive. Then test it against your own realisations rather than against your beliefs, because a firm can hold a stated preference for market size while its actual cheques track founder charisma. The record settles that question and the partnership discussion does not.",
  models: ["decision-quality", "base-rates", "monopoly", "checklist"],
  connections: [
    { to: "sshr-how-partnerships-decide", type: "extends" },
    { to: "sshr-underwriting-for-outliers", type: "reinforces" },
    { to: "zto-seven-questions", type: "related" },
    { to: "zto-founding-team", type: "related" },
    { to: "halo-the-halo-effect", type: "contrasts" }
  ],
  quote: null
},

{
  id: "sshr-reserves", num: 6, book_id: "sshr", category: "investing",
  title: "Reserves Are a Portfolio Decision",
  thesis: "Follow-on capital is allocated across the portfolio, not earned by the company asking for it.",
  reading_time: 3,
  explanation: [
    "A fund holds part of its capital back for later rounds in companies it already owns. The ratio is a choice made at the start, and it decides how much of a winner the fund can still own at exit. The decision to use it is not really about the company in front of you. It is about which of your positions has the best claim on the last dollars in the fund, judged with information the initial cheque did not have.",
    "The arithmetic constrains sharply. A hundred million dollar fund with eighty million to invest and twenty five initial positions of two million each has spent fifty million and holds thirty million in reserve, a little over half the initial capital. Maintaining a position through three subsequent rounds in even three companies can absorb most of that, so a fund with many more positions than reserves has already decided it will not follow in most of them.",
    "The predictable failure is spending reserves early on companies that need money rather than late on companies that have earned it. Difficulty arrives before success, and a rescue financing is emotionally easier to approve than a large cheque at a price that feels expensive. The other complication is signalling, since a sitting investor who declines to follow tells the market something, and that consequence has to be accepted when the policy is written rather than discovered afterwards."
  ],
  practical: {
    label: "Example: allocating the reserve",
    lead: "Rank every position by its claim on the next follow-on dollar, and revisit that ranking every quarter.",
    bullets: [
      "What reserve ratio did I set, and where does it now stand?",
      "Which three positions have the strongest claim on what remains?",
      "Am I funding difficulty here, or funding demonstrated evidence?",
      "What does declining to follow signal to the incoming lead?",
      "Could I still hold a meaningful position in my best company?"
    ]
  },
  application:
    "Set the ratio in the fund model and defend it at the quarterly review rather than in the week a round is being priced. Rank the portfolio explicitly for follow-on and keep the ranking written down, because the alternative is a sequence of individually defensible cheques that together spend the reserve on the middle of the portfolio. Sitting on a board makes this harder, so the ranking is better made by people who do not hold the seat.",
  models: ["portfolio-construction", "power-law", "capital-allocation", "opportunity-cost"],
  connections: [
    { to: "sshr-fund-structure", type: "reinforces" },
    { to: "sshr-underwriting-for-outliers", type: "related" },
    { to: "vd-pro-rata", type: "extends" },
    { to: "tpl-power-law-returns", type: "related" },
    { to: "tos-capital-allocation", type: "related" }
  ],
  quote: null
},

{
  id: "sshr-board-duty", num: 7, book_id: "sshr", category: "people",
  title: "A Director's Duty and an Investor's Interest",
  thesis: "The seat and the fund answer to different parties, and the conflict is structural rather than occasional.",
  reading_time: 3,
  explanation: [
    "A director's obligations run to the company, and an investor's interest is the return of one particular fund. For most decisions the two point the same way, which is why the conflict stays invisible for years at a time. The precise content of those duties depends on the jurisdiction and on the company's own documents, so the useful posture is to know that the two roles exist and to take advice rather than to assume a rule about them.",
    "Divergence shows up at predictable moments. An offer that pays the preference and little else. A financing the fund would like priced low. A follow-on round the fund declines to join while sitting on the board that approved the raise. Replacing a founder the fund recruited. In each of them a director is being asked to decide something in which the fund has a distinct and identifiable stake.",
    "What helps is procedural. Disclose the interest early, in the meeting rather than afterwards. Get genuinely independent directors onto the board before they are needed, since appointing one during a crisis rarely works. Keep the negotiation of terms separate from the board's deliberation about accepting them. And treat the seat as a source of information and influence rather than a vote, because a director relying on the vote has usually already lost the argument."
  ],
  practical: {
    label: "Example: handling the conflict",
    lead: "Identify the decisions where your fund's interest and the company's diverge, and set the procedure before they arrive.",
    bullets: [
      "Which upcoming decisions put the fund and the company on different sides?",
      "Have I disclosed the interest in the meeting, and is it minuted?",
      "Is there an independent director capable of running this discussion?",
      "Am I negotiating the terms and voting on them both?",
      "Whose advice is the board taking, and who does that adviser act for?"
    ]
  },
  application:
    "Decide in advance which decisions you will step back from, because doing it in the moment reads as an admission. Build the independent seat into the original documents rather than negotiating it during a difficult financing. And keep a written record of the conflicts you disclosed, which protects the company, the fund and your own account of what happened when the outcome is examined years later by people who were not there.",
  models: ["incentives", "second-order", "decision-quality", "deal-terms"],
  connections: [
    { to: "sshr-exit-and-wind-down", type: "related" },
    { to: "sshr-fund-structure", type: "related" },
    { to: "vd-board-and-protective-provisions", type: "extends" },
    { to: "tpl-governance-limits", type: "reinforces" },
    { to: "ewb-owner-principles", type: "related" }
  ],
  quote: null
},

{
  id: "sshr-exit-and-wind-down", num: 8, book_id: "sshr", category: "investing",
  title: "When the Company Is Sold or Wound Down",
  thesis: "At the end a waterfall replaces the shared interest, and everyone finds out where they stood.",
  reading_time: 3,
  explanation: [
    "A sale converts a shared story into a waterfall. Creditors and preferences are paid in their order, common receives what is left, and terms agreed years earlier decide the split without further discussion. Consideration is rarely all cash on the day, since escrows, holdbacks and earn-outs move part of the value into the future and toward the people who remain, so the headline price and the amount received differ, sometimes substantially.",
    "A wind-down inverts the attention. Creditors rank ahead of every equity holder, so the questions that matter are unpaid wages, tax obligations and the exposure of directors and officers, all of which depend heavily on the jurisdiction and on how the process is run. The formal options vary by place and by the size of the liabilities, and the common thread is that the decision to stop should be taken while there is still cash to do it properly.",
    "Interests separate visibly in both cases. Preferred holders can be made whole at a price that leaves common with nothing, which is why management carve-outs exist and why they are so often negotiated late and badly. Employees who will be retained have a different interest from those who will not. And two funds on the same board can want opposite outcomes because one is in year nine and the other in year two."
  ],
  practical: {
    label: "Example: reading the waterfall",
    lead: "Model the actual proceeds to each class at the offer on the table, before anyone debates whether to accept.",
    bullets: [
      "Who is paid, and in what order, at this price?",
      "How much consideration is escrowed, held back or contingent?",
      "Does common receive enough for the team to complete the deal?",
      "Which board members' funds want different outcomes here, and why?",
      "If winding down, is there cash left to do it properly?"
    ]
  },
  application:
    "Get the waterfall modelled and circulated before the board discusses an offer, because the conversation is unmanageable once people have formed views without the numbers. Raise the carve-out early, while it is still a governance question rather than a hostage negotiation. And decide a wind-down while cash remains, since the version of that decision taken three months later is worse for creditors, for staff and for the directors who delayed it.",
  models: ["deal-terms", "incentives", "loss-aversion", "second-order"],
  connections: [
    { to: "sshr-board-duty", type: "related" },
    { to: "sshr-fund-structure", type: "related" },
    { to: "vd-liquidation-preference", type: "extends" },
    { to: "tpl-governance-limits", type: "related" },
    { to: "avoiding-ruin", type: "related" }
  ],
  quote: null
},

{
  id: "sshr-where-the-model-fails", num: 9, book_id: "sshr", category: "people",
  title: "Where the Model Fails Founders",
  thesis: "Venture serves a narrow set of companies well, and the mismatch costs founders more than investors.",
  reading_time: 3,
  explanation: [
    "The asymmetry is the core of it. An investor holds thirty positions and needs one of them to be extraordinary. A founder holds one and needs it to work. The same plan is therefore rational for the fund and arguably reckless for the person running the company, and the fund's preference for the plan with the larger tail is not a mistake or a moral failure. It is what the structure pays for.",
    "Several costs follow from that. A company steered toward a distribution it does not fit ends up too expensive to sell and not large enough to list. Preference structures accumulated over four rounds can leave the people who built the business with very little in the mid-range outcomes that are statistically most likely. Raising more than is useful erodes the discipline that made the company work. And access stays concentrated in networks that exclude capable people for reasons unrelated to ability.",
    "The honest response is narrow but real. Say what shape of company the fund can back and decline clearly rather than with a story about timing, since a vague no costs a founder months. Name the alternatives when they fit, including debt, slower growth and an early sale. And do not pretend the conflict is dissolved by good intentions, because the structure producing it will still be there after the partner who regrets it has moved on."
  ],
  practical: {
    label: "Example: an honest no",
    lead: "Separate the judgement about the business from the judgement about its fit with your fund, then say which applies.",
    bullets: [
      "Is this a weak business, or the wrong shape for this fund?",
      "Have I said which, in words the founder can act on?",
      "Would this company be better served by debt or slower growth?",
      "Am I encouraging a raise larger than the plan actually needs?",
      "Whose consequences am I weighing in this recommendation?"
    ]
  },
  application:
    "Two practices make this concrete. Decline in one paragraph that names the real reason, and keep a record of the passes so the pattern is visible when a fund's actual criteria drift from its stated ones. On boards, resist the raise that exists to support a valuation rather than a plan, because the founder carries the structure that comes with it long after the round has stopped being impressive to anybody.",
  models: ["incentives", "power-law", "dilution", "second-order"],
  connections: [
    { to: "sshr-underwriting-for-outliers", type: "extends" },
    { to: "sshr-fund-structure", type: "related" },
    { to: "tpl-founder-power", type: "contrasts" },
    { to: "tpl-late-stage-drift", type: "related" },
    { to: "pom-tails-drive-everything", type: "related" }
  ],
  quote: null
}

);
