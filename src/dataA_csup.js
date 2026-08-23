/* Common Stocks and Uncommon Profits — Philip Fisher — 12 ideas */
window.DB.ideas.push(

{
  id: "csup-scuttlebutt", num: 1, book_id: "csup", category: "learning",
  title: "Scuttlebutt",
  thesis: "Ask the people around a business what they think of it, then triangulate.",
  reading_time: 3,
  explanation: [
    "Fisher's method rests on the observation that the useful information about a company sits with the people who deal with it every day rather than in its filings. Customers, suppliers, competitors, former employees, trade association staff and research scientists working in the same field all hold a piece of it, and each of them will talk about a company that is not their own.",
    "The power comes from the pattern rather than from any single conversation. Every source is biased, and the biases point in different directions, so agreement between people with opposing interests is genuine evidence. The method breaks when the sample is supplied by the company, because then the sources share a bias and the pattern you find has been arranged rather than discovered.",
    "It follows that access is the scarce input, and access is built years before it is needed. A network inside one industry compounds, because each conversation names the next person worth calling. This is also why the approach rewards narrowness. Someone who has covered two industries for a decade can run it properly, and a generalist moving between sectors cannot."
  ],
  practical: {
    label: "Example: working a reference list",
    lead: "Build the picture from people with opposing interests in the company, and treat agreement between them as the signal.",
    bullets: [
      "Which competitor would tell me most about this company's real strengths?",
      "Who has left in the last two years, and why did they go?",
      "Have I spoken to anyone the company did not introduce me to?",
      "Do sources with opposing interests agree on anything, and on what?",
      "What do customers say when asked what they would switch to?"
    ]
  },
  application:
    "In venture the equivalent is off-list references, and the discipline is that they outnumber the ones supplied. Founders choose their referees well, so a founder-supplied list establishes the best case and nothing more. A churned customer, a departed head of sales and two competitors will describe the same company differently, and the difference between those accounts is where most of the diligence value sits.",
  models: ["scuttlebutt", "circle-of-competence", "confirmation-bias", "base-rates"],
  connections: [
    { to: "csup-fifteen-points", type: "extends" },
    { to: "csup-people-depth", type: "reinforces" },
    { to: "zto-secrets", type: "related" },
    { to: "circle-of-competence", type: "reinforces" },
    { to: "confirmation-bias", type: "contrasts" }
  ],
  quote: null
},

{
  id: "csup-fifteen-points", num: 2, book_id: "csup", category: "investing",
  title: "The Fifteen Points",
  thesis: "A checklist of qualitative tests a company should pass before it deserves your money.",
  reading_time: 3,
  explanation: [
    "Fisher sets out fifteen characteristics to look for, and almost all of them are qualitative. They cover the market for the products, the commitment to research, the effectiveness of the sales organisation, profit margins and what is being done to hold them, relations with labour and with executives, the depth of the management team, the quality of cost accounting, and the candour of management when things go wrong.",
    "The list is not a scoring system. A company need not rate well on every point to be worth owning, but it must rate well on most of them and must not fail badly on any. That makes it a different instrument from a screen: it cannot be run on data, it takes weeks of work per company, and what it produces is a judgement rather than a rank.",
    "Because the work is slow, the list functions as a rationing device. If a proper assessment takes a month, you will hold few positions and you will know them well, which is the portfolio shape Fisher argues for on separate grounds. A checklist that can be completed in an afternoon does not change what you end up owning."
  ],
  practical: {
    label: "Example: running the list honestly",
    lead: "Work through the qualitative factors one at a time and record where the company is weak rather than skipping past it.",
    bullets: [
      "Which points does this company fail on, stated plainly?",
      "Is any single failure severe enough to disqualify it on its own?",
      "Am I scoring from management's account or from independent sources?",
      "Which points did I skip because they were hard to assess?",
      "How long did this assessment take, and is that long enough?"
    ]
  },
  application:
    "A venture diligence framework is the same instrument and it degrades the same way. Factors that are hard to evidence quietly receive a benign default, and the memo reads as a pass. The repair is to require a written answer on every factor, including the ones where the honest answer is that nobody knows, then size the position against the count of unknowns rather than the strength of the narrative.",
  models: ["circle-of-competence", "durability", "decision-quality", "accounting-quality"],
  connections: [
    { to: "csup-margins", type: "extends" },
    { to: "csup-integrity", type: "extends" },
    { to: "zto-seven-questions", type: "related" },
    { to: "tfs-simple-rules", type: "related" },
    { to: "tii-defensive-enterprising", type: "reinforces" }
  ],
  quote: null
},

{
  id: "csup-research-engine", num: 3, book_id: "csup", category: "strategy",
  title: "Research as a Growth Engine",
  thesis: "Sustained growth comes from research that keeps producing sellable products, not from one good invention.",
  reading_time: 2,
  explanation: [
    "Fisher treats research and development as the source of a company's future revenue and judges it on output rather than on spend. The questions are whether the work is aimed at markets the sales organisation can actually reach, whether the commercial and technical people talk to each other before projects start, and whether the firm has a record of turning laboratory results into products that earn money.",
    "Spending is a poor proxy. Two firms with identical research budgets can differ enormously in what they get for the money, depending on whether projects are chosen for scientific interest or commercial fit, and on how quickly the failures are stopped. A rising research line in the accounts is evidence of intent and tells you nothing about capability.",
    "What follows is that the interesting figure is the relationship between revenue from new products and the research spend that produced it, traced over a long period. It is rarely disclosed, which is why the assessment has to come from conversations with people who watch the industry and can say which of the firm's launches actually mattered."
  ],
  practical: {
    label: "Example: judging the research output",
    lead: "Look at what the research has produced over a decade rather than at what it costs each year.",
    bullets: [
      "What share of current revenue comes from products launched in the last five years?",
      "Who decides which projects continue, and on what evidence?",
      "Do the commercial and technical teams choose projects together?",
      "How long does a failing project run before it is stopped?",
      "Which launches in the past decade actually earned money?"
    ]
  },
  application:
    "Applied to software companies, the test is whether the engineering organisation ships things customers will pay more for, not whether its headcount is growing. Ask for revenue by product cohort with the date each shipped. A company whose entire revenue still comes from its original product after six years has an engineering cost centre rather than a research engine, whatever the roadmap claims.",
  models: ["compounding", "durability", "capital-allocation", "scale-economies"],
  connections: [
    { to: "csup-margins", type: "reinforces" },
    { to: "csup-fifteen-points", type: "extends" },
    { to: "zto-zero-to-one", type: "related" },
    { to: "compounding", type: "reinforces" },
    { to: "zto-last-mover", type: "related" }
  ],
  quote: null
},

{
  id: "csup-sales-organisation", num: 4, book_id: "csup", category: "strategy",
  title: "The Sales Organisation",
  thesis: "Nothing survives without distribution, yet the sales organisation is the least examined part of most companies.",
  reading_time: 2,
  explanation: [
    "Fisher gives the sales organisation the same weight as research and notes that investors almost never look at it. A superior product with a weak route to the customer produces nothing, and the skill of getting a product priced, positioned and repeatedly bought is a real capability that takes years to build and can be assessed from outside the company.",
    "It can be assessed because customers and competitors will describe it accurately. They know whose representatives understand the product, who is reliable after the sale, and who is winning accounts they should not be winning. That is a better read than anything in the accounts, because sales expense tells you the cost of the function and nothing at all about its quality.",
    "The reason the factor is neglected is that it cannot be quantified and is therefore invisible to a screen. Fisher's response is that the unquantifiable factors are exactly where an advantage remains available, because every investor can read a margin trend from the published accounts and almost nobody has called ten customers to ask how the last renewal actually went. The work is available precisely because it is tedious."
  ],
  practical: {
    label: "Example: assessing the sales function",
    lead: "Judge the sales organisation from the people it sells to and against, not from its cost line.",
    bullets: [
      "Do customers describe the sales people as competent about the product?",
      "What happens after the sale, and who handles it?",
      "Is the win rate improving against a named competitor, and why?",
      "How long does a new representative take to become productive?",
      "Is growth coming from the sales system or from two individuals?"
    ]
  },
  application:
    "In growth-stage diligence this is the difference between a repeatable motion and a founder who closes every deal personally. Ask for quota attainment by representative and by hire cohort, ramp time to productivity, and the share of revenue closed by the top two people. A company whose sales capability does not survive the founder stepping back has not yet built the function at all.",
  models: ["distribution", "process-power", "scale-economies", "switching-costs"],
  connections: [
    { to: "zto-distribution", type: "reinforces" },
    { to: "csup-research-engine", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "extends" },
    { to: "zto-monopoly", type: "related" },
    { to: "csup-fifteen-points", type: "extends" }
  ],
  quote: null
},

{
  id: "csup-margins", num: 5, book_id: "csup", category: "investing",
  title: "Profit Margins and Their Durability",
  thesis: "A worthwhile margin matters less than what the company is doing to keep it.",
  reading_time: 3,
  explanation: [
    "Fisher asks two questions about margins rather than one. The first is whether the margin is worthwhile at all, because revenue growth at a thin margin can enrich customers and employees for years without ever reaching the owners. The second, which he treats as the more important, is what management is doing now to maintain or widen that margin in the years ahead.",
    "The distinction matters because margins are competed away by default. A high current margin invites entry, and the only defences are the ones being built deliberately: cost reduction that outpaces price pressure, products that command a premium, a position in the chain that a competitor cannot occupy cheaply. Where none of that is underway, a strong margin is a description of the past.",
    "Fisher also warns against the marginal company bought for the gearing in its margin. It rises fastest in a good year, which is what makes it attractive, and it is first to lose money when demand falls. The arithmetic that makes a thin margin exciting on the way up is the same arithmetic operating on the way down."
  ],
  practical: {
    label: "Example: testing margin durability",
    lead: "Ask what specifically is being done this year to protect the margin three years from now.",
    bullets: [
      "What is the margin trend over five years, and what drove each move?",
      "Which named actions are underway to improve it, and at what cost?",
      "Would a ten per cent price cut by a competitor be survivable?",
      "Is the margin protected by cost position, product premium or nothing?",
      "Is this a genuinely strong business or a marginal one geared to demand?"
    ]
  },
  application:
    "Early-stage companies rarely have a net margin worth analysing, so the useful version is gross margin by cohort and its direction of travel as volume grows. Ask what the margin looks like at ten times the current volume, then check whether the answer depends on a supplier discount nobody has agreed to yet. Contribution margin that genuinely improves with scale is the claim worth verifying.",
  models: ["durability", "barriers-to-entry", "five-forces", "scale-economies"],
  connections: [
    { to: "csup-fifteen-points", type: "extends" },
    { to: "csup-research-engine", type: "reinforces" },
    { to: "zto-monopoly", type: "related" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "tii-paying-for-growth", type: "related" }
  ],
  quote: null
},

{
  id: "csup-people-depth", num: 6, book_id: "csup", category: "people",
  title: "Depth of Management",
  thesis: "One outstanding executive is a risk. A company needs a bench and a way of building it.",
  reading_time: 3,
  explanation: [
    "Fisher separates the quality of the person at the top from the depth of the organisation beneath. A company run brilliantly by one individual has a ceiling set by that individual's capacity and a discontinuity waiting for the day they leave. What he looks for instead is a habit of delegating real authority well down the structure, and evidence that capable people are being developed rather than recruited under pressure.",
    "The signals are structural. Whether decisions are taken at the level where the information sits, whether senior roles can be filled from inside, whether talented outsiders are brought in early enough to learn the business properly, and whether the founder's family or circle occupies positions their ability would not otherwise have won. Each of these can be established without any cooperation from the company.",
    "This is a factor with a long lag and a large effect, which is why it is undervalued. Depth costs money now and pays out over a decade, so a company that has it looks slightly less efficient than one that has not, right up to the point where that comparison reverses and stays reversed."
  ],
  practical: {
    label: "Example: testing the bench",
    lead: "Ask who could do each senior job tomorrow, and whether that person already works there.",
    bullets: [
      "Which decisions require the chief executive, and should they?",
      "Who would run this company if the founder stopped tomorrow?",
      "Have senior hires from outside stayed, and were they given authority?",
      "Is anyone in a role their ability would not have won elsewhere?",
      "How are the next two layers of management being developed?"
    ]
  },
  application:
    "The venture version is key-person risk, usually recorded as a line in the risk register and then left there. A better test is whether the founder has hired anyone with more functional experience than themselves and actually left them to run it. Founders who cannot delegate produce companies that stall at a fairly predictable revenue level, and the pattern is visible in how meetings are run long before the stall arrives.",
  models: ["incentives", "durability", "specialisation", "process-power"],
  connections: [
    { to: "csup-integrity", type: "reinforces" },
    { to: "csup-scuttlebutt", type: "reinforces" },
    { to: "zto-founding-team", type: "related" },
    { to: "incentives", type: "related" },
    { to: "csup-fifteen-points", type: "extends" }
  ],
  quote: null
},

{
  id: "csup-integrity", num: 7, book_id: "csup", category: "people",
  title: "Management Candour",
  thesis: "How management behaves when the news is bad tells you what the good news was worth.",
  reading_time: 2,
  explanation: [
    "Fisher's last point concerns integrity, and he treats it as a precondition rather than as one factor among fifteen. Management is always closer to the assets than the owners are, and the opportunities to take value quietly through related parties, share issues and favourable arrangements never disappear. No rate of growth compensates for a management inclined to use them.",
    "The observable proxy is candour under pressure. Every company has bad quarters and failed products, and the test is whether management discusses them openly with owners or only mentions difficulties once they can no longer be concealed. A record of announcing problems early and in plain terms is expensive to fake, which is what makes it informative.",
    "The asymmetry is what makes this decisive. A doubt about capability can be handled by paying less. A doubt about honesty cannot, because the figures the price is calculated from are produced by the people in question. Fisher's conclusion is to leave the company alone rather than to demand a discount for carrying the risk."
  ],
  practical: {
    label: "Example: reading candour",
    lead: "Go back through several years of communications and check how the failures were described at the time.",
    bullets: [
      "How was the last serious setback disclosed, and when?",
      "Do the annual letters mention anything that went wrong?",
      "Were previous forecasts met, and was any miss acknowledged plainly?",
      "What related-party transactions exist, and who benefits from them?",
      "Does anyone outside the company describe them as straight to deal with?"
    ]
  },
  application:
    "In private markets this test is available directly, because you watch the same people report monthly for years before considering a further round. Founders who send the bad month with the explanation attached, unprompted, are a different category from those who send it late with a framing. Where honesty is genuinely in doubt, a lower entry price is not the remedy and better terms are not either.",
  models: ["incentives", "accounting-quality", "confirmation-bias", "durability"],
  connections: [
    { to: "csup-people-depth", type: "reinforces" },
    { to: "csup-five-donts", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "tii-earnings-quality", type: "reinforces" },
    { to: "csup-fifteen-points", type: "extends" }
  ],
  quote: null
},

{
  id: "csup-long-horizon", num: 8, book_id: "csup", category: "investing",
  title: "Buy Growth and Hold It",
  thesis: "The large returns come from holding a few outstanding companies for many years.",
  reading_time: 3,
  explanation: [
    "Fisher's case for the long horizon is arithmetic rather than sentimental. A business that reinvests at a high rate compounds value for the owner who stays, and the compounding only becomes visible over a period longer than most people hold anything. Selling a genuinely superior company after a satisfying gain forfeits the part of the return that took the longest to arrive.",
    "The condition is that the company must actually be superior, and this is where the research does its work. The long horizon is not a policy to be applied to any holding, it is what the qualitative investigation buys. Without a defensible view on research output, sales capability, margins and management, holding through a difficult period is stubbornness rather than conviction.",
    "The horizon also changes what counts as a mistake. Over three years the outcome is the share price. Over fifteen the outcome is whether the business kept its position, and the price becomes an intermediate reading rather than a verdict. That reframing is only honest if the original analysis was about the business in the first place."
  ],
  practical: {
    label: "Example: holding on purpose",
    lead: "Write down what the business must keep doing for the holding to remain justified, then review that rather than the price.",
    bullets: [
      "What is the intended holding period, stated before purchase?",
      "Which business facts, if they held, would justify holding through a fall?",
      "Am I reviewing the company annually or the price weekly?",
      "Has anything changed in the business, or only in the quotation?",
      "Would I buy more today at this price on this analysis?"
    ]
  },
  application:
    "Venture funds have long horizons by structure and short ones in behaviour, because marks are reported quarterly and reserves get allocated on recent momentum. The useful discipline is a written re-underwrite at each round that tests the original qualitative thesis rather than the new price. A follow-on decided by the current mark is the same error as selling a compounder after one good year.",
  models: ["compounding", "durability", "power-law", "opportunity-cost"],
  connections: [
    { to: "csup-when-to-sell", type: "extends" },
    { to: "csup-fifteen-points", type: "reinforces" },
    { to: "compounding", type: "reinforces" },
    { to: "patience", type: "reinforces" },
    { to: "tii-paying-for-growth", type: "contrasts" }
  ],
  quote: null
},

{
  id: "csup-when-to-sell", num: 9, book_id: "csup", category: "investing",
  title: "The Three Reasons to Sell",
  thesis: "Sell when you were wrong, when the company has changed, or when something better appears.",
  reading_time: 3,
  explanation: [
    "Fisher allows three grounds for selling and rules out everything else. The first is that the original analysis was mistaken and the company is not what you judged it to be. The second is that the company has deteriorated and no longer meets the criteria, through a change of management, a shift in its market, or the loss of whatever produced its advantage. The third is that a materially better opportunity has been found.",
    "The list matters mostly for what it excludes. A high price is not a reason, because a superior company can be expensive and still be worth more later. A forecast of a general market decline is not a reason, because acting on it requires timing that Fisher regards as unavailable. Having made a satisfying gain is not a reason at all, and it is the one most often used.",
    "The third ground carries the risk. Switching into something better is legitimate, and it is also the rationalisation that dresses restlessness up as analysis. Fisher therefore sets a high bar: the alternative must be clearly superior rather than merely newer, and the comparison has to survive both the transaction costs and the loss of everything you know about the existing holding."
  ],
  practical: {
    label: "Example: testing a sell decision",
    lead: "Name which of the three grounds applies before selling, and reject the decision if none of them does.",
    bullets: [
      "Which of the three reasons applies here, in one sentence?",
      "Was my original analysis wrong, or has the business actually changed?",
      "If it is a switch, is the alternative clearly better or just newer?",
      "Am I selling because the price rose rather than because something changed?",
      "What would I need to see in order to hold instead?"
    ]
  },
  application:
    "Applied to a venture portfolio, the same three grounds govern secondaries and follow-ons. Selling into a hot round because the mark looks attractive is the excluded reason wearing a valuation. Selling because the qualitative thesis has broken is the first or second ground, and it should have been written down at the moment it broke rather than reconstructed afterwards from the exit price.",
  models: ["opportunity-cost", "resulting", "loss-aversion", "decision-quality"],
  connections: [
    { to: "csup-long-horizon", type: "extends" },
    { to: "csup-five-donts", type: "reinforces" },
    { to: "tib-resulting", type: "related" },
    { to: "loss-aversion", type: "related" },
    { to: "opportunity-cost", type: "reinforces" }
  ],
  quote: null
},

{
  id: "csup-dividends", num: 10, book_id: "csup", category: "investing",
  title: "The Dividend Question",
  thesis: "A dividend is only good news if the company cannot reinvest the money better.",
  reading_time: 2,
  explanation: [
    "Fisher's position is that the dividend question gets misread because it is treated as a question about income. It is a question about capital allocation. Cash retained by a company that can reinvest at a high rate produces more for the owner than the same cash paid out and taxed, so the comparison that matters is between the company's reinvestment rate and what the owner could earn with the money elsewhere.",
    "Consistency is worth more than the level. A company that raises its payout in a good year and cuts it in a poor one attracts owners who want income and then disappoints them, which damages the share price at the least convenient moment. Fisher prefers either a low payout maintained reliably or none at all, with the retained cash visibly going somewhere productive.",
    "The failure cases are symmetrical: a high payout from a company with real reinvestment opportunities in front of it, and retention by a company that has run out of them. Both are allocation errors, and both are common, because the payout tends to be set by what shareholders have come to expect and by what the previous year's payout was rather than by where the money will earn the most."
  ],
  practical: {
    label: "Example: testing the payout",
    lead: "Compare the return the company earns on cash it retains with what you would earn on the dividend.",
    bullets: [
      "What return has the company earned on capital it retained over five years?",
      "Is the payout stable, or does it move with each year's result?",
      "Where has retained cash gone: reinvestment, acquisitions or the balance sheet?",
      "Is a rising dividend a signal of confidence or of exhausted opportunities?",
      "Would I rather have this cash or their next project?"
    ]
  },
  application:
    "The private-market analogue is the reinvestment decision inside a portfolio company and the distribution decision inside a fund. A company burning cash on growth is retaining everything, so the question becomes what return the last dollar of that spend actually earned. At fund level, holding a compounding position past a liquidity window is the same trade-off with a fixed term attached to it.",
  models: ["capital-allocation", "compounding", "opportunity-cost", "incentives"],
  connections: [
    { to: "csup-long-horizon", type: "reinforces" },
    { to: "csup-margins", type: "related" },
    { to: "compounding", type: "reinforces" },
    { to: "opportunity-cost", type: "reinforces" },
    { to: "tii-asset-allocation", type: "related" }
  ],
  quote: null
},

{
  id: "csup-five-donts", num: 11, book_id: "csup", category: "investing",
  title: "Five Things Not to Do",
  thesis: "Most damage is avoidable: refuse the promotional, the cheap-looking and the crowd's current favourite.",
  reading_time: 3,
  explanation: [
    "Fisher gives a chapter to prohibitions, and the list is deliberately unglamorous. Do not buy into promotional companies with no operating record. Do not dismiss a good company because its shares trade over the counter rather than on a major exchange. Do not buy because you like the tone of the annual report. Do not assume a high price already reflects the growth ahead. Do not quibble over small fractions of the price.",
    "The list has a shape. Three of the five warn against substituting an easy signal for research: the polished report, the exchange listing, the assumption that the market has already done the analysis for you. The other two are about letting a small consideration block a large one, which is the pattern that keeps an investor out of a good holding over a fraction of a per cent.",
    "A further set of prohibitions follows the same logic, cautioning against over-diversification, against reacting to political alarms and war scares, and against following the crowd into whichever industry happens to be fashionable. Read together, the two lists describe the specific ways in which research gets displaced by a proxy for research, and that pattern is more useful to hold onto than any individual rule on either list."
  ],
  practical: {
    label: "Example: catching a substitution",
    lead: "Check whether your reason for acting is research or a proxy that quietly stood in for it.",
    bullets: [
      "Is my confidence coming from analysis or from the quality of the materials?",
      "Am I assuming the market has already priced the growth I can see?",
      "Is a small difference in price blocking a decision I have already made?",
      "How much of this thesis is that the sector is currently fashionable?",
      "What operating record exists, as opposed to projections?"
    ]
  },
  application:
    "Each of these has a direct venture form. The polished report is the deck, the exchange listing is the brand of the lead investor, the assumption that price reflects growth is deferring to a round somebody else priced, and quibbling over fractions is losing an allocation over valuation points that will not matter at exit. The fashionable industry needs no translation at all.",
  models: ["social-proof", "confirmation-bias", "narrative-fallacy", "inversion"],
  connections: [
    { to: "csup-scuttlebutt", type: "reinforces" },
    { to: "csup-when-to-sell", type: "reinforces" },
    { to: "social-proof", type: "reinforces" },
    { to: "inversion", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "related" }
  ],
  quote: null
},

{
  id: "csup-conservative-investor", num: 12, book_id: "csup", category: "investing",
  title: "What Makes an Investment Conservative",
  thesis: "Conservative means the business is likely to endure, not that the label sounds safe.",
  reading_time: 3,
  explanation: [
    "Fisher distinguishes a conservative investment from a conventional one and argues that the two are routinely confused. A conservative investment is one with a high probability of preserving purchasing power over a long period, which is a conclusion reached about a particular business. A conventional investment is one other people would agree with, which is a statement about opinion rather than about risk.",
    "His dimensions of conservatism are the qualitative factors again: a low cost position or genuine product superiority, a management with both depth and integrity, financial strength, and a price that does not already assume the whole outcome. All four have to be established by investigation, and none of them is settled by the size of the company or the familiarity of its name.",
    "The consequence is uncomfortable. A large, widely held company in a slowly declining position is conventional and not conservative, while a smaller company with a defensible position and honest management may be the safer holding despite feeling riskier to own. Inflation sharpens the distinction, because holding nominal value while purchasing power erodes is a real loss that looks like safety."
  ],
  practical: {
    label: "Example: separating conservative from conventional",
    lead: "Ask whether this holding is safe because of the business or comfortable because of who else owns it.",
    bullets: [
      "Will this business still hold its position in ten years, and why?",
      "Is my comfort coming from the analysis or from the company's name?",
      "What is the cost position or product advantage, stated specifically?",
      "Does the price already assume the outcome I am relying on?",
      "Who else owns this, and does that fact affect my judgement?"
    ]
  },
  application:
    "Venture portfolios accumulate conventional positions when allocation follows the names of co-investors and whichever sectors are raising well. The conservative version of the same decision rests on the qualitative work: a defensible position, management that reports honestly, enough capital to reach a real milestone, and an entry price that does not require the best case. Conventional is easier to defend at committee and is not the same thing.",
  models: ["durability", "margin-of-safety", "social-proof", "risk-not-volatility"],
  connections: [
    { to: "csup-fifteen-points", type: "reinforces" },
    { to: "csup-long-horizon", type: "reinforces" },
    { to: "tii-margin-of-safety", type: "related" },
    { to: "tii-investment-vs-speculation", type: "extends" },
    { to: "selectivity", type: "reinforces" }
  ],
  quote: null
}

);
