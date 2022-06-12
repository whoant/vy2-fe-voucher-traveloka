import axios from './axiosInstanceUser';

const getGiftCardCanExchange = (type) => {
    return axios.get(`/api/v1/user/gift-card/can-exchange?typeVoucher=${type}`);
};

const postGiftCardExchange = (giftCardCode) => {
    return axios.post(`/api/v1/user/gift-card/exchange`, {
        giftCardCode
    });
};

const getPointAvailable = () => {
    return axios.get(`/api/v1/user/gift-card/point`);
};

export default {
    getGiftCardCanExchange,
    postGiftCardExchange,
    getPointAvailable
};