import React, { useEffect, useState } from 'react';
import '../Discounts/style.css';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import BonusItem from "../BonusItem/BonusItem";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import GiftCardUserApi from "../../api/giftCardUser.api";

const Bonus = props => {

    let { typeVoucher } = useParams();
    const [giftCards, setGiftCards] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const listGiftCardCanExchange = async () => {
            if (!typeVoucher) return;
            try {
                const { data } = await GiftCardUserApi.getGiftCardCanExchange(typeVoucher);
                setGiftCards(data.data.giftCards)

            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };

        listGiftCardCanExchange();
    }, [typeVoucher, isSuccess]);

    const handleClickExchange = (giftCardCode) => {
        confirmAlert({
            title: 'Đổi điểm thưởng',
            message: 'Bạn có chắc chắn đổi điểm không ?',
            buttons: [
                {
                    label: 'Chấp nhận',
                    onClick: async () => {
                        try {
                            await GiftCardUserApi.postGiftCardExchange(giftCardCode);
                            toast.success("Đổi thành công !");
                            setIsSuccess(true);
                        } catch (e) {
                            toast.error(e.response.data.message);
                        }
                    }
                },
                {
                    label: 'Huỷ',

                }
            ]
        });
    };

    return (
        <div className="oneColumnWebDesktop">
            <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow"/>
            <div className="tv-landing-page-headerSection">
                <div className="tv-backgroundTopContainer">
                    <div className="mcp-placeholder headContent" data-name="headContent"/>
                </div>
            </div>
            <div className="mcp-placeholder breadcrumbContent" data-name="breadcrumbContent">
                <div>
                    <div className="component-overflow page-breadcrumb  root " data-component="true"
                         data-name="LandingPromotion_breadcrumb" data-id={1474617033700}>
                        <ul>
                            <li><a href="$router.url('LANDING_PAGE', '')">Home</a></li>
                            <li><span>Khuyến mãi</span></li>
                        </ul>
                    </div>
                    <div className="component-overflow simple-text   " data-component="true"
                         data-name="LandingPromotion_Intro" data-id={1474618931100}>
                        <h1>Đổi điểm thưởng!!</h1>
                        <h3>Điểm hiện có: 30000</h3>
                    </div>
                </div>
            </div>
            <div className="contentWrapper">
                <div className="leftContent">
                    <div className="mcp-placeholder" data-name="leftContent">
                        <div>
                            <div className="component-overflow null" data-component="true"
                                 data-name="promo_filter_migration_container_impl" data-id={1554818658393}>
                                <div className="mcp-placeholder-inner" data-name="content">
                                    <div className="component-overflow promo-filter filterDealContainer"
                                         data-component="true" data-name="LandingPromotion_Filter_Product"
                                         data-id={1554734749727}>
                                        <div className="promo-filter-header">
                                            <h3>Lựa chọn dịch vụ</h3>

                                        </div>
                                        <div className="promo-filter-content-showall">
                                            <div className="mcp-placeholder-inner" data-name="items">

                                                <Link to="/user/bonus/FLIGHT"
                                                      className="component-overflow checkbox">
                                                    <label>Chuyến bay</label></Link>

                                                <Link to="/user/bonus/HOTEL"
                                                      className="component-overflow checkbox">
                                                    <label>Khách sạn</label></Link>
                                                <Link to="/user/bonus/AIRPORT"
                                                      className="component-overflow checkbox">
                                                    <label>Đưa đón sân bay</label></Link>
                                                <Link to="/user/bonus/APART"
                                                      className="component-overflow checkbox">
                                                    <label>Biệt thự căn hộ</label></Link>
                                                <Link to="/user/bonus/XPERIENCE"
                                                      className="component-overflow checkbox">
                                                    <label>Tour du lịch (Trải nghiệm)</label></Link>
                                                <Link to="/user/bonus/CARRENTAL"
                                                      className="component-overflow checkbox">
                                                    <label>Thuê xe</label></Link>
                                                <Link to="/user/bonus/EATS"
                                                      className="component-overflow checkbox">
                                                    <label>Nhà hàng</label></Link>
                                                <Link to="/user/bonus/COMBO"
                                                      className="component-overflow checkbox">
                                                    <label>Combo tiết kiệm</label></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                    <div className="mcp-placeholder" data-name="middleContent">
                        <div>
                            <div className="component-overflow list-promo" data-component="true"
                                 data-name="LandingPromotion_PromoContainerV2" data-id={1554098117652}>
                                {
                                    giftCards && giftCards.map(giftCard =>
                                        <BonusItem
                                            giftCard={giftCard}
                                            onClickExchange={handleClickExchange}/>)
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="mcp-placeholder footerContent" data-name="footerContent">
                <div>
                    <div className="component-overflow null" data-component="true"
                         data-name="Footer_NewsletterSubscribe" data-id={1474001429796}/>
                </div>
            </div>
        </div>
    );
};

Bonus.propTypes = {};

export default Bonus;