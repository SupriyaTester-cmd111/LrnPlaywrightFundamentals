import { test, expect, Locator, Page } from '@playwright/test';



  const url = 'https://www.flipkart.com/search';
	
  test.describe('SVG handling', () => {

test.beforeEach( async ({ page }) => {
     await page.goto(url);
	});
      
    test('locate svg root & assert visible', async ({page}) => {
		await page.locator('input[name="q"]').fill("macmini");
const svgElements: Locator = page.locator('svg');
  await svgElements.first().click();
  await page.waitForTimeout(5000);

});

  });
