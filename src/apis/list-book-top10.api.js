import axios from "axios";

async function getListBookTop10() {
    return axios.get('https://localhost:6002/api/Book/Top10Rating').then(res => res.data)
};

export {
    getListBookTop10,
}
// https://1b28-2405-4802-6078-2f90-38e4-6252-2a0b-7db8.ap.ngrok.io
//https://localhost:6002/api/Book/Top10Rating
//https://localhost:7075/gateway/api/Book