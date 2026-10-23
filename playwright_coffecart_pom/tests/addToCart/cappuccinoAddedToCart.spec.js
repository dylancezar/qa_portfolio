import { test, expect } from '@playwright/test';
import {CartPage} from "../../src/pages/CartPage";

test.beforeEach(async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
});

test('Cappuccino correctly added to the Cart', async ({ page }) => {
  const pomActions = new CartPage(page);

  await pomActions.addCappuccinoToCart();
  await pomActions.openCart();

  await expect(pomActions.cappuccinoNameLocator).toContainText('Cappuccino');
  await expect(pomActions.cappuccinoUnitLocator).toContainText('$19.00 x 1');
  await expect(pomActions.cappuccinoTotalCostLocator).toContainText('$19.00');
});
