import axios from "axios";

export const BASE_URL = process.env.BE_API;

export const BASE_HEADERS = {
  "content-Type": "application/json",
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

const AxiosClient = axios.create({
  baseURL: BASE_URL,
  headers: BASE_HEADERS,
});

export default AxiosClient;
