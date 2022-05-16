import React, { useEffect, useState } from 'react';
import './header/base/light.css';
import './header/menu/light.css';
import './brand/dark.css';
import './aside/dark.css';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Layout = props => {
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const storageUser = localStorage.getItem('user');
        if (!storageUser) {
            navigate('/auth', { replace: true });
        }
        setUser(JSON.parse(storageUser));
    }, [])


    const handleLogout = () => {
        localStorage.removeItem('user');
        toast.success("Đăng xuất thành công !");
        navigate('/auth', { replace: true });
    };

    const handleShowQuickUser = () => {
        setIsShow(prevState => !prevState);
    }

    return (
        <div
            className="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
            <div className="d-flex flex-column flex-root">
                <div className="d-flex flex-row flex-column-fluid page">
                    <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
                        <div className="brand flex-column-auto" id="kt_brand">
                            <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
								<span className="svg-icon svg-icon svg-icon-xl">
									<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                                         width="24px"
                                         height="24px" viewBox="0 0 24 24" version="1.1">
										<g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
											<polygon points="0 0 24 0 24 24 0 24"/>
											<path
                                                d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                                                fill="#000000" fillRule="nonzero"
                                                transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)"/>
											<path
                                                d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                                                fill="#000000" fillRule="nonzero" opacity="0.3"
                                                transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)"/>
										</g>
									</svg>
								</span>
                            </button>
                        </div>
                        <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                            <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical={1}
                                 data-menu-scroll={1}
                                 data-menu-dropdown-timeout={500}>
                                <ul className="menu-nav">
                                    <li className="menu-item" aria-haspopup="true">
                                        <a href="index.html" className="menu-link">
                                            <span className="menu-text">Dashboard</span>
                                        </a>
                                    </li>

                                    <li className="menu-item" aria-haspopup="true">
                                        <Link to="/voucher" className="menu-link"><span className="menu-text">Danh sách voucher</span></Link>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <Link to="/create-voucher" className="menu-link"><span className="menu-text">Tạo voucher</span></Link>
                                    </li>

                                    <li className="menu-item" aria-haspopup="true">
                                        <Link to="/list-gift-partner" className="menu-link"><span className="menu-text">List Gift Partner</span></Link>
                                    </li>
                                    <li className="menu-item" aria-haspopup="true">
                                        <Link to="/create-gift-partner" className="menu-link"><span
                                            className="menu-text">Create Gift Partner</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <div id="kt_header" className="header header-fixed">
                            <div className="container-fluid d-flex align-items-stretch justify-content-between">
                                <div className="header-menu-wrapper header-menu-wrapper-left"
                                     id="kt_header_menu_wrapper">
                                    <div id="kt_header_menu"
                                         className="header-menu header-menu-mobile header-menu-layout-default">
                                        <ul className="menu-nav">
                                            <li className="menu-item menu-item-submenu menu-item-rel menu-item-active"
                                                data-menu-toggle="click" aria-haspopup="true">
                                                <a href="javascript:" className="menu-link menu-toggle">
                                                    <span className="menu-text">Thống kê</span>
                                                    <i className="menu-arrow"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="topbar">
                                    <div className="topbar-item">
                                        <div
                                            className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
                                            id="kt_quick_user_toggle" onClick={handleShowQuickUser}>
											<span
                                                className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Chào,</span>
                                            <span
                                                className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">{user.name}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                            <div className="d-flex flex-column-fluid">
                                <div className="container">
                                    <Outlet/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="kt_quick_user" className="offcanvas offcanvas-right p-10 offcanvas-on"
                 style={isShow ? { height: '300px' } : { display: 'none' }}>
                {/*begin::Header*/}
                <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
                    <h3 className="font-weight-bold m-0">User Profile</h3>
                    <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close"
                       onClick={handleShowQuickUser}>
                        <i className="ki ki-close icon-xs text-muted"/>
                    </a>
                </div>
                <div className="offcanvas-content pr-5 mr-n5 scroll ps ps--active-y"
                     style={{ height: '500px', overflow: 'hidden' }}>
                    <div className="d-flex align-items-center mt-5">
                        <div className="symbol symbol-100 mr-5">
                            <div className="symbol-label"
                                 style={{ backgroundImage: 'url("assets/media/users/300_21.jpg")' }}/>
                            <i className="symbol-badge bg-success"/>
                        </div>
                        <div className="d-flex flex-column">
                            <a href="#"
                               className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">{user.name}</a>

                            <div className="navi mt-2">
                                <a href="#" className="navi-item">
                  <span className="navi-link p-0 pb-2">
                    <span className="navi-icon mr-1">
                      <span className="svg-icon svg-icon-lg svg-icon-primary">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px"
                               height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24}/>
                            <path
                                d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                fill="#000000"/>
                            <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5"/>
                          </g>
                        </svg>
                      </span>
                    </span>
                    <span className="navi-text text-muted text-hover-primary">{user.email}</span>
                  </span>
                                </a>
                                <a href="#" onClick={handleLogout}
                                   className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign
                                    Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Layout;