import apiClient from "../utils/apiClient";

async function createOrder(data) {
    return apiClient.post("/order", data).then(res => res.data);
};

export { createOrder }