import React from 'react'

const DataGift = () => {
    const giftDetail = [{
        typeGift: "Chuyen bay",
        nameGift: "Gift 1",
        codeGift: "ABCGIFT",
        state: "Live",
        date: "12/05/2022"
    },
    {
        typeGift: "van chuyen",
        nameGift: "Gift 2",
        codeGift: "ABC2GIFT",
        state: "Live",
        date: "12/05/2022"
    }
    ]
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
                            <MainGift giftDetail={giftDetail} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataGift