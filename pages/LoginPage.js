
class LoginPage {
    constructor(page) {
        this.page = page;
    }

    // Locators as getters
    get username() {
        return this.page.getByPlaceholder('email@example.com');
    }

    get password() {
        return this.page.getByPlaceholder('enter your passsword');
    }

    get loginButton() {
        return this.page.locator('#login');
    }

    get homeButton() {
        return this.page.getByRole('button', { name: 'Home' });
    }

    get errorMessage() {
        return this.page.locator('#toast-container');
    }

    // Actions
    async navigateToLogin(url) {
        await this.page.goto(url);
    }

    async validLogin(email, password) {
        await this.username.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.homeButton.waitFor();
    }

    async invalidLogin(email, password) {
        await this.username.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.errorMessage.waitFor();
    }
}

module.exports = LoginPage;