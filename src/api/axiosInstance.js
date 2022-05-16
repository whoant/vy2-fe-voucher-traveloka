import axios from 'axios';
import env from "react-dotenv";

const instance = axios.create({
    baseURL: env.END_POINT,
});

instance.interceptors.request.use(function (config) {
    const storageUser = localStorage.getItem('user');
    if (storageUser) {
        const { token } = JSON.parse(storageUser);
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
