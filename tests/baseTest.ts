import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../src/pages/";

type pageFixtures = {
  loginPage: LoginPage;
};

baseTest.extend<pageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});
