(function () {
  var X = [
    ["probabilistic-thinking", "atg-bayes-theorem", "extends"],
    ["base-rates", "atg-regression-to-mediocrity", "reinforces"],
    ["regression-to-the-mean", "atg-regression-to-mediocrity", "reinforces"],
    ["fbr-lucky-fool", "atg-illusion-of-control", "related"],
    ["tbs-narrative-fallacy", "atg-risk-versus-uncertainty", "contrasts"],
    ["mos-risk-first", "atg-covariance-not-volatility", "related"],
    ["tmit-risk-is-loss", "atg-covariance-not-volatility", "contrasts"],
    ["tib-decision-trees", "atg-utility-not-value", "related"],
    ["tib-bets", "atg-utility-not-value", "related"],

    ["reciprocation", "inf-reciprocity", "extends"],
    ["commitment-and-consistency", "inf-commitment-consistency", "extends"],
    ["liking-loving", "inf-liking", "extends"],
    ["authority-misinfluence", "inf-authority-bias", "extends"],
    ["social-proof", "inf-social-proof", "extends"],
    ["contrast-effects", "inf-scarcity", "related"],
    ["vd-negotiation-posture", "inf-reciprocity", "related"],
    ["zto-founding-team", "inf-liking", "related"],
    ["cinc-braintrust", "inf-unity", "related"],

    ["antidotes", "sw-misjudgment-checklist", "extends"],
    ["multidisciplinary-thinking", "sw-lollapalooza-effect", "reinforces"],
    ["learning-from-mistakes", "sw-borrowed-catastrophes", "reinforces"],
    ["tfs-two-systems", "sw-body-and-judgment", "related"],
    ["tib-motivated-reasoning", "sw-denial", "related"],
    ["confirmation-bias", "sw-denial", "reinforces"],
    ["tfs-premortem", "sw-action-bias", "contrasts"],
    ["loss-aversion", "sw-deprival-superreaction", "extends"],

    ["tmit-patient-opportunism", "rwh-point-of-maximum-pessimism", "reinforces"],
    ["mos-forced-sellers", "rwh-point-of-maximum-pessimism", "related"],
    ["fbr-asymmetry", "rwh-thorp-edge-and-sizing", "related"],
    ["tii-margin-of-safety", "rwh-thorp-edge-and-sizing", "related"],
    ["cr-long-horizon", "rwh-nomad-returning-capital", "reinforces"],
    ["tos-outsider-temperament", "rwh-nomad-returning-capital", "reinforces"],
    ["circle-of-competence", "rwh-li-lu-learning-machine", "related"],
    ["temperament", "rwh-eveillard-career-risk", "reinforces"],
    ["tmit-role-of-luck", "rwh-miller-surviving-drawdowns", "contrasts"],
    ["patience", "rwh-compounding-character", "extends"],
    ["independent-thinking", "rwh-compounding-character", "reinforces"],

    ["incentives", "caf-negative-income-tax", "related"],
    ["opportunity-cost", "caf-occupational-licensing", "related"],
    ["cr-the-capital-cycle", "caf-monetary-rule", "related"],
    ["rts-knowledge-problem", "caf-intervention-test", "reinforces"],
    ["caf-intervention-test", "rts-knowledge-problem", "reinforces"],
    ["wnf-extractive-vs-inclusive", "caf-economic-political-freedom", "related"],
    ["caf-economic-political-freedom", "wnf-extractive-vs-inclusive", "related"],

    ["tos-decentralisation", "wnf-de-facto-de-jure-power", "contrasts"],
    ["s7p-power", "wnf-extractive-vs-inclusive", "related"],
    ["rts-worst-get-on-top", "wnf-vicious-circle", "reinforces"],
    ["wnf-vicious-circle", "rts-worst-get-on-top", "reinforces"],
    ["won-invisible-hand", "wnf-virtuous-circle", "contrasts"],
    ["wnf-virtuous-circle", "won-invisible-hand", "contrasts"],

    ["specialisation", "won-pin-factory", "reinforces"],
    ["s7p-scale-economies", "won-extent-of-market", "related"],
    ["zto-monopoly", "won-merchants-interest", "contrasts"],
    ["opportunity-cost", "won-real-price-of-toil", "extends"],

    ["tmit-cycles", "gt-multiplier-effect", "related"],
    ["cr-the-capital-cycle", "gt-saving-investment-imbalance", "reinforces"],
    ["loss-aversion", "gt-sticky-wages", "related"],
    ["rts-spontaneous-order", "gt-effective-demand", "contrasts"],
    ["gt-effective-demand", "rts-spontaneous-order", "contrasts"],

    ["incentives", "rts-worst-get-on-top", "reinforces"],
    ["second-order-effects", "rts-slippery-slope", "reinforces"],
    ["independent-thinking", "rts-single-scale-of-values", "contrasts"],
    ["s7p-power", "rts-knowledge-problem", "related"],

    ["sw-lollapalooza-effect", "atg-illusion-of-control", "related"],
    ["atg-illusion-of-control", "sw-lollapalooza-effect", "related"],
    ["inf-authority-bias", "sw-body-and-judgment", "related"],

    ["caf-fed-great-contraction", "gt-effective-demand", "contrasts"],
    ["caf-floating-exchange-rates", "won-invisible-hand", "related"],
    ["caf-negative-income-tax", "ewb-compensation", "reinforces"],
    ["ewb-compensation", "caf-negative-income-tax", "reinforces"],
    ["caf-education-vouchers", "rts-spontaneous-order", "related"],
    ["caf-corporate-responsibility", "goal-one-goal", "reinforces"],
    ["goal-one-goal", "caf-corporate-responsibility", "reinforces"]
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
  if (missing.length) window.DB.meta.link_warnings_i = missing; else window.DB.meta.link_warnings_i = "none";
})();
