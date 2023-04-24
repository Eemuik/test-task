import axios from "axios";
import store from "../redux";
import { AppState } from "../redux/types";

const api = () => {
  const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_API_URL });

  axiosInstance.interceptors.request.use((config) => {
    const {
      userReducer: { token },
    }: AppState = store.getState();

    config.headers.Authorization = token;

    return config;
  });

  return axiosInstance;
};

export default api();
