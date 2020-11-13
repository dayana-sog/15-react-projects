import axios from 'axios';

const api = axios.create({
  baseURL: "https://course-api.com/"
});

export default api;