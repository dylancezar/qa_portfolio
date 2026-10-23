import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test('Discounted Mocha added to the Cart after promo rejecting', async ({
  page,
}) => {

  const pomActions = new CartPage(page);

  await pomActions.goToCartApp();
  await pomActions.addCappuccinoToCart();
  await pomActions.addEspressoToCart();
  await pomActions.addAmericanoToCart();
  await pomActions.checkMochaMessage();
  await pomActions.refuseMochaMessage();
  await pomActions.openCart();
  await pomActions.waitForLoading();

  // Espresso
  await expect(pomActions.espressoItem).toBeVisible();

  // (Discounted) Mocha
  await expect(pomActions.mochaDiscountedItem).toBeHidden();

  // Cappuccino
  await expect(pomActions.cappuccinoItem).toBeVisible();

  // Americano
  await expect(pomActions.americanoItem).toBeVisible();
});
