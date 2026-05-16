import {test, expect} from '@playwright/test';

test("web table", async({page}) => {

page.goto ('https://app.thetestingacademy.com/playwright/webtable');

const search = await page.locator('#employee-search').fill('Kabir.Khan');

const checkbox = await page.getByLabel('Select Kabir.Khan').click();

const output = await page.locator('#selected-output').allTextContents();


await page.waitForTimeout(9000);


})
