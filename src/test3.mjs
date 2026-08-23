import { chromium } from 'playwright';
const url='file:///home/claude/pk/latticework.html';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const ctx=await b.newContext({viewport:{width:390,height:844},deviceScaleFactor:2});
const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(url); await p.waitForTimeout(400);
await p.click('[data-act="guest"]'); await p.waitForTimeout(300);
for (const id of ['inversion','incentives']){ await p.goto(url+'#/idea/'+id); await p.waitForTimeout(250); await p.click('[data-act="save"]'); await p.waitForTimeout(150); }
await p.click('[data-act="learn"]'); await p.waitForTimeout(250);
await p.goto(url+'#/book/pca'); await p.waitForTimeout(400);
const box = await p.$$eval('.kchk svg', n=>n.map(x=>{const r=x.getBoundingClientRect();return [Math.round(r.width),Math.round(r.height)]}));
console.log('kchk icon sizes:', box);
console.log('marker rows:', await p.$$eval('.kitem .kchk', n=>n.length));
await p.evaluate(()=>window.scrollTo(0,1600)); await p.waitForTimeout(300);
await p.screenshot({path:'shot/H-book-keyideas.png'});
// widest-content checks: no horizontal overflow at 320px
const ctx2=await b.newContext({viewport:{width:320,height:700},deviceScaleFactor:2});
const q=await ctx2.newPage(); await q.goto(url); await q.waitForTimeout(400);
await q.click('[data-act="guest"]'); await q.waitForTimeout(300);
for (const r of ['#/home','#/library','#/book/pca','#/idea/inversion','#/ideas','#/saved']){
  await q.goto(url+r); await q.waitForTimeout(300);
  const o = await q.evaluate(()=>({sw:document.documentElement.scrollWidth, cw:document.documentElement.clientWidth}));
  console.log(r, 'scrollW', o.sw, 'clientW', o.cw, o.sw>o.cw+1?'OVERFLOW':'ok');
}
await q.screenshot({path:'shot/I-320.png'});
console.log('errors:', errs.length?errs:'none');
await b.close();
