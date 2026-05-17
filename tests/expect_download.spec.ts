import {test, expect, Download} from '@playwright/test';

test.describe('file download', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://app.thetestingacademy.com/playwright/widgets/upload-download');


    });

test('demo: download file', async ({page}) => {


    const [Download]: Download[] = await Promise.all([
        page.waitForEvent('download'),

        page.getByTestId('download-text').click()
    ]);

    expect(Download.suggestedFilename()).toContain('tta-notes');
    await Download.saveAs('./download/tta.txt');

    await page.waitForTimeout(8000);
})






})