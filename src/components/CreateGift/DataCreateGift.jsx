import React, { useEffect } from 'react'
import { useState } from "react";
import { useForm } from 'react-hook-form';
import "react-toastify/dist/ReactToastify.min.css"
import { toast } from 'react-toastify';
import GiftCardPartnerApi from "../../api/giftCardPartner.api";
import combineDescription from '../../helpers/combineDescription';
import VoucherPartnerApi from "../../api/voucherPartner.api";

const DataCreateGift = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [description, setDescription] = useState('');
    const [typeVouchers, setTypeVouchers] = useState([]);
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

    const onSubmit = async (body) => {
        body.limitUse = Number(body.limitUse);
        body.threshold = Number(body.threshold);
        body.discount = Number(body.discount);
        body.pointExchange = Number(body.pointExchange);
        body.maxAmount = Number(body.maxAmount);
        body.imageUrl = null;
        if (!body.type) {
            body.type = typeVouchers[0].type;
        }

        try {
            await GiftCardPartnerApi.createGiftCard(body);
            toast.success("Tạo thẻ thành công !");
        } catch (e) {
            toast.error(e.response.data.message);
        }

        console.log(body);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">

                <div className="form-group">
                    <label>Tiêu đề thẻ quà tặng
                        <span className="text-danger">*</span></label>
                    <input type="text" className="form-control"
                           placeholder="Nhập tên voucher" {...register("title", { required: true })} />
                    {errors.pointGift && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label>Nội dung
                        <span className="text-danger">*</span></label>
                    <textarea type="text" className="form-control"
                              placeholder="Nhập nội dung voucher" {...register("content")} />
                </div>
                <div className="form-group">
                    <label>Mã thẻ quà tặng
                        <span className="text-danger">*</span></label>
                    <input type="text" className="form-control"
                           placeholder="Nhập tên voucher" {...register("giftCardCode", { required: true })} />
                </div>
                <div className='form-group'>
                    <label>Ảnh
                        <span className="text-danger">*</span>
                    </label>
                    <input type="file" className="form-control" accept=".png, .jpg, .jpeg*"{...register("imageUrl")} />
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
                        Số người có thể sử dụng
                        <span className="text-danger">*</span>
                    </label>
                    <input type="number" value="100000" className="form-control"
                           placeholder="" {...register('limitUse')} required/>

                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1">
                        Số điểm để đổi voucher
                        <span className="text-danger">*</span>
                    </label>
                    <input
                        {...register('pointExchange')}
                        className="form-control"
                        placeholder="Nhập số điểm..."
                        min='10000'/>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleSelect1">
                        Ngưỡng tiền để thỏa điều kiện voucher
                        <span className="text-danger">*</span>
                    </label>
                    <input type="number" className="form-control form-control-solid" required
                           placeholder="Ngưỡng tiền để thỏa điều kiện thẻ"
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
                        <label>Số phần trăm được giảm
                            <span className="text-danger">*</span>
                        </label>
                        <div className="input-group input-group-solid">
                            <div className="input-group-prepend">
                                <span className="input-group-text">%</span>
                            </div>
                            <input type="number" className="form-control form-control-solid" required
                                   placeholder="Nhập số phần trăm giảm" min='0'
                                   max='100' {...register('discount', {
                                onChange: e => {
                                    const discount = e.target.value;
                                    if (discount > 100 || discount < 0) {
                                        toast.error("Phần trăm được giảm không hợp lệ !");
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

                <div className="form-group row">
                    <label className="col-2 col-form-label">Mô tả điều kiện</label>
                    <div className="col-10">
                        <textarea className="form-control" rows={2} disabled value={description}/>
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
                <button type="submit" className="btn btn-primary mr-2">Tạo thẻ quà tặng</button>

            </div>
        </form>

    )

}

export default DataCreateGift