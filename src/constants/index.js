import Config from "../config";

const END_POINT_APP = {
    VY01: {
        USER: {
            LOGIN: '',
            REGISTER: ''
        },
        PARTNER: {
            LOGIN: '',
            REGISTER: ''
        }
    },
    VY02: {
        USER: {
            LOGIN: '',
            REGISTER: ''
        },
        PARTNER: {
            LOGIN: '',
            REGISTER: ''
        }
    },
    VY03: {
        USER: {
            LOGIN: `http://94.100.26.30:3020/Login?redirect=${Config.VARS.APP_URL}/user/home`,
            REGISTER: 'http://94.100.26.30:3020/signup'
        },
        PARTNER: {
            LOGIN: `http://94.100.26.30:3020/Login?redirect=${Config.VARS.APP_URL}/partner/auth`,
            REGISTER: 'http://94.100.26.30:3020/signup'
        }
    },
    VY04: {
        USER: {
            LOGIN: 'https://gxy-vy-04-g01.vercel.app/login',
            REGISTER: 'https://gxy-vy-04-g01.vercel.app/Register'
        },
        PARTNER: {
            LOGIN: 'https://gxy-vy-04-g01.vercel.app/Partner/Login',
            REGISTER: 'https://gxy-vy-04-g01.vercel.app/Partner/Register'
        }
    },
};

export default { END_POINT_APP };