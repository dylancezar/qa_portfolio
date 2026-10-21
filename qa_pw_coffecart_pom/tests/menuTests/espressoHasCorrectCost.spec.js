import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test('Espresso cup has correct cost', async ({ page }) => {

  const pomActions = new CartPage (page);


  await pomActions.goToCartApp();
  await pomActions.addEspressoToCart();
  await pomActions.openCart();
  await expect(pomActions.espressoTotalCostLocator).toContainText('$10.00');
});
