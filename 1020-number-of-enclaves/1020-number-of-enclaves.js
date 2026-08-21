/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
    // Edge case
    if(!grid[0].length) return 0;

    // Border: row = 0 || row.length || col = 0 || col.length
    const isBorder = (row, col) => {
        return row === 0 || 
        row === grid.length - 1 || 
        col === 0 || 
        col === grid[0].length - 1;
    }

    const isLand = (row, col) => grid[row][col];
    const isInbound = (row, col) => row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
    
    const toStr = (row, col) => row + "," + col;

    const adj = [[-1,0], [1,0], [0,1], [0,-1]];

    const visited = new Set();

    const bfs = (startRow, startCol) => {
        let queue = [[startRow, startCol]];
        let walkable = false;
        let count = 0;

        while(queue.length) {
            const nextQueue = [];

            for(const [row,col] of queue) {
                if(!isInbound(row, col) || !isLand(row,col)) continue;
            
                if(visited.has(toStr(row,col))) continue;
                visited.add(toStr(row,col));

                if(isBorder(row,col)) walkable = true;

                for(const [dy, dx] of adj) {
                    nextQueue.push([row+dy, col+dx]);
                }

                count++;
            }

            queue = nextQueue;
        }

        return walkable ? count : 0;
    }

    // Iterate over each cell
    let counter = 0;
    let land = 0;
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(isLand(row,col)) {
                land++;
                counter += bfs(row, col);
            }
        }
    }

    // Return counter
    return land - counter;
};