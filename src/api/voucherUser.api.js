import axios from './axiosInstance';

const getVouchersCanBuy = (type) => {
    return axios.get(`/api/v1/user/voucher/can-buy?typeVoucher=${type}`);
};

export default {
    getVouchersCanBuy
};