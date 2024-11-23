/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = function(index) {
        if(index < 2) return 0;
        
        if(memo[index] !== -1) return memo[index];
        memo[index] = Math.min(dp(index - 1) + cost[index - 1], dp(index - 2) + cost[index - 2]);
        
        return memo[index];
    }
    
    const memo = new Array(cost.length + 1).fill(-1);
    memo[0] = memo[1] = 0;
    return dp(cost.length);
};