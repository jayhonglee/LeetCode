/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    //     Bottom-up Approach: 
    let memo = new Array(amount + 1).fill(Infinity);
    memo[0] = 0;

    for(let i = 1; i <= amount; i++) {
        for(const coin of coins) {
            if(i - coin >= 0) {
                memo[i] = Math.min(memo[i], memo[i - coin] + 1);
            }
        }
    }
    
    return memo[amount] === Infinity ? -1 : memo[amount];
    
    //      Top-Down Approach: 
    // const dp = (amount) => {
    //     if (amount < 0) return Infinity; // Base case for invalid amount
    //     if (memo[amount] !== Infinity) return memo[amount];

    //     for (const coin of coins) {
    //         memo[amount] = Math.min(memo[amount], dp(amount - coin) + 1);
    //     }
        
    //     return memo[amount];
    // };

    // const ans = dp(amount);
    // return ans === Infinity ? -1 : ans;
};