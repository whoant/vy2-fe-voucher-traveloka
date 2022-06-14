import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';

const ChartSatistic = props => {
    const { categories, series } = props;

    const options = {
        xaxis: {
            categories
        }
    };

    return (
        <div className="card card-custom gutter-b">
            <div className="card-header">
                <div className="card-title">
                    <h3 className="card-label">Thống kê tổng quát voucher</h3>
                </div>
            </div>
            <div className="card-body">
                <Chart options={options} series={series} type="area"/>
            </div>
        </div>
    );
};

export default ChartSatistic;