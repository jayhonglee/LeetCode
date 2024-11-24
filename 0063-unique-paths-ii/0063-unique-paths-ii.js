/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const dp = function(row, col) {
        if(row < 0 || col < 0 || obstacleGrid[row][col] === 1) return 0;
        if(row === 0 && col === 0 && obstacleGrid[row][col] !== 1) return 1;
        
        if(memo[row][col] !== -1) return memo[row][col];
        
        memo[row][col] = dp(row - 1, col) + dp(row, col - 1);
        return memo[row][col];
    }
    
    let memo = [];
    for(let i = 0; i < obstacleGrid.length; i++) {
        memo.push(new Array(obstacleGrid[0].length).fill(-1));
    }
    return dp(obstacleGrid.length - 1, obstacleGrid[0].length - 1);
};