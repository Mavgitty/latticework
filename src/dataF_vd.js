/* Venture Deals — Brad Feld and Jason Mendelson — 10 ideas */
window.DB.ideas.push(

{
  id: "vd-economics-and-control", num: 1, book_id: "vd", category: "investing",
  title: "Two Negotiations in One Document",
  thesis: "A term sheet settles who gets the money and who makes the decisions, separately.",
  reading_time: 3,
  explanation: [
    "Feld and Mendelson divide every term sheet into two groups. Economics covers price, liquidation preference, participation, the option pool and anything else that decides who receives what when money finally arrives. Control covers board composition, protective provisions and consent rights, meaning who can approve or block a decision. The two lists are negotiated in the same conversation and settle different questions, which is why a founder tracking only the valuation can lose the deal while winning the number.",
    "Economic terms are contingent and control terms are not. A liquidation preference only does anything at an exit, and it can be renegotiated when the next round arrives. A board seat and a list of vetoes operate every month in between, including on the decision about whether an exit happens at all. Control is therefore the earlier lever: it shapes the events that the economic terms later divide up.",
    "The practical consequence is that the two lists trade against each other. An investor who wants a headline valuation the founder can announce will often take it back through participation or a larger pre-money option pool. An investor pressed hard on price frequently asks for stronger consent rights instead. Reading a term sheet means totalling both lists and asking which combination you have actually agreed, rather than comparing headline numbers across competing offers."
  ],
  practical: {
    label: "Example: separating the two lists",
    lead: "Split the term sheet into economics and control, then price each list independently before comparing offers.",
    bullets: [
      "Which terms here change what I receive at an exit?",
      "Which terms here change who can approve or block a decision?",
      "What is the headline valuation costing me elsewhere in the document?",
      "If I won every economic term and lost every control term, would I take it?",
      "Which of the two offers is better once both lists are totalled?"
    ]
  },
  application:
    "Compare offers on the whole document rather than on entry price, and do the same when leading. A firm that pays up on valuation and takes participation, a pre-money pool and a full set of vetoes has bought a cheaper deal than the headline suggests, which is worth knowing about your own reputation as much as about the outcome. Founders compare notes, and the terms you insisted on last year price your next deal.",
  models: ["deal-terms", "incentives", "second-order", "opportunity-cost"],
  connections: [
    { to: "vd-liquidation-preference", type: "extends" },
    { to: "vd-board-and-protective-provisions", type: "extends" },
    { to: "vd-negotiation-posture", type: "related" },
    { to: "tpl-founder-power", type: "related" },
    { to: "incentives", type: "reinforces" }
  ],
  quote: null
},

{
  id: "vd-liquidation-preference", num: 2, book_id: "vd", category: "investing",
  title: "The Liquidation Preference",
  thesis: "Preference decides who is paid first, and participation decides whether they are paid twice.",
  reading_time: 3,
  explanation: [
    "The preference is the amount preferred holders take before common holders receive anything, usually expressed as a multiple of the money invested. A one times non-participating preference gives the holder a choice at exit: take the invested amount back, or convert to common and take the ownership percentage. Rational holders take whichever is larger, so the preference behaves as a floor at low exit values and disappears entirely at high ones.",
    "Take ten million invested for twenty five per cent, a forty million dollar post-money valuation. At a forty million exit the two options are identical, ten million either way, since the indifference point is the preference divided by the ownership. Participation changes that. A one times participating preference takes ten million first and then twenty five per cent of the remaining thirty, producing seventeen and a half million, and leaving common with twenty two and a half rather than thirty.",
    "Multiples compound the effect. A two times participating preference on the same ten million takes twenty million off the top and then a quarter of what is left, so twenty five of the forty million. The structure matters most in the middling outcomes that most companies actually produce, and almost not at all in the outcomes venture funds are underwriting for, which is why founders and investors can argue about it while both being right about their own case."
  ],
  practical: {
    label: "Example: preference at three exit values",
    lead: "Run the same preference through a low, middling and high exit before agreeing to it.",
    bullets: [
      "Is the preference participating, and at what multiple?",
      "At what exit value does a non-participating holder prefer converting?",
      "What does common receive at a twenty four million dollar exit?",
      "How do the preferences from earlier rounds stack against this one?",
      "Does the structure only look reasonable in the outcome we are all forecasting?"
    ]
  },
  application:
    "Preference is where a fund's downside is actually managed, and where a board seat later becomes uncomfortable. In a modest sale the preferred holder you represent is paid before the founders and staff who built the thing, and a participating stack can consume the whole consideration. Knowing the waterfall at several exit values before signing tells you which conversations you have committed yourself to having, and whether a management carve-out will be needed to get a deal done at all.",
  models: ["deal-terms", "margin-of-safety", "incentives", "loss-aversion"],
  connections: [
    { to: "vd-economics-and-control", type: "extends" },
    { to: "vd-notes-and-safes", type: "related" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "avoiding-ruin", type: "related" },
    { to: "tpl-stage-by-stage", type: "related" }
  ],
  quote: null
},

{
  id: "vd-option-pool", num: 3, book_id: "vd", category: "investing",
  title: "Where the Option Pool Comes From",
  thesis: "A pool created before the money arrives is paid for entirely by the existing holders.",
  reading_time: 3,
  explanation: [
    "Every term sheet specifies an unissued option pool for hiring, expressed as a percentage of the post-closing fully diluted shares. The investor wants it large enough that the next two years of hiring does not require another issuance, and wants it created before the round closes. Founders read the percentage as a governance detail about employee incentives. It is a price term, and often the second largest one in the document.",
    "The arithmetic is simple. Ten million at a thirty million pre-money buys twenty five per cent of a forty million dollar company, leaving the founders with seventy five. Insert a ten per cent post-closing pool created pre-money and the founders hold sixty five while the investor still holds twenty five. Create the same pool after closing and both dilute proportionally, to sixty seven and a half and twenty two and a half. The pre-money version puts the whole pool on the founders.",
    "Which makes the effective pre-money valuation twenty six million rather than thirty, and makes the size of the pool worth arguing about from a hiring plan rather than from convention. Naming every role to be filled before the next round usually produces a smaller number than the standard ten to fifteen per cent, and a specific one. The defensible position is that shares reserved for hires nobody can yet describe should not be treated as already issued."
  ],
  practical: {
    label: "Example: sizing the pool from the plan",
    lead: "Build the pool from named roles and expected grants, then check what the number does to ownership.",
    bullets: [
      "Which specific hires does this pool cover, and by when?",
      "Is the pool created before or after the money arrives?",
      "What is the effective pre-money valuation once the pool is deducted?",
      "What ownership do the founders hold after both the pool and the round?",
      "Who bears the dilution if the pool proves too small next year?"
    ]
  },
  application:
    "On the investing side the pre-money pool is a standard ask and a defensible one, since the hiring is genuinely required and incoming money should not fund a founder's earlier underpayment of staff. On the board side the same pool becomes a retention instrument, and an undersized one forces a top-up at the worst moment, usually mid-round. Sizing it honestly at entry is cheaper than the argument about a refresh two years later.",
  models: ["dilution", "deal-terms", "anchoring", "incentives"],
  connections: [
    { to: "vd-economics-and-control", type: "extends" },
    { to: "vd-vesting-and-acceleration", type: "related" },
    { to: "vd-negotiation-posture", type: "related" },
    { to: "ewb-share-issuance", type: "related" },
    { to: "tpl-founder-power", type: "related" }
  ],
  quote: null
},

{
  id: "vd-pro-rata", num: 4, book_id: "vd", category: "investing",
  title: "Pro Rata Rights",
  thesis: "The right to keep buying into your winners is worth more than the first cheque.",
  reading_time: 3,
  explanation: [
    "A pro rata right lets an existing holder buy enough of the next round to keep its percentage. It is usually granted only to holders above a defined size, sometimes called major investors, and it is one of the terms most often quietly dropped in later rounds when the new lead wants the whole allocation. Some investors ask for more than their share, a super pro rata, which is a request for an option on the company rather than a protection against dilution.",
    "Dilution does the work quietly. A ten per cent seed position, diluted by three subsequent rounds each issuing twenty per cent of new shares, ends at about five per cent. On a one billion dollar outcome that is fifty million rather than a hundred, before preferences. Exercising pro rata costs real money at each round and at rising prices, so the return on those later dollars is lower than on the seed dollars, and the total returned is roughly doubled.",
    "This is where the power law meets portfolio construction. Most positions will not be worth another cheque, so the right is only valuable in the two or three that are, and those are exactly the rounds where allocation is contested. A fund that has not reserved capital holds a right it cannot exercise, and the question it faces at that moment is not whether the company is good but whether it can afford to keep its share of it."
  ],
  practical: {
    label: "Example: what the right is worth",
    lead: "Price the right by asking what maintaining the position through the next three rounds would cost and return.",
    bullets: [
      "Do I hold pro rata, and does the threshold definition include me?",
      "What capital would exercising it in my best two positions require?",
      "Has this right survived the last round's documents, or been dropped?",
      "Where does my ownership land after three rounds without exercising?",
      "Am I reserving for winners, or for companies that need rescuing?"
    ]
  },
  application:
    "Reserve policy and pro rata are the same decision seen from two ends. Set the reserve ratio when the fund is raised, because setting it deal by deal means the earliest and least informed positions consume it. On boards the useful discipline is to know, before a round is priced, whether you intend to take your allocation, since hesitating signals doubt to the incoming lead and that signal is hard to withdraw.",
  models: ["power-law", "portfolio-construction", "optionality", "opportunity-cost"],
  connections: [
    { to: "vd-economics-and-control", type: "related" },
    { to: "vd-negotiation-posture", type: "related" },
    { to: "tpl-power-law-returns", type: "reinforces" },
    { to: "zto-power-law", type: "reinforces" },
    { to: "tpl-stage-by-stage", type: "related" }
  ],
  quote: null
},

{
  id: "vd-anti-dilution", num: 5, book_id: "vd", category: "investing",
  title: "Anti-Dilution Provisions",
  thesis: "A down round adjusts the earlier conversion price, and the formula decides who absorbs it.",
  reading_time: 3,
  explanation: [
    "Anti-dilution protects the price an earlier investor paid, not the percentage they hold. If the company later issues shares below that price, the earlier holder's conversion price is adjusted downwards, so their preferred converts into more common than before. Ordinary dilution from new capital at a higher price is untouched. The provision only fires on a down round, which means it is a term about the bad case, negotiated in the good one.",
    "The two formulas differ enormously. Say an investor bought one million shares at a dollar with ten million shares outstanding, and the company later issues two million shares at fifty cents. A full ratchet resets the conversion price to fifty cents, turning that million shares into two million and placing all of the dilution on common. Broad-based weighted average weights the new issue against the whole capitalisation, giving a conversion price near ninety two cents and about nine per cent more shares.",
    "The base in broad-based means the denominator includes options and other convertibles, which makes the adjustment smaller and the term more favourable to everyone holding common. Full ratchet is worth resisting for a reason beyond fairness. A capital structure carrying it becomes harder to finance, because the next investor can see that a lower price triggers a windfall to the previous round, and the cleanest way out is often a recapitalisation that hurts every existing holder."
  ],
  practical: {
    label: "Example: modelling the down round",
    lead: "Run a fifty per cent down round through the documents and see who ends up owning what.",
    bullets: [
      "Is the provision full ratchet or broad-based weighted average?",
      "What does the conversion price become at half the last round price?",
      "Is there a pay-to-play condition attached to keeping the protection?",
      "What happens to common and to the option pool in that case?",
      "Would the next investor find this structure financeable at all?"
    ]
  },
  application:
    "Weighted average is the term to hold out for as a lead, and worth explaining to a founder in those words, since the founder is usually being asked to choose between price and structure without seeing the mechanism. From a board seat the provision creates a live conflict during a difficult financing, because the fund benefits from a lower price in a way the common holders do not. Naming that conflict early is better than having it discovered.",
  models: ["deal-terms", "dilution", "second-order", "incentives"],
  connections: [
    { to: "vd-liquidation-preference", type: "related" },
    { to: "vd-notes-and-safes", type: "related" },
    { to: "vd-board-and-protective-provisions", type: "related" },
    { to: "tpl-late-stage-drift", type: "related" },
    { to: "avoiding-ruin", type: "related" }
  ],
  quote: null
},

{
  id: "vd-board-and-protective-provisions", num: 6, book_id: "vd", category: "investing",
  title: "Board Seats and Vetoes",
  thesis: "Control travels through board composition and consent rights, not through the ownership percentage.",
  reading_time: 3,
  explanation: [
    "Board composition is the first control term. An early structure of two founders, one investor and one mutually agreed independent looks balanced and turns entirely on who the independent is, which is why that appointment deserves more attention than it usually gets. Each subsequent round adds a seat or replaces one, and by the third round the founders can be a minority on a board they still nominally lead.",
    "Protective provisions run in parallel and work differently. They give the preferred class, voting separately, a veto over a defined list: selling the company, issuing new senior preferred, changing the charter, increasing the option pool, taking on debt above a threshold, paying dividends. A veto is not a right to direct the company. It is a right to prevent, which is sufficient, because most of the things a struggling company needs to do appear on that list.",
    "Together they explain how a holder of twenty per cent decides whether a company is sold. The board approves a transaction and the class vote can block it, and neither test is about the ownership. This is also why a founder who traded control terms for a higher valuation may discover that the price was the only thing they won, and why the exact drafting of these clauses matters far more than the summary in the term sheet."
  ],
  practical: {
    label: "Example: reading the control terms",
    lead: "Map who appoints each seat and what the preferred class can block, then test a hard decision against it.",
    bullets: [
      "Who nominates each board seat, and who chooses the independent?",
      "Which decisions require a separate vote of the preferred class?",
      "Could the company be sold over my objection, or I over its?",
      "What happens to the board across the next two rounds?",
      "Which of these vetoes would actually bind in a genuine crisis?"
    ]
  },
  application:
    "As an investor the honest question is which of these rights you would ever use, because a veto exercised against a founder and a board majority is close to a terminal event for the relationship. The rights are most valuable as a reason to be consulted early rather than as a mechanism for deciding. Sitting on the board, keep the two hats separate in your own mind, since the seat carries duties that do not run to your fund.",
  models: ["deal-terms", "incentives", "authority-bias", "second-order"],
  connections: [
    { to: "vd-economics-and-control", type: "extends" },
    { to: "vd-drag-along", type: "reinforces" },
    { to: "tpl-founder-power", type: "contrasts" },
    { to: "tpl-governance-limits", type: "related" },
    { to: "ewb-owner-principles", type: "related" }
  ],
  quote: null
},

{
  id: "vd-drag-along", num: 7, book_id: "vd", category: "investing",
  title: "Forcing the Sale",
  thesis: "A drag-along lets a defined majority commit everyone else to a transaction they oppose.",
  reading_time: 2,
  explanation: [
    "A drag-along names a group whose approval obliges the remaining holders to go along with a sale. The obligation is more than voting in favour. It typically extends to signing the transaction documents, giving representations, accepting an escrow and waiving whatever dissent or appraisal rights the governing documents and the jurisdiction provide. The negotiation is almost entirely about who sits inside the triggering group.",
    "Buyers are the reason the clause exists. Almost no acquirer wants a company with a scattered set of holdout minority holders, and a founder cannot practically chase signatures from every former employee. So the provision is normal, and its usual form requires the board, a majority of the preferred and sometimes a majority of the common. Dropping that last requirement from the list changes who decides whether the company is sold.",
    "The conflict appears when a price clears the preference stack and little else. A preferred holder can be fully paid at a valuation that returns nothing to common, and can prefer that to another two years of work. Directors owe duties that complicate voting for it, the drafting varies between firms, and the enforceability of specific mechanics depends on the documents and the jurisdiction. That combination is a reason to take advice on the clause before signing rather than after."
  ],
  practical: {
    label: "Example: who is inside the threshold",
    lead: "Identify the exact set of consents that triggers a drag, and test it against a low-price sale.",
    bullets: [
      "Which holders must approve before everyone else is obliged?",
      "Does the trigger require a majority of the common as well?",
      "What exactly are dragged holders required to sign and give?",
      "At what price does common receive nothing from this waterfall?",
      "Who would be conflicted in that vote, and how is it handled?"
    ]
  },
  application:
    "Read the drag together with the preference stack, because the two clauses jointly determine whether a mediocre sale can be forced and who is paid in it. A board considering such an offer needs the waterfall on the table and the conflicts named, and usually a management carve-out to give the people running the business a reason to complete it. That negotiation goes better when it starts before the offer arrives.",
  models: ["deal-terms", "incentives", "second-order", "loss-aversion"],
  connections: [
    { to: "vd-liquidation-preference", type: "reinforces" },
    { to: "vd-board-and-protective-provisions", type: "reinforces" },
    { to: "sshr-exit-and-wind-down", type: "related" },
    { to: "tpl-governance-limits", type: "related" },
    { to: "mos-forced-sellers", type: "related" }
  ],
  quote: null
},

{
  id: "vd-vesting-and-acceleration", num: 8, book_id: "vd", category: "people",
  title: "Vesting and Acceleration",
  thesis: "Founder equity is earned over time, and what happens to it in a sale is agreed upfront.",
  reading_time: 3,
  explanation: [
    "Vesting means equity is earned across a period rather than held from the start, commonly four years with a one year cliff and monthly thereafter. Investors require it of founders as well as employees, and the reason founders should want it is a co-founder who leaves in month eight holding a quarter of the company. Vesting turns that outcome into a small one, and the argument for it is easiest to make before anybody has a reason to leave.",
    "Acceleration decides what happens to unvested equity when the company is sold. Single trigger vests on the change of control alone. Double trigger requires the change of control and a subsequent termination, or a resignation for reasons the documents define, inside a stated window. Buyers dislike single trigger because much of what they are paying for is the continued presence of the people, and equity that vests on closing removes the reason to stay.",
    "So the negotiated position is usually double trigger, sometimes with a slice on single trigger, and the size of that slice is a reasonable thing to spend negotiating capital on. Two details deserve checking: whether time served before the financing is credited, and whether unvested shares return to the option pool or are cancelled. The second decides whether a departure benefits every holder proportionally or refills the pool for the next hire."
  ],
  practical: {
    label: "Example: negotiating the vesting terms",
    lead: "Agree the schedule, the credit for time already served and the acceleration treatment in one conversation.",
    bullets: [
      "What is the schedule, and is there a cliff at the front?",
      "Is time worked before this financing credited against it?",
      "Is acceleration single trigger, double trigger, or partly each?",
      "What window after a sale does a double trigger cover?",
      "Do unvested shares return to the pool or get cancelled?"
    ]
  },
  application:
    "Insist on founder vesting and then explain why, because a founder who understands it as protection against a departing co-founder argues for it rather than resenting it. Watch for the case where a founder is fully vested and no longer motivated by equity already held, since that is a retention problem the board cannot fix from the existing cap table. Re-vesting a new grant is the tool, and it is a hard conversation once the position has set.",
  models: ["incentives", "deal-terms", "compounding", "loss-aversion"],
  connections: [
    { to: "vd-option-pool", type: "related" },
    { to: "vd-drag-along", type: "related" },
    { to: "ewb-compensation", type: "reinforces" },
    { to: "zto-founding-team", type: "related" },
    { to: "incentives", type: "reinforces" }
  ],
  quote: null
},

{
  id: "vd-notes-and-safes", num: 9, book_id: "vd", category: "investing",
  title: "Deferring the Price",
  thesis: "A note or SAFE postpones the valuation conversation without postponing the dilution it will cause.",
  reading_time: 3,
  explanation: [
    "A convertible note is debt that converts into equity at the next priced round. It carries interest and a maturity date, which gives the holder a claim of sorts if no round arrives. A SAFE is a simpler instrument with neither, and it converts on the same event. Both usually carry a discount to the round price, a valuation cap, or both, and the cap is what does most of the economic work.",
    "What is deferred is the price conversation, not the dilution. Two million dollars of SAFEs at a ten million post-money cap convert as though the company were worth ten million, so those holders take twenty per cent, whether the priced round happens at fifteen million or at thirty. The founder who raised on the cap felt no dilution at the time and takes all of it at conversion, alongside the new round and the option pool in the same calculation.",
    "The failure mode is accumulation. Several instruments raised at different caps over eighteen months, converting at once, can produce an ownership table nobody at the table predicted, and founders are frequently the most surprised people in the room. A priced round costs more in fees and takes longer, and it produces a number, a cap table and a lead who is committed. Keeping a running model of what the outstanding instruments convert into is the minimum discipline on either path."
  ],
  practical: {
    label: "Example: modelling the conversion",
    lead: "Convert every outstanding instrument at the round you actually expect, then read the resulting ownership table.",
    bullets: [
      "What cap and discount does each outstanding instrument carry?",
      "What percentage do these instruments take at my expected round price?",
      "Are the caps post-money, and who bears the later dilution?",
      "What is the founders' ownership after conversion, the round and the pool?",
      "Does any note have a maturity date arriving before the round?"
    ]
  },
  application:
    "When investing on a cap, work out the ownership it implies at the round you expect rather than at the cap, since those two numbers diverge quickly in a good outcome. Ask what else is outstanding, because the answer is often incomplete and occasionally unknown to the founder. Once the total raised on instruments passes a couple of million, pushing for a priced round serves everyone, including the founder who can no longer describe their own cap table.",
  models: ["deal-terms", "dilution", "optionality", "anchoring"],
  connections: [
    { to: "vd-liquidation-preference", type: "related" },
    { to: "vd-option-pool", type: "related" },
    { to: "vd-anti-dilution", type: "related" },
    { to: "tpl-stage-by-stage", type: "related" },
    { to: "tii-investment-vs-speculation", type: "related" }
  ],
  quote: null
},

{
  id: "vd-negotiation-posture", num: 10, book_id: "vd", category: "people",
  title: "What to Fight For",
  thesis: "Most terms in a term sheet do not matter. A short list decides the outcome.",
  reading_time: 2,
  explanation: [
    "Feld and Mendelson's practical claim is that a term sheet contains perhaps six terms worth real effort. Price, the preference structure, the option pool and its timing, board composition, the protective provisions, and vesting with its acceleration treatment. Those decide who is paid and who decides. Most of the remaining pages are conventions that vary little between firms and cost almost nothing to accept as drafted.",
    "Treating everything as negotiable is expensive in two currencies. It consumes weeks, and it tells the counterparty something about how the next five years of difficult conversations will go. Detailed argument about registration rights at a seed round, the precise scope of information rights or a modest cap on legal fees signals inexperience about what actually matters, which weakens the position on the terms that do.",
    "Bargaining power comes from alternatives rather than from argument. A founder with two term sheets improves terms by mentioning it once; a founder with one improves them by being clear about which two things matter and conceding the rest visibly. The same holds from the other side of the table, and both parties are choosing a partner for a decade in which the documents will mostly sit in a drawer."
  ],
  practical: {
    label: "Example: sorting the term sheet",
    lead: "Before responding, mark every term as decisive, minor or boilerplate, and negotiate only the first group.",
    bullets: [
      "Which three terms here would change the outcome most?",
      "What am I conceding visibly, to buy movement on those?",
      "Do I have a genuine alternative, and does the other side know?",
      "Which of my objections are habit rather than judgement?",
      "How will this negotiation read to the person opposite in year five?"
    ]
  },
  application:
    "Decide your own short list before the conversation and hold it, because a lead that negotiates everything acquires a reputation that costs it deals it never hears about. The reverse error is worse. Conceding preference structure or pro rata to win a competitive process leaves the fund without the two things it will need most. Write down which terms you will not trade, and treat the rest as the price of moving quickly.",
  models: ["deal-terms", "decision-quality", "opportunity-cost", "incentives"],
  connections: [
    { to: "vd-economics-and-control", type: "reinforces" },
    { to: "vd-pro-rata", type: "related" },
    { to: "vd-board-and-protective-provisions", type: "related" },
    { to: "tib-decision-trees", type: "related" },
    { to: "tpl-founder-power", type: "related" }
  ],
  quote: null
}

);
