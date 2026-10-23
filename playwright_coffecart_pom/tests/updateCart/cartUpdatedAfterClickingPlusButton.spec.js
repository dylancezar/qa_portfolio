import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

test('Cart updated correctly after clicking plus for drinks', async ({
  page,
}) => {
  const pomActions = new CartPage(page);

  await pomActions.goToCartApp();
  await pomActions.addCappuccinoToCart();
  await pomActions.addEspressoToCart();
  await pomActions.openCart();
  await pomActions.waitForLoading();

  await expect(pomActions.espressoTotalCostLocator).toContainText('$10.00');
  await pomActions.addOneEspressoToCart();
  await expect(pomActions.espressoTotalCostLocator).toContainText('$20.00');
  await expect(pomActions.cappuccinoTotalCostLocator).toContainText('$19.00');
  await pomActions.addOneCappuccinoToCart();
  await expect(pomActions.cappuccinoTotalCostLocator).toContainText('$38.00');
  await expect(pomActions.espressoTotalCostLocator).toContainText('$20.00');
  await expect(pomActions.checkoutLocator).toContainText('$58.00');
});
