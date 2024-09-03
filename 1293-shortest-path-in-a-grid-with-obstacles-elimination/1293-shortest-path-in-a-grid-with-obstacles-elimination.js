/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
//     do bfs but for every node visit (keep a remain variable)
//     return -1 if no path exists
    
    let queue = [[0,0,k]];
    let level = 0;
    let seen = [];
    
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const r = grid.length;
    const c = grid[0].length;
    const valid = (row, col) => !(row < 0 || col < 0 || row >= r || col >= c)
    
    for (let i = 0; i < r; i++) {
        seen.push(new Array(c).fill(-1));
    }
    
    while(queue.length > 0) {
        let nextQueue = [];
        
        for(let [x,y,k] of queue) {
            if(seen[x][y] >= k) continue;
            seen[x][y] = k;
            
            if(x === r - 1 && y === c - 1) return level;
            
            if(grid[x][y] === 1) {
                if(k <= 0) continue;
                else k--;
            } 
            
            for(const [x1,y1] of directions) {
                const newX = x+x1;
                const newY = y+y1;
                
                if(!valid(newX,newY)) continue; 
                
                const newGridValue = grid[newX][newY];
                nextQueue.push([newX,newY,k])
            }
        }
        
        queue = nextQueue;
        level++;
    }
    
    return -1;
};