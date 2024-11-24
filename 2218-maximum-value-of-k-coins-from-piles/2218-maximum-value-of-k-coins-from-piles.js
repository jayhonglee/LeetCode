/**
 * @param {number[][]} piles
 * @param {number} k
 * @return {number}
 */
var maxValueOfCoins = function(piles, k) {
//     dp function
//     input: index, remain
//     output: maximum value
    const dp = function(index, remain) {
        if(index === piles.length || remain === 0) return 0;
        
        if(memo[index][remain] !== -1) return memo[index][remain];
        
        let ccum = 0;
        let ans = dp(index + 1, remain);
        const currentPile = piles[index];
        for(let i = 0; i < Math.min(currentPile.length, remain); i++) {
            ccum += currentPile[i];
            ans = Math.max(ccum + dp(index + 1, remain - i - 1), ans);
        }
        
        memo[index][remain] = ans;
        return ans;
    }
    
    let memo = [];
    for(let i = 0; i < piles.length; i++) {
        memo.push(new Array(k + 1).fill(-1));
    }
    return dp(0, k);
};