/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let ans = -1;
    
    if(grid[0][0] != 0) return ans;
    
    const format = (row, col) => {
        return row + "," + col;
    }
    
    let seen = new Set();
    let directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];
    let queue = [[0,0]], nextQueue = [];
    
    const valid = (row, column) => {
        if(row < 0 || column < 0 || row >= grid.length || column >= grid[0].length || grid[row][column] !== 0) return false;
        return true;
    }
    
    ans = 1;
    while(queue.length > 0) {
        nextQueue = [];
        
        for(const [row, col] of queue) {
            if(row === grid.length - 1 && col === grid[0].length - 1) return ans;
            
            seen.add(format(row,col));
            
            for(const [x, y] of directions) {
                if(valid(row + x, col + y) && !seen.has(format(row + x, col + y))) {
                    nextQueue.push([row + x, col + y]);
                    seen.add(format(row + x, col + y));
                }
            }
        }
        
        queue = nextQueue;
        ans++;
    }
    
    return -1;
};