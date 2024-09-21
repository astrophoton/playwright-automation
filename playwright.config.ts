import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./results",
  globalSetup: require.resolve("./global-setup"),
  globalTeardown: require.resolve("./global-teardown"),
  fullyParallel: true,
  timeout: 30000,
  retries: 2,
  workers: 2,
  reporter: "html",
  use: {
    baseURL: "https://opensource-demo.orangehrmlive.com/",
    storageState: "state.json",
    screenshot: "only-on-failure",
    trace: "on",
    video: "on",
    headless: true,
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
