import {test, expect} from '@playwright/test';

test('locate the iframe', async ({page}) => {

await page.goto('https://app.thetestingacademy.com/playwright/widgets/hover-menu');

const hoverdd = await page.getByTestId('nav-add-ons').hover();

const wifi = await page.getByTestId('test-id-Wifi').click();

const output = await page.locator('#output').textContent();


await page.waitForTimeout(6000);



})
