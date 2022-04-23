import React from 'react';
import PropTypes from 'prop-types';
import DataLines from '../DataLine/DataLine';

const Chart = props => {
	return (
		<div className='d-flex justify-content-center row'>
			<div class="card card-custom gutter-b col-md-8">
				<div class="card-header">
					<div class="card-title">
						<h3 class="card-label">Thống kê tổng quát voucher</h3>
					</div>
				</div>
				<div class="card-body">
					<DataLines/>
				</div>
			</div>
			<div className="card card-custom col-md-8">
				<div className="card-header border-0 py-5">
					<h3 className="card-title align-items-start flex-column">
						<span className="card-label font-weight-bolder text-dark">Chi tiết voucher</span>
					</h3>
					<div className="card-toolbar">
						<a href="/createVoucher" className="btn btn-danger font-weight-bolder font-size-sm">Tạo mới
							voucher</a>
					</div>
				</div>
				<div className="card-body pt-0 pb-3">
					<div className="tab-content">
						<div className="table-responsive">
							<table className="table table-head-custom table-head-bg ">
								<thead>
								<tr className="text-left text-uppercase">
									<th style={{ 'min-width': '250px' }} className="pl-7">
										<span className="text-dark-75">voucher</span>
									</th>
									<th style={{ 'min-width': '100px' }}>doang thu</th>
									<th style={{ 'min-width': '100px' }}>lợi nhuận</th>
									<th style={{ 'min-width': '100px' }}>hoa hồng</th>
									<th style={{ 'min-width': '130px' }}>số lượng sử dụng</th>
									<th style={{ 'min-width': '80px' }}></th>
								</tr>
								</thead>
								<tbody>
								<tr className=''>
									<td>
										<div>
											<a href="#"
											   className="text-dark-75 font-weight-bolder text-decoration-none text-hover-primary mb-1 font-size-lg">Voucher_1</a>
										</div>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">$8,000,000</span>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">$520</span>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">$190</span>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">100</span>
									</td>
									<td>
										<a href="#" className="btn btn-light font-weight-bolder font-size-sm">Chi
											tiết</a>
									</td>
								</tr>
								<tr className=''>
									<td>
										<div>
											<a href="#"
											   className="text-dark-75 font-weight-bolder text-decoration-none text-hover-primary mb-1 font-size-lg">Voucher_1</a>
										</div>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">$8,000,000</span>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">$520</span>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">$190</span>
									</td>
									<td>
										<span
											className="text-dark-75 font-weight-bolder d-block font-size-lg">100</span>
									</td>
									<td className='pr-0'>
										<button href="#" className="btn btn-light font-weight-bolder font-size-sm">Chi
											tiết
										</button>
									</td>
								</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Chart;