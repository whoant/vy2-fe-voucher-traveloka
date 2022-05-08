import React from 'react'

const Gift = () => {
    return (
        <div className='container' data-layout='container'>
            <div className='content'>
                <div className='card-deck'>
                    <div className='card mb-3 overflow-hidden' style={{ minWidth: '12rem' }}>
                        <div className='bg-holder bg-card' style={{ backgroundImage: 'url(/assets/img/illustrations/corner-1.png)' }}>
                        </div>
                        <div className='card-body position-relative'>
                            <h6>Tổng số gift <span className='badge badge-soft-info rounded-capsule ml-2'>Toàn bộ</span></h6>
                            <div className='display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-warning' data-countup='{&quot;count&quot;:50,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}'>50</div><a className='font-weight-semi-bold fs--1 text-nowrap' href='#!'>Xem toàn bộ<span className='fas fa-angle-right ml-1' data-fa-transform='down-1' /></a>
                        </div>
                    </div>
                    <div className='card mb-3 overflow-hidden' style={{ minWidth: '12rem' }}>
                        <div className='bg-holder bg-card' style={{ backgroundImage: 'url(/assets/img/illustrations/corner-2.png)' }}>
                        </div>
                        <div className='card-body position-relative'>
                            <h6>Số gift đang hoạt động<span className='badge badge-soft-success rounded-capsule ml-2'>Cho phép</span></h6>
                            <div className='display-4 fs-4 mb-2 font-weight-normal text-sans-serif text-info' data-countup='{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}'>25</div><a className='font-weight-semi-bold fs--1 text-nowrap' href='#!'>Xem toàn bộ<span className='fas fa-angle-right ml-1' data-fa-transform='down-1' /></a>
                        </div>
                    </div>
                    <div className='card mb-3 overflow-hidden' style={{ minWidth: '12rem' }}>
                        <div className='bg-holder bg-card' style={{ backgroundImage: 'url(/assets/img/illustrations/corner-3.png)' }}>
                        </div>
                        <div className='card-body position-relative'>
                            <h6>Số gift hết hạn <span className='badge badge-soft-danger rounded-capsule ml-2'>Hết hạn</span></h6>
                            <div className='display-4 fs-4 mb-2 font-weight-normal text-sans-serif' data-countup='{&quot;count&quot;:25,&quot;format&quot;:&quot;comma&quot;,&quot;prefix&quot;:&quot;&quot;}'>25</div><a className='font-weight-semi-bold fs--1 text-nowrap' href='#!'>Xem toàn bộ<span className='fas fa-angle-right ml-1' data-fa-transform='down-1' /></a>
                        </div>
                    </div>
                </div>
                <div className='card mb-3'>
                    <div className='card-header'>
                        <div className='row align-items-center justify-content-between'>
                            <div className='col-6 col-sm-auto d-flex align-items-center pr-0'>
                                <h5 className='fs-0 mb-0 text-nowrap py-2 py-xl-0'>Danh sách gift</h5>
                            </div>
                            <div className='col-6 col-sm-auto ml-auto text-right pl-0'>
                                <div className='d-none' id='purchases-actions'>
                                    <div className='input-group input-group-sm'>
                                        <select className='custom-select cus' aria-label='Bulk actions'>
                                            <option selected>Hành động</option>
                                            <option value='Refund'>Hoàn tiền</option>
                                            <option value='Delete'>Xóa</option>
                                            <option value='Archive'>Lưu trữ</option>
                                        </select>
                                        <button className='btn btn-falcon-default btn-sm ml-2' type='button'>Áp dụng</button>
                                    </div>
                                </div>
                                <div id='dashboard-actions'>
                                    <a href='/actions/themkey.php'><button className='btn btn-falcon-default btn-sm' type='button'><span className='fas fa-plus' data-fa-transform='shrink-3 down-2' /><span className='d-none d-sm-inline-block ml-1'>Thêm key</span></button></a>
                                    <button className='btn btn-falcon-default btn-sm mx-2' type='button'><span className='fas fa-filter' data-fa-transform='shrink-3 down-2' /><span className='d-none d-sm-inline-block ml-1'>Bộ lọc</span></button>
                                    <button className='btn btn-falcon-default btn-sm' type='button'><span className='fas fa-external-link-alt' data-fa-transform='shrink-3 down-2' /><span className='d-none d-sm-inline-block ml-1'>Xuất danh sách</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mx-1'>
                        <div className='col-sm-12 col-md-6 px-3'>
                            <div id='DataTables_Table_0_filter' className='dataTables_filter'>
                                <label>Search:
                                    <input type='search' className='form-control form-control-sm' placeholder aria-controls='DataTables_Table_0' style={{ display: 'inline-block' }} />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='card-body px-0 pt-0'>
                        <div className='dashboard-data-table'>
                            <table className='table table-sm table-dashboard fs--1 data-table border-bottom' data-options='{&quot;responsive&quot;:false,&quot;pagingType&quot;:&quot;simple&quot;,&quot;lengthChange&quot;:true,&quot;searching&quot;:true,&quot;pageLength&quot;:10,&quot;columnDefs&quot;:[{&quot;targets&quot;:[0,6],&quot;orderable&quot;:false}],&quot;language&quot;:{&quot;info&quot;:&quot;_START_ to _END_ Items of _TOTAL_ — <a href=\&quot;#!\&quot; class=\&quot;font-weight-semi-bold\&quot;> Xem toàn bộ <span class=\&quot;fas fa-angle-right\&quot; data-fa-transform=\&quot;down-1\&quot;></span> </a>&quot;},&quot;buttons&quot;:[&quot;copy&quot;,&quot;excel&quot;]}'>

                                <thead className='bg-200 text-900'>
                                    <tr>
                                        <th className='no-sort pr-1 align-middle data-table-row-bulk-select'>
                                            <div className='custom-control custom-checkbox'>
                                                <input className='custom-control-input checkbox-bulk-select' id='checkbox-bulk-purchases-select' type='checkbox' data-checkbox-body='#purchases' data-checkbox-actions='#purchases-actions' data-checkbox-replaced-element='#dashboard-actions' />
                                                <label className='custom-control-label' htmlFor='checkbox-bulk-purchases-select' />
                                            </div>
                                        </th>
                                        <th className='sort pr-1 align-middle'>Loại gift</th>
                                        <th className='sort pr-1 align-middle'>Tên gift</th>
                                        <th className='sort pr-1 align-middle'>Gift code</th>
                                        <th className='sort pr-1 align-middle text-center'>Trạng thái</th>
                                        <th className='sort pr-1 align-middle text-center'>Ngày hết hạn</th>
                                        <th className='no-sort pr-1 align-middle data-table-row-action' />
                                    </tr>
                                </thead>
                                <tbody id='purchases'>
                                    <tr className='btn-reveal-trigger'>
                                        <td className='align-middle'>
                                            <div className='custom-control custom-checkbox'>
                                                <input className='custom-control-input checkbox-bulk-select-target' type='checkbox' id='checkbox-0' />
                                                <label className='custom-control-label' htmlFor='checkbox-0' />
                                            </div>
                                        </td>
                                        <th className='align-middle'><a href='pages/customer-details.html'>Le Dang Dung</a></th>
                                        <td className='align-middle'>test@gmail.com</td>
                                        <td className='align-middle'>ABCD-EFGH-IKLM</td>
                                        <td className='align-middle text-center fs-0'><span className='badge badge rounded-capsule badge-soft-danger'>Hết hạn <span className='ml-1 fas fa-ban' data-fa-transform='shrink-2' /></span>
                                        </td>
                                        <td className='align-middle text-center'>2021-12-05 12:03:05</td>
                                        <td className='align-middle white-space-nowrap'>
                                            <div className='dropdown text-sans-serif'>
                                                <button className='btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3' type='button' id='dropdown0' data-toggle='dropdown' data-boundary='html' aria-haspopup='true' aria-expanded='false'><span className='fas fa-ellipsis-h fs--1' /></button>
                                                <div className='dropdown-menu dropdown-menu-right border py-0' aria-labelledby='dropdown0'>
                                                    <div className='bg-white py-2'><a className='dropdown-item' href='#!'>Xem chi tiết</a><a className='dropdown-item' href='#!'>Sửa</a><a className='dropdown-item' href='#!'>Hoàn tiền</a>
                                                        <div className='dropdown-divider' /><a className='dropdown-item text-warning' href='#!'>Lưu trữ</a><a className='dropdown-item text-danger' href='javascript:deleteKey(<?= $key->id ?>)'>Xóa</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className='btn-reveal-trigger'>
                                        <td className='align-middle'>
                                            <div className='custom-control custom-checkbox'>
                                                <input className='custom-control-input checkbox-bulk-select-target' type='checkbox' id='checkbox-0' />
                                                <label className='custom-control-label' htmlFor='checkbox-0' />
                                            </div>
                                        </td>
                                        <th className='align-middle'><a href='pages/customer-details.html'>Le Dang Dung</a></th>
                                        <td className='align-middle'>test@gmail.com</td>
                                        <td className='align-middle'>ABCD-EFGH-IKLM</td>
                                        <td className='align-middle text-center fs-0'>
                                            <span className='badge badge rounded-capsule badge-soft-success'>Đang hoạt động
                                                <span className='ml-1 fas fa-check' data-fa-transform='shrink-2' />
                                            </span>
                                        </td>
                                        <td className='align-middle text-center'>2021-12-05 12:03:05</td>
                                        <td className='align-middle white-space-nowrap'>
                                            <div className='dropdown text-sans-serif'>
                                                <button className='btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3' type='button' id='dropdown0' data-toggle='dropdown' data-boundary='html' aria-haspopup='true' aria-expanded='false'><span className='fas fa-ellipsis-h fs--1' /></button>
                                                <div className='dropdown-menu dropdown-menu-right border py-0' aria-labelledby='dropdown0'>
                                                    <div className='bg-white py-2'><a className='dropdown-item' href='#!'>Xem chi tiết</a><a className='dropdown-item' href='#!'>Sửa</a><a className='dropdown-item' href='#!'>Hoàn tiền</a>
                                                        <div className='dropdown-divider' /><a className='dropdown-item text-warning' href='#!'>Lưu trữ</a><a className='dropdown-item text-danger' href='javascript:deleteKey(<?= $key->id ?>)'>Xóa</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gift