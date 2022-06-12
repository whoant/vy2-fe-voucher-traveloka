import axiosPartner from './axiosInstancePartner';

const getListTypeVouchers = () => {
    return axiosPartner.get('/api/v1/partner/voucher/type-voucher');
};

const createVoucher = body => {
    return axiosPartner.post('/api/v1/partner/voucher', body);
};

const getListVoucher = type => {
    return axiosPartner.get(`/api/v1/partner/voucher?type=${type}`);
};

const getDetailVoucher = (type, code) => {
    return axiosPartner.get(`/api/v1/partner/voucher/detail?type=${type}&code=${code}`);
};

const getAnalyzeVoucher = (type, code) => {
    return axiosPartner.get(`/api/v1/partner/voucher/analyze?type=${type}&code=${code}`);
};

const getCountVoucher = () => {
    return axiosPartner.get(`/api/v1/partner/voucher/count`);
};

export default {
    getListTypeVouchers,
    createVoucher,
    getListVoucher,
    getDetailVoucher,
    getAnalyzeVoucher,
    getCountVoucher
};