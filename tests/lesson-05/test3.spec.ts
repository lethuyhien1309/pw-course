import { test } from '@playwright/test';

test('Register Page', async ({ page }) => {

    await test.step("Truy cập vào trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Click Bài học 3", async () => {
        await page.locator("//a[text()='Bài học 3: Todo page']").click();
    });

    // Add 100 rows
    await test.step("Add rows", async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });

    // Delete odd rows
    await test.step("Delete rows", async () => {

        page.on('dialog', async dialog => {
            await dialog.accept();
        });

        const rows = page.locator("//ul[@id='task-list']/li");
        const count = await rows.count();

        for (let i = count; i >= 1; i--) {
            if (i % 2 !== 0) {
                await page.locator("//button[text()='Delete']").nth(i - 1).click();console.log(`Deleted row: ${i}`);
            }
        }
    });

});