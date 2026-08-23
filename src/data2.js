/* Ideas 10-18 */
window.DB.ideas.push(

{
  id: "outcome-bias", num: 10, book_id: "pca", category: "decision-making",
  title: "Outcome Bias",
  thesis: "A good result does not prove a good decision, and a bad result does not prove a bad one.",
  reading_time: 2,
  explanation: [
    "Decisions are made with the information available beforehand; results arrive with a large contribution from chance. Judging the decision by the result therefore grades the process on a variable it did not control, and does so with total confidence because the result is now a fact.",
    "The distortion runs both ways and is asymmetric in its damage. Lucky wins teach the wrong lesson and get repeated at scale, which is more expensive than unlucky losses that get abandoned, because the lucky pattern keeps being funded until the odds catch up.",
    "Separating the two requires evaluating the decision against what was knowable at the time. That is uncomfortable, because it means defending a process that lost money and criticising one that made money, and few organisations reward either."
  ],
  practical: {
    label: "Example: reviewing a win",
    lead: "Run the post-mortem on the successes, not only the failures.",
    bullets: [
      "What did we believe at the time, and was it right for the reasons we gave?",
      "Which part of this return came from the thesis and which from the market?",
      "Would we make the same decision with the same information again?",
      "Did any of our stated risks actually happen and we survived anyway?",
      "If the answer is yes, this was a lucky win and the lesson is not the one we want"
    ]
  },
  application:
    "Track decision quality separately from returns. A fund that grades analysts purely on outcomes trains them to take variance rather than to think well, because variance produces the occasional spectacular result that gets remembered. Recording the thesis, the kill criteria and the odds at entry is what makes an honest review possible three years later.",
  models: ["probability", "base-rates", "survivorship", "regression"],
  connections: [
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "survivorship-bias", type: "related" },
    { to: "learning-from-mistakes", type: "extends" },
    { to: "regression-to-the-mean", type: "related" },
    { to: "inversion", type: "related" }
  ],
  quote: null
},

{
  id: "availability-bias", num: 11, book_id: "pca", category: "decision-making",
  title: "Availability Bias",
  thesis: "What comes to mind easily feels more likely and more important than it is.",
  reading_time: 2,
  explanation: [
    "The mind estimates frequency by how readily examples arrive. Vivid, recent and personally experienced events arrive instantly, so they dominate the estimate, while common but unmemorable events are underweighted because nothing retrieves them.",
    "This means your sense of risk is largely a record of what you have recently been exposed to. One bad experience in a category can shut down a whole line of inquiry, and one recent success can reopen it, neither of which reflects the underlying odds.",
    "The counter is to go and get the data that is not available to memory. Base rates exist for most categories of decision, and looking one up takes minutes; the reason we do not is that memory has already supplied an answer that feels sufficient."
  ],
  practical: {
    label: "Example: checking your own sample",
    lead: "When a risk feels large, ask whether it feels large because it is common or because it is memorable.",
    bullets: [
      "How many cases am I actually reasoning from, and how were they selected?",
      "Is the vivid example representative, or is it vivid precisely because it was unusual?",
      "What does the population-level data say about this frequency?",
      "Am I overweighting the last deal that went wrong in this sector?",
      "What category of risk is invisible to me because I have never seen it happen?"
    ]
  },
  application:
    "Investment committees run on available evidence: the last blow-up, the last outsized win, the sector everyone read about this month. Written base rates are the antidote. If the argument is that this kind of company rarely reaches scale, the useful move is to establish how rarely, rather than to trade anecdotes.",
  models: ["base-rates", "probability", "survivorship", "anchoring"],
  connections: [
    { to: "base-rates", type: "contrasts" },
    { to: "survivorship-bias", type: "related" },
    { to: "anchoring", type: "related" },
    { to: "probabilistic-thinking", type: "reinforces" },
    { to: "antidotes", type: "reinforces" }
  ],
  quote: null
},

