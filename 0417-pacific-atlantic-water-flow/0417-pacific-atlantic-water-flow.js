/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const pacific = new Set();
    const atlantic = new Set();
    const ans = [];

    const bfs = (startRow , startCol) => {
        const dirs = [[0,1], [0,-1], [1,0], [-1,0]];
        let visited = new Set();
        let isPacific = false;
        let isAtlantic = false;
        let queue = [[startRow, startCol]];
        let nextQueue = [];

        while(queue.length) {
            for(const [row, col] of queue) {
                if(visited.has(row + "," + col)) continue;
                visited.add(row + "," + col);

                if(
                    pacific.has(row + "," + col) ||
                    row == 0 || 
                    col == 0
                ) isPacific = true;

                if(
                    atlantic.has(row + "," + col) ||
                    row == heights.length - 1 ||
                    col == heights[0].length - 1
                ) isAtlantic = true;

                for(const [dx, dy] of dirs) {
                    const newRow = row + dy;
                    const newCol = col + dx;

                    if(
                        newRow >= 0 && 
                        newCol >= 0 && 
                        newRow < heights.length &&
                        newCol < heights[0].length &&
                        heights[newRow][newCol] <= heights[row][col]
                        ) {
                        nextQueue.push([newRow, newCol]);
                    }
                }
            }
            queue = nextQueue;
            nextQueue = [];
        }

        if(isPacific && isAtlantic) ans.push([startRow, startCol]);
        if(isPacific) pacific.add(startRow + "," + startCol);
        if(isAtlantic) atlantic.add(startRow + "," + startCol);
    }

    for(let row = 0; row < heights.length; row++) {
        for(let col = 0; col < heights[0].length; col++) {
            bfs(row, col);
        }
    }

    return ans;
};