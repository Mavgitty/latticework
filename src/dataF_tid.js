/* The Innovator's Dilemma — Clayton M. Christensen — 10 ideas */
window.DB.ideas.push(

{
  id: "tid-sustaining-and-disruptive", num: 1, book_id: "tid", category: "strategy",
  title: "Sustaining and Disruptive",
  thesis: "Disruptive innovations begin worse on every attribute the existing best customers care about.",
  reading_time: 3,
  explanation: [
    "The distinction has nothing to do with how novel a technology is. Sustaining innovations improve a product along the dimensions established customers already value, and incumbents win those contests almost every time, whether the improvement is incremental or radical. Disruptive innovations offer a different package: worse on the main performance measure, better on something the mainstream does not yet care about, and cheaper, simpler or more convenient.",
    "Because they are worse where it counts, disruptive products cannot be sold to the best customers. They find a home at the low end or in a new application where their weaknesses do not matter, and they improve from there. The mainstream ignores them, correctly, because at the time of the decision the product genuinely cannot do the job. The threat materialises when the improvement trajectory crosses what mainstream customers need.",
    "The pattern is a story about trajectories rather than about products. Small disk drives, discount retailing and mini mills each began as inferior offerings in unattractive segments and moved upmarket as they improved, and in every case the incumbents watched it happen and already held the technology. What they lacked was a reason to sell it to anyone who was paying them well."
  ],
  practical: {
    label: "Example: classifying an innovation",
    lead: "Work out whether the new product is better or worse on the attributes your best customers buy on.",
    bullets: [
      "Is this better or worse on the measure our main customers use?",
      "What does it do well that those customers do not currently value?",
      "Which customers can it be sold to today, as it stands?",
      "How fast is it improving on the attribute it is weak on?",
      "When does that trajectory cross what our mainstream needs?"
    ]
  },
  application:
    "The classification changes the underwriting. A sustaining innovation faces an incumbent who will fight and usually wins, so the questions are distribution and capital. A disruptive one faces an incumbent with a good reason to ignore it, so the questions become the rate of improvement and the size of the beachhead. Founders describe every product as the second kind, which makes the weak attributes the useful thing to establish.",
  models: ["disruption", "adoption-lifecycle", "generic-strategy", "inflection-point"],
  connections: [
    { to: "tid-value-networks", type: "extends" },
    { to: "tid-good-management", type: "reinforces" },
    { to: "s7p-counter-positioning", type: "related" },
    { to: "zto-last-mover", type: "contrasts" },
    { to: "pcs-industry-evolution", type: "related" }
  ],
  quote: null
},

{
  id: "tid-good-management", num: 2, book_id: "tid", category: "leadership",
  title: "Good Management Causes the Failure",
  thesis: "Listening to your best customers and protecting your margins both point away from disruption.",
  reading_time: 3,
  explanation: [
    "The finding that gives the book its title is that the failing firms were well run. They listened to customers, invested in the products those customers asked for, watched their margins, allocated capital to the highest-return projects and killed the ones that did not clear the hurdle. Every one of those disciplines, applied to a disruptive product, produces a decision not to pursue it.",
    "Follow the logic through once. The best customers do not want the product, because it is worse. Its margins are below the existing business, so it fails the investment screen. The market is too small to matter to a large company. The revenue forecast cannot be defended because the market does not exist yet. A capable team assessing this honestly declines, and declines again next year with better information.",
    "That reframes the failure as structural rather than personal, which matters because the usual remedies are personal. Replacing the management team, urging boldness or running an innovation programme does nothing about the fact that the disciplined answer is no. Something has to change the process that produces the answer, and that is a question of organisational design rather than a question of will."
  ],
  practical: {
    label: "Example: checking why you said no",
    lead: "Take the last opportunity you declined and separate the reasons that were about customers from the ones about margin.",
    bullets: [
      "Did we decline this because customers did not want it?",
      "Did it fail the margin hurdle rather than the product test?",
      "Was the market judged too small to be worth the effort?",
      "Would the same reasoning have rejected our own founding product?",
      "Who inside the company argued for it, and what happened to them?"
    ]
  },
  application:
    "Portfolio companies reach the size where this starts operating earlier than people expect, usually the moment a real customer base begins setting the roadmap. The signals are a roadmap composed entirely of requests from the largest accounts and a hurdle rate that rules out anything with lower gross margin than the core product. Both are evidence of good management and both foreclose the next product.",
  models: ["incentives", "disruption", "return-on-capital", "constraint"],
  connections: [
    { to: "tid-resource-dependence", type: "extends" },
    { to: "tid-sustaining-and-disruptive", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "ewb-institutional-imperative", type: "reinforces" },
    { to: "cinc-hidden-problems", type: "related" }
  ],
  quote: null
},

{
  id: "tid-value-networks", num: 3, book_id: "tid", category: "strategy",
  title: "The Value Network You Inherit",
  thesis: "The customers you serve hand you a cost structure and a working definition of better.",
  reading_time: 3,
  explanation: [
    "A value network is the context in which a firm competes: the customers it sells to, the suppliers it buys from, the channel it reaches the market through, and the performance measures all of them use. Selling to mainframe buyers means a direct sales force, a service organisation, a set of reliability standards and the overhead to support them. Those commitments arrive together and set what the firm can profitably do.",
    "The measures are the binding part. Inside one network, better means faster and more reliable, and inside another it means smaller and cheaper. A firm that has spent twenty years improving against the first set has no instrument that registers progress against the second, so the disruptive product does not read as a different kind of thing. It reads as a poor version of what the firm already sells.",
    "Cost structure completes the trap. An overhead base built to serve demanding customers requires the margins those customers pay, so a product that is profitable for an entrant is loss-making for the incumbent selling the same thing. This is why the standard response is to move further upmarket, which improves the reported numbers in the short run and hands the entrant exactly the ground it needs."
  ],
  practical: {
    label: "Example: naming your network",
    lead: "Write down who you serve, what they measure, and what your cost base requires in order to break even.",
    bullets: [
      "Which customers set our working definition of a good product?",
      "What overhead does serving them commit us to carrying?",
      "What gross margin does that overhead base require us to earn?",
      "What would we give up in order to serve a cheaper customer?",
      "Are we moving upmarket because it is attractive or because it is easier?"
    ]
  },
  application:
    "This makes incumbent responses to cheap competition predictable. The instinct to trade up is a fact about cost structure rather than a strategic choice, and it can be read in advance from gross margin and overhead. For an entrant it defines how much room exists before the incumbent has any reason to fight, and that room is usually wider and lasts longer than the pitch assumes.",
  models: ["value-chain", "barriers-to-entry", "return-on-capital", "disruption"],
  connections: [
    { to: "tid-sustaining-and-disruptive", type: "extends" },
    { to: "tid-processes-and-values", type: "reinforces" },
    { to: "pcs-industry-structure", type: "related" },
    { to: "mck-roic", type: "related" },
    { to: "cd-three-sources", type: "contrasts" }
  ],
  quote: null
},

{
  id: "tid-resource-dependence", num: 4, book_id: "tid", category: "strategy",
  title: "Customers Control the Resources",
  thesis: "Resource allocation follows the customers who pay, whatever executives decide in the meeting.",
  reading_time: 3,
  explanation: [
    "Christensen's account of why disruptive projects die inside good companies borrows from resource dependence theory. Firms survive by satisfying the customers and investors who supply their resources, so the internal processes that allocate people and money end up tuned to those suppliers' preferences. A middle manager who starves a low-margin project is not defying the strategy. They are doing the job the company measures them on.",
    "The mechanism is visible in the sequence. A senior team announces a commitment to the new product. Resourcing decisions are then made one at a time, under pressure, by people whose incentives and information both favour the customers already paying. Engineers move to the urgent account problem, the strongest salespeople chase the larger commission, and the project loses its staff without any decision ever being reversed.",
    "The uncomfortable implication is that executive intent is a weak instrument. Announcements, mandates and strategy documents lose to the resource allocation process, and that process reflects the customer base rather than the plan. Changing which customers a unit depends on is one of the few interventions that reliably works, which is why the recommended answer is structural separation rather than better internal communication."
  ],
  practical: {
    label: "Example: following the resources",
    lead: "Trace where engineers, salespeople and capital actually went last quarter, rather than where the plan said they would go.",
    bullets: [
      "Where did our strongest engineers actually spend the last quarter?",
      "Which customer's problem interrupts the roadmap most often?",
      "Do our incentives pay more for the new product or the old one?",
      "Who can starve this project without ever making a decision?",
      "Has the commitment survived a single quarter of real pressure?"
    ]
  },
  application:
    "Board support for a new line is worth very little without a look at where the resources actually go. The question for a portfolio company is not whether the new product is a priority but who staffs it, whose budget carries it, and whether that budget can be raided in a weak quarter. If it can, the answer is already settled and the announcement is noise.",
  models: ["incentives", "constraint", "capital-allocation", "disruption"],
  connections: [
    { to: "tid-good-management", type: "extends" },
    { to: "tid-separate-organisation", type: "related" },
    { to: "ewb-institutional-imperative", type: "reinforces" },
    { to: "tos-capital-allocation", type: "contrasts" },
    { to: "incentives", type: "related" }
  ],
  quote: null
},

{
  id: "tid-small-markets", num: 5, book_id: "tid", category: "strategy",
  title: "Small Markets and Large Companies",
  thesis: "A small market cannot move a large company's growth rate, and that is arithmetic.",
  reading_time: 2,
  explanation: [
    "A company with forty million in revenue needs eight million of new revenue to grow twenty per cent. A company with four billion needs eight hundred million, and very few new markets can supply that in a single year. The same opportunity is therefore transformative for one firm and immaterial for the other, and the larger firm's decision to pass is correct on its own numbers.",
    "This is a constraint rather than a shortage of imagination, which is why exhortation does not help. Growth targets set at the corporate level make small markets ineligible by construction, and the projects that clear the bar are the ones with large addressable numbers, meaning existing markets served by sustaining improvements. The disruptive opportunity is disqualified on size before anybody assesses it on merit.",
    "It also explains the timing of entry. Large firms enter disruptive markets once those markets have grown enough to matter, by which point the entrant has years of learning, a cost structure suited to the segment and a base of established customers. The delay is not hesitation. It is the market crossing the incumbent's materiality threshold, and the position costs a great deal more by then."
  ],
  practical: {
    label: "Example: doing the arithmetic",
    lead: "Divide the growth target by the size of the opportunity, and see whether the two numbers can ever meet.",
    bullets: [
      "How much new revenue does our growth target require next year?",
      "What is the largest plausible first-year revenue from this new market?",
      "Is this project disqualified by size before anyone judges it?",
      "What size of business unit would find this opportunity exciting?",
      "At what point does this market become material to us?"
    ]
  },
  application:
    "The arithmetic explains why corporate venture and innovation units keep failing on the same axis, and why the winners in a new category are usually new companies. It also sets the acquisition timing: a large incumbent becomes a buyer when the category crosses its materiality threshold, which is a forecastable moment and usually where the best price is available to the seller.",
  models: ["scale-economies", "opportunity-cost", "power-law", "constraint"],
  connections: [
    { to: "tid-separate-organisation", type: "extends" },
    { to: "tid-resource-dependence", type: "reinforces" },
    { to: "zto-small-market", type: "related" },
    { to: "tpl-power-law-returns", type: "related" },
    { to: "mck-growth-and-returns", type: "related" }
  ],
  quote: null
},

{
  id: "tid-markets-that-do-not-exist", num: 6, book_id: "tid", category: "learning",
  title: "Markets That Do Not Yet Exist",
  thesis: "You cannot analyse a market that does not exist, so plan to learn instead.",
  reading_time: 3,
  explanation: [
    "The standard tools of good management require data, and a market that has not formed supplies none. Research cannot survey customers who have never encountered the product, forecasts have no base to extrapolate from, and a business case built on such numbers is a document rather than an analysis. Christensen's finding is that in these situations the forecasts were wrong by orders of magnitude, in both directions.",
    "The correct posture is discovery. Treat the first plan as a hypothesis about who the customer is and what they will use the product for, spend as little as possible establishing whether it holds, and expect the eventual application to be one nobody in the room named. The early market for the transistor was hearing aids and portable radios rather than anything the vacuum tube makers were serving.",
    "This changes what failure means at the level of an individual plan. In a mature market, a plan that misses is a management problem. In an emerging one, the first plan is supposed to be wrong, and the useful measures are how cheaply the firm learned it and how quickly it moved. A budget process that punishes the first miss selects for firms that never locate the market."
  ],
  practical: {
    label: "Example: planning to learn",
    lead: "Write the first plan as a set of guesses, then decide what each guess costs to test.",
    bullets: [
      "Which parts of this plan are assumptions rather than knowledge?",
      "What is the cheapest test that would tell us we are wrong?",
      "How much are we spending before the first real customer signal?",
      "Are we forecasting a market or discovering one?",
      "What would we do if the actual use case is something else?"
    ]
  },
  application:
    "This is the discipline underneath staged financing, and it makes the stage gates specific. A first round buys answers to named questions about who buys and why, not a scaled version of the original plan. A team that changes its target customer after early evidence is executing correctly, and a team still defending its original segmentation two years in has stopped learning anything.",
  models: ["validated-learning", "planning-fallacy", "optionality", "probability"],
  connections: [
    { to: "tid-small-markets", type: "extends" },
    { to: "tid-separate-organisation", type: "related" },
    { to: "zto-secrets", type: "related" },
    { to: "tfs-planning-fallacy", type: "reinforces" },
    { to: "lbv-young-companies", type: "related" }
  ],
  quote: null
},

{
  id: "tid-processes-and-values", num: 7, book_id: "tid", category: "leadership",
  title: "Capabilities Live in Processes and Values",
  thesis: "What an organisation can do sits in its processes and priorities, not only in its people.",
  reading_time: 3,
  explanation: [
    "Christensen splits organisational capability into three parts. Resources are people, technology, cash and brands. Processes are the established ways work gets converted into output. Values are the criteria by which people decide what deserves attention. Resources are transferable. Processes and values are the accumulated residue of doing one particular kind of work well over many years, and they resist being moved anywhere.",
    "This is why hiring and acquiring so often fail to transfer a capability. Buying the team buys the resources and leaves the processes behind, and dropping a disruptive product into an existing unit subjects it to values calibrated on the old business. The values are the harder half, because they operate as thousands of independent judgements about which opportunities deserve somebody's afternoon.",
    "The corollary is that a capable organisation is also a constrained one. Processes that make a firm excellent at one kind of work make it incapable of another, and values behave the same way. A company that has learned to refuse anything below forty per cent gross margin will refuse it consistently, without needing to be told, and long after the refusal has stopped being wise."
  ],
  practical: {
    label: "Example: locating the capability",
    lead: "Ask whether the thing you need sits in people, in processes, or in what the organisation values.",
    bullets: [
      "Is what we lack people, a process, or a set of priorities?",
      "Would hiring three of their engineers actually transfer this capability?",
      "What margin or size threshold does this organisation refuse automatically?",
      "Which of our processes makes us bad at the new work?",
      "Can this product survive being judged by our existing criteria?"
    ]
  },
  application:
    "This is the sharpest test of an acquisition thesis. Where the capability being bought lives in processes and values, integration destroys it, and the acquirer discovers that after the earnout has been paid. It is also why a strong culture is a mixed finding in diligence: the values that keep the core business disciplined make a second product very unlikely to survive inside the same walls.",
  models: ["process-power", "incentives", "durability", "constraint"],
  connections: [
    { to: "tid-good-management", type: "extends" },
    { to: "tid-separate-organisation", type: "reinforces" },
    { to: "s7p-process-power", type: "related" },
    { to: "cap-organisational-excellence", type: "related" },
    { to: "cinc-studio-and-film", type: "related" }
  ],
  quote: null
},

{
  id: "tid-performance-oversupply", num: 8, book_id: "tid", category: "strategy",
  title: "When the Product Is Good Enough",
  thesis: "Once performance overshoots what customers can use, competition moves to convenience and price.",
  reading_time: 3,
  explanation: [
    "Technologies improve faster than customers' ability to absorb the improvement. When a product's performance passes what the mainstream can actually use, the extra performance stops commanding a premium and buyers begin choosing on whatever remains scarce, which is usually reliability first, then convenience, then price. The basis of competition shifts, and the firm that had been winning on performance finds its advantage no longer being paid for.",
    "This is the moment the disruptive product turns dangerous. It has been improving on the attribute it was weak on, and it now clears the threshold that matters while remaining cheaper and simpler. Nothing about the incumbent has deteriorated. The customers' requirement stopped moving while the entrant's capability kept moving, and the gap that had justified the price premium closed without anybody choosing it.",
    "Recognising the shift from inside is difficult, because every internal measure still shows the firm winning. It leads on the specification, the engineering is better and the reviews are favourable, while the buying criterion has quietly become something the firm does not track. The signal appears instead in price sensitivity and in customers declining upgrades they would once have bought without discussion."
  ],
  practical: {
    label: "Example: spotting the overshoot",
    lead: "Check whether the improvements you keep shipping are still something customers notice and are willing to pay for.",
    bullets: [
      "Are customers paying a premium for our latest performance gains?",
      "What proportion of our capability does a typical customer actually use?",
      "Have upgrade cycles lengthened without any drop in satisfaction?",
      "What are buyers asking about now that they did not ask before?",
      "If performance stops mattering, what do we compete on instead?"
    ]
  },
  application:
    "Performance oversupply is where software categories move from differentiated to commoditised, and the timing is readable in advance. Watch the proportion of features customers use, the length of upgrade cycles, and whether procurement has started running competitive tenders. In a portfolio company it is the argument for spending the advantage on distribution or an adjacent product while the premium is still being paid.",
  models: ["disruption", "adoption-lifecycle", "switching-costs", "generic-strategy"],
  connections: [
    { to: "tid-sustaining-and-disruptive", type: "extends" },
    { to: "tid-value-networks", type: "reinforces" },
    { to: "pcs-substitutes", type: "related" },
    { to: "pcs-industry-evolution", type: "related" },
    { to: "cd-no-strategy-problem", type: "related" }
  ],
  quote: null
},

{
  id: "tid-separate-organisation", num: 9, book_id: "tid", category: "strategy",
  title: "An Organisation Small Enough to Care",
  thesis: "Put the disruptive business in a unit small enough to be excited by a small market.",
  reading_time: 3,
  explanation: [
    "The practical recommendation follows from the constraints rather than from any preference for autonomy. If the problem is that the opportunity is immaterial to the parent, the answer is a unit whose own size makes it material. If the problem is that processes and values reject it, the answer is a unit permitted to develop different ones. Both conditions require real separation, not a division with a new name.",
    "The specifics matter more than the principle. The unit needs its own cost structure so it can profit at an entrant's margins, its own customers so that resourcing is not settled by the parent's accounts, and permission to compete with the parent's products. Housing it inside the existing business under the existing hurdle rates reproduces the original problem with an innovation label attached to it.",
    "There is a genuine cost, which is that the parent forgoes the synergies that make the arrangement look wasteful. Duplicated functions, a separate sales force and a product that takes revenue from the core are the price of the thing existing at all. A firm that refuses that price has not found a cheaper route to the same outcome. It has decided not to do it."
  ],
  practical: {
    label: "Example: setting up the unit",
    lead: "Check whether the new business has its own size, its own customers and its own economics.",
    bullets: [
      "Is this market large enough to excite the unit pursuing it?",
      "Does the unit have its own cost structure and hurdle rate?",
      "Can it sell to customers the parent does not want?",
      "Is it allowed to take revenue from the core product?",
      "Who can reclaim its people in a difficult quarter?"
    ]
  },
  application:
    "The same logic argues for backing the standalone company over an incumbent's internal effort, and for treating a corporate innovation unit's structure as diligence rather than background colour. Ask about its budget authority, its hurdle rate and whether it may compete with the parent. Where the answers are no, that incumbent is not really a competitor here, which tells you how much time the entrant has.",
  models: ["incentives", "constraint", "capital-allocation", "optionality"],
  connections: [
    { to: "tid-small-markets", type: "extends" },
    { to: "tid-resource-dependence", type: "extends" },
    { to: "zto-small-market", type: "related" },
    { to: "cinc-studio-and-film", type: "related" },
    { to: "cap-multiple-counsellor", type: "related" }
  ],
  quote: null
},

{
  id: "tid-limits-of-the-theory", num: 10, book_id: "tid", category: "learning",
  title: "How Often Is It Really Disruption",
  thesis: "Disruption is claimed constantly and is the actual mechanism in a small minority of cases.",
  reading_time: 2,
  explanation: [
    "The theory describes a specific mechanism. An inferior, cheaper product enters at the low end or in a new application, improves along a trajectory, and meets mainstream requirements after the incumbent has declined to respond for defensible reasons. Most competitive defeats do not follow that path. Firms lose to better products sold to the same customers, to distribution, to a stronger balance sheet, or to ordinary mismanagement.",
    "The word has become a label applied after the event to any successful entrant, which drains it of use. A premium product that wins the best customers first is a sustaining innovation the incumbent lost, and calling it disruption hides both what happened and what might have prevented it. The test is whether the entrant started out worse on the attributes the mainstream buys on.",
    "There is a selection problem in the evidence too. The cases are chosen because the entrant won, and the many inferior cheap products that stayed inferior and cheap never appear. The theory therefore explains a mechanism well and predicts poorly, which is the right way to hold it. Useful for asking whether an incumbent has a reason to ignore something, not for concluding the something will win."
  ],
  practical: {
    label: "Example: checking the claim",
    lead: "Test whether the mechanism actually applies here before accepting the label that came with the pitch.",
    bullets: [
      "Did this entrant start out worse on the mainstream buying criteria?",
      "Is the incumbent ignoring it for reasons that make sense?",
      "Or is this simply a better product sold to the same customers?",
      "How many similar cheap entrants stayed small and go undiscussed?",
      "Does the label change anything we would actually do?"
    ]
  },
  application:
    "Every second pitch claims to be disrupting an incumbent, and the claim is usually a description of ambition. The mechanism is checkable with one question: is the product worse than the incumbent's on the attributes the incumbent's customers buy on. Where the answer is no, the company is in a straight fight with a larger competitor, which is a different risk profile and warrants a different price.",
  models: ["base-rates", "narrative-fallacy", "survivorship", "halo-effect"],
  connections: [
    { to: "tid-sustaining-and-disruptive", type: "contrasts" },
    { to: "tid-performance-oversupply", type: "contrasts" },
    { to: "halo-single-explanations", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "reinforces" },
    { to: "fbr-survivorship-in-data", type: "related" }
  ],
  quote: null
}

);
