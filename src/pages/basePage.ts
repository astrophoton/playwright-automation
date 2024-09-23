import { Page } from "@playwright/test";

export class BasePage {
  protected constructor(protected page: Page) {}

  protected url = "/";

  async goToURL() {
    await this.page.goto(this.url);
    await this.page.waitForLoadState("load");
  }

  protected setURL(url: string) {
    return (this.url = `/web/index.php/${url}`);
  }
}
