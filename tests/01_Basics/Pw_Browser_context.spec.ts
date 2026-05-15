import {test, expect, chromium, Browser, BrowserContext, Page} from '@playwright/test';

test('Browser context eg', async () => {

// level 1 lounching browser
let browser: Browser = await chromium.launch ({headless: false});

console.log('Browser launched');

// Level 2 create context

const context = await browser.newContext();
console.log('context created context');


// Open page

const page: Page =await  context.newPage();

console.log('page opened');

await page.waitForTimeout(5000);
});