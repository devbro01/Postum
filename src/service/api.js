import axios from 'axios';
import { getItem } from '../helpers/storage';

axios.defaults.baseURL = 'http://localhost:3000/api/';

// auto detact user token from local storage
axios.interceptors.request.use((config) => {
  const TOKEN = getItem('token');
  const authorization = TOKEN ? `Token ${TOKEN}` : '';
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
