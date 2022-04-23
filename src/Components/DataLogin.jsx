import React from 'react'
import { useState } from "react";

const DataLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        console.log(email, password);
    };
    return (
        <div className="login-signin">
            <div className="mb-20">
                <h3 className="opacity-40 font-weight-normal">Sign In To Admin</h3>
                <p className="opacity-40">Enter your details to login to your account:</p>
            </div>
            <form className="form" id="kt_login_signin_form" >
                <div className="form-group">
                    <input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="text" placeholder="Email" name="username" autoComplete="off" value={email} onChange={handleEmailChange} />
                </div>
                <div className="form-group">
                    <input className="form-control h-auto text-white bg-white-o-5 rounded-pill border-0 py-4 px-8" type="password" placeholder="Password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div className="form-group d-flex flex-wrap justify-content-between align-items-center px-8 opacity-60">
                    <div className="checkbox-inline">
                        <label className="checkbox checkbox-outline checkbox-white text-white m-0">
                            <input type="checkbox" name="remember" />
                            <span />Remember me</label>
                    </div>
                    <a href="javascript:;" id="kt_login_forgot" className="text-white font-weight-bold">Forget Password ?</a>
                </div>
                <div className="form-group text-center mt-10">
                    <button id="kt_login_signin_submit" className="btn btn-pill btn-primary opacity-90 px-15 py-3" type='submit' onClick={handleLogin}>Sign In</button>
                </div>
            </form>
            <div className="mt-10">
                <span className="opacity-40 mr-4">Don't have an account yet?</span>
                <a href="javascript:;" id="kt_login_signup" className="text-white opacity-30 font-weight-normal">Sign Up</a>
            </div>
        </div>
    )
}
export default DataLogin