import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.locator('h1');
  }

  async getHeadingText() {
    return await this.heading.textContent();
  }
}
