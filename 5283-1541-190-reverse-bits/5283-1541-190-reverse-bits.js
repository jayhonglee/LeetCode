/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // String Manipulation Answer:
    // const binaryStr = n.toString(2).padStart(32, 0);
    // let ans = 0;

    // // iterate from left to right of the input binary n
    // for(let i = 0; i < binaryStr.length; i++) {
    //     // using a counter (starting from 1) if the current number is 1, add 2^(counter) to ans
    //     const curr = binaryStr[i];
    //     if(curr === "1") ans += 2**i
    // }
    
    // // return ans
    // return ans;

    // Bitwise Operation Answer:
    let ans = 0;

    for(let i = 0; i < 32; i++) {
        ans = (ans << 1) | (n & 1);
        n >>>= 1;
    }

    return ans >>> 0;
};