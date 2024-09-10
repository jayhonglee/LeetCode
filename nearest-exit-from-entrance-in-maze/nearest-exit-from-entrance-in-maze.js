/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
//     bfs: returns the level when the nearest exit is found
//     perform bfs at entrance
    const format = (x,y) => x + ',' + y;
    const outOfBounds = (x,y) => x < 0 || x > maze[0].length - 1 || y < 0 || y > maze.length -1;
    const isBoundary = (x,y) => x === 0 || x === maze[0].length -1 || y === 0 || y === maze.length - 1;
    const isEmpty = (x,y) => maze[y][x] === ".";
    let queue = [entrance], nextQueue = [], seen = new Set(), dirs = [[0,1],[0,-1],[1,0],[-1,0]], level = 0;
    
    while(queue.length) {
        for(const [row, col] of queue) {
            if(seen.has(format(col,row)) || outOfBounds(col, row) || !isEmpty(col,row)) continue;
            
            if(isBoundary(col, row) && isEmpty(col, row) && format(entrance[1], entrance[0]) !== format(col, row)) {
                return level;
            }
            
            for(const [x, y] of dirs) {
                nextQueue.push([row+x, col+y]);
            }
            
            seen.add(format(col, row));
        }
        
        queue = nextQueue;
        nextQueue = [];
        level++;
    }

    return -1;
};