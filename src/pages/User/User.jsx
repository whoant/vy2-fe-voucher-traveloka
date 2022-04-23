import React from 'react'
import DataVoucher from '../../Components/DataVoucher';

const User = () => {
    const categories = ['Voucher 1', 'Voucher 2', 'Voucher 3', 'Voucher 4', 'Voucher 5', 'Voucher 6', 'Voucher 7', 'Voucher 8', 'Voucher 9', 'Voucher 10', 'Voucher 11', 'Voucher 12'];
    const series = ['123456$', '2345$', '3456$', '789$', '52146$', '85456$']
    return (
        <DataVoucher categories={categories} series={series} />
    )
}

export default User