import { test } from "./baseTest";

test.describe.parallel("Test page fixture routing ...", () => {
  test("Add new user", async ({ adminPage }) => {
    adminPage.addUser();
  });
});
