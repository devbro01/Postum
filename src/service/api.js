import axios from "axios";
import { getToken } from "../helpers/storage";

axios.defaults.baseURL = "http://localhost:3000/api/";

axios.interceptors.request.use((config) => {
  const TOKEN = getToken("token");
  const authorization = TOKEN ? `Token ${TOKEN}` : "";
  //   console.log(authorization);
  config.headers.Authorization = authorization;
  return config;
});

export default axios;
