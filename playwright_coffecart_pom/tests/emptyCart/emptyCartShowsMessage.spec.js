import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test.beforeEach (async ({page}) => {
    await page.goto('https://coffee-cart.app/cart');
});

test('Empty cart shows correct message', async ({ page }) => {
  const pomActions = new CartPage(page);

  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
});
