/**
 * @module distinctCoupon
 */
exports.distinctCoupon = (coupons) => {
    let arr = [];
    for (i = 0; i < coupons; i++) {
        arr[i] = parseInt(Math.random() * ((1000 - 100) + 1) + 100);
        /* for (j = 0; j < i; j++) {
             if (cNumber != arr[j]) {
                 arr[j] = cNumber;
             }
         }*/
    }
    console.log(arr);
}