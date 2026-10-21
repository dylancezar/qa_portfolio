import { expect } from '@playwright/test';

export class CartPage {
  constructor(page) {
    this.page = page;

//*LOCATORS*//

//*Cart Locators*//
    this.cartLocator = page.getByLabel('Cart page');
    this.cartListLocator = page.getByRole('list').nth(1);
    this.emptyCartLocator = page.getByText('No coffee, go add some.');
    this.checkoutLocator = page.getByTestId('checkout');

//*Capuccino Locators*//
    this.cappuccinoLocator = page.getByTestId('Cappuccino');
    this.cappuccinoItem = this.cartListLocator.getByRole('listitem').filter({
    hasText: 'Cappuccino',
    });

    this.cappuccinoNameLocator = this.cappuccinoItem.locator('div').nth(0);
    this.cappuccinoUnitLocator = this.cappuccinoItem.locator('div').nth(1);
    this.cappuccinoTotalCostLocator = this.cappuccinoItem.locator('div').nth(3);
    this.removeAllCappuccinoButtonLocator = page.getByLabel('Remove all Cappuccino')
    this.removeOneCappuccinoButtonLocator = page.getByRole('button', { name: 'Remove one Cappuccino' });
    this.addOneCappuccinoButtonLocator = page.getByRole('button', { name: 'Add one Cappuccino' });

//*Espresso Locators*// 
    this.espressoLocator = page.getByTestId('Espresso');
    this.espressoItem = this.cartListLocator.getByRole('listitem').filter({
    hasText: 'Espresso',
    });

    this.espressoNameLocator = this.espressoItem.locator('div').nth(0);
    this.espressoUnitLocator = this.espressoItem.locator('div').nth(1);
    this.espressoTotalCostLocator = this.espressoItem.locator('div').nth(3);
    this.removeAllEspressoButtonLocator = page.getByLabel('Remove all Espresso');
    this.removeOneEspressoButtonLocator = page.getByRole('button', { name: 'Remove one Espresso' });
    this.AddOneEspressoButtonLocator = page.getByRole('button', { name: 'Add one Espresso' });

//*Americano Locators*//
    this.americanoLocator = page.getByTestId('Americano')
    this.americanoItem = this.cartListLocator.getByRole('listitem').filter({
    hasText: 'Americano',
    });

    this.americanoTotalCostLocator = this.americanoItem.locator('div').nth(3);

//*Mocha Locators*//
    this.mochaMessageLocator = page.getByText("It's your lucky day! Get an extra cup of Mocha for $4.");
    this.mochaYesLocator = page.getByRole('button', { name: 'Yes, of course!' });
    this.mochaNotLocator = page.getByRole('button', { name: "Nah, I'll skip." });

    this.mochaDiscountedItem = this.cartListLocator.getByRole('listitem')
    .filter({ hasText: '(Discounted) Mocha' });
    
    this.mochaDiscountedTotalCost = this.mochaDiscountedItem.locator('div').nth(3);





  }


//*METHODS*//

  async goToCartApp() {
    await this.page.goto('https://coffee-cart.app/');
  }

  async waitForLoading() {
    await this.page.waitForURL('https://coffee-cart.app/cart');
  }

  async openCart(){
    await this.cartLocator.click();
    await this.waitForLoading();
  }

  async checkEmptyCart(){
      await expect(this.emptyCartLocator).toBeVisible();
  }

//*Cappuccino Commands*//
  async addCappuccinoToCart() {
    await this.cappuccinoLocator.click();
  }

  async removeAllCappuccinoFromCart(){
    await this.removeAllCappuccinoButtonLocator.click();
  }

  async removeOneCappuccinoFromCart(){
    await this.removeOneCappuccinoButtonLocator.click();
  }

  async addOneCappuccinoToCart(){
    await this.addOneCappuccinoButtonLocator.click();
  }

//*Espresso Commands*//
  async addEspressoToCart (){
  await this.espressoLocator.click();
  };

  async removeAllEspressoFromCart(){
  await this.removeAllEspressoButtonLocator.click();
  }

  async removeOneEspressoFromCart(){
    await this.removeOneEspressoButtonLocator.click();
  }

  async addOneEspressoToCart(){
    await this.AddOneEspressoButtonLocator.click();
  }

//*Americano Commands*//
  async addAmericanoToCart(){
    await this.americanoLocator.click();
  }

//*Mocha Commands*//
  async checkMochaMessage(){
    await expect(this.mochaMessageLocator).toBeVisible();
  }

  async acceptMochaMessage(){
    await this.mochaYesLocator.click();
  }

  async refuseMochaMessage(){
    await this.mochaNotLocator.click();
  }

}
