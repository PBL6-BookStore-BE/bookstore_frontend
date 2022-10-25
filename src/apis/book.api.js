import apiClient from "../utils/apiClient"

async function getListBook() {
    return apiClient.get('/book/list').then(res => res.data)
};

async function getListBookTop10() {
    return apiClient.get('/book/toprating').then(res => res.data)
};

export {
    getListBook,
    getListBookTop10
}