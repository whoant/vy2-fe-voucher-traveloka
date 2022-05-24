import axios from './axiosInstance';

const getVouchersCanBuy = (type) => {
    return axios.get(`/api/v1/user/voucher/can-buy?typeVoucher=${type}`);
};

const postPreBuyVoucher = (body, headers) => {
    return axios({ method: 'post', url: '/api/v1/user/voucher/pre-buy', data: body, headers });
};

const postCheckBuyVoucher = (transactionId) => {
    return axios({ method: 'post', url: '/api/v1/user/voucher/check-buy', data: { transactionId } });
};

const postBuyVoucher = (transactionId) => {
    return axios({ method: 'post', url: '/api/v1/user/voucher/buy', data: { transactionId } });
};

const postApproveBuyVoucher = (paymentId, transactionId) => {
    return axios({ method: 'post', url: '/api/v1/webhook/paypal-success', data: { paymentId, transactionId } });
};

export default {
    getVouchersCanBuy,
    postPreBuyVoucher,
    postCheckBuyVoucher,
    postBuyVoucher,
    postApproveBuyVoucher
};