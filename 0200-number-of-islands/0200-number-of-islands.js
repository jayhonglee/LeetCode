/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    
    const isValid = function(x,y) {
        return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
    }
    
    const bfs = function(i, j) {
        let queue = [];
        queue.push([i,j]);
        
        while(queue.length) {
            const nextQueue = [];
            
            for(const [x1,y1] of queue) {
                const curr = x1 + "," + y1;
                if(seen.has(curr)) continue;
                seen.add(curr);
                
                for(const [x2,y2] of dirs) {
                    const [newNodeX, newNodeY] = [x1 + x2, y1 + y2];
                    
                    if(isValid(newNodeX, newNodeY) && grid[newNodeX][newNodeY] === "1") nextQueue.push([newNodeX, newNodeY]);
                }
            }
            
            queue = nextQueue;
        }
    }
    
    
    
    let seen = new Set();
    let ans = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            const current = i + "," + j;
            if (grid[i][j] === "1" && !seen.has(current)) {
                bfs(i, j);
                ans++;
            }
        }
    }
    
    return ans;
};