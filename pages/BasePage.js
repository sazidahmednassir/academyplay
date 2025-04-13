class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async waitForElement(locator) {
        await locator.waitFor();
    }

    async getElementText(locator) {
        return await locator.textContent();
    }
}

module.exports = { BasePage };