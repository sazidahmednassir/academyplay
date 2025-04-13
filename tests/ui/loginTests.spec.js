const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const loginData = require('../../data/loginData.json');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin(loginData.url);
    });

    test('Valid login', async () => {
        await loginPage.validLogin(loginData.userEmail, loginData.password);
        await expect(loginPage.homePageIdentifier).toBeVisible();
    });

    test('Invalid login', async () => {
        await loginPage.invalidLogin(loginData.userEmail, loginData.invalidPassword);
        await expect(loginPage.errorMessage).toHaveText('Incorrect email or password.');
    });
});