import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import voucherPartnerApi from '../../api/voucherPartner.api';
const Dashboard = props => {
    const [voucher, setVouchers] = useState([]);
    const [countGift, setCountGift] = useState(1);
    const [count, setCountVouchers] = useState(1);
    const [sumMoney, setSumMonny] = useState(1);
    let { typeVoucher } = useParams();
    useEffect(() => {
        const listTypeVoucher = async () => {
            try {
                const { data } = await voucherPartnerApi.getListTypeVouchers();
                data.data.typeVouchers.forEach(element => {
                    getAllVouchers(element.type);
                });
            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };

        listTypeVoucher();

    }, []);
    const getAllVouchers = async (typeVoucher) => {
        try {
            const { data } = await voucherPartnerApi.getListVoucher(typeVoucher)
            setVouchers(data.data.vouchers);
            data.data.vouchers.forEach(element => {
                if (element.id != null) {
                    setCountVouchers(+1);
                }
            });
        } catch (e) {
            console.error(e);
        }
    };

    const numberFormat = (value) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(value);
    }

    return (
        <div className="card-deck">
            <div className="card mb-3 overflow-hidden" style={{ minWidth: '12rem', color: 'black' }}>
                <div className="bg-holder bg-card" style={{ backgroundImage: 'url(/assets/img/illustrations/corner-1.png)' }}>
                </div>
                <div className="card-body position-relative">
                    <h6>Tổng voucher đang có</h6>
                    <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-warning" data-countup="{&quot;count&quot;:50,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{count}</div><a className="font-weight-semi-bold fs--1 text-nowrap" href="#!">Xem toàn bộ<span className="fas fa-angle-right ml-1" data-fa-transform="down-1" /></a>
                </div>
            </div>
            <div className="card mb-3 overflow-hidden" style={{ minWidth: '12rem' }}>
                <div className="bg-holder bg-card" style={{ backgroundImage: 'url(/assets/img/illustrations/corner-2.png)' }}>
                </div>
                <div className="card-body position-relative">
                    <h6>Tổng gift đang có</h6>
                    <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-info" data-countup="{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{countGift}</div><a className="font-weight-semi-bold fs--1 text-nowrap" href="#!">Xem toàn bộ<span className="fas fa-angle-right ml-1" data-fa-transform="down-1" /></a>
                </div>
            </div>
            <div className="card mb-3 overflow-hidden" style={{ minWidth: '12rem' }}>
                <div className="bg-holder bg-card" style={{ backgroundImage: 'url(/assets/img/illustrations/corner-3.png)' }}>
                </div>
                <div className="card-body position-relative">
                    <h6>Số tiền đã được sử dụng</h6>
                    <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif" data-countup="{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{numberFormat(sumMoney)}</div><a className="font-weight-semi-bold fs--1 text-nowrap" href="#!">Xem toàn bộ<span className="fas fa-angle-right ml-1" data-fa-transform="down-1" /></a>
                </div>
            </div>
        </div>

    )
}

export default Dashboard