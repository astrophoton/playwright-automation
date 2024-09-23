import { expect } from "@playwright/test";
import { test } from "./baseTest";

test.describe("Test page fixture routing ...", () => {
  test("Navigate to Admin Page", async ({ page, adminPage }) => {
    await adminPage.goToURL();
    await expect(page).toHaveURL("/web/index.php/admin/viewSystemUsers");
  });
});
