import React from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';


const DataLines = props => {
    const options = {
        xaxis: {
            categories: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12']
        }
    }
    const series = [{
        name: 'Doanh thu',
        data: [30, 40, 25, 50, 49, 21, 70, 51,  49, 21, 70, 51]
    }, {
        name: 'Lợi nhuận',
        data: [23, 12, 54, 61, 32, 56, 81, 19, 54, 61, 32, 56]
    }, {
        name: 'Hoa hồng',
        data: [26, 23, 43, 21, 12, 31, 23, 43, 51, 34, 14, 23]
    }]
    return (
        <Chart options={options} series={series} type="area" />
    );
};

DataLines.propTypes = {
    
};

export default DataLines;