import apiClient from "../utils/apiClient"

async function getPublishers(){
    return apiClient.get('/publishers').then(res => res.data)
};

export {
    getPublishers,
}