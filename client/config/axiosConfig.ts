import axios, { AxiosRequestConfig, AxiosResponse } from "axios";


const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = "https://localhost:7034/api";
axiosInstance.interceptors.request.use(function (config: AxiosRequestConfig) {

    config.headers!["Authorization"] = "Bearer " + localStorage.getItem("auth-token");

    return config;
});

axios.interceptors.response.use(function (response: AxiosResponse) {

    if (response.status === 401) {
        localStorage.removeItem("auth-token");
    }

    return response;
});

export default axiosInstance;
