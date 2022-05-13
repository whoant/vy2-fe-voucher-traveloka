import React from 'react'
import DataLogin from '../../components/LoginPartner/DataLogin'
const LoginPartner = () => {
    return (
        <div className='header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable' id='kt_body'>
            <div className="d-flex flex-column flex-root">
                <div className="login login-5 login-signin-on d-flex flex-row-fluid" id="kt_login">
                    <div className="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid" style={{ backgroundImage: 'url(assets/media/bg/bg-2.jpg)' }}>
                        <div className="login-form text-center text-white p-7 position-relative overflow-hidden">
                            <div className="d-flex flex-center mb-15">
                                <a href="#">
                                    <img src="assets/media/logos/logo-letter-13.png" className="max-h-75px" alt="" />
                                </a>
                            </div>
                            <DataLogin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPartner