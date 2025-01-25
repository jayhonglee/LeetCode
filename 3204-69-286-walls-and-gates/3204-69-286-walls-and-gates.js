/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    // Set variables
    const rows = rooms.length;
    const cols = rooms[0].length;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const seen = new Set();
    const isValid = (row, col) => row >= 0 && col >= 0 && row < rows && col < cols;
    const toCoordStr = (row, col) => row + "," + col;
    let initialQueue = [];

    // BFS: Update each empty room value with the shortest distance value
    const bfs = (queue) => {
        let steps = 0;
        let nextQueue = [];

        while(queue.length) {
            for(const [row, col] of queue) {
                if(
                    seen.has(toCoordStr(row, col)) || 
                    !isValid(row, col) || 
                    rooms[row][col] === -1
                    ) continue;
                seen.add(toCoordStr(row, col));
                rooms[row][col] = Math.min(rooms[row][col], steps);

                for(const [dy, dx] of dirs) {
                    nextQueue.push([row + dy, col + dx]);
                }
            }

            steps++;
            queue = nextQueue;
            nextQueue = [];
        }
        
        seen.clear();
    }
    
    // Loop over each rooms and if it's a gate add to initial queue
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            if(rooms[row][col] === 0) initialQueue.push([row,col]);
        }
    }

    // Run BFS
    bfs(initialQueue);
};