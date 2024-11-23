/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    
//     Create a dp function 
//     Input: index, profit, hasStock
//     Output: maximum profit
//     Base case: when its the last day, output: 0
//     Current maxProfit: Math.max(skip, buy, sell) 
//     Details: 3 Options: Skip, Buy, Sell
    
    const dp = function(index, hasStock, remain) {
        if(index === prices.length || remain < 1) return 0;
        
        if(memo[index][hasStock][remain] !== -1) return memo[index][hasStock][remain];
        
        let ans = dp(index + 1, hasStock, remain);
        if(hasStock) {
            ans = Math.max(ans, prices[index] + dp(index + 1, 0, remain - 1));
        } else {
            ans = Math.max(ans, -prices[index] + dp(index + 1, 1, remain));
        }
        
        memo[index][hasStock][remain] = ans;
        return ans;
    }
    
    const memo = [];
    for (let i = 0; i < prices.length; i++) {
        memo.push([]);
        for (let j = 0; j < 2; j++) {
            memo[i].push(new Array(k + 1).fill(-1));
        }
    }
    
    return dp(0, 0, k);
};