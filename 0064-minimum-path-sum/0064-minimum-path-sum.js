/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
//     edge case
    if(grid.length === 0 || grid[0].legnth === 0) return -1;
    
//     create a dp function
//     input: row, col
//     output: miminum sum to input cell
    const dp = function(row, col) {
        if(row < 0 || col < 0) return Infinity;
        if(row === 0 && col === 0) return grid[row][col];
        if(memo[row][col] !== -1) return memo[row][col];
        
        const current = grid[row][col];
        memo[row][col] = Math.min(current + dp(row - 1, col), current + dp(row, col - 1));
        return memo[row][col];
    }
    
    let memo = [];
    for(let i = 0; i < grid.length; i++) {
        memo.push(new Array(grid[0].length).fill(-1));
    }
    return dp(grid.length - 1, grid[0].length - 1);
};