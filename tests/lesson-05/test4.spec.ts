import { test } from '@playwright/test';

test('Basic Action', async ({ page }) => {
    await test.step("Navigate to material website", async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await test.step("Click on Personal notes", async () => {
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    });

    await test.step("Input infor STT1", async () => {
        await page.locator("//input[@id='note-title']").fill("click");
        await page.locator("//textarea[@id='note-content']").pressSequentially("Hàm click dùng để thực hiện click vào các phần tử trên trang web", { delay: 10 });
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT2", async () => {
        await page.locator("//input[@id='note-title']").fill("fill");
        await page.locator("//textarea[@id='note-content']").pressSequentially("Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web", { delay: 10 });
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT3", async () => {
        await page.locator("//input[@id='note-title']").fill("type");
        await page.locator("//textarea[@id='note-content']").pressSequentially("Hàm type dùng để nhập từng kí tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng", { delay: 10 });
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT4", async () => {
        await page.locator("//input[@id='note-title']").fill("hover");
        await page.locator("//textarea[@id='note-content']").pressSequentially("Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover", { delay: 10 });
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT5", async () => {
        await page.locator("//input[@id='note-title']").fill("check");
        await page.locator("//textarea[@id='note-content']").fill("Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked");
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT6", async () => {
        await page.locator("//input[@id='note-title']").fill("uncheck");
        await page.locator("//textarea[@id='note-content']").fill("Hàm check dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked");
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT7", async () => {
        await page.locator("//input[@id='note-title']").fill("selectOption");
        await page.locator("//textarea[@id='note-content']").fill("Hàm selectOption dùng để chọn một hoặc nhiều Option trong thẻ select dropdown");
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT8", async () => {
        await page.locator("//input[@id='note-title']").fill("press");
        await page.locator("//textarea[@id='note-content']").fill("Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác");
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT9", async () => {
        await page.locator("//input[@id='note-title']").fill("dblckick");
        await page.locator("//textarea[@id='note-content']").fill("Hàm dblckick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web");
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input infor STT10", async () => {
        await page.locator("//input[@id='note-title']").fill("dragAndDrop");
        await page.locator("//textarea[@id='note-content']").fill("Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web");
        await page.locator("//button[@id='add-note']").click();
    });

    //Search với keyword một hoặc nhiều
    await test.step("Search với keyword một hoặc nhiều", async () => {
        await page.locator("//input[@id='search']").fill("một hoặc nhiều");
    });
});