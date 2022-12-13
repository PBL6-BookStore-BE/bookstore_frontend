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
async function updateItemtoCart(item) {
    return  apiClient.put('/details', {
        idBook: item.idBook,
        quantity: item.quantity,
    }).then((response) => response);
}
async function deleteAllCart() {
    return apiClient.delete("/cart/all").then((response) => response);
}
export {
    getCartItems,
    addItemToCart,
    removeItem,
    updateItemtoCart,
    deleteAllCart
}