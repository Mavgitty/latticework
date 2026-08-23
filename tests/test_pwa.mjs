import { chromium } from 'playwright';
const url='file:///home/claude/pk/latticework.html';
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await (await b.newContext({viewport:{width:390,height:844}})).newPage();
const errs=[]; p.on('pageerror',e=>errs.push(e.message));
await p.goto(url); await p.waitForTimeout(500);
const meta = await p.evaluate(() => ({
  capable: document.querySelector('meta[name="apple-mobile-web-app-capable"]')?.content,
  title: document.querySelector('meta[name="apple-mobile-web-app-title"]')?.content,
  touchIcon: !!document.querySelector('link[rel="apple-touch-icon"]')?.href,
  manifest: !!document.querySelector('link[rel="manifest"]')?.href,
  themeColor: document.querySelector('meta[name="theme-color"]')?.content,
}));
console.log(JSON.stringify(meta, null, 2));
console.log('page errors:', errs);
await b.close();
