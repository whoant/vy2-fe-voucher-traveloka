import React, { useEffect, useState } from 'react'
import DataGift from '../../components/Gift/DataGift'
import VoucherItem from "../../components/VoucherItem";
import { useNavigate, useParams } from "react-router-dom";
import VoucherPartnerApi from "../../api/voucherPartner.api";
import GiftCardPartnerApi from "../../api/giftCardPartner.api";
import { toast } from "react-toastify";
import GiftCardItem from "../../components/GiftCardItem";


const Gift = () => {
    let { typeVoucher } = useParams();

    const navigate = useNavigate();
    const [giftCards, setGiftCards] = useState([]);
    const [isShow, setIsShow] = useState(false);

    const [typeVouchers, setTypeVouchers] = useState([]);

    useEffect(() => {
        const listTypeVoucher = async () => {
            try {
                const { data } = await VoucherPartnerApi.getListTypeVouchers();
                setTypeVouchers(data.data.typeVouchers)

            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };

        listTypeVoucher();

    }, []);

    useEffect(() => {
        const getGiftCards = async () => {
            if (!typeVoucher) return;
            try {
                const { data } = await GiftCardPartnerApi.getListGiftCard(typeVoucher);
                setGiftCards(data.data.giftCards);
                toast.success(data.message);
            } catch (e) {
                toast.error(e.response.data.message);
                console.error(e);
            }
        };
        getGiftCards();

    }, [typeVoucher]);

    const handleClickSelect = () => {
        setIsShow(prevState => !prevState);
    };

    const handleClickType = (newTypeVoucher) => {
        navigate(`/partner/gift-card/${newTypeVoucher}`, { replace: true });
        setIsShow(false);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xxl-12 order-1 order-xxl-2">
                    <div className="card card-custom card-stretch gutter-b">
                        <div className="card-header border-0">
                            <h3 className="card-title font-weight-bolder text-dark">Danh sách thẻ quà tặng</h3>
                            <div className="card-toolbar">
                                <div className="dropdown dropdown-inline show">
                                    <a href="#"
                                       className="btn btn-light-primary btn-sm font-weight-bolder dropdown-toggle"
                                       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                       onClick={handleClickSelect}>Loại dịch vụ</a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right"
                                         style={isShow ? {
                                             position: 'absolute',
                                             transform: 'translate3d(-95px, 33px, 0px)',
                                             top: 0,
                                             left: 0,
                                             willChange: 'transform',
                                             display: 'block'
                                         } : { display: "none" }}>
                                        <ul className="navi navi-hover">
                                            {
                                                typeVouchers && typeVouchers.map(type => {
                                                    return <li className="navi-item">
                                                        <a href="#" className="navi-link">
                                                            <span className="navi-text"
                                                                  onClick={() => handleClickType(type.type)}>{type.name}</span>
                                                        </a>
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body pt-2">
                            <div className="row">
                                {
                                    giftCards && giftCards.map(giftCard => <GiftCardItem key={giftCard.id}
                                                                                         type={typeVoucher}
                                                                                         giftCard={giftCard}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gift