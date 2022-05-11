import React from 'react';
import { Link } from 'react-router-dom';

const Login = props => {

	return (
        <div className="row">
            <div className="col-md-6">
                <div className="card card-custom gutter-b example example-compact">
                    <div className="card-header">
                        <h3 className="card-title">Đăng nhập tài khoản</h3>
                        
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label>
                                    Email hoặc số di động
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" required />
                            </div>	
                            <div className="form-group">
                                <label>
                                    Mật khẩu
                                    <span className="text-danger">*</span>
                                </label>
                                <input type="text" className="form-control" required />
                            </div>														
                            <div className='row'>
                                <div className='col-md-3'>
                                    <input type='submit' className="btn btn-primary mr-2" value='Đặng nhập'/>
                                </div>
                                <div className='col-md-9'>
                                    <div>Bạn chưa có tài khoản ?</div>
                                    <Link to="/register">Đăng ký tài khoản</Link>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
	);
};

export default Login;