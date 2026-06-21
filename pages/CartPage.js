class CartPage {
    constructor(page) {
        this.page = page;

        this.cartItems        = page.locator('[data-test="inventory-item"]');
        this.removeBtn        = page.locator('[data-test="remove-sauce-labs-backpack"]');
        this.checkoutBtn      = page.locator('[data-test="checkout"]');
        this.continueShopBtn  = page.locator('[data-test="continue-shopping"]');
    }

    async getItemCount() {
        return await this.cartItems.count();
    }

    async removeItem() {
        await this.removeBtn.click();
    }

    async clickCheckout() {
        await this.checkoutBtn.click();
    }

    async continueShopping() {
        await this.continueShopBtn.click();
    }
}

module.exports = CartPage;