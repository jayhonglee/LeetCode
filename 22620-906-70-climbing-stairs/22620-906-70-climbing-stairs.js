/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;

    let oneBefore = 2;
    let twoBefore = 1;
    let ans = 0;
    for(let i = 2; i < n; i++) {
        ans = oneBefore + twoBefore;

        twoBefore = oneBefore;
        oneBefore = ans;
    }

    return ans;
};