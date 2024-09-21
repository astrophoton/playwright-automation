import { chromium, type FullConfig } from "@playwright/test";
import dotenv from "dotenv";
dotenv.config();

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${process.env.BASE_URL}`);
  await page
    .getByPlaceholder("Username")
    .fill(process.env.LOGIN_USERNAME || "");
  await page
    .getByPlaceholder("Password")
    .fill(process.env.LOGIN_PASSWORD || "");
  await page.getByRole("button", { name: "Login" }).click();

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
