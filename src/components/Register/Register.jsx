import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (data != null) {

        }
        console.log(data);
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
                                    Họ và tên
                                    <span className="text-danger">*</span>
                                </label>
                                <input type='name' className="form-control" required {...register('Name')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Email
                                    <span className="text-danger">*</span>
                                </label>
                                <input type='email' className="form-control" required {...register('Email')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Mật khẩu
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="password" className="form-control" required {...register('Password')} />
                            </div>
                            <div className="form-group">
                                <label>
                                    Nhập lại mật khẩu
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="password" className="form-control" required {...register('RePassword')} />
                            </div>
                            <div className='form-group'>
                                <div className="checkbox-inline">
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes1"{...register('ChuyenBay')} />
                                        <span></span>
                                        Chuyến bay
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes2"{...register('Khachsan')} />
                                        <span></span>
                                        Khách sạn
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes3"{...register('Duadon')} />
                                        <span></span>
                                        Đưa đón sân bay
                                    </label>

                                </div>
                            </div>
                            <div className='form-group'>
                                <div className="checkbox-inline">
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes4" {...register('Bietthu')} />
                                        <span></span>
                                        Biệt thự và căn hộ
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes5" {...register('Tour')} />
                                        <span></span>
                                        Tour du lịch
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes6" {...register('Thuexe')} />
                                        <span></span>
                                        Thuê xe
                                    </label>
                                    <label className="checkbox">
                                        <input type="checkbox" name="Checkboxes7"{...register('NhaHang')} />
                                        <span></span>
                                        Nhà hàng
                                    </label>

                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <input type='submit' className="btn btn-primary mr-2" value='Đăng kí' />
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