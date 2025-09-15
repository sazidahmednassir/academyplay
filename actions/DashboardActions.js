const DashboardPage = require("../pages/DashboardPage");
const { expect } = require("@playwright/test");

class DashboardActions {
  constructor(page) {
    this.page = page;
  }

  async searchAndAddToCart(productName) {
    const products = DashboardPage.getProducts(this.page);
    await products.first().waitFor();
    const count = await products.count();
    for (let i = 0; i < count; i++) {
      const productText = await DashboardPage.getProductName(this.page, i).textContent();
      if (productText.trim() === productName) {
        await DashboardPage.getProductAddToCartBtn(this.page, i).click();
        break;
      }
    }
    await DashboardPage.getAddToCartToast(this.page).waitFor();
  }

  async navigateToCart() {
    await DashboardPage.getCartLink(this.page).click();
  }

  async proceedToCheckout() {
    await DashboardPage.getCheckoutBtn(this.page).click();
  }
}

module.exports = DashboardActions;
