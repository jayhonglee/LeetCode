/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    // iterate 32 times over the integer's binary representation
    // check the least significant bit and if it's one add 1 to the counter (ans)
    let ans = 0;
    
    for(let i = 0; i < 32; i++) {
        if(n & 1 === 1) ans++;
        n >>>= 1;
    }

    return ans;
};