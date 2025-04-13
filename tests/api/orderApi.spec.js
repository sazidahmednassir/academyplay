const { test, expect } = require('@playwright/test');
const { getUserDetails } = require('../../api/ecommerceApi');

test.describe('User API Tests', () => {
    test.only('should return user details', async ({ request }) => {
        // Call the function from ecommerceApi.js
        const response = await getUserDetails(request, 7380156);

        // Validate the response status
        expect(response.status()).toBe(200);

        // Parse the response body
        const responseBody = await response.json();

        // Validate the response body
        expect(responseBody).toHaveProperty('id', 7380156);
        expect(responseBody).toHaveProperty('name'); // Ensure the 'name' property exists
        expect(responseBody).toHaveProperty('email'); // Ensure the 'email' property exists
    });
});