/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
//     create a dp function
//     input: index, holding
//     output: maximum profit
    const dp = function(index, holding) {
//         base case: out of index 
        if(index >= prices.length) return 0;
        
        if(memo[index][holding] !== -1) return memo[index][holding];
        
//         options: buy, sell, skip
        const skip = dp(index + 1, holding);
        
        if(holding) {
            memo[index][holding] = Math.max(skip, (prices[index] - fee) + dp(index + 1, 0));
            return memo[index][holding];
        } else {
            memo[index][holding] = Math.max(skip, -prices[index] + dp(index + 1, 1));
            return memo[index][holding];
        }
    }
    
    let memo = [];
    for(let i = 0; i < prices.length; i++) {
        memo.push(new Array(2).fill(-1));
    }
    return dp(0, 0);
};