import axios from "axios";

async function getListBook() {
    return axios.get('https://localhost:6002/api/Book').then(res => res.data)
};

export {
    getListBook,
}
// https://1b28-2405-4802-6078-2f90-38e4-6252-2a0b-7db8.ap.ngrok.io
//https://localhost:6002/api/Book
//https://localhost:7075/gateway/api/Book