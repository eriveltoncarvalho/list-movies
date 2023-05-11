import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tools.texoit.com/backend-java/api',
});

export default api;
