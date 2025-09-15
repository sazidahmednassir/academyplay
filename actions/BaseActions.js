const BaseActions = {
  navigate: async (page, url) => {
    await page.goto(url);
  },
  waitForElement: async (locator) => {
    await locator.waitFor();
  },
  getElementText: async (locator) => {
    return await locator.textContent();
  },
};

module.exports = BaseActions;
