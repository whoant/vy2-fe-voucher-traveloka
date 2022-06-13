import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import VoucherPartnerApi from "../../api/voucherPartner.api";
import { toast } from "react-toastify";
import moment from "moment";
import GiftCardPartnerApi from "../../api/giftCardPartner.api";

const DetailVoucher = props => {
    const { typeVoucher, code } = useParams();
    const [info, setInfo] = useState([]);
    const [typeView, setTypeView] = useState('used');
    const [analyze, setAnalyze] = useState({
        totalAmount: 0,
        totalUsed: 0,
        totalBuy: 0
    });

    useEffect(() => {
        const getDetailVoucher = async () => {
            if (!typeVoucher) return;
            try {
                const resp = await Promise.all([
                    VoucherPartnerApi.getDetailVoucher(typeVoucher, code),
                    VoucherPartnerApi.getAnalyzeVoucher(typeVoucher, code),
                ]);

                setAnalyze(resp[1].data.data);
                setInfo(resp[0].data.data.info);
                toast.success(resp[0].data.message);
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

    const handleChangeType = async (e) => {
        const typeView = e.target.value;
        setTypeView(typeView);
        try {
            const { data } = await VoucherPartnerApi.getDetailVoucher(typeVoucher, code, typeView);
            setInfo(data.data.info);
            toast.success(data.message);
        } catch (e) {
            toast.error(e.response.data.message);
        }
    }


    return (
        <div>
            <div className="card-deck">
                <div className="card mb-4 overflow-hidden" style={{ minWidth: '12rem', color: 'black' }}>
                    <div className="bg-holder bg-card"
                         style={{ backgroundImage: 'url(/assets/img/illustrations/corner-1.png)' }}>
                    </div>
                    <div className="card-body position-relative">
                        <h6>Tổng user sử dụng</h6>
                        <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-warning"
                             data-countup="{&quot;count&quot;:50,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{analyze.totalUsed}</div>

                    </div>
                </div>
                <div className="card mb-4 overflow-hidden" style={{ minWidth: '12rem' }}>
                    <div className="bg-holder bg-card"
                         style={{ backgroundImage: 'url(/assets/img/illustrations/corner-3.png)' }}>
                    </div>
                    <div className="card-body position-relative">
                        <h6>Tổng số user mua </h6>
                        <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif"
                             data-countup="{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{analyze.totalBuy}</div>
                    </div>
                </div>
                <div className="card mb-4 overflow-hidden" style={{ minWidth: '12rem' }}>
                    <div className="bg-holder bg-card"
                         style={{ backgroundImage: 'url(/assets/img/illustrations/corner-3.png)' }}>
                    </div>
                    <div className="card-body position-relative">
                        <h6>Tổng số tiền giao dịch </h6>
                        <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif"
                             data-countup="{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{numberFormat(analyze.totalAmount)}</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <label htmlFor="exampleSelect1">
                            Loại
                            <span className="text-danger">*</span>
                        </label>
                        <select className="form-control" onChange={handleChangeType}>
                            <option value='used'>Danh sách sử dụng</option>
                            <option value='buy'>Danh sách mua</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="card card-custom">

                <div className="card-header flex-wrap border-0 pt-6 pb-0">
                    <div className="card-title">
                        <h3 className="card-label">{
                            typeView === 'used' ? "Danh sách sử dụng" : "Danh sách mua"
                        }</h3>
                    </div>
                </div>

                <div className="card-body">
                    <div
                        className="datatable datatable-bordered datatable-head-custom datatable-default datatable-primary datatable-loaded"
                        id="kt_datatable" style={{ position: 'static', zoom: 1 }}>
                        <table className="datatable-table" style={{ display: 'block' }}>
                            <thead className="datatable-head">
                            <tr className="datatable-row" style={{ left: '0px' }}>
                                <th className="datatable-cell datatable-toggle-detail"><span/></th>
                                <th data-field="RecordId"
                                    className="datatable-cell-left datatable-cell datatable-cell-sort datatable-cell-sorted"
                                    data-sort="asc"><span style={{ width: '40px' }}>#<i className="flaticon2-arrow-up"/></span>
                                </th>
                                <th data-field="Customer" className="datatable-cell datatable-cell-sort"><span
                                    style={{ width: '200px' }}>Khách hàng</span></th>
                                <th data-field="Amount" className="datatable-cell datatable-cell-sort"><span
                                    style={{ width: '110px' }}>Số tiền gốc</span></th>
                                <th data-field="AmountAfter" className="datatable-cell datatable-cell-sort"><span
                                    style={{ width: '110px' }}>Số tiền sau</span></th>
                                <th data-field="" className="datatable-cell datatable-cell-sort"><span
                                    style={{ width: '150px' }}>Ngày giao dịch</span></th>
                            </tr>
                            </thead>
                            <tbody className="datatable-body" style={{}}>
                            {
                                info && info.map(item => {
                                    return (<tr data-row={0} className="datatable-row" style={{ left: '0px' }}>
                                        <td className="datatable-cell datatable-toggle-detail"><a
                                            className="datatable-toggle-detail" href><i className="fa fa-caret-right"/></a>
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
                                                                className="text-dark-75 font-weight-bolder font-size-lg mb-0">{item.email}
                                                            </div>
                                                            <a href="#"
                                                               className="text-muted font-weight-bold text-hover-primary">{item.email}</a>								</div>							</div></span>
                                        </td>
                                        <td data-field="Country" aria-label="Brazil" className="datatable-cell"><span
                                            style={{ width: '110px' }}><div
                                            className="font-weight-bolder font-size-lg mb-0">{numberFormat(item.amount)}</div></span>
                                        </td>
                                        <td data-field="Country" aria-label="Brazil" className="datatable-cell"><span
                                            style={{ width: '110px' }}><div
                                            className="font-weight-bolder font-size-lg mb-0">{numberFormat(item.amountAfter)}</div></span>
                                        </td>
                                        <td data-field="ShipDate" aria-label="10/15/2017" className="datatable-cell"><span
                                            style={{ width: '150px' }}><div
                                            className="font-weight-bolder text-primary mb-0">{moment(item.usedAt).format('DD/MM/yyyy')}</div></span>
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