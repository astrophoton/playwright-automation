import { Page } from "@playwright/test";
import { BasePage } from "./basePage";
import dotenv from "dotenv";

dotenv.config();

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async loginFlow() {
    await this.page
      .getByPlaceholder("Username")
      .fill(process.env.LOGIN_USERNAME || "");
    await this.page
      .getByPlaceholder("Password")
      .fill(process.env.LOGIN_PASSWORD || "");
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
