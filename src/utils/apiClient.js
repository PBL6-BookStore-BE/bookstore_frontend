import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7075/gateway",
  // headers: {
  //   "content-type": "application/json",
  // },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || "";
  if(token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
 
  return config;
});

//validate response
apiClient.interceptors.response.use((response) => {
  return response;
}, (error) => {
      if (error.response.status === 401) {
          localStorage.clear();
          return window.location.href = '/login'
      }
  return Promise.reject(error);
});

export default apiClient;
