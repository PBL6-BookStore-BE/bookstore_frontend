import apiClient from "../utils/apiClient"

async function getCartItems() {
    return apiClient.get('/details').then(res => res.data)
};
async function addItemToCart(item) {
    return apiClient.post('/details', item).then((response) => response.data);
};
async function removeItem(idBook) {
    return apiClient.delete('/details', {
        data: {idBook: idBook}
      }).then((response) => response);
};
export {
    getCartItems,
    addItemToCart,
    removeItem,
}