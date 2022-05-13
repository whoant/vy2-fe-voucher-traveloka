import React from 'react';
import ChartStistic from '../../components/Chart/ChartSatistic';
import TableDetails from '../../components/TableDetails/TableDetails';

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

	const voucherDetails = [{
		name: 'Voucher_1',
		sales: 8000000,
		profit: 520,
		commission: 200,
		usedNumber: 129
	},{
		name: 'Voucher_2',
		sales: 8000000,
		profit: 520,
		commission: 200,
		usedNumber: 129
	}]

	return (
		<div className="row">
			<div className="col-lg-12">
				<ChartStistic categories={categories} series={series}/>
			</div>
			<div className="col-lg-12">
				<TableDetails voucherDetails={voucherDetails}/>
			</div>
		</div>
	);
};

export default Partner;