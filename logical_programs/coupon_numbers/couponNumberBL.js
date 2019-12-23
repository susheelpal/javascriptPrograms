/**
 * @module distinctCoupon
 */
exports.distinctCoupon = (coupons) => {
    let arr = [];
    for (i = 0; i < coupons; i++) {
        let cNumber = Math.random();
        for (j = 0; j < i; j++) {
            if (cNumber != arr[j]) {
                arr[j] = cNumber;
            }
        }
    }
    console.log(arr);
}