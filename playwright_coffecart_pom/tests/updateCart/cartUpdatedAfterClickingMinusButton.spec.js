import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';


test('Cart updated correctly after clicking minus for drinks', async ({
  page,
}) => {
  const pomActions = new CartPage(page);

  await pomActions.goToCartApp();
  await pomActions.addCappuccinoToCart();
  await pomActions.addEspressoToCart();
  await pomActions.openCart();
  await pomActions.waitForLoading();

  await expect(pomActions.espressoItem).toBeVisible();
  await pomActions.removeOneEspressoFromCart();
  await expect(pomActions.espressoItem).toBeHidden();
  await expect(pomActions.cappuccinoItem).toBeVisible();
  await pomActions.removeOneCappuccinoFromCart();
  await expect(pomActions.cappuccinoItem).toBeHidden();
  await expect(pomActions.emptyCartLocator).toBeVisible();
});

