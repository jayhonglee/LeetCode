/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const isInBound = (row, col) => row < grid.length && col < grid[0].length && row >= 0 && col >= 0;
    const stringify = (row, col) => row + "," + col;
    const set = new Set();

    // Define bfs function.
    // As it spreads out to adjacent 1s, for each cell, count the number of surrounding water cells and keep the counter.
    const bfs = (queue) => {
        let perimeter = 0;

        while(queue.length) {
            let tempQueue = [];

            for(const [row, col] of queue) {
                if(set.has(stringify(row, col))) continue;
                set.add(stringify(row,col));

                for(const [dy, dx] of dirs) {
                    if(isInBound(row + dy, col + dx) && grid[row + dy][col + dx] === 1) {
                        tempQueue.push([row + dy, col + dx]);
                    } else {
                        perimeter++;
                    }
                }
            }

            queue = tempQueue;
        }

        return perimeter;
    }

    // Loop over each cell in the grid and once 1 is found, run bfs & return the perimeter counter value.
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) return bfs([[i,j]]);
            continue;
        }
    }

    return 0;
};