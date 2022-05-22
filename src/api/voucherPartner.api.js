import axios from './axiosInstance';

const getListTypeVouchers = () => {
    return axios.get('/api/v1/partner/voucher/type-voucher');
};

const createVoucher = body => {
    return axios.post('/api/v1/partner/voucher', body);
};

const getListVoucher = type => {
    return axios.get(`/api/v1/partner/voucher?type=${type}`);
};

const getDetailVoucher = (type, code) => {
    return axios.get(`/api/v1/partner/voucher/detail?type=${type}&code=${code}`);
};

const getAnalyzeVoucher = (type, code) => {
    return axios.get(`/api/v1/partner/voucher/analyze?type=${type}&code=${code}`);
};

const getCountVoucher = () => {
    return axios.get(`/api/v1/partner/voucher/count`);
};

export default {
    getListTypeVouchers,
    createVoucher,
    getListVoucher,
    getDetailVoucher,
    getAnalyzeVoucher,
    getCountVoucher
};