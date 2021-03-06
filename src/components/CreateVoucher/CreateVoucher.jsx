import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import VoucherPartnerApi from '../../api/voucherPartner.api';
import { toast } from "react-toastify";
import combineDescription from "../../helpers/combineDescription";
import { useNavigate } from "react-router-dom";

const CreateVoucher = props => {

    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [typeVouchers, setTypeVouchers] = useState([]);
    const [description, setDescription] = useState('');
    const [condition, setCondition] = useState({
        threshold: 0,
        discount: 0,
        maxAmount: 0
    });


    useEffect(() => {
        const listTypeVoucher = async () => {
            try {
                const { data } = await VoucherPartnerApi.getListTypeVouchers();
                setTypeVouchers(data.data.typeVouchers)

            } catch (e) {
                console.error(e);
            }
        };

        listTypeVoucher();

    }, []);

    useEffect(() => {
        setDescription(combineDescription(condition));
    }, [condition])

    const handleCharge = (e) => {
        // setVisible(e.target.value)
        if (e.target.value === 'Free') {
            setVisible(false)
        } else if (e.target.value === 'Charge') {
            setVisible(true)
        }
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = async (body) => {
        if (!visible) {
            body.amount = 0;
        }

        body.limitUse = Number(body.limitUse);
        body.amount = Number(body.amount);
        body.threshold = Number(body.threshold);
        body.discount = Number(body.discount);
        body.maxAmount = Number(body.maxAmount);
        body.imageUrl = null;
        if (!body.type) {
            body.type = typeVouchers[0].type;
        }

        try {
            await VoucherPartnerApi.createVoucher(body);
            navigate(`/partner/voucher/${body.type}`, { replace: true });
            toast.success("T???o voucher th??nh c??ng !");
        } catch (e) {
            toast.error(e.response.data.message);
        }

    };

    return (
        <div className="row">
            <div className='col-md-2'>

            </div>
            <div className="col-md-8">
                <div className="card card-custom gutter-b example example-compact">
                    <div className="card-header">
                        <h3 className="card-title">T???o voucher</h3>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    Ti??u ????? voucher
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control"
                                       placeholder="Ti??u ????? voucher" {...register('title')} required/>
                            </div>
                            <div className="form-group">
                                <label>
                                    M?? voucher
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control"
                                       placeholder="Nh???p m?? voucher" {...register('voucherCode')} required/>

                            </div>
                            <div className="form-group">
                                <label>
                                    S??? ng?????i c?? th??? s??? d???ng
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="number" value="100000" className="form-control"
                                       placeholder="" {...register('limitUse')} required/>

                            </div>
                            {<div className="form-group">
                                <label>Ch???n lo???i d???ch v???</label>
                                <select className="form-control" {...register("type")}>
                                    {
                                        typeVouchers && typeVouchers.map(type => <option
                                            value={type.type}>{type.name}</option>)
                                    }
                                </select>
                            </div>}
                            <div className="form-group">
                                <label>
                                    Ch???n ???nh
                                </label>
                                <input type="file" className="form-control"
                                       accept=".png, .jpg, .jpeg*" {...register('imageUrl')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    N???i dung
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea className="form-control"
                                          placeholder="Nh???p n???i dung..." {...register('content')} required/>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleSelect1">
                                            Ng?????ng ti???n ????? th???a ??i???u ki???n voucher
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="number" className="form-control form-control-solid" required
                                               placeholder="Ng?????ng ti???n ????? th???a ??i???u ki???n voucher"
                                               min='0' {...register('threshold', {
                                            onChange: (e) => {
                                                setCondition(prevState => {
                                                    return {
                                                        ...prevState,
                                                        threshold: e.target.value
                                                    }
                                                });

                                            }
                                        })} />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>S??? ti???n t???i ??a ???????c gi???m
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group input-group-solid">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">??</span>
                                            </div>
                                            <input type="number" className="form-control form-control-solid" required
                                                   placeholder="Nh???p s??? ti???n gi???m"
                                                   min='0' {...register('maxAmount', {
                                                onChange: (e) => {
                                                    setCondition(prevState => {
                                                        const maxAmount = e.target.value;
                                                        return {
                                                            ...prevState,
                                                            maxAmount,
                                                        }
                                                    });
                                                }
                                            })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>S??? ph???n tr??m ???????c gi???m
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group input-group-solid">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                            <input type="number" className="form-control form-control-solid" required
                                                   placeholder="Nh???p s??? ph???n tr??m gi???m" min='0'
                                                   max='100' {...register('discount', {
                                                onChange: e => {
                                                    const discount = e.target.value;
                                                    if (discount > 100 || discount < 0) {
                                                        toast.error("Ph???n tr??m ???????c gi???m kh??ng h???p l??? !");
                                                        return;
                                                    }
                                                    setCondition(prevState => {
                                                        return {
                                                            ...prevState,
                                                            discount
                                                        }
                                                    });
                                                }
                                            })} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="exampleSelect1">
                                            S??? ti???n ????? mua voucher
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-control" onChange={handleCharge}>
                                            <option value='Free'>Free</option>
                                            <option value='Charge'>C?? t??nh ph??</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {
                                        visible && (<div className="form-group">
                                            <label htmlFor="exampleSelect1">
                                                S??? ti???n ????? mua voucher
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                {...register('amount')}
                                                className="form-control"
                                                placeholder="Nh???p s??? ti???n..."
                                                min='10000'/>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-2 col-form-label">M?? t??? ??i???u ki???n</label>
                                <div className="col-10">
                                    <textarea className="form-control" rows={2} disabled value={description}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label class="col-2 col-form-label">Ng??y b???t ?????u</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" {...register('effectiveAt')} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label class="col-2 col-form-label">Ng??y h???t h???n</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" {...register('expirationAt')} />
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <input type='submit' className="btn btn-primary mr-2" value='T???o Voucher'/>
                        </div>
                    </form>
                </div>
            </div>
            <div className='col-md-2'>

            </div>
        </div>
    );
};

CreateVoucher.propTypes = {};

export default CreateVoucher;