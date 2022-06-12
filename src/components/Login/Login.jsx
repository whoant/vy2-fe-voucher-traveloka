import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from "react-toastify";
import AuthApi from "../../api/auth.api";
import Constants from "../../constants";

const Login = props => {
    const [appId, setAppId] = useState('VY03');
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

    const handleChangeApp = (e) => {
        setAppId(e.target.value)
    }

    const handleClickLogin = () => {
        window.location.href = Constants.END_POINT_APP[appId].PARTNER.LOGIN;
        return;
    }

    const handleClickRegister = () => {
        window.location.href = Constants.END_POINT_APP[appId].PARTNER.REGISTER;
        return;
    }

    return (
        <div className="row">
            <div className='col-md-3'></div>
            <div className="col-md-6">
                <div className="card card-custom gutter-b example example-compact">
                    <div className="card-header">
                        <h3 className="card-title">Đăng nhập tài khoản</h3>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">
                                        App ID
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select className="form-control" onChange={handleChangeApp}>
                                        <option value='VY03'>VY 03</option>
                                        <option value='VY04'>VY 04</option>
                                        <option value='VY01'>VY 01</option>
                                        <option value='VY02'>VY 02</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <input type='submit' className="btn btn-primary mr-2"
                                       value='Đăng nhập' onClick={handleClickLogin}/>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <a href="#" onClick={handleClickRegister}>Tạo
                                    tài khoản</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-3'></div>
        </div>
    );
};

export default Login;