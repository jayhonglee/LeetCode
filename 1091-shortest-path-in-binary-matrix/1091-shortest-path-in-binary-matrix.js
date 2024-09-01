/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] != 0) return -1;
    
    let queue = [[0,0]], nextQueue = [], seen = new Set(), ans = 1;
    let directions = [[0, 1], [1, 0], [1, 1], [-1, -1], [-1, 1], [1, -1], [0, -1], [-1, 0]];

    const format = (row, col) => row + "," + col;

    const valid = (row, column) => {
        return (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length || grid[row][column] !== 0) ? false : true;
    }
    
    while(queue.length > 0) {        
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
        nextQueue = [];
        ans++;
    }
    
    return -1;
};