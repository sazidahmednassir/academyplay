const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const loginData = require('../../data/loginData.json');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin(loginData.url);
    });

    test('Successful login with valid credentials', async ({ page }) => {
        await loginPage.validLogin(loginData.userEmail, loginData.password);
        await expect(loginPage.errorMessage).toBeVisible();
    });

    test('Failed login with invalid credentials', async ({ page }) => {
        await loginPage.invalidLogin(loginData.invalidEmail, loginData.invalidPassword);
        await expect(loginPage.errorMessage).toBeVisible();
    });
});