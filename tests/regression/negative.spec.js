const { test, expect } = require('@playwright/test');  
const LoginPage     = require('../../pages/LoginPage');
const ProductsPage  = require('../../pages/ProductsPage');
const CartPage      = require('../../pages/CartPage');
const CheckoutPage  = require('../../pages/CheckoutPage');
const users         = require('../../fixtures/users');

test.describe('Negative test', () => {

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
        await checkoutPage.fillInfo('','Ahmed','1234');

        // Step 6: Click Continue
        await checkoutPage.clickContinue();

        // Assert: Check error message
        const error = await checkoutPage.getErrorMessage();
        expect(error).toContain('First Name is required');

    });
    

});