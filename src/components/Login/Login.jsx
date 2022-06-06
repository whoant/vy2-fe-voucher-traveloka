import React, { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import AuthApi from "../../api/auth.api";

const Login = props => {
    const { register, handleSubmit } = useForm();
    const [authParam] = useSearchParams()
    const navigate = useNavigate();


    useEffect(() => {
        const loginToken = async (token, appId) => {
            try {
                const { data } = await AuthApi.loginPartnerUsingToken(token, appId);
                localStorage.setItem('partner', JSON.stringify(data.data));
                navigate('/partner/create-voucher', { replace: true });
            } catch (e) {
                console.log(e);
                toast.error(e.response.data.message);
            }
        }


        const token = authParam.get('token');
        const appId = authParam.get('appId');
        if (!token) return;
        loginToken(token, appId);

    }, []);

    const onSubmit = async body => {
        window.location = `https://profile.vinhphancommunity.xyz/Login?redirect=${window.location.href}`;
        return;
        /*
        if (!body) {
            toast.error("Vui lòng kiểm tra lại thông tin !");
            return;
        }

        try {
            const { data } = await AuthApi.loginPartner(body);
            localStorage.setItem('partner', JSON.stringify(data.data));
            navigate('/partner/create-voucher', { replace: true });
        } catch (e) {
            console.log(e);
            toast.error(e.response.data.message);
        }
         */
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
                            <div className='row'>
                                <div className='col-md-3'>
                                    <input type='submit' className="btn btn-primary mr-2"
                                           value='Đăng nhập'/>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <a href="https://profile.vinhphancommunity.xyz/signup">Tạo tài khoản</a>
                                    {/*<Link to='/partner/register'>Tạo tài khoản</Link>*/}
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