import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test.beforeEach(async ({page}) => {
  await page.goto('https://coffee-cart.app/');
});

test('Discounted Mocha added to the Cart after promo accepting', async ({
  page}) => {

    const pomActions = new CartPage(page);

  await pomActions.addCappuccinoToCart();
  await pomActions.addEspressoToCart();
  await pomActions.addAmericanoToCart();

  await pomActions.checkMochaMessage();
  await pomActions.acceptMochaMessage();
  await pomActions.openCart();
  await pomActions.waitForLoading();

  // Espresso
  await expect(pomActions.espressoTotalCostLocator).toContainText('$10.00');

  // (Discounted) Mocha
  await expect(pomActions.mochaDiscountedTotalCost).toContainText('$4.00');

  // Cappuccino
  await expect(pomActions.cappuccinoTotalCostLocator).toContainText('$19.00');

  // Americano
  await expect(pomActions.americanoTotalCostLocator).toContainText('$7.00');
});
