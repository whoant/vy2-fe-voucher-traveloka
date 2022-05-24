import React, { useEffect, useState } from 'react';
import '../Discounts/style.css';
import { useNavigate, useParams } from "react-router-dom";
import VoucherUserApi from "../../api/voucherUser.api";
import Discount from "../Discount";
import { toast } from "react-toastify";

const Discounts = props => {
    const { typeVoucher } = useParams();
    const navigate = useNavigate();
    const [vouchers, setVouchers] = useState([]);

    useEffect(() => {
        const getVoucherCanBuy = async () => {
            if (typeVoucher === '') return;
            try {
                const { data } = await VoucherUserApi.getVouchersCanBuy(typeVoucher);

                setVouchers(data.data.vouchers);
            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };

        getVoucherCanBuy();
    }, []);

    const handleClickBuy = async (voucher) => {
        try {
            const { data } = await VoucherUserApi.postPreBuyVoucher({
                code: voucher.voucherCode,
                typeVoucher,
            }, {
                partner_id: voucher.partnerId
            });

            navigate(`/user/payment/${data.data.transactionId}`, { replace: true });

        } catch (e) {
            toast.error(e.response.data.message);
            console.error(e);
        }

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
                    <div className="component-overflow simple-text   " data-component="true"
                         data-name="LandingPromotion_Intro">
                        <h1>Danh sách voucher</h1>
                    </div>
                </div>
            </div>
            <div className="contentWrapper">
                <div className="mcp-placeholder" data-name="middleContent">
                    {
                        vouchers && vouchers.map(voucher => <Discount key={voucher.id} info={voucher}
                                                                      buy={handleClickBuy}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Discounts;