import apiClient from "../utils/apiClient";

async function getReviewOfBook(id) {
  return apiClient.get(`/review/${id}`).then((res) => res.data);
}

async function createReview(data) {
  return apiClient.post(`/reviews`, data);
}

export { getReviewOfBook, createReview };
