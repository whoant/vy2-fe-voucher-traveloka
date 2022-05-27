import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_END_POINT,
});

instance.interceptors.request.use(function (config) {
    const storagePartner = localStorage.getItem('partner');
    const storageUser = localStorage.getItem('user');

    if (storageUser) {
        const { userId } = JSON.parse(storageUser);
        config.headers = {
            ...config.headers,
            'user_id': userId,
        };
    }
    
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
