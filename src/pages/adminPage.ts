import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class AdminPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  protected pageURL = this.setURL("admin/viewSystemUsers");
}
