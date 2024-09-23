import { chromium, type FullConfig } from "@playwright/test";
import dotenv from "dotenv";
import { LoginPage } from "./src/pages";

dotenv.config();

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.loginFlow();
  await page.waitForLoadState("load");

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
