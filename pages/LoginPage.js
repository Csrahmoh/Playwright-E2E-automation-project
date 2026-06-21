class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.usernameInput    = page.locator('#user-name');
    this.passwordInput    = page.locator('#password');
    this.loginButton      = page.locator('#login-button');
    this.errorMessage     = page.locator('[data-test="error"]');
    this.burgerMenu       = page.locator('#react-burger-menu-btn');
    this.logoutButton     = page.locator('#logout_sidebar_link');
  }

  async navigate() {
    await this.page.goto('/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async getErrorMessage() {
    return await this.errorMessage.textContent();
  }

  async logout() {
    await this.burgerMenu.click();
    await this.logoutButton.click();}
}

module.exports =  LoginPage ;