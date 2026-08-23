/* Capitalism and Freedom — Milton Friedman — 9 ideas */
window.DB.ideas.push(

{
  id: "caf-economic-political-freedom", num: 1, book_id: "caf", category: "history",
  title: "Economic Freedom Underwrites Political Freedom",
  thesis: "A market economy disperses economic power away from the state, and that dispersal is what makes political freedom durable rather than a matter of official tolerance.",
  reading_time: 3,
  explanation: [
    "Friedman opens the book with a claim that political freedom has historically appeared only alongside a market economy, never inside a centrally planned one. His reasoning starts from what a market does structurally: it separates the decision about what you produce, where you work and what you buy from the decision about what you may say or believe.",
    "The mechanism is the exit option. In a competitive economy, someone dismissed for unpopular views can be hired elsewhere, can publish through a printer indifferent to the content, can raise capital from someone who thinks the idea is wrong but the return is right. None of these transactions require agreement on ends. Concentrate ownership of jobs, printing presses and capital in the state and the exit option disappears, because the same authority controls the livelihood and the licence to dissent.",
    "Friedman is explicit that this is necessary rather than sufficient. Capitalism can coexist with an authoritarian government, and he did not claim otherwise. What he argued is that a planned economy, having merged economic and political power in one hand, has never yet sustained broad political freedom for long."
  ],
  practical: {
    label: "Example: reading a jurisdiction",
    lead: "Check how many independent hands actually control capital, employment and information in a market before trusting its numbers.",
    bullets: [
      "If a person or firm fell out of favour here, how many alternative sources of finance, employment or platform remain?",
      "Are credit allocation, media and the courts controlled by separate institutions, or by one?",
      "Has this government shown it will use economic levers to enforce political conformity?",
      "Am I pricing growth without pricing the durability of the freedom that produced it?",
      "What would have to change here before capital could be trapped or expropriated?"
    ]
  },
  application:
    "For an investor weighing jurisdictions, the operational read is not the growth rate but the number of independent hands controlling capital, employment and information. A market where credit, media and courts sit with competing institutions can absorb an unpopular position. A market where all three answer to one authority cannot, and that difference is worth pricing before the headline numbers are.",
  models: ["invisible-hand", "spontaneous-order", "extractive-institutions", "inclusive-institutions"],
  connections: [
    { to: "caf-intervention-test", type: "extends" },
    { to: "caf-corporate-responsibility", type: "related" },
    { to: "caf-monetary-rule", type: "related" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "authority-misinfluence", type: "contrasts" }
  ],
  quote: {
    text: "Underlying most arguments against the free market is a lack of belief in freedom itself.",
    attribution: "Milton Friedman, Capitalism and Freedom",
    why: "Friedman states this as a diagnosis of his opponents rather than a policy conclusion, which sets the frame for the rest of the book: most of what follows is an argument that specific interventions rest on a prior, unexamined discomfort with letting people decide for themselves."
  }
},

{
  id: "caf-monetary-rule", num: 2, book_id: "caf", category: "decision-making",
  title: "A Rule Instead of a Central Banker's Judgement",
  thesis: "Monetary policy should follow a fixed, pre-announced rule for money supply growth rather than be adjusted by discretion.",
  reading_time: 3,
  explanation: [
    "Friedman's proposal, softened in emphasis over his career but never abandoned, was that a central bank commit to growing the money supply at a steady, publicly stated rate year after year, rather than tightening and loosening in response to conditions. The argument is not that discretion is exercised badly by bad people. It is that discretion cannot be exercised well by anyone, because monetary policy works through long and variable lags whose length nobody can measure in advance.",
    "A central banker acting on this month's data is steering a ship that will not respond for a year or two, and by the time the response arrives the conditions that prompted the action may have reversed. The result, in Friedman's reading of the historical record, was policy that amplified the cycle it was meant to smooth: easing after the damage was done, tightening after the recovery was under way.",
    "A rule removes the temptation to fine-tune and replaces it with a target and predictable behaviour, which is what lets households and firms plan. The cost is the one every rule carries. It cannot respond to a genuine emergency its author did not anticipate."
  ],
  practical: {
    label: "Example: testing for a rule",
    lead: "Decide in advance whether a lever should be steady or discretionary by checking the length of its feedback loop.",
    bullets: [
      "How long is the lag between this decision and its measurable effect?",
      "Has discretion here historically amplified swings rather than damping them?",
      "What would a simple, pre-announced rule look like instead?",
      "What genuine emergency would justify breaking the rule, and who decides?",
      "Am I reacting to a data point that will be stale before my action lands?"
    ]
  },
  application:
    "The private-market analogue is any policy lever with a long, uncertain lag between action and effect, such as hiring plans or inventory built against a demand forecast. Where the feedback loop is slow and noisy, a steady, pre-committed pace usually beats a process that adjusts every time the latest data point looks different, because the adjustment arrives after the world that prompted it has already moved on.",
  models: ["decision-quality", "second-order", "liquidity-preference", "regression"],
  connections: [
    { to: "caf-fed-great-contraction", type: "reinforces" },
    { to: "caf-intervention-test", type: "extends" },
    { to: "tii-formula-investing", type: "reinforces" },
    { to: "tfs-planning-fallacy", type: "related" },
    { to: "avoiding-ruin", type: "related" }
  ],
  quote: null
},

{
  id: "caf-fed-great-contraction", num: 3, book_id: "caf", category: "history",
  title: "How the Fed Turned a Recession Into a Depression",
  thesis: "A passive central bank let the money supply collapse by roughly a third, reframing the Depression as a policy failure rather than a failure of capitalism.",
  reading_time: 3,
  explanation: [
    "Friedman's monetary history argued against the standard account that the Depression was capitalism failing under its own weight. The money supply fell by roughly a third between 1929 and 1933, not because the Federal Reserve chose contraction, but because it stood by while a wave of bank failures shrank it, at exactly the moment expansion was needed.",
    "The Federal Reserve had tools it had used in earlier, smaller episodes. What was missing between 1930 and 1933 was not capacity but will, compounded by a leadership vacuum after the death of the one governor who had argued for aggressive action. A small difference in who held the reins at a single meeting compounded, over three years of bank runs, into the deepest contraction in the country's history.",
    "The lesson Friedman drew was institutional rather than moral. A central bank left to discretion will sometimes get the discretion badly wrong, and the size of the error is not bounded by anyone's good intentions. This is the historical case behind his argument for a rule."
  ],
  practical: {
    label: "Example: reading a downturn's cause",
    lead: "Separate a genuine external shock from a sequence of defensible inactions that compounded into one.",
    bullets: [
      "Did the institution have the tools to respond, and did it use them?",
      "Was there a leadership gap at the moment action was needed?",
      "How many individually small non-decisions compounded into the outcome?",
      "Does the standard account blame the system, or a specific and avoidable failure to act?",
      "What would the counterfactual look like if the tools had been used on time?"
    ]
  },
  application:
    "The transferable point for anyone assessing an institution under stress is that a crisis rarely announces itself as a single catastrophic decision. It compounds from a sequence of individually defensible non-decisions by people who had the tools to act and did not, which is what a due-diligence process should be listening for in a management team's account of a past downturn.",
  models: ["critical-juncture", "multiplier-effect", "base-rates", "second-order"],
  connections: [
    { to: "caf-monetary-rule", type: "reinforces" },
    { to: "tii-market-history", type: "reinforces" },
    { to: "learning-from-mistakes", type: "reinforces" },
    { to: "second-order-effects", type: "reinforces" }
  ],
  quote: null
},

{
  id: "caf-floating-exchange-rates", num: 4, book_id: "caf", category: "decision-making",
  title: "Let the Exchange Rate Float",
  thesis: "A floating exchange rate lets a decentralised market absorb shocks that a fixed rate instead forces onto output and employment.",
  reading_time: 2,
  explanation: [
    "Friedman argued for floating exchange rates against the prevailing consensus for fixed rates, on the grounds that a fixed rate does not remove the need for adjustment, it only decides who bears it. If a country's costs rise relative to its trading partners under a fixed rate, the adjustment has to come through falling wages, falling output or capital controls, all slower and more painful than a price simply moving.",
    "A floating rate lets millions of individual trade and capital decisions set the price continuously, the same argument he makes for domestic prices generally. No central authority has, or could assemble, the information needed to set the correct rate in advance, so the least bad mechanism is to let the rate discover itself.",
    "The standing objection was that markets would misprice currencies out of speculation or panic. Friedman's answer was that a government defending an indefensible fixed rate creates a larger, more visible target for speculation than a market absorbing information continuously, and events since have mostly gone his way on this specific point."
  ],
  practical: {
    label: "Example: finding the hidden adjustment",
    lead: "When a price is held fixed by policy, find where the underlying pressure is actually being absorbed instead.",
    bullets: [
      "What price is being held fixed here, and by whom?",
      "If the fixed price is wrong, what is absorbing the gap: volume, margin, or a future shock?",
      "Would letting this price move continuously produce a smaller total adjustment?",
      "Is the fixed rate creating a visible target that invites a one-off attack on it?",
      "Who has the information needed to say what the right price actually is?"
    ]
  },
  application:
    "The venture equivalent is any internal pricing mechanism a company holds artificially fixed against pressure to move, such as an exchange rate baked into supplier contracts or a transfer price between divisions. Holding the number fixed does not remove the underlying imbalance, it just moves the strain onto volume, margin or a future one-off correction, and the honest question is always where that strain is actually landing.",
  models: ["spontaneous-order", "knowledge-problem", "gains-from-trade", "incentives"],
  connections: [
    { to: "caf-economic-political-freedom", type: "related" },
    { to: "caf-monetary-rule", type: "extends" },
    { to: "tmit-cycles", type: "related" },
    { to: "opportunity-cost", type: "reinforces" }
  ],
  quote: null
},

{
  id: "caf-occupational-licensing", num: 5, book_id: "caf", category: "strategy",
  title: "Licensing Protects Incumbents More Than Consumers",
  thesis: "Occupational licensing is sold as consumer protection but mainly functions as a barrier letting existing practitioners restrict entry and raise prices.",
  reading_time: 3,
  explanation: [
    "Friedman distinguishes three levels of consumer protection: certification, which publicly verifies competence but leaves the practice open to anyone, regulation of standards without control of entry, and licensing, which makes practising without government-issued permission illegal. He argues the profession asking for licensing is rarely disinterested, and once granted, the licensing board is typically staffed by the profession itself.",
    "A board of incumbents setting the terms of entry has an obvious incentive to set them high, restrict numbers, and treat any expansion of supply as a threat rather than a benefit to the public the licence supposedly protects. The examination becomes a barrier calibrated to the pass rate the profession wants, not to the competence the public needs.",
    "The public cost is a smaller supply of practitioners, higher prices and less innovation in how a service is delivered, since new formats and lower-cost providers are exactly what a licensing board is positioned to exclude. Friedman's alternative is certification: publish who is qualified, and let the buyer decide how much that qualification is worth to them."
  ],
  practical: {
    label: "Example: testing a regulatory moat",
    lead: "Work out whether a licensing barrier around a business actually protects customers or protects existing suppliers.",
    bullets: [
      "Who sits on the body that sets the entry requirement: incumbents, or an independent party?",
      "Has the pass rate or entry quota moved with market conditions rather than competence standards?",
      "Would certification without exclusion achieve the same consumer protection?",
      "What would a lower-cost or differently formatted entrant do to this business if the licence were removed?",
      "Is this moat a barrier the customer values, or one the incumbents lobbied for?"
    ]
  },
  application:
    "In diligence terms this reframes any regulatory moat a company benefits from: ask whether the barrier serves the customer or serves the incumbents who lobbied for it, because the second kind is a policy risk, not a durable competitive advantage. A moat built on restricting supply through licensing is defensible only until reform, a new format, or a jurisdiction that never adopted the licence, and that fragility belongs in the underwriting.",
  models: ["monopoly", "barriers-to-entry", "authority-bias", "incentives"],
  connections: [
    { to: "caf-intervention-test", type: "extends" },
    { to: "cd-only-barriers-matter", type: "contrasts" },
    { to: "pcs-entry-barriers", type: "contrasts" },
    { to: "s7p-benefit-and-barrier", type: "contrasts" },
    { to: "authority-misinfluence", type: "reinforces" }
  ],
  quote: null
},

{
  id: "caf-negative-income-tax", num: 6, book_id: "caf", category: "decision-making",
  title: "The Negative Income Tax",
  thesis: "Replace a patchwork of welfare programs with a single cash transfer that phases out smoothly, so earning more never leaves someone worse off.",
  reading_time: 3,
  explanation: [
    "Friedman's proposal was to fold the various in-kind and categorical welfare programs into one mechanism run through the tax system: below a threshold income, a household receives a payment instead of paying tax, and the payment phases out gradually as earned income rises, rather than being withdrawn all at once.",
    "The specific defect he was fixing is the overlapping benefit cliff. Where several separate programs each withdraw support once earnings cross a line, a household can face a marginal rate on the next dollar earned that exceeds the marginal rate on a very high income, because the loss of housing support, food assistance and the rest stacks on top of the tax owed. A single smooth taper removes this, so more work always yields more income.",
    "The secondary case is administrative. One cash transfer, means-tested once, replaces a set of programmes each requiring its own eligibility bureaucracy, in-kind delivery and enforcement staff, and leaves the recipient to decide what the money is actually needed for rather than accepting whatever the programme decided to provide."
  ],
  practical: {
    label: "Example: finding the hidden cliff",
    lead: "Add up every overlapping threshold in a compensation or benefit structure before judging the incentive it creates.",
    bullets: [
      "What is the combined marginal rate across every programme or clause that phases out here?",
      "Is there a point where earning more actually leaves someone worse off?",
      "How many separate eligibility or administrative processes could a single mechanism replace?",
      "Does this design assume the recipient knows their own needs better than the programme does?",
      "Would a smooth taper produce a better incentive than the current step?"
    ]
  },
  application:
    "The general principle transfers to any incentive structure with stacked thresholds, such as a compensation plan combining base pay, a bonus cliff and a separate equity vesting schedule that together create a point where extra effort is pointless or actively penalised. The fix is the same: model the combined marginal rate across every overlapping mechanism, not each one in isolation, and smooth the step that is quietly discouraging the behaviour you want.",
  models: ["incentives", "constraint", "second-order", "opportunity-cost"],
  connections: [
    { to: "caf-education-vouchers", type: "related" },
    { to: "caf-intervention-test", type: "extends" },
    { to: "incentives", type: "reinforces" },
    { to: "opportunity-cost", type: "related" }
  ],
  quote: null
},

{
  id: "caf-education-vouchers", num: 7, book_id: "caf", category: "decision-making",
  title: "Vouchers Separate Paying for Schooling From Providing It",
  thesis: "Government can finance education without running the schools, and separating the two lets competition improve a service a monopoly has no pressure to improve.",
  reading_time: 3,
  explanation: [
    "Friedman's case for education vouchers rests on distinguishing two questions that get bundled together: should government ensure children are educated, and should government therefore run the schools that educate them. His answer to the first is yes, given the case for compulsory minimum schooling and the wider benefit to society of a literate population. His answer to the second is no.",
    "A voucher redeemable at any qualifying school, public or private, keeps the public financing while opening the provision to competition. A public system funded regardless of whether parents are satisfied has no equivalent pressure, since the school is paid whether the child thrives there or not, and the parent's only real recourse is to move house or pay twice.",
    "Friedman anticipated the objections that would follow: that vouchers would drain funding from public schools, or let selective schools skim the easiest students. His response was that these are arguments for how a voucher scheme should be designed, universal eligibility and no additional selection by the receiving school, rather than arguments against separating financing from provision at all."
  ],
  practical: {
    label: "Example: mapping payer, chooser and provider",
    lead: "Separate who pays, who decides, and who delivers, then check whether the provider actually answers to either.",
    bullets: [
      "Who pays for this service, who chooses the provider, and who delivers it?",
      "Does the provider get paid regardless of the end user's satisfaction?",
      "What is the end user's actual recourse if the service is poor?",
      "Would separating financing from provision introduce real competitive pressure here?",
      "Is the incumbent's position funded by default rather than earned by performance?"
    ]
  },
  application:
    "The transferable structure is any service where the payer, the decision-maker and the provider are three different parties, which is common in healthcare, aged care and enterprise software sold to a procurement function rather than the end user. Wherever the entity being paid faces no consequence from the end user's dissatisfaction, the business has weaker pressure to improve than the customer experience suggests, and that gap is worth pricing into any diligence on the sector.",
  models: ["monopoly", "incentives", "specialisation", "second-order"],
  connections: [
    { to: "caf-negative-income-tax", type: "related" },
    { to: "caf-intervention-test", type: "extends" },
    { to: "zto-monopoly", type: "related" },
    { to: "specialisation", type: "reinforces" }
  ],
  quote: null
},

{
  id: "caf-corporate-responsibility", num: 8, book_id: "caf", category: "strategy",
  title: "The Social Responsibility of Business Is Its Profit",
  thesis: "A corporate executive spending shareholders' money on social causes is spending someone else's money on a mandate nobody gave them.",
  reading_time: 3,
  explanation: [
    "Friedman's argument is narrower than it is often remembered as being. It is not that businesses should behave unethically, or that profit excuses any conduct. It is that a corporate executive is an employee of the owners, and spending the owners' money on causes the executive personally favours, at the expense of the return the owners were promised, is spending someone else's money without their authorisation.",
    "He extends the same logic to who is competent to make the decision. An executive is hired for skill at running a business, not for any particular expertise in what the optimal rate of pollution reduction or local unemployment relief should be, and there is no mechanism by which shareholders, customers or employees agreed to fund the executive's particular judgement on those questions.",
    "His sharpest concern was political rather than economic. Businesses accepting a broader social mandate invite the public to regulate how that mandate is exercised, since an unaccountable concentration of decision-making power over social ends is precisely what he spent the rest of the book arguing against in government. A business claiming a licence to pursue social ends beyond profit, within the law, should not be surprised when it is regulated as though it holds one."
  ],
  practical: {
    label: "Example: testing a stated social objective",
    lead: "Check whether spending on a social objective was actually authorised by the people whose capital funds it.",
    bullets: [
      "Was this spending disclosed and consented to by the capital providers, or decided unilaterally?",
      "Is the executive making this call inside their actual area of competence?",
      "Would this spending survive being framed honestly as a cost to the promised return?",
      "Is the business substituting a social mandate for one it was never actually given?",
      "Does this decision invite exactly the regulatory oversight the business would rather avoid?"
    ]
  },
  application:
    "This bears directly on governance discussions where a management team wants to redirect capital toward a stated social or environmental objective. The test is not whether the objective is worthy, it is whether the capital being spent was raised for that purpose, disclosed as such, and consented to by the people whose money it is. Capital allocation decisions made on the executive's personal preference rather than the mandate they were funded under are a governance flag independent of how the market receives the announcement.",
  models: ["capital-allocation", "incentives", "circle-of-competence", "opportunity-cost"],
  connections: [
    { to: "ewb-owner-principles", type: "reinforces" },
    { to: "tos-capital-allocation", type: "reinforces" },
    { to: "circle-of-competence", type: "related" },
    { to: "caf-intervention-test", type: "related" }
  ],
  quote: {
    text: "Few trends could so thoroughly undermine the very foundations of our free society as the acceptance by corporate officials of a social responsibility other than to make as much money for their stockholders as possible.",
    attribution: "Milton Friedman, Capitalism and Freedom",
    why: "Friedman states the doctrine of shareholder-only obligation at its strongest, calling the alternative subversive of free society rather than merely unwise, which signals that for him this is the same argument as the rest of the book applied to the corporation: concentrated, unaccountable decision-making is the risk, regardless of who holds it."
  }
},

{
  id: "caf-intervention-test", num: 9, book_id: "caf", category: "decision-making",
  title: "A Presumption Against Government Action",
  thesis: "Every proposed government intervention needs to clear a specific test, rather than being assumed neutral or costless by default.",
  reading_time: 3,
  explanation: [
    "Rather than offering a single rule for when government should act, Friedman sets out a short list of legitimate exceptions to leaving markets alone: defining and enforcing the rules of the game, meaning property, contract and a stable currency, handling genuine neighbourhood effects where one party's actions impose costs or benefits on others that cannot be priced through voluntary exchange, and a narrow paternalist role for those not yet capable of consenting for themselves, principally children.",
    "Outside that list, the burden of proof sits with the person proposing intervention, not with the market being left alone. This is a deliberate reversal of the more common default, where a market outcome is treated as needing justification and a government programme is treated as needing none, and Friedman regarded that asymmetry as itself unexamined.",
    "The list functions as a working test rather than an ideology. It asks whether the specific case in front of you is a genuine neighbourhood effect, a cost imposed on a party who did not agree to it, or whether it is a case being dressed in that language to justify a policy that would not survive being named directly, for instance protection of incumbents relabelled as consumer safety."
  ],
  practical: {
    label: "Example: applying the test",
    lead: "Before adding a rule or approval step, check whether it answers a genuine externality or is a comfort dressed as one.",
    bullets: [
      "Whose cost or benefit, specifically, is not already captured by the parties making this decision?",
      "Could this be solved by better-defined property rights or a clearer contract instead of a new rule?",
      "Is this framed as protection but functioning as protection of an incumbent instead?",
      "Who has to prove their case here: the person proposing the rule, or the person left alone?",
      "Would this rule survive being described plainly, without the language of protection?"
    ]
  },
  application:
    "The organisational version is running every request for a new rule, approval step or standing committee through the same test: is this solving a real externality this specific decision imposes on people who did not agree to it, or is it a general discomfort with a decision being made without central sign-off. Most internal bureaucracy, like most regulation, survives on the second justification while being defended in the language of the first, and naming the difference is most of the discipline.",
  models: ["constraint", "knowledge-problem", "spontaneous-order", "checklist"],
  connections: [
    { to: "caf-economic-political-freedom", type: "extends" },
    { to: "caf-negative-income-tax", type: "related" },
    { to: "caf-education-vouchers", type: "related" },
    { to: "tic-written-checklist", type: "reinforces" },
    { to: "goal-the-constraint", type: "reinforces" }
  ],
  quote: null
}

);
