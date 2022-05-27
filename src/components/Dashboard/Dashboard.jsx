import React, { useEffect, useState } from 'react'
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import voucherPartnerApi from '../../api/voucherPartner.api';
import Partner from '../../pages/Partner/Partner';

const Dashboard = props => {
    const [count, setCount] = useState({
        countVoucher: 0,
        countGiff: 0
    });
    let { typeVoucher } = useParams();

    useEffect(() => {
        const listCount = async () => {
            try {
                const resp = await Promise.all([voucherPartnerApi.getCountVoucher(), voucherPartnerApi.getCountVoucher()]);
                setCount({
                    countVoucher: resp[0].data.data.count,
                    countGiff: resp[1].data.data.count,
                })
            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };

        listCount();

    }, []);


    return (
        <div>

            <div className="card-deck">
                <div className="card mb-3 overflow-hidden" style={{ minWidth: '12rem', color: 'black' }}>
                    <div className="bg-holder bg-card"
                         style={{ backgroundImage: 'url(/assets/img/illustrations/corner-1.png)' }}>
                    </div>
                    <div className="card-body position-relative">
                        <h6>Tổng voucher đang có</h6>
                        <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-warning"
                             data-countup="{&quot;count&quot;:50,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{count.countVoucher}</div>

                    </div>
                </div>
                <div className="card mb-3 overflow-hidden" style={{ minWidth: '12rem' }}>
                    <div className="bg-holder bg-card"
                         style={{ backgroundImage: 'url(/assets/img/illustrations/corner-2.png)' }}>
                    </div>
                    <div className="card-body position-relative">
                        <h6>Tổng gift đang có</h6>
                        <div className="display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-info"
                             data-countup="{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}">{count.countGiff}</div>
                     
                    </div>
                </div>
            </div>
            <Partner/>
        </div>

    )
}

export default Dashboard