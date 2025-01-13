import axios from "axios";

const BASE_URL = process.env.BE_API;

const AxiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-Type": "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
});

export default AxiosClient;
