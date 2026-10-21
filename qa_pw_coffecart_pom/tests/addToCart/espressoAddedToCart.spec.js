import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';


  test.beforeEach(async ({ page }) => {
    await page.goto('https://coffee-cart.app/');
  });

test('Espresso correctly added to the Cart', async ({ page }) => {
  const pomActions = new CartPage(page);

  await  pomActions.addEspressoToCart();
  await pomActions.openCart();
  await pomActions.waitForLoading();

  await expect(pomActions.espressoNameLocator).toContainText('Espresso');
  await expect(pomActions.espressoUnitLocator).toContainText('$10.00 x 1');
  await expect(pomActions.espressoTotalCostLocator).toContainText('$10.00');
});
