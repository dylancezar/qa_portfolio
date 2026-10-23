import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test('Cappuccino removed from Cart after clicking Remove', async ({ page }) => {
  const pomActions = new CartPage(page);

  await pomActions.goToCartApp();
  await pomActions.addCappuccinoToCart();
  await pomActions.openCart();
  await pomActions.waitForLoading();
  await pomActions.removeAllCappuccinoFromCart();
  await expect(pomActions.emptyCartLocator).toBeVisible();
});
