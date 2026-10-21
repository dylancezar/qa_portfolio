import { test, expect } from '@playwright/test';
import { CartPage } from '../../src/pages/CartPage';


  test.beforeEach (async ({page}) => {
      await page.goto('https://coffee-cart.app/');
  })


test('Cappuccino cup has correct cost', async ({ page }) => {

  const pomActions = new CartPage(page);
  
  await expect(pomActions.cappuccinoItem).toContainText('$19.00');
});
