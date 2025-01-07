/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // create bfs
    // returns -1 if it cannot rot every orange || return steps taken to rot all of them
    const dirs = [[1,0], [-1,0], [0,1], [0,-1]];
    const isValid = (row, col) => row >= 0 && col >= 0 && row < grid.length && col < grid[0].length;
    const stringifyCell = (row, col) => row + "," + col;

    // O(m * n)
    const checkFreshOrange = (grid) => {
        let count = 0;
        for(const row of grid) {
            for(const orange of row) {
                if(orange === 1) count++;
            }
        }

        return count;
    }

    // edge case
    const initialFreshOranges = checkFreshOrange(grid);
    if(initialFreshOranges === 0) return 0;

    const bfs = (queue) => {
        let seen = new Set();
        let steps = -1;
        let tempFresh = initialFreshOranges;

        while(queue.length) {
            const nextQueue = [];

            for(const [row, col] of queue) {
                if(!isValid(row,col) || seen.has(stringifyCell(row,col)) || grid[row][col] === 0) continue;
                seen.add(stringifyCell(row,col));

                if(grid[row][col] === 1) tempFresh--;

                if(tempFresh < 1) return steps + 1;

               for(const [dx,dy] of dirs) {
                    nextQueue.push([row + dy, col + dx]);
               }
            }

            steps++;
            queue = nextQueue;
        }

        return tempFresh === 0 ? steps : Infinity;
    }

    // loop over every cell at grid and when its a fresh orange(1), do bfs and store its value (ans = Math.min(ans, bfs))
    let ans = Infinity;

    // O(m * n)
    let initiallyRotten = [];
    for(let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            if(grid[row][col] === 2) initiallyRotten.push([row,col]);            
        }
    }
    ans = bfs(initiallyRotten);

    return ans === Infinity ? -1 : ans;
};