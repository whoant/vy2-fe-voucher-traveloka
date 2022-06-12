import axiosUser from './axiosInstanceUser';

const getVouchersCanBuy = (type) => {
    return axiosUser.get(`/api/v1/user/voucher/can-buy?typeVoucher=${type}`);
};

const postPreBuyVoucher = (body, headers) => {
    return axiosUser({ method: 'post', url: '/api/v1/user/voucher/pre-buy', data: body, headers });
};

const postCheckBuyVoucher = (transactionId) => {
    return axiosUser({ method: 'post', url: '/api/v1/user/voucher/check-buy', data: { transactionId } });
};

const postBuyVoucher = (transactionId) => {
    return axiosUser({ method: 'post', url: '/api/v1/user/voucher/buy', data: { transactionId } });
};

const postApproveBuyVoucher = (paymentId, transactionId) => {
    return axiosUser({ method: 'post', url: '/api/v1/webhook/paypal-success', data: { paymentId, transactionId } });
};

export default {
    getVouchersCanBuy,
    postPreBuyVoucher,
    postCheckBuyVoucher,
    postBuyVoucher,
    postApproveBuyVoucher
};