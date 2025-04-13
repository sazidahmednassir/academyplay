const { BasePage } = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.username = page.getByPlaceholder('email@example.com');
        this.password = page.getByPlaceholder('enter your passsword');
        this.loginBtn = page.locator('#login');
        this.homePageIdentifier = page.getByRole('button', { name: 'Home' });
        this.errorMessage = page.locator('#toast-container');
    }

    async navigateToLogin(url) {
        await this.navigate(url);
    }

    async login(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginBtn.click();
    }

    async validLogin(username, password) {
        await this.login(username, password);
        await this.homePageIdentifier.waitFor();
    }

    async invalidLogin(username, password) {
        await this.login(username, password);
        await this.errorMessage.waitFor();
    }
}

module.exports = { LoginPage };