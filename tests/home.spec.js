import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Home page', () => {
  test('should display correct heading', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto('https://example.com');
    const heading = await homePage.getHeadingText();
    expect(heading).toContain('Example');
  });
});
