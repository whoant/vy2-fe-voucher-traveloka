import React from 'react'

const DataVoucher = (props) => {

    const { categories, series, percent, Date } = props;

    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-custom gutter-b card-stretch">
                        <div className="card-body pt-4">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ki ki-bold-more-hor" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <ul className="navi navi-hover">
                                            <li className="navi-header font-weight-bold py-4">
                                                <span className="font-size-lg">Choose Label:</span>
                                                <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                            </li>
                                            <li className="navi-separator mb-3 opacity-70" />
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-success">Customer</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-danger">Partner</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-warning">Suplier</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-primary">Member</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-dark">Staff</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-separator mt-3 opacity-70" />
                                            <li className="navi-footer py-4">
                                                <a className="btn btn-clean font-weight-bold btn-sm" href="#">
                                                    <i className="ki ki-plus icon-sm" />Add new</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                        <img src="assets/media/project-logos/1.png" alt="image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{categories[0]}</a>
                                    <span className="text-muted font-weight-bold">Head of Development</span>
                                </div>
                            </div>
                            <p className="mb-7">I distinguish three main text objectives. First, your objective
                                <a href="#" className="text-primary pr-1">#xrs-54pq</a></p>
                            <div className="mb-7">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Số tiền giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{series[0]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Phần trăm giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{percent[0]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hạn:</span>
                                    <span className="text-muted font-weight-bold">{Date}</span>
                                </div>
                            </div>
                            <a href="#" className="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4">Sử dụng</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-custom gutter-b card-stretch">
                        <div className="card-body pt-4">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ki ki-bold-more-hor" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <ul className="navi navi-hover">
                                            <li className="navi-header pb-1">
                                                <span className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-shopping-cart-1" />
                                                    </span>
                                                    <span className="navi-text">Order</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-calendar-8" />
                                                    </span>
                                                    <span className="navi-text">Event</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-graph-1" />
                                                    </span>
                                                    <span className="navi-text">Report</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-rocket-1" />
                                                    </span>
                                                    <span className="navi-text">Post</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-writing" />
                                                    </span>
                                                    <span className="navi-text">File</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                        <img src="assets/media/project-logos/2.png" alt="image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{categories[1]}</a>
                                    <span className="text-muted font-weight-bold">PR Manager</span>
                                </div>
                            </div>
                            <p className="mb-7">I distinguish three main text objectives. First, your objective
                                <a href="#" className="text-primary pr-1">#xrs-54pq</a></p>
                            <div className="mb-7">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Số tiền giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{series[1]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Phần trăm giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{percent[1]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hạn:</span>
                                    <span className="text-muted font-weight-bold">{Date}</span>
                                </div>
                            </div>
                            <a href="#" className="btn btn-block btn-sm btn-light-danger font-weight-bolder text-uppercase py-4">Sử dụng</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-custom gutter-b card-stretch">
                        <div className="card-body pt-4">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ki ki-bold-more-hor" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <ul className="navi">
                                            <li className="navi-header font-weight-bold py-5">
                                                <span className="font-size-lg">Add New:</span>
                                                <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                            </li>
                                            <li className="navi-separator mb-3 opacity-70" />
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-shopping-cart-1" />
                                                    </span>
                                                    <span className="navi-text">Order</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="navi-icon flaticon2-calendar-8" />
                                                    </span>
                                                    <span className="navi-text">Members</span>
                                                    <span className="navi-label">
                                                        <span className="label label-light-danger label-rounded font-weight-bold">3</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="navi-icon flaticon2-telegram-logo" />
                                                    </span>
                                                    <span className="navi-text">Project</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="navi-icon flaticon2-new-email" />
                                                    </span>
                                                    <span className="navi-text">Record</span>
                                                    <span className="navi-label">
                                                        <span className="label label-light-success label-rounded font-weight-bold">5</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-separator mt-3 opacity-70" />
                                            <li className="navi-footer pt-5 pb-4">
                                                <a className="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                                                <a className="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                        <img src="assets/media/project-logos/3.png" alt="image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{categories[2]}</a>
                                    <span className="text-muted font-weight-bold">Python Developer</span>
                                </div>
                            </div>
                            <p className="mb-7">I distinguish three main text objectives. First, your objective
                                <a href="#" className="text-primary pr-1">#xrs-54pq</a></p>
                            <div className="mb-7">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Số tiền giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{categories[3]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Phần trăm giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{percent[2]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hạn:</span>
                                    <span className="text-muted font-weight-bold">{Date}</span>
                                </div>
                            </div>
                            <a href="#" className="btn btn-block btn-sm btn-light-info font-weight-bolder text-uppercase py-4">Sử dụng</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-custom gutter-b card-stretch">
                        <div className="card-body pt-4">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ki ki-bold-more-hor" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <ul className="navi navi-hover">
                                            <li className="navi-header font-weight-bold py-4">
                                                <span className="font-size-lg">Choose Label:</span>
                                                <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                            </li>
                                            <li className="navi-separator mb-3 opacity-70" />
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-success">Customer</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-danger">Partner</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-warning">Suplier</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-primary">Member</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-text">
                                                        <span className="label label-xl label-inline label-light-dark">Staff</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-separator mt-3 opacity-70" />
                                            <li className="navi-footer py-4">
                                                <a className="btn btn-clean font-weight-bold btn-sm" href="#">
                                                    <i className="ki ki-plus icon-sm" />Add new</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                        <img src="assets/media/project-logos/5.png" alt="image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{categories[4]}</a>
                                    <span className="text-muted font-weight-bold">Project Manager</span>
                                </div>
                            </div>
                            <p className="mb-7">I distinguish three main text objectives. First, your objective
                                <a href="#" className="text-primary pr-1">#xrs-54pq</a></p>
                            <div className="mb-7">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Số tiền giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{series[2]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Phần trăm giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{percent[3]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hạn:</span>
                                    <span className="text-muted font-weight-bold">{Date}</span>
                                </div>
                            </div>
                            <a href="#" className="btn btn-block btn-sm btn-light-success font-weight-bolder text-uppercase py-4">Sử dụng</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-custom gutter-b card-stretch">
                        <div className="card-body pt-4">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ki ki-bold-more-hor" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <ul className="navi navi-hover">
                                            <li className="navi-header pb-1">
                                                <span className="text-primary text-uppercase font-weight-bold font-size-sm">Add new:</span>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-shopping-cart-1" />
                                                    </span>
                                                    <span className="navi-text">Order</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-calendar-8" />
                                                    </span>
                                                    <span className="navi-text">Event</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-graph-1" />
                                                    </span>
                                                    <span className="navi-text">Report</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-rocket-1" />
                                                    </span>
                                                    <span className="navi-text">Post</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-writing" />
                                                    </span>
                                                    <span className="navi-text">File</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                        <img src="assets/media/project-logos/6.png" alt="image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{categories[5]}</a>
                                    <span className="text-muted font-weight-bold">Frontend Developer</span>
                                </div>
                            </div>
                            <p className="mb-7">I distinguish three main text objectives. First, your objective
                                <a href="#" className="text-primary pr-1">#xrs-54pq</a></p>
                            <div className="mb-7">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Số tiền giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{series[3]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Phần trăm giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{percent[4]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hạn:</span>
                                    <span className="text-muted font-weight-bold">{Date}</span>
                                </div>
                            </div>
                            <a href="#" className="btn btn-block btn-sm btn-light-info font-weight-bolder text-uppercase py-4">Sử dụng</a>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="card card-custom gutter-b card-stretch">
                        <div className="card-body pt-4">
                            <div className="d-flex justify-content-end">
                                <div className="dropdown dropdown-inline" data-toggle="tooltip" title="Quick actions" data-placement="left">
                                    <a href="#" className="btn btn-clean btn-hover-light-primary btn-sm btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="ki ki-bold-more-hor" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                                        <ul className="navi">
                                            <li className="navi-header font-weight-bold py-5">
                                                <span className="font-size-lg">Add New:</span>
                                                <i className="flaticon2-information icon-md text-muted" data-toggle="tooltip" data-placement="right" title="Click to learn more..." />
                                            </li>
                                            <li className="navi-separator mb-3 opacity-70" />
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="flaticon2-shopping-cart-1" />
                                                    </span>
                                                    <span className="navi-text">Order</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="navi-icon flaticon2-calendar-8" />
                                                    </span>
                                                    <span className="navi-text">Members</span>
                                                    <span className="navi-label">
                                                        <span className="label label-light-danger label-rounded font-weight-bold">3</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="navi-icon flaticon2-telegram-logo" />
                                                    </span>
                                                    <span className="navi-text">Project</span>
                                                </a>
                                            </li>
                                            <li className="navi-item">
                                                <a href="#" className="navi-link">
                                                    <span className="navi-icon">
                                                        <i className="navi-icon flaticon2-new-email" />
                                                    </span>
                                                    <span className="navi-text">Record</span>
                                                    <span className="navi-label">
                                                        <span className="label label-light-success label-rounded font-weight-bold">5</span>
                                                    </span>
                                                </a>
                                            </li>
                                            <li className="navi-separator mt-3 opacity-70" />
                                            <li className="navi-footer pt-5 pb-4">
                                                <a className="btn btn-light-primary font-weight-bolder btn-sm" href="#">More options</a>
                                                <a className="btn btn-clean font-weight-bold btn-sm d-none" href="#" data-toggle="tooltip" data-placement="right" title="Click to learn more...">Learn more</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-7">
                                <div className="flex-shrink-0 mr-4">
                                    <div className="symbol symbol-circle symbol-lg-75">
                                        <img src="assets/media/project-logos/7.png" alt="image" />
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="#" className="text-dark font-weight-bold text-hover-primary font-size-h4 mb-0">{categories[6]}</a>
                                    <span className="text-muted font-weight-bold">App Developer</span>
                                </div>
                            </div>
                            <p className="mb-7">I distinguish three main text objectives. First, your objective
                                <a href="#" className="text-primary pr-1">#xrs-54pq</a></p>
                            <div className="mb-7">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Số tiền giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{series[4]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-cente my-1">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Phần trăm giảm giá:</span>
                                    <a href="#" className="text-muted text-hover-primary">{percent[5]}</a>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="text-dark-75 font-weight-bolder mr-2">Ngày hết hạn:</span>
                                    <span className="text-muted font-weight-bold">{Date}</span>
                                </div>
                            </div>
                            <a href="#" className="btn btn-block btn-sm btn-light-warning font-weight-bolder text-uppercase py-4">Sử dụng</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-custom">
                <div className="card-body py-7">
                    <div className="d-flex justify-content-between align-items-center flex-wrap">
                        <div className="d-flex flex-wrap mr-3">
                            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                                <i className="ki ki-bold-double-arrow-back icon-xs" />
                            </a>
                            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                                <i className="ki ki-bold-arrow-back icon-xs" />
                            </a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">1</a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary active mr-2 my-1">2</a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">3</a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">4</a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">5</a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">6</a>
                            <a href="#" className="btn btn-icon btn-sm border-0 btn-hover-primary mr-2 my-1">...</a>
                            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                                <i className="ki ki-bold-arrow-next icon-xs" />
                            </a>
                            <a href="#" className="btn btn-icon btn-sm btn-light-primary mr-2 my-1">
                                <i className="ki ki-bold-double-arrow-next icon-xs" />
                            </a>
                        </div>
                        <div className="d-flex align-items-center">
                            <select className="form-control form-control-sm text-primary font-weight-bold mr-4 border-0 bg-light-primary" style={{ width: '75px' }}>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={30}>30</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                            <span className="text-muted">Displaying 10 of 230 records</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataVoucher