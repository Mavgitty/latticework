import { chromium } from 'playwright';
const url = 'file:///home/claude/pk/latticework.html';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const errs = [];
const results = {};

async function withViewport(w, h) {
  const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  p.on('pageerror', e => errs.push(w + 'x' + h + ' pageerror: ' + e.message));
  await p.goto(url); await p.waitForTimeout(400);
  await p.click('[data-act="guest"]'); await p.waitForTimeout(300);
  return { ctx, p };
}

// 1. nav has 5 items, Find tab present and navigable
{
  const { ctx, p } = await withViewport(390, 844);
  const navCount = await p.evaluate(() => document.querySelectorAll('.nav a').length);
  results.navCount = navCount;
  await p.goto(url + '#/find'); await p.waitForTimeout(300);
  results.findHeading = await p.textContent('h1.display');
  results.hintVisible = !!(await p.$('.sugg'));
  const chips = await p.evaluate(() => document.querySelectorAll('.sugg .tag').length);
  results.exampleChips = chips;

  // click an example chip
  await p.click('.sugg .tag');
  await p.waitForTimeout(200);
  results.afterChipHasResults = !!(await p.$('.applyout'));
  results.bookBlocks = await p.evaluate(() => document.querySelectorAll('#findout .ablk').length);
  results.relRows = await p.evaluate(() => document.querySelectorAll('#findout .rel').length);
  results.chips = await p.evaluate(() => document.querySelectorAll('#findout .chip').length > -1); // just check no crash

  // check overflow at this viewport on the results page
  const ov = await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
  results.overflow390 = ov;

  // navigate into an idea from a result row, then use back link
  const href = await p.evaluate(() => document.querySelector('#findout .rel')?.getAttribute('href'));
  results.firstResultHref = href;
  if (href) {
    await p.click('#findout .rel');
    await p.waitForTimeout(250);
    results.ideaPageH1 = await p.textContent('h1.idea');
    const backHref = await p.evaluate(() => document.querySelector('a.back')?.getAttribute('href'));
    results.backHref = backHref;
  }

  // manual free-text query
  await p.goto(url + '#/find'); await p.waitForTimeout(200);
  await p.fill('#findq', 'A competitor just cut prices sharply and our board wants us to match it immediately.');
  await p.click('[data-act="run-find"]');
  await p.waitForTimeout(200);
  results.manualQueryBooks = await p.evaluate(() => document.querySelectorAll('#findout .ablk').length);

  // short text -> hint, not results
  await p.fill('#findq', 'help');
  await p.click('[data-act="run-find"]');
  await p.waitForTimeout(150);
  results.shortTextHint = !!(await p.$('#findout .hint'));

  await ctx.close();
}

// 2. desktop width overflow check
{
  const { ctx, p } = await withViewport(1440, 900);
  await p.goto(url + '#/find'); await p.waitForTimeout(300);
  await p.click('.sugg .tag');
  await p.waitForTimeout(200);
  const ov = await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 2);
  results.overflow1440 = ov;
  await ctx.close();
}

// 3. Home CTA present and links to #/find
{
  const { ctx, p } = await withViewport(390, 844);
  await p.goto(url + '#/home'); await p.waitForTimeout(300);
  const cta = await p.evaluate(() => document.querySelector('a.findcta')?.getAttribute('href'));
  results.homeCtaHref = cta;
  await ctx.close();
}

await b.close();
console.log(JSON.stringify(results, null, 2));
console.log('errors:', errs.length ? errs : 'none');
