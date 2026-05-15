

import { test , expect } from '@playwright/test'; 

test("First test case", async ({ page }) => {

await page.goto("https://app.vwo.com/#/login");

const img = page.locator("id=vow-login-logo");

await expect (img).toBeVisible();

   const emailid = await page.locator("//input[@id='login-username']").fill("test@123.com");
  const password = await page.locator("//input[@id='login-password']").fill("test123");
  const signinbtn = await page.locator("//button[@id='js-login-btn']").click();
 await expect(page.locator("//div[@id='js-notification-box-msg']")).toHaveText("Your email, password, IP address or location did not match");


await page.waitForTimeout(5000);


})