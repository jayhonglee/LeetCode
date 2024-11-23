/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
//     corner case
    if(amount === 0) return 0;
    
//     create dp function
//     input amount
//     output minimum number of coins
//     converted to bottom-up
    const memo = new Array(amount + 1).fill(Infinity);
    for(let i = 0; i <= amount; i++) {
        if (i === 0) {
            memo[i] = 0;
            continue;
        }
        
        for(const coin of coins) {
            if(i - coin >= 0) {
                memo[i] = Math.min(memo[i], memo[i - coin] + 1);    
            }
        }
    }
    
    return memo[amount] === Infinity ? -1 : memo[amount];
};
