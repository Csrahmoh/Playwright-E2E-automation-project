class CheckoutPage {
    constructor(page) {
        this.page = page;

        // Checkout step 1 locators
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput  = page.locator('[data-test="lastName"]');
        this.zipCodeInput   = page.locator('[data-test="postalCode"]');
        this.continueBtn    = page.locator('[data-test="continue"]');
        this.cancelBtn      = page.locator('[data-test="cancel"]');
        this.errorMessage   = page.locator('[data-test="error"]');

        // Checkout step 2 locators
        this.finishBtn         = page.locator('[data-test="finish"]');
        this.confirmationMsg   = page.locator('[data-test="complete-header"]');
    }

    async fillInfo(firstName, lastName, zip) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.zipCodeInput.fill(zip);
    }

    async clickContinue() {
      await this.continueBtn.click();
    }

    async clickCancel() {
      await this.cancelBtn.click();
    }

    async getErrorMessage() {
      return await this.errorMessage.textContent();
    }

    async clickFinish() {
      await this.finishBtn.click();
    }

    async getConfirmation() {
      return await this.confirmationMsg.textContent();
    }
}

module.exports = CheckoutPage;