/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let hashmap = new Map(), set = new Set(), ans = 0;
    
    const format = (row, column) => {
        return row + "," + column;
    }
    
    const dfs = (row, column) => {
        let size = 1;
        set.add(format(row, column));
        
        const directions = [[0, +1], [0, -1], [+1, 0], [-1, 0]];
        for(const [x, y] of directions) {
            const newRow = row + x, newColumn = column + y;
            if(newRow < grid.length && 
               newRow >= 0 &&
               newColumn < grid[0].length && 
               newColumn >= 0 &&
               grid[newRow][newColumn] === 1 && 
               !set.has(format(newRow, newColumn))) {
                size += dfs(newRow, newColumn);
            }
        }
        
        return size;
    }
    
    for(const [indexRow, row] of grid.entries()) {
        for(const [indexCol, column] of row.entries()) {
            if(column === 1 && !set.has(format(indexRow, indexCol))) {
                ans = Math.max(dfs(indexRow, indexCol), ans);
                set.add(format(indexRow, indexCol));
            }
        }
    }
    
    return ans;
};