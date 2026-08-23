import { chromium } from 'playwright';
const url='file:///home/claude/pk/latticework.html';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});
const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(url); await p.waitForTimeout(400); await p.click('[data-act="guest"]'); await p.waitForTimeout(300);
await p.goto(url+'#/library'); await p.waitForTimeout(400);
await p.screenshot({path:'shot/K-library.png', fullPage:true});
await p.goto(url+'#/book/tib'); await p.waitForTimeout(400);
await p.screenshot({path:'shot/L-book-tib.png', fullPage:true});
await p.goto(url+'#/idea/zto-monopoly'); await p.waitForTimeout(400);
await p.screenshot({path:'shot/M-idea-zto.png', fullPage:true});
await p.goto(url+'#/ideas'); await p.waitForTimeout(400);
await p.evaluate(()=>window.scrollTo(0,900)); await p.waitForTimeout(300);
await p.screenshot({path:'shot/N-ideas.png'});
await p.click('.topbar [data-act="search-open"]'); await p.waitForTimeout(300);
await p.fill('#q','avoid catastrophic investment mistakes'); await p.waitForTimeout(400);
await p.screenshot({path:'shot/O-search.png'});
// overflow check at 320 across new books
const ctx2=await b.newContext({viewport:{width:320,height:700}});
const q=await ctx2.newPage(); await q.goto(url); await q.waitForTimeout(300); await q.click('[data-act="guest"]'); await q.waitForTimeout(300);
for (const r of ['#/library','#/book/tii','#/book/tib','#/idea/tii-mr-market','#/ideas','#/ideas/model','#/saved']){
  await q.goto(url+r); await q.waitForTimeout(220);
  const o=await q.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}));
  console.log(r, o.sw>o.cw+1?'OVERFLOW '+o.sw:'ok');
}
// desktop
const ctx3=await b.newContext({viewport:{width:1440,height:960},deviceScaleFactor:2});
const d=await ctx3.newPage(); await d.goto(url); await d.waitForTimeout(300);
await d.click('[data-act="guest"]'); await d.waitForTimeout(300);
await d.screenshot({path:'shot/P-desktop-home.png'});
await d.goto(url+'#/library'); await d.waitForTimeout(400);
await d.screenshot({path:'shot/Q-desktop-library.png'});
await d.goto(url+'#/idea/tib-resulting'); await d.waitForTimeout(400);
await d.screenshot({path:'shot/R-desktop-idea.png'});
console.log('errors:', errs.length?errs:'none');
await b.close();
