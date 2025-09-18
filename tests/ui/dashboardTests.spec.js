const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const DashboardPage = require('../../pages/DashboardPage');
const loginData = require('../../data/loginData.json');

test.describe('Dashboard Tests', () => {
    let loginPage;
    let dashboardPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        await loginPage.navigateToLogin(loginData.url);
        await loginPage.validLogin(loginData.userEmail, loginData.password);
    });

    test('Add product to cart', async ({ page }) => {
        await dashboardPage.searchAndAddToCart(loginData.productName);
        await expect(dashboardPage.addToCartToast).toBeVisible();
    });
});