{
  id: "anchoring", num: 12, book_id: "pca", category: "decision-making",
  title: "Anchoring",
  thesis: "The first number you hear pulls every judgement that follows toward it.",
  reading_time: 2,
  explanation: [
    "Estimates are made by adjusting from a starting point, and the adjustment is almost always too small. This holds even when the starting point is known to be arbitrary, which is what makes anchoring different from ordinary persuasion; you can be aware of the anchor and still move less than you should.",
    "In negotiation the effect is straightforwardly exploitable, which is why opening numbers are chosen rather than derived. The party who names the first figure defines the range within which the argument then happens, and concessions from that figure feel like progress even when the figure was invented.",
    "The defence is to form your own number before exposure. A valuation you calculated yourself, written down before you see the ask, is the only reference point that is not contaminated by theirs."
  ],
  practical: {
    label: "Example: reading a term sheet",
    lead: "Decide what it is worth before you learn what they want.",
    bullets: [
      "Write your own valuation range and walk-away point before opening the deck",
      "Notice whether you are arguing about their number or about the business",
      "Ask what the last round's price was, then consciously discount its relevance",
      "Test the anchor by asking what you would pay if the ask were 40% lower",
      "Treat any round-number ask as a chosen anchor rather than an analytical output"
    ]
  },
  application:
    "The last round's valuation is the most powerful anchor in venture and one of the least informative facts available, because it reflects a different market and a different information set. Underwriting from your own bottom-up view and only then comparing to the ask is slower and materially changes the price you are willing to accept.",
  models: ["anchoring", "confirmation-bias", "margin-of-safety"],
  connections: [
    { to: "contrast-effects", type: "extends" },
    { to: "confirmation-bias", type: "related" },
    { to: "independent-thinking", type: "reinforces" },
    { to: "margin-of-safety", type: "related" },
    { to: "availability-bias", type: "related" }
  ],
  quote: null
},

{
  id: "liking-loving", num: 13, book_id: "pca", category: "people",
  title: "Liking and Loving Tendency",
  thesis: "We distort facts to favour people we like, and we like people who like us.",
  reading_time: 2,
  explanation: [
    "Affection is not a neutral background condition to analysis. Liking someone changes what you notice about their business, how you weigh their claims, and how much benefit of the doubt their gaps receive. The analysis feels identical from the inside.",
    "The tendency is easy to trigger deliberately: similarity, flattery, shared enemies, generosity and simple repeated exposure all produce it. Anyone selling something knows this, and most of them are not being cynical about it, which makes it harder to resist.",
    "Charisma in a founder is genuinely valuable, because it recruits and it sells. The error is letting it substitute for the things it is correlated with rather than treating it as one input that must survive contact with the numbers."
  ],
  practical: {
    label: "Example: separating the founder from the business",
    lead: "Ask whether the case would survive if you did not enjoy the meeting.",
    bullets: [
      "Would I fund this business if it were presented by someone I found tedious?",
      "Which of my beliefs about this company rest on the founder's word alone?",
      "Have I asked the uncomfortable question, or edited it to keep the tone warm?",
      "Is a colleague who has never met them reading the same evidence the same way?",
      "What would a customer who dislikes them say about the product?"
    ]
  },
  application:
    "Founder quality is a genuine predictor and also the channel through which most avoidable errors enter. A workable structure is to let the person you liked make the case, and have someone who has not met them test the numbers, then reconcile the two views explicitly rather than averaging them.",
  models: ["social-proof", "authority-bias", "confirmation-bias"],
  connections: [
    { to: "authority-misinfluence", type: "related" },
    { to: "reciprocation", type: "reinforces" },
    { to: "confirmation-bias", type: "extends" },
    { to: "independent-thinking", type: "contrasts" },
    { to: "temperament", type: "related" }
  ],
  quote: null
},

