/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
//     Create a dp function
//     input: nth step
//     output: number of ways to reach to the nth step
    const dp = function(index) {
        if(index <= 2) return index;
        
        if(memo[index] !== -1) return memo[index];
        
        memo[index] = dp(index - 1) + dp(index - 2);
        return memo[index];
    }
    
    const memo = new Array(n + 1).fill(-1);
    return dp(n);
};