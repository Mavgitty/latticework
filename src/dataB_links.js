/* Second pass of cross-book connections.
   The first five books were written before the later ten existed, so each of the
   ideas below gains one link forward into the newer material. Inserted at position
   two so it appears among the related ideas shown on the idea page. */
(function () {
  var X = {
    "margin-of-safety": ["tmit-risk-is-loss", "reinforces"],
    "scale-economies": ["s7p-scale-economies", "extends"],
    "critical-mass": ["s7p-network-economies", "extends"],
    "compounding": ["pom-confounding-compounding", "reinforces"],
    "outcome-bias": ["fbr-lucky-fool", "extends"],
    "survivorship-bias": ["tbs-silent-evidence", "extends"],
    "probabilistic-thinking": ["fbr-probability-vs-expectation", "extends"],
    "avoiding-ruin": ["pom-getting-vs-keeping", "reinforces"],
    "temperament": ["pom-reasonable-not-rational", "reinforces"],
    "independent-thinking": ["tmit-contrarianism", "extends"],
    "second-order-effects": ["pcs-five-forces", "related"],
    "opportunity-cost": ["tos-capital-allocation", "extends"],
    "selectivity": ["tmit-patient-opportunism", "reinforces"],
    "patience": ["tos-patience-then-boldness", "reinforces"],
    "regression-to-the-mean": ["fbr-rare-events", "related"],
    "base-rates": ["tbs-forecasting-limits", "contrasts"],
    "specialisation": ["csup-scuttlebutt", "related"],
    "incentives": ["fsh-why-it-happens", "extends"],
    "zto-monopoly": ["pcs-five-forces", "related"],
    "zto-power-law": ["tpl-power-law-returns", "extends"],
    "zto-last-mover": ["s7p-power", "extends"],
    "zto-ten-x": ["s7p-benefit-and-barrier", "related"],
    "zto-distribution": ["csup-sales-organisation", "related"],
    "tii-earnings-quality": ["fsh-cash-versus-earnings", "extends"],
    "tii-intrinsic-value": ["tmit-price-is-everything", "reinforces"],
    "tii-mr-market": ["tmit-pendulum", "extends"],
    "tii-paying-for-growth": ["csup-long-horizon", "contrasts"],
    "tii-diversification": ["pom-tails-drive-everything", "contrasts"],
    "tii-asset-allocation": ["tos-capital-allocation", "extends"],
    "tii-market-history": ["tmit-cycles", "extends"],
    "tii-chief-problem": ["pom-no-one-is-crazy", "related"],
    "tii-defensive-enterprising": ["csup-conservative-investor", "related"],
    "tfs-wysiati": ["tbs-narrative-fallacy", "extends"],
    "tfs-illusion-validity": ["tbs-expert-problem", "extends"],
    "tfs-planning-fallacy": ["tbs-forecasting-limits", "extends"],
    "tfs-narrow-framing": ["tbs-barbell", "related"],
    "tfs-two-selves": ["pom-you-will-change", "reinforces"],
    "tib-luck-vs-skill": ["fbr-alternative-histories", "extends"],
    "tib-resulting": ["fbr-hindsight-habit", "extends"],
    "tib-decision-trees": ["fbr-monte-carlo", "extends"],
    "tib-bets": ["fbr-asymmetry", "related"],
    "tib-tilt": ["pom-never-enough", "related"],
    "loss-aversion": ["pom-price-of-returns", "contrasts"],
    "long-term-thinking": ["tos-patience-then-boldness", "reinforces"],
    "multidisciplinary-thinking": ["tbs-mediocristan", "related"],
    "learning-from-mistakes": ["fbr-humility", "reinforces"],
    "confirmation-bias": ["tbs-problem-of-induction", "extends"],
    "circle-of-competence": ["tbs-expert-problem", "reinforces"],
    "feedback-loops": ["s7p-network-economies", "related"],
    "anchoring": ["tmit-price-is-everything", "related"]
  };

  var MAX = 5;
  var byId = {};
  window.DB.ideas.forEach(function (i) { byId[i.id] = i; });
  var dropped = [];

  Object.keys(X).forEach(function (id) {
    var idea = byId[id], target = X[id][0];
    if (!idea) { dropped.push("source " + id); return; }
    if (!byId[target]) { dropped.push("target " + target); return; }
    if (idea.connections.some(function (c) { return c.to === target; })) return;
    idea.connections.splice(2, 0, { to: target, type: X[id][1] });
    idea.connections = idea.connections.slice(0, MAX);
  });
  if (dropped.length) window.DB.meta.link_warnings = dropped;
})();
