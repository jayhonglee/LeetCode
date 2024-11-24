/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if(m === 0 || n === 0) return 0;
    
//     create a dp function
//     input: row, col
//     output: number of unique paths
    const dp = function(row, col) {
        if(row < 0 || col < 0) return 0;
        if(row === 0 || col === 0) return 1;
        if(memo[row][col] !== -1) return memo[row][col];
        
        memo[row][col] = dp(row - 1, col) + dp(row, col - 1);
        return memo[row][col];
    }
    
    const memo = [];
    for(let i = 0; i < m; i++) {
        memo.push(new Array(n).fill(-1));
    }
    return dp(m - 1, n - 1);
};