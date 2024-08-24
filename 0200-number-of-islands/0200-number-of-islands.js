/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let set = new Set(), ans = 0, m = grid.length, n = grid[0].length;
    
    const dfs = (indexRow, indexCol) => {
        // Out of bounds or already visited or water
        if (indexRow < 0 || indexCol < 0 || indexRow >= m || indexCol >= n || set.has(`${indexRow},${indexCol}`) || grid[indexRow][indexCol] === "0") {
            return;
        }
        
        set.add(`${indexRow},${indexCol}`);
        
        // Explore the neighbors (up, down, left, right)
        dfs(indexRow - 1, indexCol); // up
        dfs(indexRow + 1, indexCol); // down
        dfs(indexRow, indexCol - 1); // left
        dfs(indexRow, indexCol + 1); // right
    }
    
    for (let indexRow = 0; indexRow < m; indexRow++) {
        for (let indexCol = 0; indexCol < n; indexCol++) {
            if (!set.has(`${indexRow},${indexCol}`) && grid[indexRow][indexCol] === "1") {
                dfs(indexRow, indexCol);
                ans++;
            }
        }
    }
    
    return ans;
};
