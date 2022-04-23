import React from 'react';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';


const DataLine = (props) => {
	const { categories, series } = props;

	const options = {
		xaxis: {
			categories
		}
	}
	return (
		<Chart options={options} series={series} type="area"/>
	);
};

DataLine.propTypes = {
	categories: PropTypes.array,
	series: PropTypes.object
};

export default DataLine;