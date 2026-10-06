export class BasePage {
  constructor(page) {
    this.page = page;
  }

  async goto(url) {
    await this.page.goto(url);
  }

  async getTitle() {
    return await this.page.title();
  }

  async takeScreenshot(name) {
    return await this.page.screenshot({ path: `test-results/screenshots/${name}.png`, fullPage: true });
  }
}
