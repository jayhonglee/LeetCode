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
        if(row >= grid.length || row < 0 || column >= grid[0].length || column < 0 || grid[row][column] === 0 || set.has(format(row, column))) return 0;
        
        let size = 1;
        set.add(format(row, column));
        
        const directions = [[0, +1], [0, -1], [+1, 0], [-1, 0]];
        for(const [x, y] of directions) {
            const newRow = row + x, newColumn = column + y;
            size += dfs(newRow, newColumn);
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