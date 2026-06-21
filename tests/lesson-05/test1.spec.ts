import { test } from '@playwright/test';
test('Register Page', async ({ page }) => {
    await test.step("Truy cập vào trang", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step("Click Bài học 1", async () => {
        await page.locator("//a[text() = 'Bài học 1: Register Page (có đủ các element)']").click();
    });
    await test.step("Nhập thông tin", async () => {
        await page.locator("//input[@id= 'username']").fill("Hien Le");
        await page.locator("//input[@id='email']").pressSequentially("lethuyhien1309@gmail.com", { delay: 1_00 });
    });
    //Radio
    await test.step("Radio button", async () => {
        let isCheckMale = await page.locator("//input[@id= 'male']").isChecked();
        console.log(isCheckMale);
        await page.locator("//input[@id= 'male']").check();
        isCheckMale = await page.locator("//input[@id= 'male']").isChecked();
        await page.waitForTimeout(2000);
        console.log(isCheckMale);
    });
    //Checkbox
    await test.step("Checkbox", async () => {
        let isCheckCooking = await page.locator("//input[@id= 'reading']").isChecked();
        console.log(isCheckCooking);
        await page.locator("//input[@id= 'reading']").check();
        isCheckCooking = await page.locator("//input[@id= 'reading']").isChecked();
        await page.waitForTimeout(2000);
        console.log(isCheckCooking);
    });
    //Select Interests
    await test.step("Select Interests", async () => {
        await page.locator("//select[@id='interests']").selectOption([
            "Art",
            "Music",
            "Sports"
        ]);
    });
    //Select Country
    await test.step("Select Country", async () => {
        await page.locator("//select[@id='country']").selectOption("canada");
        await page.waitForTimeout(1000);
    });
    // Input Date of Birth
    await test.step("Select option", async () => {
        await page.locator("//input[@id= 'dob']").fill("1999-06-12");
        await page.waitForTimeout(1000);
    });
    // Upload file
    await test.step("Uload file", async () => {
        await page.locator("//input[@type='file']").setInputFiles("data-test/data-test.txt");
        await page.waitForTimeout(1000);
    });
    // Input Biography
    await test.step("Input Biography", async () => {
        await page.locator("//textarea[@id = 'bio']").fill("Học Playwright rất hay");
        await page.waitForTimeout(1000);
    });
    // Input rate
    await test.step("Input rating", async () => {
        await page.locator("//input[@id='rating']").fill("8");
        await page.waitForTimeout(1000);
    });
    // Input color
    await test.step("Input color", async () => {
        await page.locator("//input[@id='favcolor']").fill("#5900ff");
        await page.waitForTimeout(1000);
    });
    //Checkbox Subscribe
    await test.step("Checkbox", async () => {
        let isCheckNewsletter = await page.locator("//input[@id= 'newsletter']").isChecked();
        console.log(isCheckNewsletter);
        await page.locator("//input[@id= 'newsletter']").check();
        isCheckNewsletter = await page.locator("//input[@id= 'newsletter']").isChecked();
        await page.waitForTimeout(1000);
        console.log(isCheckNewsletter);
    });

    await test.step("Hover Feature", async () => {
        let hover = page.locator("// div[@class= 'tooltip']");
        await hover.hover();
        await page.waitForTimeout(2000);
        console.log("Hover");
    });

    // Toggle Switch
    await test.step("Toggle Enable Feature", async () => {
        await page.locator("//label[@class= 'switch']").scrollIntoViewIfNeeded();
        const isChecked = await page.locator("//input[@id='toggleOption']").isChecked();
        console.log("Toggle trước khi bật:", isChecked);
        if (!isChecked) {
            await page.locator("//label[@class= 'switch']").click();
        }
        const afterChecked = await page.locator("//label[@class= 'switch']").isChecked();
        await page.waitForTimeout(2000);
        console.log("Toggle sau khi bật:", afterChecked);
    });
    //rate
    await page.locator("//div[@id='starRating']").evaluate((el) => {
        el.setAttribute("data-rating", "3.4");
        el.style.setProperty("--rating-width", "68%");
    });

    //Submit
    await page.locator("//button [@type='submit']").click();

});
