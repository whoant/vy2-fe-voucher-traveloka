import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import AuthAPI from '../../api/auth.api';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        if (data == null) {
            toast.error("Vui lòng nhập đủ thông tin !");
            return;
        }
        const typeVouchers = [];
        if (data['FLIGHT']) typeVouchers.push('FLIGHT');
        if (data['HOTEL']) typeVouchers.push('HOTEL');
        if (data['AIRPORT']) typeVouchers.push('AIRPORT');
        if (data['APART']) typeVouchers.push('APART');
        if (data['XPERIENCE']) typeVouchers.push('XPERIENCE');
        if (data['CARRENTAL']) typeVouchers.push('CARRENTAL');
        if (data['EATS']) typeVouchers.push('EATS');
        if (data['COMBO']) typeVouchers.push('COMBO');

        const { username, password, name, email } = data;
        try {
            await AuthAPI.registerPartner({ username, password, name, email, typeVouchers });
            toast.success("Tạo tài khoản thành công !");
            navigate('/partner/auth', { replace: true });
        } catch (e) {
            toast.error(e.response.data.message);
        }
    };

    return (
        <div className="row">
            <div className='col-md-3'></div>
            <div className="col-md-6">
                <div className="card card-custom gutter-b example example-compact">
                    <div className="card-header">
                        <h3 className="card-title">Đăng kí tài khoản</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    Tên doanh nghiệp
                                    <span className="text-danger">*</span>
                                </label>
                                <input type='name' className="form-control" required {...register('name')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Email
                                    <span className="text-danger">*</span>
                                </label>
                                <input type='email' className="form-control" required {...register('email')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Tài khoản
                                    <span className="text-danger">*</span>
                                </label>
                                <input type='text' className="form-control" required {...register('username')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Mật khẩu
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="password" className="form-control" required {...register('password')} />
                            </div>
                            <div className='form-group'>
                                <div className="checkbox-inline">
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('FLIGHT')} />
                                        <span></span>
                                        Chuyến bay
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('HOTEL')} />
                                        <span></span>
                                        Khách sạn
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('AIRPORT')} />
                                        <span></span>
                                        Đưa đón sân bay
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers" {...register('APART')} />
                                        <span></span>
                                        Biệt thự và căn hộ
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers" {...register('XPERIENCE')} />
                                        <span></span>
                                        Tour
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers" {...register('CARRENTAL')} />
                                        <span></span>
                                        Thuê xe
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('EATS')} />
                                        <span></span>
                                        Nhà hàng
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('COMBO')} />
                                        <span></span>
                                        Combo tiết kiệm
                                    </label>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <input type='submit' className="btn btn-primary mr-2" value='Đăng kí'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <Link to='/partner/auth'>Đã có tài khoản</Link>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className='col-md-3'></div>
        </div>
    )
}

export default Register