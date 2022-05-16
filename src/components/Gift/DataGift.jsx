import React from 'react'

const DataGift = props => {
    const { giftDetail } = props;
    return (
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
            {giftDetail.map(giftDetails => (
                <tbody id='purchases'>
                    <tr className='btn-reveal-trigger'>
                        <td className='align-middle'>
                            <div className='custom-control custom-checkbox'>
                                <input className='custom-control-input checkbox-bulk-select-target' type='checkbox' id='checkbox-0' />
                                <label className='custom-control-label' htmlFor='checkbox-0' />
                            </div>
                        </td>
                        <th className='align-middle'><a href='pages/customer-details.html'>{giftDetails.typeGift}</a></th>
                        <td className='align-middle'>{giftDetails.nameGift}</td>
                        <td className='align-middle'>{giftDetails.codeGift}</td>
                        <td className='align-middle text-center fs-0'><span className='badge badge rounded-capsule badge-soft-danger'>{giftDetail.state}<span className='ml-1 fas fa-ban' data-fa-transform='shrink-2' /></span>
                        </td>
                        <td className='align-middle text-center'>{giftDetails.date}</td>
                        <td className='align-middle white-space-nowrap'>
                            <div className='dropdown text-sans-serif'>
                                <button className='btn btn-link text-600 btn-sm dropdown-toggle btn-reveal mr-3' type='button' id='dropdown0' data-toggle='dropdown' data-boundary='html' aria-haspopup='true' aria-expanded='false'><span className='fas fa-ellipsis-h fs--1' /></button>
                                <div className='dropdown-menu dropdown-menu-right border py-0' aria-labelledby='dropdown0'>
                                    <div className='bg-white py-2'><a className='dropdown-item' href='#!'>Xem chi tiết</a><a className='dropdown-item' href='#!'>Sửa</a>
                                        <div className='dropdown-divider' /><a className='dropdown-item text-warning' href='#!'>Lưu trữ</a><a className='dropdown-item text-danger' href='javascript:deleteKey(<?= $key->id ?>)'>Xóa</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            ))}

        </table>
    )
}

export default DataGift