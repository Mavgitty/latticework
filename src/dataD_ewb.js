/* The Essays of Warren Buffett — Warren Buffett, edited by Lawrence Cunningham — 12 ideas */
window.DB.ideas.push(

{
  id: "ewb-owner-principles", num: 1, book_id: "ewb", category: "leadership",
  title: "The Owner's Manual",
  thesis: "Set out in advance what shareholders own, how you will behave, and how you should be judged.",
  reading_time: 3,
  explanation: [
    "Buffett publishes a set of owner-related business principles and repeats them almost unchanged for decades. The content is specific rather than inspirational: the corporate form is a conduit through which shareholders own the assets, management thinks of itself as a managing partner rather than a hired agent, borrowing is deliberately limited, and the yardstick offered is the per-share gain in business value measured over long periods.",
    "The mechanism at work is commitment rather than sentiment. Principles published in advance and restated every year become expensive to break, because the break is visible against a written record that the writer produced himself. That is what separates them from a values statement, which costs nothing to publish and nothing to abandon. The test of any such document is whether it constrains a decision the writer would otherwise like to make.",
    "It also sorts the shareholder register. Stating the holding period, the reporting style and the tolerance for reported volatility attracts owners who want exactly that and repels the rest, which reduces the pressure to manage each quarter for people who were never going to stay. A register selected on stated terms becomes an asset, because it supplies the time a long strategy needs in order to work."
  ],
  practical: {
    label: "Example: writing the owner's contract",
    lead: "Put the terms of ownership in writing before you need them, then repeat them each year without softening.",
    bullets: [
      "What exactly do shareholders own, and over what period should they judge it?",
      "Which metric am I asking to be measured on, and is it per-share?",
      "What am I committing not to do, in terms specific enough to be broken?",
      "Would this document constrain a decision I would like to make next year?",
      "Which owners do these terms attract, and which do they send away?"
    ]
  },
  application:
    "In private markets the equivalent is the fund's own stated terms and the terms offered to founders: hold period, reserve policy, reporting cadence, and what triggers intervention. Writing them down before the first difficult quarter is what makes them binding, and it selects the founders and limited partners who want that arrangement. A firm describing itself as patient without publishing what patience will cost it has published nothing.",
  models: ["incentives", "capital-allocation", "compounding", "decision-quality"],
  connections: [
    { to: "ewb-candid-reporting", type: "extends" },
    { to: "ewb-compensation", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tos-outsider-temperament", type: "related" },
    { to: "csup-long-horizon", type: "reinforces" }
  ],
  quote: {
    text: "Although our form is corporate, our attitude is partnership.",
    attribution: "Warren Buffett, The Essays of Warren Buffett",
    why: "The line separates the legal structure from the working relationship, and it is placed first because everything else in the principles follows from it. Read as a commitment rather than a description, it sets a standard that later decisions about disclosure, debt and compensation can be checked against."
  }
},

{
  id: "ewb-institutional-imperative", num: 2, book_id: "ewb", category: "leadership",
  title: "The Institutional Imperative",
  thesis: "Organisations imitate peers and resist changing direction, and the pull is stronger than individual judgement.",
  reading_time: 3,
  explanation: [
    "Buffett's name for a force he says he did not expect to find in business: capable and decent managers behaving irrationally because the institution pulls them there. The symptoms he lists are consistent. Available cash gets spent, strategic plans arrive to justify whatever the chief executive already wanted, direction resists change however poor the returns, and the behaviour of peer companies is imitated without inspection.",
    "The mechanism is not stupidity, it is the ordinary structure of a large organisation. Staff produce the analysis their principal is known to want, boards compare against peers because peer comparison is the most defensible ground to stand on, and nobody is ever promoted for the decision not to act. Each of those is locally reasonable, and together they build an institution that expands and imitates regardless of returns.",
    "Resistance is therefore structural rather than personal. Berkshire's answers are a tiny centre, no committees whose function is to generate proposals, and capital allocation held in one pair of hands, so that the machinery which manufactures reasons to spend does not exist. The absence of the apparatus is the defence, because an apparatus staffed to find deals will reliably find them, whatever the price."
  ],
  practical: {
    label: "Example: spotting the imperative",
    lead: "Look for decisions whose real justification is that comparable organisations have recently done the same thing.",
    bullets: [
      "Is this proposal driven by returns, or by what our peers announced?",
      "Who in this organisation is paid to generate transactions?",
      "Was the analysis produced before the conclusion, or after it?",
      "What happens to the cash if we decide to do nothing this year?",
      "Which of our practices survive only because everyone in the sector has them?"
    ]
  },
  application:
    "Funds are subject to the same pull, and it shows up first in deployment pace. When peers raise larger vehicles and write faster cheques, matching them is the defensible institutional choice, and the analysis supporting it arrives promptly. The check is to hold pace, cheque size and reserve policy at the level where they were set deliberately, and to require an explicit recorded decision before any of the three moves.",
  models: ["incentives", "social-proof", "capital-allocation", "authority-bias"],
  connections: [
    { to: "ewb-owner-principles", type: "extends" },
    { to: "ewb-compensation", type: "reinforces" },
    { to: "social-proof", type: "reinforces" },
    { to: "tos-lean-centre", type: "reinforces" },
    { to: "independent-thinking", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-candid-reporting", num: 3, book_id: "ewb", category: "leadership",
  title: "Reporting to an Absent Partner",
  thesis: "Report the figures an intelligent owner would need, including the ones that make you look bad.",
  reading_time: 3,
  explanation: [
    "Buffett's reporting standard is to write what he would want to know if the positions were reversed and he were the absent partner. In practice that means segment economics rather than a consolidated total, because a conglomerate average conceals which businesses are earning their capital, and it means naming mistakes together with the reasoning that produced them rather than the conditions that later revealed them.",
    "Candour has a use beyond honesty. A manager who reports an error publicly is more likely to correct it, because the written record makes reframing difficult, and an organisation that watches its leader do this begins reporting bad news upward faster. The opposite habit, presenting only what flatters, degrades the numbers the leader receives well before it degrades the numbers investors receive.",
    "The test is not the volume of disclosure but its usefulness for valuation. A report offering revenue, adjusted earnings and a confident narrative, while withholding the capital employed in each segment, has bulk without content. What an owner needs is the return each part of the business earns on the money tied up in it, and the direction that figure has been moving."
  ],
  practical: {
    label: "Example: reporting to an owner",
    lead: "Write the report you would want if you held the shares and had no other access to the business.",
    bullets: [
      "Does each segment show the capital employed against its earnings?",
      "Are last year's mistakes named, with the reasoning that caused them?",
      "Which figure would an owner most want, and am I giving it?",
      "Are the adjustments explained well enough for a reader to undo them?",
      "Am I reporting to inform, or reporting to manage the reaction?"
    ]
  },
  application:
    "Portfolio reporting has the same failure mode. A quarterly letter of logos, headline revenue and up-round marks tells a limited partner almost nothing about which companies are earning their capital and which are consuming it. The stronger version reports burn against gross margin company by company, flags which marks are model rather than transaction, and names the positions where the original thesis has failed and is being funded anyway.",
  models: ["accounting-quality", "return-on-capital", "incentives", "checklist"],
  connections: [
    { to: "ewb-owner-principles", type: "extends" },
    { to: "ewb-owner-earnings", type: "reinforces" },
    { to: "fsh-governance-signals", type: "reinforces" },
    { to: "tos-ignore-the-street", type: "related" },
    { to: "learning-from-mistakes", type: "reinforces" }
  ],
  quote: null
},

{
  id: "ewb-compensation", num: 4, book_id: "ewb", category: "leadership",
  title: "Paying for What People Control",
  thesis: "Pay people for the results they control, not for the size or the share price of the whole.",
  reading_time: 3,
  explanation: [
    "Buffett's compensation design is deliberately narrow. A manager is paid against the economics of the unit he actually runs, measured as the return earned on the capital employed there, with no adjustment for how the rest of the company or the share price behaved. Broad option grants are avoided because their payoff turns on retained earnings and market sentiment, neither of which the holder influences.",
    "The reasoning is that a bonus scheme is a set of instructions, read closely by people paid on the result. Reward growth in revenue and you will be handed revenue. Reward earnings without charging for the capital used to produce them and you will be handed acquisitions. Charge properly for capital and the same manager returns the cash he cannot deploy, which was the behaviour wanted all along.",
    "The design constraints that follow are symmetry and specificity. Targets set once and left alone, capital charged at a real rate, no repricing when a bad year arrives, and no dilution of the measure in order to make it look fair across units whose economics genuinely differ. Fairness between managers is a weaker objective than accuracy about what each of them actually controls."
  ],
  practical: {
    label: "Example: reading a bonus scheme",
    lead: "Read the incentive plan as a literal description of the behaviour the organisation is about to receive.",
    bullets: [
      "Does the measure cover things this person genuinely controls?",
      "Is capital charged for, or is growth rewarded regardless of its cost?",
      "Would the plan pay well in a year of poor operating performance?",
      "Can the targets be reset after a bad result, and by whom?",
      "What is the cheapest way to hit this number without building anything?"
    ]
  },
  application:
    "Option packages struck low and refreshed after a down round pay for survival rather than for value created, and founders read that correctly. The useful discipline at a board table is to charge for the capital raised: measure the team against the return on money put in, not against headcount, announced partnerships or the last round's price. Refresh grants for performance delivered, not for the passage of a difficult year.",
  models: ["incentives", "return-on-capital", "capital-allocation", "second-order"],
  connections: [
    { to: "ewb-institutional-imperative", type: "reinforces" },
    { to: "ewb-share-issuance", type: "related" },
    { to: "incentives", type: "extends" },
    { to: "tos-capital-allocation", type: "related" },
    { to: "fsh-metric-games", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-wonderful-business", num: 5, book_id: "ewb", category: "investing",
  title: "Wonderful Business, Fair Price",
  thesis: "A great business at a fair price beats a fair business at a great price.",
  reading_time: 3,
  explanation: [
    "This is Buffett describing a change in his own method. The Graham approach bought statistically cheap assets, extracted the value and moved on, and it worked well in a market with plenty of them. The revision is that the price paid matters once, at entry, while the quality of the business asserts itself every year afterwards, and across a long holding period the second term overwhelms the first.",
    "The arithmetic is about returns on incremental capital. A business earning well above its cost of capital, and able to reinvest at that rate, produces value out of time itself, so a modestly high entry price is recovered. A poor business absorbs capital at low returns, so the discount is a single gain taken at the start and every additional year of holding works against the owner.",
    "The limit is that the word fair carries the whole burden, and it has been used to justify almost any multiple. Quality removes neither the need for a valuation nor the possibility of overpaying, and a price already assuming that decades of the current return will hold has spent the advantage in advance. The claim concerns the relative weight of the two terms, not the disappearance of one."
  ],
  practical: {
    label: "Example: quality against price",
    lead: "Separate what the business earns on new capital from what you are paying for the earnings it already has.",
    bullets: [
      "What return does this business earn on incremental capital, and for how long?",
      "Can it reinvest at that rate, or does the cash have nowhere to go?",
      "If I hold for ten years, does the entry price still matter much?",
      "Am I using quality as a reason to skip the valuation entirely?",
      "Is this cheap because the market is wrong, or because the business is poor?"
    ]
  },
  application:
    "Growth investors accept this in principle and then rank deals by entry multiple in practice. The version that changes decisions is to underwrite the reinvestment runway explicitly: how much capital the company can put to work at its current unit economics, and for how many years, before either the market or the model runs out. A high price on a genuine reinvestment story beats a low price on a business with nowhere to deploy.",
  models: ["return-on-capital", "durability", "compounding", "intrinsic-value"],
  connections: [
    { to: "ewb-franchise-vs-commodity", type: "extends" },
    { to: "ewb-intrinsic-value", type: "related" },
    { to: "tii-margin-of-safety", type: "contrasts" },
    { to: "csup-long-horizon", type: "reinforces" },
    { to: "compounding", type: "reinforces" }
  ],
  quote: {
    text: "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
    attribution: "Warren Buffett, The Essays of Warren Buffett",
    why: "The sentence is a correction of his earlier practice rather than a general slogan, and the symmetry is what makes it memorable. It ranks two things that both matter, which is more useful than choosing one, and it concedes that a fair price must still be established."
  }
},

{
  id: "ewb-franchise-vs-commodity", num: 6, book_id: "ewb", category: "strategy",
  title: "Franchise or Commodity",
  thesis: "A franchise can raise prices and survive bad management. A commodity business can do neither.",
  reading_time: 3,
  explanation: [
    "Buffett's distinction rests on one test: whether the business can raise its price without surrendering volume to an alternative. A franchise sells something wanted, with no close substitute and no price regulation, which gives it pricing power and a tolerance for indifferent management. A commodity business sells what several competent rivals also sell, so its price is set outside the company and its profit is set by industry capacity.",
    "The consequence for a commodity business is that long-run returns converge on the cost of capital, punctuated by brief shortages when everyone earns well and immediately expands. The only durable positions available are the genuinely low-cost operator and the operator in a niche too small to attract new capacity. Everybody else earns the industry return, which is why patience with a poor business so rarely pays.",
    "Franchises decay in identifiable ways. Substitutes appear, the customer's willingness to pay turns out narrower than assumed, or the owner extracts the pricing power faster than the underlying position can support. The useful question is therefore not whether pricing power exists today but what has recently been done with it, because the pricing decision reveals what management believes it holds."
  ],
  practical: {
    label: "Example: testing pricing power",
    lead: "Ask what would happen to volume if this business raised its prices by ten per cent tomorrow.",
    bullets: [
      "Would customers leave, and to which specific alternative?",
      "When did this company last raise prices, and what happened?",
      "Is profit set by what the business does or by industry capacity?",
      "Is it the low-cost operator, or in a niche capacity ignores?",
      "If management were replaced by someone ordinary, would the economics survive?"
    ]
  },
  application:
    "In private markets the same test cuts through gross margin optics. Software margins can look like a franchise while pricing is actually being set by whichever competitor is most desperate for the logo, and renewal discounting is where that becomes visible. Ask for price achieved per customer cohort over three years rather than list price, and check whether renewals repriced upward or held flat under pressure.",
  models: ["monopoly", "durability", "capital-cycle", "return-on-capital"],
  connections: [
    { to: "ewb-wonderful-business", type: "reinforces" },
    { to: "ewb-goodwill", type: "extends" },
    { to: "s7p-power", type: "reinforces" },
    { to: "pcs-five-forces", type: "related" },
    { to: "csup-margins", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-float", num: 7, book_id: "ewb", category: "investing",
  title: "The Cost and Use of Float",
  thesis: "Insurance premiums held before claims are paid are other people's money you may invest.",
  reading_time: 3,
  explanation: [
    "Float is the money an insurer holds between collecting a premium and paying the claim it covers. It appears on the balance sheet as a liability, and for as long as it is held it can be invested for the holder's own account. If underwriting breaks even, that money has been borrowed at no cost, and Berkshire's structure rests on this arrangement rather than on insurance profit as such.",
    "The cost of float is the underwriting loss expressed as a rate, and that is where the whole idea can invert. Float obtained by writing business at any price is expensive borrowing of unknown maturity, and long-tail liabilities keep the true cost hidden for years after the premium was booked. What the arrangement demands is a willingness to write no business at all when prices are inadequate, which means accepting a shrinking top line.",
    "This is why underwriting restraint is treated as the whole game and volume as an output rather than a target. A competitor chasing premium growth is setting prices for a product whose cost is not yet known, and the sector's periodic losses arrive when those years finally mature. The permanent question about any float business is what it is paying for the money, and who checks that number."
  ],
  practical: {
    label: "Example: costing the float",
    lead: "Work out the rate at which this business is effectively borrowing, then compare it with the alternatives available.",
    bullets: [
      "What is the underwriting result, expressed as a cost on the float held?",
      "How long is the money held before it must be paid out?",
      "Is volume growing because prices are good or because they are being cut?",
      "Who has authority to decline business, and are they paid on volume?",
      "Would the cost look different if reserve estimates were wrong by a fifth?"
    ]
  },
  application:
    "Float logic appears in private companies wherever cash arrives before the obligation is discharged: annual prepaid contracts, marketplace balances held between transactions, deferred revenue funding the operation. The distinction that matters is whether the balance is stable and cheap or whether it has been bought with discounts and would run off in a bad quarter. Negative working capital financed by customer prepayment is float, and it stays free only while retention holds.",
  models: ["float", "cost-of-capital", "incentives", "free-cash-flow"],
  connections: [
    { to: "ewb-franchise-vs-commodity", type: "related" },
    { to: "ewb-owner-earnings", type: "related" },
    { to: "tos-leverage", type: "related" },
    { to: "tos-tax-efficiency", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" }
  ],
  quote: null
},

{
  id: "ewb-buybacks", num: 8, book_id: "ewb", category: "investing",
  title: "Repurchases as a Value Test",
  thesis: "Buying back shares below intrinsic value helps owners. Above it, the purchase transfers value away.",
  reading_time: 2,
  explanation: [
    "A repurchase is an investment decision with a known counterparty and a calculable return. Retiring shares below the per-share value of the business raises the value of every share that remains, which makes it one of the few actions a manager can take where the arithmetic is unambiguous. Above that value, the company has overpaid using money belonging to the shareholders who chose to stay.",
    "The signal is therefore conditional rather than positive. A repurchase announced while the shares are expensive, or run continuously to absorb option issuance, or timed to support a per-share earnings target, is not a return of capital at all, it is an expensive habit with a favourable name. What distinguishes the useful version is that it stops when the price rises.",
    "The second condition is that the cash is genuinely surplus to the needs of the operating businesses, so a repurchase funded by borrowing or by deferred maintenance is a different transaction wearing the same label. Read together, the two conditions make repurchases a residual use of capital, which is why the honest programmes are irregular and the suspicious ones run on a schedule."
  ],
  practical: {
    label: "Example: testing a repurchase",
    lead: "Treat the buyback as any other purchase and ask what is being bought, and at what price.",
    bullets: [
      "Is the price below a conservative estimate of per-share value?",
      "Is the cash genuinely surplus to the needs of the operating business?",
      "Is the programme continuous, or does it stop when shares are dear?",
      "How much of it merely offsets shares issued to management?",
      "Has the share count actually fallen, over several years?"
    ]
  },
  application:
    "The private-market analogue is a secondary purchase or a tender for existing shares, and the arithmetic is identical. Buying from an early holder below a defensible value estimate accrues to the remaining register, while paying the last round's headline price to tidy a cap table is a transfer out of the fund. Treat every secondary as a fresh investment decision at that price, with its own memo, rather than as portfolio housekeeping.",
  models: ["capital-allocation", "intrinsic-value", "opportunity-cost", "cost-of-capital"],
  connections: [
    { to: "ewb-intrinsic-value", type: "reinforces" },
    { to: "ewb-share-issuance", type: "contrasts" },
    { to: "tos-buybacks", type: "extends" },
    { to: "tos-cash-flow-per-share", type: "reinforces" },
    { to: "tos-capital-allocation", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-share-issuance", num: 9, book_id: "ewb", category: "investing",
  title: "Issuing Shares Sells the Business",
  thesis: "Paying with your own shares sells part of your business, so ask what you gave and got.",
  reading_time: 3,
  explanation: [
    "Buffett's framing of an acquisition paid in stock is that two businesses change hands, not one. The acquirer hands over a proportion of everything it owns in exchange for a share of something else, so the only relevant comparison is intrinsic value given against intrinsic value received. Reported measures miss this entirely, because a deal can add to earnings per share while surrendering more value than it collects.",
    "The arithmetic turns hostile precisely when the acquirer's own shares are undervalued, which is also when its management most often feels the need to act. Selling a dollar of your own business for eighty cents of somebody else's is a permanent loss that no synergy assumption repairs, because the loss is banked at signing and the synergy remains a forecast. Cash deals at least keep the two decisions separate.",
    "Three practical observations follow. Deals paid in stock deserve harder scrutiny than deals paid in cash, the advisers on both sides are paid on completion rather than on value received, and the language of the announcement obscures the direction of the transfer. Press releases describe what was acquired at length and what was surrendered not at all, which is the half determining whether owners are better off."
  ],
  practical: {
    label: "Example: what did we hand over?",
    lead: "Value the shares you are about to issue at your own estimate of worth, not at the current quote.",
    bullets: [
      "What percentage of our own business are we giving away here?",
      "Is our currency cheap or dear against our own value estimate?",
      "Would we do this deal for cash at the same effective price?",
      "Who is paid on completion, and who is paid on the outcome?",
      "Does the case rest on synergies, and has anyone ever verified those?"
    ]
  },
  application:
    "The same discipline governs a share swap inside a portfolio, and it applies to a fund's own currency too. When a portfolio company acquires with equity, the fund's holding is diluted at the company's marked price, which is usually the number least likely to reflect value. Insist that the board value the shares issued against a defensible range, and record what proportion of the company was actually surrendered.",
  models: ["intrinsic-value", "capital-allocation", "incentives", "opportunity-cost"],
  connections: [
    { to: "ewb-buybacks", type: "contrasts" },
    { to: "ewb-intrinsic-value", type: "reinforces" },
    { to: "tos-disciplined-acquisitions", type: "reinforces" },
    { to: "fsh-acquisition-accounting", type: "related" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-owner-earnings", num: 10, book_id: "ewb", category: "investing",
  title: "Owner Earnings",
  thesis: "What an owner can take out is reported profit adjusted for the spending the business truly needs.",
  reading_time: 3,
  explanation: [
    "Owner earnings are reported earnings plus non-cash charges such as depreciation and amortisation, less the capital spending genuinely required to maintain the business's competitive position and its unit volume. That last term is an estimate rather than a figure lifted from the accounts, which is why the measure is approximate, and why Buffett prefers an approximate answer to a precise one that leaves the term out.",
    "Depreciation is a real cost, but it can overstate or understate the real one depending on the asset. A business whose plant costs more to replace than it cost to build must spend more than its depreciation charge, so its reported earnings overstate what an owner actually receives. A business carrying intangible amortisation from an old acquisition is being charged for money already spent, so its reported earnings understate what it produces.",
    "The distinction is between spending that holds position and spending that buys growth. Only the first belongs in the deduction, and separating them requires judgement about what this business must do simply to stand still. The resulting number cannot be audited and is not comparable across companies, which is why the market prefers a tidy headline figure and settles for a worse answer."
  ],
  practical: {
    label: "Example: what can be taken out",
    lead: "Start from reported profit, add back the non-cash charges, then subtract the spending needed just to stand still.",
    bullets: [
      "How much capital spending is required to maintain volume and position?",
      "Which part of capital expenditure is growth, and how do we know?",
      "Does depreciation understate or overstate the cost of replacing these assets?",
      "Is any amortisation charging us for money spent years ago?",
      "Over five years, how much cash could an owner have withdrawn?"
    ]
  },
  application:
    "In venture the maintenance question concerns operating spend rather than capital: how much of sales and marketing is required to hold the existing revenue base against churn, and how much is genuinely buying new customers. A company describing all of it as growth investment is claiming an owner earnings figure it has not earned. Split the cost by cohort, deduct whatever is holding the base, and value what remains.",
  models: ["owner-earnings", "free-cash-flow", "accounting-quality", "return-on-capital"],
  connections: [
    { to: "ewb-intrinsic-value", type: "extends" },
    { to: "ewb-goodwill", type: "related" },
    { to: "fsh-cash-versus-earnings", type: "reinforces" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "tos-cash-flow-per-share", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-goodwill", num: 11, book_id: "ewb", category: "investing",
  title: "Two Kinds of Goodwill",
  thesis: "Accounting goodwill records what was paid. Economic goodwill is what the business can actually earn.",
  reading_time: 3,
  explanation: [
    "Two different things share the name. Accounting goodwill is the excess of a purchase price over the net assets acquired, recorded once and then amortised or written down on a schedule with no connection to how the business performs. Economic goodwill is the capacity to earn high returns on modest tangible assets, and it grows or shrinks with the strength of the position, quite independently of what was paid at entry.",
    "The two routinely move in opposite directions within the same accounts. A franchise whose economic goodwill is compounding may have its accounting goodwill written down every year, depressing reported earnings while the underlying asset improves. A failed acquisition can carry its accounting goodwill intact for years until an impairment finally recognises what the returns already showed, at which point the loss is announced as a non-cash item.",
    "Two consequences follow for reading a balance sheet. Goodwill amortisation should usually be added back when estimating what an owner receives, because it charges the current period for cash spent in an earlier one. And an impairment is not new information about the business, it is late information about the price that was paid, so it should be read as a verdict on the acquirer."
  ],
  practical: {
    label: "Example: reading the two goodwills",
    lead: "Separate what was paid for a business from what the business can now earn on its tangible assets.",
    bullets: [
      "What return does this business earn on its tangible capital employed?",
      "Is the goodwill on the books a real asset or a historical price?",
      "Does adding back amortisation change the picture of what an owner receives?",
      "Has any impairment been taken, and what did it admit about the purchase?",
      "Is the economic goodwill growing while the accounting version shrinks?"
    ]
  },
  application:
    "The same reading applies to capitalised development costs and capitalised customer acquisition in a growth company. The balance sheet records the spending, not the asset, and the only evidence about the asset is the return being earned on the tangible base beneath it. Ask what the business earns on hard capital before the intangibles, and treat any impairment in a portfolio company as a dated verdict on a price the board approved.",
  models: ["accounting-quality", "return-on-capital", "durability", "owner-earnings"],
  connections: [
    { to: "ewb-owner-earnings", type: "extends" },
    { to: "ewb-franchise-vs-commodity", type: "reinforces" },
    { to: "fsh-acquisition-accounting", type: "reinforces" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "fsh-one-time-gains", type: "related" }
  ],
  quote: null
},

{
  id: "ewb-intrinsic-value", num: 12, book_id: "ewb", category: "investing",
  title: "Intrinsic Value, Not Book Value",
  thesis: "Value is the cash that can be taken out over the life of the business, discounted.",
  reading_time: 3,
  explanation: [
    "Buffett's definition is a discounted cash figure, and his practical point concerns the comparison with book value. Book value records what went into a business, intrinsic value estimates what will come out of it, and the two diverge in both directions: a company earning poor returns is worth less than its book, and a company earning high returns on little capital is worth a large multiple of it.",
    "Because the inputs are forecasts, two honest analysts applying the same method reach different numbers, and Buffett states that plainly rather than hiding it. What he insists on is the working: name the cash, the period and the discount rate, so that any disagreement is located somewhere specific and can be argued about. A precise figure resting on an unstated growth assumption is not an estimate, it is a preference.",
    "The measure that follows is the per-share change in this quantity over long periods, which is why he reports book value per share as a visible and deliberately understated proxy, and asks to be judged against it. A proxy known to be conservative is useful, because the error runs in one direction only and the direction has been disclosed in advance."
  ],
  practical: {
    label: "Example: value against book",
    lead: "Estimate the cash the business can produce over its life, then compare that figure with what was invested.",
    bullets: [
      "What cash can be taken out, over what period, and at what discount rate?",
      "Does book value overstate or understate this business, and why?",
      "Which single assumption moves the answer most, and how firm is it?",
      "What growth rate does the current asking price require?",
      "Am I tracking per-share value, or the size of the whole?"
    ]
  },
  application:
    "Private-market marks are usually the last round price, which is neither book nor intrinsic value and is stale in one direction. The useful practice is to hold a separate internal estimate for every position, built from the cash the business can eventually produce, and to record where it sits against the carrying mark. A position carried above your own estimate for several quarters is information you already hold.",
  models: ["intrinsic-value", "free-cash-flow", "terminal-value", "implied-expectations"],
  connections: [
    { to: "ewb-owner-earnings", type: "extends" },
    { to: "ewb-buybacks", type: "reinforces" },
    { to: "tii-intrinsic-value", type: "extends" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "tos-cash-flow-per-share", type: "reinforces" }
  ],
  quote: {
    text: "Intrinsic value can be defined simply: It is the discounted value of the cash that can be taken out of a business during its remaining life.",
    attribution: "Warren Buffett, The Essays of Warren Buffett",
    why: "The definition is offered as a simple one and then immediately qualified as hard to calculate, which is the honest order. It also rules out the alternatives by construction: not book value, not market price, not accounting earnings, but cash removable by an owner."
  }
}

);
