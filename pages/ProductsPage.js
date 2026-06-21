class ProductsPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.productNames = page.locator('[data-test="inventory-item-name"]');
        this.addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.cartIcon     = page.locator('.shopping_cart_link');
    }

    async sortBy(option) {
        await this.sortDropdown.selectOption(option);
    }

    async getFirstProductName() {
        return await this.productNames.first().textContent();
    }

    async addFirstItemToCart() {
        await this.addToCartBtn.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = ProductsPage;