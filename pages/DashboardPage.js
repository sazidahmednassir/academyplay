
class DashboardPage {
    constructor(page) {
        this.page = page;
    }

    // Locators as getters
    get products() {
        return this.page.locator('div.card-body');
    }

    get addToCartToast() {
        return this.page.locator('#toast-container');
    }

    get cartLink() {
        return this.page.locator("[routerlink='/dashboard/cart']");
    }

    get checkoutButton() {
        return this.page.getByRole('button', { name: 'Checkout' });
    }

    getProductName(index) {
        return this.products.nth(index).locator('h5 b');
    }

    getAddToCartButton(index) {
        return this.products.nth(index).locator('button:has-text("Add To Cart")');
    }

    // Actions
    async searchAndAddToCart(productName) {
        await this.products.first().waitFor();
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            const productText = await this.getProductName(i).textContent();
            if (productText.trim() === productName) {
                await this.getAddToCartButton(i).click();
                break;
            }
        }
        await this.addToCartToast.waitFor();
    }

    async navigateToCart() {
        await this.cartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = DashboardPage;