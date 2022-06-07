export default function (money) {
    if (!money) return ''
    return money.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + ',')) + prev
    });
};