import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateVoucher = props => {

    const [visible, setVisible] = useState('hidden');
    const handleCharge = (e) => {
        // setVisible(e.target.value)
        if(e.target.value === 'Free'){
            setVisible('hidden')
        } else if (e.target.value === 'Charge'){
            setVisible('number')
        }
        console.log(e.target.value);
    }

    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        if (visible === 'hidden') {
            data.Fee = 0;
        }
        console.log(data);
    };

    return (
        <div className="row">
            <div className="col-md-8">
                <div className="card card-custom gutter-b example example-compact">
                    <div className="card-header">
                        <h3 className="card-title">Tạo voucher mới</h3>
                        
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    Tên voucher
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" placeholder="Nhập tên voucher" {...register('VoucherName')} required />
                            </div>	
                            <div className="form-group">
                                <label>
                                    Mã voucher
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" placeholder="Nhập mã voucher" {...register('VoucherCode')} required />
                            </div>														
                            {/* <div className="form-group">
                                <label>Chọn loại dịch vụ</label>
                                <select className="form-control" {...register("VoucherType")}>
                                    <option>Chuyến bay</option>
                                    <option>Khách sạn</option>
                                    <option>Đưa đón sân bay</option>
                                    <option>Biệt thự và căn hộ</option>
                                    <option>Tour du lịch(Trải nghiệm)</option>
                                    <option>Thuê xe</option>
                                    <option>Nhà hàng</option>
                                </select>
                            </div> */}
                            <div className="form-group">
                                <label>
                                    Chọn ảnh
                                </label>
                                <input type="file" className="form-control" accept=".png, .jpg, .jpeg*" {...register('VoucherImage')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Nội dung
                                    <span className="text-danger">*</span>
                                </label>
                                <textarea className="form-control" placeholder="Nhập nội dung..." {...register('VoucherContent')} required />
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Số tiền tối đa được giảm
                                            <span className="text-danger">*</span>
                                        </label>
                                        <div className="input-group input-group-solid">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">đ</span>
                                            </div>
                                            <input type="number" className="form-control form-control-solid" required placeholder="Nhập số tiền giảm" min='5000' {...register('MaxDiscount')} />
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
                                            <input type="number" className="form-control form-control-solid" required placeholder="Nhập số phần trăm giảm" min='1' max='99' {...register('DiscountPercent')} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Số lượng sử dụng
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type='number' className="form-control" required placeholder="Nhập số lượng sử dụng" min='10' {...register('UseLimit')} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="exampleSelect1">    
                                            Số tiền để mua voucher
                                            <span className="text-danger">*</span>
                                        </label>
                                        <select className="form-control" onChange={handleCharge} 
                                            // {...register('Fee')} 
                                        >
                                            <option value='Free' >Free</option>
                                            <option value='Charge'>Có tính phí</option>
                                        </select>
                                        <input 
                                            type={visible} 
                                            {...register('Fee')} 
                                            className="form-control"
                                            placeholder="Nhập số tiền..." 
                                            min='10000' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label class="col-2 col-form-label">Ngày bắt đầu</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" {...register('StartDay')}  />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label class="col-2 col-form-label">Ngày hết hạn</label>
                                <div class="col-10">
                                    <input class="form-control" type="date" {...register('EndDay')} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="card-footer">
                            <input type='submit' className="btn btn-primary mr-2" value='Tạo Voucher'/>
                            <input type="reset" className="btn btn-danger" value='Hủy (Xóa thông tin đã nhập)'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

CreateVoucher.propTypes = {
    
};

export default CreateVoucher;