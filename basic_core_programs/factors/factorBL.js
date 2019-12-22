/**
 * @module primeFactor
 */
exports.primeFactor=(number) => {
    for(i=1;i*i<=number;i++)
    {
        let count=0;
        for(j=2;j<=i;j++)
        {
            if(i%j==0)
            {
                count++;
            }
        }
        if(count==1)
        {
            console.log(i);
        }
    }
}