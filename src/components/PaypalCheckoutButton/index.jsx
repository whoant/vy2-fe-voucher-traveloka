import React from 'react';
import { PayPalButtons } from "@paypal/react-paypal-js";
import { toast } from "react-toastify";
import VoucherUserApi from "../../api/voucherUser.api";
import { useNavigate } from "react-router-dom";

const PaypalCheckoutButton = (props) => {
    const { product, transactionId } = props;
    const navigate = useNavigate();

    const handleApprove = async (orderId) => {
        try {
            await VoucherUserApi.postApproveBuyVoucher(orderId, transactionId);
            toast.success("Mua voucher thành công !");
            navigate(-1);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <PayPalButtons style={{ color: 'silver', layout: 'horizontal', height: 48, tagline: false, shape: "pill" }}
                       createOrder={async (data, actions) => {
                           try {
                               const { data } = await VoucherUserApi.postBuyVoucher(transactionId);
                               return data.data.paymentId;
                           } catch (e) {
                               console.error(e);
                           }

                       }}
                       onApprove={async (data, actions) => {
                           const order = await actions.order.capture();
                           console.log('order', order);
                           handleApprove(data.orderID);
                       }}
                       onError={(err) => {
                           console.log(err);
                       }}
                       onClick={(data, actions) => {
                           const hasAlreadyBoughtCourse = false;

                           if (hasAlreadyBoughtCourse) {
                               toast.error("Bạn đã thanh toán !")
                               return actions.reject();
                           } else {
                               return actions.resolve();
                           }
                       }}
        />
    );
};

export default PaypalCheckoutButton;