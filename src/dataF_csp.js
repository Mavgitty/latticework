/* The Cold Start Problem — Andrew Chen — 10 ideas */
window.DB.ideas.push(

{
  id: "csp-cold-start-problem", num: 1, book_id: "csp", category: "strategy",
  title: "The Cold Start Problem",
  thesis: "A network product is useless while empty, so the first users have no reason to arrive.",
  reading_time: 3,
  explanation: [
    "Chen's starting observation is that a network product delivers nothing on its own. A messaging app with no contacts, a marketplace with no sellers and a workplace tool nobody else has adopted are not unproven propositions. They are genuinely broken at the moment of first use, and the person trying them can see it. This is a different problem from ordinary early-stage uncertainty, where the product works and the question is whether anyone wants it.",
    "The empty state also runs in reverse. Below a threshold, users who arrive and find nothing leave and tell others, so the population can shrink under its own dynamics while acquisition spend continues. Chen calls this the anti-network effect, and it is why launch tactics that work for single-player software actively damage a network product. Attention delivered to something that does not yet function converts curiosity into a settled judgement that it is empty.",
    "The shape of the answer is therefore counter-intuitive. Rather than a larger launch, the fix is a smaller target, chosen so that a functioning network requires a low absolute number of users. The founder's job at this stage is not demand generation but manufacturing the smallest possible working instance of the product, by hand if necessary, and accepting that it will look trivially small from outside."
  ],
  practical: {
    label: "Example: designing the first user's experience",
    lead: "Assume the first user arrives to an empty product, then decide what makes their visit worthwhile anyway.",
    bullets: [
      "What does a new user see when nobody else is here yet?",
      "How few other participants are needed before this is genuinely useful?",
      "Is my spending bringing people to something that currently works?",
      "Which single group could I populate by hand this month?",
      "What proportion of early users left because the product was empty?"
    ]
  },
  application:
    "Marketing spend against an unpopulated network destroys the signal you need most, so treat heavy pre-launch acquisition in a network business as a warning rather than as ambition. The question worth pressing in diligence is how few users constitute a working instance, and whether the team has ever produced one. Founders who answer with total registrations have not understood the problem. Founders who answer with one city or one campus usually have.",
  models: ["atomic-network", "critical-mass", "network-economies", "feedback-loops"],
  connections: [
    { to: "csp-atomic-network", type: "extends" },
    { to: "csp-hard-side", type: "related" },
    { to: "critical-mass", type: "reinforces" },
    { to: "ctc-the-chasm", type: "related" },
    { to: "zto-small-market", type: "related" }
  ],
  quote: null
},

{
  id: "csp-atomic-network", num: 2, book_id: "csp", category: "strategy",
  title: "The Atomic Network",
  thesis: "Find the smallest group for which the product works alone, then build that shape repeatedly.",
  reading_time: 3,
  explanation: [
    "An atomic network is the smallest configuration of users that is stable without the rest of the world. Chen's examples are deliberately specific: one dormitory, one office floor, one city on Friday and Saturday nights, one game server with enough players to fill a match. The unit is not a market or a country. It is the smallest thing that keeps working after the founders stop intervening, which is why the definition has to be tested rather than assumed.",
    "The important consequence is what growth then is. A company does not launch a network once, it builds the same atomic network again in a new place, and each new instance begins cold. Uber entering a new city started from nothing that its existing cities provided. This makes the order of expansion a real decision, since networks that overlap through shared members or geography inherit some density and unrelated ones inherit none.",
    "It also reorganises measurement. Totals average dense networks with dead ones, so a rising national user count is compatible with every individual market decaying. The relevant figures are internal to a single network, meaning how many participants it holds, how often they transact with each other and whether it survives without subsidy. Companies that report only aggregates usually cannot answer those questions about any specific network."
  ],
  practical: {
    label: "Example: specifying the unit",
    lead: "Write down the smallest group where the product works unaided, then test whether one such group survives without you.",
    bullets: [
      "What is the unit here: a city, a campus, a team, a category?",
      "How many participants does one unit need to function unaided?",
      "Does an existing unit still work if we stop subsidising it?",
      "Which units should we build next, given who already overlaps?",
      "Am I reporting totals because the single-unit numbers are weak?"
    ]
  },
  application:
    "Ask for cohort data cut by network rather than by signup month, and for the oldest network's current retention and transaction frequency. A company with one dense, unsubsidised, self-sustaining network and a repeatable method for building the next one is a different investment from a company with the same aggregate users spread thinly. The first has proven the unit and faces an execution problem. The second has not yet started.",
  models: ["atomic-network", "critical-mass", "constraint", "specialisation"],
  connections: [
    { to: "csp-cold-start-problem", type: "extends" },
    { to: "csp-stage-metrics", type: "related" },
    { to: "critical-mass", type: "reinforces" },
    { to: "ctc-beachhead", type: "reinforces" },
    { to: "zto-small-market", type: "related" }
  ],
  quote: null
},

{
  id: "csp-hard-side", num: 3, book_id: "csp", category: "people",
  title: "The Hard Side of the Network",
  thesis: "A small, demanding minority supplies most of the value and will not arrive on the same terms.",
  reading_time: 3,
  explanation: [
    "Every network has a side that does the work: drivers, hosts, sellers, creators, the organiser who books the venue, the colleague who sets up the workspace. It is almost always the smaller side, it usually supplies the majority of the value, and within it a power law applies, so a small fraction of that side accounts for most of the activity. Losing a hundred of them is not equivalent to losing a hundred users on the other side.",
    "They also behave differently, because for them participation is closer to work than to entertainment. They compare earnings across platforms, keep several running at once, respond to money, tools, status and audience, and are largely indifferent to the product polish that matters to the other side. Their complaints are operational and specific. What they need is a dashboard, faster payment, better matching and a support channel that answers, rather than a smoother onboarding flow.",
    "The practical consequence is that the hard side has to be recruited by different methods and often by hand, and that it needs its own product. Companies that treat both sides as one user base and one funnel systematically underinvest here, then read the resulting shortage as weak demand. The failure is visible in the numbers as unmet requests, long wait times or empty categories rather than as low traffic."
  ],
  practical: {
    label: "Example: finding your hard side",
    lead: "Identify which side supplies the value, then build and recruit for it as if it were a separate business.",
    bullets: [
      "Which side of this network is smaller and harder to add?",
      "What share of activity comes from the top ten per cent of that side?",
      "What do these participants earn or gain, compared with their alternatives?",
      "Is my product roadmap serving them or the easy side?",
      "How would I recruit the next fifty of them by hand?"
    ]
  },
  application:
    "In diligence, separate the two sides in every metric and look at concentration and churn on the hard side specifically. A marketplace where the top five per cent of suppliers carry half of volume has a key-person problem dressed as a network, and its acquisition cost for that side is the number that governs scaling. Subsidies here are also the last cost to come out, so model them as structural until the company has shown otherwise.",
  models: ["multi-sided-market", "incentives", "atomic-network", "distribution"],
  connections: [
    { to: "csp-atomic-network", type: "extends" },
    { to: "csp-competing-networks", type: "related" },
    { to: "incentives", type: "reinforces" },
    { to: "s7p-network-economies", type: "related" },
    { to: "ctc-whole-product", type: "related" }
  ],
  quote: null
},

{
  id: "csp-escape-velocity", num: 4, book_id: "csp", category: "strategy",
  title: "Tipping Over and Escape Velocity",
  thesis: "Past a certain density the network begins pulling users in rather than being pushed.",
  reading_time: 3,
  explanation: [
    "A network tips when each additional participant makes the product better for those already there, and does so strongly enough that people arrive without being paid for. The observable signs are specific: acquisition cost falling as density rises, retention curves that flatten instead of decaying, and a growing share of new users who came through existing ones. Chen locates this at the level of a single network, so a company can be tipped in three cities and cold in thirty.",
    "The phase after tipping is where the usual account is wrong. Escape velocity is not a reward that arrives automatically once a threshold is passed, it is a period of deliberate engineering across three separate loops. The acquisition loop turns users into more users, the engagement loop turns activity into habit and retention, and the economic loop turns revenue into the ability to buy more of both. Each requires its own work and each can stall independently.",
    "The difference in perspective matters for planning. From outside, tipping looks like a single moment when a company suddenly starts working. From inside, it is a sequence of local thresholds crossed one at a time while the loops are tuned, and treating it as a moment leads companies to spend as though the pulling has begun before any individual network is dense enough to pull."
  ],
  practical: {
    label: "Example: checking whether a network has tipped",
    lead: "Test one network rather than the whole company, and require evidence that it grows without being paid to.",
    bullets: [
      "Is acquisition cost in this network falling as it gets denser?",
      "What share of new users arrived through existing users?",
      "Do retention curves flatten, or keep decaying past month six?",
      "Which of the three loops is currently the weakest?",
      "Would this network keep growing if we stopped spending on it tomorrow?"
    ]
  },
  application:
    "Ask which specific networks have tipped and on what evidence, then check whether spending patterns match the claim. Companies that scale marketing on the assumption of tipping they have not achieved produce the classic profile of rising growth with worsening unit economics and no improvement in cohort retention. Conversely a single genuinely tipped network with a written method for building the next is the strongest signal available at this stage, and it is checkable.",
  models: ["critical-mass", "feedback-loops", "inflection-point", "network-economies"],
  connections: [
    { to: "csp-atomic-network", type: "extends" },
    { to: "csp-loops-decay", type: "contrasts" },
    { to: "critical-mass", type: "reinforces" },
    { to: "s7p-takeoff", type: "related" },
    { to: "feedback-loops", type: "reinforces" }
  ],
  quote: null
},

{
  id: "csp-the-ceiling", num: 5, book_id: "csp", category: "people",
  title: "The Ceiling",
  thesis: "Growth stalls from the inside through saturation, spam and matching that degrades as the network fills.",
  reading_time: 3,
  explanation: [
    "The ceiling is the collection of forces that slow a network once it is large, and most of them come from within. The addressable population saturates. Spam and low-quality supply arrive because the network is now worth exploiting. Matching gets harder as choices multiply, so search and ranking that worked with a thousand listings return worse results with a million. Users also behave differently once the audience widens, posting less as their colleagues, families and employers all appear in one feed.",
    "What makes this structural rather than operational is that the same mechanism produces both effects. Density creates value and it creates noise, and beyond a point additional participants reduce the average quality of what any individual encounters. Chen's point is that a decaying growth rate at scale is the normal condition of a functioning network rather than evidence of a broken team, which matters because it changes what should be done about it.",
    "The responses all cost something visible in the short term. Removing bad actors reduces users. Curation reduces supply. Splitting a network into smaller contexts reduces measured reach per post. Raising the price of participation reduces volume. Each improves the network and worsens this quarter's headline numbers, which is why these decisions tend to be postponed until the quality problem is severe enough to be undeniable."
  ],
  practical: {
    label: "Example: reading a slowdown honestly",
    lead: "Separate the internal causes of a slowdown from ordinary execution failure before deciding what to change or who to blame.",
    bullets: [
      "What share of the addressable population in this network is already active?",
      "Has match quality or search relevance fallen as volume has risen?",
      "How much of current activity is spam or low-quality supply?",
      "Are engaged users posting or transacting less than they used to?",
      "Which quality fix am I avoiding because it lowers this quarter's numbers?"
    ]
  },
  application:
    "Late-stage network businesses are usually priced on a growth rate that the ceiling makes unsustainable, so underwrite decay explicitly rather than extrapolating. The more useful diligence work is on quality: match rates, complaint volumes, share of activity from suspect accounts and engagement among long-tenured cohorts. A management team that already talks in those terms is ahead of the problem. One that attributes every slowdown to marketing execution is not.",
  models: ["feedback-loops", "constraint", "scale-economies", "second-order"],
  connections: [
    { to: "csp-escape-velocity", type: "contrasts" },
    { to: "csp-stage-metrics", type: "related" },
    { to: "feedback-loops", type: "related" },
    { to: "s7p-scale-economies", type: "contrasts" },
    { to: "second-order-effects", type: "reinforces" }
  ],
  quote: null
},

{
  id: "csp-competing-networks", num: 6, book_id: "csp", category: "strategy",
  title: "Competing Networks and Multi-Tenanting",
  thesis: "Users run rival networks side by side, so apparent lock-in disappears when switching is cheap.",
  reading_time: 3,
  explanation: [
    "Multi-tenanting is the habit of using several competing networks at once, and the hard side does it first and most, because for them it is a straightforward calculation about earnings and utilisation. A driver runs two apps, a seller lists on three marketplaces, a creator posts everywhere. Where that is easy, share is contestable years after a leader appears, and the leader's size is not the barrier its market share suggests.",
    "Challengers exploit the fact that network effects are local. A national leader can be dense in aggregate and thin in a particular city, category or age group, and a focused entrant can build a denser atomic network inside that pocket than the incumbent has. The attack is then funded on the hard side, since paying suppliers to switch buys the scarce input, and the buyers follow the supply rather than the brand.",
    "What actually holds users is often not the network at all. Stored data, embedded workflow, identity and reputation that cannot be exported, contracts, integrations and habit are the mechanisms that make leaving costly, and they are ordinary switching costs. Distinguishing them from network effects matters, because they can be built deliberately whereas density cannot be bought once a rival is dense in the same pocket."
  ],
  practical: {
    label: "Example: testing lock-in",
    lead: "Ask what it would actually cost a participant to move, separating the network from everything else holding them.",
    bullets: [
      "How many rival networks does a typical hard-side participant already use?",
      "What would they lose by leaving that they could not rebuild in a week?",
      "Where is our density weakest relative to a focused entrant?",
      "Could a competitor buy our supply side, and at what price?",
      "Which of our switching costs exist independently of the network?"
    ]
  },
  application:
    "Treat multi-tenanting rates on the hard side as the central defensibility question in any marketplace, and ask for them directly rather than accepting market share as a proxy. Also test the pockets: a company whose national position is strong while its top three cities are being taken by a focused rival is losing in the only geography that compounds. Cheap switching means today's leadership tells you comparatively little about tomorrow's margin.",
  models: ["switching-costs", "multi-sided-market", "network-economies", "five-forces"],
  connections: [
    { to: "csp-hard-side", type: "extends" },
    { to: "csp-effects-versus-scale", type: "related" },
    { to: "s7p-switching-costs", type: "related" },
    { to: "tic-why-they-stay", type: "related" },
    { to: "zto-monopoly", type: "contrasts" }
  ],
  quote: null
},

{
  id: "csp-effects-versus-scale", num: 7, book_id: "csp", category: "strategy",
  title: "Network Effects, Scale and Mere Size",
  thesis: "Getting better with users, cheaper with volume and simply being large are three different things.",
  reading_time: 2,
  explanation: [
    "The test for a network effect is narrow. Does an additional participant make the product more valuable to the participants already there? If the answer is yes, the effect is real. If costs merely fall as volume rises, that is a scale economy, which is a genuine advantage with different properties. If neither holds and the company is simply big, there is no structural advantage at all, only a larger version of whatever it was before.",
    "The three are conflated constantly, and the conflation has a direction. Any company above a certain size can point at a cost curve and describe it as a moat, and the phrase network effects supports a multiple that scale economies do not, because it implies an advantage that strengthens on its own and cannot be bought. That makes it the most attractive available description of an ordinary position, and it is rarely challenged in the room where it is used.",
    "The diagnostic is local rather than aggregate. Compare retention, engagement and unit economics against density within individual markets. Where quality genuinely rises with density, the effect exists and can be measured. Where the curves are flat across markets of very different sizes, the company has scale, size or brand, all of which are worth having and none of which behave the way network effects are assumed to."
  ],
  practical: {
    label: "Example: applying the test",
    lead: "Ask what an extra user does for existing users, then look for the answer in market-level data.",
    bullets: [
      "Does one more participant improve the product for those already here?",
      "Or do costs simply fall as volume rises, which is a scale economy?",
      "Do retention and engagement improve with local density, market by market?",
      "Would a rival with a tenth of our users be worse for its own members?",
      "Are we describing size as a moat because the word is available?"
    ]
  },
  application:
    "Make the company state the mechanism, then check it in market-level cohorts rather than in the aggregate. This one test separates businesses that compound from businesses that only got large, and the distinction should drive the terminal assumptions rather than being noted and set aside. Scale economies deserve credit on cost, not on defensibility. Mere size deserves neither, however impressive the total user figure at the front of the deck.",
  models: ["network-economies", "scale-economies", "durability", "monopoly"],
  connections: [
    { to: "csp-honest-limits", type: "extends" },
    { to: "csp-competing-networks", type: "related" },
    { to: "s7p-network-economies", type: "reinforces" },
    { to: "s7p-scale-economies", type: "related" },
    { to: "halo-single-explanations", type: "related" }
  ],
  quote: null
},

{
  id: "csp-loops-decay", num: 8, book_id: "csp", category: "strategy",
  title: "Growth Loops Decay",
  thesis: "Every acquisition loop wears out, so growth comes from building new loops rather than spending more.",
  reading_time: 3,
  explanation: [
    "Growth in a network product runs through loops rather than campaigns. An invitation loop turns each new user into several more. A content loop turns user activity into pages that attract strangers. A paid loop turns revenue into acquisition at a payback period that funds itself. Each has a rate, each can be measured, and each is a mechanism with a lifespan rather than a channel to be topped up when the numbers soften.",
    "They decay for reasons outside the company's control. The most responsive audience is consumed first, so later cohorts convert worse. Channels saturate as competitors arrive and prices rise. Platforms change their rules, close their contact lists or downrank the content. Novelty wears off, and an invitation that felt interesting in year one is ignored in year three. The rate falls even when the team executes the same tactics correctly.",
    "The common misdiagnosis is to read a falling loop as an execution failure and answer with more budget, which speeds the decay by buying progressively worse audiences at rising prices. Chen's prescription is to expect a new loop every year or two and to treat loop-building as a permanent function. Companies that compound tend to be running a portfolio of loops at different ages rather than one loop very hard."
  ],
  practical: {
    label: "Example: auditing your loops",
    lead: "List the loops running today, date each one, and check whether anything is being built to replace them.",
    bullets: [
      "What are my loops, and what is the current rate of each?",
      "How has each rate moved over the last four quarters?",
      "Which loop depends on a platform that could change its rules?",
      "Am I adding budget to a loop whose rate is falling?",
      "What new loop is being built now, and when will it matter?"
    ]
  },
  application:
    "Ask for growth decomposed by loop with rates over time, not blended acquisition cost, which averages a decaying loop with a new one and hides both. A single dominant loop reliant on one platform is a concentration risk worth pricing, and a company whose blended cost is stable only because paid spend is replacing a fading viral loop is more expensive to grow than it appears. Loop-building capability is the durable asset here.",
  models: ["feedback-loops", "regression", "distribution", "adoption-lifecycle"],
  connections: [
    { to: "csp-escape-velocity", type: "extends" },
    { to: "csp-stage-metrics", type: "related" },
    { to: "feedback-loops", type: "reinforces" },
    { to: "zto-distribution", type: "related" },
    { to: "regression-to-the-mean", type: "related" }
  ],
  quote: null
},

{
  id: "csp-stage-metrics", num: 9, book_id: "csp", category: "strategy",
  title: "Different Metrics at Each Stage",
  thesis: "The number that matters changes by stage, and the wrong one hides the binding constraint.",
  reading_time: 2,
  explanation: [
    "Each phase has its own measure. In the cold start it is whether one atomic network functions, expressed as participants per network and transactions between them. At tipping it is unsubsidised retention, the organic share of new users and payback period within a single market. In the escape velocity phase it is loop-level growth rates. At the ceiling it is quality, meaning match rates, complaint volumes and the share of activity that is spam.",
    "Aggregates fail at every stage for the same reason. A total sums a handful of dense networks with a long tail of dead ones, so a rising national figure is fully compatible with decay in every individual market. Blended acquisition cost hides which loop is working. Company-wide retention hides the difference between the cities where the product works and the cities where it was launched and abandoned.",
    "Chen's more useful point is that metric selection is itself a claim about which stage the company is in. Reporting registered users asserts that populating the network is the problem. Reporting loop rates asserts that the networks already work. Arguments about which number matters are usually arguments about the stage, and settling the stage first makes the choice of measure almost automatic."
  ],
  practical: {
    label: "Example: choosing the right measure",
    lead: "Decide which stage this network is actually in, then report the two numbers that stage makes decisive.",
    bullets: [
      "Which stage is this specific network in, on the evidence?",
      "What is the one measure that would tell me the stage is finished?",
      "Which of my current metrics is an aggregate hiding a distribution?",
      "Are we reporting a number because it is favourable or because it is decisive?",
      "What would the same figures look like cut by individual network?"
    ]
  },
  application:
    "Set the reporting pack by stage and require network-level cuts from the first cheque, because a company that has never produced them will need a quarter to build the instrumentation and will resist doing so later. Where a board pack has drifted towards totals and blended figures, ask what the network-level numbers were when they were last examined. The answer is often the fastest route to the real state of the business.",
  models: ["atomic-network", "base-rates", "constraint", "decision-quality"],
  connections: [
    { to: "csp-atomic-network", type: "extends" },
    { to: "csp-the-ceiling", type: "related" },
    { to: "fsh-metric-games", type: "contrasts" },
    { to: "tic-written-checklist", type: "related" },
    { to: "ctc-adoption-lifecycle", type: "related" }
  ],
  quote: null
},

{
  id: "csp-honest-limits", num: 10, book_id: "csp", category: "strategy",
  title: "Which Businesses Really Have Them",
  thesis: "Most products claiming network effects have brand, scale or nothing much at all.",
  reading_time: 3,
  explanation: [
    "The claim is nearly free to make and expensive to check, which is why it appears in almost every deck. The recurring false cases are recognisable. Data network effects where more usage improves a model in ways no individual user notices. Marketplaces where buyers and sellers never benefit from each other's presence beyond simple inventory. Collaboration software where value stops at the boundary of one paying account, so a thousand customers are a thousand separate products.",
    "Chen is unusually direct about the limits of the real thing. Network effects are local, so they defend a city or a category rather than a market. They are asymmetric, so the value sits on the hard side and can be bought away. They coexist with multi-tenanting, so they slow a challenger without stopping one. And they weaken as the ceiling arrives, since the quality problems of scale are produced by the same density that generates the advantage.",
    "The honest position is that a network effect is one power among several and rarely the strongest. Switching costs, brand, cost advantage and possession of a scarce input are all more durable in many cases, and are easier to verify. Treating network effects as the automatic explanation for an incumbent's position also produces bad competitive analysis, because it suggests the position cannot be attacked when the usual case is that it can."
  ],
  practical: {
    label: "Example: stress-testing the claim",
    lead: "Take the stated network effect and try to identify which participant is better off because of which other participant.",
    bullets: [
      "Who specifically benefits from an additional user, and how would they notice?",
      "Does the benefit cross account or market boundaries, or stop at them?",
      "What happens if a rival concentrates on one city or category?",
      "Is the real defence actually switching costs, brand or a scarce input?",
      "Has anyone tested this claim against market-level data?"
    ]
  },
  application:
    "Network effects justify terminal assumptions that other advantages do not, which makes this the highest-value claim to test and the one most often waved through. Require the mechanism, the market-level evidence and the hard-side multi-tenanting rate. Where those are absent, underwrite the company as whatever it actually is, and note that competitors sold on the same untested claim may be more attackable than their share of the market suggests.",
  models: ["network-economies", "scale-economies", "narrative-fallacy", "durability"],
  connections: [
    { to: "csp-effects-versus-scale", type: "extends" },
    { to: "csp-competing-networks", type: "reinforces" },
    { to: "s7p-power", type: "related" },
    { to: "halo-single-explanations", type: "reinforces" },
    { to: "tbs-narrative-fallacy", type: "related" }
  ],
  quote: null
}

);
