import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import VoucherPartnerApi from '../../api/voucherPartner.api';
import { toast } from "react-toastify";

const CreateVoucher = props => {

    const [visible, setVisible] = useState(false);
    const [typeVouchers, setTypeVouchers] = useState([]);


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
            toast.success("Tạo voucher thành công !");
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
                        <h3 className="card-title">Tạo voucher</h3>

                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    Tiêu đề voucher
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control"
                                       placeholder="Tiêu đề voucher" {...register('title')} required/>
                            </div>
                            <div className="form-group">
                                <label>
                                    Mã voucher
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control"
                                       placeholder="Nhập mã voucher" {...register('voucherCode')} required/>

                            </div>
                            <div className="form-group">
                                <label>
                                    Số người có thể sử dụng
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="number" value="100000" className="form-control"
                                       placeholder="" {...register('limitUse')} required/>

                            </div>
                            {<div className="form-group">
                                <label>Chọn loại dịch vụ</label>
                                <select className="form-control" {...register("type")}>
                                    {
                                        typeVouchers && typeVouchers.map(type => <option
                                            value={type.type}>{type.name}</option>)
                                    }
                                </select>
                            </div>}
                            <div className="form-group">
                                <label>
                                    Chọn ảnh
                                </label>
                                <input type="file" className="form-control"
                                       accept=".png, .jpg, .jpeg*" {...register('imageUrl')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Nội dung
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea className="form-control"
                                          placeholder="Nhập nội dung..." {...register('content')} required/>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleSelect1">
                                            Ngưỡng tiền để thỏa điều kiện voucher
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="number" className="form-control form-control-solid" required
                                               placeholder="Ngưỡng tiền để thỏa điều kiện voucher"
                                               min='0' {...register('threshold')} />

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Số tiền tối đa được giảm
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group input-group-solid">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">đ</span>
                                            </div>
                                            <input type="number" className="form-control form-control-solid" required
                                                   placeholder="Nhập số tiền giảm"
                                                   min='0' {...register('maxAmount')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Số phần trăm được giảm
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group input-group-solid">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">%</span>
                                            </div>
                                            <input type="number" className="form-control form-control-solid" required
                                                   placeholder="Nhập số phần trăm giảm" min='0'
                                                   max='100' {...register('discount')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="exampleSelect1">
                                            Số tiền để mua voucher
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-control" onChange={handleCharge}>
                                            <option value='Free'>Free</option>
                                            <option value='Charge'>Có tính phí</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    {
                                        visible && (<div className="form-group">
                                            <label htmlFor="exampleSelect1">
                                                Số tiền để mua voucher
                                                <span className="text-danger">*</span>
                                            </label>
                                            <input
                                                {...register('amount')}
                                                className="form-control"
                                                placeholder="Nhập số tiền..."
                                                min='10000'/>
                                        </div>)
                                    }
                                </div>
                            </div>
                            <div className="form-group row">
                                <label class="col-2 col-form-label">Ngày bắt đầu</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" {...register('effectiveAt')} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label class="col-2 col-form-label">Ngày hết hạn</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" {...register('expirationAt')} />
                                </div>
                            </div>
                        </div>

                        <div className="card-footer">
                            <input type='submit' className="btn btn-primary mr-2" value='Tạo Voucher'/>
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