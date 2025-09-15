
const DashboardPage = {
  getProducts: (page) => page.locator('div.card-body'),
  getAddToCartBtn: (page) => page.getByRole('button', { name: 'Add to Cart' }),
  getAddToCartToast: (page) => page.locator('#toast-container'),
  getCartLink: (page) => page.locator("[routerlink='/dashboard/cart']"),
  getCheckoutBtn: (page) => page.getByRole('button', { name: 'Checkout' }),
  getProductName: (page, i) => DashboardPage.getProducts(page).nth(i).locator('h5 b'),
  getProductAddToCartBtn: (page, i) => DashboardPage.getProducts(page).nth(i).locator('button:has-text("Add To Cart")'),
};

module.exports = DashboardPage;