const { request } = require('@playwright/test');

class EcommerceApi {
    constructor(baseURL = 'https://rahulshettyacademy.com/api/ecom') {
        this.baseURL = baseURL;
    }

    async createApiContext() {
        return await request.newContext();
    }

    async login(apiContext, userEmail, userPassword) {
        const response = await apiContext.post(`${this.baseURL}/auth/login`, {
            data: { userEmail, userPassword },
        });
        const responseBody = await response.json();
        return responseBody.token;
    }

    async createOrder(apiContext, token, orderPayload) {
        const response = await apiContext.post(`${this.baseURL}/order/create-order`, {
            data: orderPayload,
            headers: { authorization: token },
        });
        return await response.json();
    }

    async getOrders(apiContext, token) {
        const response = await apiContext.get(`${this.baseURL}/order/get-orders-for-customer`, {
            headers: { authorization: token },
        });
        return await response.json();
    }

    async getUserDetails(request, userId) {
        const response = await request.get(`https://gorest.co.in/public/v2/users/${userId}`);
        return response;
    }
}

module.exports = { EcommerceApi };