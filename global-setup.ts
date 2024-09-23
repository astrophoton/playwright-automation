import { chromium, type FullConfig } from "@playwright/test";
import { LoginPage } from "./src/pages";

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(`${process.env.BASE_URL}`);
  await page.waitForLoadState("load");

  const loginPage = new LoginPage(page);
  await loginPage.loginFlow();

  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
