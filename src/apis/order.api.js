import apiClient from "../utils/apiClient";

async function createOrder(data) {
    return apiClient.post("/order", data).catch((err) => err.response);
};

export { createOrder }