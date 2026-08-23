/* Third pass of cross-book connections, among the later ten books.
   Those files were written in parallel, so each could only link back into the
   library that existed at the time, which was weighted towards Poor Charlie's.
   These links join the newer books to each other where the pairing is genuine,
   including the two Taleb titles, which otherwise had nothing between them. */
(function () {
  var X = [
    ["pcs-five-forces", "s7p-power", "extends"],
    ["pcs-entry-barriers", "s7p-benefit-and-barrier", "extends"],
    ["pcs-rivalry", "s7p-counter-positioning", "related"],
    ["pcs-buyer-power", "s7p-switching-costs", "contrasts"],
    ["pcs-generic-strategies", "s7p-branding", "related"],
    ["pcs-industry-structure", "s7p-scale-economies", "related"],
    ["pcs-substitutes", "tos-disciplined-acquisitions", "related"],
    ["pcs-competitor-analysis", "fsh-why-it-happens", "related"],
    ["pcs-strategic-groups", "csup-margins", "related"],
    ["pcs-industry-evolution", "tmit-cycles", "related"],

    ["s7p-power", "pcs-five-forces", "extends"],
    ["s7p-process-power", "csup-research-engine", "related"],
    ["s7p-switching-costs", "csup-margins", "related"],
    ["s7p-cornered-resource", "tpl-clusters", "related"],
    ["s7p-not-operations", "tos-capital-allocation", "related"],

    ["tmit-risk-is-loss", "tbs-mediocristan", "extends"],
    ["tmit-role-of-luck", "fbr-alternative-histories", "extends"],
    ["tmit-cannot-predict", "tbs-forecasting-limits", "reinforces"],
    ["tmit-pendulum", "pom-no-one-is-crazy", "related"],
    ["tmit-defence-first", "pom-getting-vs-keeping", "reinforces"],
    ["tmit-price-is-everything", "csup-long-horizon", "contrasts"],
    ["tmit-knowing-where-we-stand", "tpl-late-stage-drift", "related"],
    ["tmit-avoiding-pitfalls", "fsh-forensic-checklist", "related"],

    ["csup-margins", "pcs-industry-structure", "related"],
    ["csup-people-depth", "tos-decentralisation", "related"],
    ["csup-integrity", "fsh-governance-signals", "reinforces"],
    ["csup-when-to-sell", "tmit-patient-opportunism", "related"],
    ["csup-conservative-investor", "tmit-defence-first", "reinforces"],
    ["csup-research-engine", "s7p-process-power", "related"],
    ["csup-sales-organisation", "s7p-branding", "related"],

    ["tos-cash-flow-per-share", "fsh-cash-versus-earnings", "reinforces"],
    ["tos-disciplined-acquisitions", "fsh-acquisition-accounting", "related"],
    ["tos-ignore-the-street", "tmit-contrarianism", "reinforces"],
    ["tos-leverage", "tbs-robustness", "related"],
    ["tos-denominator", "pom-confounding-compounding", "related"],
    ["tos-outsider-temperament", "csup-integrity", "related"],

    ["tpl-power-law-returns", "tbs-mediocristan", "extends"],
    ["tpl-risk-capital", "tbs-convexity", "related"],
    ["tpl-skill-or-luck", "fbr-lucky-fool", "extends"],
    ["tpl-networks", "s7p-network-economies", "contrasts"],
    ["tpl-late-stage-drift", "tmit-cycles", "related"],
    ["tpl-governance-limits", "fsh-governance-signals", "related"],
    ["tpl-founder-power", "pcs-buyer-power", "related"],
    ["tpl-clusters", "s7p-cornered-resource", "related"],

    ["fbr-alternative-histories", "tbs-ludic-fallacy", "extends"],
    ["fbr-rare-events", "tbs-black-swan", "extends"],
    ["fbr-asymmetry", "tbs-convexity", "extends"],
    ["fbr-hindsight-habit", "tbs-narrative-fallacy", "extends"],
    ["fbr-survivorship-in-data", "tbs-silent-evidence", "extends"],
    ["fbr-not-wired", "tbs-mediocristan", "related"],
    ["fbr-humility", "tbs-expert-problem", "reinforces"],
    ["fbr-noise-and-signal", "tmit-cycles", "related"],
    ["fbr-probability-vs-expectation", "tpl-power-law-returns", "related"],

    ["tbs-problem-of-induction", "fbr-rare-events", "reinforces"],
    ["tbs-barbell", "fbr-asymmetry", "reinforces"],
    ["tbs-scalability", "tpl-power-law-returns", "related"],
    ["tbs-expert-problem", "tmit-cannot-predict", "related"],
    ["tbs-robustness", "tos-leverage", "related"],

    ["pom-luck-and-risk", "fbr-alternative-histories", "extends"],
    ["pom-room-for-error", "tmit-risk-is-loss", "reinforces"],
    ["pom-never-enough", "tos-outsider-temperament", "contrasts"],
    ["pom-price-of-returns", "tmit-cycles", "related"],
    ["pom-confounding-compounding", "csup-long-horizon", "reinforces"],
    ["pom-tails-drive-everything", "tpl-power-law-returns", "reinforces"],

    ["fsh-metric-games", "tpl-late-stage-drift", "related"],
    ["fsh-governance-signals", "tos-ignore-the-street", "related"],
    ["fsh-forensic-checklist", "csup-scuttlebutt", "related"]
  ];

  var MAX = 5, byId = {}, missing = [];
  window.DB.ideas.forEach(function (i) { byId[i.id] = i; });
  X.forEach(function (row) {
    var idea = byId[row[0]];
    if (!idea || !byId[row[1]]) { missing.push(row[0] + " -> " + row[1]); return; }
    if (idea.connections.some(function (c) { return c.to === row[1]; })) return;
    idea.connections.splice(3, 0, { to: row[1], type: row[2] });
    idea.connections = idea.connections.slice(0, MAX);
  });
  if (missing.length) window.DB.meta.link_warnings_c = missing;
})();
