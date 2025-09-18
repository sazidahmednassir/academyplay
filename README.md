# AcademyPlay E2E Automation

This repository contains end-to-end (E2E) automated tests for the AcademyPlay web application using [Playwright](https://playwright.dev/).

## Project Structure

```
academyplay/
├── data/                   # Test data (JSON)
│   ├── loginData.json
│   └── testUsers.json
├── pages/                  # Page Objects (locators and actions)
│   ├── BasePage.js        # Common functionality for all pages
│   ├── DashboardPage.js   # Dashboard page locators and actions
│   └── LoginPage.js       # Login page locators and actions
├── tests/
│   ├── ui/                # UI tests
│   │   ├── dashboardTests.spec.js
│   │   └── loginTests.spec.js
├── playwright.config.js    # Playwright configuration
├── package.json           # Project metadata and scripts
└── README.md             # Project documentation
```

## Key Concepts

**Page Object Model (POM):**
- Each page is represented by a class in `/pages/`
- Page classes encapsulate both locators (as getters) and actions (as methods)
- Locators are defined using Playwright's built-in locator methods
- Actions combine locators with interaction methods (click, fill, etc.)

Example Page Object:
```javascript
class LoginPage {
    constructor(page) {
        this.page = page;
    }

    // Locators as getters
    get username() {
        return this.page.getByPlaceholder('email@example.com');
    }

    get loginButton() {
        return this.page.locator('#login');
    }

    // Actions as methods
    async validLogin(email, password) {
        await this.username.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
        await this.homeButton.waitFor();
    }
}
```

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
   npx playwright test
   ```

## Writing Tests

Tests use page objects directly:
```javascript
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');
const loginData = require('../../data/loginData.json');

test.describe('Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateToLogin(loginData.url);
    });

    test('Successful login', async ({ page }) => {
        await loginPage.validLogin(loginData.userEmail, loginData.password);
        await expect(loginPage.errorMessage).toBeVisible();
    });
});
```

Key Points:
- Page objects are instantiated with the Playwright `page` object
- Use page object methods for actions
- Use page object locators for assertions
- Test data is stored in JSON files under `/data/`

## Best Practices

1. **Page Objects:**
   - Keep locators private using getters
   - Name actions clearly and descriptively
   - Handle waits within page object methods
   - One class per page/component

2. **Tests:**
   - Keep tests atomic and independent
   - Use descriptive test names
   - Initialize page objects in `beforeEach`
   - Use test data from JSON files

3. **General:**
   - Keep test data separate in JSON files
   - Use meaningful variable names
   - Add comments for complex logic
   - Handle timeouts and waits appropriately

## Contributing

1. Follow the class-based Page Object Model pattern
2. Add new test data to `/data/` as JSON files
3. Keep tests independent and atomic
4. Add appropriate assertions and error handling
5. Update documentation when adding new features

## Troubleshooting

- If you see browser errors, run `npx playwright install`
- For timeout errors, check network conditions and wait statements
- For selector errors, verify locators in page objects
- Run tests with `--debug` flag for detailed logs


