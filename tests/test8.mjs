import { chromium } from 'playwright';
const url='file:///home/claude/pk/latticework.html';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});
const p=await ctx.newPage(); const errs=[];
p.on('pageerror',e=>errs.push('pageerror: '+e.message));
await p.goto(url); await p.waitForTimeout(500); await p.click('[data-act="guest"]'); await p.waitForTimeout(400);

await p.goto(url+'#/graph'); await p.waitForTimeout(500);
console.log('overview nodes:', await p.$$eval('.graphwrap .gnode', n=>n.length));
console.log('overview chords:', await p.$$eval('.graphwrap path', n=>n.length));
console.log('pair rows:', await p.$$eval('.gpair', n=>n.length));
console.log('headline:', (await p.textContent('.page .meta')).trim().slice(0,140));
await p.screenshot({path:'shot/X-graph-overview.png', fullPage:true});

// local graphs across many ideas, check for errors and node counts
const ids = await p.evaluate(()=>window.LW.DB.ideas.map(i=>i.id));
let bad=[];
for (const id of ids){
  await p.goto(url+'#/graph/'+id); await p.waitForTimeout(30);
  const o = await p.evaluate(()=>({
    n: document.querySelectorAll('.graphwrap circle').length,
    lines: document.querySelectorAll('.graphwrap line').length,
    labels: document.querySelectorAll('.graphwrap text').length,
    h1: document.querySelector('h1.display')?.textContent
  }));
  if(!o.h1 || o.n < 7 || o.lines < 5 || o.labels < 5) bad.push(id+' '+JSON.stringify(o));
}
console.log('local graphs:', ids.length, 'problems:', bad.length?bad.slice(0,5):'none');

await p.goto(url+'#/graph/inversion'); await p.waitForTimeout(400);
await p.screenshot({path:'shot/Y-graph-inversion.png', fullPage:true});
await p.goto(url+'#/graph/s7p-counter-positioning'); await p.waitForTimeout(400);
await p.screenshot({path:'shot/Z-graph-cp.png', fullPage:true});

// navigation: tap a ring node re-centres
await p.goto(url+'#/graph/inversion'); await p.waitForTimeout(350);
const before = await p.textContent('h1.display');
await p.click('.graphwrap .gnode:not(.gcentre)'); await p.waitForTimeout(400);
const after = await p.textContent('h1.display');
console.log('re-centre:', before.trim(), '->', after.trim());
// centre tap opens the idea
await p.click('.gcentre'); await p.waitForTimeout(400);
console.log('centre tap ->', (await p.textContent('h1.idea')).trim());
// entry point from idea page
await p.goto(url+'#/idea/tii-mr-market'); await p.waitForTimeout(300);
await p.click('a[href="#/graph/tii-mr-market"]'); await p.waitForTimeout(400);
console.log('idea page entry ->', (await p.textContent('h1.display')).trim());

// overflow at 320
const ctx2=await b.newContext({viewport:{width:320,height:700}});
const q=await ctx2.newPage(); await q.goto(url); await q.waitForTimeout(300); await q.click('[data-act="guest"]'); await q.waitForTimeout(300);
for (const r of ['#/graph','#/graph/inversion','#/graph/pom-never-enough']){
  await q.goto(url+r); await q.waitForTimeout(250);
  const o=await q.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}));
  console.log(r, o.sw>o.cw+1?'OVERFLOW':'ok');
}
// desktop
const ctx3=await b.newContext({viewport:{width:1440,height:1000},deviceScaleFactor:2});
const d=await ctx3.newPage(); await d.goto(url); await d.waitForTimeout(300); await d.click('[data-act="guest"]'); await d.waitForTimeout(300);
await d.goto(url+'#/graph'); await d.waitForTimeout(400); await d.screenshot({path:'shot/AA-graph-desktop.png'});
console.log('errors:', errs.length?errs:'none');
await b.close();
