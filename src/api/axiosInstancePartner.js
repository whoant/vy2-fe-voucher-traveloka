import axios from 'axios';
import Config from "../config";

const instance = axios.create({
    baseURL: Config.VARS.API_ENDPOINT,
});

instance.interceptors.request.use(function (config) {
    const storagePartner = localStorage.getItem('partner');

    if (storagePartner) {
        const { token } = JSON.parse(storagePartner);
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        };
    }

    return config;
}, function (error) {

    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {

    return response;
}, function (error) {

    return Promise.reject(error);
});

export default instance;
