import axios from "axios";

async function getListBook() {
    return axios.get('https://localhost:6002/api/Book').then(res => res.data)
};

export {
    getListBook,
}