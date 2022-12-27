import apiClient from "../utils/apiClient";

async function getUser(email) {
  return apiClient.get(`/user/${email}`).then((res) => res.data);
}

async function getUsernameById(id) {
  return apiClient.get(`/username/${id}`).then((res) => res.data);
}

export { getUser, getUsernameById };
