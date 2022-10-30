import apiClient from "../utils/apiClient"
async function getListBook() {
    return apiClient.get('/books').then(res => res.data)
};

async function getListBookTop10() {
    return apiClient.get('/topbook').then(res => res.data)
};

async function getBookById(id) {
    return apiClient.get(`/book/${id}`).then(res => res.data)
};

export {
    getListBook,
    getListBookTop10,
    getBookById
}