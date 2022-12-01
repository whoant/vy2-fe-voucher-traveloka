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
            LOGIN: `https://profile.vinhphancommunity.xyz/Login?redirect=${window.env.REACT_APP_URL}/user/home`,
            REGISTER: 'https://profile.vinhphancommunity.xyz/signup'
        },
        PARTNER: {
            LOGIN: `https://profile.vinhphancommunity.xyz/Login?redirect=${window.env.REACT_APP_URL}/partner/auth`,
            REGISTER: 'https://profile.vinhphancommunity.xyz/signup'
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