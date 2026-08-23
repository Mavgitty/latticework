/* Cross-book connections.
   Applied after every book is loaded so the original Poor Charlie's ideas
   link outward into the rest of the library rather than only to each other.
   Each pair is inserted at position 2 so it appears among the related ideas
   shown on the idea page, and the list is capped so the page stays readable. */
(function () {
  var X = {
    "inversion": [["tfs-premortem", "extends"], ["tii-margin-of-safety", "reinforces"]],
    "incentives": [["tii-earnings-quality", "extends"], ["zto-founding-team", "related"]],
    "compounding": [["zto-last-mover", "reinforces"], ["tii-paying-for-growth", "contrasts"]],
    "circle-of-competence": [["tii-defensive-enterprising", "extends"], ["tfs-illusion-validity", "reinforces"]],
    "opportunity-cost": [["tfs-endowment", "related"], ["zto-power-law", "related"]],
    "second-order-effects": [["zto-monopoly", "related"], ["tfs-narrow-framing", "related"]],
    "margin-of-safety": [["tii-margin-of-safety", "extends"], ["tib-decision-trees", "related"]],
    "social-proof": [["zto-contrarian-question", "contrasts"], ["tib-truthseeking-group", "contrasts"]],
    "confirmation-bias": [["tib-motivated-reasoning", "extends"], ["tfs-wysiati", "reinforces"]],
    "outcome-bias": [["tib-resulting", "extends"], ["tib-luck-vs-skill", "extends"]],
    "availability-bias": [["tii-market-history", "contrasts"], ["tfs-wysiati", "related"]],
    "anchoring": [["tfs-reference-points", "extends"], ["tii-intrinsic-value", "contrasts"]],
    "liking-loving": [["tfs-substitution", "reinforces"], ["zto-founding-team", "related"]],
    "authority-misinfluence": [["tib-truthseeking-group", "contrasts"], ["tfs-premortem", "related"]],
    "commitment-and-consistency": [["tib-ulysses-contract", "contrasts"], ["tib-motivated-reasoning", "reinforces"]],
    "reciprocation": [["tib-motivated-reasoning", "related"]],
    "contrast-effects": [["tfs-reference-points", "extends"], ["tii-mr-market", "related"]],
    "loss-aversion": [["tfs-reference-points", "extends"], ["tfs-endowment", "extends"]],
    "probabilistic-thinking": [["tib-bets", "extends"], ["tib-decision-trees", "extends"]],
    "base-rates": [["tfs-outside-view", "extends"], ["tfs-planning-fallacy", "related"]],
    "survivorship-bias": [["tii-market-history", "related"], ["tib-luck-vs-skill", "related"]],
    "feedback-loops": [["zto-distribution", "related"], ["zto-monopoly", "related"]],
    "critical-mass": [["zto-small-market", "reinforces"], ["zto-power-law", "related"]],
    "scale-economies": [["zto-monopoly", "reinforces"], ["zto-ten-x", "related"]],
    "specialisation": [["tii-defensive-enterprising", "reinforces"], ["zto-small-market", "related"]],
    "regression-to-the-mean": [["tii-paying-for-growth", "extends"], ["tib-luck-vs-skill", "reinforces"]],
    "antidotes": [["tfs-simple-rules", "reinforces"], ["tib-ulysses-contract", "reinforces"]],
    "avoiding-ruin": [["tii-margin-of-safety", "reinforces"], ["tii-diversification", "reinforces"]],
    "patience": [["tii-formula-investing", "reinforces"], ["zto-last-mover", "related"]],
    "selectivity": [["zto-power-law", "reinforces"], ["tii-defensive-enterprising", "related"]],
    "temperament": [["tii-chief-problem", "reinforces"], ["tib-tilt", "extends"]],
    "independent-thinking": [["zto-contrarian-question", "extends"], ["tib-wanna-bet", "reinforces"]],
    "multidisciplinary-thinking": [["tfs-two-systems", "related"], ["tii-market-history", "related"]],
    "learning-from-mistakes": [["tib-resulting", "reinforces"], ["tfs-illusion-validity", "related"]],
    "long-term-thinking": [["zto-last-mover", "reinforces"], ["tib-temporal-discounting", "reinforces"]]
  };

  var MAX = 5;
  var byId = {};
  window.DB.ideas.forEach(function (i) { byId[i.id] = i; });

  Object.keys(X).forEach(function (id) {
    var idea = byId[id];
    if (!idea) return;
    var have = {};
    idea.connections.forEach(function (c) { have[c.to] = 1; });
    var add = X[id]
      .filter(function (p) { return byId[p[0]] && !have[p[0]]; })
      .map(function (p) { return { to: p[0], type: p[1] }; });
    idea.connections.splice.apply(idea.connections, [2, 0].concat(add));
    idea.connections = idea.connections.slice(0, MAX);
  });
})();
