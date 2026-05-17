import {test, expect} from '@playwright/test';

test('locate the iframe', async ({page}) => {

await page.goto('https://app.thetestingacademy.com/playwright/frames/multi-frames');

let mainFrame = await page.frameLocator('[name="main"]');

const headerText = await mainFrame.locator('h2').innerText();
console.log(headerText);


await page.waitForTimeout(6000);


})