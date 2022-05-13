import React from 'react'
import { useState } from "react";
import { useForm } from 'react-hook-form';
const DataCreateGift = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        if (type === true) {
            data.PercentDiscount = 0;
        } else {
            data.MoneyDiscount = 0;
        }
        console.log(data);
    }
    const [type, setTypedown] = useState(true);
    const handleChangeType = (e) => {
        if (e.target.value === "True") {
            setTypedown(true);
        } else {
            setTypedown(false);
        };
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">

                <div className="form-group">
                    <label>Tên gift card
                        <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Nhập tên voucher" {...register("nameGift", { required: true })} />
                    {errors.nameGift && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label>Nội dung
                        <span className="text-danger">*</span></label>
                    <textarea type="text" className="form-control" placeholder="Nhập nội dung voucher" {...register("des")} />
                </div>
                <div className="form-group">
                    <label>Mã gift
                        <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" placeholder="Nhập tên voucher" {...register("codeGift", { required: true })} />
                    {errors.codeGift && <span>This field is required</span>}
                </div>
                <div className='form-group'>
                    <label>Ảnh
                        <span className="text-danger">*</span>
                    </label>
                    <input type="file" className="form-control" accept=".png, .jpg, .jpeg*"{...register("imageName")} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1">Chọn loại
                        <span className="text-danger">*</span></label>
                    <select className="form-control" id="exampleSelect1" {...register("category", { required: true })}>
                        <option value="Chuyenbay" >Chuyến bay</option>
                        <option value="Khachsan" >Khách sạn</option>
                        <option value="DuaDon" >Đưa đón sân bay</option>
                        <option value="BietThu" >Biệt thự và căn hộ</option>
                        <option value="TraiNghiem" >Tour du lịch(Trải nghiệm)</option>
                        <option value="Thuexe" >Thuê xe</option>
                        <option value="NhaHan" >Nhà hàng</option>
                    </select>
                    {errors.category && <span>This field is required</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSelect1">Chọn loại
                        <span className="text-danger">*</span></label>
                    <select className="form-control" id="exampleSelect1" onChange={handleChangeType}>
                        <option value="True" >Monney Percent</option>
                        <option value="False" >Percent</option>
                    </select>
                </div>
                <div className="row">
                    {type === true ? (<div className="col-md-6">
                        <div className="form-group">
                            <label>Số tiền tối đa được giảm</label>
                            <div className="input-group input-group-solid">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">đ</span>
                                </div>
                                <input type="text" className="form-control form-control-solid" placeholder="Nhập số tiền giảm"{...register("MoneyDiscount")} />
                            </div>
                        </div>
                    </div>) : (<div className="col-md-6">
                        <div className="form-group">
                            <label>Số phần trăm được giảm</label>
                            <div className="input-group input-group-solid">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">%</span>
                                </div>
                                <input type="text" className="form-control form-control-solid" placeholder="Nhập số phần trăm giảm"{...register("PercentDiscount")} />
                            </div>
                        </div>
                    </div>)}


                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Điểm để đổi gift card</label>
                            <div className="input-group input-group-solid">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">P</span>
                                </div>
                                <input type="text" className="form-control form-control-solid" placeholder="Nhập số điểm" {...register("pointGift", { required: true })} />
                                {errors.pointGift && <span>This field is required</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="example-date-input" className="col-2 col-form-label">Start Date</label>
                    <div className="col-10">
                        <input className="form-control" type="date" defaultValue={Date.UTC} id="example-date-input"{...register('startDate', { required: true })} />
                        {errors.startDate && <span>This field is required</span>}
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="example-date-input" className="col-2 col-form-label">End Date</label>
                    <div className="col-10">
                        <input className="form-control" type="date" defaultValue={Date.UTC} id="example-date-input"{...register('endDate', { required: true })} />
                        {errors.endDate && <span>This field is required</span>}
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <button type="submit" className="btn btn-primary mr-2" >Tạo Gift Card</button>
                <button type="reset" className="btn btn-secondary">Hủy</button>
            </div>
        </form>

    )

}

export default DataCreateGift