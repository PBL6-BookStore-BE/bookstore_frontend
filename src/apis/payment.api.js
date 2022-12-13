import apiClient from "../utils/apiClient";

async function getMethodPayment() {
    return apiClient.get("/payment").then(res => res.data);
};

export { getMethodPayment }