/* Platform Revolution — Geoffrey Parker, Marshall Van Alstyne and Sangeet Paul Choudary — 9 ideas */
window.DB.ideas.push(

{
  id: "pr-pipeline-to-platform", num: 1, book_id: "pr", category: "strategy",
  title: "Pipeline to Platform",
  thesis: "A pipeline creates value in sequence. A platform enables other people to create it.",
  reading_time: 3,
  explanation: [
    "A pipeline creates value in a straight line. The firm buys inputs, adds something at each stage, and sells the output to a customer at the end. Control runs through ownership of the steps, and the assets that produce the value sit on the firm's own balance sheet. Almost every management technique in general use was built for this shape, including how costs are allocated and how advantage is described.",
    "A platform does not make the thing. It supplies the infrastructure and the rules that let other parties transact, and the productive assets belong to those parties. Supply expands without the firm buying it, which is why growth can be fast and capital-light, but the firm's own costs move to functions a pipeline barely has: matching, trust, dispute resolution and rule-setting.",
    "The consequence is that the accounts stop describing the business. Gross margin behaves like a toll rather than a mark-up, the operating leverage sits in the matching layer, and the risks that matter are participant behaviour rather than inventory or utilisation. Firms that adopt the language of platforms while still owning the supply get neither set of economics."
  ],
  practical: {
    label: "Example: locating the value",
    lead: "Trace who owns the productive asset, who bears the cost of adding supply, and who sets the terms.",
    bullets: [
      "Does the company own the inventory it sells, or match someone else's?",
      "When demand doubles, who pays to expand supply, the firm or its participants?",
      "Which functions absorb the firm's spending: production, or matching and trust?",
      "Would removing one side of the market end the business, or only shrink it?",
      "Is the platform language describing the model, or decorating a pipeline?"
    ]
  },
  application:
    "Test the claim rather than the label. A marketplace that takes inventory risk, sets its own prices and holds working capital is a retailer with a website, and it should be underwritten on retail multiples and retail failure modes. The questions that separate the two are visible in the cash conversion cycle and in where headcount sits. For a genuine platform the binding growth limit is participant acquisition on the scarce side, which is a different diligence exercise entirely.",
  models: ["multi-sided-market", "network-economies", "scale-economies", "value-chain"],
  connections: [
    { to: "pr-core-interaction", type: "extends" },
    { to: "pr-platform-metrics", type: "related" },
    { to: "s7p-network-economies", type: "reinforces" },
    { to: "pcs-industry-structure", type: "related" },
    { to: "zto-monopoly", type: "related" }
  ],
  quote: null
},

{
  id: "pr-core-interaction", num: 2, book_id: "pr", category: "strategy",
  title: "The Core Interaction",
  thesis: "Design the single exchange the platform exists to enable before designing anything else.",
  reading_time: 3,
  explanation: [
    "The core interaction has three parts: the participants on each side, the unit of value that passes between them, and the filter that decides which unit reaches which participant. A listing shown to the wrong buyer, a driver offered the wrong ride, a video served to the wrong viewer are all the same failure, and it is a failure of the filter rather than of supply.",
    "Naming the interaction precisely settles what the platform has to be good at. It determines which side must be attracted first, what information has to be captured to judge quality, and which part of the experience cannot be allowed to degrade. Vague versions of the same statement produce roadmaps where everything is equally important, which in practice means nothing is prioritised at all.",
    "Feature accretion is the standard failure. Tools get added for whichever side is complaining loudest while the exchange itself stays awkward, and each addition gives the filter more to sort through rather than less. The loudest side is also rarely the scarce one. Work that does not improve the core interaction does not improve the platform, however much it improves the product surface."
  ],
  practical: {
    label: "Example: naming the exchange",
    lead: "Write the interaction as one sentence with a producer, a consumer, a value unit and a filter.",
    bullets: [
      "Who produces the value unit here, and who consumes it?",
      "What exactly is the unit: a listing, a ride, a post, a payment?",
      "What information does the filter use, and where does it come from?",
      "Which recent releases made this specific exchange better rather than wider?",
      "If the filter were removed, would either side still find the other?"
    ]
  },
  application:
    "Ask a founder to state the core interaction and note how long the answer takes. Teams that have it produce one sentence and can name the filter's inputs. Teams that do not describe a feature list, and their metrics tend to be registrations and sessions because no interaction has been defined to count. The clarity of that answer predicts whether the next funding round buys distribution or buys more surface area.",
  models: ["multi-sided-market", "distribution", "atomic-network", "constraint"],
  connections: [
    { to: "pr-pipeline-to-platform", type: "extends" },
    { to: "pr-governance", type: "reinforces" },
    { to: "pr-platform-metrics", type: "related" },
    { to: "tic-how-it-makes-money", type: "related" },
    { to: "zto-distribution", type: "related" }
  ],
  quote: null
},

{
  id: "pr-network-effects", num: 3, book_id: "pr", category: "strategy",
  title: "Network Effects and Their Negatives",
  thesis: "Same-side and cross-side effects can both run negative, so more users sometimes means a worse product.",
  reading_time: 3,
  explanation: [
    "There are four effects rather than one. Cross-side effects run between the two groups and are usually the engine: more buyers make the platform worth more to sellers, and the reverse. Same-side effects run within a group and are frequently negative, because additional sellers compete for the same demand and additional buyers queue for the same scarce supply.",
    "The negative half receives far less attention than it deserves. Congestion, spam, low-quality supply and a crowded matching pool are all produced by growth itself, which means they arrive precisely when the headline numbers look strongest. A platform can be adding participants and losing value per participant at the same time. The two movements are not contradictory, and only one of them tends to appear in a board pack.",
    "What matters is therefore the net effect, measured by side. The useful question is whether the marginal participant improves or degrades the experience of those already present, and the answer often differs for the two groups. Where it is negative, growth has to be shaped rather than pursued. Shaping means selecting who joins, matching within segments, or capping supply in an oversubscribed pocket, all of which cost growth in the short run."
  ],
  practical: {
    label: "Example: signing each effect",
    lead: "Take each of the four effects in turn and decide whether it currently runs positive or negative.",
    bullets: [
      "Does an extra seller help or hurt the sellers already here?",
      "Does an extra buyer improve or worsen the experience for existing buyers?",
      "Which side is currently gaining from the other side's growth?",
      "What congestion or quality measure would show a negative effect first?",
      "Is growth being pursued in a category where the marginal participant subtracts value?"
    ]
  },
  application:
    "Marketplaces that report strong supply growth alongside falling seller retention are usually running a negative same-side effect, and the pattern is visible in listings per transaction and in time to first sale. Ask for those two series by cohort before accepting a network effects story. Where the negative effect is structural rather than temporary, the eventual answer involves curation or segmentation, both of which slow the growth rate the valuation was built on.",
  models: ["network-economies", "feedback-loops", "second-order", "critical-mass"],
  connections: [
    { to: "pr-governance", type: "reinforces" },
    { to: "pr-chicken-and-egg", type: "related" },
    { to: "s7p-network-economies", type: "extends" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "critical-mass", type: "related" }
  ],
  quote: null
},

{
  id: "pr-chicken-and-egg", num: 4, book_id: "pr", category: "strategy",
  title: "Chicken and Egg",
  thesis: "Neither side joins without the other, so launching means manufacturing one side yourself.",
  reading_time: 3,
  explanation: [
    "The launch problem is structural rather than a matter of insufficient marketing. Each side's reason to arrive is the presence of the other, so at the start there is nothing to offer either group. Demand-side spending on an empty platform buys visitors who leave, and it buys them repeatedly. Worse, those visitors form a view of the product at its emptiest, which makes the second attempt to acquire them dearer than the first.",
    "Four routes get past it. Seed one side with supply you own or produce, so the platform is useful on arrival. Recruit a marquee participant whose presence is itself the reason others come. Build a single-user tool that is worth using with nobody else on it, then convert the accumulated users into a network. Or piggyback on an existing network and extract participants from it.",
    "Which route works depends on which side is genuinely scarce and whether either group's value survives in isolation. Seeding the abundant side produces activity without transactions, and a marquee participant who can also negotiate terms tends to keep the economics that the strategy was meant to create. The single-user tool route is the slowest and the most durable, because those users arrive for a reason that does not depend on anyone else showing up."
  ],
  practical: {
    label: "Example: choosing the launch route",
    lead: "Establish which side is scarce, then pick the route that manufactures that side rather than the easy one.",
    bullets: [
      "Which side is harder to attract, and what evidence says so?",
      "Can we supply that side ourselves at a cost we can sustain?",
      "Is there a participant whose arrival would bring the rest?",
      "Does our product do anything useful for a single user alone?",
      "Are we adding the abundant side because it is cheaper to add?"
    ]
  },
  application:
    "Early network businesses should be judged on one dense pocket rather than on aggregate totals. A thousand users spread across forty cities is pre-launch, while two hundred in one suburb transacting weekly is a working network that can be copied outward. Ask which specific segment reached self-sufficiency, how long it took, and what it cost, because that unit cost and that timeline are the only reliable inputs to a forecast of the next fifty.",
  models: ["critical-mass", "atomic-network", "multi-sided-market", "incentives"],
  connections: [
    { to: "pr-pricing-the-sides", type: "extends" },
    { to: "pr-network-effects", type: "related" },
    { to: "critical-mass", type: "extends" },
    { to: "s7p-takeoff", type: "related" },
    { to: "zto-small-market", type: "related" }
  ],
  quote: null
},

{
  id: "pr-pricing-the-sides", num: 5, book_id: "pr", category: "investing",
  title: "Which Side Pays",
  thesis: "Charge the side that is easy to attract and subsidise the side that is not.",
  reading_time: 2,
  explanation: [
    "Platform pricing is an allocation across sides rather than a level. One group's participation is the product being sold to the other group, so the question is which group is the asset and which is the customer. That determination is empirical, and it can differ by segment and change as the platform matures. Setting a single price for access and applying it to everyone skips the decision entirely.",
    "The side that is scarce, price sensitive or expensive to acquire gets subsidised, and the side that needs access to it pays. Multi-homing also matters: a group that can costlessly use three competing platforms has little to sell, while a group that commits exclusively is worth paying for. None of these properties is fixed, so the side subsidised at launch is not always the side subsidised at scale.",
    "The trap is a subsidy that buys participants the other side will not pay for. A free tier full of people who never transact is an acquisition cost with no revenue attached to it, and it looks identical to a working subsidy in a user-count chart. The subsidy has to be recoverable from the interactions it produces."
  ],
  practical: {
    label: "Example: setting the split",
    lead: "Identify which side is scarce, then check that the subsidy on it is recovered from the other side.",
    bullets: [
      "Which side would we struggle most to replace if it left tomorrow?",
      "What does it cost to acquire a participant on each side?",
      "Do the subsidised participants go on to transact, or only register?",
      "Can either side use competitors simultaneously at no cost?",
      "Is the free side becoming more valuable to the paying side over time?"
    ]
  },
  application:
    "Underwrite the subsidised side as an asset with a payback period. The calculation is the cost of acquiring one scarce-side participant against the incremental take rate the paying side generates because that participant exists. Companies rarely present it this way, so it usually has to be rebuilt from cohort data. Where the payback is long and the scarce side multi-homes freely, the subsidy is closer to a permanent operating cost than an investment.",
  models: ["multi-sided-market", "incentives", "network-economies", "opportunity-cost"],
  connections: [
    { to: "pr-chicken-and-egg", type: "extends" },
    { to: "pr-platform-metrics", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "csup-margins", type: "related" },
    { to: "pcs-buyer-power", type: "related" }
  ],
  quote: null
},

{
  id: "pr-governance", num: 6, book_id: "pr", category: "strategy",
  title: "Governance Is the Product",
  thesis: "What a platform admits, rejects and adjudicates decides whether its interactions are worth having.",
  reading_time: 3,
  explanation: [
    "Governance covers who may join, what may be offered, how quality is verified, how disputes are settled and what each side is told about the other. On a platform these are not administrative functions sitting behind the product. They are the mechanism that makes a match trustworthy, and a match nobody trusts is not worth making.",
    "Curation has a real cost. Every rule removes supply, slows onboarding and irritates the participants it excludes, and the growth numbers register that immediately. What the growth numbers do not register is that unfiltered supply degrades the match for everyone and eventually drives out whichever side had the option to leave. The cost of curating is visible and immediate, and the cost of not curating is delayed and diffuse.",
    "Governance is also where the platform's power becomes visible. Rules are set unilaterally and can be changed to move value from participants to the owner, which is a standing temptation with a delayed cost. Participants who have invested in a platform read each rule change as evidence about the next one. That reading is why a platform's credibility is an asset built slowly and spent quickly."
  ],
  practical: {
    label: "Example: auditing the rules",
    lead: "Read the platform's published rules as its real product specification, then check who each rule actually protects and at whose expense.",
    bullets: [
      "What is verified before a participant may transact, and by whom?",
      "How are disputes resolved, and which side wins by default?",
      "Which rule exists to protect quality, and which to protect the take rate?",
      "What information does each side get about the other before committing?",
      "How much of the growth rate depends on not enforcing existing rules?"
    ]
  },
  application:
    "Trust and safety spending reads as overhead in a plan and functions as product investment. The diligence version is to look at the dispute rate, the fraud loss rate and the enforcement backlog, and to ask what the growth rate would be with the rules actually applied. Platforms that have deferred this work carry a liability that surfaces as a step down in growth at the moment they finally enforce, usually under external pressure.",
  models: ["incentives", "multi-sided-market", "process-power", "second-order"],
  connections: [
    { to: "pr-network-effects", type: "reinforces" },
    { to: "pr-openness", type: "contrasts" },
    { to: "incentives", type: "reinforces" },
    { to: "s7p-process-power", type: "related" },
    { to: "tic-why-they-stay", type: "related" }
  ],
  quote: null
},

{
  id: "pr-openness", num: 7, book_id: "pr", category: "strategy",
  title: "Openness as a Trade-off",
  thesis: "Openness is a dial with costs at both ends, not a virtue to be maximised.",
  reading_time: 2,
  explanation: [
    "Openness operates on three separate dimensions: who may participate, who may build extensions on top, and who controls the standard and the economics attached to it. A platform can be wide open on one and tightly closed on another, and treating openness as a single setting hides the actual decision. Most arguments about whether a platform is open enough are really arguments about which of the three dimensions the speaker has in mind.",
    "Each end of the dial has a real cost. Opening brings supply, third-party investment and faster growth, at the price of quality control and of value captured by others. Closing protects coherence and capture, at the price of growth and of the extensions someone else would have built. The correct setting also moves over the life of the platform, usually towards openness early and control later.",
    "The asymmetry is that opening is cheap and closing is expensive. Third parties build businesses on the terms they were given, so any tightening destroys value they can measure and converts them into public opponents. That is why the sequence of decisions matters more than any single one of them. Opening early and closing later is the pattern most successful platforms follow, and it is also the one that generates the loudest complaints."
  ],
  practical: {
    label: "Example: setting the dial",
    lead: "Separate participation, extension and control of the standard, then decide each one on its own terms and its own timing.",
    bullets: [
      "Who can join without approval, and what does approval actually screen for?",
      "What can third parties build, and what is reserved for us?",
      "Who captures the value created by an extension, and on what terms?",
      "Which of these decisions would be expensive to reverse later?",
      "Are we opening to grow, or because openness sounds virtuous?"
    ]
  },
  application:
    "Ecosystem depth is an asset and a hostage at the same time. Third-party developers raise engagement and switching costs, and they also constrain the platform's freedom to reprice, because the retaliation is loud and the participants have alternatives. When a company plans to raise its take rate or absorb a popular extension into the core product, treat the ecosystem's size as a measure of the resistance rather than only of the moat.",
  models: ["multi-sided-market", "network-economies", "opportunity-cost", "barriers-to-entry"],
  connections: [
    { to: "pr-governance", type: "contrasts" },
    { to: "pr-disintermediation", type: "related" },
    { to: "s7p-switching-costs", type: "related" },
    { to: "zto-monopoly", type: "contrasts" },
    { to: "pcs-entry-barriers", type: "related" }
  ],
  quote: null
},

{
  id: "pr-disintermediation", num: 8, book_id: "pr", category: "strategy",
  title: "Disintermediation",
  thesis: "Once matched, participants take the relationship off the platform and the fee with it.",
  reading_time: 3,
  explanation: [
    "The mechanism is simple arithmetic. In a repeating relationship the platform delivered most of its value at the first match, while the fee continues on every transaction afterwards. Both parties can see that gap, and in categories where the relationship repeats often, both parties have an incentive to act on it together. That is why leakage tends to appear suddenly within a cohort rather than gradually across the whole base.",
    "What resists it is bundling functions into the transaction that only work on the platform. Payments, escrow, insurance, guarantees, scheduling, dispute resolution and portable reputation each make leaving cost something specific. Pricing helps too: a fee low enough that avoiding it is not worth the inconvenience does more than a rule forbidding contact. Each of these is a product decision, which means the defence has to be built before the leakage starts rather than announced afterwards.",
    "Leakage is mostly a property of the category rather than of the company. High-frequency, low-risk, undifferentiated services leak badly, because the second transaction needs nothing the platform provides. Infrequent, high-stakes or reputation-dependent transactions do not, because the guarantees are the reason the deal happens at all. The take rate a comparable platform sustains in a different category therefore says very little about the one in front of you."
  ],
  practical: {
    label: "Example: testing for leakage",
    lead: "Work out what the platform still supplies on the second transaction between the same two parties.",
    bullets: [
      "How often does the same pair transact, and how many of those are on-platform?",
      "What does the platform provide on transaction two that neither party can arrange alone?",
      "Is the fee small enough that avoiding it is not worth the effort?",
      "Do reviews, guarantees or payment terms travel with the participant if they leave?",
      "Is leakage a category property here, or a fixable product gap?"
    ]
  },
  application:
    "Take rate durability deserves as much diligence as growth, because a platform whose users transact twice and then leave has bought revenue rather than built an annuity. The evidence is in repeat transactions per matched pair and in the trend of platform-mediated share within a cohort. A declining share alongside rising total volume is the signature of a business acquiring new matches faster than it is losing old ones, which is expensive and finite.",
  models: ["switching-costs", "incentives", "multi-sided-market", "network-economies"],
  connections: [
    { to: "pr-openness", type: "related" },
    { to: "pr-platform-metrics", type: "reinforces" },
    { to: "s7p-switching-costs", type: "extends" },
    { to: "tic-why-they-stay", type: "reinforces" },
    { to: "pcs-buyer-power", type: "related" }
  ],
  quote: null
},

{
  id: "pr-platform-metrics", num: 9, book_id: "pr", category: "investing",
  title: "What to Measure",
  thesis: "Count completed interactions and the quality of the match, not the number of registered users.",
  reading_time: 3,
  explanation: [
    "A pipeline is measured on units produced and sold, and a platform has no equivalent because it produces interactions. The primary series are liquidity, meaning the share of listed supply that transacts within a defined window, match quality, and repeat rate by cohort. User counts sit behind all three and describe the past rather than the present.",
    "Every measure needs a side attached to it. Aggregate growth routinely conceals one group deteriorating while the other expands, and the deteriorating group is usually the scarce one that took the longest to acquire. A single blended retention figure on a two-sided business is close to uninformative. Splitting every series by side is a reporting discipline rather than an analytical one, and it gets resisted because it makes one of the two numbers look poor.",
    "The early indicators of trouble are the ones that measure friction rather than volume. Time to match, rejection and cancellation rates, complaint volumes and listings required per completed transaction all move before the growth numbers do, which makes them the ones worth building a dashboard around. They are also the measures a team can act on, because each points at a specific part of the matching process rather than at the business as a whole."
  ],
  practical: {
    label: "Example: building the dashboard",
    lead: "Replace the user count with liquidity, match quality and repeat rate, each reported separately by side.",
    bullets: [
      "What share of listed supply transacts within a defined window?",
      "How long does a typical match take, and is that time rising?",
      "What is repeat rate by cohort, reported for each side separately?",
      "How many listings or searches are needed per completed transaction?",
      "Which friction measure would deteriorate first if quality were slipping?"
    ]
  },
  application:
    "Ask for liquidity and repeat rate by side before asking for growth, and expect the request to be difficult to satisfy. Companies that cannot produce those series generally have not been managed against them, which is itself a finding. Where they exist, they resolve most valuation arguments quickly: a platform with high liquidity and rising repeat rates supports a multiple that one with the same revenue growth and thinning liquidity does not.",
  models: ["multi-sided-market", "network-economies", "critical-mass", "feedback-loops"],
  connections: [
    { to: "pr-core-interaction", type: "reinforces" },
    { to: "pr-network-effects", type: "extends" },
    { to: "ouww-numbers-that-matter", type: "reinforces" },
    { to: "s7p-takeoff", type: "related" },
    { to: "tic-how-it-makes-money", type: "related" }
  ],
  quote: null
}

);
