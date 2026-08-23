(function () {
  var X = [
    /* ---- reverse links: existing library -> wave 4 (history & power) ---- */
    ["wnf-extractive-vs-inclusive", "rftr-legal-capture", "related"],
    ["rts-worst-get-on-top", "rftr-cult-of-personality", "reinforces"],
    ["rftr-cult-of-personality", "rts-worst-get-on-top", "reinforces"],
    ["caf-fed-great-contraction", "dfre-debased-currency", "related"],
    ["wnf-critical-junctures", "hpw-thucydides-trap", "related"],
    ["tbs-narrative-fallacy", "loh-history-as-cycle", "contrasts"],
    ["fbr-hindsight-habit", "sap-history-no-direction", "reinforces"],
    ["sap-history-no-direction", "fbr-hindsight-habit", "reinforces"],
    ["tbs-silent-evidence", "ggs-not-intelligence", "related"],
    ["gsbs-the-kernel", "hpw-truest-cause", "related"],
    ["otps-inflection-point", "tcw-nuclear-stalemate", "related"],
    ["s7p-power", "gk-decimal-army", "related"],
    ["tos-capital-allocation", "nap-building-the-state", "related"],
    ["ewb-institutional-imperative", "rftr-obedient-bureaucracy", "reinforces"],
    ["tmit-cycles", "loh-history-as-cycle", "reinforces"],
    ["cinc-fear", "rftr-obedient-bureaucracy", "related"],
    ["atg-illusion-of-control", "nap-russian-overreach", "related"],
    ["sw-lollapalooza-effect", "rftr-crisis-economics", "related"],
    ["wnf-vicious-circle", "gk-fragility-after-death", "contrasts"],
    ["halo-single-explanations", "ggs-explaining-success", "reinforces"],
    ["fbr-alternative-histories", "loh-history-as-cycle", "contrasts"],
    ["tbs-black-swan", "pw2-speed-of-collapse", "related"],
    ["otps-strategic-dissonance", "dfre-hollow-before-visible", "reinforces"],
    ["gsbs-bad-strategy", "nap-continental-system", "related"],
    ["s7p-counter-positioning", "han-refusing-battle", "related"],
    ["cr-the-capital-cycle", "dfre-overextended-frontiers", "related"],
    ["mos-forced-sellers", "cae-rubicon-commitment", "related"],
    ["wnf-natural-experiments", "ggs-pizarro-cortes", "reinforces"],
    ["gsbs-diagnosis", "cae-triumvirate-alliance", "related"],
    ["rts-knowledge-problem", "gk-foreign-experts", "related"],
    ["s7p-scale-economies", "gk-decimal-army", "related"],
    ["ewb-owner-earnings", "won-real-price-of-toil", "reinforces"],
    ["tbs-barbell", "han-war-taken-to-africa", "related"],
    ["gsbs-proximate-objectives", "aom-hyphasis-mutiny", "contrasts"],
    ["fbr-asymmetry", "han-cannae", "related"],
    ["ggs-technology-diffusion", "tsr-the-cargo-changes-not-the-road", "related"],
    ["ggs-pizarro-cortes", "tbs-black-swan", "related"],

    /* ---- lateral links: the five conqueror biographies (cae, aom, gk, nap, han) ---- */
    ["cae-dictator-no-succession", "aom-death-without-heir", "reinforces"],
    ["aom-death-without-heir", "cae-dictator-no-succession", "reinforces"],
    ["aom-empire-of-one-man", "gk-fragility-after-death", "contrasts"],
    ["gk-fragility-after-death", "aom-empire-of-one-man", "contrasts"],
    ["han-victories-without-victory", "nap-russian-overreach", "related"],
    ["han-home-front-failure", "nap-continental-system", "related"],
    ["gk-merit-over-blood", "nap-career-open-to-talent", "reinforces"],
    ["nap-career-open-to-talent", "gk-merit-over-blood", "reinforces"],
    ["cae-triumvirate-alliance", "nap-manufactured-legitimacy", "related"],
    ["aom-speed-as-weapon", "han-cannae", "related"],
    ["cae-calculated-clemency", "gk-calculated-terror", "contrasts"],
    ["gk-calculated-terror", "cae-calculated-clemency", "contrasts"],
    ["nap-code-outlasts-empire", "cae-commentaries-narrative", "contrasts"],
    ["cae-ides-of-march-limits", "nap-congress-of-vienna", "related"],
    ["aom-reputation-as-control", "gk-calculated-terror", "related"],
    ["gk-the-yassa", "aom-death-without-heir", "contrasts"],
    ["nap-cult-of-personality-fragility", "cae-dictator-no-succession", "reinforces"],
    ["han-alps-crossing", "aom-speed-as-weapon", "related"],
    ["nap-russian-overreach", "han-victories-without-victory", "related"],
    ["gk-decimal-army", "nap-building-the-state", "related"],

    /* ---- lateral links: the geopolitics cluster (hpw, tcw, pw2, tsr, pog) ---- */
    ["hpw-thucydides-trap", "tcw-nuclear-stalemate", "contrasts"],
    ["tcw-nuclear-stalemate", "hpw-thucydides-trap", "contrasts"],
    ["tcw-containment-strategy", "pw2-binding-rivals", "reinforces"],
    ["pw2-binding-rivals", "tcw-containment-strategy", "reinforces"],
    ["pog-north-european-plain", "tsr-whoever-holds-the-crossing", "related"],
    ["tsr-whoever-holds-the-crossing", "pog-north-european-plain", "related"],
    ["dfre-overextended-frontiers", "nap-russian-overreach", "reinforces"],
    ["nap-russian-overreach", "dfre-overextended-frontiers", "reinforces"],
    ["rftr-two-front-overreach", "dfre-overextended-frontiers", "reinforces"],
    ["rftr-two-front-overreach", "nap-russian-overreach", "reinforces"],
    ["ggs-continental-axis", "pog-american-moat", "related"],
    ["pog-north-european-plain", "tcw-containment-strategy", "related"],
    ["hpw-sicilian-expedition", "nap-russian-overreach", "reinforces"],
    ["hpw-sicilian-expedition", "han-victories-without-victory", "related"],
    ["tsr-the-short-european-century", "sap-unification-of-humankind", "related"],
    ["pog-sykes-picot-line", "wnf-de-facto-de-jure-power", "reinforces"],
    ["pw2-divergent-memories", "loh-history-as-cycle", "contrasts"],
    ["tcw-domino-theory", "gsbs-diagnosis", "contrasts"],
    ["tcw-space-race", "otps-ten-x-force", "related"],
    ["hpw-oligarchic-coup", "rftr-legal-capture", "related"],

    /* ---- lateral links: the big-history trio (sap, loh, ggs) ---- */
    ["sap-shared-fictions", "loh-religion-as-social-glue", "reinforces"],
    ["loh-religion-as-social-glue", "sap-shared-fictions", "reinforces"],
    ["sap-money-fiction", "won-invisible-hand", "related"],
    ["loh-inequality-always-returns", "wnf-vicious-circle", "reinforces"],
    ["loh-wealth-concentration-cycle", "gt-effective-demand", "related"],
    ["ggs-domestication-lottery", "sap-agricultural-trap", "related"],
    ["sap-agricultural-trap", "ggs-domestication-lottery", "related"],
    ["loh-incentives-beat-exhortation", "caf-negative-income-tax", "reinforces"],
    ["ggs-surplus-specialists", "sap-unification-of-humankind", "reinforces"],
    ["loh-war-is-normal", "hpw-thucydides-trap", "reinforces"],
    ["sap-imagined-order", "wnf-extractive-vs-inclusive", "related"],
    ["ggs-not-intelligence", "wnf-reversal-of-fortune", "contrasts"]
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
  if (missing.length) window.DB.meta.link_warnings_k = missing; else window.DB.meta.link_warnings_k = "none";
})();
