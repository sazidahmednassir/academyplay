# AcademyPlay E2E Automation

This repository contains end-to-end (E2E) automated tests for the AcademyPlay web application using [Playwright](https://playwright.dev/).

## Project Structure

```
academyplay/
├── actions/                # Action classes for each page and common actions
│   ├── BaseActions.js      # Common actions (navigation, waits, etc.)
│   ├── DashboardActions.js
│   └── LoginActions.js
├── data/                   # Test data (JSON)
│   ├── loginData.json
│   └── testUsers.json
├── pages/                  # Page objects (locators only)
│   ├── DashboardPage.js
│   └── LoginPage.js
├── tests/
│   ├── fixture/            # Custom Playwright fixtures
│   │   └── customfixture.js
│   ├── ui/                 # UI test specs
│   │   ├── dashboardTests.spec.js
│   │   └── loginTests.spec.js
├── playwright.config.js    # Playwright configuration
├── package.json            # Project metadata and scripts
└── README.md               # Project documentation
```

## Key Concepts

**Page Object Model (POM):**
  - All locators for a page are defined in `/pages/PageName.js` as functions.
  - All actions (navigation, form filling, etc.) are defined in `/actions/PageNameActions.js`.
  - Common actions (navigation, waits, etc.) are in `/actions/BaseActions.js`.

**Custom Fixtures:**
  - The `/tests/fixture/customfixture.js` file injects an `actions` object into each test, providing access to all page actions in a unified way.

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```
3. **Run all tests:**
   ```bash
   npm run fulltest
   ```

## Writing Tests

- Use the injected `actions` object in your tests:
  ```js
  const { test } = require("../fixture/customfixture");
  test('Example', async ({ actions }) => {
    await actions.login.navigateToLogin('https://example.com');
    await actions.login.validLogin('user', 'pass');
    await actions.dashboard.searchAndAddToCart('Product Name');
  });
  ```
- Locators are accessed via the page objects, e.g. `LoginPage.getLoginBtn(page)`.
- Actions are accessed via the actions classes, e.g. `actions.login.validLogin(...)`.
- Common actions are available in `actions/BaseActions.js` for reuse.

## Contributing

- Follow the POM and action separation pattern for all new pages and features.
- Add new test data to `/data/` as needed.
- Keep tests atomic and independent.

## Troubleshooting

- If you see browser errors, run `npx playwright install`.
- If you see module errors, check that all files exist and are named correctly.

## License

MIT
