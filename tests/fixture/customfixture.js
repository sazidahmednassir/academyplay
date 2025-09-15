const { test: base } = require("@playwright/test");
const DashboardActions = require("../../actions/DashboardActions");
const LoginActions = require("../../actions/LoginActions");

exports.test = base.extend({
  actions: async ({ page }, use) => {
    const actions = {
      dashboard: new DashboardActions(page),
      login: new LoginActions(page),
    };
    await use(actions);
  },
});
