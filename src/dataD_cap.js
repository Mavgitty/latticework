/* Capital: The Story of Long-Term Investment Excellence — Charles D. Ellis — 6 ideas */
window.DB.ideas.push(

{
  id: "cap-organisational-excellence", num: 1, book_id: "cap", category: "leadership",
  title: "Excellence Is Organisational",
  thesis: "Sustained investment results are produced by an organisation, not by the individuals who happen to sign them.",
  reading_time: 3,
  explanation: [
    "Ellis writes an institutional history rather than a profile, and the choice is the argument. Any firm can have a decade produced by one gifted investor. Results that persist across generations of staff, several market regimes and a large increase in size cannot be explained that way, because none of the individuals present at the start are present at the end. Whatever is doing the work has to be the organisation itself.",
    "That reframes the questions worth asking about an investment firm. Not who is the best analyst, but how decision rights are allocated, who is hired, how they are paid, how long they stay, who owns the equity and what the firm refuses to do. These are dull, structural choices, and they are the ones that still apply after the current staff have gone.",
    "It also explains why the approach is difficult to imitate. A competitor can copy a research process or a portfolio structure in a year, and cannot copy thirty years of consistent hiring, promotion and ownership in any period at all. The advantage is cumulative and it is held in habits rather than documents, which makes it durable and also makes it fragile in exactly one way: it can be dismantled quickly by leadership that does not value it."
  ],
  practical: {
    label: "Example: auditing the organisation",
    lead: "Judge a firm by the structures that will outlast its current staff, rather than by the people in the room.",
    bullets: [
      "If the three best investors here left, what would remain?",
      "Who owns the firm, and who will own it in ten years?",
      "How are decision rights distributed, and who can be overruled?",
      "What does the promotion record say about what is actually rewarded?",
      "Which of our results depend on structure rather than on individuals?"
    ]
  },
  application:
    "Building this deliberately means treating structure as a first-order investment decision. Decide early who holds equity and on what vesting, how many people can independently commit capital, what the review process is when they disagree, and how compensation weights long horizons against annual outcomes. Each of those is easy to set at the start and painful to change later, once the people advantaged by the current arrangement are the ones voting on it.",
  models: ["process-power", "compounding", "incentives", "decision-quality"],
  connections: [
    { to: "cap-culture-enforces-horizon", type: "extends" },
    { to: "cap-multiple-counsellor", type: "reinforces" },
    { to: "tos-decentralisation", type: "related" },
    { to: "s7p-process-power", type: "reinforces" },
    { to: "long-term-thinking", type: "reinforces" }
  ],
  quote: null
},

{
  id: "cap-multiple-counsellor", num: 2, book_id: "cap", category: "decision-making",
  title: "The Multiple Counsellor System",
  thesis: "Split one portfolio among several independent managers, each accountable for their own sleeve alone.",
  reading_time: 3,
  explanation: [
    "The system divides a single fund into portions, each run independently by one manager who makes their own decisions and is measured on their own portion. The fund's result is the aggregate of those portions. Nobody has to persuade anybody and nobody has to be persuaded, so what the investor holds is a portfolio built from several genuinely separate judgements rather than from one judgement or from a compromise negotiated between many.",
    "It solves two different failures at once. A single decision maker gives the fund one person's blind spots, one style and one succession risk. A committee removes those but introduces worse problems: the loudest or most senior view carries, dissent gets traded away for consensus, and no individual can be held to account for a result that everybody signed. Independent sleeves keep the diversity of view and keep accountability attached to a name.",
    "The arrangement is not free. It requires managers who can tolerate being measured alone, a firm willing to hold positions that some of its own people think are wrong, and enough shared research that independence does not become duplication. It also caps how concentrated the whole fund can be, which is the price paid for not depending on any single person's judgement."
  ],
  practical: {
    label: "Example: splitting the decision",
    lead: "Where a group decides together, ask whether the same capital would be better split into independent, individually owned portions.",
    bullets: [
      "Who personally owns this decision, and who will own the outcome?",
      "Is our committee producing a view, or the average of several views?",
      "Would splitting the mandate into independent sleeves add diversity or just noise?",
      "Which dissenting views were dropped to reach agreement, and by whom?",
      "Are our managers measured on their own decisions or on the group's?"
    ]
  },
  application:
    "Structurally this means giving individuals real, bounded authority to commit capital rather than a vote in a partnership meeting. Set the size each person can deploy alone, define what has to come to the group and why, and attribute every position to a named decision maker so that performance can be traced. Compensation then follows the attributed record, which is the part that makes the independence real rather than nominal.",
  models: ["diversification", "decision-quality", "probability", "specialisation"],
  connections: [
    { to: "cap-organisational-excellence", type: "extends" },
    { to: "cap-no-star-culture", type: "reinforces" },
    { to: "tos-decentralisation", type: "reinforces" },
    { to: "tib-truthseeking-group", type: "related" },
    { to: "authority-misinfluence", type: "contrasts" }
  ],
  quote: null
},

{
  id: "cap-no-star-culture", num: 3, book_id: "cap", category: "people",
  title: "Against Star Culture",
  thesis: "A firm that refuses to create stars keeps the people and the behaviour it wants.",
  reading_time: 2,
  explanation: [
    "Naming a star changes the incentives of everybody around them. The star's pay and standing come to depend on being visibly right, which discourages changing your mind and encourages positions that stand out. Colleagues learn that credit accrues to whoever is loudest in the meeting, so information stops being shared freely. And a firm whose reputation rests on named individuals has handed those individuals the option to leave and take it with them.",
    "Suppressing the star does not mean pretending everyone is equal. It means keeping recognition internal and collective while paying carefully for contribution, so that the person who supplies the decisive piece of research is rewarded without becoming the brand. The visible effect is retention, since a rival firm cannot recruit a name it has never heard of. The less visible effect is behavioural: people admit error earlier when their identity is not staked on a call."
  ],
  practical: {
    label: "Example: where the credit goes",
    lead: "Look at who gets named publicly and who gets paid privately, and check that the two are not the same lever.",
    bullets: [
      "Does our external story depend on two or three named people?",
      "Is credit for a good outcome attributed narrowly or shared too widely to matter?",
      "Who was rewarded for changing their mind last year?",
      "Would a competitor know who to approach, and how did they learn it?",
      "Are we paying for contribution or for visibility?"
    ]
  },
  application:
    "In practice this is a compensation and communications decision taken together. Pay on attributed long-run contribution, keep the public voice institutional, and avoid marketing that makes a fund inseparable from one person's name. The test is what happens on a departure: if a single resignation would trigger redemptions, the firm has been selling an individual rather than an organisation, and the individual knows it at every pay review.",
  models: ["incentives", "regression", "social-proof", "survivorship"],
  connections: [
    { to: "cap-multiple-counsellor", type: "reinforces" },
    { to: "cap-hiring-for-temperament", type: "related" },
    { to: "temperament", type: "reinforces" },
    { to: "tib-luck-vs-skill", type: "related" },
    { to: "fbr-lucky-fool", type: "reinforces" }
  ],
  quote: null
},

{
  id: "cap-ownership-and-tenure", num: 4, book_id: "cap", category: "leadership",
  title: "Ownership and Tenure",
  thesis: "A long horizon is only credible when the owners cannot be forced to shorten it.",
  reading_time: 3,
  explanation: [
    "Firms talk about long horizons constantly and very few have the structure to hold one. A listed owner reports quarterly, a private equity owner has a fund life, and a founder nearing retirement has a liquidity problem. Ownership held privately and broadly by the people doing the work removes the outside clock. The horizon then becomes a matter of what the owners want, and the owners are the same people who will still be there.",
    "Tenure does the complementary work. Someone who expects to spend a career at one firm is investing in relationships and in a reputation that will be assessed over decades, which changes what they are willing to do this quarter. It also makes apprenticeship possible, because teaching a successor is not a threat when your own position is not contested annually. Long tenure and stable ownership are two halves of one mechanism.",
    "The costs are real and worth stating. Broad private ownership makes the equity illiquid and its valuation contested, succession has to be funded internally, and a firm where people stay for decades renews its thinking slowly and can protect underperformers out of loyalty. The structure buys a horizon and pays for it in adaptability, which is a defensible trade only if the horizon is genuinely being used."
  ],
  practical: {
    label: "Example: who holds the clock",
    lead: "Trace every owner and lender to the date they need liquidity, because that date is the firm's real horizon.",
    bullets: [
      "Who owns us, and when does each owner need cash back?",
      "How is equity transferred when someone joins, leaves or retires?",
      "What is the average tenure of the people making decisions?",
      "Does anything in our capital structure impose a deadline we did not choose?",
      "Are we protecting long tenure or protecting long underperformance?"
    ]
  },
  application:
    "Concretely this argues for equity held by working staff on a defined internal transfer mechanism, vesting over periods that match the investment horizon, and no outside capital carrying a fixed exit date. Add deferred compensation measured over multiple years and the structure starts to enforce the horizon on its own. Without that, a long-term mandate is a preference the firm will abandon the first time an owner needs money.",
  models: ["incentives", "compounding", "second-order", "opportunity-cost"],
  connections: [
    { to: "cap-culture-enforces-horizon", type: "reinforces" },
    { to: "cap-organisational-excellence", type: "related" },
    { to: "incentives", type: "extends" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "patience", type: "related" }
  ],
  quote: null
},

{
  id: "cap-hiring-for-temperament", num: 5, book_id: "cap", category: "people",
  title: "Hiring for Temperament",
  thesis: "Recruit for character, curiosity and fit with the firm, then train the analytical craft.",
  reading_time: 2,
  explanation: [
    "Pedigree is easy to observe and weakly related to what the job requires. Technical analysis can be taught to any capable person in a few years. Tolerating being wrong in public, holding a position through several years of doubt, sharing a finding that undermines a colleague's thesis and continuing to work carefully when nobody is checking cannot be taught, and none of them appear on a transcript.",
    "Reading temperament requires a slower process than reading a resume: many conversations, work done alongside candidates, and references from people who saw them under pressure rather than at their best. It also requires accepting that fit is specific. Someone who would flourish in a firm built on independent sleeves and quiet credit may be wasted in one built on debate and visibility, so hiring the market's best candidate is not the same as hiring the right one."
  ],
  practical: {
    label: "Example: hiring for the second decade",
    lead: "Select for the qualities you cannot train, and treat everything teachable as a lower weight in the decision.",
    bullets: [
      "Which qualities in this role are teachable, and which are not?",
      "What evidence do we have of how this person behaves when wrong?",
      "Are we hiring for our firm specifically or for the industry generally?",
      "Who have we promoted, and what did they have in common?",
      "Would this person still fit here in fifteen years?"
    ]
  },
  application:
    "For a firm this makes recruiting an ownership-level activity rather than a staffing one. Hire slowly against a written list of the traits you will not compromise on, use extended contact and work samples instead of interview performance, and let the people who will live with the decision make it. Then align tenure and pay so that the qualities you selected for are the ones the incentive system continues to reward.",
  models: ["base-rates", "wysiati", "regression", "circle-of-competence"],
  connections: [
    { to: "cap-no-star-culture", type: "reinforces" },
    { to: "cap-multiple-counsellor", type: "related" },
    { to: "tos-outsider-temperament", type: "related" },
    { to: "csup-people-depth", type: "reinforces" },
    { to: "tfs-illusion-validity", type: "contrasts" }
  ],
  quote: null
},

{
  id: "cap-culture-enforces-horizon", num: 6, book_id: "cap", category: "leadership",
  title: "Culture Enforces the Horizon",
  thesis: "Culture is the mechanism that makes a stated long horizon survive a bad year.",
  reading_time: 3,
  explanation: [
    "Culture in this account is not a set of values on a wall. It is what predictably happens when an analyst is wrong for two years, when a client threatens to withdraw, when a competitor is producing better numbers with a strategy the firm does not believe in. The answers to those situations are learned by watching what senior people actually do, and they harden into expectations that constrain everybody including the leadership.",
    "A long horizon is uncomfortable at every point where it matters. It requires tolerating visible underperformance, refusing profitable business that would compromise the approach, and declining to launch whatever is selling. Each of those is a decision somebody has to make against immediate pressure, and no mandate document makes it for them. What makes it survivable is knowing that the firm has taken the same decision before and that colleagues expect it.",
    "The mechanism transmits by apprenticeship and it degrades by exception. One well-rewarded departure from the approach teaches more than a decade of stated principles, because people read the exception as the real rule. Maintaining culture is therefore mostly a matter of who is promoted and what is refused, both of which are visible, and neither of which can be delegated to a document."
  ],
  practical: {
    label: "Example: what the exceptions teach",
    lead: "Identify the moments where your stated horizon is expensive, and look at what the firm actually did the last few times.",
    bullets: [
      "What business have we turned down, and does anyone know about it?",
      "How do we behave toward an analyst who is wrong for two years?",
      "What exception have we made recently, and what did it teach?",
      "Do our promotions reward the behaviour we claim to value?",
      "Which of our stated principles has never cost us anything?"
    ]
  },
  application:
    "The structural version is to remove the situations where the horizon has to be defended by willpower alone. Set client terms and reporting periods that match the holding period, cap assets before size forces a change in approach, and pay on multi-year measures so a bad year is survivable for the individual as well as the firm. Then use promotion as the main instrument, because who rises is the clearest statement a firm makes about what it means.",
  models: ["process-power", "feedback-loops", "incentives", "social-proof"],
  connections: [
    { to: "cap-organisational-excellence", type: "reinforces" },
    { to: "cap-ownership-and-tenure", type: "extends" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "ewb-institutional-imperative", type: "contrasts" },
    { to: "patience", type: "related" }
  ],
  quote: null
}

);
