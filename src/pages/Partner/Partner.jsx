import React from 'react';
import DataLine from "../../components/DataLine/DataLine";

const Partner = () => {
	const categories = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
	const series = [{
		name: 'Doanh thu',
		data: [30, 40, 25, 50, 49, 21, 70, 51, 49, 21, 70, 51]
	}, {
		name: 'Lợi nhuận',
		data: [23, 12, 54, 61, 32, 56, 81, 19, 54, 61, 32, 56]
	}, {
		name: 'Hoa hồng',
		data: [26, 23, 43, 21, 12, 31, 23, 43, 51, 34, 14, 23]
	}];

	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="card card-custom gutter-b">
					<div className="card-header">
						<div className="card-title">
							<h3 className="card-label">Thống kê tổng quát voucher</h3>
						</div>
					</div>
					<div className="card-body">
						<DataLine categories={categories} series={series}/>
					</div>
				</div>
			</div>
			<div className="col-lg-12">
				<div className="card card-custom card-stretch gutter-b">
					<div className="card-header border-0 py-5">
						<h3 className="card-title align-items-start flex-column">
					                                    <span className="card-label font-weight-bolder text-dark">Chi tiết
					                              voucher</span>
						</h3>
						<div className="card-toolbar">
							<a href="#"
							   className="btn btn-danger font-weight-bolder font-size-sm">Tạo
								mới voucher</a>
						</div>
					</div>
					<div className="card-body pt-0 pb-3">
						<div className="tab-content">
							<div className="table-responsive">
								<table
									className="table table-head-custom table-head-bg table-borderless table-vertical-center">
									<thead>
									<tr className="text-left text-uppercase">
										<th style={{ minWidth: '250px' }} className="pl-7">
											<span className="text-dark-75">voucher</span>
										</th>
										<th style={{ minWidth: '100px' }}>doanh thu</th>
										<th style={{ minWidth: '100px' }}>lợi nhuận</th>
										<th style={{ minWidth: '100px' }}>hoa hồng</th>
										<th style={{ minWidth: '130px' }}>số lượng sử dụng
										</th>
										<th style={{ minWidth: '80px' }}/>
									</tr>
									</thead>
									<tbody>
									<tr>
										<td className="pl-0 py-8">
											<div className="d-flex align-items-center">
												<div
													className="symbol symbol-50 symbol-light mr-4">
                                          <span className="symbol-label">
                                                     <img src="assets/media/svg/avatars/001-boy.svg"
                                                          className="h-75 align-self-end" alt=""/>
                                          </span>
												</div>
												<div>
													<a href="#"
													   className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Voucher_1</a>
												</div>
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
										<td className="pr-0 text-right">
											<a href="#"
											   className="btn btn-light-success font-weight-bolder font-size-sm">Chi
												tiết</a>
										</td>
									</tr>
									<tr>
										<td className="pl-0 py-8">
											<div className="d-flex align-items-center">
												<div
													className="symbol symbol-50 symbol-light mr-4">
                                          <span className="symbol-label">
                                            <img src="assets/media/svg/avatars/005-girl-2.svg"
                                                 className="h-75 align-self-end" alt=""/>
                                          </span>
												</div>
												<div>
													<a href="#"
													   className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Voucher_2</a>
												</div>
											</div>
										</td>
										<td>
																	<span
																		className="text-dark-75 font-weight-bolder d-block font-size-lg">$4,000,000</span>
										</td>
										<td>
																	<span
																		className="text-dark-75 font-weight-bolder d-block font-size-lg">$320</span>
										</td>
										<td>
																	<span
																		className="text-dark-75 font-weight-bolder d-block font-size-lg">$90</span>
										</td>
										<td>
																	<span
																		className="text-dark-75 font-weight-bolder d-block font-size-lg">80</span>
										</td>
										<td className="pr-0 text-right">
											<a href="#"
											   className="btn btn-light-success font-weight-bolder font-size-sm">Chi
												tiết</a>
										</td>
									</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Partner;