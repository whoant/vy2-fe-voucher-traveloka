import axios from './axiosInstance';

const registerPartner = body => {
    return axios.post('/v1/partner/auth/register', body);
};

const login = body => {
    return axios.post('/v1/partner/auth/login', body);
};

export default {
    registerPartner,
    login
};