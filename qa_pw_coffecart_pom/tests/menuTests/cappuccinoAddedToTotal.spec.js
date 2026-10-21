import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';

  test.beforeEach(async({page}) => {
    await page.goto('https://coffee-cart.app/');
  });

test('Cappuccino cost is added to Total on menu page', async ({ page }) => {
  const pomActions = new CartPage(page);
  
  await pomActions.addCappuccinoToCart();
  await expect(pomActions.checkoutLocator).toContainText('Total: $19.00');
});
