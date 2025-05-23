const { test, expect } = require('@playwright/test');
const { EcommerceApi } = require('../../api/ecommerceApi');

test.describe('User API Tests', () => {
    test('should return user details', async ({ request }) => {
        // Call the function from ecommerceApi.js
        const ecommerceApi= new EcommerceApi ();
        const response = await ecommerceApi.getUserDetails(request, 7826552);

        // Validate the response status
        expect(response.status()).toBe(200);

        // Parse the response body
        const responseBody = await response.json();

        // Validate the response body
        expect(responseBody).toHaveProperty('id');
        expect(responseBody).toHaveProperty('name'); // Ensure the 'name' property exists
        expect(responseBody).toHaveProperty('email'); // Ensure the 'email' property exists
        expect(responseBody.name).toBe('Rev. Amaresh Pothuvaal') //Ensure the name is correct
    });
});