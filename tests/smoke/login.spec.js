const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const InventoryPage = require('../../pages/InventoryPage');
const users = require('../../fixtures/users');

test.describe('Login Tests', () => {

    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate();
    });

    // TC-001
    test('should login successfully with valid credentials', async ({ page }) => {
        await loginPage.login(users.standard.username, users.standard.password);
        const inventoryPage = new InventoryPage(page);
        const title = await inventoryPage.getTitle();
        expect(title).toBe('Products');
    });

    // TC-002
    test('should show error for locked out user', async ({ page }) => {
        await loginPage.login(users.locked.username, users.locked.password);
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Sorry, this user has been locked out');
    });

    // TC-003 
    test('should show invalid credentials', async ({ page }) => {
        await loginPage.login(users.invalid.username, users.invalid.password);
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Username and password do not match any user in this service');
    });

    // TC-004 
    test('should show error when username is empty', async ({ page }) => {
        await loginPage.login('', users.standard.password);
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Username is required');
    });
   
    // TC-005 
    test('should show error when password is empty', async ({ page }) => {
        await loginPage.login(users.standard.username,'');
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Password is required');
    });

    // TC-006 
      test('should show error when both fields are empty', async ({ page }) => {
        await loginPage.login('','');
        const error = await loginPage.getErrorMessage();
        expect(error).toContain('Username is required');
    });
 
   // TC-007
    test('should logout successfully', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.logout();
    expect(await loginPage.loginButton.isVisible()).toBe(true);

});
});