
const LoginPage = {
  getUsername: (page) => page.getByPlaceholder('email@example.com'),
  getPassword: (page) => page.getByPlaceholder('enter your passsword'),
  getLoginBtn: (page) => page.locator('#login'),
  getHomePageIdentifier: (page) => page.getByRole('button', { name: 'Home' }),
  getErrorMessage: (page) => page.locator('#toast-container'),
};

module.exports = LoginPage;