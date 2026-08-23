/* Creativity, Inc. — Ed Catmull — 8 ideas */
window.DB.ideas.push(

{
  id: "cinc-candour-not-honesty", num: 1, book_id: "cinc", category: "leadership",
  title: "Candour Is Not Honesty",
  thesis: "Honesty is a moral quality nobody admits lacking. Candour is a behaviour that hierarchy quietly suppresses.",
  reading_time: 3,
  explanation: [
    "Catmull separates the two words deliberately. Honesty carries moral weight, so asking whether people are being honest produces defensiveness and no information. Candour is narrower and less loaded. It means being forthright, saying the thing you actually think about the work in front of you. Nobody claims to be dishonest, and almost everyone withholds candour daily, which is why naming the second thing makes the problem discussable at all.",
    "Withholding is rational inside a hierarchy. The person who names a problem in a meeting absorbs the social cost, and the benefit of naming it lands on the organisation. The more senior the person being contradicted, and the more committed the room appears to be, the higher that cost climbs. Silence is the individually sensible choice, and it produces rooms where the most obvious problem in a project goes unmentioned by everyone present.",
    "Which means candour cannot be requested. Asking people to speak up leaves the cost exactly where it was and adds the implication that anyone who stays quiet is at fault. What changes behaviour is machinery: a forum whose stated purpose is criticism, a convention that senior people describe their own failures first, and repeated public evidence that speaking has not damaged the careers of the people who did it."
  ],
  practical: {
    label: "Example: testing for candour",
    lead: "Look for evidence that people have said difficult things recently, rather than asking whether they feel able to.",
    bullets: [
      "When did someone last contradict the most senior person in the room?",
      "What visibly happened to that person in the months afterwards?",
      "Which problems does everyone discuss privately and nobody raises formally?",
      "Does any forum exist here specifically to criticise work in progress?",
      "Do senior people describe their own mistakes in front of juniors?"
    ]
  },
  application:
    "The question to ask about a portfolio company is not whether the founder is open to feedback, since everyone says yes, but what the company does with information it does not want. Trace one recent piece of bad news backwards: who knew first, how long it took to reach the board, and whether the founder brought it or an investor discovered it. That path is the measure of candour in the organisation.",
  models: ["incentives", "authority-bias", "feedback-loops", "social-proof"],
  connections: [
    { to: "cinc-braintrust", type: "extends" },
    { to: "cinc-fear", type: "reinforces" },
    { to: "ewb-candid-reporting", type: "reinforces" },
    { to: "tib-truthseeking-group", type: "related" },
    { to: "authority-misinfluence", type: "related" }
  ],
  quote: null
},

{
  id: "cinc-braintrust", num: 2, book_id: "cinc", category: "leadership",
  title: "The Braintrust",
  thesis: "Frank feedback survives when the people giving it hold no authority over the work.",
  reading_time: 3,
  explanation: [
    "The Braintrust is a group of directors and writers who watch an unfinished film and say what is not working. Its defining feature is structural rather than cultural. The group has no power over the project and the director is under no obligation to act on anything said, which converts every note from an instruction into information. The person carrying the problem keeps the decision about what to do with it.",
    "That separation does two things at once. It lets the group be blunt, because bluntness is not an exercise of power over anybody. And it protects the work from committee, since a project answering to several senior opinions loses the single point of view that made it worth making. Catmull's rule that notes identify problems rather than prescribe solutions holds the same line inside each conversation.",
    "The other requirement is peers. Feedback carries weight when it comes from people who have made the same kind of thing and will be judged on the same terms, and it is discounted when it comes from people who have not. Neither the frankness nor the usefulness survives if membership becomes a signal of rank rather than a description of what somebody actually does."
  ],
  practical: {
    label: "Example: designing a feedback forum",
    lead: "Give the group the job of finding problems and give the decision to the person who owns the work.",
    bullets: [
      "Does anyone in this review hold authority over the project?",
      "Are notes framed as problems observed or as solutions required?",
      "Have the reviewers done work of this kind themselves?",
      "Who decides what to do with the notes, and is that clear?",
      "Is the review early enough that changes are still cheap?"
    ]
  },
  application:
    "An investment committee is the same structure with the roles collapsed, since it holds the criticism and the decision together, and that combination is what turns dissent into a challenge to authority. The available fix is to separate the functions in time. Run a session whose only output is a list of problems with the deal, before anybody is asked to vote, with the sponsor present to hear them rather than to defend.",
  models: ["authority-bias", "decision-quality", "social-proof", "process-power"],
  connections: [
    { to: "cinc-candour-not-honesty", type: "extends" },
    { to: "cinc-hidden-problems", type: "related" },
    { to: "tib-truthseeking-group", type: "reinforces" },
    { to: "tib-wanna-bet", type: "related" },
    { to: "cap-multiple-counsellor", type: "reinforces" }
  ],
  quote: null
},

{
  id: "cinc-ugly-babies", num: 3, book_id: "cinc", category: "people",
  title: "Every Original Starts Ugly",
  thesis: "New work is misshapen at the start, so early judgement destroys the things that would have become good.",
  reading_time: 2,
  explanation: [
    "Catmull's phrase is that every film begins as an ugly baby, awkward and unformed rather than a small neat version of what it will be. The point is about the shape of the process. Original work does not arrive in miniature and then grow evenly. It arrives wrong, and the value of an early version is that it exists at all and can therefore be examined by somebody.",
    "The failure mode is applying finished standards to an unfinished thing. A rough version invites the easy question, which is whether it is good now, in place of the hard one, which is whether the problems in it are the kind that get solved. Confusing the two produces a studio that only makes work which looks presentable immediately, and that work resembles what already exists.",
    "Protection is therefore active rather than a matter of tolerance. It means keeping early versions away from audiences who will judge them as products, being explicit about which stage a piece of work has reached, and separating the question of whether to continue from the question of whether it is any good yet. The protection is also finite, because some ugly babies never improve."
  ],
  practical: {
    label: "Example: reviewing unfinished work",
    lead: "Ask whether the problems in an early version are solvable, rather than whether the version is good.",
    bullets: [
      "What stage is this work at, and who has been told that?",
      "Are the flaws here the kind that get fixed, or structural?",
      "Am I judging this against a finished thing?",
      "Who is seeing this early, and how will they read it?",
      "What would have to be true in three months to continue?"
    ]
  },
  application:
    "Early-stage companies are ugly babies with the same review problem. The product is thin, the metrics are noisy, and the useful question is which of the present weaknesses are structural rather than unfinished. A committee that asks whether this looks like a good company today will select for polish and for resemblance to previous winners, which is the same selection pressure that produces conventional films inside a studio.",
  models: ["validated-learning", "optionality", "loss-aversion", "dual-process"],
  connections: [
    { to: "cinc-cost-of-failure", type: "reinforces" },
    { to: "cinc-braintrust", type: "related" },
    { to: "tfs-substitution", type: "reinforces" },
    { to: "zto-zero-to-one", type: "related" },
    { to: "patience", type: "related" }
  ],
  quote: null
},

{
  id: "cinc-fear", num: 4, book_id: "cinc", category: "people",
  title: "Fear Keeps Problems Hidden",
  thesis: "People hide problems because hiding is rational for them, not because they lack courage.",
  reading_time: 3,
  explanation: [
    "Catmull's account of fear is unusually practical. He treats it as a mechanism rather than a character defect. An employee who reports a problem early is associated with it, may be asked to own it, and may turn out to be wrong in public. An employee who waits often finds it resolved, absorbed by somebody else, or overtaken. The incentives point at silence and the private calculation is correct.",
    "The consequence is a systematic delay in the arrival of bad news, and the delay runs longest for the problems that matter most, because those carry the most blame. By the time an expensive problem is raised formally it is usually old, already known to everyone below the level that could have acted on it, and considerably more expensive than it was when the first person noticed.",
    "Reducing fear therefore means changing the payoff rather than issuing reassurance. Catmull's version includes responding to early warnings with help instead of scrutiny, being visibly wrong in front of staff, and making the cost of a raised problem lower than the cost of a discovered one. Telling people not to be afraid achieves none of this and signals that the subject is now closed."
  ],
  practical: {
    label: "Example: changing the payoff",
    lead: "Make raising a problem cheaper than being found out, and demonstrate it in a case people can see.",
    bullets: [
      "What happened to the last person who raised bad news early?",
      "Does an early warning bring help or bring scrutiny?",
      "How long did the last serious problem take to reach the top?",
      "Have I described my own recent mistake to the team?",
      "Is anyone rewarded for finding a problem in their own work?"
    ]
  },
  application:
    "In diligence this is the reason to ask a founder about a specific failure rather than about culture. The informative answer names the problem, the date it was known, who raised it and what it cost. The uninformative one describes a learning organisation. The same test applies afterwards, since a board that only receives bad news at quarterly meetings is receiving it late, and the lateness is a fact about incentives rather than the calendar.",
  models: ["incentives", "loss-aversion", "feedback-loops", "inversion"],
  connections: [
    { to: "cinc-hidden-problems", type: "extends" },
    { to: "cinc-candour-not-honesty", type: "reinforces" },
    { to: "incentives", type: "reinforces" },
    { to: "tib-motivated-reasoning", type: "related" },
    { to: "fsh-governance-signals", type: "related" }
  ],
  quote: null
},

{
  id: "cinc-hidden-problems", num: 5, book_id: "cinc", category: "learning",
  title: "The Problems You Cannot See",
  thesis: "The dangerous problems are the invisible ones, so build mechanisms instead of waiting to be told.",
  reading_time: 3,
  explanation: [
    "Catmull's image is a train moving fast enough that nobody wants to be the person who stops it, with obstacles ahead that only the people close to the track can see. Management sees a summary, and the summary is produced by the same hierarchy that has an interest in what it contains. The problems reaching the top are the ones somebody decided to send upward.",
    "The dangerous class is therefore not the known problem being argued about, but the one that has not been named anywhere. This class cannot be handled by attention, since attention follows what has already been reported. It has to be attacked by building routes that do not pass through the reporting line: work reviewed directly, people asked specific questions instead of general ones, and figures examined at source.",
    "Catmull is explicit that these mechanisms decay. A forum that surfaced real problems for two years becomes a ritual, and a survey that produced candid answers becomes a form people learn how to complete. The maintenance job is to keep changing the instrument, on the assumption that any fixed way of asking will eventually be answered rather than used for its original purpose."
  ],
  practical: {
    label: "Example: building routes around the report",
    lead: "Assume the summary you receive is filtered, and construct at least one channel that avoids it.",
    bullets: [
      "Which of my information sources pass through the person being assessed?",
      "When did I last look at raw data rather than a summary?",
      "Who two levels down have I spoken to this month?",
      "Which mechanism here has become a ritual people complete?",
      "What would I expect to see first if this were going wrong?"
    ]
  },
  application:
    "Portfolio reporting has the same structure, because the pack is written by the person it evaluates. Routes around it are cheap: a standing conversation with a non-founder executive, churn reasons read as free text rather than as a rate, and one customer call a quarter arranged without help. None of this amounts to distrust of a founder. It acknowledges that any single channel is filtered by whoever maintains it.",
  models: ["wysiati", "silent-evidence", "feedback-loops", "checklist"],
  connections: [
    { to: "cinc-fear", type: "extends" },
    { to: "cinc-postmortems", type: "reinforces" },
    { to: "tbs-silent-evidence", type: "related" },
    { to: "tfs-wysiati", type: "reinforces" },
    { to: "antidotes", type: "related" }
  ],
  quote: null
},

{
  id: "cinc-postmortems", num: 6, book_id: "cinc", category: "learning",
  title: "Why Teams Resist Postmortems",
  thesis: "Teams avoid postmortems for predictable reasons, so the meeting has to be structured rather than requested.",
  reading_time: 2,
  explanation: [
    "Catmull lists the resistance plainly. People do not want to revisit a project they have finished, the successful ones appear to have nothing to examine, the difficult ones are painful to reopen, and everybody believes they already know what happened. The last belief does the most damage, because the private conclusions people drew during a project are exactly the material a postmortem exists to compare and correct.",
    "His remedies are procedural. Vary the format so the meeting cannot be performed from memory, require both the things worth repeating and the things not worth repeating in equal number, and assemble data beforehand so that discussion starts from a record rather than from recollection. Structure does the work that goodwill will not do reliably, particularly on a project everyone would prefer to leave behind.",
    "The strongest argument for holding them is timing. The period just after completion is the only time when the information is both still available and safe to discuss. Six months later the details have gone and the story has settled into a version that flatters everyone involved. Postmortems are cheap, and they are how a group learns something it did not already believe."
  ],
  practical: {
    label: "Example: running a postmortem people use",
    lead: "Change the format each time, assemble the data first, and require an equal count of both lists.",
    bullets: [
      "What do we want to repeat, and what do we not?",
      "Which of our beliefs about this project did the data contradict?",
      "What did people conclude privately during the work and never say?",
      "Is this format different enough that answers cannot be recycled?",
      "What decision will be made differently because of this session?"
    ]
  },
  application:
    "Funds hold these on losses and rarely on wins or on passes, which repeats the selection error a postmortem exists to correct. The more useful version examines a good outcome for the parts that were luck, and revisits three passed deals against what has happened since. Both are uncomfortable in the way Catmull describes, and both produce information that the memo written at the time cannot contain.",
  models: ["resulting", "decision-quality", "checklist", "confirmation-bias"],
  connections: [
    { to: "cinc-hidden-problems", type: "extends" },
    { to: "cinc-cost-of-failure", type: "related" },
    { to: "tib-resulting", type: "reinforces" },
    { to: "learning-from-mistakes", type: "reinforces" },
    { to: "tfs-premortem", type: "contrasts" }
  ],
  quote: null
},

{
  id: "cinc-cost-of-failure", num: 7, book_id: "cinc", category: "leadership",
  title: "Lower the Cost of Failure",
  thesis: "Eliminating failure is not the goal. Making failure cheap enough to learn from is.",
  reading_time: 3,
  explanation: [
    "Catmull's position is that managers who treat failure as avoidable get an organisation that avoids the attempts instead. Original work cannot be specified in advance, so failures are the mechanism by which its shape gets discovered, and a policy of preventing them prevents the discovery as well. The variable worth managing is not the frequency of failure but its cost, and cost is something a manager can change.",
    "Lowering cost is concrete work. It means finding out earlier, while a project has consumed less, by testing the risky assumption before the convenient one. It means keeping first attempts small and reversible. And it means separating a failure from the person, so that a failed attempt does not become a fact about somebody's record which they then spend a year defending in every meeting.",
    "The distinction Catmull holds is between failure that produces information and failure that repeats itself. The first is the price of doing anything new and should be routine and unremarkable. The second is evidence that the postmortem did not happen or was not used. Treating both the same way, in either direction, is how organisations become either paralysed or careless."
  ],
  practical: {
    label: "Example: making failure cheap",
    lead: "Test the assumption most likely to be wrong first, at the smallest scale that would settle it.",
    bullets: [
      "Which assumption here would be most expensive to be wrong about?",
      "What is the smallest version of this that would tell us?",
      "How early would we find out that this is not working?",
      "Is this a new failure or one we have had before?",
      "Does anyone here carry a past failure as a permanent mark?"
    ]
  },
  application:
    "This is the substance behind asking a company how it runs experiments. A team that tests its pricing assumption in six weeks with two customers has lowered the cost of being wrong, and one that spends a year building before finding out has not, whatever its stated appetite for risk. Inside a fund the analogue is a small first cheque written to establish something specific, with the question defined before the money leaves.",
  models: ["probability", "optionality", "validated-learning", "second-order"],
  connections: [
    { to: "cinc-ugly-babies", type: "reinforces" },
    { to: "cinc-postmortems", type: "related" },
    { to: "tbs-convexity", type: "related" },
    { to: "tib-bets", type: "related" },
    { to: "avoiding-ruin", type: "reinforces" }
  ],
  quote: null
},

{
  id: "cinc-studio-and-film", num: 8, book_id: "cinc", category: "leadership",
  title: "The Studio and the Film",
  thesis: "The organisation outlives any project, and the project will consume the organisation if allowed to.",
  reading_time: 2,
  explanation: [
    "Catmull's stated priority is the studio over any individual film, and he treats the tension between them as permanent rather than as something to be solved once. A film in trouble will absorb any quantity of the studio's people, attention and goodwill, and each transfer is defensible on its own terms, because the film is the visible thing with a release date attached to it.",
    "The organisation's claims are quieter. Training, hiring, technical investment and the recovery time of people who have just finished something difficult have no deadline and no advocate in the room. A studio managed by responding to whichever film is loudest will deliver that film and then arrive at the next one with a depleted set of people and no capability it did not already have.",
    "Holding the balance means protecting specific things in advance rather than exercising judgement in the moment. Catmull's version includes deliberate investment in tools and technique between films, limits on how much of the organisation any one project may draw, and an explicit view that the current release is one output of a durable capability rather than the purpose of the place."
  ],
  practical: {
    label: "Example: protecting the organisation",
    lead: "Name what the current project is not allowed to consume, and decide it before the project is late.",
    bullets: [
      "What is this project drawing that will not come back?",
      "Which investments here have been deferred more than twice?",
      "Who has finished three hard projects without a recovery period?",
      "What capability will we have next year that we lack now?",
      "Is any single project able to consume everything if it slips?"
    ]
  },
  application:
    "The same tension runs through a scaling portfolio company, where the current release absorbs the hiring, the platform work and the founder's attention. It runs through a fund as well, since the deal in front of the committee always has a date and the firm's own capability never does. Asking what this quarter is borrowing from next year, and requiring a specific answer, is the practical form of Catmull's priority.",
  models: ["durability", "capital-allocation", "opportunity-cost", "second-order"],
  connections: [
    { to: "cinc-candour-not-honesty", type: "related" },
    { to: "cinc-cost-of-failure", type: "extends" },
    { to: "tos-capital-allocation", type: "related" },
    { to: "long-term-thinking", type: "reinforces" },
    { to: "cap-organisational-excellence", type: "reinforces" }
  ],
  quote: null
}

);
