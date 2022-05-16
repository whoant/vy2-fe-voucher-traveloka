import axios from './axiosInstance';

const getListTypeVouchers = () => {
    return axios.get('/v1/partner/voucher/type-voucher');
};

const createVoucher = body => {
    return axios.post('/v1/partner/voucher', body);
};

const getListVoucher = type => {
    return axios.get(`/v1/partner/voucher?type=${type}`);
};

export default {
    getListTypeVouchers,
    createVoucher,
    getListVoucher
};