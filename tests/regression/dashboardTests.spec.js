const { test } = require("../fixture/customfixture");
const { expect } = require("@playwright/test");
const loginData = require('../../data/loginData.json');

test.describe('Dashboard Tests', () => {
    test.beforeEach(async ({ actions }) => {
        await actions.login.navigateToLogin(loginData.url);
        await actions.login.validLogin(loginData.userEmail, loginData.password);
    });

    test('Add product to cart', async ({ actions, page }) => {
        await actions.dashboard.searchAndAddToCart(loginData.productName);
        const toast = require('../../pages/DashboardPage').getAddToCartToast(page);
        await expect(toast).toHaveText('Product Added To Cart');
    });
});