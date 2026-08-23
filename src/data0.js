/* ============================================================
   Latticework — content store
   Shape mirrors the relational schema in the build spec:
   books, ideas, mental_models, idea_mental_models,
   connections, quotes, user_ideas (runtime).
   ============================================================ */

window.DB = {
  meta: {
    app: "Latticework",
    tagline: "Get more from what you read",
    build: "V1 prototype",
    content_note:
      "Idea explanations are original explanatory writing, not reproductions of the source text. Quotations are short, attributed, and included only where the wording could be verified. Where it could not, the quote is flagged as unavailable rather than invented."
  },

  shelves: [
    { id: "investing", name: "Investing & Valuation" },
    { id: "venture", name: "Venture & Startups" },
    { id: "strategy", name: "Strategy & Competition" },
    { id: "judgement", name: "Judgement & Psychology" },
    { id: "economics", name: "Economics & Institutions" },
    { id: "history", name: "History & Power" },
    { id: "lives", name: "Lives & Performance" }
  ],

  books: [
    {
      id: "pca",
      shelf: "investing",
      title: "Poor Charlie's Almanack",
      author: "Charlie Munger",
      description:
        "A collection of Charlie Munger's thinking on mental models, investing, psychology, business and developing better judgement.",
      big_idea:
        "Develop a broad latticework of mental models, understand human psychology and systematically avoid obvious mistakes.",
      cover: { hue: 42, letter: "P" },
      categories: ["Mental models", "Psychology", "Investing"],
      status: "published",
      created_at: "2026-01-04"
    },
    {
      id: "tfs",
      shelf: "judgement",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      description:
        "The two systems that drive the way we think, and the biases that follow from the fast one.",
      big_idea:
        "Most of your thinking is fast, automatic and confident. Judgement improves not by trying harder but by building procedures that engage the slow system before the answer arrives.",
      cover: { hue: 212, letter: "T" },
      categories: ["Psychology", "Decision-making"],
      status: "published",
      created_at: "2026-02-11"
    },
    {
      id: "zto",
      shelf: "venture",
      title: "Zero to One",
      author: "Peter Thiel",
      description:
        "Notes on startups, and on building something genuinely new rather than copying what already works.",
      big_idea:
        "Competition destroys profit, so the goal is to escape it: build something new, own a small market first, and hold the position long enough for the value to compound.",
      cover: { hue: 12, letter: "Z" },
      categories: ["Strategy", "Startups", "Investing"],
      status: "published",
      created_at: "2026-03-02"
    },
    {
      id: "tii",
      shelf: "investing",
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      description:
        "The founding text of value investing: price versus value, the discipline of a margin of safety, and the investor's own behaviour as the main risk.",
      big_idea:
        "A business has a value independent of its price. Buy at a discount to a conservative estimate of that value, and manage yourself, because you are the largest variable.",
      cover: { hue: 344, letter: "I" },
      categories: ["Investing", "Valuation", "Temperament"],
      status: "published",
      created_at: "2026-04-19"
    },
    {
      id: "tib",
      shelf: "judgement",
      title: "Thinking in Bets",
      author: "Annie Duke",
      description:
        "A poker player's account of deciding well under uncertainty, and of separating the quality of a decision from the quality of its outcome.",
      big_idea:
        "Every decision is a bet on an uncertain future. Judge the bet, not the result, and build the group and the rules that keep you honest about the difference.",
      cover: { hue: 158, letter: "B" },
      categories: ["Decision-making", "Psychology", "Process"],
      status: "published",
      created_at: "2026-06-08"
    },
    {
      id: "pcs",
      shelf: "strategy",
      title: "Competitive Strategy",
      author: "Michael E. Porter",
      description:
        "The structural analysis of industries: why some are profitable and some are not, and the small number of coherent positions available within them.",
      big_idea:
        "Profitability is set by industry structure before it is set by execution. Understand the five forces acting on an industry, then take one coherent position rather than several partial ones.",
      cover: { hue: 28, letter: "C" },
      categories: ["Strategy", "Industry analysis"],
      status: "published",
      created_at: "2026-06-22"
    },
    {
      id: "tpl",
      shelf: "venture",
      title: "The Power Law",
      author: "Sebastian Mallaby",
      description:
        "A history of venture capital, and of the returns structure that shapes how the industry behaves.",
      big_idea:
        "Venture returns follow a power law, and almost everything distinctive about how the industry invests, governs and fails follows from that single fact.",
      cover: { hue: 276, letter: "L" },
      categories: ["Investing", "Venture capital", "History"],
      status: "published",
      created_at: "2026-07-01"
    },
    {
      id: "csup",
      shelf: "investing",
      title: "Common Stocks and Uncommon Profits",
      author: "Philip Fisher",
      description:
        "The case for buying a small number of genuinely superior growth businesses, and the primary research method for finding them.",
      big_idea:
        "Find a few outstanding companies through primary research into the people and the product, buy them, and hold while the reasons for owning them remain intact.",
      cover: { hue: 92, letter: "U" },
      categories: ["Investing", "Research", "Quality"],
      status: "published",
      created_at: "2026-07-08"
    },
    {
      id: "tmit",
      shelf: "investing",
      title: "The Most Important Thing",
      author: "Howard Marks",
      description:
        "A practitioner's account of thinking about risk, cycles and price, written for people who have to act rather than forecast.",
      big_idea:
        "You cannot predict, but you can prepare. Superior results come from second-level thinking about what is already in the price, and from treating risk as the probability of permanent loss.",
      cover: { hue: 196, letter: "M" },
      categories: ["Investing", "Risk", "Cycles"],
      status: "published",
      created_at: "2026-07-15"
    },
    {
      id: "tos",
      shelf: "investing",
      title: "The Outsiders",
      author: "William N. Thorndike",
      description:
        "Eight chief executives who produced extraordinary shareholder returns, and the capital allocation discipline they shared.",
      big_idea:
        "Over long periods, how a chief executive allocates capital matters more than operating skill, and the best allocators looked eccentric at the time.",
      cover: { hue: 234, letter: "O" },
      categories: ["Investing", "Capital allocation", "Leadership"],
      status: "published",
      created_at: "2026-07-22"
    },
    {
      id: "s7p",
      shelf: "strategy",
      title: "7 Powers",
      author: "Hamilton Helmer",
      description:
        "A precise taxonomy of competitive advantage: the seven conditions under which a business can hold persistent differential returns.",
      big_idea:
        "Power requires both a benefit and a barrier, and there are only seven kinds. Naming which one you have, or do not, is the whole of strategy.",
      cover: { hue: 318, letter: "7" },
      categories: ["Strategy", "Moats", "Investing"],
      status: "published",
      created_at: "2026-07-29"
    },
    {
      id: "fsh",
      shelf: "investing",
      title: "Financial Shenanigans",
      author: "Howard Schilit",
      description:
        "A forensic manual for detecting the ways reported earnings, cash flow and key metrics get manipulated.",
      big_idea:
        "Accounting is a set of judgements made by people who are paid on the result. Learn the standard manipulations and where each one leaves a trace.",
      cover: { hue: 56, letter: "F" },
      categories: ["Accounting", "Forensics", "Investing"],
      status: "published",
      created_at: "2026-08-05"
    },
    {
      id: "fbr",
      shelf: "judgement",
      title: "Fooled by Randomness",
      author: "Nassim Nicholas Taleb",
      description:
        "On the hidden role of chance in markets and in life, and on why we systematically mistake luck for skill.",
      big_idea:
        "Track records are drawn from one realised path among many possible ones. Judge decisions against the distribution of worlds that could have happened, not the one that did.",
      cover: { hue: 182, letter: "R" },
      categories: ["Probability", "Decision-making", "Markets"],
      status: "published",
      created_at: "2026-08-12"
    },
    {
      id: "tbs",
      shelf: "judgement",
      title: "The Black Swan",
      author: "Nassim Nicholas Taleb",
      description:
        "On the disproportionate impact of rare, unpredictable events, and the stories we tell afterwards to make them look inevitable.",
      big_idea:
        "In domains with fat tails, a single unforeseeable event dominates the total. Build for robustness to what you cannot forecast rather than accuracy about what you can.",
      cover: { hue: 250, letter: "S" },
      categories: ["Probability", "Risk", "Epistemology"],
      status: "published",
      created_at: "2026-08-14"
    },
    {
      id: "pom",
      shelf: "judgement",
      title: "The Psychology of Money",
      author: "Morgan Housel",
      description:
        "Short essays on the behavioural side of money: why sensible people do strange things with it, and what actually compounds.",
      big_idea:
        "Doing well with money has little to do with intelligence and much to do with behaviour: room for error, a definition of enough, and not interrupting the compounding.",
      cover: { hue: 128, letter: "H" },
      categories: ["Behaviour", "Investing", "Money"],
      status: "published",
      created_at: "2026-08-18"
    },
    {
      id: "ewb",
      shelf: "investing",
      title: "The Essays of Warren Buffett",
      author: "Warren Buffett, edited by Lawrence Cunningham",
      description:
        "Buffett's shareholder letters arranged by subject: governance, finance, accounting, valuation and the economics of a business.",
      big_idea:
        "Think like an owner of a business rather than a holder of a security, and let the economics of the business, honestly accounted for, drive every decision.",
      cover: { hue: 18, letter: "E" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "sa",
      shelf: "investing",
      title: "Security Analysis",
      author: "Benjamin Graham and David Dodd",
      description:
        "The founding manual of fundamental analysis: how to read a security's economics and establish what it is worth.",
      big_idea:
        "Analysis is the disciplined derivation of value from evidence, and the discipline exists to keep the analyst from being paid for optimism.",
      cover: { hue: 352, letter: "SA" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "mos",
      shelf: "investing",
      title: "Margin of Safety",
      author: "Seth Klarman",
      description:
        "A value investor's account of risk aversion as a strategy rather than a temperament, and of where opportunity actually comes from.",
      big_idea:
        "Avoiding loss comes first. Absolute returns, an honest reckoning with risk, and patience for genuine mispricing beat any attempt to keep up.",
      cover: { hue: 16, letter: "MS" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "twbw",
      shelf: "investing",
      title: "The Warren Buffett Way",
      author: "Robert Hagstrom",
      description:
        "A reconstruction of Buffett's method and how it changed, from Graham's arithmetic to Fisher's and Munger's qualitative judgement.",
      big_idea:
        "The method is a small set of business, management, financial and value tenets applied consistently, and its evolution is as instructive as its content.",
      cover: { hue: 30, letter: "W" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "ouww",
      shelf: "investing",
      title: "One Up on Wall Street",
      author: "Peter Lynch",
      description:
        "The case that an attentive non-professional has real advantages, and a practical taxonomy for sorting companies before valuing them.",
      big_idea:
        "Invest in what you can observe and understand, sort companies by the kind of story they are, and let the earnings do the work.",
      cover: { hue: 74, letter: "OU" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "ycbsmg",
      shelf: "investing",
      title: "You Can Be a Stock Market Genius",
      author: "Joel Greenblatt",
      description:
        "Where mispricing survives: spin-offs, restructurings, merger securities and other corners institutions cannot or will not touch.",
      big_idea:
        "Opportunity concentrates where forced selling meets institutional indifference, and those situations can be analysed rather than guessed.",
      cover: { hue: 298, letter: "G" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "lbbw",
      shelf: "investing",
      title: "The Little Book That Builds Wealth",
      author: "Pat Dorsey",
      description:
        "A practical taxonomy of economic moats: what actually keeps competitors out, and what only looks as though it does.",
      big_idea:
        "There are a small number of real moats. Great products, market share and good execution are not among them.",
      cover: { hue: 118, letter: "BW" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "fr",
      shelf: "investing",
      title: "The Five Rules for Successful Stock Investing",
      author: "Pat Dorsey",
      description:
        "A working framework for assessing business quality, reading the statements and paying a sensible price.",
      big_idea:
        "Do your homework, insist on an economic moat, require a margin of safety, hold for the long term, and know when to sell.",
      cover: { hue: 140, letter: "5" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "tic",
      shelf: "investing",
      title: "The Investment Checklist",
      author: "Michael Shearn",
      description:
        "A structured diligence process: the questions to ask about a business, its customers and its management, every time.",
      big_idea:
        "A repeatable checklist converts research from a series of impressions into a process that can be reviewed and improved.",
      cover: { hue: 216, letter: "IC" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "lbv",
      shelf: "investing",
      title: "The Little Book of Valuation",
      author: "Aswath Damodaran",
      description:
        "Valuation stripped to its working parts: cash flows, growth, risk and the assumptions doing the real work.",
      big_idea:
        "Every valuation is a story disciplined by numbers. Know which few inputs decide the answer and be honest about them.",
      cover: { hue: 204, letter: "LV" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "mck",
      shelf: "investing",
      title: "Valuation",
      author: "McKinsey & Company",
      description:
        "The professional standard for corporate valuation: discounted cash flow, multiples, and the drivers of value creation.",
      big_idea:
        "Value is created by growth and by returns on invested capital above the cost of capital, and almost nothing else matters as much.",
      cover: { hue: 222, letter: "MK" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "afv",
      shelf: "investing",
      title: "Accounting for Value",
      author: "Stephen Penman",
      description:
        "How to read financial statements as a bridge to intrinsic value, and how to keep speculation out of the numbers.",
      big_idea:
        "Anchor on what the accounting tells you and add speculation only deliberately, so you can see how much of the price is hope.",
      cover: { hue: 264, letter: "AV" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "lbcsi",
      shelf: "investing",
      title: "The Little Book of Common Sense Investing",
      author: "John C. Bogle",
      description:
        "The arithmetic case for owning the whole market at the lowest possible cost.",
      big_idea:
        "Investors as a group receive the market return minus costs, so minimising cost is the one reliable way to improve the result.",
      cover: { hue: 164, letter: "CS" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "cr",
      shelf: "investing",
      title: "Capital Returns",
      author: "Marathon Asset Management, edited by Edward Chancellor",
      description:
        "Investment letters built around the capital cycle: how the flow of capital into and out of an industry drives returns.",
      big_idea:
        "Follow the capital. Where it floods in, returns fall; where it is withdrawn and capacity shrinks, returns recover.",
      cover: { hue: 36, letter: "CR" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "cap",
      shelf: "investing",
      title: "Capital: The Story of Long-Term Investment Excellence",
      author: "Charles D. Ellis",
      description:
        "An institutional history of one long-lived investment firm, and of the culture and structure that let it compound.",
      big_idea:
        "Sustained investment excellence is an organisational achievement as much as an analytical one, built on culture, ownership and time.",
      cover: { hue: 248, letter: "CE" },
      categories: ["Investing"],
      status: "published",
      created_at: "2026-08-25"
    },
    {
      id: "vd",
      shelf: "venture",
      title: "Venture Deals",
      author: "Brad Feld and Jason Mendelson",
      description:
        "What is actually in a term sheet: economics, control, and the mechanics that decide who gets what when the outcome arrives.",
      big_idea:
        "A term sheet is two negotiations wearing one document. Price is the visible one, control and preference are the one that decides outcomes.",
      cover: { hue: 300, letter: "VD" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "sshr",
      shelf: "venture",
      title: "Secrets of Sand Hill Road",
      author: "Scott Kupor",
      description:
        "How a venture firm actually works from the inside: why it invests as it does, and what the fund structure forces.",
      big_idea:
        "Venture behaviour follows from fund structure and the power law. Understand the incentives of the fund and the firm's decisions stop looking arbitrary.",
      cover: { hue: 258, letter: "SH" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "bvc",
      shelf: "venture",
      title: "The Business of Venture Capital",
      author: "Mahendra Ramsinghani",
      description:
        "Venture as a business: raising a fund, constructing a portfolio, managing reserves, and the relationship between the people with the money and the people investing it.",
      big_idea:
        "A venture firm is itself an enterprise with its own economics, and fund mechanics shape every investment decision made inside it.",
      cover: { hue: 208, letter: "BV" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "mvcg",
      shelf: "venture",
      title: "Mastering the VC Game",
      author: "Jeffrey Bussgang",
      description:
        "The founder's side of the table: how investors decide, what they are optimising for, and how to work with them once the money is in.",
      big_idea:
        "The investor relationship is a long-running negotiation between people with overlapping but not identical interests, and it is better managed explicitly.",
      cover: { hue: 174, letter: "VG" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "ctc",
      shelf: "venture",
      title: "Crossing the Chasm",
      author: "Geoffrey A. Moore",
      description:
        "Why technology products stall between early enthusiasts and mainstream buyers, and what it takes to get across.",
      big_idea:
        "Early adopters and pragmatists buy for incompatible reasons. Crossing between them requires dominating one narrow segment first, not selling harder.",
      cover: { hue: 74, letter: "CC" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "csp",
      shelf: "venture",
      title: "The Cold Start Problem",
      author: "Andrew Chen",
      description:
        "How network products get started, why most fail before they begin, and how network effects behave once they are running.",
      big_idea:
        "Networks do not launch, they are assembled one small self-sufficient network at a time, and each stage of growth has a different binding constraint.",
      cover: { hue: 288, letter: "CP" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "tls",
      shelf: "venture",
      title: "The Lean Startup",
      author: "Eric Ries",
      description:
        "Building under extreme uncertainty: running the company as a series of experiments rather than the execution of a plan.",
      big_idea:
        "A startup is an organisation searching for a business model. Progress is what you have learned that is validated, not what you have shipped.",
      cover: { hue: 148, letter: "LS" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "htht",
      shelf: "venture",
      title: "The Hard Thing About Hard Things",
      author: "Ben Horowitz",
      description:
        "The parts of running a company that no framework covers: layoffs, demotions, wartime decisions and the psychology of the person in charge.",
      big_idea:
        "There is no recipe for the hard decisions. What can be built is the candour, the structures and the temperament to keep making them.",
      cover: { hue: 4, letter: "HH" },
      categories: ["Venture capital"],
      status: "published",
      created_at: "2026-09-01"
    },
    {
      id: "cd",
      shelf: "strategy",
      title: "Competition Demystified",
      author: "Bruce Greenwald and Judd Kahn",
      description:
        "A stripped-down approach to competitive strategy: barriers to entry are the only structural question that matters, and most industries have none.",
      big_idea:
        "Competitive advantage means incumbents can do what entrants cannot. Without a barrier to entry there is no strategy problem, only an operations problem.",
      cover: { hue: 32, letter: "CD" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "tid",
      shelf: "strategy",
      title: "The Innovator's Dilemma",
      author: "Clayton M. Christensen",
      description:
        "Why well-run companies lose to inferior products: the same disciplines that make them successful prevent them from responding.",
      big_idea:
        "Disruption is not a failure of management but a consequence of good management applied to the wrong customers and the wrong margins.",
      cover: { hue: 226, letter: "ID" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "gsbs",
      shelf: "strategy",
      title: "Good Strategy Bad Strategy",
      author: "Richard P. Rumelt",
      description:
        "What strategy actually is, and why most documents carrying the label contain no strategy at all.",
      big_idea:
        "Strategy is a diagnosis, a guiding policy and coherent action. Goals, ambitions and lists of priorities are none of those things.",
      cover: { hue: 340, letter: "GS" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "otps",
      shelf: "strategy",
      title: "Only the Paranoid Survive",
      author: "Andrew S. Grove",
      description:
        "Strategic inflection points: how to recognise a change in the fundamentals of your business while there is still time to act.",
      big_idea:
        "When the fundamentals shift, the old strategy stops working and the signal arrives first from the edges of the organisation, not the top.",
      cover: { hue: 100, letter: "OP" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "pr",
      shelf: "strategy",
      title: "Platform Revolution",
      author: "Geoffrey Parker, Marshall Van Alstyne and Sangeet Paul Choudary",
      description:
        "The economics of multi-sided markets: how platforms create value, capture it, and beat linear businesses.",
      big_idea:
        "Platforms compete on the value of interactions they enable rather than on what they produce, which changes governance, pricing and the shape of the moat.",
      cover: { hue: 268, letter: "PV" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "goal",
      shelf: "strategy",
      title: "The Goal",
      author: "Eliyahu M. Goldratt",
      description:
        "A novel about a factory that teaches the theory of constraints: throughput, bottlenecks and why local efficiency destroys system performance.",
      big_idea:
        "Every system is limited by one constraint at a time. Improving anything else looks like progress and changes nothing.",
      cover: { hue: 50, letter: "GO" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "halo",
      shelf: "strategy",
      title: "The Halo Effect",
      author: "Phil Rosenzweig",
      description:
        "Why business books and case studies mislead: performance colours the assessment of everything that produced it.",
      big_idea:
        "Most claims about what makes companies succeed are attributions made after the result was known, and the evidence is contaminated by the outcome.",
      cover: { hue: 190, letter: "HE" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "cinc",
      shelf: "strategy",
      title: "Creativity, Inc.",
      author: "Ed Catmull",
      description:
        "Building an organisation that can keep producing original work, and the specific mechanisms that protect candour.",
      big_idea:
        "Creative output depends on a culture where problems surface early, which has to be engineered against the natural incentives to hide them.",
      cover: { hue: 316, letter: "CI" },
      categories: ["Strategy"],
      status: "published",
      created_at: "2026-09-08"
    },
    {
      id: "atg",
      shelf: "judgement",
      title: "Against the Gods",
      author: "Peter L. Bernstein",
      description:
        "A history of risk: how humanity moved from fate and superstition to probability, measurement and the tools that let us price uncertainty.",
      big_idea:
        "The ability to measure and manage risk, not the elimination of it, is what separates the modern world from everything before it.",
      cover: { hue: 202, letter: "AG" },
      categories: ["Psychology", "Risk", "History"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "inf",
      shelf: "judgement",
      title: "Influence",
      author: "Robert B. Cialdini",
      description:
        "The psychology of persuasion: the small number of levers that reliably move people to comply, and why each one works.",
      big_idea:
        "Compliance is mostly automatic. A handful of triggers, once activated, produce a yes with almost no deliberation involved.",
      cover: { hue: 18, letter: "IN" },
      categories: ["Psychology", "Persuasion"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "sw",
      shelf: "judgement",
      title: "Seeking Wisdom",
      author: "Peter Bevelin",
      description:
        "A synthesis of psychology, physiology and decision-making failures, drawing heavily on Munger, aimed at recognising your own errors before you make them.",
      big_idea:
        "Most avoidable mistakes come from a short list of recurring misjudgements, and knowing the list in advance is the only real defence.",
      cover: { hue: 152, letter: "SW" },
      categories: ["Psychology", "Decision-making"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "rwh",
      shelf: "judgement",
      title: "Richer, Wiser, Happier",
      author: "William Green",
      description:
        "Profiles of investors who compounded not just capital but judgement and temperament, and what their approaches share underneath very different styles.",
      big_idea:
        "The best investors are not distinguished chiefly by intelligence but by a temperament built for patience, humility and independent thought.",
      cover: { hue: 8, letter: "RH" },
      categories: ["Investing", "Temperament", "Psychology"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "caf",
      shelf: "economics",
      title: "Capitalism and Freedom",
      author: "Milton Friedman",
      description:
        "The case for free markets as a precondition for political liberty, and a catalogue of the specific ways government intervention undermines both.",
      big_idea:
        "Economic freedom is not just efficient. It is a necessary, separate check on concentrated political power.",
      cover: { hue: 234, letter: "CF" },
      categories: ["Economics", "Policy"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "wnf",
      shelf: "economics",
      title: "Why Nations Fail",
      author: "Daron Acemoglu and James A. Robinson",
      description:
        "Why some countries grow rich and stay rich while neighbours with similar geography and culture stay poor: institutions, not resources or climate, decide it.",
      big_idea:
        "Inclusive institutions that broaden who can participate in markets and politics produce durable growth. Extractive ones can produce growth too, but never for long.",
      cover: { hue: 96, letter: "WF" },
      categories: ["Economics", "Institutions", "History"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "won",
      shelf: "economics",
      title: "The Wealth of Nations",
      author: "Adam Smith",
      description:
        "The foundational text of market economics: the division of labour, the price mechanism, and self-interest coordinated into public benefit without central design.",
      big_idea:
        "A butcher, a brewer and a baker each pursuing their own interest, disciplined by competition, provision for the public better than intending to do so ever could.",
      cover: { hue: 322, letter: "WN" },
      categories: ["Economics", "Markets"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "gt",
      shelf: "economics",
      title: "The General Theory of Employment, Interest and Money",
      author: "John Maynard Keynes",
      description:
        "Why market economies can settle into prolonged unemployment rather than self-correct, and the case for demand management to get them out.",
      big_idea:
        "Total spending, not the supply of labour or capital, sets the level of output and employment, and it can rest below full employment for a long time.",
      cover: { hue: 56, letter: "GT" },
      categories: ["Economics", "Macroeconomics"],
      status: "published",
      created_at: "2026-09-09"
    },
    {
      id: "rts",
      shelf: "economics",
      title: "The Road to Serfdom",
      author: "Friedrich A. Hayek",
      description:
        "A warning that central economic planning, however well intentioned, tends toward the concentration of power that planning was meant to avoid.",
      big_idea:
        "No planning committee can gather the scattered knowledge a price system aggregates automatically, so planning defaults to coercion where prices would have sufficed.",
      cover: { hue: 274, letter: "RS" },
      categories: ["Economics", "Institutions", "Policy"],
      status: "published",
      created_at: "2026-09-09"
    },

    {
      id: "sap",
      shelf: "history",
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      description:
        "How shared myths, from religion to money to nations, let strangers cooperate at a scale no other species can manage.",
      big_idea:
        "Homo sapiens took over the planet not through individual strength but through the unique ability to believe in shared fictions, which let millions of strangers cooperate as if they shared one purpose.",
      cover: { hue: 28, letter: "S" },
      categories: ["History", "Anthropology"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "loh",
      shelf: "history",
      title: "The Lessons of History",
      author: "Will and Ariel Durant",
      description:
        "A short, dense distillation of what recurs across recorded history, drawn from the Durants' eleven-volume Story of Civilization.",
      big_idea:
        "Biology, not ideology, is the deepest constant in history: inequality, competition and the concentration of power reassert themselves under every system tried against them.",
      cover: { hue: 200, letter: "LH" },
      categories: ["History", "Philosophy"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "ggs",
      shelf: "history",
      title: "Guns, Germs, and Steel",
      author: "Jared Diamond",
      description:
        "Why some societies came to dominate others, explained by geography and the accidents of which continents got which crops, animals and technologies, not by differences in the people.",
      big_idea:
        "The societies that developed guns, germs and steel first did so because of an accident of geography, which crops and animals happened to be domesticable on which continent, not because of any innate difference between peoples.",
      cover: { hue: 92, letter: "GGS" },
      categories: ["History", "Geography"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "rftr",
      shelf: "history",
      title: "The Rise and Fall of the Third Reich",
      author: "William L. Shirer",
      description:
        "A journalist who covered Nazi Germany firsthand chronicles its rise from a fringe movement to a state that nearly conquered Europe, and its collapse.",
      big_idea:
        "A modern, educated society proved just as capable of organised barbarism as any other once its institutions were captured from within rather than overthrown from without.",
      cover: { hue: 8, letter: "TR" },
      categories: ["History", "Power"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "tsr",
      shelf: "history",
      title: "The Silk Roads: A New History of the World",
      author: "Peter Frankopan",
      description:
        "A history of the world told from the trade routes connecting East and West, arguing the centre of gravity has always sat further east than Western histories admit.",
      big_idea:
        "The corridor of land between the Mediterranean and China, not Western Europe, has been the world's central artery for most of recorded history, and control of it has repeatedly decided who held power.",
      cover: { hue: 40, letter: "SR" },
      categories: ["History", "Geography"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "pog",
      shelf: "history",
      title: "Prisoners of Geography",
      author: "Tim Marshall",
      description:
        "Ten maps that explain why mountains, rivers and coastlines still set hard limits on what any nation's foreign policy can achieve.",
      big_idea:
        "A country's mountains, deserts, rivers and coastlines set boundaries on its foreign policy that no leader, however capable, can talk their way past.",
      cover: { hue: 152, letter: "PG" },
      categories: ["History", "Geography"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "hpw",
      shelf: "history",
      title: "The History of the Peloponnesian War",
      author: "Thucydides",
      description:
        "The Athenian general's contemporary account of the war between Athens and Sparta, read since antiquity as the founding text of realist political thought.",
      big_idea:
        "War came not because either side wanted it but because the fear a rising power's growth created in the established power made conflict close to unavoidable.",
      cover: { hue: 210, letter: "PW" },
      categories: ["History", "Strategy"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "dfre",
      shelf: "history",
      title: "The Decline and Fall of the Roman Empire",
      author: "Edward Gibbon",
      description:
        "The classic account of how the Roman Empire's collapse in the West unfolded over centuries, driven by internal decay as much as external invasion.",
      big_idea:
        "Rome fell less to a single conquering blow than to a long accumulation of internal decay, succession crises and overextension that made the empire unable to absorb shocks it had once shrugged off.",
      cover: { hue: 350, letter: "RE" },
      categories: ["History", "Power"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "pw2",
      shelf: "history",
      title: "Postwar: A History of Europe Since 1945",
      author: "Tony Judt",
      description:
        "How Europe rebuilt itself from the ruins of the Second World War into the continent it is today, across the Iron Curtain and beyond it.",
      big_idea:
        "Europe's postwar stability was not a natural return to normal but a deliberately constructed settlement, and the choices made in reconstructing it still shape the continent's politics today.",
      cover: { hue: 230, letter: "PJ" },
      categories: ["History", "Europe"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "tcw",
      shelf: "history",
      title: "The Cold War: A New History",
      author: "John Lewis Gaddis",
      description:
        "A concise history of the decades-long standoff between the United States and the Soviet Union, and why it stayed cold.",
      big_idea:
        "Two superpowers capable of destroying each other found that nuclear weapons made total war irrational for the first time in history, so the contest was fought everywhere except directly between them.",
      cover: { hue: 356, letter: "CW" },
      categories: ["History", "Strategy"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "cae",
      shelf: "history",
      title: "Caesar: Life of a Colossus",
      author: "Adrian Goldsworthy",
      description:
        "A military and political biography of Julius Caesar, from his rise through Roman politics to his assassination.",
      big_idea:
        "Caesar's success came from combining exceptional personal risk tolerance with a relentless focus on the loyalty of the men and voters immediately beneath him, not from any single masterstroke.",
      cover: { hue: 14, letter: "C" },
      categories: ["History", "Leadership"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "aom",
      shelf: "history",
      title: "Alexander of Macedon 356-323 B.C.",
      author: "Peter Green",
      description:
        "A biography of Alexander the Great that treats his conquests as much a study in ambition and its costs as in military genius.",
      big_idea:
        "Alexander's speed and audacity built an empire faster than any institution could be built to hold it, so it began fragmenting the moment he was no longer there to lead it personally.",
      cover: { hue: 44, letter: "A" },
      categories: ["History", "Leadership"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "gk",
      shelf: "history",
      title: "Genghis Khan: The Man Who Conquered the World",
      author: "John Man",
      description:
        "A biography of the Mongol leader who built the largest contiguous land empire in history from a fractured group of steppe tribes.",
      big_idea:
        "Genghis Khan built the largest land empire in history by promoting on merit and loyalty rather than birth, and by making terror a deliberate, calculated tool rather than a byproduct of war.",
      cover: { hue: 20, letter: "GK" },
      categories: ["History", "Leadership"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "nap",
      shelf: "history",
      title: "Napoleon: A Life",
      author: "Andrew Roberts",
      description:
        "A one-volume biography drawing on newly available letters, arguing Napoleon's reforms outlasted his empire even as his ambition eventually destroyed it.",
      big_idea:
        "Napoleon's civil reforms, in law, administration and education, outlived his empire by centuries, even though the military overreach that built the empire also guaranteed its collapse.",
      cover: { hue: 232, letter: "N" },
      categories: ["History", "Leadership"],
      status: "published",
      created_at: "2026-09-10"
    },
    {
      id: "han",
      shelf: "history",
      title: "Hannibal",
      author: "Patrick N. Hunt",
      description:
        "A biography of the Carthaginian general who crossed the Alps to bring the war to Rome, and came close enough to winning it that Rome never fully trusted its safety again.",
      big_idea:
        "Hannibal won nearly every battle he fought against Rome and still lost the war, because tactical brilliance without the logistics or political base to convert victories into a settlement cannot finish an opponent.",
      cover: { hue: 4, letter: "H" },
      categories: ["History", "Strategy"],
      status: "published",
      created_at: "2026-09-10"
    },

    {
      id: "sd",
      shelf: "lives",
      title: "Shoe Dog",
      author: "Phil Knight",
      description:
        "Nike's founder's own account of the company's chaotic, undercapitalised early years, from importing Japanese running shoes out of the back of a car to a global brand.",
      big_idea:
        "Nike survived its first two decades not because Knight had a plan that worked, but because he kept operating on the edge of insolvency and simply refused to let the company die.",
      cover: { hue: 16, letter: "SD" },
      categories: ["Leadership", "Entrepreneurship"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "mia",
      shelf: "lives",
      title: "Sam Walton: Made in America",
      author: "Sam Walton",
      description:
        "Walmart's founder's own account of building a discount retail chain from a single Arkansas store into the largest retailer in the world.",
      big_idea:
        "Walmart's advantage was built store by store on relentless cost discipline and a willingness to go where competitors thought the market was too small to matter.",
      cover: { hue: 214, letter: "MA" },
      categories: ["Leadership", "Strategy"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "tes",
      shelf: "lives",
      title: "The Everything Store",
      author: "Brad Stone",
      description:
        "An independent account of Amazon and Jeff Bezos, from online bookseller to a company that touches most of the economy.",
      big_idea:
        "Amazon's culture treats customer obsession and long-term thinking as the two inputs that justify sustained short-term losses other companies could never survive taking.",
      cover: { hue: 32, letter: "ES" },
      categories: ["Leadership", "Strategy"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "sj",
      shelf: "lives",
      title: "Steve Jobs",
      author: "Walter Isaacson",
      description:
        "The authorised biography of Apple's co-founder, drawing on extensive access and interviews across his career, exile and return.",
      big_idea:
        "Jobs's obsessive control over the intersection of technology and design, and his willingness to be genuinely difficult in pursuit of it, produced products no consensus-driven process would have shipped.",
      cover: { hue: 0, letter: "SJ" },
      categories: ["Leadership", "Performance"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "tit",
      shelf: "lives",
      title: "Titan: The Life of John D. Rockefeller, Sr.",
      author: "Ron Chernow",
      description:
        "A biography of Standard Oil's founder, tracing his rise to become the richest man in modern history and the controversies that followed.",
      big_idea:
        "Rockefeller's fortune came from ruthlessly consolidating a fragmented, chaotic industry into an efficient monopoly, and the same instinct that built it eventually provoked the antitrust response that broke it apart.",
      cover: { hue: 46, letter: "T" },
      categories: ["Leadership", "Strategy"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "open",
      shelf: "lives",
      title: "Open",
      author: "Andre Agassi",
      description:
        "The tennis champion's memoir of a career he says he hated for most of it, written with novelist J.R. Moehringer.",
      big_idea:
        "Agassi became one of the best players in history while resenting the sport for most of his career, which is its own case study in performance under a motivation that is not what it looks like from outside.",
      cover: { hue: 190, letter: "O" },
      categories: ["Performance", "Psychology"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "igt",
      shelf: "lives",
      title: "The Inner Game of Tennis",
      author: "W. Timothy Gallwey",
      description:
        "A short, foundational book on the psychology of performance, arguing that the real opponent is the anxious, self-critical voice in your own head.",
      big_idea:
        "Performance improves less from trying harder and more from quieting the anxious, judging voice in your head so your body's own learning process can run uninterrupted.",
      cover: { hue: 130, letter: "IG" },
      categories: ["Performance", "Psychology"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "rel",
      shelf: "lives",
      title: "Relentless",
      author: "Tim Grover",
      description:
        "A performance coach who worked with Michael Jordan, Kobe Bryant and Dwyane Wade on what separates the merely great from the ones who dominate.",
      big_idea:
        "The difference between good, great and unstoppable competitors is not talent but an obsessive, self-generated will to dominate that does not need outside approval to sustain itself.",
      cover: { hue: 350, letter: "R" },
      categories: ["Performance", "Leadership"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "sb",
      shelf: "lives",
      title: "Seabiscuit",
      author: "Laura Hillenbrand",
      description:
        "The true story of an unlikely champion racehorse, and the jockey, trainer and owner who rebuilt each other alongside him.",
      big_idea:
        "An undersized, badly-trained horse became a champion once paired with people willing to see and develop the ability that conventional judgement had already written off.",
      cover: { hue: 26, letter: "SB" },
      categories: ["Performance", "People"],
      status: "published",
      created_at: "2026-09-11"
    },
    {
      id: "chm",
      shelf: "lives",
      title: "Can't Hurt Me",
      author: "David Goggins",
      description:
        "A former Navy SEAL's account of rebuilding himself from an overweight, abused childhood into an ultra-endurance athlete through self-imposed extreme discipline.",
      big_idea:
        "Most people stop at roughly forty percent of their actual capacity, and the gap between that point and their real limit is closed by deliberately choosing discomfort rather than avoiding it.",
      cover: { hue: 0, letter: "CH" },
      categories: ["Performance", "Psychology"],
      status: "published",
      created_at: "2026-09-11"
    }
  ],

  mental_models: [
    { id: "inversion", name: "Inversion", definition: "Approach a problem backwards. Instead of asking how to reach the outcome you want, ask what would reliably produce the outcome you must avoid." },
    { id: "incentives", name: "Incentives", definition: "Behaviour follows reward and constraint. To predict what a person or institution will do, look at what they are paid and punished for." },
    { id: "compounding", name: "Compounding", definition: "A small advantage applied repeatedly over a long period produces results far larger than intuition suggests." },
    { id: "opportunity-cost", name: "Opportunity Cost", definition: "The true cost of any choice is the best alternative you gave up to make it, not the cash you spent." },
    { id: "margin-of-safety", name: "Margin of Safety", definition: "Build in a buffer between what you expect and what you can survive, because estimates are wrong in both directions." },
    { id: "circle-of-competence", name: "Circle of Competence", definition: "The set of things you genuinely understand. Value comes less from expanding it than from knowing precisely where its edge sits." },
    { id: "second-order", name: "Second-Order Effects", definition: "Consequences have consequences. The first effect is usually obvious and the later ones usually matter more." },
    { id: "probability", name: "Probability", definition: "Most decisions are bets on uncertain outcomes. Thinking in distributions and odds beats thinking in single predictions." },
    { id: "base-rates", name: "Base Rates", definition: "Start from how often this kind of thing works out generally, then adjust for the specifics in front of you." },
    { id: "social-proof", name: "Social Proof", definition: "People take the behaviour of others as evidence about what is correct, particularly under uncertainty." },
    { id: "confirmation-bias", name: "Confirmation Bias", definition: "Once a view is formed the mind favours evidence that supports it and discounts evidence that does not." },
    { id: "anchoring", name: "Anchoring", definition: "An initial number or reference point pulls subsequent judgements toward it, even when it is arbitrary." },
    { id: "regression", name: "Regression to the Mean", definition: "Extreme results contain luck, and luck does not persist, so extremes tend to be followed by something more ordinary." },
    { id: "survivorship", name: "Survivorship Bias", definition: "You see the survivors. The failures are missing from the sample, which makes success look more likely and more explicable than it was." },
    { id: "feedback-loops", name: "Feedback Loops", definition: "Outputs feed back into inputs. Reinforcing loops accelerate a system; balancing loops hold it in place." },
    { id: "scale-economies", name: "Scale Economies", definition: "Some costs and advantages fall or rise per unit as size increases, which changes who can compete and on what terms." },
    { id: "critical-mass", name: "Critical Mass", definition: "Some systems do nothing until a threshold is crossed, then change state quickly." },
    { id: "specialisation", name: "Specialisation", definition: "Concentrating effort in a narrow area produces a depth of skill that generalists cannot match within it." },
    { id: "loss-aversion", name: "Loss Aversion", definition: "Losing something is felt more sharply than gaining the same thing, which distorts choices around risk and ownership." },
    { id: "authority-bias", name: "Authority Bias", definition: "People defer to perceived authority, sometimes past the point where the authority is competent or correct." },
    { id: "dual-process", name: "Dual Process Thinking", definition: "Two modes of thought operate together: one fast, automatic and always on, the other slow, effortful and easily skipped." },
    { id: "wysiati", name: "What You See Is All There Is", definition: "The mind builds confident conclusions from available information and has no mechanism for registering what is missing." },
    { id: "planning-fallacy", name: "Planning Fallacy", definition: "Plans are built by imagining success, so estimates of cost and time cluster near the best possible case." },
    { id: "narrow-framing", name: "Narrow Framing", definition: "Decisions considered one at a time attract full loss aversion each time, producing an aggregate far more cautious than intended." },
    { id: "endowment", name: "Endowment Effect", definition: "Ownership raises an item's value to its holder, so selling prices exceed the prices the same person would pay to buy." },
    { id: "monopoly", name: "Monopoly", definition: "A defensible position as the only good provider of something specific, which is where economic profit comes from." },
    { id: "power-law", name: "Power Law", definition: "Outcomes are extremely unevenly distributed: the best result can exceed the sum of all the others." },
    { id: "durability", name: "Durability", definition: "Whether a position still generates cash many years out, which is where most of a company's value sits." },
    { id: "distribution", name: "Distribution", definition: "The route to customers. A better product with no viable route loses to a worse one that has one." },
    { id: "contrarian", name: "Contrarian Thinking", definition: "Holding a view because you reached it yourself, which sometimes means disagreeing with consensus and never means reflexively opposing it." },
    { id: "mr-market", name: "Mr Market", definition: "A quoted price is an offer from a moody counterparty, not information about value. You are never obliged to accept it." },
    { id: "intrinsic-value", name: "Intrinsic Value", definition: "What a business is worth on its assets, earnings and prospects, estimated as a range rather than a number." },
    { id: "diversification", name: "Diversification", definition: "Spreading exposure so that being wrong on any one position is survivable, at the cost of diluting being right." },
    { id: "resulting", name: "Resulting", definition: "Judging the quality of a decision by the quality of its outcome, ignoring the contribution of chance." },
    { id: "decision-quality", name: "Decision Quality", definition: "The standard a decision is judged against: the process and information available at the time, separate from how it turned out." },
    { id: "five-forces", name: "Five Forces", definition: "Industry profitability is set by five structural forces: rivalry, entry, substitutes, buyer power and supplier power." },
    { id: "value-chain", name: "Value Chain", definition: "A business is a chain of discrete activities. Advantage comes from performing specific activities differently or better." },
    { id: "generic-strategy", name: "Generic Strategy", definition: "Three coherent positions are available: cost leadership, differentiation, or focus on a narrow segment. Mixing them dissipates advantage." },
    { id: "barriers-to-entry", name: "Barriers to Entry", definition: "The costs and obstacles a new competitor must absorb to compete, which determine how long returns can persist." },
    { id: "switching-costs", name: "Switching Costs", definition: "The loss a customer would take by moving to an alternative, which lets an incumbent charge more than a newcomer." },
    { id: "network-economies", name: "Network Economies", definition: "The product becomes more valuable to each user as more users join, so the leader's advantage widens with scale." },
    { id: "counter-positioning", name: "Counter-Positioning", definition: "A new model the incumbent declines to copy because copying would damage its existing business more than losing the new market." },
    { id: "cornered-resource", name: "Cornered Resource", definition: "Preferential access to a valuable asset on terms others cannot obtain: a patent, a deposit, a key person, a licence." },
    { id: "process-power", name: "Process Power", definition: "Embedded organisational routines that raise quality or lower cost, and that competitors cannot copy quickly even when they are visible." },
    { id: "branding", name: "Branding", definition: "Durable association that makes a customer pay more for an identical good, built by consistency over long periods." },
    { id: "capital-allocation", name: "Capital Allocation", definition: "How cash is deployed between reinvestment, acquisition, debt and returns of capital. Over long periods it dominates operating skill." },
    { id: "second-level-thinking", name: "Second-Level Thinking", definition: "Reasoning about what is already priced in and where the consensus is wrong, rather than about whether something is good." },
    { id: "market-cycles", name: "Market Cycles", definition: "Prices and sentiment oscillate rather than trend. Position depends on where in the cycle you are, not on a forecast of the next move." },
    { id: "risk-not-volatility", name: "Risk Is Not Volatility", definition: "Risk is the probability of permanent loss. Price variability is a poor and sometimes inverted proxy for it." },
    { id: "fat-tails", name: "Fat Tails", definition: "In some domains a single observation can dominate the total, so averages and standard deviations mislead." },
    { id: "narrative-fallacy", name: "Narrative Fallacy", definition: "We compress the past into causal stories, which makes it look more predictable than it was and the future more forecastable than it is." },
    { id: "alternative-histories", name: "Alternative Histories", definition: "Judge a decision by the range of worlds that could have happened, not only by the one that did." },
    { id: "silent-evidence", name: "Silent Evidence", definition: "The record is written by what survived. The absent cases are systematically missing from any observed sample." },
    { id: "optionality", name: "Optionality", definition: "Positions with capped loss and open-ended gain, which pay off from variance rather than from prediction." },
    { id: "scuttlebutt", name: "Scuttlebutt", definition: "Building a view from primary conversations around a business: customers, competitors, suppliers, former staff." },
    { id: "enough", name: "Enough", definition: "Defining a sufficient outcome in advance, so that the pursuit of more does not put the whole result at risk." },
    { id: "accounting-quality", name: "Accounting Quality", definition: "How closely reported figures track economic reality, given the judgement and incentive embedded in every accounting choice." },
    { id: "owner-earnings", name: "Owner Earnings", definition: "Reported profit adjusted for the capital spending genuinely required to hold position, which is what an owner can actually take out." },
    { id: "return-on-capital", name: "Return on Capital", definition: "What the business earns on the money tied up in it, which sets how much growth is worth and whether reinvestment creates value." },
    { id: "cost-of-capital", name: "Cost of Capital", definition: "The return the money could earn elsewhere at similar risk. Value is created only above it and destroyed below it." },
    { id: "free-cash-flow", name: "Free Cash Flow", definition: "Cash left after the spending needed to keep the business running and growing. The only cash an owner can be paid from." },
    { id: "terminal-value", name: "Terminal Value", definition: "The part of a valuation sitting beyond the forecast period, which in growth assets is usually most of the answer." },
    { id: "capital-cycle", name: "The Capital Cycle", definition: "High returns attract capital, capital creates supply, supply destroys returns. Watching where capital is going predicts where returns will not be." },
    { id: "special-situations", name: "Special Situations", definition: "Corporate events such as spin-offs and restructurings that force selling for reasons unconnected to value." },
    { id: "costs-compound", name: "Costs Compound", definition: "Fees and frictions are not annual charges but permanent reductions to the rate at which capital compounds." },
    { id: "checklist", name: "Checklist", definition: "A fixed set of questions asked identically every time, so that judgement is consistent and gaps become visible." },
    { id: "implied-expectations", name: "Implied Expectations", definition: "Rather than forecasting value, work out what the current price requires to be true, then judge whether that is plausible." },
    { id: "float", name: "Float", definition: "Money held and invested before it must be paid out, which funds returns at a cost below the cost of borrowing." },
    { id: "disruption", name: "Disruption", definition: "A cheaper, simpler product takes the bottom of a market the incumbent is happy to lose, then improves upward until the incumbent has nowhere to retreat." },
    { id: "adoption-lifecycle", name: "Technology Adoption Lifecycle", definition: "Adoption runs through distinct groups with incompatible buying reasons, and the gap between early enthusiasts and pragmatists is where products stall." },
    { id: "constraint", name: "The Constraint", definition: "Every system has one binding limit at a time. Improving anything other than the constraint does not improve the system." },
    { id: "strategy-kernel", name: "Strategy Kernel", definition: "A strategy is a diagnosis of the real problem, a guiding policy for dealing with it, and coherent actions that follow. Anything else is a wish." },
    { id: "inflection-point", name: "Strategic Inflection Point", definition: "A change in the fundamentals of a business so large that the old strategy stops working, usually visible first to people far from the top." },
    { id: "multi-sided-market", name: "Multi-sided Market", definition: "A business that creates value by matching two or more distinct groups, where each side's value depends on the other's participation." },
    { id: "atomic-network", name: "Atomic Network", definition: "The smallest group for which a network is genuinely useful on its own. Growth is the repeated construction of these, not one global launch." },
    { id: "validated-learning", name: "Validated Learning", definition: "Progress measured by what you have established about the business, not by what you have built or shipped." },
    { id: "deal-terms", name: "Deal Terms", definition: "Economics and control are separate negotiations. Preference, participation, board composition and protective provisions decide outcomes that price alone does not." },
    { id: "dilution", name: "Dilution", definition: "Ownership falls with every issuance. What matters is the value of the shrinking slice, not the percentage." },
    { id: "portfolio-construction", name: "Portfolio Construction", definition: "How many positions, at what size, with what reserved for follow-on. It decides the return profile more than selection does." },
    { id: "halo-effect", name: "Halo Effect", definition: "A general impression of a company colours judgement of its specific attributes, so success makes every practice look like a cause of it." },
    { id: "reciprocity", name: "Reciprocity", definition: "A favour or gift creates a felt obligation to return it, and people will go to some effort to discharge that obligation." },
    { id: "commitment-consistency", name: "Commitment and Consistency", definition: "Once a person takes a small stance or action, they feel pressure to keep behaving consistently with it, even as the stakes grow." },
    { id: "liking", name: "Liking", definition: "People say yes more readily to those they like, and similarity, praise and familiarity manufacture liking quickly." },
    { id: "scarcity", name: "Scarcity", definition: "What is rare or running out is judged more valuable, independent of its actual usefulness." },
    { id: "unity", name: "Unity", definition: "Shared identity, not just similarity, is the deepest form of social influence. People act for groups they consider part of who they are." },
    { id: "bayesian-updating", name: "Bayesian Updating", definition: "Belief should shift in proportion to new evidence, weighted by how likely that evidence is under each hypothesis, not swing to whatever was seen most recently." },
    { id: "illusion-of-control", name: "Illusion of Control", definition: "People overestimate their influence over outcomes that are substantially or entirely down to chance." },
    { id: "spontaneous-order", name: "Spontaneous Order", definition: "Complex, useful order can arise from many individuals pursuing their own purposes under simple shared rules, with no one designing the whole." },
    { id: "knowledge-problem", name: "The Knowledge Problem", definition: "The information needed to allocate resources well is scattered across millions of individuals and cannot be collected in one place, which is what prices solve and planning cannot." },
    { id: "extractive-institutions", name: "Extractive Institutions", definition: "Institutions built to concentrate wealth and power in a narrow elite, which discourage broad investment and innovation even when they can deliver growth in the short run." },
    { id: "inclusive-institutions", name: "Inclusive Institutions", definition: "Institutions that broaden who can participate in markets and politics, which is what makes growth durable rather than a one-off extraction." },
    { id: "critical-juncture", name: "Critical Juncture", definition: "A moment when existing institutions are unsettled, and small differences in the choices made then compound into large divergences later." },
    { id: "division-of-labour", name: "Division of Labour", definition: "Splitting a task into specialised steps multiplies the output of the same hands and hours." },
    { id: "invisible-hand", name: "The Invisible Hand", definition: "Individuals pursuing their own gain in a competitive market are led, unintentionally, to outcomes that also serve the wider public." },
    { id: "gains-from-trade", name: "Gains From Trade", definition: "Two parties, or two nations, with different costs of production both come out ahead by specialising and trading, even when one is better at everything." },
    { id: "animal-spirits", name: "Animal Spirits", definition: "Investment and spending decisions rest partly on spontaneous optimism or pessimism, not on a cold calculation of expected value." },
    { id: "liquidity-preference", name: "Liquidity Preference", definition: "People and firms hold cash for its flexibility, and how strongly they prefer that flexibility over return sets the interest rate as much as saving and investment do." },
    { id: "multiplier-effect", name: "Multiplier Effect", definition: "New spending becomes someone else's income, which is partly spent again, so an initial injection or withdrawal echoes through the economy at more than its face value." },

    { id: "thucydides-trap", name: "Thucydides's Trap", definition: "When a rising power threatens to displace a ruling one, the structural fear this creates makes war more likely than either side individually intends." },
    { id: "geographic-determinism", name: "Geography as Destiny", definition: "A nation's mountains, rivers, coastlines and neighbours set the boundaries of what its foreign policy can realistically achieve, whatever its leaders intend." },
    { id: "imperial-overreach", name: "Imperial Overreach", definition: "Expanding commitments beyond what the underlying economy can sustain converts strength into fragility, and the fall often follows the peak by only a generation." },
    { id: "total-war", name: "Total War", definition: "When a conflict mobilises a society's entire economy and population rather than only its army, the line between combatant and civilian, and between war and peace, breaks down." },
    { id: "logistics-over-strategy", name: "Logistics Over Strategy", definition: "Armies are beaten by what they can supply and sustain in the field as often as by what their generals intend; ambition without logistics collapses on contact with distance and time." },
    { id: "containment", name: "Containment", definition: "Rather than defeating a rival outright, patiently blocking its expansion at every point until its own internal contradictions cause it to weaken from within." },
    { id: "balance-of-power", name: "Balance of Power", definition: "States act to prevent any single power from dominating a region, so a state's neighbours become natural counterweights to whichever among them is growing strongest, not natural allies of it." },
    { id: "cult-of-personality", name: "Cult of Personality", definition: "Concentrating legitimacy in a single leader's persona rather than in institutions makes the regime's fate identical to the leader's, and succession identical to a crisis." },
    { id: "historical-contingency", name: "Historical Contingency", definition: "Outcomes that look inevitable in hindsight often turned on a narrow set of choices or accidents that could easily have gone the other way." },

    { id: "deliberate-practice", name: "Deliberate Practice", definition: "Skill grows fastest from focused, effortful repetition at the edge of current ability with immediate feedback, not from hours logged on autopilot." },
    { id: "flow-state", name: "Flow", definition: "Full absorption in a task whose challenge closely matches current skill produces peak performance, and the state breaks the moment either drifts too far from the other." },
    { id: "self-1-self-2", name: "The Two Selves", definition: "A conscious, judging voice and an intuitive, capable one occupy the same mind, and performance improves less by that first voice trying harder than by it learning to stop interfering with the second." },
    { id: "callusing-the-mind", name: "Callusing the Mind", definition: "Deliberately repeated exposure to discomfort builds a tolerance for it that transfers to unrelated forms of adversity, the same way physical repetition builds a callus." },
    { id: "reinvention", name: "Reinvention", definition: "A person, product or company's most important pivot often comes not from early success but from surviving a period of being wrong, sidelined or discarded and rebuilding from there." },
    { id: "founder-mode", name: "Founder Mode", definition: "A company retains a founder's obsessive, detail-level engagement with the product and customer long after the org chart says it should have been delegated away, and losing that engagement is its own kind of risk." },
    { id: "customer-obsession", name: "Customer Obsession", definition: "Starting every decision from what the customer experiences, not from what competitors are doing, compounds into an advantage that is slow to build and hard to copy." },
    { id: "competitive-fire", name: "Competitive Fire", definition: "An internal, self-generated hunger to win that does not depend on external validation and often intensifies after success rather than fading, distinguishing durable competitors from those who plateau after arriving." }
  ],

  categories: [
    { id: "decision-making", name: "Decision-making" },
    { id: "investing", name: "Investing" },
    { id: "strategy", name: "Strategy" },
    { id: "people", name: "People" },
    { id: "learning", name: "Learning" },
    { id: "history", name: "History" },
    { id: "leadership", name: "Leadership" },
    { id: "performance", name: "Performance" }
  ],

  ideas: []
};
