import {test, expect} from '@playwright/test';

test('Profile complition form',async ({page}) => {

    await page.goto('https://app.thetestingacademy.com/playwright/tables/practice');

    const firstname = await page.locator('#first-name').fill('Aarav');

    const laststname = await page.locator('#last-name').fill('Sharma');

    const gender = await page.getByTestId('gender-female').click();

    const wrkexp = await page.locator('#years-experience').selectOption('7');


    const profession = await page.getByTestId('profession-automation').click();

    const technicalskil = await page.getByTestId('tool-selenium').isChecked();



    await page.getByTestId('upload-image')
    .setInputFiles('test-data/img.png');

const saveprofile = await page.locator('#profile-submit').click();
const profileaapiarence = await page.locator('#submission-output').allTextContents();



await page.waitForTimeout(8000);


})