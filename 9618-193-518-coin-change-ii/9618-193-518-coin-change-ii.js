var change = function(amount, coins) {
    let memo = new Array(amount + 1).fill(0);
    memo[0] = 1;

    for (const coin of coins) {  // Iterate over coins first
        for (let i = coin; i <= amount; i++) {  // Ensure we only access valid indices
            memo[i] += memo[i - coin];
        }
    }
    
    return memo[amount];
};