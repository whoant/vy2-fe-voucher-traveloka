import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import { useNavigate, useParams } from "react-router-dom";
import VoucherUserApi from "../../api/voucherUser.api";
import { toast } from "react-toastify";
import { useCountdown } from "../../hooks/useCountdown";
import PaypalCheckoutButton from "../PaypalCheckoutButton";

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

const Payment = () => {
    const dateTimeAfter = useRef(new Date().getTime() + FIVE_MINUTES_IN_MS)
    const { transactionId } = useParams();
    const navigate = useNavigate();
    const [paymentInfo, setPaymentInfo] = useState({ amount: 0, title: '', description: '', email: '' });

    const [days, hours, minutes, seconds] = useCountdown(dateTimeAfter.current);


    if (hours + minutes + seconds <= 0) {
        toast.error("Giao dịch đã hết hạn !");
        navigate(-1);
    }

    useEffect(() => {
        const checkBuyVoucher = async () => {
            try {
                const { data } = await VoucherUserApi.postCheckBuyVoucher(transactionId);
                setPaymentInfo(data.data);
            } catch (e) {
                toast.error(e.response.data.message);
                navigate(-1);
                console.error(e);
            }
        };

        checkBuyVoucher();
    }, []);

    const numberFormat = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);
    }

    const addLeadingZeros = (num, totalLength = 2) => {
        return String(num).padStart(totalLength, '0');
    }

    return (
        <div style={{
            backgroundColor: '#e6eaed',
            width: '100%'
        }}>
            <header className='nav-bar'>
                <div className="nav-bar-item">
                    <svg width={135} height={43} viewBox="0 0 135 43" className="p6l56" fill="none"
                         stroke="currentColor" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g id="Train_Booking" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <g id="Train_Booking-Form_Login-Success" transform="translate(-174.000000, -10.000000)">
                                <g id="Logo-/-Normal-Text-Copy-2" transform="translate(174.000000, 10.000000)">
                                    <g id="Icon-Blue-Copy" transform="translate(106.348506, 0.000000)">
                                        <path
                                            d="M15.8750688,7.50608477 C21.1573073,4.14730475 27.7886168,3.50239999 27.7886168,3.50239999 C27.7886168,3.50239999 20.7528955,11.4997096 19.0326867,15.1945655 C18.5015045,16.8063672 19.6135162,18.1175255 19.6135162,18.1175255 C19.6135162,18.1175255 16.5318653,14.6660391 15.8750688,7.50608477 Z"
                                            id="Path-7" fill="#1BA0E2" className/>
                                        <path
                                            d="M18.162138,6.24397491 C17.3878953,6.61481372 16.6181339,7.03359719 15.8750688,7.50608477 C16.2091491,11.1480034 17.1706021,13.8304452 18.0347649,15.5872293 C18.4974096,16.4047306 18.9374198,17.0887931 19.2687154,17.5775849 C19.1008028,17.2517084 18.9278703,16.7972915 18.8946484,16.2674161 C18.4465048,14.5531906 18.0359014,11.5237307 18.162138,6.24397491 Z"
                                            id="Path-7-Copy" fill="#0D7FCC"/>
                                        <path
                                            d="M11.1392242,10.6306432 C11.1392242,10.6306432 10.7916211,9.40930137 10.6718684,9.05703715 C10.3493019,8.10817672 10.0190832,7.14347468 10.0190831,5.49697918 C10.0190831,3.2392226 13.8646282,0.830360977 16.2083894,0.0738834971 C15.5726728,8.29080802 16.4960847,10.8058271 17.3467186,13.537055 C19.3596742,20.2576903 23.9571046,21.2294722 24.4111443,21.6850544 C23.2389565,21.4317473 23.9079977,21.9785645 23.9079977,21.9785645 C23.9079977,21.9785645 22.0366239,20.676552 18.2686172,19.6106221 C14.5006105,18.5446922 11.5607948,18.381561 9.76233612,17.3600837 C8.37731138,16.3196574 8.33271646,15.4721062 7.67451502,14.9032056 C5.51226604,13.0343176 0.0684652899,12.2483736 0.0684652899,12.2483736 L4.75199664,13.0114999 C4.75199664,13.0114999 5.39587343,13.0114997 6.15578398,12.7385777 C6.31936247,12.7171833 6.84077993,12.1226001 7.97022445,12.498467 C8.43508849,12.6515676 8.30440909,12.8180273 9.63493268,13.1922403 C11.3211407,13.6664904 11.1392242,10.6306432 11.1392242,10.6306432 Z"
                                            id="Path-6" fill="#1BA0E2" className/>
                                    </g>
                                    <path
                                        d="M1.87385717,24.8120388 C1.87385717,29.6167116 5.53639618,30.1853119 7.38186157,30.1853119 C7.94969708,30.1853119 8.34718193,30.1284519 8.34718193,30.1284519 L8.34718193,27.6834705 C8.34718193,27.6834705 8.09165595,27.7403305 7.6941711,27.7403305 C6.64367541,27.7403305 4.62785937,27.3707403 4.62785937,24.4993086 L4.62785937,18.1025548 L8.09165595,18.1025548 L8.09165595,15.8850135 L4.62785937,15.8850135 L4.62785937,11.734231 L1.95903249,11.734231 L1.95903249,15.8850135 L0,15.8850135 L0,18.1025548 L1.87385717,18.1025548 L1.87385717,24.8120388 Z M10.8843731,30.0715919 L13.6383753,30.0715919 L13.6383753,24.1865784 C13.6383753,23.3052479 13.7235506,22.4239173 13.9790766,21.5994469 C14.6320874,19.4671956 16.2504186,18.2162749 18.0107087,18.2162749 C18.4365853,18.2162749 18.8056784,18.3015649 18.8056784,18.3015649 L18.8056784,15.5722833 C18.8056784,15.5722833 18.4649771,15.5154233 18.095884,15.5154233 C15.8813255,15.5154233 14.2062108,17.1643642 13.5532,19.2681855 L13.4964164,19.2681855 C13.4964164,19.2681855 13.5532,18.7848752 13.5532,18.1878448 L13.5532,15.6860034 L10.8843731,15.6860034 L10.8843731,30.0715919 Z M19.7300691,26.0345295 C19.7300691,28.9059612 22.14337,30.4127521 24.6134544,30.4127521 C28.0488592,30.4127521 29.212922,27.5697504 29.212922,27.5697504 L29.2697056,27.5697504 C29.2697056,27.5697504 29.212922,28.0530607 29.212922,28.7069511 L29.212922,30.0715919 L31.7681818,30.0715919 L31.7681818,20.9739865 C31.7681818,17.3349443 29.723974,15.3448432 26.0898267,15.3448432 C22.7963808,15.3448432 20.7237812,17.0506442 20.7237812,17.0506442 L21.8594522,19.0691754 C21.8594522,19.0691754 23.6481341,17.6761045 25.8626925,17.6761045 C27.6797662,17.6761045 29.0141796,18.472145 29.0141796,20.8318364 L29.0141796,21.0877066 L28.3895605,21.0877066 C25.9762596,21.0877066 19.7300691,21.2867167 19.7300691,26.0345295 L19.7300691,26.0345295 Z M22.5124631,25.8923794 C22.5124631,23.3052479 26.2601774,23.1630978 28.332777,23.1630978 L29.0425714,23.1630978 L29.0425714,23.6179781 C29.0425714,25.7502293 27.5378073,28.1952108 25.2096817,28.1952108 C23.4209999,28.1952108 22.5124631,27.0580101 22.5124631,25.8923794 L22.5124631,25.8923794 Z M38.7344899,30.0715919 L41.9143687,30.0715919 L47.2236307,15.6860034 L44.3276696,15.6860034 L40.8354813,25.4090691 C40.5515635,26.2051096 40.3528211,27.3707403 40.3244293,27.3707403 L40.2676458,27.3707403 C40.239254,27.3707403 40.0689034,26.2051096 39.7849856,25.4090691 L36.2927972,15.6860034 L33.3684444,15.6860034 L38.7344899,30.0715919 Z M47.949279,22.8787976 C47.949279,27.1433001 51.0439825,30.4127521 55.5582748,30.4127521 C58.9936796,30.4127521 61.1230627,28.3657909 61.1230627,28.3657909 L59.9873917,26.3472597 C59.9873917,26.3472597 58.1987099,28.0246307 55.7286254,28.0246307 C53.1733656,28.0246307 50.9304154,26.4325497 50.7884565,23.2768179 L61.2650216,23.2768179 C61.2650216,23.2768179 61.3501969,22.4523474 61.3501969,22.0827571 C61.3501969,18.3584249 59.192422,15.3448432 55.1323981,15.3448432 C51.0439825,15.3448432 47.949279,18.3015649 47.949279,22.8787976 L47.949279,22.8787976 Z M50.8736318,21.2014266 C51.2711167,18.8417352 52.9746232,17.5339545 55.0756146,17.5339545 C56.92108,17.5339545 58.4542358,18.7280152 58.5394112,21.2014266 L50.8736318,21.2014266 Z M63.8929188,26.1482496 C63.8929188,29.7588617 66.1926526,30.1853119 67.7542002,30.1853119 C68.2368604,30.1853119 68.662737,30.1284519 68.662737,30.1284519 L68.662737,27.6834705 C68.662737,27.6834705 68.4356028,27.7119005 68.1800769,27.7119005 C67.3283236,27.7119005 66.646921,27.3991703 66.646921,25.6649393 L66.646921,10 L63.8929188,10 L63.8929188,26.1482496 Z M69.8994372,22.8503676 C69.8994372,27.2285902 73.3632338,30.4127521 77.6503919,30.4127521 C81.93755,30.4127521 85.4013465,27.2285902 85.4013465,22.8503676 C85.4013465,18.500575 81.93755,15.3448432 77.6503919,15.3448432 C73.3632338,15.3448432 69.8994372,18.500575 69.8994372,22.8503676 L69.8994372,22.8503676 Z M72.710223,22.8503676 C72.710223,19.8652158 74.9531732,17.7329646 77.6503919,17.7329646 C80.3760023,17.7329646 82.5905608,19.8652158 82.5905608,22.8503676 C82.5905608,25.8639494 80.3760023,28.0246307 77.6503919,28.0246307 C74.9531732,28.0246307 72.710223,25.8639494 72.710223,22.8503676 L72.710223,22.8503676 Z M88.1088884,30.0715919 L90.8628906,30.0715919 L90.8628906,23.3052479 L92.9354902,23.3052479 L97.25104,30.0715919 L100.459311,30.0715919 L95.1500486,22.0827571 L95.1500486,22.0258971 L99.9198669,15.6860034 L96.7967716,15.6860034 L92.8787066,20.9739865 L90.8628906,20.9739865 L90.8628906,10 L88.1088884,10 L88.1088884,30.0715919 Z M101.241742,26.0345295 C101.241742,28.9059612 103.655043,30.4127521 106.125128,30.4127521 C109.560533,30.4127521 110.724595,27.5697504 110.724595,27.5697504 L110.781379,27.5697504 C110.781379,27.5697504 110.724595,28.0530607 110.724595,28.7069511 L110.724595,30.0715919 L113.279855,30.0715919 L113.279855,20.9739865 C113.279855,17.3349443 111.235647,15.3448432 107.6015,15.3448432 C104.308054,15.3448432 102.235455,17.0506442 102.235455,17.0506442 L103.371126,19.0691754 C103.371126,19.0691754 105.159807,17.6761045 107.374366,17.6761045 C109.191439,17.6761045 110.525853,18.472145 110.525853,20.8318364 L110.525853,21.0877066 L109.901234,21.0877066 C107.487933,21.0877066 101.241742,21.2867167 101.241742,26.0345295 L101.241742,26.0345295 Z M104.024136,25.8923794 C104.024136,23.3052479 107.771851,23.1630978 109.84445,23.1630978 L110.554245,23.1630978 L110.554245,23.6179781 C110.554245,25.7502293 109.049481,28.1952108 106.721355,28.1952108 C104.932673,28.1952108 104.024136,27.0580101 104.024136,25.8923794 L104.024136,25.8923794 Z"
                                        id="traveloka" fill="#434343" className/>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <ul className='nav-bar-item-left'>
                        <li className="nav-bar-list">
                            <div className="nav_bar_list_item nav_bar_list_item--done">
                                <svg fill="none" height={24} stroke="currentColor" strokeLinecap="round"
                                     viewBox="0 0 24 24"
                                     width={24} xmlns="http://www.w3.org/2000/svg"
                                     xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="M5.61 11.69a1 1 0 0 0 1.447 0l6.667-7a1 1 0 1 0-1.448-1.38L6.35 9.568 3.724 6.81a1 1 0 0 0-1.448 1.38l3.333 3.5z"
                                        fill="#434343" fillRule="evenodd"/>
                                </svg>
                            </div>

                            <p>Đặt chỗ</p>
                        </li>
                        <li className="nav-bar-list">
                            <div className="nav_bar_list_item nav_bar_list_item--process">
                                2
                            </div>

                            <p>Xử lý</p>
                        </li>
                        <li className="nav-bar-list">
                            <div className="nav_bar_list_item nav_bar_list_item--later">
                                3
                            </div>

                            <p>Thanh toán</p>
                        </li>
                        <li className="nav-bar-list">
                            <div className="nav_bar_list_item nav_bar_list_item--later">
                                4
                            </div>

                            <p>Xuất vé điện tử</p>
                        </li>

                    </ul>
                </div>
            </header>
            <h3 className="content_name">Thanh toán</h3>
            <div className="content">
                <div className="content__left">

                    <div className="nav_bar_payment">
                        <div className="nav_bar_payment_item">
                            <img
                                src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/16/1531738663636-5a904b0e24addce76efebf72eb8e5cb0.png?tr=q-75"
                                alt="Logo" width="110" height="20">
                            </img>
                        </div>
                        <div className="nav_bar_payment_item nav_bar_payment_item--active">
                            Paypal
                        </div>
                        <div className="nav_bar_payment_item">
                            Thẻ thanh toán
                        </div>
                        <div className="nav_bar_payment_item">
                            Chuyển khoản ngân hàng
                        </div>
                        <div className="nav_bar_payment_item">
                            Tại cửa hàng
                        </div>
                        <div className="nav_bar_payment_item">
                            Thẻ ATM nội địa
                        </div>
                    </div>
                    <div className="nav_bar_info">
                        <div className="nav_bar_info_count">
                            <span>
                            Tiến hành thanh toán trong vòng {addLeadingZeros(hours)}:{addLeadingZeros(minutes)}:{addLeadingZeros(seconds)}
                                <img className="_2tukb"
                                     src="https://ik.imagekit.io/tvlk/image/imageResource/2018/07/16/1531740826838-b56ff1fbeebd63e65287af273888880d.png?tr=q-75"/>
                            </span>

                        </div>
                        <div className="nav_bar_info_content">
                            <h4>Paypal</h4>
                            <div className="nav_bar_info_detail">
                                <span>Chi tiết giá</span>
                                <div className="detail_item">
                                    <span className="detail_item_name">{paymentInfo.title}</span>
                                    <span className="detail_item_price">{numberFormat(paymentInfo.amount)}</span>
                                </div>
                                <div className="through"></div>
                                <div className="detail_item_total">
                                    <span className="detail_item_name">Tổng giá tiền</span>
                                    <span className="detail_item_price">{numberFormat(paymentInfo.amount)}</span>
                                </div>
                            </div>
                            <div className="nav_bar_info_gift">Tài khoản ({paymentInfo.email}) sẽ nhận được 110
                                điểm
                            </div>
                            <div className="nav_bar_info_policy">
                                Bằng việc nhấn Thanh toán, bạn đồng ý Điều khoản & Điều kiện và Chính sách quyền riêng
                                tư.
                            </div>
                            <div className="nav_bar_info_pay">
                                <div className="paypal-button-container">
                                    {
                                        paymentInfo.amount === 0 ? "" :
                                            <PaypalCheckoutButton transactionId={transactionId} product={paymentInfo}/>
                                    }

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="content__right">
                    <header className="booking-code">
                        <h4>Mã đặt chỗ</h4>
                        <span>{transactionId}</span>
                    </header>
                    <div className="booking-content">
                        <h5>Kiểm tra thông tin voucher</h5>
                        <span>{paymentInfo.description}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;