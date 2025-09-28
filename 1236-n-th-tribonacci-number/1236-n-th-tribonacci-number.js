/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    //  Bottom-up DP Approach

    //  if n == 0 || 1 || 2, hard code values
    if(n === 0) return 0;
    else if(n === 1 || n === 2) return 1;

    //  else, set prev (1), prev2 (1), prev3 (0) 
    let prev = 1, prev2 = 1, prev3 = 0;
    let curr = 0;

    //  iterate till n adding prevs numbers and updating them
    for(let i = 2; i < n; i++) {
        curr = prev + prev2 + prev3;
        prev3 = prev2;
        prev2 = prev;
        prev = curr;
    }

    return curr;
};