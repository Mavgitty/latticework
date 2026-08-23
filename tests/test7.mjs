import { chromium } from 'playwright';
const url='file:///home/claude/pk/latticework.html';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});
const p=await ctx.newPage(); const errs=[];
p.on('pageerror',e=>errs.push('pageerror: '+e.message));
await p.goto(url); await p.waitForTimeout(500); await p.click('[data-act="guest"]'); await p.waitForTimeout(400);

// walk every idea page
const ids = await p.evaluate(()=>window.LW.DB.ideas.map(i=>i.id));
let problems=[];
for (const id of ids){
  await p.goto(url+'#/idea/'+id); await p.waitForTimeout(45);
  const o = await p.evaluate(()=>({
    h1: document.querySelector('h1.idea')?.textContent,
    lbls: [...document.querySelectorAll('.blk .lbl')].map(x=>x.textContent),
    rel: document.querySelectorAll('.rel').length,
    tags: document.querySelectorAll('.tag').length,
    bullets: document.querySelectorAll('.practice li').length,
    q: !!document.querySelector('.quotebox') || !!document.querySelector('.noquote')
  }));
  if(!o.h1||o.rel<3||o.tags<4||o.bullets<4||!o.q||o.lbls.length<6) problems.push([id,o]);
}
console.log('idea pages:', ids.length, 'problems:', problems.length?problems.slice(0,5):'none');

// every book page
const books = await p.evaluate(()=>window.LW.DB.books.map(b=>b.id));
for (const bid of books){
  await p.goto(url+'#/book/'+bid); await p.waitForTimeout(80);
  const n = await p.$$eval('.kitem', x=>x.length);
  const t = await p.textContent('h1.display');
  if(n<12) problems.push(['book '+bid, n]);
  console.log('book', bid, t.trim(), n, 'ideas');
}

// screens
for (const r of ['#/home','#/library','#/ideas','#/ideas/category/investing','#/ideas/model','#/ideas/model/five-forces','#/saved']){
  await p.goto(url+r); await p.waitForTimeout(250);
  const o=await p.evaluate(()=>({sw:document.documentElement.scrollWidth,cw:document.documentElement.clientWidth}));
  console.log(r, o.sw>o.cw+1?'OVERFLOW':'ok');
}
await p.goto(url+'#/ideas'); await p.waitForTimeout(300); await p.screenshot({path:'shot/T-ideas.png'});
await p.goto(url+'#/ideas/model'); await p.waitForTimeout(300); await p.screenshot({path:'shot/U-models.png', fullPage:true});
await p.goto(url+'#/library'); await p.waitForTimeout(300); await p.screenshot({path:'shot/V-library.png', fullPage:true});
await p.goto(url+'#/idea/s7p-counter-positioning'); await p.waitForTimeout(300); await p.screenshot({path:'shot/W-idea.png', fullPage:true});

// search + apply across the bigger library
await p.click('.topbar [data-act="search-open"]'); await p.waitForTimeout(300);
await p.fill('#q','how do I know if a moat is real'); await p.waitForTimeout(400);
console.log('search moat:', await p.$$eval('#qres .ktitle', n=>n.slice(0,6).map(x=>x.textContent)));
await p.fill('#q','avoid catastrophic investment mistakes'); await p.waitForTimeout(400);
console.log('search ruin:', await p.$$eval('#qres .ktitle', n=>n.slice(0,6).map(x=>x.textContent)));
await p.click('[data-act="search-close"]'); await p.waitForTimeout(200);
await p.goto(url+'#/idea/inversion'); await p.waitForTimeout(300);
await p.click('[data-act="apply"]'); await p.waitForTimeout(300);
await p.click('[data-act="afill"]'); await p.click('[data-act="run-apply"]'); await p.waitForTimeout(600);
console.log('apply also-consider:', await p.$$eval('#aout .rel .rt', n=>n.map(x=>x.textContent)));
console.log('errors:', errs.length?errs:'none');
await b.close();
