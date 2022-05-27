import axios from './axiosInstance';

const registerPartner = body => {
    return axios.post('/api/v1/partner/auth/register', body);
};

const loginPartner = body => {
    return axios.post('/api/v1/partner/auth/login', body);
};

const registerUser = (email, password) => {
    return axios.post('/api/v1/user/auth/register', { email, password });
};

const loginUser = (email, password) => {
    return axios.post('/api/v1/user/auth/login', {
        email,
        password
    });
};

export default {
    registerPartner,
    loginPartner,
    registerUser,
    loginUser
};