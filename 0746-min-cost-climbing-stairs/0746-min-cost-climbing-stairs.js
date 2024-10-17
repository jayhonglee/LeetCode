/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = (i) => {
        if(i <= 1) return 0;
        
        if(hashmap.has(i)) return hashmap.get(i);
        
        const val = Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]); 
        hashmap.set(i, val)
        
        return val;
    }
    
    const hashmap = new Map();
    return dp(cost.length);
};