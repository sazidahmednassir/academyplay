const LoginPage = require("../pages/LoginPage");
const { expect } = require("@playwright/test");
const BaseActions = require("./BaseActions");

class LoginActions {
  constructor(page) {
    this.page = page;
  }

  async navigateToLogin(url) {
    await BaseActions.navigate(this.page, url);
  }

  async login(username, password) {
    await LoginPage.getUsername(this.page).fill(username);
    await LoginPage.getPassword(this.page).fill(password);
    await LoginPage.getLoginBtn(this.page).click();
  }

  async validLogin(username, password) {
    await this.login(username, password);
    await LoginPage.getHomePageIdentifier(this.page).waitFor();
  }

  async invalidLogin(username, password) {
    await this.login(username, password);
    await LoginPage.getErrorMessage(this.page).waitFor();
  }
}

module.exports = LoginActions;
