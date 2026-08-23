/* ============================================================
   Latticework — V1 prototype application
   Screens: Home, Library, Book, Idea, Ideas, Saved
   Plus: persistent search, Apply, notes, states, email account
   ============================================================ */
(function () {
  "use strict";

  var DB = window.DB;
  var IDEAS = DB.ideas;
  var byId = {}; IDEAS.forEach(function (i) { byId[i.id] = i; });
  var bookById = {}; DB.books.forEach(function (b) { bookById[b.id] = b; });
  var modelById = {}; DB.mental_models.forEach(function (m) { modelById[m.id] = m; });
  var catById = {}; DB.categories.forEach(function (c) { catById[c.id] = c; });

  /* ---- relational projections, per the spec's data model ---- */
  var IDEA_MODELS = [];   // {idea_id, mental_model_id}
  var CONNECTIONS = [];   // {id, source_idea_id, target_idea_id, relationship_type}
  var QUOTES = [];        // {id, book_id, idea_id, quote, context}
  IDEAS.forEach(function (i) {
    i.models.forEach(function (m) { IDEA_MODELS.push({ idea_id: i.id, mental_model_id: m }); });
    i.connections.forEach(function (c, n) {
      CONNECTIONS.push({ id: i.id + "-" + n, source_idea_id: i.id, target_idea_id: c.to, relationship_type: c.type });
    });
    if (i.quote) QUOTES.push({ id: "q-" + i.id, book_id: i.book_id, idea_id: i.id, quote: i.quote.text, attribution: i.quote.attribution, context: i.quote.why });
  });

  /* ============================ utils ============================ */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function store(k, v) {
    try {
      if (arguments.length === 1) { var r = localStorage.getItem(k); return r ? JSON.parse(r) : null; }
      localStorage.setItem(k, JSON.stringify(v)); return true;
    } catch (e) { return arguments.length === 1 ? null : false; }
  }
  var toastTimer;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove("show"); }, 1900);
  }
  function plural(n, s) { return n + " " + s + (n === 1 ? "" : "s"); }
  var BOOK_ORDER = {}; DB.books.forEach(function (b, n) { BOOK_ORDER[b.id] = n; });
  function byBookThenNum(a, b) {
    return (BOOK_ORDER[a.book_id] - BOOK_ORDER[b.book_id]) || (a.num - b.num);
  }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }
  function hsl(h, s, l) { return "hsl(" + h + " " + s + "% " + l + "%)"; }

  var IC = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H4a1 1 0 0 1-1-1z"/></svg>',
    library: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h6v16H4zM14 4h6v16h-6z"/><path d="M4 9h6M14 9h6"/></svg>',
    ideas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="7" r="2.4"/><circle cx="18" cy="7" r="2.4"/><circle cx="12" cy="17.5" r="2.4"/><path d="M7.6 8.9 10.6 15.4M16.4 8.9 13.4 15.4M8.4 7h7.2"/></svg>',
    saved: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v16l-6-4.2L6 20z"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6"/><path d="m15.2 15.2 4 4"/></svg>',
    bm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12v16l-6-4.2L6 20z"/></svg>',
    bmf: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h12v16l-6-4.2L6 20z"/></svg>',
    chk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 12.5 5 5 10-11"/></svg>',
    spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9z"/><path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 6l-6 6 6 6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    find: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.2"/><circle cx="12" cy="12" r="3"/><path d="M12 3.8v2.6M12 17.6v2.6M20.2 12h-2.6M6.4 12H3.8"/></svg>'
  };

  /* ============================ state ============================ */
  var S = {
    user: null,          // {email}
    guest: false,
    ui: { savedTab: "saved", savedFilter: { book: "", cat: "", model: "" }, q: "", findQ: "", lastList: "ideas" },
    data: { ideas: {}, viewed: [], recentBooks: [] }
  };
  function key() { return "lw:v1:" + (S.user ? S.user.email.toLowerCase() : "guest"); }
  function load() {
    var acct = store("lw:v1:account");
    if (acct && acct.email) S.user = acct;
    if (store("lw:v1:guest")) S.guest = true;
    var d = store(key());
    if (d) S.data = Object.assign({ ideas: {}, viewed: [], recentBooks: [] }, d);
  }
  function save() { store(key(), S.data); }
  function ui(id) {
    if (!S.data.ideas[id]) S.data.ideas[id] = { saved: false, learned: false, applied: false, note: "" };
    return S.data.ideas[id];
  }
  function markViewed(id) {
    if (S.data.viewed.indexOf(id) < 0) { S.data.viewed.push(id); save(); }
  }
  function touchBook(bid) {
    S.data.recentBooks = [bid].concat(S.data.recentBooks.filter(function (b) { return b !== bid; })).slice(0, 4);
    save();
  }
  function savedIds() { return Object.keys(S.data.ideas).filter(function (k) { return S.data.ideas[k].saved; }); }
  function countState(f, bookId) {
    return Object.keys(S.data.ideas).filter(function (k) {
      return S.data.ideas[k][f] && byId[k] && (!bookId || byId[k].book_id === bookId);
    }).length;
  }
  function viewedInBook(bid) {
    return S.data.viewed.filter(function (k) { return byId[k] && byId[k].book_id === bid; }).length;
  }

  /* ============================ search ============================ */
  var STOP = ("a an the and or but if of for to in on at by with from as is are was be been am i my me we our you your it its this that these those " +
    "how what why when which who should would could do does did not no about into over than then there their them he she his her " +
    "can will just very more most some any also s t re ve ll d m").split(" ");
  var STOPSET = {}; STOP.forEach(function (w) { STOPSET[w] = 1; });

  var EXPAND = {
    catastrophic: ["ruin", "survival", "survive", "unrecoverable"],
    catastrophe: ["ruin", "survival"], disaster: ["ruin", "survival"],
    mistake: ["error", "misjudgment", "failure", "wrong"], mistakes: ["error", "misjudgment", "failure", "wrong"],
    avoid: ["avoiding", "prevent", "inversion"], avoiding: ["avoid", "prevent", "inversion"],
    fail: ["failure", "ruin", "inversion"], failure: ["fail", "ruin", "inversion"],
    risk: ["ruin", "safety", "margin", "downside", "buffer"], risky: ["ruin", "safety", "downside"],
    downside: ["margin", "safety", "ruin"],
    bias: ["misjudgment", "tendency", "bias"], biases: ["misjudgment", "tendency"],
    price: ["valuation", "anchor", "multiple", "opportunity"], pricing: ["valuation", "anchor", "multiple"],
    valuation: ["price", "multiple", "anchor", "regression"],
    growth: ["compounding", "scale", "retention", "regression"], growing: ["compounding", "scale", "retention"],
    competitor: ["competition", "competitive", "commoditise", "second-order"],
    competitors: ["competition", "competitive", "commoditise", "second-order"],
    crowd: ["herd", "consensus", "social", "proof"], consensus: ["herd", "social", "proof", "independent"],
    everyone: ["herd", "social", "proof"],
    forecast: ["prediction", "probability", "base", "rate"], predict: ["probability", "base", "rate"],
    luck: ["chance", "regression", "survivorship"], lucky: ["chance", "regression", "survivorship"],
    team: ["founder", "people", "key", "person"], founder: ["team", "people", "liking", "authority"],
    hire: ["hiring", "people", "incentive", "regression"], hiring: ["people", "incentive", "regression"],
    job: ["career", "opportunity", "cost", "horizon"], career: ["job", "opportunity", "horizon", "compounding"],
    wait: ["patience", "waiting", "selectivity"], waiting: ["patience", "selectivity"],
    focus: ["selectivity", "specialisation", "circle", "competence"],
    emotion: ["temperament", "fear", "envy", "loss"], emotional: ["temperament", "loss", "aversion"],
    fear: ["temperament", "loss", "aversion"], greed: ["temperament", "envy"],
    network: ["critical", "mass", "feedback", "loop", "scale", "atomic", "platform"],
    moat: ["advantage", "scale", "defensib", "competitive"], defensible: ["moat", "advantage", "scale"],
    sell: ["loss", "aversion", "opportunity", "cost"], exit: ["opportunity", "cost", "horizon", "patience"],
    diligence: ["confirmation", "inversion", "base", "rate", "checklist"],
    invest: ["investment", "capital", "margin", "safety", "probability"],
    investment: ["invest", "capital", "margin", "safety", "probability"],
    incentive: ["incentives", "reward", "behaviour"], motivation: ["incentives", "reward"],
    decision: ["decide", "judgement", "probability"], decide: ["decision", "judgement", "probability"],
    learn: ["learning", "mistakes", "multidisciplinary"], remember: ["learning", "recall"],
    scale: ["scale", "economies", "critical", "mass", "compounding"],
    churn: ["retention", "compounding", "feedback"], retention: ["compounding", "churn", "feedback"],
    "long-term": ["horizon", "patience", "compounding"], longterm: ["horizon", "patience", "compounding"],
    marketplace: ["platform", "multi-sided", "network", "liquidity", "supply", "demand"],
    platform: ["marketplace", "multi-sided", "network", "atomic"],
    burn: ["runway", "capital", "efficient", "milestone"], burning: ["burn", "runway", "capital"],
    runway: ["burn", "capital", "efficient", "milestone"],
    pivot: ["persevere", "validated", "learning", "iteration", "leap"],
    chasm: ["adoption", "mainstream", "early", "adopters", "lifecycle"],
    adoption: ["chasm", "lifecycle", "mainstream", "early"],
    cofounder: ["founder", "team", "conflict"], "co-founder": ["founder", "team", "conflict"],
    fire: ["demote", "layoff", "difficult", "conversation"], firing: ["demote", "layoff", "difficult"],
    layoff: ["fire", "difficult", "conversation", "wartime"],
    startup: ["founder", "venture", "early", "stage"], founders: ["founder", "team", "cofounder"],
    disagreement: ["conflict", "difficult", "conversation", "candour"], conflict: ["disagreement", "difficult", "candour"],
    dilution: ["ownership", "cap", "table", "pro-rata"], "cap table": ["dilution", "ownership", "pro-rata"],
    markup: ["valuation", "unrealised", "paper", "return"], markups: ["valuation", "unrealised", "paper", "return"],
    realised: ["return", "exit", "distribution"], unrealised: ["markup", "paper", "valuation"],
    lp: ["limited", "partner", "fund"], gp: ["general", "partner", "fund"],

    burnout: ["discomfort", "relentless", "comfort", "suffering"], burnt: ["discomfort", "relentless", "suffering"],
    exhausted: ["discomfort", "relentless", "suffering", "comfort"], exhaustion: ["discomfort", "relentless", "suffering"],
    overextend: ["overreach", "overextended", "frontier"], overextended: ["overreach", "frontier", "overextend"],
    stretched: ["overreach", "overextended", "frontier"], overreach: ["overextended", "frontier", "imperial"],
    expanding: ["overreach", "frontier", "overextended"], expansion: ["overreach", "frontier", "overextended"],
    rival: ["rising", "power", "trap"], rivalry: ["rising", "power", "trap"],
    threat: ["rising", "power", "trap"], threatening: ["rising", "power", "trap"],
    confrontation: ["rising", "power", "trap", "war"], inevitable: ["rising", "power", "trap"],
    successor: ["succession", "heir", "handover"], succession: ["heir", "handover", "successor"],
    heir: ["succession", "handover"],
    comeback: ["reinvention", "rebuild"], reinvent: ["reinvention", "rebuild"], reinvention: ["rebuild", "comeback"],
    consolidate: ["monopoly", "efficient", "buy"], consolidation: ["monopoly", "efficient", "buy"],
    discipline: ["relentless", "callusing", "accountability"], disciplined: ["relentless", "callusing"],
    resilience: ["callusing", "suffering", "relentless"], resilient: ["callusing", "relentless"],
    micromanage: ["founder", "obsessive", "detail"], obsessive: ["founder", "detail", "control"]
  };

  function tokens(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9\-\s]/g, " ").split(/\s+/)
      .filter(function (w) { return w.length > 1 && !STOPSET[w]; });
  }
  var INDEX = IDEAS.map(function (i) {
    var mods = i.models.map(function (m) { return modelById[m].name + " " + modelById[m].definition; }).join(" ");
    return {
      id: i.id,
      title: i.title.toLowerCase(),
      thesis: i.thesis.toLowerCase(),
      models: mods.toLowerCase(),
      cat: catById[i.category].name.toLowerCase(),
      book: bookById[i.book_id].title.toLowerCase(),
      body: (i.explanation.join(" ") + " " + i.practical.label + " " + i.practical.lead + " " +
        i.practical.bullets.join(" ") + " " + i.application).toLowerCase()
    };
  });

  /* Document frequency across the library, so a word that appears in a handful
     of ideas (marketplace, chasm, runway) counts for more than one that appears
     in most of them (cash, growth, capital). Without this a large valuation
     vocabulary shared across many investing ideas drowns out smaller, more
     specific books whenever a query mixes generic and specific language. */
  var DOC_COUNT = INDEX.length;
  var DF = {};
  INDEX.forEach(function (x) {
    var seen = {};
    tokens(x.title + " " + x.thesis + " " + x.models + " " + x.cat + " " + x.book + " " + x.body)
      .forEach(function (t) { seen[t] = 1; });
    Object.keys(seen).forEach(function (t) { DF[t] = (DF[t] || 0) + 1; });
  });
  function idf(t) { return Math.log((DOC_COUNT + 1) / ((DF[t] || 1) + 1)) + 0.35; }

  function search(q, limit, excludeId) {
    var qt = tokens(q);
    if (!qt.length) return [];
    var expanded = [];
    qt.forEach(function (t) { if (EXPAND[t]) expanded = expanded.concat(EXPAND[t]); });
    var out = [];
    INDEX.forEach(function (x) {
      if (excludeId && x.id === excludeId) return;
      var sc = 0, hits = [];
      function tally(t, w) {
        var f = idf(t);
        if (x.title.indexOf(t) >= 0) { sc += 14 * w * f; hits.push(t); }
        if (x.thesis.indexOf(t) >= 0) { sc += 6 * w * f; hits.push(t); }
        if (x.models.indexOf(t) >= 0) { sc += 5 * w * f; }
        if (x.cat.indexOf(t) >= 0) { sc += 3 * w * f; }
        if (x.book.indexOf(t) >= 0) { sc += 2 * w * f; }
        var n = x.body.split(t).length - 1;
        if (n) sc += Math.min(n, 4) * 1.6 * w * f;
      }
      qt.forEach(function (t) { tally(t, 1); });
      expanded.forEach(function (t) { tally(t, 0.45); });
      if (sc > 0) out.push({ id: x.id, score: sc });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.slice(0, limit || 20);
  }

  /* ============================ apply engine ============================ */
  var SECTORS = ["saas", "fintech", "marketplace", "b2b", "consumer", "software", "ai", "health", "healthtech",
    "insurance", "logistics", "retail", "education", "edtech", "crypto", "hardware", "media", "gaming", "proptech", "agency"];

  var SECTOR_LABEL = { saas: "SaaS", b2b: "B2B", ai: "AI", fintech: "Fintech", edtech: "Edtech", healthtech: "Healthtech", proptech: "Proptech" };
  function sectorLabel(s) { return SECTOR_LABEL[s] || s.charAt(0).toUpperCase() + s.slice(1); }
  function titleStage(s) {
    return s.replace(/series\s?([a-e])/, function (_, l) { return "Series " + l.toUpperCase(); })
      .replace(/^pre.?seed$/, "Pre-seed").replace(/^seed$/, "Seed")
      .replace(/^growth stage$/, "Growth stage").replace(/^late stage$/, "Late stage");
  }
  function signals(text) {
    var t = text.toLowerCase(), out = [];
    var pct = t.match(/(\d{1,3}(?:\.\d+)?)\s?%/);
    if (pct) out.push({ type: "rate", label: pct[0] + " growth or rate", value: pct[0] });
    var money = t.match(/(?:\$|usd|aud|£|€)\s?\d+(?:[.,]\d+)?\s?(?:k|m|bn|b|million|billion)?/);
    if (money) out.push({ type: "money", label: money[0].trim(), value: money[0].trim() });
    var stage = t.match(/pre-seed|pre seed|seed|series\s?[a-e]|growth stage|late stage/);
    if (stage) out.push({ type: "stage", label: titleStage(stage[0]), value: titleStage(stage[0]) });
    var DEC = [[/invest|investment/, "An investment decision"], [/acquir/, "An acquisition decision"],
      [/\bbuy\b/, "A purchase decision"], [/\bsell\b|exit/, "An exit decision"],
      [/hire|hiring|recruit/, "A hiring decision"], [/quit|resign/, "A decision to leave"],
      [/\bjoin\b/, "A decision to join"], [/launch|ship/, "A launch decision"],
      [/rais(e|ing)/, "A fundraising decision"], [/pric(e|ing)/, "A pricing decision"],
      [/expand|enter/, "An expansion decision"], [/partner/, "A partnership decision"]];
    for (var k = 0; k < DEC.length; k++) {
      if (DEC[k][0].test(t)) { out.push({ type: "decision", label: DEC[k][1], value: DEC[k][1].toLowerCase() }); break; }
    }
    var secs = SECTORS.filter(function (s) { return new RegExp("\\b" + s + "\\b").test(t); });
    if (secs.length) out.push({ type: "sector", label: secs.slice(0, 3).map(sectorLabel).join(", "), value: secs[0] });
    return out;
  }

  function generatedQuestions(sig, text) {
    var qs = [], t = text.toLowerCase();
    sig.forEach(function (s) {
      if (s.type === "rate" && qs.length < 3)
        qs.push("You mentioned " + s.value + ". How much of that rate is repeatable process rather than one exceptional period, one large contract, or a competitor's mistake?");
      if (s.type === "stage" && qs.length < 3)
        qs.push("At " + s.value + ", what proportion of comparable companies actually reach the outcome you are underwriting? Start from that base rate before the specifics.");
      if (s.type === "money" && qs.length < 3)
        qs.push("You mentioned " + s.value + ". What is your genuine next best use of that same capital and attention, and does this clear it?");
      if (s.type === "decision" && qs.length < 3) {
        if (/invest|buy|acquir|raise/.test(s.value)) qs.push("What sequence of events would make this a permanent loss of capital rather than a temporary setback?");
        else if (/hire|hiring|join|quit/.test(s.value)) qs.push("What would make this look like a mistake in two years, and would the early signs be visible within six months?");
        else if (/price|pric/.test(s.value)) qs.push("If the nearest competitor matched this move within a quarter, would the decision still be right?");
        else qs.push("What would have to happen for this to fail outright, and which of those is most likely?");
      }
    });
    if (/should i|worth it|do i|whether/.test(t) && qs.length < 3)
      qs.push("What specific evidence would change your answer? Write it down before you go looking for it.");
    return qs.slice(0, 3);
  }

  function runApply(ideaId, text) {
    var idea = byId[ideaId];
    var sig = signals(text);
    var rel = search(text + " " + idea.title + " " + idea.thesis, 4, ideaId);
    if (rel.length < 3) {
      idea.connections.forEach(function (c) {
        if (rel.length < 3 && !rel.some(function (r) { return r.id === c.to; })) rel.push({ id: c.to, score: 0 });
      });
    }
    return { idea: idea, signals: sig, questions: idea.practical.bullets, generated: generatedQuestions(sig, text), related: rel.slice(0, 3), input: text };
  }

  /* ============================ find engine ============================ */
  /* Library-wide version of the same retrieval used by search() and Apply:
     describe a situation, and this surfaces the books and specific ideas that
     match by concept, not an LLM's read of the situation. A book's score is
     the sum of its best-matching ideas (capped, so one book cannot win purely
     by containing many weakly related ideas) plus a small credit for breadth. */
  function findLibrary(text, bookLimit, ideasPerBook) {
    bookLimit = bookLimit || 5; ideasPerBook = ideasPerBook || 3;
    var matches = search(text, 60);
    var byBook = {};
    matches.forEach(function (m) {
      var idea = byId[m.id], bid = idea.book_id;
      if (!byBook[bid]) byBook[bid] = [];
      byBook[bid].push(m);
    });
    var books = Object.keys(byBook).map(function (bid) {
      var group = byBook[bid], top = group.slice(0, ideasPerBook);
      var sc = top.reduce(function (s, m) { return s + m.score; }, 0) + Math.max(0, group.length - top.length) * 0.6;
      return { book: bookById[bid], score: sc, ideas: top.map(function (m) { return byId[m.id]; }) };
    });
    books.sort(function (a, b) { return b.score - a.score; });
    return { signals: signals(text), books: books.slice(0, bookLimit), matched: matches.length, query: text };
  }
  var FIND_EXAMPLES = [
    "A competitor just cut prices 20% and our board wants us to match it.",
    "We're deciding whether to lead a Series B in a marketplace growing 150% year on year but burning cash fast.",
    "A portfolio company's two founders disagree on strategy and it's splitting the team.",
    "I'm building conviction on a business with strong metrics in a market I don't fully understand yet.",
    "An LP is asking why paper markups haven't turned into realised returns."
  ];

  /* ============================ small components ============================ */
  function coverHTML(b, lg) {
    var h = b.cover.hue, two = b.cover.letter.length > 1;
    var fs = lg ? (two ? 23 : 34) : (two ? 18 : 26);
    return '<div class="cover' + (lg ? " lg" : "") + '" style="font-size:' + fs + "px;background:linear-gradient(150deg," +
      hsl(h, 16, 40) + ',' + hsl(h, 20, 26) + ')">' + esc(b.cover.letter) + '</div>';
  }
  function saveBtn(id, sm) {
    var st = ui(id);
    return '<button class="btn ' + (sm ? "sm " : "") + (st.saved ? "on" : "") + '" data-act="save" data-id="' + id + '" aria-pressed="' + st.saved + '">' +
      (st.saved ? IC.bmf : IC.bm) + (st.saved ? "Saved" : "Save") + "</button>";
  }
  function ideaRow(i) {
    var b = bookById[i.book_id], st = ui(i.id);
    return '<article class="card rowcard tap">' +
      '<a href="#/idea/' + i.id + '" style="display:block">' +
      '<div class="eyebrow">' + esc(i.title.toUpperCase()) + (st.learned ? " &nbsp;·&nbsp; LEARNED" : "") + '</div>' +
      '<p class="rthesis">' + esc(i.thesis) + '</p>' +
      '<div class="src">' + esc(b.title) + '</div></a>' +
      '<div class="cardfoot" style="margin-top:14px">' +
      '<span class="meta">' + i.reading_time + ' min</span><span class="sp"></span>' +
      '<a class="btn sm gh" href="#/book/' + i.book_id + '">Source</a>' + saveBtn(i.id, true) +
      '</div></article>';
  }
  function relRow(id, type) {
    var i = byId[id], b = bookById[i.book_id];
    return '<a class="rel" href="#/idea/' + id + '">' +
      '<div><div class="rt">' + esc(i.title) + '</div><div class="rs">' + esc(b.title) +
      (type ? ' <span class="pill rel" style="margin-left:6px">' + esc(type) + "</span>" : "") + "</div></div>" +
      '<span class="arrow">' + IC.arrow + "</span></a>";
  }
  function modelTags(ids) {
    return '<div class="tags">' + ids.map(function (m) {
      return '<a class="tag" href="#/ideas/model/' + m + '" title="' + esc(modelById[m].definition) + '">' + esc(modelById[m].name) + "</a>";
    }).join("") + "</div>";
  }

  /* ============================ screens ============================ */
  /* Curated order for the featured slot: the strongest ideas first.
     Shows the first one you have not explored, then rotates daily once you have seen them all. */
  var FEATURE_ORDER = ["inversion", "zto-monopoly", "tmit-second-level", "tii-margin-of-safety", "tbs-black-swan",
    "s7p-power", "pom-luck-and-risk", "incentives", "pcs-five-forces", "tpl-power-law-returns",
    "compounding", "tfs-wysiati", "fbr-alternative-histories", "tos-capital-allocation", "csup-scuttlebutt",
    "tib-resulting", "circle-of-competence", "tmit-risk-is-loss", "zto-power-law", "fsh-cash-versus-earnings",
    "second-order-effects", "tbs-mediocristan", "pom-never-enough", "s7p-counter-positioning", "tfs-two-systems",
    "probabilistic-thinking", "tii-mr-market", "pcs-generic-strategies", "fbr-lucky-fool", "tos-cash-flow-per-share",
    "margin-of-safety", "tmit-cycles", "pom-tails-drive-everything", "tbs-narrative-fallacy", "csup-fifteen-points",
    "opportunity-cost", "s7p-switching-costs", "tpl-skill-or-luck", "tib-bets", "tii-intrinsic-value",
    "base-rates", "tbs-silent-evidence", "pcs-entry-barriers", "pom-getting-vs-keeping", "tfs-premortem",
    "temperament", "tmit-defence-first", "s7p-network-economies", "fsh-why-it-happens", "tos-buybacks",
    "avoiding-ruin", "fbr-noise-and-signal", "pom-room-for-error", "zto-secrets", "tbs-barbell",
    "antidotes", "tmit-contrarianism", "pcs-stuck-in-the-middle", "csup-when-to-sell", "tos-decentralisation",
    "patience", "s7p-branding", "tpl-networks", "fbr-asymmetry", "pom-reasonable-not-rational",
    "selectivity", "tmit-patient-opportunism", "tbs-convexity", "tii-diversification", "fsh-metric-games"];
  function featuredIdea() {
    for (var n = 0; n < FEATURE_ORDER.length; n++) {
      var id = FEATURE_ORDER[n];
      if (byId[id] && S.data.viewed.indexOf(id) < 0) return byId[id];
    }
    var d = new Date();
    var day = Math.floor((d - new Date(d.getFullYear(), 0, 0)) / 86400000);
    return IDEAS[day % IDEAS.length];
  }

  function viewHome() {
    var h = new Date().getHours();
    var greet = h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    var f = featuredIdea(), fb = bookById[f.book_id];
    var first = f.explanation[0].split(/(?<=\.)\s/).slice(0, 2).join(" ");
    // The feed deliberately spans the library: one idea connected to the featured
    // one, then the first unexplored idea from each of the other books.
    var more = [], seen = {}; seen[f.id] = 1;
    f.connections.forEach(function (c) {
      if (!seen[c.to] && byId[c.to] && more.length < 1) { seen[c.to] = 1; more.push(byId[c.to]); }
    });
    DB.books.forEach(function (b) {
      if (b.id === f.book_id || more.length >= 5) return;
      var list = IDEAS.filter(function (i) { return i.book_id === b.id && !seen[i.id]; });
      if (!list.length) return;
      var pick = null;
      for (var k = 0; k < list.length; k++) {
        if (S.data.viewed.indexOf(list[k].id) < 0) { pick = list[k]; break; }
      }
      if (!pick) pick = list[0];
      seen[pick.id] = 1; more.push(pick);
    });
    var start = IDEAS.indexOf(f);
    for (var n = 1; more.length < 4 && n < IDEAS.length; n++) {
      var cand = IDEAS[(start + n * 7) % IDEAS.length];
      if (!seen[cand.id]) { seen[cand.id] = 1; more.push(cand); }
    }
    return '<div class="page">' +
      '<p class="greet">' + greet + (S.user ? "" : "") + '</p>' +
      '<h1 class="display">One idea worth knowing</h1>' +
      '<p class="meta" style="margin:0 0 18px">' + plural(IDEAS.length, "idea") + " in your library" + '</p>' +

      '<a class="card tap findcta" href="#/find" style="display:flex;align-items:center;gap:14px;margin-bottom:20px">' +
      '<span class="findic" style="color:var(--accent)">' + IC.find + '</span>' +
      '<span style="flex:1;min-width:0"><span style="font-family:var(--serif);font-size:16.5px;letter-spacing:-.01em">Have a situation in mind?</span>' +
      '<span class="meta" style="display:block;margin-top:2px">Describe it and find the books and ideas that apply</span></span>' +
      '<span class="arrow" style="color:var(--ink4)">' + IC.arrow + '</span></a>' +

      '<article class="card feature">' +
      '<div class="eyebrow acc">' + esc(f.title.toUpperCase()) + '</div>' +
      '<a href="#/idea/' + f.id + '"><p class="fthesis">' + esc(f.thesis) + '</p></a>' +
      '<div class="src" style="margin-bottom:12px">' + esc(fb.title) + " &nbsp;·&nbsp; " + esc(fb.author) + '</div>' +
      '<p class="fbody">' + esc(first) + '</p>' +
      '<div class="btnrow"><span class="meta" style="align-self:center;margin-right:auto">' + f.reading_time + ' min read</span>' +
      saveBtn(f.id) + '<a class="btn primary" href="#/idea/' + f.id + '">Read more' + IC.arrow + '</a></div>' +
      '</article>' +

      '<hr class="sectionrule">' +
      '<h2 class="sec">More ideas</h2>' +
      more.map(ideaRow).join("") +
      '<div style="margin-top:18px"><a class="btn" href="#/ideas">Browse all ideas' + IC.arrow + '</a></div>' +
      footnote() + '</div>';
  }

  function viewLibrary() {
    var recent = S.data.recentBooks.map(function (b) { return bookById[b]; }).filter(Boolean);
    var html = '<div class="page"><h1 class="display" style="margin-top:14px">Your Library</h1>' +
      '<p class="meta" style="margin:0 0 24px">' + plural(DB.books.length, "book") + " &nbsp;·&nbsp; " +
      plural(IDEAS.length, "idea") + " &nbsp;·&nbsp; " + plural(DB.mental_models.length, "mental model") + "</p>";

    if (recent.length) {
      html += '<h2 class="sec">Currently exploring</h2><div class="hscroll" style="margin-bottom:28px">' +
        recent.map(function (b) {
          var total = IDEAS.filter(function (i) { return i.book_id === b.id; }).length;
          var v = viewedInBook(b.id);
          return '<a href="#/book/' + b.id + '" style="width:132px">' + coverHTML(b) +
            '<div style="font-family:var(--serif);font-size:15px;line-height:1.3;margin-top:9px">' + esc(b.title) + "</div>" +
            '<div class="meta" style="margin-top:3px">' + (total ? v + " of " + total + " explored" : "Coming soon") + "</div></a>";
        }).join("") + "</div>";
    }

    /* Grouped by shelf. At 30 books and rising, one flat list stops being usable. */
    DB.shelves.forEach(function (sh) {
      var books = DB.books.filter(function (b) { return b.shelf === sh.id; });
      if (!books.length) return;
      var ideas = IDEAS.filter(function (i) { return bookById[i.book_id].shelf === sh.id; }).length;
      html += '<h2 class="sec" style="margin-top:4px">' + esc(sh.name) + " &nbsp;·&nbsp; " +
        plural(books.length, "book") + ", " + ideas + " ideas</h2>" +
        '<div class="booklist" style="margin-bottom:30px">' + books.map(bookCard).join("") + "</div>";
    });
    return html + footnote() + "</div>";
  }

  function bookCard(b) {
    var total = IDEAS.filter(function (i) { return i.book_id === b.id; }).length;
    var v = viewedInBook(b.id), pct = total ? Math.round(v / total * 100) : 0;
    return '<a class="card tap bookcard" href="#/book/' + b.id + '">' + coverHTML(b) +
      '<div style="flex:1;min-width:0">' +
      (b.status === "coming_soon" ? '<span class="pill soon" style="margin-bottom:7px">Coming soon</span>' : "") +
      '<div style="font-family:var(--serif);font-size:19px;line-height:1.22;letter-spacing:-.01em">' + esc(b.title) + "</div>" +
      '<div class="src" style="margin:3px 0 8px">' + esc(b.author) + "</div>" +
      '<div style="font-size:13.5px;color:var(--ink2);line-height:1.5">' + esc(b.description) + "</div>" +
      '<div class="meta" style="margin-top:9px">' + (total ? plural(total, "idea") + " &nbsp;·&nbsp; " + pct + "% explored" : "Content not yet added") + "</div>" +
      (total ? '<div class="progress"><i style="width:' + pct + '%"></i></div>' : "") +
      "</div></a>";
  }

  function viewBook(id) {
    var b = bookById[id];
    if (!b) return notFound();
    touchBook(id);
    var list = IDEAS.filter(function (i) { return i.book_id === id; }).sort(function (a, c) { return a.num - c.num; });
    var html = '<div class="page"><a class="back" href="#/library">' + IC.back + "Library</a>";

    html += '<div style="display:flex;gap:18px;align-items:flex-start;margin:12px 0 20px">' + coverHTML(b, true) +
      '<div style="flex:1;min-width:0"><h1 class="display" style="margin-top:0">' + esc(b.title) + "</h1>" +
      '<div class="src" style="font-size:14px">' + esc(b.author) + "</div>" +
      (b.status === "coming_soon" ? '<span class="pill soon" style="margin-top:10px">Coming soon</span>' : "") + "</div></div>";

    html += '<p class="prose" style="font-size:16.5px;color:var(--ink2)">' + esc(b.description) + "</p>";

    html += '<div class="tags" style="margin:16px 0 4px"><span class="tag">' +
      (list.length ? plural(list.length, "idea") : "No ideas yet") + "</span>" +
      b.categories.map(function (c) { return '<span class="tag">' + esc(c) + "</span>"; }).join("") + "</div>";

    if (b.status === "coming_soon") {
      html += '<div class="noquote" style="margin-top:26px">This book is a placeholder record. Its ideas have not been written yet, and nothing has been generated for it, ' +
        'so there is no summary, quotation or mental-model mapping here to mistake for real content. ' +
        '<a href="#/book/pca" style="color:var(--accent);text-decoration:underline">Poor Charlie\'s Almanack</a> is the populated book in this build.</div>' +
        footnote() + "</div>";
      return html;
    }

    html += '<hr class="sectionrule"><h2 class="sec">The big idea</h2>' +
      '<p class="lead" style="margin-bottom:6px">' + esc(b.big_idea) + "</p>";

    html += '<hr class="sectionrule"><h2 class="sec">Key ideas</h2><div class="klist">' +
      list.map(function (i) {
        var st = ui(i.id);
        return '<a class="kitem" href="#/idea/' + i.id + '"><span class="knum">' + pad2(i.num) + "</span>" +
          '<span style="flex:1;min-width:0"><span class="ktitle" style="display:block">' + esc(i.title) + "</span>" +
          '<span class="kthesis">' + esc(i.thesis) + "</span></span>" +
          (st.learned ? '<span class="kchk">' + IC.chk + "</span>" : st.saved ? '<span class="kchk">' + IC.bmf + "</span>" : "") +
          "</a>";
      }).join("") + "</div>";

    var mset = {}; list.forEach(function (i) { i.models.forEach(function (m) { mset[m] = 1; }); });
    html += '<hr class="sectionrule"><h2 class="sec">Mental models</h2>' + modelTags(Object.keys(mset));

    html += '<hr class="sectionrule"><h2 class="sec">Your progress</h2><div class="stats">' +
      '<div class="stat"><b>' + viewedInBook(id) + "</b><span>EXPLORED</span></div>" +
      '<div class="stat"><b>' + countState("saved", id) + "</b><span>SAVED</span></div>" +
      '<div class="stat"><b>' + countState("applied", id) + "</b><span>APPLIED</span></div></div>";

    return html + footnote() + "</div>";
  }

  function viewIdea(id) {
    var i = byId[id];
    if (!i) return notFound();
    markViewed(id); touchBook(i.book_id);
    var b = bookById[i.book_id], st = ui(id);

    var main = '<div class="eyebrow" style="margin-bottom:6px"><a href="#/book/' + b.id + '" style="color:var(--accent)">' + esc(b.title.toUpperCase()) + "</a></div>" +
      '<h1 class="idea">' + esc(i.title) + "</h1>" +
      '<p class="meta" style="margin:0 0 24px">' + esc(catById[i.category].name) + '<span class="dotsep"></span>' + i.reading_time + " min read" +
      (st.learned ? '<span class="dotsep"></span><span style="color:var(--accent)">Learned</span>' : "") + "</p>" +

      '<div class="blk"><div class="lbl">The idea</div><p class="lead">' + esc(i.thesis) + "</p></div>" +

      '<div class="blk"><div class="lbl">Why it matters</div><div class="prose">' +
      i.explanation.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div></div>" +

      '<div class="blk"><div class="lbl">In practice</div><div class="practice">' +
      '<div class="eyebrow" style="margin-bottom:9px">' + esc(i.practical.label.toUpperCase()) + "</div>" +
      '<p class="plead">' + esc(i.practical.lead) + "</p><ul>" +
      i.practical.bullets.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div></div>" +

      '<div class="blk"><div class="lbl">Applied to business and investing</div><div class="prose"><p>' + esc(i.application) + "</p></div></div>";

    var aside = '<div class="blk"><div class="lbl">Mental models</div>' + modelTags(i.models) + "</div>" +
      '<div class="blk"><div class="lbl">Related ideas</div><div class="relgrid">' +
      i.connections.slice(0, 6).map(function (c) { return relRow(c.to, c.type); }).join("") + "</div>" +
      '<div style="margin-top:10px"><a class="btn sm gh" href="#/graph/' + i.id + '">See connections as a graph' + IC.arrow + "</a></div></div>";

    var srcBlk = '<div class="blk"><div class="lbl">From the source</div>' +
      (i.quote
        ? '<div class="quotebox"><q>' + esc(i.quote.text) + '</q><span class="attr">' + esc(i.quote.attribution) +
        (i.quote.source_note ? '<br><span style="color:var(--ink4);font-size:11.5px">' + esc(i.quote.source_note) + "</span>" : "") + "</span></div>" +
        '<div class="lbl" style="margin-top:16px">Why this matters</div><div class="prose"><p>' + esc(i.quote.why) + "</p></div>"
        : '<div class="noquote">Quotation unavailable. No wording for this idea could be verified against the source, so none has been included rather than invented. The explanation above is original writing about the concept.</div>') +
      "</div>";

    var noteBlk = '<div class="blk notewrap"><div class="lbl">Your note</div>' +
      '<textarea id="note" placeholder="Add a personal note...">' + esc(st.note) + "</textarea>" +
      '<div class="btnrow" style="margin-top:10px"><button class="btn sm" data-act="savenote" data-id="' + id + '">Save note</button>' +
      '<span class="savedhint" id="notehint" style="align-self:center"></span></div></div>';

    var actions = '<hr class="sectionrule"><div class="actionbar">' + saveBtn(id) +
      '<button class="btn ' + (st.learned ? "on" : "") + '" data-act="learn" data-id="' + id + '">' + IC.chk + (st.learned ? "Learned" : "Mark as learned") + "</button>" +
      '<button class="btn primary" data-act="apply" data-id="' + id + '">' + IC.spark + "Apply this idea</button></div>" +
      (st.applied ? '<p class="meta" style="margin-top:10px;color:var(--accent)">You have applied this idea to a real problem.</p>' : "");

    var lst = S.ui.lastList, lname = lst.indexOf("book/") === 0 ? bookById[lst.slice(5)].title
      : lst === "home" ? "Home" : lst === "library" ? "Library" : lst === "saved" ? "Saved" : lst === "find" ? "Find" : "Ideas";
    var backLink = '<a class="back" href="#/' + lst + '">' + IC.back + esc(lname) + "</a>";

    var wide = window.matchMedia("(min-width:1280px)").matches;
    if (wide) {
      return '<div class="page wide">' + backLink +
        '<div class="ideawrap"><div>' + main + srcBlk + noteBlk + actions + footnote() + "</div><aside>" + aside + "</aside></div></div>";
    }
    return '<div class="page">' + backLink +
      main + '<hr class="sectionrule">' + aside + '<hr class="sectionrule">' + srcBlk + noteBlk + actions + footnote() + "</div>";
  }

  function viewIdeas(mode, arg) {
    var html = '<div class="page"><h1 class="display" style="margin-top:14px">Ideas</h1>' +
      '<p class="meta" style="margin:0 0 18px">' + plural(IDEAS.length, "idea") + " across " +
      plural(DB.books.length, "book") + ", organised " + (mode === "model" ? "by mental model" : "by category") + "</p>" +
      '<div data-act="search-open"><div class="searchwrap" style="margin-bottom:18px">' + IC.search +
      '<input placeholder="Search ideas, models, books..." readonly style="cursor:pointer"></div></div>' +
      '<div class="seg" style="margin-bottom:16px">' +
      '<button data-act="tab" data-tab="category" class="' + (mode !== "model" ? "on" : "") + '">By category</button>' +
      '<button data-act="tab" data-tab="model" class="' + (mode === "model" ? "on" : "") + '">By mental model</button>' +
      '<button data-act="tab" data-tab="graph">As a graph</button></div>';

    if (mode === "model") {
      var focus = arg && modelById[arg] ? arg : null;
      if (!focus) {
        /* At this library size the model view opens as an index rather than one long scroll. */
        html += '<p class="hint" style="margin-bottom:14px">' + DB.mental_models.length +
          ' models. Choose one to see every idea that uses it, from any book.</p><div class="tags">' +
          DB.mental_models.map(function (m) {
            var n = IDEAS.filter(function (i) { return i.models.indexOf(m.id) >= 0; }).length;
            return '<a class="tag" href="#/ideas/model/' + m.id + '" title="' + esc(m.definition) + '">' +
              esc(m.name) + ' <span style="color:var(--ink4);margin-left:5px">' + n + "</span></a>";
          }).join("") + "</div>";
      } else {
        var m = modelById[focus];
        var list = IDEAS.filter(function (i) { return i.models.indexOf(focus) >= 0; }).sort(byBookThenNum);
        html += '<div style="margin-bottom:14px"><a class="btn sm gh" href="#/ideas/model">' + IC.back + "All mental models</a></div>" +
          '<div style="margin-bottom:26px"><h2 class="sec" style="margin-bottom:4px">' + esc(m.name) + " &nbsp;·&nbsp; " + list.length + "</h2>" +
          '<p style="font-size:14.5px;font-family:var(--serif);color:var(--ink2);line-height:1.55;margin:0 0 14px">' + esc(m.definition) + "</p>" +
          '<div class="klist">' + list.map(kRow).join("") + "</div></div>";
      }
    } else {
      var focusCat = arg && catById[arg] ? arg : null;
      html += '<div class="tags" style="margin-bottom:20px">' +
        '<a class="tag' + (focusCat ? "" : " on") + '" href="#/ideas"' +
        (focusCat ? "" : ' style="background:var(--accent-soft);color:var(--accent-ink)"') + ">All</a>" +
        DB.categories.map(function (c) {
          var n = IDEAS.filter(function (i) { return i.category === c.id; }).length;
          var on = focusCat === c.id;
          return '<a class="tag" href="#/ideas/category/' + c.id + '"' +
            (on ? ' style="background:var(--accent-soft);color:var(--accent-ink);border-color:var(--accent-line)"' : "") +
            ">" + esc(c.name) + ' <span style="color:var(--ink4);margin-left:5px">' + n + "</span></a>";
        }).join("") + "</div>";

      DB.categories.forEach(function (c) {
        if (focusCat && focusCat !== c.id) return;
        var list = IDEAS.filter(function (i) { return i.category === c.id; }).sort(byBookThenNum);
        if (!list.length) return;
        html += '<div style="margin-bottom:26px"><h2 class="sec">' + esc(c.name) + " &nbsp;·&nbsp; " + list.length + "</h2>" +
          '<div class="klist">' + list.map(kRow).join("") + "</div></div>";
      });
    }
    return html + footnote() + "</div>";
  }
  function kRow(i) {
    var st = ui(i.id), b = bookById[i.book_id];
    return '<a class="kitem" href="#/idea/' + i.id + '"><span style="flex:1;min-width:0">' +
      '<span class="ktitle" style="display:block">' + esc(i.title) + "</span>" +
      '<span class="kthesis">' + esc(i.thesis) + "</span></span>" +
      '<span class="kbook" title="' + esc(b.title) + '" style="font-size:' + (b.cover.letter.length > 1 ? "8.5px" : "11px") +
      ";background:" + hsl(b.cover.hue, 18, 34) + '">' + esc(b.cover.letter) + "</span>" +
      (st.learned ? '<span class="kchk">' + IC.chk + "</span>" : st.saved ? '<span class="kchk">' + IC.bmf + "</span>" : "") + "</a>";
  }

  function viewSaved() {
    var tab = S.ui.savedTab, f = S.ui.savedFilter;
    var list = Object.keys(S.data.ideas).filter(function (k) { return S.data.ideas[k][tab] && byId[k]; }).map(function (k) { return byId[k]; });
    list = list.filter(function (i) {
      return (!f.book || i.book_id === f.book) && (!f.cat || i.category === f.cat) && (!f.model || i.models.indexOf(f.model) >= 0);
    }).sort(byBookThenNum);

    var html = '<div class="page"><h1 class="display" style="margin-top:14px">Saved</h1>' +
      '<p class="meta" style="margin:0 0 18px">Your collection, notes and states</p>' +
      '<div class="stats" style="margin-bottom:18px">' +
      ["saved", "learned", "applied"].map(function (k) {
        return '<div class="stat"><b>' + countState(k) + "</b><span>" + k.toUpperCase() + "</span></div>";
      }).join("") + "</div>" +
      '<div class="seg" style="margin-bottom:14px">' +
      ["saved", "learned", "applied"].map(function (k) {
        return '<button data-act="stab" data-tab="' + k + '" class="' + (tab === k ? "on" : "") + '">' + k[0].toUpperCase() + k.slice(1) + "</button>";
      }).join("") + "</div>" +
      '<div class="filters" style="margin-bottom:20px">' +
      sel("fbook", "All books", DB.books.map(function (b) { return [b.id, b.title]; }), f.book) +
      sel("fcat", "All categories", DB.categories.map(function (c) { return [c.id, c.name]; }), f.cat) +
      sel("fmodel", "All mental models", DB.mental_models.map(function (m) { return [m.id, m.name]; }), f.model) +
      "</div>";

    if (!list.length) {
      var emptyIcon = tab === "saved" ? IC.bm : tab === "learned" ? IC.chk : IC.spark;
      html += '<div class="empty"><span class="eicon">' + emptyIcon + '</span><p class="em">Nothing here yet</p><p style="font-size:13.5px;max-width:300px;margin:0 auto">' +
        (tab === "saved" ? "Save an idea from the feed or from any idea page and it will collect here."
          : tab === "learned" ? "Mark an idea as learned once you can explain it without reading it again."
            : "Use Apply this idea on a real decision and it will appear here.") + "</p>" +
        '<div style="margin-top:18px"><a class="btn" href="#/home">Find an idea' + IC.arrow + "</a></div></div>";
    } else {
      html += list.map(function (i) {
        var st = ui(i.id), b = bookById[i.book_id];
        return '<article class="card rowcard tap"><a href="#/idea/' + i.id + '" style="display:block">' +
          '<div class="eyebrow">' + esc(i.title.toUpperCase()) + "</div>" +
          '<p class="rthesis">' + esc(i.thesis) + "</p>" +
          '<div class="src">' + esc(b.title) + "</div>" +
          (st.note ? '<p style="font-family:var(--serif);font-size:15px;line-height:1.55;color:var(--ink2);margin:12px 0 0;padding-left:12px;border-left:2px solid var(--accent-line)">' + esc(st.note) + "</p>" : "") +
          "</a><div class=\"cardfoot\" style=\"margin-top:14px\">" +
          (st.learned ? '<span class="pill state">Learned</span>' : "") +
          (st.applied ? '<span class="pill state">Applied</span>' : "") +
          '<span class="sp"></span><span class="meta">' + esc(catById[i.category].name) + "</span></div></article>";
      }).join("");
    }
    return html + footnote() + "</div>";
  }
  function sel(id, ph, opts, val) {
    return '<select data-act="filter" id="' + id + '"><option value="">' + ph + "</option>" +
      opts.map(function (o) { return '<option value="' + o[0] + '"' + (val === o[0] ? " selected" : "") + ">" + esc(o[1]) + "</option>"; }).join("") + "</select>";
  }

  function notFound() {
    return '<div class="page"><div class="empty"><span class="eicon">' + IC.find + '</span>' +
      '<p class="em">Page not found</p><p style="font-size:13.5px;max-width:300px;margin:0 auto">' +
      "That link doesn't match anything in the library, it may be out of date.</p>" +
      '<div style="margin-top:18px"><a class="btn" href="#/home">Back to Home</a></div></div></div>';
  }
  function footnote() {
    return '<p class="footnote">' + esc(DB.meta.content_note) + "</p>";
  }

  /* ============================ search overlay ============================ */
  function openSearch() {
    var ov = document.createElement("div");
    ov.className = "overlay"; ov.id = "ov";
    ov.innerHTML = '<div class="ovhead"><div class="searchwrap" style="flex:1">' + IC.search +
      '<input id="q" placeholder="Search ideas, models, books..." autocomplete="off" value="' + esc(S.ui.q) + '"></div>' +
      '<button class="iconbtn" data-act="search-close">' + IC.x + "</button></div>" +
      '<div class="ovbody" id="qres"></div>';
    document.body.appendChild(ov);
    var input = $("#q", ov);
    input.addEventListener("input", function () { S.ui.q = input.value; renderResults(); });
    input.focus();
    renderResults();
  }
  function closeSearch() { var o = $("#ov"); if (o) o.remove(); }
  function renderResults() {
    var box = $("#qres"); if (!box) return;
    var q = S.ui.q.trim();
    if (!q) {
      box.innerHTML = '<p class="hint">Search across idea names, theses, explanations, books, mental models and categories. ' +
        'Keyword matching is expanded with related concepts, so a question in plain language usually finds the right ideas.</p>' +
        '<div class="sugg">' + ["How do I avoid catastrophic investment mistakes?", "Why do smart people make bad decisions?",
          "How should I think about a competitor cutting price?", "What matters when hiring?"]
          .map(function (s) { return '<button class="tag" data-act="qfill" data-q="' + esc(s) + '">' + esc(s) + "</button>"; }).join("") + "</div>";
      return;
    }
    var res = search(q, 14);
    if (!res.length) {
      box.innerHTML = '<p class="hint">No matches for &ldquo;' + esc(q) + '&rdquo;. Try a concept rather than a phrase, for example risk, incentives, patience or luck.</p>';
      return;
    }
    box.innerHTML = '<p class="meta" style="margin-bottom:14px">' + plural(res.length, "result") + '</p><div class="klist">' +
      res.map(function (r) { return kRow(byId[r.id]); }).join("") + "</div>";
  }

  /* ============================ apply sheet ============================ */
  function openApply(id) {
    var i = byId[id];
    var m = document.createElement("div");
    m.className = "modal"; m.id = "sheet";
    m.innerHTML = '<div class="sheet"><div class="sheethead">' +
      '<div><div class="eyebrow">APPLY THIS IDEA</div>' +
      '<div style="font-family:var(--serif);font-size:21px;letter-spacing:-.01em;margin-top:2px">' + esc(i.title) + "</div></div>" +
      '<span style="flex:1"></span><button class="iconbtn" data-act="close-sheet">' + IC.x + "</button></div>" +
      '<div class="sheetbody"><div class="lbl eyebrow" style="margin-bottom:9px">WHAT ARE YOU THINKING ABOUT?</div>' +
      '<div class="notewrap"><textarea id="ainput" style="min-height:104px" placeholder="Paste a problem, decision or question..."></textarea></div>' +
      '<div class="btnrow" style="margin-top:12px"><button class="btn primary" data-act="run-apply" data-id="' + id + '">' + IC.spark + "Apply</button>" +
      '<button class="btn gh" data-act="afill">Use an example</button></div>' +
      '<div id="aout"></div></div></div>';
    document.body.appendChild(m);
    m.addEventListener("click", function (e) { if (e.target === m) closeSheet(); });
    $("#ainput", m).focus();
  }
  function closeSheet() { var s = $("#sheet"); if (s) s.remove(); }

  function renderApplyOut(id) {
    var text = $("#ainput").value.trim();
    var out = $("#aout");
    if (text.length < 12) {
      out.innerHTML = '<p class="hint" style="margin-top:16px">Describe the problem in a sentence or two and this will apply the idea to it.</p>';
      return;
    }
    var r = runApply(id, text);
    var st = ui(id);
    st.applied = true;
    save();
    out.innerHTML = '<div class="applyout">' +
      '<hr class="sectionrule" style="margin:22px 0 20px">' +
      '<div class="ablk"><div class="eyebrow">APPLYING ' + esc(r.idea.title.toUpperCase()) + "</div>" +
      '<p class="lead" style="font-size:19px;margin-top:9px">' + esc(r.idea.practical.lead) + "</p>" +
      (r.signals.length ? '<div class="chips">' + r.signals.map(function (s) { return '<span class="chip">' + esc(s.label) + "</span>"; }).join("") + "</div>" : "") +
      "</div>" +

      (r.generated.length
        ? '<div class="ablk"><div class="eyebrow">QUESTIONS FROM WHAT YOU WROTE</div><div class="practice" style="margin-top:10px"><ul>' +
        r.generated.map(function (q) { return '<li style="color:var(--ink)">' + esc(q) + "</li>"; }).join("") + "</ul></div></div>"
        : "") +

      '<div class="ablk"><div class="eyebrow">RUN THROUGH THE FRAMEWORK</div><div class="practice" style="margin-top:10px">' +
      '<div class="eyebrow" style="margin-bottom:9px">' + esc(r.idea.practical.label.toUpperCase()) + "</div><ul>" +
      r.questions.map(function (q) { return "<li>" + esc(q) + "</li>"; }).join("") +
      "</ul></div></div>" +

      '<div class="ablk"><div class="eyebrow">ALSO CONSIDER</div>' +
      '<p class="meta" style="margin:6px 0 10px">Drawn from the ' + IDEAS.length + " ideas in your library</p>" +
      '<div class="relgrid">' + r.related.map(function (x) {
        var i2 = byId[x.id], b2 = bookById[i2.book_id];
        return '<a class="rel" href="#/idea/' + x.id + '" data-act="close-sheet-nav">' +
          '<div><div class="rt">' + esc(i2.title) + "</div>" +
          '<div class="rs">' + esc(b2.title) + "</div>" +
          '<div style="font-size:13px;color:var(--ink2);line-height:1.45;margin-top:6px">' + esc(i2.thesis) + "</div></div>" +
          '<span class="arrow">' + IC.arrow + "</span></a>";
      }).join("") + "</div></div>" +

      '<div class="ablk"><div class="eyebrow">NEXT STEP</div>' +
      '<p class="prose" style="font-size:16px;margin-top:8px">Answer the first question in writing before you go any further. If you cannot answer it with evidence rather than argument, that is the gap in the decision.</p>' +
      '<div class="btnrow" style="margin-top:12px">' +
      '<button class="btn" data-act="tonote" data-id="' + id + '">Save this to my note</button>' +
      '<button class="btn gh" data-act="close-sheet">Done</button></div></div>' +

      '<p class="footnote">Prototype behaviour: this response is produced by retrieving the most relevant ideas in your library and applying the authored framework for this idea to signals found in your text. It does not call a language model, and it does not generate source material.</p>' +
      "</div>";
    var sheet = document.querySelector("#sheet .sheet");
    if (sheet) sheet.scrollTo({ top: Math.max(0, out.offsetTop - 86), behavior: "smooth" });
  }

  /* ============================ find screen ============================ */
  function viewFind() {
    var q = S.ui.findQ || "";
    return '<div class="page">' +
      '<h1 class="display">Find what applies</h1>' +
      '<p class="meta" style="margin:0 0 18px">Describe a situation, problem or task in your own words. This checks it against ' +
      plural(IDEAS.length, "idea") + ' across ' + plural(DB.books.length, "book") +
      ', by concept rather than an AI reading of your situation, and surfaces the books and specific ideas most likely to help.</p>' +
      '<div class="notewrap"><textarea id="findq" style="min-height:120px" placeholder="Describe a situation, problem or task...">' + esc(q) + "</textarea></div>" +
      '<div class="btnrow" style="margin-top:12px"><button class="btn primary" data-act="run-find">' + IC.spark + "Find</button></div>" +
      '<div id="findout">' + (q.trim().length >= 12 ? findResultsHTML(q) : findHintHTML(q)) + "</div>" +
      footnote() + "</div>";
  }
  function findHintHTML(q) {
    if (q && q.trim().length) {
      return '<p class="hint" style="margin-top:18px">Add a little more detail and this will surface what applies. A sentence or two, naming the decision, is usually enough.</p>';
    }
    return '<p class="hint" style="margin-top:18px">The more concrete the situation, the sharper the match. For example:</p>' +
      '<div class="sugg">' + FIND_EXAMPLES.map(function (s) {
        return '<button class="tag" data-act="findfill" data-q="' + esc(s) + '">' + esc(s) + "</button>";
      }).join("") + "</div>";
  }
  function findResultsHTML(q) {
    var r = findLibrary(q);
    if (!r.books.length) {
      return '<p class="hint" style="margin-top:18px">No clear matches yet for that. Try naming the sector, the stage, or the specific tension you are weighing.</p>';
    }
    var html = '<div class="applyout"><hr class="sectionrule" style="margin:22px 0 20px">';
    if (r.signals.length) {
      html += '<div class="eyebrow" style="margin-bottom:8px">PICKED UP FROM WHAT YOU WROTE</div>' +
        '<div class="chips" style="margin-bottom:20px">' + r.signals.map(function (s) { return '<span class="chip">' + esc(s.label) + "</span>"; }).join("") + "</div>";
    }
    html += '<div class="eyebrow" style="margin-bottom:14px">MOST RELEVANT BOOKS</div>';
    html += r.books.map(function (x) {
      var b = x.book;
      return '<div class="ablk" style="margin-bottom:24px">' +
        '<a href="#/book/' + b.id + '" style="display:flex;gap:14px;align-items:center;margin-bottom:12px">' + coverHTML(b) +
        '<div style="min-width:0"><div style="font-family:var(--serif);font-size:18px;letter-spacing:-.01em;color:var(--ink)">' + esc(b.title) + "</div>" +
        '<div class="src" style="margin-top:2px">' + esc(b.author) + "</div></div></a>" +
        '<div class="relgrid">' + x.ideas.map(function (i) {
          return '<a class="rel" href="#/idea/' + i.id + '"><div><div class="rt">' + esc(i.title) + "</div>" +
            '<div style="font-size:13px;color:var(--ink2);line-height:1.45;margin-top:4px">' + esc(i.thesis) + "</div></div>" +
            '<span class="arrow">' + IC.arrow + "</span></a>";
        }).join("") + "</div></div>";
    }).join("") + "</div>";
    return html;
  }
  function renderFindOut() {
    var box = $("#findout"); if (!box) return;
    var q = (S.ui.findQ || "").trim();
    box.innerHTML = q.length >= 12 ? findResultsHTML(q) : findHintHTML(q);
  }

  /* ============================ knowledge graph ============================ */
  /* Two levels: the whole library as books, and the local neighbourhood of one idea.
     Layout is radial and deterministic rather than force-directed, which keeps it
     legible on a phone and avoids animation the product does not need. */

  var REL = {
    reinforces: { c: "#2E5A4E", w: 1.8, d: "" },
    extends:    { c: "#7C7A72", w: 1.6, d: "" },
    related:    { c: "#B4B0A6", w: 1.2, d: "3 2.5" },
    contrasts:  { c: "#A2593B", w: 1.4, d: "1.5 2.5" }
  };
  function trunc(s, n) { return s.length > n ? s.slice(0, n - 1).replace(/[\s,]+$/, "") + "…" : s; }
  function pol(cx, cy, r, deg) {
    var a = (deg - 90) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a), Math.cos(a), Math.sin(a)];
  }
  function bookFill(b, light) { return hsl(b.cover.hue, light ? 14 : 18, light ? 52 : 34); }

  function relLegend() {
    return '<div class="glegend">' + ["reinforces", "extends", "related", "contrasts"].map(function (k) {
      return '<span><i style="border-top-style:' + (REL[k].d ? "dashed" : "solid") +
        ";border-top-color:" + REL[k].c + '"></i>' + k + "</span>";
    }).join("") + "</div>";
  }

  /* ---- library overview: books as nodes, cross-book connection counts as chords ---- */
  function bookPairs() {
    var bk = {}; IDEAS.forEach(function (i) { bk[i.id] = i.book_id; });
    var counts = {};
    CONNECTIONS.forEach(function (c) {
      var a = bk[c.source_idea_id], b = bk[c.target_idea_id];
      if (!a || !b || a === b) return;
      var k = a < b ? a + "|" + b : b + "|" + a;
      counts[k] = (counts[k] || 0) + 1;
    });
    var size = {};
    IDEAS.forEach(function (i) { size[i.book_id] = (size[i.book_id] || 0) + 1; });
    return Object.keys(counts).map(function (k) {
      var p = k.split("|");
      /* density normalises by how many pairings were available, so a 35-idea book
         does not top the list simply for being large */
      return { a: p[0], b: p[1], n: counts[k], d: counts[k] / (size[p[0]] * size[p[1]]) };
    }).sort(function (x, y) { return y.n - x.n; });
  }

  function shelfPairs() {
    var sh = {};
    IDEAS.forEach(function (i) { sh[i.id] = bookById[i.book_id].shelf; });
    var counts = {};
    CONNECTIONS.forEach(function (c) {
      var a = sh[c.source_idea_id], b = sh[c.target_idea_id];
      if (!a || !b || a === b) return;
      var k = a < b ? a + "|" + b : b + "|" + a;
      counts[k] = (counts[k] || 0) + 1;
    });
    return counts;
  }

  function pairRow(p) {
    var A = bookById[p.a], B = bookById[p.b];
    function dot(b) {
      return '<span class="gdot" style="font-size:' + (b.cover.letter.length > 1 ? 7.5 : 9.5) +
        "px;background:" + bookFill(b) + '">' + esc(b.cover.letter) + "</span>";
    }
    return '<div class="gpair"><span class="gpairbooks">' + dot(A) + dot(B) + "</span>" +
      '<span style="min-width:0">' + esc(A.title) + '<span class="dotsep"></span>' + esc(B.title) + "</span>" +
      '<span class="gp-n">' + p.n + "</span></div>";
  }

  function viewGraphOverview() {
    /* Shelf level, not book level. Thirty book nodes on one wheel is unreadable,
       and the interesting structure is between shelves anyway. */
    var live = DB.shelves.filter(function (s) {
      return DB.books.some(function (b) { return b.shelf === s.id; });
    });
    var sIdeas = {};
    live.forEach(function (s) {
      sIdeas[s.id] = IDEAS.filter(function (i) { return bookById[i.book_id].shelf === s.id; }).length;
    });
    var maxIdeas = Math.max.apply(null, live.map(function (s) { return sIdeas[s.id]; }));
    var counts = shelfPairs();
    var maxPair = Math.max.apply(null, [1].concat(Object.keys(counts).map(function (k) { return counts[k]; })));

    var C = 200, R = 116, pos = {};
    live.forEach(function (s, i) {
      var pt = pol(C, C, R, i * 360 / live.length);
      pos[s.id] = { x: pt[0], y: pt[1], cos: pt[2], sin: pt[3], r: 13 + 17 * (sIdeas[s.id] / maxIdeas) };
    });

    var chords = Object.keys(counts).map(function (k) {
      var ab = k.split("|"), A = pos[ab[0]], B = pos[ab[1]];
      if (!A || !B) return "";
      var w = counts[k] / maxPair;
      var mx = (A.x + B.x) / 2, my = (A.y + B.y) / 2;
      return '<path d="M' + A.x.toFixed(1) + " " + A.y.toFixed(1) + " Q" +
        (C + (mx - C) * 0.2).toFixed(1) + " " + (C + (my - C) * 0.2).toFixed(1) + " " +
        B.x.toFixed(1) + " " + B.y.toFixed(1) + '" fill="none" stroke="#2E5A4E" stroke-width="' +
        (0.7 + w * 4).toFixed(2) + '" opacity="' + (0.14 + w * 0.36).toFixed(2) + '"/>';
    }).join("");

    var nodes = live.map(function (s, i) {
      var P = pos[s.id], short = s.name.split(" ")[0];
      var vertical = Math.abs(P.cos) < 0.32;
      var anchor = vertical ? "middle" : P.cos > 0 ? "start" : "end";
      var lp = pol(C, C, R + P.r + 12, i * 360 / live.length);
      var dy = vertical ? (P.sin > 0 ? 12 : -8) : 3.2;
      return '<a class="gnode" href="#/library"><title>' + esc(s.name) + ", " + plural(sIdeas[s.id], "idea") +
        '</title><circle cx="' + P.x.toFixed(1) + '" cy="' + P.y.toFixed(1) + '" r="' + P.r.toFixed(1) +
        '" fill="#3D5A50"/>' +
        '<text x="' + lp[0].toFixed(1) + '" y="' + (lp[1] + dy).toFixed(1) + '" text-anchor="' + anchor +
        '" style="paint-order:stroke;stroke:var(--paper);stroke-width:3.5px;stroke-linejoin:round;font-size:10px">' +
        esc(short) + "</text></a>";
    }).join("");

    var cross = 0, bk = {};
    IDEAS.forEach(function (i) { bk[i.id] = i.book_id; });
    CONNECTIONS.forEach(function (c) { if (bk[c.source_idea_id] !== bk[c.target_idea_id]) cross++; });

    var pairs = bookPairs();
    var byDensity = pairs.slice().sort(function (x, y) { return y.d - x.d; }).slice(0, 10);

    return '<div class="page"><h1 class="display" style="margin-top:14px">The latticework</h1>' +
      '<p class="meta" style="margin:0 0 6px">' + plural(IDEAS.length, "idea") + " in " + plural(DB.books.length, "book") +
      " across " + live.length + " shelves, joined by " + CONNECTIONS.length.toLocaleString() + " connections. " +
      Math.round(100 * cross / CONNECTIONS.length) + "% of them cross from one book to another.</p>" +
      '<div class="seg" style="margin:14px 0 16px">' +
      '<button data-act="tab" data-tab="category">By category</button>' +
      '<button data-act="tab" data-tab="model">By mental model</button>' +
      '<button class="on">As a graph</button></div>' +

      '<div class="graphwrap"><svg viewBox="0 22 400 356" role="img" aria-label="Shelves in the library joined by shared ideas">' +
      chords + nodes + "</svg></div>" +
      '<p class="meta" style="margin:0 0 24px">Each circle is a shelf, sized by how many ideas it holds. ' +
      'A line means ideas on those two shelves connect, and the heavier the line the more they do. Tap a shelf to open the library.</p>' +

      '<h2 class="sec">Where the library binds together</h2>' +
      '<p class="meta" style="margin:-4px 0 10px">Book pairs by number of shared connections. The largest books lead, ' +
      'which is arithmetic rather than meaning, so the second list adjusts for size.</p>' +
      '<div class="klist" style="margin-bottom:26px">' + pairs.slice(0, 8).map(pairRow).join("") + "</div>" +

      '<h2 class="sec">Tightest relative to size</h2>' +
      '<p class="meta" style="margin:-4px 0 10px">The same pairs ranked by connections per available pairing, ' +
      'which surfaces small books that are densely tied in.</p>' +
      '<div class="klist">' + byDensity.slice(0, 6).map(pairRow).join("") + "</div>" +

      '<div style="margin-top:20px"><a class="btn" href="#/graph/inversion">Explore from a single idea' + IC.arrow + "</a></div>" +
      footnote() + "</div>";
  }

  /* ---- local neighbourhood of one idea ---- */
  function viewGraphLocal(id) {
    var centre = byId[id];
    if (!centre) return notFound();
    var cb = bookById[centre.book_id];
    var C = 200, R1 = 96, R2 = 156;
    var used = {}; used[id] = 1;

    var ring1 = centre.connections.slice(0, 6).filter(function (c) { return byId[c.to]; });
    ring1.forEach(function (c) { used[c.to] = 1; });
    var step = 360 / Math.max(ring1.length, 1);

    var edges = "", nodes = "";

    ring1.forEach(function (c, i) {
      var idea = byId[c.to], b = bookById[idea.book_id], st = REL[c.type] || REL.related;
      var deg = i * step, p = pol(C, C, R1, deg);

      /* second ring: this neighbour's own connections that are not already on screen */
      var kids = idea.connections.filter(function (k) { return byId[k.to] && !used[k.to]; }).slice(0, 2);
      kids.forEach(function (k, j) {
        used[k.to] = 1;
        var kidea = byId[k.to], kb = bookById[kidea.book_id], kst = REL[k.type] || REL.related;
        var off = (kids.length === 1 ? 0 : (j === 0 ? -1 : 1)) * step * 0.28;
        var q = pol(C, C, R2, deg + off);
        edges += '<line x1="' + p[0].toFixed(1) + '" y1="' + p[1].toFixed(1) + '" x2="' + q[0].toFixed(1) +
          '" y2="' + q[1].toFixed(1) + '" stroke="' + kst.c + '" stroke-width="' + (kst.w * 0.7).toFixed(2) +
          '" opacity="0.45"' + (kst.d ? ' stroke-dasharray="' + kst.d + '"' : "") + "/>";
        nodes += '<a class="gnode" href="#/graph/' + k.to + '"><title>' + esc(kidea.title) + " · " + esc(kb.title) +
          '</title><circle cx="' + q[0].toFixed(1) + '" cy="' + q[1].toFixed(1) + '" r="6.6" fill="' + bookFill(kb, true) + '"/></a>';
      });

      edges += '<line x1="' + C + '" y1="' + C + '" x2="' + p[0].toFixed(1) + '" y2="' + p[1].toFixed(1) +
        '" stroke="' + st.c + '" stroke-width="' + st.w + '"' + (st.d ? ' stroke-dasharray="' + st.d + '"' : "") + "/>";
      nodes += '<a class="gnode" href="#/graph/' + c.to + '"><title>' + esc(idea.title) + " · " + esc(b.title) +
        '</title><circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="17" fill="' + bookFill(b) + '"/>' +
        '<text class="gmono" x="' + p[0].toFixed(1) + '" y="' + p[1].toFixed(1) + '" style="font-size:14px">' +
        (i + 1) + "</text></a>";
    });

    /* The centre carries no glyph. Ring nodes are numbered, and one book's monogram
       is the character "7", which would read as part of that numbering. */
    var centreNode = '<a class="gnode gcentre" href="#/idea/' + id + '"><title>Read ' + esc(centre.title) +
      '</title><circle cx="' + C + '" cy="' + C + '" r="29" fill="' + bookFill(cb) + '"/>' +
      '<circle cx="' + C + '" cy="' + C + '" r="20" fill="none" stroke="rgba(255,255,255,.5)" stroke-width="1"/>' +
      '<circle cx="' + C + '" cy="' + C + '" r="35" fill="none" stroke="' + bookFill(cb) + '" stroke-width="1" opacity="0.3"/></a>';

    /* Numbered nodes plus a list beneath, rather than labels inside the picture.
       Two ideas in this library share the title Margin of Safety, so the book has to be
       visible, and titles do not survive truncation at phone width. */
    var list = ring1.map(function (c, i) {
      var idea = byId[c.to], b = bookById[idea.book_id];
      return '<a class="rel" href="#/idea/' + c.to + '">' +
        '<span class="gnum" style="background:' + bookFill(b) + '">' + (i + 1) + "</span>" +
        '<div style="min-width:0;flex:1"><div class="rt">' + esc(idea.title) + "</div>" +
        '<div class="rs">' + esc(b.title) + '<span class="dotsep"></span><span style="color:' +
        (REL[c.type] || REL.related).c + '">' + esc(c.type) + "</span></div></div>" +
        '<span class="arrow">' + IC.arrow + "</span></a>";
    }).join("");

    var outer = Object.keys(used).length - 1 - ring1.length;

    return '<div class="page"><a class="back" href="#/graph">' + IC.back + "The latticework</a>" +
      '<div class="eyebrow" style="margin:8px 0 6px">CONNECTIONS</div>' +
      '<h1 class="display" style="margin-top:0">' + esc(centre.title) + "</h1>" +
      '<p class="meta" style="margin:0 0 16px">' + esc(cb.title) + '<span class="dotsep"></span>' +
      ring1.length + " direct, " + outer + " one step further</p>" +

      '<div class="graphwrap"><svg viewBox="28 28 344 344" role="img" aria-label="Ideas connected to ' +
      esc(centre.title) + '">' + edges + nodes + centreNode + "</svg></div>" +
      relLegend() +
      '<div class="relgrid" style="margin-bottom:16px">' + list + "</div>" +
      '<p class="meta" style="margin:0 0 20px">The centre is this idea and the numbered circles are what it connects to ' +
      'directly, listed above. The small outer dots are one step further out. Tap a circle in the picture to re-centre ' +
      'the graph there, or a row in the list to read that idea.</p>' +
      '<div class="btnrow"><a class="btn primary" href="#/idea/' + id + '">Read this idea' + IC.arrow + "</a>" +
      '<a class="btn" href="#/graph">Whole library</a></div>' +
      footnote() + "</div>";
  }

  /* ============================ chrome ============================ */
  function topbar(title) {
    return '<div class="topbar" id="topbar"><div class="topbar-in">' +
      '<span class="brand">Latticework<span class="dot">.</span></span><span class="sp"></span>' +
      '<button class="iconbtn" data-act="search-open" aria-label="Search">' + IC.search + "</button>" +
      "</div></div>";
  }
  function nav(active) {
    var items = [["home", "Home", IC.home], ["find", "Find", IC.find], ["library", "Library", IC.library], ["ideas", "Ideas", IC.ideas], ["saved", "Saved", IC.saved]];
    return '<nav class="nav"><span class="navbrand" style="display:none">Latticework<span style="color:var(--accent)">.</span></span>' +
      items.map(function (it) {
        return '<a href="#/' + it[0] + '" class="' + (active === it[0] ? "on" : "") + '">' + it[2] + "<span>" + it[1] + "</span></a>";
      }).join("") +
      '<div class="navfoot" style="display:none">' + (S.user ? esc(S.user.email) : "Guest session") +
      '<br><button data-act="signout" style="text-decoration:underline;color:var(--ink4);font-size:11.5px;margin-top:4px">' +
      (S.user ? "Sign out" : "Sign in") + "</button></div></nav>";
  }
  function fixDesktopNav() {
    var isD = window.matchMedia("(min-width:900px)").matches;
    var nb = document.querySelector(".navbrand"), nf = document.querySelector(".navfoot");
    if (nb) nb.style.display = isD ? "block" : "none";
    if (nf) nf.style.display = isD ? "block" : "none";
  }

  /* ============================ router ============================ */
  function parse() {
    var h = (location.hash || "#/home").replace(/^#\/?/, "");
    var p = h.split("/").filter(Boolean);
    return { name: p[0] || "home", a: p[1] || null, b: p[2] || null };
  }
  var lastRoute = "";
  function render() {
    if (!S.user && !S.guest) { renderGate(); return; }
    var r = parse(), body, active = r.name;
    if (r.name !== "idea") S.ui.lastList = ["home", "library", "ideas", "saved", "book", "find"].indexOf(r.name) >= 0
      ? (r.name === "book" ? "book/" + r.a : r.name) : "ideas";
    switch (r.name) {
      case "library": body = viewLibrary(); break;
      case "book": body = viewBook(r.a); active = "library"; break;
      case "idea": body = viewIdea(r.a); active = "ideas"; break;
      case "ideas": body = viewIdeas(r.a === "model" ? "model" : "category", r.a === "model" || r.a === "category" ? r.b : r.a); break;
      case "saved": body = viewSaved(); break;
      case "graph": body = r.a ? viewGraphLocal(r.a) : viewGraphOverview(); active = "ideas"; break;
      case "find": body = viewFind(); break;
      case "home": body = viewHome(); break;
      default: body = notFound(); active = "home";
    }
    $("#app").innerHTML = topbar() + '<div class="shell">' + body + "</div>" + nav(active);
    fixDesktopNav();
    var routeKey = r.name + "/" + r.a;
    if (routeKey !== lastRoute) { window.scrollTo(0, 0); lastRoute = routeKey; }
  }

  function renderGate() {
    $("#app").innerHTML = '<div class="gate"><div class="gatebox">' +
      '<div class="gbrand"><span class="gmark" style="background:linear-gradient(150deg,' +
      hsl(164, 18, 34) + ',' + hsl(164, 24, 20) + ')">L.</span>' +
      '<span class="eyebrow acc">LATTICEWORK</span></div>' +
      "<h1>Get more from what you read</h1>" +
      "<p>A connected library of ideas, mental models and applications from the books worth thinking about. " +
      "Sign in with your email so your saved ideas and notes stay yours.</p>" +
      '<div class="stats gstats">' +
      '<div class="stat"><b>' + DB.books.length + '</b><span>BOOKS</span></div>' +
      '<div class="stat"><b>' + IDEAS.length + '</b><span>IDEAS</span></div>' +
      '<div class="stat"><b>' + DB.mental_models.length + '</b><span>MODELS</span></div></div>' +
      '<div class="err" id="gerr"></div>' +
      '<input id="gemail" type="email" placeholder="you@example.com" autocomplete="email">' +
      '<button class="btn primary" style="width:100%;height:46px" data-act="signin">Continue</button>' +
      '<div style="text-align:center;margin-top:14px"><button class="btn gh sm" data-act="guest">Continue without an account</button></div>' +
      '<p class="footnote" style="margin-top:26px">Prototype authentication. The email identifies your collection on this device and nothing is sent anywhere.</p>' +
      "</div></div>";
    var inp = $("#gemail");
    inp.addEventListener("keydown", function (e) { if (e.key === "Enter") doSignin(); });
    inp.focus();
  }
  function doSignin() {
    var v = ($("#gemail").value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { $("#gerr").textContent = "Enter a valid email address."; return; }
    S.user = { email: v };
    store("lw:v1:account", S.user);
    load();
    location.hash = "#/home";
    render();
  }

  /* ============================ events ============================ */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-act]");
    if (!t) return;
    var act = t.getAttribute("data-act"), id = t.getAttribute("data-id");

    if (act === "save") {
      e.preventDefault(); var st = ui(id); st.saved = !st.saved; save();
      toast(st.saved ? "Saved to your collection" : "Removed from Saved"); render(); return;
    }
    if (act === "learn") {
      e.preventDefault(); var s2 = ui(id); s2.learned = !s2.learned; save();
      toast(s2.learned ? "Marked as learned" : "No longer marked as learned"); render(); return;
    }
    if (act === "savenote") {
      e.preventDefault(); var s3 = ui(id); s3.note = $("#note").value; save();
      $("#notehint").textContent = s3.note ? "Note saved" : "Note cleared";
      setTimeout(function () { var h = $("#notehint"); if (h) h.textContent = ""; }, 2200); return;
    }
    if (act === "apply") { e.preventDefault(); openApply(id); return; }
    if (act === "run-apply") { e.preventDefault(); renderApplyOut(id); return; }
    if (act === "run-find") { e.preventDefault(); S.ui.findQ = $("#findq").value.trim(); renderFindOut(); return; }
    if (act === "findfill") {
      e.preventDefault();
      var fq = t.getAttribute("data-q");
      S.ui.findQ = fq;
      var fta = $("#findq"); if (fta) fta.value = fq;
      renderFindOut();
      return;
    }
    if (act === "afill") {
      e.preventDefault();
      $("#ainput").value = "I'm considering investing in a Series A SaaS company growing 80% year-on-year, at a $40m pre-money valuation.";
      return;
    }
    if (act === "tonote") {
      e.preventDefault();
      var i = byId[id], st4 = ui(id), inp = $("#ainput").value.trim();
      var add = "Applied to: " + inp + "\nKey question: " + (i.practical.bullets[0] || "");
      st4.note = st4.note ? st4.note + "\n\n" + add : add;
      st4.saved = true; save(); toast("Saved to your note"); closeSheet(); render(); return;
    }
    if (act === "close-sheet") { e.preventDefault(); closeSheet(); render(); return; }
    if (act === "close-sheet-nav") { closeSheet(); return; }
    if (act === "search-open") { e.preventDefault(); openSearch(); return; }
    if (act === "search-close") { e.preventDefault(); closeSearch(); return; }
    if (act === "qfill") { e.preventDefault(); S.ui.q = t.getAttribute("data-q"); $("#q").value = S.ui.q; renderResults(); return; }
    if (act === "tab") {
      e.preventDefault();
      var tab = t.getAttribute("data-tab");
      location.hash = tab === "model" ? "#/ideas/model" : tab === "graph" ? "#/graph" : "#/ideas";
      return;
    }
    if (act === "stab") { e.preventDefault(); S.ui.savedTab = t.getAttribute("data-tab"); render(); return; }
    if (act === "signin") { e.preventDefault(); doSignin(); return; }
    if (act === "guest") { e.preventDefault(); store("lw:v1:guest", true); S.guest = true; load(); render(); return; }
    if (act === "signout") {
      e.preventDefault();
      try { localStorage.removeItem("lw:v1:account"); localStorage.removeItem("lw:v1:guest"); } catch (x) {}
      S.user = null; S.guest = false; S.data = { ideas: {}, viewed: [], recentBooks: [] }; render(); return;
    }
  });

  document.addEventListener("change", function (e) {
    if (!e.target.matches("[data-act='filter']")) return;
    var id = e.target.id, v = e.target.value;
    if (id === "fbook") S.ui.savedFilter.book = v;
    if (id === "fcat") S.ui.savedFilter.cat = v;
    if (id === "fmodel") S.ui.savedFilter.model = v;
    render();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeSearch(); closeSheet(); }
    if ((e.key === "/" || (e.key === "k" && (e.metaKey || e.ctrlKey))) && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault(); if (!$("#ov")) openSearch();
    }
  });

  window.addEventListener("hashchange", function () { closeSearch(); closeSheet(); render(); });
  window.addEventListener("scroll", function () {
    var tb = $("#topbar"); if (tb) tb.classList.toggle("scrolled", window.scrollY > 4);
  }, { passive: true });
  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(render, 180); });

  /* ============================ boot ============================ */
  window.LW = { DB: DB, IDEA_MODELS: IDEA_MODELS, CONNECTIONS: CONNECTIONS, QUOTES: QUOTES, search: search, state: S };
  load();
  if (!location.hash) location.hash = "#/home";
  render();
})();
