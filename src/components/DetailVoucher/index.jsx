import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import VoucherPartnerApi from "../../api/voucherPartner.api";
import { toast } from "react-toastify";
import moment from "moment";

const DetailVoucher = props => {
    const { typeVoucher, code } = useParams();
    const [info, setInfo] = useState([]);
    const voucherDetails = [{
        voucher: 'Voucher_1',
        countUsing: 12,
        countBuy: 520,
        sumMonney: 20000
    }, {
        voucher: 'Voucher_2',
        countUsing: 200,
        countBuy: 520,
        sumMonney: 80000
    }]
    const handleSum = () => {
        setInfo(voucherDetails);
    };
    useEffect(() => {
        const getDetailVoucher = async () => {
            if (!typeVoucher) return;
            try {
                const { data } = await VoucherPartnerApi.getDetailVoucher(typeVoucher, code);
                setInfo(data.data.info);
                handleSum();
                toast.success(data.message);
            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };
        getDetailVoucher();
    }, []);



    const numberFormat = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);
    }


    return (
        <div>
            <div className="card card-custom">

                <div className="card-header flex-wrap border-0 pt-6 pb-0">
                    <div className="card-title">
                        <h3 className="card-label">Danh sách người dùng đã sử dụng</h3>
                    </div>
                </div>

                <div className="card-body">
                    <div
                        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                        id="kt_datatable" style={{ position: 'static', zoom: 1 }}>
                        <table className="datatable-table" style={{ display: 'block' }}>
                            <thead className="datatable-head">
                                <tr className="datatable-row" style={{ left: '0px' }}>
                                    <th className="datatable-cell datatable-toggle-detail"><span /></th>
                                    <th data-field="RecordId"
                                        className="datatable-cell-left datatable-cell datatable-cell-sort datatable-cell-sorted"
                                        data-sort="asc"><span style={{ width: '40px' }}>#<i className="flaticon2-arrow-up" /></span>
                                    </th>
                                    <th data-field="Voucher" className="datatable-cell datatable-cell-sort"><span
                                        style={{ width: '200px' }}>Voucher</span></th>
                                    <th data-field="countUsing" className="datatable-cell datatable-cell-sort"><span
                                        style={{ width: '110px' }}>Số lượt đã sử dụng</span></th>
                                    <th data-field="countBuy" className="datatable-cell datatable-cell-sort"><span
                                        style={{ width: '110px' }}>Số người mua</span></th>
                                    <th data-field="sumMonney" className="datatable-cell datatable-cell-sort"><span
                                        style={{ width: '150px' }}>Tổng số tiền</span></th>
                                </tr>
                            </thead>
                            <tbody className="datatable-body" style={{}}>
                                {
                                    info && info.map(item => {
                                        return (<tr data-row={0} className="datatable-row" style={{ left: '0px' }}>
                                            <td className="datatable-cell datatable-toggle-detail"><a
                                                className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a>
                                            </td>
                                            <td className="datatable-cell-sorted datatable-cell-left datatable-cell"
                                                data-field="RecordID" aria-label={1}><span style={{ width: '40px' }}><span
                                                    className="font-weight-bolder">{item.index}</span></span></td>
                                            <td data-field="OrderID" aria-label="64616-103" className="datatable-cell">
                                                <span
                                                    style={{ width: '200px' }}>
                                                    <div className="d-flex align-items-center">
                                                        <div
                                                            className="symbol symbol-40 symbol-light-danger flex-shrink-0">									<span
                                                                className="symbol-label font-size-h4 font-weight-bold">H
                                                            </span>
                                                        </div>
                                                        <div className="ml-4">
                                                            <div
                                                                className="text-dark-75 font-weight-bolder font-size-lg mb-0">{item.voucher}
                                                            </div>
                                                            <a href="#"
                                                                className="text-muted font-weight-bold text-hover-primary">{item.voucher}</a>								</div>							</div></span>
                                            </td>
                                            <td data-field="Country" aria-label="Brazil" className="datatable-cell"><span
                                                style={{ width: '110px' }}><div
                                                    className="font-weight-bolder font-size-lg mb-0">{item.countUsing}</div></span>
                                            </td>
                                            <td data-field="Country" aria-label="Brazil" className="datatable-cell"><span
                                                style={{ width: '110px' }}><div
                                                    className="font-weight-bolder font-size-lg mb-0">{item.countBuy}</div></span>
                                            </td>
                                            <td data-field="ShipDate" aria-label="10/15/2017" className="datatable-cell"><span
                                                style={{ width: '150px' }}><div
                                                    className="font-weight-bolder text-primary mb-0">{numberFormat(item.sumMonney)}</div></span>
                                            </td>
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

DetailVoucher.propTypes = {};

export default DetailVoucher;