import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TableDetails = props => {
    const {voucherDetails} = props;


    return (
        <div className="card card-custom card-stretch gutter-b">
            <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label font-weight-bolder text-dark">Chi tiết voucher</span>
                </h3>
                <div className="card-toolbar">
                    <Link to="/CreateVoucher"
                        className="btn btn-danger font-weight-bolder font-size-sm">Tạo voucher mới</Link>
                </div>
            </div>
            <div className="card-body pt-0 pb-3">
                <div className="tab-content">
                    <div className="table-responsive">
                        <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                            <thead>
                                <tr className="text-left text-uppercase">
                                    <th style={{ minWidth: '250px' }} className="pl-7">
                                        <span className="text-dark-75">voucher</span>
                                    </th>
                                    <th style={{ minWidth: '100px' }}>doanh thu</th>
                                    <th style={{ minWidth: '100px' }}>lợi nhuận</th>
                                    <th style={{ minWidth: '100px' }}>hoa hồng</th>
                                    <th style={{ minWidth: '130px' }}>số lượng sử dụng</th>
                                    <th style={{ minWidth: '80px' }}/>
                                </tr>
                            </thead>
                            <tbody>
                                {voucherDetails.map(voucherDetail => (
                                    <tr>
                                        <td className="pl-0 py-8">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-50 symbol-light mr-4">
                                                    
                                                </div>
                                                <div>
                                                    <Link to="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{voucherDetail.name}</Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{voucherDetail.sales}đ</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{voucherDetail.profit}đ</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{voucherDetail.commission}đ</span>
                                        </td>
                                        <td>
                                            <span className="text-dark-75 font-weight-bolder d-block font-size-lg">{voucherDetail.usedNumber}</span>
                                        </td>
                                        <td className="pr-0 text-right">
                                            <Link to="#" className="btn btn-light-success font-weight-bolder font-size-sm">Chi tiết</Link>
                                        </td>
                                    </tr>

                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

TableDetails.propTypes = {
    
};

export default TableDetails;