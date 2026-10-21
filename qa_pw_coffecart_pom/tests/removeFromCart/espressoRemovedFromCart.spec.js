import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test('Espresso removed from Cart after clicking Remove', async ({ page }) => {
  const pomActions = new CartPage(page);

  await pomActions.goToCartApp();
  await pomActions.addEspressoToCart();
  await pomActions.openCart();
  await pomActions.waitForLoading();
  await pomActions.removeAllEspressoFromCart();
  await expect(pomActions.emptyCartLocator).toBeVisible();
});
