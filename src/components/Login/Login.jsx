import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = props => {

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
                        <h3 className="card-title">Đăng nhập tài khoản</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
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
                            <div className='row'>
                                <div className='col-md-3'>
                                    <Link to="/main"><input type='submit' className="btn btn-primary mr-2" value='Đăng nhập' /></Link>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div className='col-md-3'></div>
        </div>
    );
};

export default Login;