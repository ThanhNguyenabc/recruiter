import axios from "axios";

const BASE_URL = "http://31.220.31.119:1337/api";

const AxiosClient = axios.create({
  baseURL: BASE_URL,
  headers: { "content-Type": "application/json" },
});

export default AxiosClient;
