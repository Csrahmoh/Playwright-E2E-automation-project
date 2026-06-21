const { test, expect } = require('@playwright/test');  
const LoginPage     = require('../../pages/LoginPage');
const ProductsPage  = require('../../pages/ProductsPage');
const CartPage      = require('../../pages/CartPage');
const CheckoutPage  = require('../../pages/CheckoutPage');
const users         = require('../../fixtures/users');

test.describe('Checkout E2E', () => {

    test('should complete full purchase journey', async ({ page }) => {

        // Step 1: Login
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login(users.standard.username, users.standard.password);

        // Step 2: Add product to cart
        const productsPage = new ProductsPage(page);
        await productsPage.addFirstItemToCart();        

        // Step 3: Go to cart
        await productsPage.goToCart();

        // Step 4: Click Checkout
        const cartPage = new CartPage(page);
        await cartPage.clickCheckout();

        // Step 5: Fill info
        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillInfo('Rama','Ahmed','1234');

        // Step 6: Click Continue
        await checkoutPage.clickContinue();

        // Step 7: Click Finish
        await checkoutPage.clickFinish();

        // Assert: Check confirmation message
        const msg = await checkoutPage.getConfirmation();
        expect(msg).toContain('Thank you for your order!');
        

    });
    

});