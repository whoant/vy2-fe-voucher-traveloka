import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useNavigate } from "react-router-dom";

VoucherItem.propTypes = {
    voucher: PropTypes.object
};

function VoucherItem(props) {
    const { type } = props;
    const { imageUrl, title, voucherCode, amount, effectiveAt, expirationAt, description } = props.voucher;
    const navigate = useNavigate();

    const handleClickDetail = () => {
        navigate(`/partner/voucher/${type}/${voucherCode}`, { replace: true });
    }

    return (
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
            <div className="card card-custom gutter-b card-stretch">
                <div className="card-body pt-4">
                    <div className="d-flex align-items-center mb-7">
                        <div className="flex-shrink-0 mr-4">
                            <div className="symbol symbol-circle symbol-lg-75">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt="image"/>
                            </div>
                        </div>
                        <div className="d-flex flex-column">
                            <a href="#"
                               className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{title}</a>
                            <span className="text-muted font-weight-bold">{voucherCode}</span>
                        </div>
                    </div>
                    <p className="mb-7">{description}</p>
                    <div className="mb-7">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-dark-75 font-weight-bolder mr-2">Ngày hiệu lực :</span>
                            <span href="#"
                                  className="text-muted text-hover-primary">{moment(effectiveAt).format('DD/MM/yyyy')}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-cente my-1">
                            <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hiệu lực :</span>
                            <span href="#"
                                  className="text-muted text-hover-primary">{moment(expirationAt).format('DD/MM/yyyy')}</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="text-dark-75 font-weight-bolder mr-2">Số tiền để mua :</span>
                            <span className="text-muted text-hover-primary">{new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND'
                            }).format(amount)}</span>
                        </div>
                    </div>
                    <a href="#"
                       className="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4"
                       onClick={handleClickDetail}>Chi
                        tiết</a>
                </div>
            </div>
        </div>
    );
}

export default VoucherItem;