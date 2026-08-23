import { chromium } from 'playwright';
const url = 'file:///home/claude/pk/latticework.html';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });

// ---- 1. meta tags present in the raw HTML (what a crawler would see) ----
import fs from 'fs';
const html = fs.readFileSync('/home/claude/pk/latticework.html', 'utf8');
const checks = {
  'og:title': /<meta property="og:title" content="Latticework">/.test(html),
  'og:description': /<meta property="og:description"/.test(html),
  'og:image': /<meta property="og:image" content="data:image\/png;base64,/.test(html),
  'og:image:width': /<meta property="og:image:width" content="1200">/.test(html),
  'twitter:card': /<meta name="twitter:card" content="summary_large_image">/.test(html),
  'twitter:image': /<meta name="twitter:image"/.test(html),
  'meta description': /<meta name="description"/.test(html),
};
console.log('meta tag checks:', checks);

// ---- 2. gate screen (first open, before sign-in/guest) ----
const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
const p = await ctx.newPage();
const errs = [];
p.on('pageerror', e => errs.push('pageerror: ' + e.message));
await p.goto(url);
await p.waitForTimeout(400);

const gate = await p.evaluate(() => ({
  hasMark: !!document.querySelector('.gmark'),
  markText: document.querySelector('.gmark')?.textContent,
  hasStats: !!document.querySelector('.gstats'),
  statNums: [...document.querySelectorAll('.gstats .stat b')].map(x => x.textContent),
  statLabels: [...document.querySelectorAll('.gstats .stat span')].map(x => x.textContent),
  h1: document.querySelector('.gatebox h1')?.textContent,
}));
console.log('gate check:', gate);
await p.screenshot({ path: '/home/claude/pk/shot_gate.png' });

// ---- 3. empty states: saved tab with nothing saved, and a bad route ----
await p.click('[data-act="guest"]');
await p.waitForTimeout(300);
await p.goto(url + '#/saved');
await p.waitForTimeout(200);
const savedEmpty = await p.evaluate(() => ({
  hasIcon: !!document.querySelector('.empty .eicon svg'),
  em: document.querySelector('.empty .em')?.textContent,
}));
console.log('saved-empty check:', savedEmpty);
await p.screenshot({ path: '/home/claude/pk/shot_saved_empty.png' });

await p.goto(url + '#/this-route-does-not-exist');
await p.waitForTimeout(200);
const notFound = await p.evaluate(() => ({
  hasIcon: !!document.querySelector('.empty .eicon svg'),
  em: document.querySelector('.empty .em')?.textContent,
}));
console.log('notfound check:', notFound);
await p.screenshot({ path: '/home/claude/pk/shot_notfound.png' });

console.log('errors:', errs.length ? errs : 'none');
await b.close();
