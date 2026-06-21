class InventoryPage {
  constructor(page) {
    this.page = page;

    this.pageTitle      = page.locator('[data-test="title"]');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartIcon       = page.locator('.shopping_cart_link');
    this.productNames   = page.locator('[data-test="inventory-item-name"]');
    this.addToCartBtn   = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.sortDropdown   = page.locator('[data-test="product-sort-container"]');

  }

  async getTitle() {
    return await this.pageTitle.textContent();
  }

  async isLoaded() {
    return await this.inventoryItems.count() > 0;
  }

  async getProductCount() {
    return await this.inventoryItems.count();
  }

  
    async addFirstItemToCart() {
        await this.addToCartBtn.click();
    }

    async sortBy(option) {
        await this.sortDropdown.selectOption(option);
    }

    async getFirstProductName() {
        return await this.productNames.first().textContent();
    }
}

module.exports = InventoryPage;