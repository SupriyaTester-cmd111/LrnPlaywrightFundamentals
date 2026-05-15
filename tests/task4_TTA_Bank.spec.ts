import {test, expect} from 'playwright/test';

test ("TTA bank project", async({page}) =>{

    await page.goto('https://tta-bank-digital-973242068062.us-west1.run.app/');

    const signupbtn = await page.getByRole('button',{name: 'Sign up'}).click();
    const fullname = await page.getByRole('textbox',{name: 'John Doe'}).fill('John Doe');
    const emailadd = await page.getByRole('textbox',{name: 'you@example.com'}).fill('you@example.com');
    const passwrd = await page.getByRole('textbox',{name: '••••••••'}).fill('••••••••');
    const createaccount = await page.getByRole('button',{name: 'Create Account'}).click();

    await expect(page).toHaveURL('https://tta-bank-digital-973242068062.us-west1.run.app/');
    await expect (page.locator('//h1[normalize-space()="Dashboard"]'));

    const transferbtn = await page.getByRole('button',{name: 'Transfer Funds'}).click();

    const tranfermoney = await page.locator('//button[normalize-space()="Transfer Money"]').click();

    const amt = await page.locator('//input[@placeholder="0.00"]').fill('5000');

    const continuebtn = await page.getByRole('button',{name: 'Continue'}).click();

    const confermtrns = await page.getByRole('button',{name: 'Confirm Transfer'}).click();

    const dashbrd = await page.getByRole('button',{name: 'Dashboard'}).click();

    const amtcheck = await page.getByRole('textbox',{name: 'flex items-center justify-between'}).allTextContents();



await page.waitForTimeout(4000);

})
