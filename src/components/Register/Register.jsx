import React from 'react'
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
        if (data['biet-thu']) typeVouchers.push('biet-thu');
        if (data['chuyen-bay']) typeVouchers.push('chuyen-bay');
        if (data['dua-don']) typeVouchers.push('dua-don');
        if (data['khach-san']) typeVouchers.push('khach-san');
        if (data['nha-hang']) typeVouchers.push('nha-hang');
        if (data['thue-xe']) typeVouchers.push('thue-xe');
        if (data['tour']) typeVouchers.push('tour');

        const { username, password, name, email } = data;
        try {
            await AuthAPI.registerPartner({ username, password, name, email, typeVouchers });
            toast.success("Tạo tài khoản thành công !");
            navigate('/auth', { replace: true });
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
                                        <input type="checkbox" name="typeVouchers"{...register('chuyen-bay')} />
                                        <span></span>
                                        Chuyến bay
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('khach-san')} />
                                        <span></span>
                                        Khách sạn
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('dua-don')} />
                                        <span></span>
                                        Đưa đón sân bay
                                    </label>

                                </div>
                            </div>
                            <div className='form-group'>
                                <div className="checkbox-inline">
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers" {...register('biet-thu')} />
                                        <span></span>
                                        Biệt thự và căn hộ
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers" {...register('tour')} />
                                        <span></span>
                                        Tour du lịch
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers" {...register('thue-xe')} />
                                        <span></span>
                                        Thuê xe
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="typeVouchers"{...register('nha-hang')} />
                                        <span></span>
                                        Nhà hàng
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
                                    <Link to='/auth'>Đã có tài khoản</Link>
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