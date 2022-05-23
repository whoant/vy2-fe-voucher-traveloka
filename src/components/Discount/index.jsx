import React from 'react';
import '../Discounts/style.css';
import moment from "moment";

const Discount = props => {
    const { imageUrl, voucherCode, id, effectiveAt, title, expirationAt, amount, description, content } = props.info;

    const numberFormat = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);
    }

    return (
        <div className="promo-thumb" data-product=" flight attraction hotel"
             data-promo-type=" deal coupon" data-promotype=" deal coupon" data-payment="true"
             data-destination=" international" data-airline="true" data-deal="true">
            <a href="/vi-vn/promotion/dulichquocte" data-tvxr="attribute"
               data-promo-id="/promotion/dulichquocte" target="_blank"
               className="buttonLinkPromotion">
                <div className="promo-thumb-img">
                    <img className="promo-thumb-img-el"
                         src={imageUrl || "https://ik.imagekit.io/tvlk/image/imageResource/2022/05/19/1652968820693-931d3d2a2f382b27076c3f1bef5ff84a.png?tr=q-75,w-307,h-154"}
                         alt="Traveloka Promo" data-tvxr="attribute"/>
                </div>
                <div className="promo-thumb-info">
                    <div className="promo-thumb-title">{title}</div>
                    <div className="promo-thumb-content">{content}</div>
                    <div className="promo-thumb-desc">{description}</div>
                    <div className="promo-thumb-amount">{numberFormat(amount)}</div>
                    <div className="promo-thumb-duration">
                        <p>Thời gian ưu đãi: từ
                            ngày {moment(effectiveAt).format('DD/MM/yy')} - {moment(expirationAt).format('DD/MM/yy')}</p>
                    </div>
                    <span className="btn-secondary btn-block">Mua ngay</span>
                </div>
            </a>
        </div>
    );
};

Discount.propTypes = {};

export default Discount;