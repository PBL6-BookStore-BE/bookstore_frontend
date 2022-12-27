import apiClient from "../utils/apiClient";

async function createOrder(data) {
    return apiClient.post("/order", data).catch((err) => err.response);
};

async function getOrderByUser(id) {
    return apiClient.get(`/order/getOrdersByUser?id=${id}`).then(res => res.data);
};

async function getOrderById(id) {
  return apiClient.get(`/order/${id}`).then(res => res.data);
}

export { createOrder, getOrderByUser, getOrderById }