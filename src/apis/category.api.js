import apiClient from "../utils/apiClient"

async function getCategories(){
    return apiClient.get('/categories').then(res => res.data)
};

export {
    getCategories,
}