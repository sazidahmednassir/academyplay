
const { test } = require("../fixture/customfixture");
const { expect } = require("@playwright/test");
const loginData = require('../../data/loginData.json');
const LoginPage = require('../../pages/LoginPage');

test.describe('Login Tests', () => {
    test.beforeEach(async ({ actions }) => {
        await actions.login.navigateToLogin(loginData.url);
    });


    test('Valid login', async ({ actions, page }) => {
        await actions.login.validLogin(loginData.userEmail, loginData.password);
        const homeBtn = LoginPage.getHomePageIdentifier(page);
        await expect(homeBtn).toBeVisible();
    });

    test('Invalid login', async ({ actions, page }) => {
        await actions.login.invalidLogin(loginData.userEmail, loginData.invalidPassword);
        const errorMsg = LoginPage.getErrorMessage(page);
        await expect(errorMsg).toHaveText('Incorrect email or password.');
    });
});