{
  id: "authority-misinfluence", num: 14, book_id: "pca", category: "people",
  title: "Authority-Misinfluence",
  thesis: "People follow authority past the point where the authority knows what it is doing.",
  reading_time: 2,
  explanation: [
    "Deference to expertise is efficient and usually correct. The failure appears at the edges of the expert's actual competence, where the signals of authority stay fully intact while the reliability behind them drops away.",
    "The problem is compounded by the fact that authority suppresses the questions that would reveal the error. Subordinates who can see the mistake often do not raise it, partly from deference and partly because the cost of being wrong in public against a senior person is asymmetric.",
    "This makes the useful discipline organisational rather than personal. Junior people need explicit, low-cost permission to contradict, and it has to be exercised routinely on small things so that it is available on the one occasion that matters."
  ],
  practical: {
    label: "Example: testing an expert view",
    lead: "Separate the credential from the claim, then check the claim.",
    bullets: [
      "Is this question inside the specific area this person is expert in?",
      "What is their track record on this class of prediction, not on their field generally?",
      "Are they exposed to the consequences of being wrong here?",
      "Who in the room disagrees and has not said so yet?",
      "What would I believe if the same argument came from an unknown analyst?"
    ]
  },
  application:
    "In an investment committee the most senior view shapes the discussion before the evidence does. Writing individual assessments before the meeting rather than during it preserves independent judgement, and gives the chair a record of who thought what before the room converged.",
  models: ["authority-bias", "social-proof", "incentives"],
  connections: [
    { to: "social-proof", type: "reinforces" },
    { to: "independent-thinking", type: "contrasts" },
    { to: "incentives", type: "related" },
    { to: "liking-loving", type: "related" },
    { to: "circle-of-competence", type: "extends" }
  ],
  quote: null
},

{
  id: "commitment-and-consistency", num: 15, book_id: "pca", category: "people",
  title: "Commitment and Consistency",
  thesis: "Once we have taken a position publicly, we defend it rather than re-examine it.",
  reading_time: 2,
  explanation: [
    "Humans are strongly motivated to remain consistent with what they have already said and done. The drive is useful, because it produces reliability and makes cooperation possible, and it is exactly what makes changing your mind expensive.",
    "The cost scales with how public and how effortful the commitment was. A view mentioned in passing is cheap to revise; a view defended in a memo, presented to a committee and staked on is not, and the resistance you feel will present itself as conviction.",
    "The design response is to make small commitments and to build changing your mind into the process. Stating in advance what would cause you to reverse converts a reversal from a loss of face into the execution of a plan."
  ],
  practical: {
    label: "Example: the escalating position",
    lead: "Notice when you are adding to a commitment to justify the earlier one.",
    bullets: [
      "Am I following this on because the case improved, or because I am already in?",
      "Would I open this position today at this price with this information?",
      "Did I state kill criteria at entry, and have any of them been hit?",
      "How much of my reluctance is about the money and how much about having said it out loud?",
      "Who is empowered to tell me the thesis is broken?"
    ]
  },
  application:
    "Follow-on rounds are where this bias is most expensive, because the prior commitment is both financial and reputational. A useful rule is to underwrite every follow-on as a new investment, decided by whoever did not lead the original, with the original thesis available but not authoritative.",
  models: ["confirmation-bias", "loss-aversion", "incentives"],
  connections: [
    { to: "confirmation-bias", type: "reinforces" },
    { to: "loss-aversion", type: "related" },
    { to: "learning-from-mistakes", type: "contrasts" },
    { to: "independent-thinking", type: "related" },
    { to: "antidotes", type: "reinforces" }
  ],
  quote: null
},

{
  id: "reciprocation", num: 16, book_id: "pca", category: "people",
  title: "Reciprocation",
  thesis: "A favour creates an obligation, and small favours buy disproportionate concessions.",
  reading_time: 2,
  explanation: [
    "The instinct to return favours is deep, largely automatic, and does not price the exchange. A modest gift or concession creates a felt debt that is repaid at a much higher value, and the person repaying it experiences the repayment as a free choice.",
    "It also runs in the negative direction. Concessions invite concessions, so a negotiator who moves first and generously often finds the other side moving too, which is why the tactic of a deliberate early concession is so durable.",
    "You cannot switch the instinct off, and mostly you should not, because reciprocity is the basis of working relationships. What you can do is notice when a small kindness precedes a large ask, and let the ask be judged separately from the debt."
  ],
  practical: {
    label: "Example: the small favour before the ask",
    lead: "When you feel obliged, price the obligation before acting on it.",
    bullets: [
      "What have I received here, and what is it actually worth?",
      "Is the request proportionate to the favour, or several times larger?",
      "Would I agree to this if it had arrived cold?",
      "Am I conceding on substance to repay something social?",
      "Can I repay the favour in kind instead of in the currency they are asking for?"
    ]
  },
  application:
    "Deal flow runs on reciprocity, and that is largely healthy. The place to be careful is where a referral relationship makes declining feel rude, because the cost of a bad investment is far larger than the cost of a slightly awkward no. Keeping the sourcing relationship and the investment decision in separate conversations helps.",
  models: ["incentives", "social-proof", "loss-aversion"],
  connections: [
    { to: "liking-loving", type: "reinforces" },
    { to: "incentives", type: "related" },
    { to: "contrast-effects", type: "related" },
    { to: "independent-thinking", type: "contrasts" },
    { to: "commitment-and-consistency", type: "related" }
  ],
  quote: null
},

