import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://45.76.145.238:2020/api/',
});

instance.interceptors.request.use(function (config) {

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
