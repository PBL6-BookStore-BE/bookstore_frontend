import apiClient from "../utils/apiClient"

async function getCartItems() {
    return apiClient.get('/details').then(res => res.data)
};

export {
    getCartItems
}