
/**
 * @module windChill
 * @param {int} t - it is for temperature
 * @param {int} v - it is for speed of wind
 * @param {number} w - it will store the calculated windchill
 */
exports.windChill = (t, v) => {
    let w = 35.74 + (0.6215 * t) + ((0.4275 * t) - 35.75) * Math.pow(v, 0.16);
    console.log('wind chill :' + w);
}
