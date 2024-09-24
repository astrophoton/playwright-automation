import { expect, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AdminPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  protected pageURL = this.setURL("admin/viewSystemUsers");

  async addUser() {
    const header = this.page.locator(".orangehrm-header-container");
    const addButton = header.getByRole("button", { name: "Add" });

    await addButton.click();
  }
}
