/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    let memo = [];
    for(let i = 0; i < rows; i++) {
        memo.push(new Array(cols).fill(Infinity));
    }
    
    for(let i = 0; i < cols; i++) {
        memo[0][i] = matrix[0][i];
    }
        
    for(let i = 1; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            memo[i][j] = matrix[i][j] + Math.min(
                memo[i - 1][j], 
                memo[i - 1][j - 1] || Infinity, 
                memo[i - 1][j + 1] || Infinity,
            );
        }
    }
    
    return Math.min(...memo[rows - 1]);
};