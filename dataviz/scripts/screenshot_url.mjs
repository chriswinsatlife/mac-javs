import { chromium } from 'playwright';

// Usage:
//   node dataviz/scripts/screenshot_url.mjs "http://127.0.0.1:4321/playbooks/gift-automation/" "../tmp_screens/playbook_gift_automation.png"

const url = process.argv[2];
const out = process.argv[3];

if (!url || !out) {
  process.stderr.write('Usage: screenshot_url.mjs <url> <out.png>\n');
  process.exit(2);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: out, fullPage: true });
await browser.close();

process.stdout.write(`Wrote ${out}\n`);
