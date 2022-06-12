import axios from './axiosInstancePartner';

const createGiftCard = body => {
    return axios.post('/api/v1/partner/gift-card', body);
};

const getListGiftCard = type => {
    return axios.get(`/api/v1/partner/gift-card?type=${type}`);
};

const getCountGiftCards = () => {
    return axios.get(`/api/v1/partner/gift-card/count`);
};

export default {
    createGiftCard,
    getListGiftCard,
    getCountGiftCards
};