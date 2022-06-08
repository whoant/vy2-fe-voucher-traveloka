import formatMoney from './money'

export default function (condition) {
    const { threshold, discount, maxAmount } = condition;
    
    const formatThreshold = formatMoney(threshold);
    const formatMaxAmount = formatMoney(maxAmount);
    if (Number(discount) === 0) {
        return `Đơn hàng trị giá trên ${formatThreshold}đ sẽ nhận được giảm giá ${formatMaxAmount}đ`;
    } else if (Number(maxAmount) === 0) {
        return `Đơn hàng trị giá trên ${formatThreshold}đ sẽ nhận được giảm giá ${discount} %`;
    }
    return `Đơn hàng trị giá trên ${formatThreshold}đ sẽ nhận được giảm giá ${discount}%, không vượt quá ${formatMaxAmount}đ`;
}