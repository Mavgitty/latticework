/* The Goal — Eliyahu M. Goldratt — 8 ideas */
window.DB.ideas.push(

{
  id: "goal-one-goal", num: 1, book_id: "goal", category: "strategy",
  title: "One Goal, Stated Measurably",
  thesis: "Name the single measurable purpose of the enterprise, then judge every local objective against it.",
  reading_time: 2,
  explanation: [
    "Goldratt starts by refusing to let the goal remain vague. A manufacturer exists to make money, and until that is stated in a form that can be measured, the word improvement has no content. Any change can be called an improvement by choosing a measure that flatters it, which is how a plant full of successful departments arrives at a closure notice.",
    "Once the goal is fixed, productivity acquires a definition: an action is productive if it moves the organisation towards the goal. Efficiency is no longer sufficient justification, because an efficient action that does not move the measure is simply a well-executed waste of money. The definition, rather than any technique, does the discriminating work, and everything else in the book follows from having taken it seriously.",
    "The awkward part is what this disqualifies. Utilisation, cost per unit, headcount ratios, on-time percentages and departmental budgets were all adopted because they can be measured locally and assigned to someone. Each is defensible in isolation, none of them is the goal, and a manager rewarded on any of them will eventually be paid for damaging the system."
  ],
  practical: {
    label: "Example: testing a local target",
    lead: "Take each measure a team is judged on and trace how it connects to the money the business makes.",
    bullets: [
      "What is the goal here, stated in one sentence and one measure?",
      "Which of our current targets could improve while the business gets worse?",
      "Who is rewarded on a local measure that conflicts with the goal?",
      "For this proposed change, which direction does the goal measure move?",
      "Are we calling something productive because it was executed well?"
    ]
  },
  application:
    "Portfolio companies almost always report a dashboard of local measures, and the useful exercise is asking which of them could all improve in a quarter where the business deteriorated. Usually several could. For a fund the same test applies internally: deals screened, meetings taken and memos written are local measures, and none of them is the goal. Reported fund returns are the goal, and they respond to a much shorter list of activities.",
  models: ["constraint", "incentives", "opportunity-cost", "return-on-capital"],
  connections: [
    { to: "goal-three-measures", type: "extends" },
    { to: "goal-local-efficiency", type: "reinforces" },
    { to: "mck-value-driver-principle", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tos-capital-allocation", type: "related" }
  ],
  quote: null
},

{
  id: "goal-three-measures", num: 2, book_id: "goal", category: "strategy",
  title: "Throughput, Inventory, Operating Expense",
  thesis: "Three measures describe the system: money coming in, money stuck inside, money spent moving it.",
  reading_time: 3,
  explanation: [
    "Throughput is the rate at which the system generates money through sales, which means goods produced and not sold contribute nothing. Inventory is the money currently tied up in things the system has bought and not yet converted. Operating expense is the money spent turning inventory into throughput. Between them they cover every dollar in the business without needing an allocation rule.",
    "They exist because conventional cost accounting produces the opposite conclusions. Treating inventory as an asset and absorbing labour into unit cost means that building goods nobody ordered improves the reported result, and that running a machine flat out looks like a saving. The three measures make both of those impossible to report as progress, which is their purpose.",
    "The order is load-bearing. Throughput comes first because it has no upper bound, while inventory and operating expense have a floor of zero and cannot be cut past it. A business managed on expense reduction is working on the measure with the smallest available range, which is why cost programmes deliver a step change once and then stop."
  ],
  practical: {
    label: "Example: recasting the numbers",
    lead: "Restate last quarter using the three measures and see which reported gains survive the translation.",
    bullets: [
      "What did throughput do, counting only what was actually sold?",
      "How much money is currently sitting in unsold or unfinished work?",
      "Did any reported gain come from building inventory rather than selling?",
      "Which decisions last quarter improved unit cost and reduced throughput?",
      "Of our three measures, which has the most room left to move?"
    ]
  },
  application:
    "The venture equivalents are close enough to be useful. Throughput is cash collected from customers, inventory is everything paid for and not yet earning, including built and unlaunched product, and operating expense is burn. Companies that report bookings, pipeline and shipped features are reporting inventory as though it were throughput. Applied to a fund's own engine, capital deployed is inventory and realisations are throughput, and the two are routinely confused in reporting.",
  models: ["accounting-quality", "return-on-capital", "free-cash-flow", "incentives"],
  connections: [
    { to: "goal-one-goal", type: "extends" },
    { to: "goal-local-efficiency", type: "reinforces" },
    { to: "mck-reorganised-accounts", type: "reinforces" },
    { to: "tii-earnings-quality", type: "related" },
    { to: "fr-three-statements", type: "related" }
  ],
  quote: null
},

{
  id: "goal-the-constraint", num: 3, book_id: "goal", category: "strategy",
  title: "The Constraint",
  thesis: "Every system has one binding limit, and an hour lost there is an hour lost everywhere.",
  reading_time: 3,
  explanation: [
    "A chain of dependent steps produces at the rate of its slowest step, and no amount of capacity elsewhere changes that number. Capacity is not output. This is arithmetic rather than a management theory, which is why it holds regardless of how the organisation is structured or how motivated the people at the other stations are.",
    "The value of improvement is therefore wildly unequal across the system. An hour saved at a non-constraint changes nothing, because that station was already going to finish waiting. An hour gained at the constraint is worth the entire system's hourly throughput, which in a large plant is a very large number attached to a very small intervention.",
    "Constraints are not always machines. A single approval, one person whose sign-off everything needs, a policy that batches work, or simply insufficient demand can each be the binding limit. Physical bottlenecks are easy to find because inventory piles up in front of them. Policy constraints leave no visible pile and therefore survive for years. Asking what the limit is and being told a department name rather than a step is usually a sign that nobody has looked."
  ],
  practical: {
    label: "Example: finding the bottleneck",
    lead: "Look for where work accumulates and where everything downstream is waiting, then confirm it with rates.",
    bullets: [
      "Where does work in progress pile up, and for how long does it sit?",
      "Which step is never idle, and which is idle waiting on it?",
      "Is the limit a machine, a person, a policy, or the market?",
      "What is the throughput value of one extra hour at that step?",
      "How much of last quarter's improvement effort was spent elsewhere?"
    ]
  },
  application:
    "Applied to a company's growth engine the question becomes which single step limits new revenue: lead volume, qualified meetings, sales capacity, onboarding, or a delivery function that cannot absorb more customers. Most plans propose spending on the step with the clearest attribution rather than the binding one, and marketing spend upstream of a saturated sales team is the common case. In diligence, ask what happens to growth if that one step doubles and nothing else changes.",
  models: ["constraint", "feedback-loops", "opportunity-cost", "second-order"],
  connections: [
    { to: "goal-five-steps", type: "extends" },
    { to: "goal-balance-flow", type: "reinforces" },
    { to: "goal-local-efficiency", type: "contrasts" },
    { to: "feedback-loops", type: "related" },
    { to: "s7p-process-power", type: "related" }
  ],
  quote: null
},

{
  id: "goal-five-steps", num: 4, book_id: "goal", category: "leadership",
  title: "The Five Focusing Steps",
  thesis: "Identify the constraint, exploit it, subordinate everything to it, elevate it, then begin again.",
  reading_time: 3,
  explanation: [
    "The sequence is deliberate. Identify the constraint, then exploit it, meaning extract everything the existing constraint can give before spending anything: stop it idling through shift changes, stop feeding it defective work, stop putting low-value jobs through it. Elevation, meaning buying more capacity, comes fourth because it is the expensive option and most of the available gain sits in the free ones.",
    "Subordination is the step organisations fail at, because it requires every other function to deliberately run below its own capacity to suit the constraint's rhythm. That looks like waste, reads badly against local measures, and has to be defended repeatedly by someone senior enough to overrule the department heads whose numbers it damages. Without that backing, subordination is quietly abandoned within a quarter and the constraint goes back to being starved.",
    "The fifth step exists because success relocates the problem. Elevating one bottleneck promotes a different step to constraint, and the practices built around the old one, its buffers, its scheduling rules, its priority overrides, then become the new limit. Nobody notices, because everything is still working exactly as it was designed to. The fifth step is not a tidy closing of the loop, it is an instruction to go looking again."
  ],
  practical: {
    label: "Example: running the sequence",
    lead: "Before approving any spending to enlarge the constraint, work through every improvement at that step which costs nothing at all.",
    bullets: [
      "Is the constraint ever idle, and for what reasons?",
      "How much of its time goes to rework or to low-value work?",
      "Which functions need to slow down to suit its pace?",
      "Who has the authority to enforce that, and are they doing it?",
      "Since our last improvement, where has the constraint moved to?"
    ]
  },
  application:
    "Growth work follows the same order and rarely gets it. Before funding more demand generation, exhaust the free gains at the binding step: remove rework in the sales process, stop putting unqualified opportunities through scarce senior time, fix the handover that makes onboarding stall. Then expect the constraint to move, which means the plan that justified the round has a shelf life and the metric worth watching changes with it.",
  models: ["constraint", "inversion", "feedback-loops", "checklist"],
  connections: [
    { to: "goal-the-constraint", type: "extends" },
    { to: "goal-balance-flow", type: "related" },
    { to: "learning-from-mistakes", type: "related" },
    { to: "cinc-postmortems", type: "related" },
    { to: "tfs-simple-rules", type: "reinforces" }
  ],
  quote: null
},

{
  id: "goal-local-efficiency", num: 5, book_id: "goal", category: "leadership",
  title: "Local Efficiency, System Loss",
  thesis: "Keeping every station busy produces inventory rather than output, and the measures reward it.",
  reading_time: 3,
  explanation: [
    "A non-constraint running at full utilisation makes work the constraint cannot absorb. That work does not become sales, it becomes a pile: cash converted into partly finished goods, sitting in a queue, ageing. The station's efficiency number improves and the company's cash position gets worse, and both effects are caused by the same decision. Nobody in the chain has done anything wrong by their own instructions.",
    "This survives because of how it is measured and paid. Utilisation is local, visible, easy to attribute and simple to reward, while the damage it causes appears somewhere else on a longer delay and gets attributed to whoever is standing nearest. A manager can be genuinely excellent on every measure applied to them while being the reason the plant is losing money.",
    "The correct behaviour looks like failure. Idle time at a non-constraint is a sign of a well-run system, not a problem to be solved, and any organisation whose culture cannot tolerate visibly unoccupied capacity will keep converting its cash into work in progress. The discomfort is the point at which the theory actually costs something to apply."
  ],
  practical: {
    label: "Example: reading the idle time",
    lead: "Find the busiest station that is not the constraint, then ask what its finished output is currently waiting behind.",
    bullets: [
      "Which teams are fully occupied producing work that then queues?",
      "How much cash is sitting in that queue right now?",
      "What measure rewards the person who created the queue?",
      "Where would visible idleness actually be the healthy outcome?",
      "Can a manager here be praised for deliberately producing less?"
    ]
  },
  application:
    "The pattern is common in scaling companies. Fully loaded engineering teams shipping features that sales cannot absorb, a recruiting function hiring ahead of managers who can onboard, a marketing team generating volume that outpaces qualification. Each looks productive and each is inventory. For an investor the tell is a company where every function reports high utilisation and the revenue line is flat, which locates the constraint by elimination.",
  models: ["incentives", "constraint", "second-order", "feedback-loops"],
  connections: [
    { to: "goal-three-measures", type: "reinforces" },
    { to: "goal-the-constraint", type: "contrasts" },
    { to: "incentives", type: "reinforces" },
    { to: "tos-lean-centre", type: "related" },
    { to: "mck-roic", type: "related" }
  ],
  quote: null
},

{
  id: "goal-fluctuations", num: 6, book_id: "goal", category: "learning",
  title: "Fluctuations and Dependent Events",
  thesis: "Variation accumulates along a chain of dependent steps and never averages itself away.",
  reading_time: 3,
  explanation: [
    "Two conditions have to hold together. Each step varies around its average rate, and each step depends on receiving work from the one before it. Under those conditions the fast steps cannot pass on time they never received, so early finishes are absorbed and lost while late finishes travel all the way down the line. Variation is not symmetric in its effects.",
    "The result is that the chain runs slower than the average of its stations, and the shortfall grows with the number of dependent steps. This is why capacity planning built on average rates consistently overstates what a process can deliver, and why the shortfall is blamed on execution when it was designed in from the start.",
    "It also explains what buffers are for. Protective inventory or protective time placed immediately ahead of the constraint absorbs upstream variation so the constraint is never starved of work. Placed anywhere else it is paying for protection that does not protect throughput, which is most of the inventory in a badly run process. Protective stock held anywhere else is insuring a station whose downtime was never going to matter."
  ],
  practical: {
    label: "Example: checking the chain",
    lead: "Count the dependent steps, then ask whether the plan was built from averages or from observed distributions.",
    bullets: [
      "How many dependent steps must complete before this produces revenue?",
      "Is the forecast built on average rates or on the observed spread?",
      "Where do early finishes get absorbed rather than passed forward?",
      "What sits ahead of the constraint to stop it starving?",
      "Are our buffers placed where variation actually threatens throughput?"
    ]
  },
  application:
    "Any forecast that multiplies stage conversion rates through a long funnel understates the variance and usually the time. Diligence pipelines, hiring plans and enterprise sales cycles all have many dependent steps, and each additional handover widens the gap between the plan and the outcome. The practical response is to shorten the chain where possible and to hold a deliberate buffer ahead of whichever step is binding, rather than spreading slack evenly and calling it prudence.",
  models: ["probability", "constraint", "feedback-loops", "second-order"],
  connections: [
    { to: "goal-balance-flow", type: "extends" },
    { to: "goal-the-constraint", type: "reinforces" },
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "tfs-planning-fallacy", type: "related" },
    { to: "fbr-noise-and-signal", type: "related" }
  ],
  quote: null
},

{
  id: "goal-balance-flow", num: 7, book_id: "goal", category: "strategy",
  title: "Balance Flow, Not Capacity",
  thesis: "Release work at the rate the constraint can absorb instead of equalising capacity across steps.",
  reading_time: 2,
  explanation: [
    "The balanced plant is an appealing idea and a losing design. If every station has identical capacity, then every station is a constraint, nothing anywhere has spare capacity to recover from a disruption, and the whole line settles at an output below the rate every individual station is rated for. Perfect balance removes the only defence against variation.",
    "The alternative is to balance the flow of work rather than the capacity to do it. Work enters the system at the constraint's rate, and the non-constraints carry deliberate excess capacity so they can sprint to refill a buffer after something goes wrong. Their idleness in normal conditions is what pays for that recovery. Spare capacity at a non-constraint is not waste, it is the premium the system pays for being able to recover at all.",
    "The scheduling consequence is concrete. The constraint's schedule becomes the whole system's schedule: upstream steps exist to keep its buffer full, downstream steps exist to avoid spoiling what it has already produced, and release dates are set by working backwards from it rather than forwards from order entry. Promised dates are therefore statements about the constraint's queue, and treating them as statements about the front end is what produces late delivery alongside idle capacity."
  ],
  practical: {
    label: "Example: setting the release rate",
    lead: "Set the rate work enters the system from the constraint's throughput, not from what the front end can start.",
    bullets: [
      "What rate can the binding step actually sustain over a month?",
      "Are we releasing work faster than that, and where does it queue?",
      "Which steps hold spare capacity to refill a buffer after a disruption?",
      "Is the schedule built backwards from the constraint or forwards from intake?",
      "Would balancing every step leave us with any recovery capacity at all?"
    ]
  },
  application:
    "The same rule governs deployment pace and pipeline management. A fund that runs its origination flat out while partner attention is the binding step accumulates half-diligenced opportunities that expire, which is inventory written off. Setting intake to the rate the decision process can genuinely clear produces fewer looks and more completed decisions. Portfolio companies filling a sales pipeline beyond the capacity to work it are making the identical error with their own funnel.",
  models: ["constraint", "feedback-loops", "opportunity-cost", "probability"],
  connections: [
    { to: "goal-fluctuations", type: "extends" },
    { to: "goal-the-constraint", type: "reinforces" },
    { to: "goal-five-steps", type: "related" },
    { to: "second-order-effects", type: "related" },
    { to: "s7p-process-power", type: "related" }
  ],
  quote: null
},

{
  id: "goal-wider-application", num: 8, book_id: "goal", category: "learning",
  title: "Any Process With a Bottleneck",
  thesis: "The same logic governs any dependent chain, including a diligence pipeline or a sales funnel.",
  reading_time: 3,
  explanation: [
    "What generalises is the structure rather than the setting: a series of steps that depend on each other, with variable rates and one binding limit. Nothing in the argument requires machines, physical goods or a factory floor. Wherever work passes between steps and each step must wait for the last, the same conclusions hold and the same errors get made.",
    "The examples are easy to find once the shape is recognised. A sales funnel where the constraint is qualified meetings rather than lead volume, so more leads produce a longer queue. A hiring process where the constraint is interviewer time, so more applicants extend time to offer. Adding input upstream of a constraint adds queue rather than output, every time.",
    "Knowledge work makes it harder because the inventory is invisible. Half-finished analyses, unresolved decisions, drafts awaiting review and items waiting on someone else's reply are all work in progress, carrying the same cost in tied-up effort and the same ageing risk, with none of the physical evidence that a pile of unfinished parts provides. This is why office processes accumulate far more work in progress than a factory floor would ever tolerate."
  ],
  practical: {
    label: "Example: mapping an office process",
    lead: "Draw the steps a piece of work passes through, then find where it waits longest between them.",
    bullets: [
      "What are the dependent steps between a first contact and a decision?",
      "At which step does work wait longest, and behind whom?",
      "How many items are open right now, and how old is the oldest?",
      "Are we adding input upstream of a step that is already saturated?",
      "What invisible inventory is this team carrying that nobody counts?"
    ]
  },
  application:
    "Run this on the fund's own process before applying it to anyone else's. If partner attention is the constraint, adding sourcing capacity produces more expired opportunities rather than more investments, and the fix is to raise the qualification bar earlier so scarce time meets fewer and better prepared situations. The same reading applied to a portfolio company's growth engine tends to reveal that the step everyone is funding is not the step that is binding.",
  models: ["constraint", "value-chain", "opportunity-cost", "second-order"],
  connections: [
    { to: "goal-the-constraint", type: "extends" },
    { to: "goal-local-efficiency", type: "related" },
    { to: "multidisciplinary-thinking", type: "reinforces" },
    { to: "sshr-how-partnerships-decide", type: "related" },
    { to: "zto-distribution", type: "related" }
  ],
  quote: null
}

);
