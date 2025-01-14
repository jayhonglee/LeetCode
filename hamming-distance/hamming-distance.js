/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
//     do xor to set 1 to all positions that differ
    const xor = x ^ y;
    
//     count the number of 1s
    let ans = 0;
    for(const num of xor.toString(2)) {
        if(num === "1") ans++;
    }
    
    return ans;
};