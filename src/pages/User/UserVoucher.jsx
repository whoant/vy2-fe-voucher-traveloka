import React from 'react'
import DataVoucher from '../../components/Voucher/DataVoucher';

const UserVoucher = () => {
    const categories = ['Voucher 1', 'Voucher 2', 'Voucher 3', 'Voucher 4', 'Voucher 5', 'Voucher 6', 'Voucher 7', 'Voucher 8', 'Voucher 9', 'Voucher 10', 'Voucher 11', 'Voucher 12'];
    const series = ['123456$', '2345$', '3456$', '789$', '52146$', '85456$']
    const percent = ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%']
    const date = [Date.now.toString]
    return (
        <DataVoucher categories={categories} series={series} percent={percent} date={date} />
    )
}

export default UserVoucher