// import axios from "axios";
import apiClient from "../utils/apiClient";

const register = (data) => {
    return apiClient.post('/register', data);
};

const login = (data) => {
    return apiClient.post('/login', data);
};

const authAPI = {
    register,
    login,
}

export default authAPI;