{
  id: "contrast-effects", num: 17, book_id: "pca", category: "decision-making",
  title: "Contrast Effects",
  thesis: "We judge things against whatever sits next to them rather than on their own terms.",
  reading_time: 2,
  explanation: [
    "Perception is comparative. The same price looks cheap after an expensive one and dear after a cheap one, and the same candidate looks strong after a weak field. Because the comparison is doing the work, changing the comparison set changes the judgement without changing the thing.",
    "This is why it is so easily engineered. Showing an inflated option first, or a deliberately poor alternative alongside, shifts the perceived value of the option that was always the target. The mechanism is invisible in the moment because the resulting feeling is simply that this one seems reasonable.",
    "Gradual change exploits the same wiring in reverse. A deterioration that would be obvious as a single step goes unnoticed when it arrives as a series of small ones, because each is judged against the state immediately before it."
  ],
  practical: {
    label: "Example: fixing the reference point",
    lead: "Compare to an absolute standard you set in advance, not to what you happened to see first.",
    bullets: [
      "What is this worth against my own criteria, ignoring the alternatives shown?",
      "Was the first option shown to me plausible, or was it there to make this look good?",
      "If I saw this deal first in the sequence, would I rate it the same way?",
      "Has this metric drifted gradually to a level I would have rejected outright?",
      "What does the market comp set look like if I choose it rather than accept theirs?"
    ]
  },
  application:
    "Contrast is why a mediocre deal looks attractive in a weak quarter of deal flow, and why gradual covenant erosion across successive rounds gets waved through. An explicit, written bar that does not move with the pipeline is the practical defence, and its main function is to be inconvenient.",
  models: ["anchoring", "confirmation-bias", "opportunity-cost"],
  connections: [
    { to: "anchoring", type: "reinforces" },
    { to: "opportunity-cost", type: "related" },
    { to: "selectivity", type: "extends" },
    { to: "loss-aversion", type: "related" },
    { to: "base-rates", type: "related" }
  ],
  quote: null
},

{
  id: "loss-aversion", num: 18, book_id: "pca", category: "people",
  title: "Loss Aversion",
  thesis: "Losing something hurts more than gaining the same thing pleases, so we defend badly.",
  reading_time: 2,
  explanation: [
    "The asymmetry is roughly a factor of two in most measurements: the pain of losing a given amount is around twice the pleasure of gaining it. Because the two are not symmetric, choices that look irrational on expected value look sensible on felt experience.",
    "Ownership intensifies it. Something already held is valued above the same thing not yet held, which is why people refuse to sell at prices they would never pay to buy. The reference point, not the value, is doing the work.",
    "The behavioural consequences are consistent: holding losers too long, selling winners too early, and taking bad risks to avoid crystallising a loss. The last is the dangerous one, because it converts a survivable loss into an unsurvivable one."
  ],
  practical: {
    label: "Example: the position you would not open",
    lead: "Test every holding as if you were buying it fresh today.",
    bullets: [
      "At today's price and today's information, would I open this position?",
      "If not, what is stopping me from closing it other than the entry price?",
      "Am I taking additional risk specifically to avoid booking a loss?",
      "Is the loss the problem, or is having to report the loss the problem?",
      "What is this position costing me in attention as well as capital?"
    ]
  },
  application:
    "The entry price is information about the past and nothing else, but it functions as a psychological floor. Portfolio reviews that report positions without showing entry prices produce noticeably more honest hold-or-exit decisions, and the same logic applies to writing off a position early rather than funding it to avoid the mark.",
  models: ["loss-aversion", "opportunity-cost", "margin-of-safety"],
  connections: [
    { to: "opportunity-cost", type: "contrasts" },
    { to: "commitment-and-consistency", type: "reinforces" },
    { to: "avoiding-ruin", type: "related" },
    { to: "contrast-effects", type: "related" },
    { to: "temperament", type: "related" }
  ],
  quote: null
}

);
