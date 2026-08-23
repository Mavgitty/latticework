(function () {
  var X = [
    /* ---- reverse links: existing library -> wave 5 (lives & performance) ---- */
    ["tid-sustaining-and-disruptive", "sj-cannibalize-yourself", "reinforces"],
    ["tid-sustaining-and-disruptive", "tes-self-cannibalize", "reinforces"],
    ["zto-founding-team", "sd-buttface-culture", "related"],
    ["zto-monopoly", "tit-efficient-monopoly", "reinforces"],
    ["s7p-scale-economies", "mia-distribution-logistics-edge", "reinforces"],
    ["s7p-cornered-resource", "tit-invisible-edge", "related"],
    ["otps-inflection-point", "sj-wilderness-years", "related"],
    ["otps-strategic-dissonance", "tes-flywheel", "related"],
    ["csup-scuttlebutt", "mia-steal-ideas-shamelessly", "related"],
    ["csup-margins", "mia-personal-frugality", "related"],
    ["htht-the-struggle", "sd-death-by-a-thousand-crises", "reinforces"],
    ["htht-wartime-peacetime", "sd-risk-as-edge", "related"],
    ["cinc-fear", "sj-genius-or-idiot", "related"],
    ["cinc-braintrust", "sj-thousand-things-say-no", "related"],
    ["goal-the-constraint", "tes-flywheel", "related"],
    ["pr-network-effects", "tes-flywheel", "reinforces"],
    ["tos-capital-allocation", "tit-buy-the-rival", "related"],
    ["mck-wacc", "tit-efficient-monopoly", "related"],
    ["wnf-creative-destruction-elites", "tit-monopolys-reckoning", "related"],
    ["halo-the-halo-effect", "sj-reality-distortion-field", "contrasts"],
    ["halo-single-explanations", "tit-efficient-monopoly", "related"],
    ["fbr-survivorship-in-data", "sb-written-off", "reinforces"],
    ["tbs-silent-evidence", "sb-written-off", "reinforces"],
    ["tmit-role-of-luck", "sb-comeback", "related"],
    ["atg-illusion-of-control", "rel-drive-from-within", "contrasts"],
    ["sw-action-bias", "chm-forty-percent-rule", "related"],
    ["tbs-barbell", "chm-suffering-with-purpose", "related"],
    ["loss-aversion", "open-141-and-crystal-meth", "related"],
    ["tfs-two-systems", "igt-two-selves-one-mind", "reinforces"],
    ["inf-reciprocity", "mia-profit-sharing-incentives", "related"],
    ["rwh-compounding-character", "chm-cost-of-relentlessness", "contrasts"],
    ["rwh-eveillard-career-risk", "rel-feared-not-liked", "related"],
    ["cr-long-horizon", "tes-quarter-is-noise", "reinforces"],
    ["gsbs-coherence", "sj-four-quadrants", "related"],

    /* ---- lateral links: the founders cluster (sd, mia, tes, sj, tit) ---- */
    ["sd-betting-the-company", "tes-quarter-is-noise", "related"],
    ["tes-quarter-is-noise", "sd-betting-the-company", "related"],
    ["sd-risk-as-edge", "sj-the-cost-of-the-vision", "related"],
    ["tes-self-cannibalize", "sj-cannibalize-yourself", "reinforces"],
    ["sj-cannibalize-yourself", "tes-self-cannibalize", "reinforces"],
    ["mia-personal-frugality", "tes-obsessive-frugality", "reinforces"],
    ["tes-obsessive-frugality", "mia-personal-frugality", "reinforces"],
    ["mia-compounding-small-improvements", "tit-the-forty-ninth-drop", "reinforces"],
    ["tit-the-forty-ninth-drop", "mia-compounding-small-improvements", "reinforces"],
    ["tit-buy-the-rival", "tes-diapers-war", "contrasts"],
    ["tes-diapers-war", "tit-buy-the-rival", "contrasts"],
    ["sj-unseen-craftsmanship", "mia-management-by-walking-around", "related"],
    ["sd-doubt-behind-swoosh", "sj-genius-or-idiot", "related"],
    ["tit-discipline-as-doctrine", "sd-marketing-before-margin", "contrasts"],
    ["tit-stewardship-and-suspicion", "tit-the-second-fortune", "related"],
    ["sj-apple-store-bet", "tes-aws-bet", "related"],
    ["tes-aws-bet", "sj-apple-store-bet", "related"],
    ["sj-four-quadrants", "goal-the-constraint", "related"],
    ["mia-folksy-values-tension", "tit-stewardship-and-suspicion", "related"],
    ["sd-buttface-culture", "tes-ruthless-culture", "contrasts"],
    ["tes-ruthless-culture", "sd-buttface-culture", "contrasts"],
    ["tes-day-one", "sd-risk-as-edge", "reinforces"],

    /* ---- lateral links: the performance-psychology cluster (open, igt, rel, sb, chm) ---- */
    ["open-hated-tennis", "rel-drive-from-within", "contrasts"],
    ["rel-drive-from-within", "open-hated-tennis", "contrasts"],
    ["open-gilbert-reinvention", "igt-effortless-effort", "related"],
    ["open-141-and-crystal-meth", "chm-cost-of-relentlessness", "related"],
    ["igt-quiet-the-judge", "chm-accountability-mirror", "contrasts"],
    ["igt-effortless-effort", "rel-controlled-intensity", "contrasts"],
    ["rel-controlled-intensity", "igt-effortless-effort", "contrasts"],
    ["rel-comfort-is-the-enemy", "chm-forty-percent-rule", "reinforces"],
    ["chm-forty-percent-rule", "rel-comfort-is-the-enemy", "reinforces"],
    ["chm-callusing-the-mind", "sb-comeback", "related"],
    ["sb-written-off", "rel-drive-from-within", "related"],
    ["sb-patient-method", "igt-two-selves-one-mind", "related"],
    ["rel-fuel-not-plateau", "open-playing-for-himself", "contrasts"],
    ["chm-cookie-jar", "open-college-prep-academy", "related"],
    ["rel-own-the-miss", "chm-accountability-mirror", "reinforces"],
    ["chm-accountability-mirror", "rel-own-the-miss", "reinforces"],
    ["sb-jockeys-parallel", "open-fathers-cannon", "related"],
    ["igt-goal-before-not-during", "open-gilbert-reinvention", "related"],
    ["rel-feared-not-liked", "sj-genius-or-idiot", "related"],
    ["chm-suffering-with-purpose", "sd-risk-as-edge", "related"],
    ["mia-steal-ideas-shamelessly", "otps-news-from-the-edge", "related"],
    ["mia-profit-sharing-incentives", "tos-outsider-temperament", "related"],
    ["mia-management-by-walking-around", "htht-training-your-people", "related"],
    ["tit-the-second-fortune", "rwh-compounding-character", "related"],
    ["open-agassi-sampras", "rel-controlled-intensity", "related"]
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
  if (missing.length) window.DB.meta.link_warnings_m = missing; else window.DB.meta.link_warnings_m = "none";
})();
