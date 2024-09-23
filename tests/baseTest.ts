import { test as baseTest } from "@playwright/test";
import { AdminPage, LoginPage } from "../src/pages/";

type pageFixtures = {
  loginPage: LoginPage;
  adminPage: AdminPage;
};

export const test = baseTest.extend<pageFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  adminPage: async ({ page }, use) => {
    await use(new AdminPage(page));
  },
});
