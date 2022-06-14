import React, { useEffect, useState } from 'react';
import ChartStistic from '../../components/Chart/ChartSatistic';
import VoucherPartnerApi from "../../api/voucherPartner.api";

const Partner = () => {
    const [categories, setCategories] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const getAnalyzeData = async () => {
            try {
                const { data } = await VoucherPartnerApi.getAnalyzeData();
                setCategories(data.data.months);
                setSeries(data.data.series);
            } catch (e) {

            }
        }

        getAnalyzeData();
    }, []);

    /*
        const categories = ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'];
        const series = [{
            name: 'Doanh thu',
            data: [30, 40, 25, 50, 49, 21, 70, 51, 49, 21, 70, 51]
        }];

     */

    return (
        <div className="row">
            <div className="col-lg-12">
                <ChartStistic categories={categories} series={series}/>
            </div>
        </div>
    );
};

export default Partner;