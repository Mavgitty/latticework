/* Fifth pass. Reverse links from the earlier library into the wave two books
   (Venture & Startups, Strategy & Competition), plus two links the Platform
   Revolution file could not make because the Cold Start file did not exist when
   it was written. Cap is six. */
(function () {
  var X = [
    ["pr-chicken-and-egg", "csp-atomic-network", "extends"],
    ["pr-network-effects", "csp-effects-versus-scale", "related"],

    ["zto-monopoly", "cd-only-barriers-matter", "extends"],
    ["zto-small-market", "ctc-beachhead", "extends"],
    ["zto-distribution", "ctc-channel-and-pricing", "extends"],
    ["zto-ten-x", "tid-sustaining-and-disruptive", "related"],
    ["zto-secrets", "gsbs-diagnosis", "related"],
    ["zto-seven-questions", "gsbs-the-kernel", "related"],
    ["zto-founding-team", "htht-hire-for-strength", "extends"],
    ["zto-power-law", "sshr-underwriting-for-outliers", "extends"],
    ["zto-last-mover", "tid-performance-oversupply", "related"],

    ["tpl-power-law-returns", "vd-liquidation-preference", "related"],
    ["tpl-founder-power", "vd-negotiation-posture", "extends"],
    ["tpl-stage-by-stage", "vd-notes-and-safes", "extends"],
    ["tpl-activism", "mvcg-after-the-money", "extends"],
    ["tpl-networks", "bvc-sourcing-system", "extends"],
    ["tpl-skill-or-luck", "bvc-portfolio-construction", "related"],
    ["tpl-governance-limits", "sshr-board-duty", "extends"],
    ["tpl-late-stage-drift", "sshr-fund-structure", "related"],
    ["tpl-risk-capital", "sshr-limited-partners", "extends"],
    ["tpl-crossing-borders", "bvc-firm-building", "related"],

    ["pcs-five-forces", "cd-only-barriers-matter", "contrasts"],
    ["pcs-entry-barriers", "cd-three-sources", "extends"],
    ["pcs-rivalry", "cd-small-numbers", "extends"],
    ["pcs-industry-evolution", "tid-sustaining-and-disruptive", "extends"],
    ["pcs-generic-strategies", "gsbs-coherence", "related"],
    ["pcs-substitutes", "tid-performance-oversupply", "related"],
    ["pcs-industry-structure", "cd-no-strategy-problem", "extends"],
    ["pcs-strategic-groups", "cd-local-scale", "related"],
    ["pcs-competitor-analysis", "otps-signal-vs-noise", "related"],

    ["s7p-power", "cd-the-test", "reinforces"],
    ["s7p-benefit-and-barrier", "cd-three-sources", "related"],
    ["s7p-network-economies", "pr-network-effects", "extends"],
    ["s7p-counter-positioning", "tid-good-management", "reinforces"],
    ["s7p-takeoff", "csp-escape-velocity", "extends"],
    ["s7p-not-operations", "gsbs-bad-strategy", "reinforces"],
    ["s7p-invention", "tls-minimum-viable-product", "related"],
    ["s7p-switching-costs", "pr-disintermediation", "related"],

    ["critical-mass", "csp-cold-start-problem", "extends"],
    ["feedback-loops", "csp-loops-decay", "extends"],
    ["scale-economies", "cd-local-scale", "extends"],
    ["second-order-effects", "goal-local-efficiency", "related"],
    ["specialisation", "ctc-beachhead", "related"],
    ["incentives", "htht-minimising-politics", "extends"],
    ["antidotes", "cinc-hidden-problems", "related"],
    ["independent-thinking", "otps-strategic-dissonance", "related"],
    ["learning-from-mistakes", "cinc-postmortems", "extends"],
    ["survivorship-bias", "halo-winning-dots", "extends"],
    ["outcome-bias", "halo-correlation-causality", "extends"],
    ["multidisciplinary-thinking", "goal-wider-application", "related"],
    ["long-term-thinking", "tid-small-markets", "related"],
    ["liking-loving", "halo-the-halo-effect", "extends"],
    ["authority-misinfluence", "cinc-candour-not-honesty", "contrasts"],
    ["temperament", "htht-the-struggle", "related"],
    ["opportunity-cost", "goal-the-constraint", "related"],

    ["tfs-illusion-validity", "halo-rigorous-research", "extends"],
    ["tfs-premortem", "cinc-postmortems", "related"],
    ["tfs-narrow-framing", "bvc-portfolio-construction", "related"],
    ["tib-truthseeking-group", "cinc-braintrust", "extends"],
    ["tib-resulting", "halo-correlation-causality", "related"],
    ["tib-not-sure", "tls-leap-of-faith", "related"],
    ["tbs-narrative-fallacy", "halo-single-explanations", "extends"],
    ["tmit-second-level", "gsbs-diagnosis", "related"],
    ["tii-investment-vs-speculation", "vd-economics-and-control", "related"],
    ["tos-capital-allocation", "bvc-fee-and-carry", "related"],
    ["csup-scuttlebutt", "ctc-pragmatist-logic", "related"],
    ["mck-roic", "cd-valuing-the-franchise", "related"],
    ["cr-the-capital-cycle", "tid-value-networks", "related"],
    ["ewb-owner-principles", "htht-tell-the-truth", "related"],
    ["tic-written-checklist", "goal-five-steps", "related"],
    ["lbbw-moat-erosion", "tid-good-management", "extends"],
    ["lbbw-four-sources", "cd-three-sources", "related"],
    ["mos-institutional-limits", "sshr-fund-structure", "related"]
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
  if (missing.length) window.DB.meta.link_warnings_g = missing;
})();
