import { test, expect } from "@playwright/test";

test.describe("Authenticated Actions", () => {
  test("should access the dashboard page", async ({ page }) => {
    // The browser should already be logged in due to the global setup
    await page.goto("/web/index.php/admin/viewSystemUsers");

    // Assert that the dashboard is loaded
    await expect(page).toHaveURL("/web/index.php/admin/viewSystemUsers");
  });
});
