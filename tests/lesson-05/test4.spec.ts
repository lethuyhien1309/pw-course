import { test } from '@playwright/test';
test('Register Page', async ({ page }) => {
    await test.step("Truy cập vào trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click Bài học 4", async () => {
        await page.locator("//a[text() = 'Bài học 4: Personal notes']").click();
    });
    await test.step("Add notes", async () => {
        for (let i = 1; i <= 10; i++) {
            await page.locator("//input[@id = 'note-title']").fill("ABC" + [i]);
            await page.locator("//textarea[@id = 'note-content']").fill("ABC" + [i]);
            await page.locator("//button[@id = 'add-note']").click();
            await page.waitForTimeout(1000);
        }

    });
    await test.step("Search notes", async () => {
        for (let i = 1; i <= 10; i++) {
            await page.locator("//input[@id = 'search']").fill("ABC1");

        }

    });

});