/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const m = heights.length, n = heights[0].length;
    
    const inBound = (x,y) => {
        if(y >= 0 && y < n && x >= 0 && x < m && heights[x] != null && heights[x][y] != null) return true;
        
        return false;
    }
    
    const withinEffort = (newX, newY, x, y, effort) => {
        if(!inBound(newX, newY) || !inBound(x,y)) return false;
        
        if(Math.abs(heights[newX][newY] - heights[x][y]) <= effort) return true;
        
        return false;
    }
    
    const valid = (effort) => {
        let stack = [[0,0]];
        let seen = new Set();
        
        while(stack.length) {
            const [x,y] = stack.pop();
            if(seen.has(x + " " + y)) continue;
            seen.add(x + " " + y);
            const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
            
            if(x === m - 1 && y === n - 1) return true;
            
            for(const [i,j] of dirs) {
                const newX = x + i, newY = y + j;
                if(inBound(newX, newY) && withinEffort(newX, newY, x, y, effort)) {
                    stack.push([newX, newY]);
                }
            }
        }
        
        return false;
    }
    
    let left = 0, right = 0;
    for(const height of heights) {
        right = Math.max(...height, right);
    }
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if(valid(mid)) right = mid - 1;
        else left = mid + 1;
    }
    
    return left;
};