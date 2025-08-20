import { test, expect } from '@playwright/test';

test('home page has pinned projects section', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('Pinned Projects')).toBeVisible();
});
