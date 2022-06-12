import axiosPartner from './axiosInstancePartner';
import axiosUser from './axiosInstanceUser';

const registerPartner = body => {
    return axiosPartner.post('/api/v1/partner/auth/register', body);
};

const loginPartner = body => {
    return axiosPartner.post('/api/v1/partner/auth/login', body);
};

const loginPartnerUsingToken = (token, appId) => {
    return axiosPartner.get(`/api/v1/partner/auth/login-token?token=${token}&appId=${appId}`);
};

const registerUser = (email, password) => {
    return axiosUser.post('/api/v1/user/auth/register', { email, password });
};

const loginUser = (email, password) => {
    return axiosUser.post('/api/v1/user/auth/login', {
        email,
        password
    });
};

const loginUserUsingToken = (token, appId) => {
    return axiosUser.get(`/api/v1/user/auth/login-token?token=${token}&appId=${appId}`);
};

export default {
    registerPartner,
    loginPartner,
    loginPartnerUsingToken,
    registerUser,
    loginUser,
    loginUserUsingToken
};