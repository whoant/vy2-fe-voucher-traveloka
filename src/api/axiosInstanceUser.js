import axios from 'axios';
import Config from "../config";

const instance = axios.create({
    baseURL: Config.VARS.API_ENDPOINT,
});

instance.interceptors.request.use(function (config) {
    const storageUser = localStorage.getItem('user');

    if (storageUser) {
        const { userId, token } = JSON.parse(storageUser);
        config.headers = {
            ...config.headers,
            'user_id': userId,
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
