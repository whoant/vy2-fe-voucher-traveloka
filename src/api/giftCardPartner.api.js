import axios from './axiosInstancePartner';
import axiosPartner from "./axiosInstancePartner";

const createGiftCard = body => {
    return axios.post('/api/v1/partner/gift-card', body);
};

const getListGiftCard = type => {
    return axios.get(`/api/v1/partner/gift-card?type=${type}`);
};

const getCountGiftCards = () => {
    return axios.get(`/api/v1/partner/gift-card/count`);
};

const getDetailGiftCard = (type, code) => {
    return axiosPartner.get(`/api/v1/partner/gift-card/detail?type=${type}&code=${code}`);
};

const getAnalyzeGiftCard = (type, code) => {
    return axiosPartner.get(`/api/v1/partner/gift-card/analyze?type=${type}&code=${code}`);
};

export default {
    createGiftCard,
    getListGiftCard,
    getCountGiftCards,
    getDetailGiftCard,
    getAnalyzeGiftCard
};