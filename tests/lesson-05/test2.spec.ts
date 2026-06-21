import { test } from '@playwright/test';
test('Register Page', async ({ page }) => {
    await test.step("Truy cập vào trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click Bài học 2", async () => {
        await page.locator("//a[text() = 'Bài học 2: Product page']").click();
    });
    await test.step("Add to Cart Product 1", async () => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").click();
        await page.locator("//button[@class='add-to-cart' and @data-product-id='1']").click();
    });
    await test.step("Add to Cart Product 2", async () => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
        await page.locator("//button[@class='add-to-cart' and @data-product-id='2']").click();
    });
    await test.step("Add to Cart Product 3", async () => {
        await page.locator("//button[@class='add-to-cart' and @data-product-id='3']").click();
    });

});
