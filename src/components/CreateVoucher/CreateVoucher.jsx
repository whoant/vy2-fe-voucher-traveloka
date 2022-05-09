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
                                            <option value='Free'>Free</option>
                                            <option value='Charge'>Có tính phí</option>
                                        </select>
                                        <input type={visible}  {...register('Fee')}className="form-control" placeholder="Nhập số tiền..." min='10000' />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label>* Ngày bẳt đầu:</label>
                                    <select className="form-control" required name="billing_card_exp_day" {...register('StartDay')}>
                                        <option value="">Chọn</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>* Tháng bắt đầu:</label>
                                    <select className="form-control" required name="billing_card_exp_month" {...register('StartMonth')}>
                                        <option value="">Chọn</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>* Năm bắt đầu:</label>
                                    <select className="form-control" required name="billing_card_exp_year" {...register('StartYear')}>
                                        <option value="">Chọn</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                                
                            </div>
                            <div className="form-group row">
                                <div className="col-md-4">
                                    <label>* Ngày hết hạn:</label>
                                    <select className="form-control" required name="billing_card_exp_day" {...register('EndDay')}>
                                        <option value="">Chọn</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>* Tháng hết hạn:</label>
                                    <select className="form-control" required name="billing_card_exp_month" {...register('EndMonth')}>
                                        <option value="">Chọn</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label>* Năm hết hạn:</label>
                                    <select className="form-control" required name="billing_card_exp_year" {...register('EndYear')}>
                                        <option value="">Chọn</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021">2021</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
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