import React, { useEffect, useState } from 'react';
import '../Home/style.css';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Home = props => {
    const [type, setType] = useState('FLIGHT');
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setType(e.target.value);
    };

    const handleClickFind = () => {
        navigate(`/user/discounts/${type}`, { replace: true });
    };


    return (

        <div className="css-1dbjc4n" style={{ backgroundColor: 'rgba(255,255,255,1.00)' }}>

            <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow"/>
            <div className="css-1dbjc4n r-1awozwy r-1k97etb r-6koalj">
                <div className="css-1dbjc4n r-uia4a0 r-6koalj r-18u37iz r-1777fci r-1ygmrgt r-uwe93p">
                    <div className="css-1dbjc4n" style={{ WebkitFlex: 1, msFlex: '1 1 0%', flex: 1 }}>
                        <div className="css-1dbjc4n" style={{
                            WebkitAlignItems: 'stretch',
                            alignItems: 'stretch',
                            WebkitFlexDirection: 'column',
                            msFlexDirection: 'column',
                            flexDirection: 'column',
                            msFlexAlign: 'stretch',
                            WebkitBoxAlign: 'stretch',
                            WebkitBoxOrient: 'vertical',
                            WebkitBoxDirection: 'normal'
                        }}>
                            <div dir="auto" className="css-901oao r-1sixt3s r-s67bdx r-b88u0q r-lylfki r-fdjqy7"
                                 style={{ color: 'rgba(255,255,255,1.00)' }}>UNDEFINED
                            </div>
                            <div className="css-1dbjc4n" style={{ paddingBottom: '16px' }}/>
                            <h1 aria-level={1} dir="auto" role="heading"
                                className="css-4rbku5 css-901oao r-1sixt3s r-1x35g6 r-b88u0q r-vrz42v r-fdjqy7"
                                style={{ color: 'rgba(255,255,255,1.00)' }}>Giúp bạn khám phá nhiều vùng khác nhau của
                                Nhật Bản và trải nghiệm đi trên tàu Shinkansen với vận tốc 320 km/h.</h1>
                        </div>
                    </div>
                    <div className="css-1dbjc4n" style={{ WebkitFlex: 1, msFlex: '1 1 0%', flex: 1 }}><img
                        importance="low" loading="lazy"
                        src="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/01/1569918230809-65394f808494e91d582219ab22ed74ca.svg?tr=q-75"
                        srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2019/10/01/1569918230809-65394f808494e91d582219ab22ed74ca.svg?tr=q-75 1x, https://ik.imagekit.io/tvlk/image/imageResource/2019/10/01/1569918230809-65394f808494e91d582219ab22ed74ca.svg?tr=dpr-2,q-75 2x, https://ik.imagekit.io/tvlk/image/imageResource/2019/10/01/1569918230809-65394f808494e91d582219ab22ed74ca.svg?tr=dpr-3,q-75 3x"
                        decoding="async" width="100%" style={{ objectFit: 'fill', objectPosition: '50% 50%' }}/></div>
                </div>
            </div>
            <div className="css-1dbjc4n r-42a4sc r-1jgb5lz r-uwe93p" style={{ marginTop: '-48px' }}>
                <div className="css-1dbjc4n r-1kihuf0 r-13awgt0 r-1777fci">
                    <div className="css-1dbjc4n r-1kihuf0 r-13awgt0 r-1777fci">
                        <div className="css-1dbjc4n r-kdyh1x r-da5iq2 r-by8dw1 r-bztko3 r-uwe93p"
                             style={{ backgroundColor: 'rgba(255,255,255,1.00)' }}>
                            <div className="css-1dbjc4n r-6koalj r-eqz5dr r-1h0z5md r-xyw6el r-13qz1uu"
                                 data-testid="train-japan-search-form-pass">
                                <div className="css-1dbjc4n r-6koalj r-eqz5dr r-1h0z5md r-13qz1uu">
                                    <div dir="auto"
                                         className="css-901oao r-1h9nbw7 r-1sixt3s r-1i10wst r-majxgm r-ssbky6 r-fdjqy7">Thẻ
                                        tàu JR Pass
                                    </div>
                                    <div className="css-1dbjc4n r-6koalj r-18u37iz r-1w6e6rj r-1h0z5md r-1s2bzr4">
                                        <div className="css-1dbjc4n r-1awozwy r-6koalj r-18u37iz r-5oul0u"
                                             style={{ marginRight: '20px' }}>
                                            <div className="css-1dbjc4n r-1b7u577"><img
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/43a7a103651140d82520a87ff5e7abf8.svg"
                                                width={16} height={16} style={{ marginRight: '12px' }}/></div>
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-8ay8q1 r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgb(104, 113, 118)' }}>Đi lại nội thành và giữa các
                                                thành phố
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-6koalj r-18u37iz r-5oul0u"
                                             style={{ marginRight: '20px' }}>
                                            <div className="css-1dbjc4n r-1b7u577"><img
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/43a7a103651140d82520a87ff5e7abf8.svg"
                                                width={16} height={16} style={{ marginRight: '12px' }}/></div>
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-8ay8q1 r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgb(104, 113, 118)' }}>Không giới hạn số lần đi trong
                                                nhiều ngày
                                            </div>
                                        </div>
                                        <div className="css-1dbjc4n r-1awozwy r-6koalj r-18u37iz r-5oul0u"
                                             style={{ marginRight: '20px' }}>
                                            <div className="css-1dbjc4n r-1b7u577"><img
                                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/43a7a103651140d82520a87ff5e7abf8.svg"
                                                width={16} height={16} style={{ marginRight: '12px' }}/></div>
                                            <div dir="auto"
                                                 className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-8ay8q1 r-135wba7 r-fdjqy7"
                                                 style={{ color: 'rgb(104, 113, 118)' }}>Sử dụng bất cứ lúc nào trong
                                                ngày
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="css-1dbjc4n r-6koalj r-eqz5dr r-1x0uki6 r-13qz1uu">
                                    <h4 aria-level={4} dir="auto" role="heading"
                                        className="css-4rbku5 css-901oao r-1h9nbw7 r-1sixt3s r-1b43r93 r-b88u0q r-1dpkw9 r-135wba7 r-fdjqy7">Chọn
                                        loại voucher</h4>
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1h0z5md">
                                        <div className="css-1dbjc4n r-13awgt0">

                                            <div className="form-group">
                                                <select className="form-control" onChange={handleOnChange}>
                                                    <option value='FLIGHT'>Chuyến bay</option>
                                                    <option value='HOTEL'>Khách sạn</option>
                                                    <option value='AIRPORT'>Đưa đón sân bay</option>
                                                    <option value='APART'>Biệt thự và căn hộ</option>
                                                    <option value='XPERIENCE'>Tour du lịch(Trải nghiệm)</option>
                                                    <option value='CARRENTAL'>Thuê xe</option>
                                                    <option value='EATS'>Nhà hàng</option>
                                                    <option value='COMBO'>Nhà hàng</option>
                                                </select>
                                            </div>

                                        </div>
                                        <div className="css-1dbjc4n" style={{ paddingRight: '12px' }}/>
                                        <div aria-live="polite" role="button" tabIndex={0}
                                             className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                             style={{ backgroundColor: 'rgb(255, 94, 31)' }}>

                                            <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                                                 style={{ opacity: 1 }}>

                                                <div dir="auto" aria-hidden="true"
                                                     className="css-901oao css-bfa6kz r-jwli3a r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j"
                                                     onClick={handleClickFind}>Tìm
                                                    kiếm
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                style={{ fontFamily: 'MuseoSans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol' }}>
            </div>
            <div data-subtree="newsletter">
                <div className="css-1dbjc4n r-x52lsg r-1wtj0ep r-13qz1uu">
                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1jgb5lz r-1h4fu65 r-uwe93p">
                        <div dir="auto"
                             className="css-901oao r-jwli3a r-13awgt0 r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7">Đăng
                            ký nhận tin khuyến mãi ngay để không bỏ lỡ các ưu đãi hấp dẫn mới nhất từ Traveloka!
                        </div>
                        <form className="r-1awozwy r-6koalj r-13awgt0 r-1wtj0ep r-bnwqim"><img
                            style={{ position: 'absolute', left: '20px', zIndex: 1 }}
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7eb0ddef942f797baed188048d3b44c0.svg"/>
                            <input type="email" placeholder="Điền email của bạn tại đây" name="newsletter-email"
                                   className="r-fmgwjw r-kdyh1x r-1phboty r-rs99b7 r-1sixt3s r-ubezar r-majxgm r-135wba7 r-1fz3rvf r-i0so0h r-edyy15 r-z7j6nc r-13qz1uu"/>
                            <div aria-live="polite" role="button" tabIndex={0}
                                 className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                 style={{ backgroundColor: 'rgba(247,249,250,1.00)', width: '33.33%' }}>
                                <div dir="auto"
                                     className="css-901oao r-1yadl64 r-1vonz36 r-109y4c4 r-1cis278 r-1udh08x r-t60dpp r-u8s1d r-3s2u2q r-92ng3h">
                                    Đăng ký
                                </div>
                                <div className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                                     style={{ opacity: 1 }}>
                                    <div dir="auto" aria-hidden="true"
                                         className="css-901oao css-bfa6kz r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                         style={{ color: 'rgba(1,148,243,1.00)' }}>Đăng ký
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};


export default Home;