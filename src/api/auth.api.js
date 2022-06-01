import axios from './axiosInstance';

const registerPartner = body => {
    return axios.post('/api/v1/partner/auth/register', body);
};

const loginPartner = body => {
    return axios.post('/api/v1/partner/auth/login', body);
};

const loginPartnerUsingToken = token => {
    return axios.get(`/api/v1/partner/auth/login-token?token=${token}`);
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

const loginUserUsingToken = (token) => {
    return axios.get(`/api/v1/user/auth/login-token?token=${token}`);
};

export default {
    registerPartner,
    loginPartner,
    loginPartnerUsingToken,
    registerUser,
    loginUser,
    loginUserUsingToken
};