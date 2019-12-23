/**
 * @module findQuadratic
 */
exports.findQuadratic = (a, b, c) => {
    let d = b * b - 4 * a * c;
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);

    console.log('delta :' + d);
    console.log('root 1 of x :' + root1);
    console.log('root 2 of x :' + root2);
}