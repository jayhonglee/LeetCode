/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let ans = 0;
    let min = Infinity;
    for(const price of prices) {
        min = Math.min(min, price);
        ans = Math.max(price - min, ans);
    }
    
    return ans;
};