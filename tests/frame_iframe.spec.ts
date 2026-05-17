import {test, expect} from '@playwright/test';

test('locate the iframe', async ({page}) => {

await page.goto('https://app.thetestingacademy.com/playwright/frames/');

await page.frameLocator('#frame-one').locator('#RESULT_TextField-1').fill('Tata siera');
await page.frameLocator('#frame-one').locator('#RESULT_TextField-2').fill('Umesh Kolhe');
await page.frameLocator('#frame-one').locator('#RESULT_TextField-3').fill('MH12-AC-4922');
await page.frameLocator('#frame-one').locator('#RESULT_RadioButton-1').click();
await page.frameLocator('#frame-one').locator('#RESULT_RadioButton-1').selectOption('Hatchback');
await page.frameLocator('#frame-one').locator('#RESULT_TextField-4').fill('2026');
await page.frameLocator('#frame-one').locator('#RESULT_TextArea-1').fill('It is My First Car');
await page.frameLocator('#frame-one').locator('#vehicle-submit').click();
await page.frameLocator('#frame-one').locator('#vehicle-output').textContent();



await page.waitForTimeout(9000);


})