/* Fourth pass. The fifteen Investing and Valuation books added in wave one link
   back into the library, but the older ideas had no way to link forward. These are
   the highest-value reverse links. The cap rises to six here so that adding a link
   forward does not silently drop one of the original connections. */
(function () {
  var X = [
    ["margin-of-safety", "mos-risk-first", "extends"],
    ["compounding", "lbcsi-cost-compounding", "contrasts"],
    ["circle-of-competence", "ouww-amateur-edge", "related"],
    ["opportunity-cost", "mck-value-driver-principle", "related"],
    ["scale-economies", "mck-roic", "related"],
    ["selectivity", "ycbsmg-where-mispricing-survives", "related"],
    ["patience", "twbw-holding-through-drawdown", "reinforces"],
    ["temperament", "mos-institutional-limits", "extends"],
    ["antidotes", "tic-written-checklist", "extends"],
    ["regression-to-the-mean", "lbcsi-performance-does-not-persist", "extends"],
    ["incentives", "ewb-compensation", "extends"],
    ["feedback-loops", "cr-the-capital-cycle", "extends"],
    ["tii-intrinsic-value", "afv-residual-earnings", "extends"],
    ["tii-margin-of-safety", "sa-earning-power", "extends"],
    ["tii-earnings-quality", "afv-conservative-accounting", "related"],
    ["tii-paying-for-growth", "mck-growth-and-returns", "extends"],
    ["tii-diversification", "lbcsi-what-indexing-gives-up", "related"],
    ["tii-formula-investing", "lbcsi-market-return-arithmetic", "reinforces"],
    ["tii-market-history", "cr-the-capital-cycle", "related"],
    ["tos-capital-allocation", "ewb-owner-principles", "reinforces"],
    ["tos-buybacks", "ewb-buybacks", "reinforces"],
    ["tos-cash-flow-per-share", "mck-free-cash-flow", "extends"],
    ["tos-decentralisation", "cap-multiple-counsellor", "related"],
    ["tos-outsider-temperament", "cap-hiring-for-temperament", "related"],
    ["csup-scuttlebutt", "tic-customer-first", "extends"],
    ["csup-when-to-sell", "fr-when-to-sell", "related"],
    ["csup-long-horizon", "twbw-equity-as-a-bond", "related"],
    ["csup-margins", "lbbw-moat-in-the-numbers", "extends"],
    ["tmit-price-is-everything", "lbv-price-and-value", "extends"],
    ["tmit-cycles", "cr-the-capital-cycle", "extends"],
    ["tmit-patient-opportunism", "mos-catalysts", "related"],
    ["tmit-risk-is-loss", "mos-risk-first", "reinforces"],
    ["s7p-benefit-and-barrier", "lbbw-four-sources", "related"],
    ["s7p-power", "mck-growth-and-returns", "related"],
    ["fsh-cash-versus-earnings", "afv-terminal-speculation", "related"],
    ["fsh-forensic-checklist", "fr-warning-signs", "related"],
    ["pcs-entry-barriers", "cr-shrinking-capacity", "related"],
    ["pcs-rivalry", "cr-the-capital-cycle", "extends"],
    ["zto-power-law", "ouww-tenbagger", "related"],
    ["zto-monopoly", "lbbw-not-moats", "related"],
    ["tpl-late-stage-drift", "cr-capital-influx-signals", "extends"],
    ["tib-decision-trees", "lbv-four-inputs", "related"],
    ["tfs-simple-rules", "tic-written-checklist", "extends"],
    ["tfs-illusion-validity", "lbcsi-performance-does-not-persist", "reinforces"],
    ["independent-thinking", "mos-absolute-returns", "reinforces"],
    ["avoiding-ruin", "mos-risk-first", "reinforces"],
    ["long-term-thinking", "cap-culture-enforces-horizon", "reinforces"],
    ["multidisciplinary-thinking", "twbw-lineage", "related"]
  ];

  var MAX = 6, byId = {}, missing = [];
  window.DB.ideas.forEach(function (i) { byId[i.id] = i; });
  X.forEach(function (row) {
    var idea = byId[row[0]];
    if (!idea || !byId[row[1]]) { missing.push(row[0] + " -> " + row[1]); return; }
    if (idea.connections.some(function (c) { return c.to === row[1]; })) return;
    idea.connections.push({ to: row[1], type: row[2] });
    idea.connections = idea.connections.slice(0, MAX);
  });
  if (missing.length) window.DB.meta.link_warnings_e = missing;
})();
