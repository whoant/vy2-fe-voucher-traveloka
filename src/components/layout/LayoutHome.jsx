import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import '../Discounts/style.css';
import './styleHome.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthApi from '../../api/auth.api';
import { toast } from "react-toastify";

const LayoutHome = props => {
    const navigate = useNavigate();
    const [authParam] = useSearchParams()
    const [visible, setVisible] = useState(false)
    const [visibleRegister, setVisibleRegister] = useState(false)
    const [showDropdown, setShowDropdown] = useState(false)

    const [user, setUser] = useState({});

    const handleClick = () => {
        setVisible(prev => !prev)
        setVisibleRegister(false)
    }
    const handleShowSignup = () => {
        setVisibleRegister(prev => !prev)
    }
    const handleChangeForm = () => {
        setVisible(prev => !prev)
        setVisibleRegister(prev => !prev)
    }

    const handleShowDropdown = () => {
        setShowDropdown(prev => !prev)
    }

    const { register, handleSubmit } = useForm()

    const onSubmit = async (e) => {
        try {

            if (visible) {
                const { data } = await AuthApi.loginUser(e.Account, e.Password);
                toast.success(data.message);
                localStorage.setItem('user', JSON.stringify(data.data));
                setUser(data.data);
            }
        } catch (e) {
            toast.error(e.response.data.message);
        }
    }

    useEffect(() => {
        const loginToken = async () => {
            try {
                const { data } = await AuthApi.loginUserUsingToken(token);
                localStorage.setItem('user', JSON.stringify(data.data));
                setUser(data.data);
            } catch (e) {
                console.log(e);
                toast.error(e.response.data.message);
            }
        }


        const token = authParam.get('token');
        if (!token) return;
        loginToken();

    }, []);

    useEffect(() => {
        const storageUser = localStorage.getItem('user');
        if (!storageUser) {
            navigate('/user/home', { replace: true });
        }
        setUser(JSON.parse(storageUser));
    }, [])


    const handleLogout = () => {
        localStorage.removeItem('user');
        toast.success("Đăng xuất thành công !");
        setUser(null);
    };


    return (
        <div id="__next" data-reactroot>
            <div>
                <div>
                    <div className="page-breadcrumb root"/>
                </div>
            </div>
            <div className="oneColumnWebDesktop">
                <div className="css-1dbjc4n" style={{ height: '100px' }} id="navbar-offset"/>
                <div className="css-1dbjc4n r-1xcajam r-ipm5af r-1uzo8ef r-13qz1uu r-1s3egr7">
                    <div className="css-1dbjc4n r-1awozwy r-kdyh1x r-1yos0t3 r-1jgb5lz r-r0h9e2 r-bztko3 r-13qz1uu"
                         style={{ backgroundColor: 'rgba(255,255,255,1.00)' }}>
                        <div className="css-1dbjc4n r-17gur6a r-1phboty r-1g04hxd r-eujbse r-13qz1uu"/>
                        <div
                            className="css-1dbjc4n r-18u37iz r-1wtj0ep r-wech8c r-mrxtjd r-1guathk r-oyd9sg r-13qz1uu r-184en5c">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                <div aria-label="Hamburger Menu" role="button" tabIndex={0}
                                     className="css-18t94o4 css-1dbjc4n r-1loqt21 r-88pszg r-1otgn73 r-1i6wzkk r-lrvibr"
                                     style={{ WebkitTransitionDuration: '0s', transitionDuration: '0s' }}><img
                                    importance="low" loading="lazy"
                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/8c5c07f3e6c8c7806ef853f5e943e27b.svg"
                                    decoding="async" width={24} height={24}
                                    style={{ marginTop: '-5px', objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                <a href="/vi-vn/" className="css-4rbku5"><img importance="low" loading="lazy"
                                                                              src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg"
                                                                              decoding="async" width={135} height={43}
                                                                              style={{
                                                                                  objectFit: 'fill',
                                                                                  objectPosition: '50% 50%'
                                                                              }}/></a>
                            </div>
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                <div className="css-1dbjc4n r-1awozwy r-6koalj r-1q142lx r-88pszg">
                                    <div className="css-1dbjc4n r-6koalj">
                                        <div style={{ cursor: 'pointer' }}>
                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-5njf8e">
                                                <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg" data-id="IcMobilePhoneDownload">
                                                    <path
                                                        d="M6 15H18M9 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H15M10 18H14"
                                                        stroke="#687176" strokeWidth={2} strokeLinecap="round"
                                                        strokeLinejoin="round"/>
                                                    <path d="M12 2V11M12 11L10 9M12 11L14 9" stroke="#0194F3"
                                                          strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                                <div dir="auto"
                                                     className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                                     style={{
                                                         color: 'rgba(3,18,26,1.00)',
                                                         marginRight: '4px',
                                                         marginLeft: '4px'
                                                     }}>Tải ứng dụng
                                                </div>
                                                <img importance="low" loading="lazy"
                                                     src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg"
                                                     decoding="async" width={12} height={12}
                                                     style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-18u37iz r-q3we1 r-633pao r-u8s1d r-j76wpu"
                                             style={{ left: '0px' }}>
                                            <div
                                                className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                                style={{
                                                    backgroundColor: 'rgba(255,255,255,1.00)',
                                                    WebkitTransform: 'scaleY(0)',
                                                    transform: 'scaleY(0)',
                                                    visibility: 'hidden'
                                                }}>
                                                <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t"
                                                     style={{
                                                         opacity: 0,
                                                         WebkitTransform: 'translateY(16px)',
                                                         transform: 'translateY(16px)'
                                                     }}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-18u37iz" data-testid="quick-links"><a
                                    href="/vi-vn/partnership"
                                    className="css-4rbku5 r-1awozwy r-6koalj r-1q142lx r-88pszg">
                                    <div className="css-1dbjc4n" style={{ marginRight: '8px' }}><img importance="low"
                                                                                                     loading="lazy"
                                                                                                     src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bdab924c2bd3a5fb492022beb158a6ef.svg"
                                                                                                     decoding="async"
                                                                                                     width={16}
                                                                                                     height={16}
                                                                                                     style={{
                                                                                                         objectFit: 'fill',
                                                                                                         objectPosition: '50% 50%'
                                                                                                     }}/></div>
                                    <div dir="auto"
                                         className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                         style={{ color: 'rgba(3,18,26,1.00)' }}>Hợp tác với chúng tôi
                                    </div>
                                </a><a href="/vi-vn/user/saved/list"
                                       className="css-4rbku5 r-1awozwy r-6koalj r-1q142lx r-88pszg">
                                    <div className="css-1dbjc4n" style={{ marginRight: '8px' }}><img importance="low"
                                                                                                     loading="lazy"
                                                                                                     src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c80a2b136969e32f4db682792d1110f6.svg"
                                                                                                     decoding="async"
                                                                                                     width={16}
                                                                                                     height={16}
                                                                                                     style={{
                                                                                                         objectFit: 'fill',
                                                                                                         objectPosition: '50% 50%'
                                                                                                     }}/></div>
                                    <div dir="auto"
                                         className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                         style={{ color: 'rgba(3,18,26,1.00)' }}>Đã Lưu
                                    </div>
                                </a><a href="/vi-vn/retrieve"
                                       className="css-4rbku5 r-1awozwy r-6koalj r-1q142lx r-88pszg">
                                    <div className="css-1dbjc4n" style={{ marginRight: '8px' }}><img importance="low"
                                                                                                     loading="lazy"
                                                                                                     src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b0f87008a7a01d72ffb5eacf06870cba.svg"
                                                                                                     decoding="async"
                                                                                                     width={16}
                                                                                                     height={16}
                                                                                                     style={{
                                                                                                         objectFit: 'fill',
                                                                                                         objectPosition: '50% 50%'
                                                                                                     }}/></div>
                                    <div dir="auto"
                                         className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                         style={{ color: 'rgba(3,18,26,1.00)' }}>Đặt chỗ của tôi
                                    </div>
                                </a></div>
                                <div className="css-1dbjc4n r-88pszg">
                                    <div data-testid="language-currency-dropdown" style={{ cursor: 'pointer' }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-tuq35u"><img importance="low"
                                                                                                       loading="lazy"
                                                                                                       src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/96f8c046147fb32a009ba122f35312aa.svg"
                                                                                                       decoding="async"
                                                                                                       width={16}
                                                                                                       height={16}
                                                                                                       style={{
                                                                                                           border: '2px solid #0264C8',
                                                                                                           borderTopLeftRadius: '9999px',
                                                                                                           borderTopRightRadius: '9999px',
                                                                                                           borderBottomRightRadius: '9999px',
                                                                                                           borderBottomLeftRadius: '9999px',
                                                                                                           marginRight: '8px',
                                                                                                           objectFit: 'none',
                                                                                                           objectPosition: '50% 50%'
                                                                                                       }}/>
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                                 style={{ color: 'rgba(3,18,26,1.00)' }}>VND
                                            </div>
                                            <img importance="low" loading="lazy"
                                                 src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/725bdbbc829236edb107bb810038bd72.svg"
                                                 decoding="async" width={12} height={12} style={{
                                                marginLeft: '4px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-1euycsn r-633pao r-u8s1d r-j76wpu"
                                         style={{ marginTop: '4px', right: '0px' }}>
                                        <div
                                            className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,1.00)',
                                                maxHeight: '75vh',
                                                WebkitTransform: 'scaleY(0)',
                                                transform: 'scaleY(0)',
                                                visibility: 'hidden',
                                                width: 'auto'
                                            }}>
                                            <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t" style={{
                                                opacity: 0,
                                                WebkitTransform: 'translateY(16px)',
                                                transform: 'translateY(16px)'
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                {
                                    !user && (
                                        <div style={{ display: 'inline-flex' }}>
                                            <div
                                                className="css-1dbjc4n r-88pszg"
                                                style={{ marginTop: '6px' }}
                                            >
                                                <div style={{ cursor: 'pointer' }} onClick={handleClick}>
                                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz"><img importance="low"
                                                                                                          loading="lazy"
                                                                                                          src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg"
                                                                                                          decoding="async"
                                                                                                          width={14}
                                                                                                          height={14}
                                                                                                          className="r-tuq35u"
                                                                                                          style={{
                                                                                                              backgroundColor: 'rgba(205,208,209,1.00)',
                                                                                                              borderTopLeftRadius: '9999px',
                                                                                                              borderTopRightRadius: '9999px',
                                                                                                              borderBottomRightRadius: '9999px',
                                                                                                              borderBottomLeftRadius: '9999px',
                                                                                                              objectFit: 'fill',
                                                                                                              objectPosition: '50% 50%'
                                                                                                          }}/>
                                                        <div dir="auto"
                                                             className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                                             style={{
                                                                 color: 'rgba(104,113,118,1.00)',
                                                                 marginRight: '4px',
                                                                 marginLeft: '4px'
                                                             }}>
                                                            Đăng Nhập
                                                        </div>
                                                        <img importance="low" loading="lazy"
                                                             src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg"
                                                             decoding="async" width={12} height={12}
                                                             style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                    </div>
                                                </div>
                                                {/* <div className="css-1dbjc4n r-1euycsn r-633pao r-u8s1d r-j76wpu" style={{ marginTop: '4px', right: '0px' }}>
                                                    <div className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu" style={{ backgroundColor: 'rgba(255,255,255,1.00)', WebkitTransform: 'scaleY(0)', transform: 'scaleY(0)', visibility: 'hidden' }}>
                                                        <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t" style={{ opacity: 0, WebkitTransform: 'translateY(16px)', transform: 'translateY(16px)' }} />
                                                    </div>
                                                </div> */}


                                                {
                                                    visible && (
                                                        <form
                                                            onSubmit={handleSubmit(onSubmit)}
                                                            className="css-1dbjc4n r-1euycsn r-105ug2t r-u8s1d r-zchlnj r-j76wpu"
                                                            style={{ marginTop: '4px' }}>
                                                            <div
                                                                className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    transform: 'scaleY(1)'
                                                                }}>
                                                                <div
                                                                    className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t"
                                                                    style={{ opacity: 1, transform: 'translateY(0px)' }}>
                                                                    <div className="css-1dbjc4n" style={{ minWidth: '300px' }}>
                                                                        <div className="css-1dbjc4n r-nsbfu8">
                                                                            <h3 aria-level={3} dir="auto" role="heading"
                                                                                className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7"
                                                                                style={{ marginBottom: '20px' }}>Đăng nhập tài
                                                                                khoản</h3>
                                                                            <div className="css-1dbjc4n"><label
                                                                                className="css-1dbjc4n r-18u37iz r-oyd9sg"
                                                                                id="loginInput">
                                                                                <div
                                                                                    dir="auto"
                                                                                    className="css-901oao css-cens5h r-cwxd7f r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-fdjqy7 r-13qz1uu"
                                                                                    style={{ WebkitLineClamp: 2 }}
                                                                                >Email hoặc số di động
                                                                                </div>
                                                                            </label>
                                                                                <div
                                                                                    className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15">
                                                                                    <div
                                                                                        className="css-1dbjc4n r-kdyh1x r-rs99b7 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-14qw7yl r-1wyyakw"
                                                                                        style={{
                                                                                            backgroundColor: 'rgb(255, 255, 255)',
                                                                                            borderColor: 'rgb(205, 208, 209)',
                                                                                            transitionDelay: '0ms',
                                                                                            transitionProperty: 'width, height, border-color, border-width, background-color',
                                                                                            transitionTimingFunction: 'ease',
                                                                                            willChange: 'width, height, border-color, border-width, background-color'
                                                                                        }}>
                                                                                    </div>
                                                                                    <input
                                                                                        aria-labelledby="loginInput"
                                                                                        aria-invalid="false"
                                                                                        autoCapitalize="sentences"
                                                                                        autoComplete="on" autoCorrect="on"
                                                                                        dir="auto" spellCheck="true" type="text"
                                                                                        className="css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s"
                                                                                        id="username" {...register('Account')} />
                                                                                </div>
                                                                                <div aria-live="polite"
                                                                                     className="css-1dbjc4n"/>
                                                                            </div>
                                                                            <div className="css-1dbjc4n" style={{
                                                                                marginTop: '20px',
                                                                                marginBottom: '20px'
                                                                            }}>
                                                                                <div className="css-1dbjc4n"><label
                                                                                    className="css-1dbjc4n r-18u37iz r-oyd9sg"
                                                                                    id="loginPassword">
                                                                                    <div
                                                                                        dir="auto"
                                                                                        className="css-901oao css-cens5h r-cwxd7f r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-fdjqy7 r-13qz1uu"
                                                                                        style={{ WebkitLineClamp: 2 }}
                                                                                    >Mật khẩu
                                                                                    </div>
                                                                                </label>
                                                                                    <div
                                                                                        className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15">
                                                                                        <div
                                                                                            className="css-1dbjc4n r-kdyh1x r-rs99b7 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-14qw7yl r-1wyyakw"
                                                                                            style={{
                                                                                                backgroundColor: 'rgb(255, 255, 255)',
                                                                                                borderColor: 'rgb(205, 208, 209)',
                                                                                                transitionDelay: '0ms',
                                                                                                transitionProperty: 'width, height, border-color, border-width, background-color',
                                                                                                transitionTimingFunction: 'ease',
                                                                                                willChange: 'width, height, border-color, border-width, background-color'
                                                                                            }}>
                                                                                        </div>
                                                                                        <input
                                                                                            aria-labelledby="loginPassword"
                                                                                            aria-invalid="false"
                                                                                            autoCapitalize="sentences"
                                                                                            autoComplete="on" autoCorrect="on"
                                                                                            dir="auto" spellCheck="true"
                                                                                            type="password"
                                                                                            className="css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s"
                                                                                            id="password" {...register('Password')} />

                                                                                    </div>
                                                                                    <div aria-live="polite"
                                                                                         className="css-1dbjc4n"/>
                                                                                </div>

                                                                            </div>
                                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                                                                <input
                                                                                    type='submit' value='Đăng nhập'
                                                                                    aria-live="polite" role="button"
                                                                                    tabIndex={0}
                                                                                    className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                                                                    style={{ backgroundColor: 'rgb(255, 94, 31)' }}
                                                                                />

                                                                                <div className="css-1dbjc4n"
                                                                                     style={{ marginLeft: '16px' }}>
                                                                                    <div dir="auto"
                                                                                         className="css-901oao r-cwxd7f r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7">
                                                                                        Bạn chưa có tài khoản?
                                                                                    </div>
                                                                                    <div
                                                                                        className="css-4rbku5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe"
                                                                                        style={{
                                                                                            color: 'rgb(2, 100, 200)',
                                                                                            cursor: 'pointer'
                                                                                        }} onClick={handleChangeForm}>Đăng ký
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    )
                                                }

                                                {
                                                    visibleRegister && (
                                                        <form
                                                            onSubmit={handleSubmit(onSubmit)}
                                                            className="css-1dbjc4n r-1euycsn r-105ug2t r-u8s1d r-zchlnj r-j76wpu"
                                                            style={{ marginTop: '4px' }}>
                                                            <div
                                                                className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                                                style={{
                                                                    backgroundColor: 'rgb(255, 255, 255)',
                                                                    transform: 'scaleY(1)'
                                                                }}>
                                                                <div
                                                                    className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t"
                                                                    style={{ opacity: 1, transform: 'translateY(0px)' }}>
                                                                    <div className="css-1dbjc4n" style={{ minWidth: '300px' }}>
                                                                        <div className="css-1dbjc4n r-nsbfu8">
                                                                            <h3 aria-level={3} dir="auto" role="heading"
                                                                                className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7"
                                                                                style={{ marginBottom: '20px' }}>Tạo tài
                                                                                khoản</h3>
                                                                            <div className="css-1dbjc4n"><label
                                                                                className="css-1dbjc4n r-18u37iz r-oyd9sg"
                                                                                id="loginInput">
                                                                                <div dir="auto"
                                                                                     className="css-901oao css-cens5h r-cwxd7f r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-fdjqy7 r-13qz1uu"
                                                                                     style={{ WebkitLineClamp: 2 }}>Email hoặc
                                                                                    số di động
                                                                                </div>
                                                                            </label>
                                                                                <div
                                                                                    className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15">
                                                                                    <div
                                                                                        className="css-1dbjc4n r-kdyh1x r-rs99b7 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-14qw7yl r-1wyyakw"
                                                                                        style={{
                                                                                            backgroundColor: 'rgb(255, 255, 255)',
                                                                                            borderColor: 'rgb(205, 208, 209)',
                                                                                            transitionDelay: '0ms',
                                                                                            transitionProperty: 'width, height, border-color, border-width, background-color',
                                                                                            transitionTimingFunction: 'ease',
                                                                                            willChange: 'width, height, border-color, border-width, background-color'
                                                                                        }}>
                                                                                    </div>
                                                                                    <input
                                                                                        aria-labelledby="loginInput"
                                                                                        aria-invalid="false"
                                                                                        autoCapitalize="sentences"
                                                                                        autoComplete="on"
                                                                                        autoCorrect="on" dir="auto"
                                                                                        spellCheck="true" type="text"
                                                                                        className="css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s"
                                                                                        id="username"
                                                                                        {...register('RegisterAccount')}
                                                                                    />
                                                                                </div>
                                                                                <div aria-live="polite"
                                                                                     className="css-1dbjc4n"/>
                                                                            </div>
                                                                            <div className="css-1dbjc4n" style={{
                                                                                marginTop: '20px',
                                                                                marginBottom: '20px'
                                                                            }}>
                                                                                <div className="css-1dbjc4n"><label
                                                                                    className="css-1dbjc4n r-18u37iz r-oyd9sg"
                                                                                    id="loginPassword">
                                                                                    <div dir="auto"
                                                                                         className="css-901oao css-cens5h r-cwxd7f r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-fdjqy7 r-13qz1uu"
                                                                                         style={{ WebkitLineClamp: 2 }}>Mật khẩu
                                                                                    </div>
                                                                                </label>
                                                                                    <div
                                                                                        className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15">
                                                                                        <div
                                                                                            className="css-1dbjc4n r-kdyh1x r-rs99b7 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-14qw7yl r-1wyyakw"
                                                                                            style={{
                                                                                                backgroundColor: 'rgb(255, 255, 255)',
                                                                                                borderColor: 'rgb(205, 208, 209)',
                                                                                                transitionDelay: '0ms',
                                                                                                transitionProperty: 'width, height, border-color, border-width, background-color',
                                                                                                transitionTimingFunction: 'ease',
                                                                                                willChange: 'width, height, border-color, border-width, background-color'
                                                                                            }}>
                                                                                        </div>
                                                                                        <input
                                                                                            aria-labelledby="loginPassword"
                                                                                            aria-invalid="false"
                                                                                            autoCapitalize="sentences"
                                                                                            autoComplete="on" autoCorrect="on"
                                                                                            dir="auto" spellCheck="true"
                                                                                            type="password"
                                                                                            className="css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s"
                                                                                            id="password"
                                                                                            {...register('RegisterPassword')}
                                                                                        />

                                                                                    </div>
                                                                                    <div aria-live="polite"
                                                                                         className="css-1dbjc4n"/>
                                                                                </div>

                                                                            </div>
                                                                            <div className="css-1dbjc4n r-1awozwy r-18u37iz">
                                                                                <input
                                                                                    type='submit' value='Đăng ký'
                                                                                    aria-live="polite" role="button"
                                                                                    tabIndex={0}
                                                                                    className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                                                                    style={{ backgroundColor: 'rgb(255, 94, 31)' }}
                                                                                />

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    )
                                                }

                                            </div>
                                            <div onClick={handleShowSignup} aria-live="polite" role="button" tabIndex={0}
                                                 className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1otgn73 r-lrvibr"
                                                 style={{
                                                     backgroundColor: 'rgba(1,148,243,1.00)',
                                                     paddingRight: '16px',
                                                     paddingLeft: '16px',
                                                     paddingTop: '10px',
                                                     paddingBottom: '10px'
                                                 }}>
                                                <div dir="auto"
                                                     className="css-901oao r-1yadl64 r-1vonz36 r-109y4c4 r-1cis278 r-1udh08x r-t60dpp r-u8s1d r-3s2u2q r-92ng3h">
                                                    Đăng ký
                                                </div>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz" style={{
                                                    WebkitFlex: 1,
                                                    msFlex: '1 1 0%',
                                                    flex: 1,
                                                    WebkitJustifyContent: 'center',
                                                    justifyContent: 'center',
                                                    opacity: 1,
                                                    msFlexPack: 'center',
                                                    WebkitBoxPack: 'center'
                                                }}>
                                                    <div dir="auto" aria-hidden="true"
                                                         className="css-901oao css-bfa6kz r-jwli3a r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j">Đăng
                                                        ký
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    user && (
                                        <div className="css-1dbjc4n">
                                            <div data-testid="user-nav-dropdown" style={{ cursor: 'pointer' }}
                                                 onClick={handleShowDropdown}>
                                                <div className="css-1dbjc4n r-1awozwy r-18u37iz"><img importance="low"
                                                                                                      loading="lazy"
                                                                                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/f/f2ccb8732da6068a2f24a40aea2bdcdd.svg"
                                                                                                      decoding="async"
                                                                                                      width={14} height={14}
                                                                                                      className="r-1k97etb r-sdzlij r-tuq35u"
                                                                                                      style={{
                                                                                                          objectFit: 'fill',
                                                                                                          objectPosition: '50% 50%'
                                                                                                      }}/>
                                                    <div dir="auto"
                                                         className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                                         style={{
                                                             color: 'rgb(104, 113, 118)',
                                                             marginRight: '4px',
                                                             marginLeft: '4px'
                                                         }}>
                                                        {user.email}
                                                    </div>
                                                    <img importance="low" loading="lazy"
                                                         src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/393c6a1dee81cd3dc84df59672d43edb.svg"
                                                         decoding="async" width={12} height={12}
                                                         style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                </div>
                                            </div>
                                            {
                                                showDropdown && (
                                                    <div className="css-1dbjc4n r-1euycsn r-105ug2t r-u8s1d r-zchlnj r-j76wpu"
                                                         style={{ marginTop: '4px' }}>
                                                        <div
                                                            className="css-1dbjc4n r-14lw9ot r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                                            style={{ transform: 'scaleY(1)' }}>
                                                            <div
                                                                className="css-1dbjc4n r-6dt33c r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t"
                                                                style={{ transform: 'translateY(0px)' }}>
                                                                <div className="css-1dbjc4n r-1f1sjgu"
                                                                     style={{ minWidth: '260px' }}>
                                                                    <h3 aria-level={3} dir="auto" role="heading"
                                                                        className="css-4rbku5 css-901oao r-cwxd7f r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-5oul0u r-ymttw5 r-fdjqy7">Tài
                                                                        khoản</h3><a href="/vi-vn/user/account"
                                                                                     className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"><img
                                                                    importance="low" loading="lazy"
                                                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/57c03b6d35b76670f2d701310cc18b26.svg"
                                                                    decoding="async" className="r-88pszg"
                                                                    style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                                    <div dir="auto"
                                                                         className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Chỉnh
                                                                        sửa hồ sơ
                                                                    </div>
                                                                </a><a href="/vi-vn/user/travelerspicker"
                                                                       className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"><img
                                                                    importance="low" loading="lazy"
                                                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/db4d9fb6f6a0aa3c5e8827a8b0f1e28e.svg"
                                                                    decoding="async" className="r-88pszg"
                                                                    style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                                    <div dir="auto"
                                                                         className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Passenger
                                                                         Quick
                                                                         Pick
                                                                    </div>
                                                                </a><Link to="/user/bonus"
                                                                       className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"><img
                                                                    importance="low" loading="lazy"
                                                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/d/db4d9fb6f6a0aa3c5e8827a8b0f1e28e.svg"
                                                                    decoding="async" className="r-88pszg"
                                                                    style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                                    <div dir="auto"
                                                                         className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Đổi điểm thưởng
                                                                    </div>
                                                                </Link><a href="/vi-vn/user/account?menu=newsletter"
                                                                       className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"><img
                                                                    importance="low" loading="lazy"
                                                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/cef9778118bdd85e1062cdd0b6196362.svg"
                                                                    decoding="async" className="r-88pszg"
                                                                    style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                                    <div dir="auto"
                                                                         className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Khuyến
                                                                        mãi
                                                                    </div>
                                                                </a><a href="#"
                                                                       className="css-4rbku5 r-1awozwy r-6koalj r-ymttw5 r-5njf8e"><img
                                                                    importance="low" loading="lazy"
                                                                    src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/6464840154eb190d10525ea67e77648a.svg"
                                                                    decoding="async" className="r-88pszg"
                                                                    style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                                                    <div dir="auto" onClick={handleLogout}
                                                                         className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Đăng
                                                                        xuất
                                                                    </div>
                                                                </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="css-1dbjc4n r-1awozwy r-13qz1uu"
                             style={{ backgroundColor: 'rgba(242,243,243,1.00)' }} data-testid="product-nav">
                            <div className="css-1dbjc4n r-18u37iz r-tzz3ar r-wech8c r-mrxtjd r-1guathk r-13qz1uu">
                                <div className="css-1dbjc4n" style={{ marginRight: '40px' }}>
                                    <div style={{ cursor: 'pointer' }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-5njf8e">
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgba(3,18,26,1.00)' }}>Vận chuyển
                                            </div>
                                            <img importance="low" loading="lazy"
                                                 src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
                                                 decoding="async" width={12} height={12} style={{
                                                marginLeft: '4px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-18u37iz r-q3we1 r-633pao r-u8s1d r-j76wpu"
                                         style={{ left: '0px' }}>
                                        <div
                                            className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,1.00)',
                                                WebkitTransform: 'scaleY(0)',
                                                transform: 'scaleY(0)',
                                                visibility: 'hidden'
                                            }}>
                                            <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t" style={{
                                                opacity: 0,
                                                WebkitTransform: 'translateY(16px)',
                                                transform: 'translateY(16px)'
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n" style={{ marginRight: '40px' }}>
                                    <div style={{ cursor: 'pointer' }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-5njf8e">
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgba(3,18,26,1.00)' }}>Chỗ ở
                                            </div>
                                            <img importance="low" loading="lazy"
                                                 src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
                                                 decoding="async" width={12} height={12} style={{
                                                marginLeft: '4px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-18u37iz r-q3we1 r-633pao r-u8s1d r-j76wpu"
                                         style={{ left: '0px' }}>
                                        <div
                                            className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,1.00)',
                                                WebkitTransform: 'scaleY(0)',
                                                transform: 'scaleY(0)',
                                                visibility: 'hidden'
                                            }}>
                                            <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t" style={{
                                                opacity: 0,
                                                WebkitTransform: 'translateY(16px)',
                                                transform: 'translateY(16px)'
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n" style={{ marginRight: '40px' }}>
                                    <div style={{ cursor: 'pointer' }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-5njf8e">
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgba(3,18,26,1.00)' }}>Hoạt động và giải trí
                                            </div>
                                            <img importance="low" loading="lazy"
                                                 src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
                                                 decoding="async" width={12} height={12} style={{
                                                marginLeft: '4px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-18u37iz r-q3we1 r-633pao r-u8s1d r-j76wpu"
                                         style={{ left: '0px' }}>
                                        <div
                                            className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,1.00)',
                                                WebkitTransform: 'scaleY(0)',
                                                transform: 'scaleY(0)',
                                                visibility: 'hidden'
                                            }}>
                                            <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t" style={{
                                                opacity: 0,
                                                WebkitTransform: 'translateY(16px)',
                                                transform: 'translateY(16px)'
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n" style={{ marginRight: '40px' }}>
                                    <div style={{ cursor: 'pointer' }}>
                                        <div className="css-1dbjc4n r-1awozwy r-18u37iz r-5njf8e">
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgba(3,18,26,1.00)' }}>Sản phẩm bổ sung
                                            </div>
                                            <img importance="low" loading="lazy"
                                                 src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/5d2a9385fea80cf4f2cac027d7805ad3.svg"
                                                 decoding="async" width={12} height={12} style={{
                                                marginLeft: '4px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>
                                        </div>
                                    </div>
                                    <div className="css-1dbjc4n r-1euycsn r-q3we1 r-633pao r-u8s1d r-j76wpu"
                                         style={{ right: '0px' }}>
                                        <div
                                            className="css-1dbjc4n r-kdyh1x r-b4qz5r r-1udh08x r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t r-13qz1uu"
                                            style={{
                                                backgroundColor: 'rgba(255,255,255,1.00)',
                                                WebkitTransform: 'scaleY(0)',
                                                transform: 'scaleY(0)',
                                                visibility: 'hidden'
                                            }}>
                                            <div className="css-1dbjc4n r-4k2abt r-1ep47lj r-1clhhh9 r-1ftll1t" style={{
                                                opacity: 0,
                                                WebkitTransform: 'translateY(16px)',
                                                transform: 'translateY(16px)'
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow"/>

                <Outlet/>

                <div data-subtree="footer">
                    <div className="css-1dbjc4n r-1ylt3d3 r-1udh08x r-1jnzvcq r-bqdgw5 r-13qz1uu">
                        <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-169s5xo r-1jgb5lz r-nib5yn">
                            <div className="css-1dbjc4n r-16y2uox r-1e081e0 r-b8tw3c"
                                 style={{ marginTop: '-32px', minWidth: '278px' }}><img importance="low" loading="lazy"
                                                                                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/86afd0785f5505dd6d584971576dea27.svg"
                                                                                        decoding="async" width={200}
                                                                                        height={90} style={{
                                objectFit: 'fill',
                                objectPosition: '50% 50%'
                            }}/>
                                <div className="css-1dbjc4n">
                                    <div className="css-1dbjc4n r-18u37iz r-1w6e6rj"><img importance="low"
                                                                                          loading="lazy"
                                                                                          src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75"
                                                                                          srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=h-35,q-75 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=dpr-2,h-35,q-75 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150198216-822560165b4cfa5d5ac17a7987028b03.svg?tr=dpr-3,h-35,q-75 3x"
                                                                                          decoding="async" height={35}
                                                                                          className="r-88pszg" style={{
                                        marginBottom: '16px',
                                        objectFit: 'fill',
                                        objectPosition: '50% 50%'
                                    }}/><img importance="low" loading="lazy"
                                             src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75"
                                             srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=h-35,q-75 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=dpr-2,h-35,q-75 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150313470-072f6bdc02c0b73fcf791aa2b2264fbd.svg?tr=dpr-3,h-35,q-75 3x"
                                             decoding="async" height={35} className="r-88pszg" style={{
                                        marginBottom: '16px',
                                        objectFit: 'fill',
                                        objectPosition: '50% 50%'
                                    }}/><img importance="low" loading="lazy"
                                             src="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75"
                                             srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75 1x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=dpr-2,h-35,q-75 2x, https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=dpr-3,h-35,q-75 3x"
                                             decoding="async" height={35} className="r-88pszg" style={{
                                        marginBottom: '16px',
                                        objectFit: 'fill',
                                        objectPosition: '50% 50%'
                                    }}/><img importance="low" loading="lazy"
                                             src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75"
                                             srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=dpr-2,h-35,q-75 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=dpr-3,h-35,q-75 3x"
                                             decoding="async" height={35} className="r-88pszg" style={{
                                        marginBottom: '16px',
                                        objectFit: 'fill',
                                        objectPosition: '50% 50%'
                                    }}/><img importance="low" loading="lazy"
                                             src="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75"
                                             srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=h-35,q-75 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=dpr-2,h-35,q-75 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620639321776-9db1bf99b0d4ff46db160c7a02b0536f.png?tr=dpr-3,h-35,q-75 3x"
                                             decoding="async" height={35} className="r-88pszg" style={{
                                        marginBottom: '16px',
                                        objectFit: 'fill',
                                        objectPosition: '50% 50%'
                                    }}/><a href="http://online.gov.vn/HomePage/AppDisplay.aspx?DocId=738"
                                           rel="nofollow noopener noreferrer" target="_blank"
                                           className="css-4rbku5"><img importance="low" loading="lazy"
                                                                       src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                                                                       srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=dpr-2,q-75,w-100 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=dpr-3,q-75,w-100 3x"
                                                                       decoding="async" width={100} className="r-88pszg"
                                                                       style={{
                                                                           marginBottom: '16px',
                                                                           objectFit: 'fill',
                                                                           objectPosition: '50% 50%'
                                                                       }}/></a><a
                                        href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=58668"
                                        rel="nofollow noopener noreferrer" target="_blank" className="css-4rbku5"><img
                                        importance="low" loading="lazy"
                                        src="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100"
                                        srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=q-75,w-100 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=dpr-2,q-75,w-100 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/09/23/1569229181629-eeb038ad844874f951326d0a8534bf48.png?tr=dpr-3,q-75,w-100 3x"
                                        decoding="async" width={100} className="r-88pszg"
                                        style={{ marginBottom: '16px', objectFit: 'fill', objectPosition: '50% 50%' }}/></a>
                                    </div>
                                    <div className="css-1dbjc4n r-18u37iz"><a href="/vi-vn/partnership"
                                                                              className="css-4rbku5">
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-11mg6pl r-1dzdj1l r-d045u9 r-18u37iz r-nsbfu8">
                                            <img importance="low" loading="lazy"
                                                 src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9edc2cd0b5368b5196829820521b2d6b.svg"
                                                 decoding="async" width={36} className="r-88pszg"
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/>
                                            <div dir="auto"
                                                 className="css-901oao r-jwli3a r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Hợp
                                                tác với Traveloka
                                            </div>
                                        </div>
                                    </a></div>
                                    <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-13qz1uu"
                                         style={{ marginTop: '16px' }}>
                                        <div className="css-1dbjc4n r-6gpygo r-13qz1uu">
                                            <h3 aria-level={3} dir="auto" role="heading"
                                                className="css-4rbku5 css-901oao r-jwli3a r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7">Đối
                                                tác thanh toán</h3>
                                        </div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339548088-c536c896b175cb38f99a31f5dd2a989a.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339578215-99466ea3d377ada2939bf2117df21b11.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339591544-eae8263f3d4021c8951e271bdddf60a0.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339553631-9cebb9f6a7a3b0e427b7a2d9da2fd8c0.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339557703-5697f31b3e12a942eabc0f613bff8fb9.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339567663-c7c5e25757f0d69375aa6de6ad57958f.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617778793443-2f6b7f7d0668a4a815962032dd8233a2.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781232473-330f36367feac4132c5af1b3df54d3f1.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339648624-307f4a5f54e873a6c9f272673f193062.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339663962-2037bef017440339eda165360a5e239f.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/05/20/1558339666745-2be0cc98504595cda91d0a2a5342a20b.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781263528-febaf8c61699a7df689ffbd475abd453.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781253184-2ef4eea06e759ab13bc30fac59e715ad.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781255909-7089100c4728a3cc8d3c1822b2bd2e8c.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781266437-5664d3dc5b8c688df3f83af1af5d3f6d.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781273499-667dfd2c1d23335dac1689bdd1b3e187.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781273499-667dfd2c1d23335dac1689bdd1b3e187.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781273499-667dfd2c1d23335dac1689bdd1b3e187.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781273499-667dfd2c1d23335dac1689bdd1b3e187.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781276401-2ee9043e84971e72e57a1b29db6f3062.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781279477-47b2a8f5bcf3cba19f9e518cf59627a7.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781279477-47b2a8f5bcf3cba19f9e518cf59627a7.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781279477-47b2a8f5bcf3cba19f9e518cf59627a7.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781279477-47b2a8f5bcf3cba19f9e518cf59627a7.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781283882-14484fab2f2d958a1b2917dd450d31ac.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781286986-ff7313b2a822727d5940a3ed2793bad5.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781286986-ff7313b2a822727d5940a3ed2793bad5.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781286986-ff7313b2a822727d5940a3ed2793bad5.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781286986-ff7313b2a822727d5940a3ed2793bad5.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781292722-ef87e62f12612a44e0f1640d4b646033.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781292722-ef87e62f12612a44e0f1640d4b646033.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781292722-ef87e62f12612a44e0f1640d4b646033.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781292722-ef87e62f12612a44e0f1640d4b646033.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                        <div
                                            className="css-1dbjc4n r-1awozwy r-14lw9ot r-kdyh1x r-h3s6tt r-1777fci r-5oul0u r-1kb76zh r-7a29px">
                                            <img importance="low" loading="lazy"
                                                 src="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=q-75,w-51"
                                                 srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=q-75,w-51 1x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=dpr-2,q-75,w-51 2x, https://ik.imagekit.io/tvlk/image/imageResource/2021/04/07/1617781296885-a206730836975c02b8ce75a732f00caf.png?tr=dpr-3,q-75,w-51 3x"
                                                 decoding="async" width={51}
                                                 style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="css-1dbjc4n r-18u37iz r-16y2uox r-1e081e0" style={{ width: '66.667%' }}>
                                <div className="css-1dbjc4n r-16y2uox r-1e081e0 r-b8tw3c">
                                    <div className="css-1dbjc4n r-zd98yo">
                                        <div className="css-1dbjc4n r-6gpygo r-13qz1uu">
                                            <h3 aria-level={3} dir="auto" role="heading"
                                                className="css-4rbku5 css-901oao r-jwli3a r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7">Về
                                                Traveloka
                                            </h3>
                                        </div>
                                        <ul className="css-4rbku5 r-1ebb2ja r-t60dpp">
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/howto"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Cách
                                                đặt chỗ</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/contactus"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Liên
                                                hệ chúng tôi</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/faq"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Trợ
                                                giúp</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/careers"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Tuyển
                                                dụng</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/about-us"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Về
                                                chúng tôi</a></li>
                                        </ul>
                                    </div>
                                    <div className="css-1dbjc4n r-zd98yo">
                                        <div className="css-1dbjc4n r-6gpygo r-13qz1uu">
                                            <h3 aria-level={3} dir="auto" role="heading"
                                                className="css-4rbku5 css-901oao r-jwli3a r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7">Theo
                                                dõi chúng tôi trên</h3>
                                        </div>
                                        <ul className="css-4rbku5 r-1ebb2ja r-t60dpp">
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="https://twitter.com/TravelokaVN"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv"><img
                                                importance="low" loading="lazy"
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b5c0e050176153ba05ed1d0ece95c9e2.svg"
                                                decoding="async" style={{
                                                WebkitFilter: 'grayscale(1)',
                                                filter: 'grayscale(1)',
                                                marginRight: '12px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>Twitter</a>
                                            </li>
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="https://www.facebook.com/TravelokaVN"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv"><img
                                                importance="low" loading="lazy"
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/50752125b5a9ef77932df8daaa59c28f.svg"
                                                decoding="async" style={{
                                                WebkitFilter: 'grayscale(1)',
                                                filter: 'grayscale(1)',
                                                marginRight: '12px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>Facebook</a>
                                            </li>
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="https://instagram.com/traveloka"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv"><img
                                                importance="low" loading="lazy"
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/a7a24301c32be8a7d95db652945f3249.svg"
                                                decoding="async" style={{
                                                WebkitFilter: 'grayscale(1)',
                                                filter: 'grayscale(1)',
                                                marginRight: '12px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>Instagram</a>
                                            </li>
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="https://www.youtube.com/Traveloka"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv"><img
                                                importance="low" loading="lazy"
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/6/61ba544b71eed91c568993099757aa34.svg"
                                                decoding="async" style={{
                                                WebkitFilter: 'grayscale(1)',
                                                filter: 'grayscale(1)',
                                                marginRight: '12px',
                                                objectFit: 'fill',
                                                objectPosition: '50% 50%'
                                            }}/>Youtube</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-16y2uox r-1e081e0 r-b8tw3c">
                                    <div className="css-1dbjc4n r-6gpygo r-13qz1uu">
                                        <h3 aria-level={3} dir="auto" role="heading"
                                            className="css-4rbku5 css-901oao r-jwli3a r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7">Sản
                                            phẩm</h3>
                                    </div>
                                    <ul className="css-4rbku5 r-1ebb2ja r-t60dpp">
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/flight" id="flight-search"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Vé
                                            máy bay</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/hotel" id="hotel-search"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Khách
                                            sạn</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/train/japan.jp"
                                                                               id="train-global-search"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">JR
                                            Pass</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/packages" id="tomang-search"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Combo
                                            tiết kiệm</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/activities"
                                                                               id="activity-search"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Xperience</a>
                                        </li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/car-rental"
                                                                               id="vehicle-rental-search"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Car
                                            Rental</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/accomodation/villa"
                                                                               id="alternative-villa"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Biệt
                                            thự</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/accomodation/apartment"
                                                                               id="alternative-apartment"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Căn
                                            hộ</a></li>
                                        <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/airport-transfer"
                                                                               id="airport-transport"
                                                                               className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Đưa
                                            đón sân bay</a></li>
                                    </ul>
                                </div>
                                <div className="css-1dbjc4n r-16y2uox r-1e081e0 r-b8tw3c">
                                    <div className="css-1dbjc4n r-zd98yo">
                                        <div className="css-1dbjc4n r-6gpygo r-13qz1uu">
                                            <h3 aria-level={3} dir="auto" role="heading"
                                                className="css-4rbku5 css-901oao r-jwli3a r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7">Khác</h3>
                                        </div>
                                        <ul className="css-4rbku5 r-1ebb2ja r-t60dpp">
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/affiliate"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Traveloka
                                                Affiliate</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="https://www.traveloka.com/vi-vn/explore" target="_blank"
                                                rel="noopener noreferrer"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Traveloka
                                                Blog</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/privacypolicy"
                                                                                   target="_blank" rel="nofollow"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Chính
                                                sách quyền riêng tư</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="/vi-vn/termsandconditions"
                                                                                   target="_blank" rel="nofollow"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Điều
                                                khoản &amp; Điều kiện</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="/vi-vn/Regulation-for-Operation-VN" rel="nofollow" target="_blank"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Quy
                                                chế hoạt động</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a
                                                href="https://tera.traveloka.com/vi-vn/v2/landing" rel="nofollow"
                                                className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Đăng
                                                ký nơi nghỉ của bạn</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="https://axes.traveloka.com"
                                                                                   target="_blank"
                                                                                   rel="nofollow noopener noreferrer"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Đăng
                                                ký doanh nghiệp hoạt động du lịch của bạn</a></li>
                                            <li className="css-4rbku5 r-6gpygo"><a href="https://press.traveloka.com"
                                                                                   target="_blank"
                                                                                   rel="nofollow noopener noreferrer"
                                                                                   className="css-4rbku5 r-1awozwy r-nk2qpz r-xoduu5 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-nzoivv">Khu
                                                vực báo chí</a></li>
                                        </ul>
                                    </div>
                                    <div className="css-1dbjc4n r-zd98yo">
                                        <div className="css-1dbjc4n r-6gpygo r-13qz1uu">
                                            <h3 aria-level={3} dir="auto" role="heading"
                                                className="css-4rbku5 css-901oao r-jwli3a r-1sixt3s r-ubezar r-b88u0q r-rjixqe r-fdjqy7">Tải
                                                ứng dụng Traveloka</h3>
                                        </div>
                                        <a href="https://app.adjust.com/ie88tj"
                                           className="css-4rbku5 r-6gpygo r-nzoivv"><img importance="low" loading="lazy"
                                                                                         src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/c/c90225c14bd4b3b9dc24f1eef7ce6260.svg"
                                                                                         decoding="async" style={{
                                            objectFit: 'fill',
                                            objectPosition: '50% 50%'
                                        }}/></a><a href="https://app.adjust.com/hc9if0" className="css-4rbku5 r-nzoivv"><img
                                        importance="low" loading="lazy"
                                        src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/710ae7ca20e600c9c96165ea400042c1.svg"
                                        decoding="async" style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="r-1l31rp8 r-rs99b7 r-1peese0 r-1mnahxq r-ypl6q8 r-13qz1uu"/>
                        <div dir="auto"
                             className="css-901oao r-jwli3a r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-6gpygo r-1hy1u7s r-nzoivv r-q4m81j">
                            Công ty TNHH Traveloka Việt Nam. Mã số DN: 0313581779. Tòa nhà An Phú, 117-119 Lý Chính
                            Thắng, P. 7, Q. 3, TPHCM
                        </div>
                        <div dir="auto"
                             className="css-901oao r-jwli3a r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-1hy1u7s r-q4m81j">Copyright
                            © 2022 Traveloka
                        </div>
                    </div>
                </div>
                <div className="mcp-placeholder hiddenContent" data-name="hiddenContent">
                    <div>
                        <div className="component-overflow v3Helpers" data-component="true" data-name="V3Helpers"
                             data-id={1469082790701}>
                        </div>
                        <div className="component-overflow styles" data-component="true"
                             data-name="LandingPromotion_Style" data-id={1474619476157}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default LayoutHome;