/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dp = function(index, holding) {
        if(index >= prices.length) return 0;
        
        if(memo[index][holding] !== -1) return memo[index][holding];
        
        const skip = dp(index + 1, holding);
        if(holding) {
            memo[index][holding] = Math.max(skip, prices[index] + dp(index + 2, 0));
        } else {
            memo[index][holding] = Math.max(skip, -prices[index] + dp(index + 1, 1));
        }

        return memo[index][holding];
    }
    
    let memo = [];
    for(let i = 0; i < prices.length; i++) {
        memo.push(new Array(2).fill(-1));
    }
    return dp(0, 0);
};