/**
 * @module harmonicNumber
 */
exports.harmonicNumber=(n) => {
    let sum=0;
    for(i=1;i<=n;i++)
    {
        sum += 1/i;
    }
    console.log(`${i-1}th harmonic number is :` +sum);
