import React from 'react';
import '../Discounts/style.css';
import { confirm } from "react-confirm-box";

const Bonus = props => {
    const options = {
        labels: {
            confirmable: "OK",
            cancellable: "Hủy"
        },
        closeOnOverlayClick: true
      };

    const onClick = async (options  ) => {
        const result = await confirm("Đồng ý đổi điểm?", options);
        if (result) {
          console.log("Confirmed!");
          return;
        }
        console.log("Cancel!");
      };

    return (
        <div className="oneColumnWebDesktop">
            <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow" />
            <div className="tv-landing-page-headerSection">
                <div className="tv-backgroundTopContainer">
                    <div className="mcp-placeholder headContent" data-name="headContent" />
                </div>
            </div>
            <div className="mcp-placeholder breadcrumbContent" data-name="breadcrumbContent">
                <div>
                    <div className="component-overflow page-breadcrumb  root " data-component="true" data-name="LandingPromotion_breadcrumb" data-id={1474617033700}>
                        <ul>
                            <li><a href="$router.url('LANDING_PAGE', '')">Home</a></li>
                            <li><span>Khuyến mãi</span></li>
                        </ul>
                    </div>
                    <div className="component-overflow simple-text   " data-component="true" data-name="LandingPromotion_Intro" data-id={1474618931100}>
                        <h1>Đổi điểm thưởng!!</h1>
                        <h3>Điểm hiện có: <span style={{ textDecoration: 'underline'}}>
                            30000
                            </span> đ
                        </h3>
                        <p>Bạn đang chuẩn bị cho kỳ nghỉ hay bận rộn với chuyến công tác sắp tới? Hãy tiết kiệm hơn với Traveloka!
                            Xem ngay các khuyến mãi đổi qua điểm của chúng tôi ở dưới đây:</p>
                    </div>
                </div>
            </div>
            <div className="contentWrapper">
                <div className="leftContent">
                    <div className="mcp-placeholder" data-name="leftContent">
                        <div>
                            <div className="component-overflow null" data-component="true" data-name="promo_filter_migration_container_impl" data-id={1554818658393}>
                                <div className="mcp-placeholder-inner" data-name="content">
                                    <div className="component-overflow container-btn" data-component="true" data-name="LandingPromotion_ResetFilter" data-id={1474619056876}> 
                                        <a className="btn-secondary btn-block $customClass" href="#resetFilter" target="_blank">Đặt lại</a>
                                    </div>
                                    <div className="component-overflow promo-filter filterDealContainer" data-component="true" data-name="LandingPromotion_Filter_Product" data-id={1554734749727}>
                                        <div className="promo-filter-header">
                                            <h3>Lựa chọn ưu tiên</h3>
                                            <p>Hiển thị kết quả theo lựa chọn ưu tiên.</p>
                                        </div>
                                        <div className="promo-filter-content-showall">
                                            <div className="mcp-placeholder-inner" data-name="items">
                                                <div className="component-overflow checkbox" id="$id" data-component="true" data-name="LandingPromotion_Filter_Product_Flight" data-id={1554734749999}><input type="checkbox" data-filter="product" defaultValue="flight" />
                                                    <label>Vé máy bay</label>
                                                </div>
                                                <div className="component-overflow checkbox" id="$id" data-component="true" data-name="LandingPromotion_Filter_Product_Hotel" data-id={1554734750879}><input type="checkbox" data-filter="product" defaultValue="hotel" />
                                                    <label>Khách sạn</label>
                                                </div>
                                                <div className="component-overflow checkbox" data-component="true" data-name="LandingPromotion_Filter_Product_Holiday_Stays" data-id={1642388993555}><input type="checkbox" data-filter="product" defaultValue="villa" />
                                                    <label>Khách sạn</label>
                                                </div>
                                                <div className="component-overflow checkbox" id="$id" data-component="true" data-name="LandingPromotion_Filter_Product_Packages" data-id={1554734752595}><input type="checkbox" data-filter="product" defaultValue="package" />
                                                    <label>Combo tiết kiệm</label>
                                                </div>
                                                <div className="component-overflow checkbox" id="$id" data-component="true" data-name="LandingPromotion_Filter_Product_Attraction" data-id={1554734755152}><input type="checkbox" data-filter="product" defaultValue="attraction" />
                                                    <label>Xperience</label>
                                                </div>
                                                <div className="component-overflow checkbox" data-component="true" data-name="LandingPromotion_Filter_Product_Quick_Ride" data-id={1647837138673}><input type="checkbox" data-filter="product" defaultValue="quickride" />
                                                    <label>Khách sạn</label>
                                                </div>
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
                            <div className="component-overflow list-promo" data-component="true" data-name="LandingPromotion_PromoContainerV2" data-id={1554098117652}>
                                <div className="promo-thumb" data-product=" flight attraction hotel" data-promo-type=" deal coupon" data-promotype=" deal coupon" data-payment="true" data-destination=" international" data-airline="true" data-deal="true">
                                    <div  data-tvxr="attribute" data-promo-id="/promotion/dulichquocte" className="buttonLinkPromotion">
                                        <div className="promo-thumb-img">
                                            <img className="promo-thumb-img-el" src="https://ik.imagekit.io/tvlk/image/imageResource/2022/05/19/1652968820693-931d3d2a2f382b27076c3f1bef5ff84a.png?tr=q-75,w-307,h-154" alt="Traveloka Promo" data-tvxr="attribute" />
                                        </div>
                                        <div className="promo-thumb-info">
                                            <div className="promo-thumb-desc">Deal Sốc Quốc Tế Hạ Cánh!🎉</div>
                                            <div className="promo-thumb-duration">
                                                <p>Thời gian ưu đãi: từ ngày 25 - 31/05/2022</p>
                                            </div>
                                            <div className="promo-thumb-point">
                                                <p>Điểm đổi: <span>
                                                        10000
                                                    </span> đ
                                                </p>
                                            </div>
                                            <span 
                                                className="btn-secondary btn-block"
                                                onClick={() => {onClick(options)}}
                                            >
                                                Đổi ngay</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mcp-placeholder footerContent" data-name="footerContent">
                <div>
                    <div className="component-overflow null" data-component="true" data-name="Footer_NewsletterSubscribe" data-id={1474001429796} />
                </div>
            </div>
        </div>
    );
};

Bonus.propTypes = {};

export default Bonus;