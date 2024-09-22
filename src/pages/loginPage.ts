import { Page } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

export class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  protected url = `${process.env.BASE_URL}`;

  async loginFlow() {
    await this.page.goto(this.url);
    await this.page
      .getByPlaceholder("Username")
      .fill(process.env.LOGIN_USERNAME || "");
    await this.page
      .getByPlaceholder("Password")
      .fill(process.env.LOGIN_PASSWORD || "");
    await this.page.getByRole("button", { name: "Login" }).click();
  }
}
