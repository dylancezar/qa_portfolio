import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';


test('Espresso cost is added to Total on menu page', async ({ page }) => {

  const pomActions = new CartPage(page);

  await pomActions.goToCartApp();
  await pomActions.addEspressoToCart();
  await expect(pomActions.checkoutLocator).toContainText('Total: $10.00');
});
