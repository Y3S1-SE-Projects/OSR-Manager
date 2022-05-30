import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://osr-manager.herokuapp.com/api/",
});
