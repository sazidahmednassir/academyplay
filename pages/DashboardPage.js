const { BasePage } = require('./BasePage');

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        this.products = page.locator('div.card-body');
        this.addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
        this.addToCartToast = page.locator('#toast-container');
        this.cartLink = page.locator("[routerlink='/dashboard/cart']");
        this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
    }

    async searchAndAddToCart(productName) {
        // Wait for the products to be visible
        await this.products.first().waitFor();
    
        const count = await this.products.count();
        for (let i = 0; i < count; i++) {
            // Get the product name text
            const productText = await this.products.nth(i).locator('h5 b').textContent();
            console.log(`Found product: ${productText.trim()}`);
    
            // Check if the product name matches
            if (productText.trim() === productName) {
                console.log(`Adding product to cart: ${productText.trim()}`);
                // Click the "Add to Cart" button for the matching product
                await this.products.nth(i).locator('button:has-text("Add To Cart")').click();
                break;
            }
        }
    
        // Wait for the toast notification to confirm the product was added
        await this.addToCartToast.waitFor();
    }

    async navigateToCart() {
        await this.cartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutBtn.click();
    }
}

module.exports = { DashboardPage };