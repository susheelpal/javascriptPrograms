
/**
 * @module distinctCoupon
 * @param {number} coupons -number of coupon
 * @param arr - to store coupons
 */
exports.distinctCoupon = (coupons) => {
    let arr = [];
    for (i = 0; i < coupons; i++) {
        arr[i] = parseInt(Math.random() * ((1000 - 100) + 1) + 100);
    }
    console.log(arr);
}
