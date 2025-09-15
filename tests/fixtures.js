// Custom Playwright fixture example
const { test: base, expect } = require('@playwright/test');
const DashboardActions = require('../actions/DashboardActions');
const LoginActions = require('../actions/LoginActions');

exports.test = base.extend({
  dashboardActions: async ({ page }, use) => {
    await use(new DashboardActions(page));
  },
  loginActions: async ({ page }, use) => {
    await use(new LoginActions(page));
  },
});
exports.expect = expect;
