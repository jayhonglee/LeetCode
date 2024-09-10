/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
//     bfs: returns the level when the nearest exit is found
//     perform bfs at entrance
    const format = (y,x) => x + ',' + y;
    const outOfBounds = (y,x) => x < 0 || x > maze[0].length - 1 || y < 0 || y > maze.length -1;
    const isBoundary = (y,x) => x === 0 || x === maze[0].length -1 || y === 0 || y === maze.length - 1;
    const isEmpty = (y,x) => maze[y][x] === ".";
    let queue = [entrance], nextQueue = [], seen = new Set(), dirs = [[0,1],[0,-1],[1,0],[-1,0]], level = 0;
    
    while(queue.length) {
        for(const [row, col] of queue) {
            if(seen.has(format(row,col)) || outOfBounds(row, col) || !isEmpty(row,col)) continue;
            
            if(isBoundary(row, col) && isEmpty(row, col) && format(entrance[0], entrance[1]) !== format(row, col)) {
                return level;
            }
            
            for(const [x, y] of dirs) {
                nextQueue.push([row+x, col+y]);
            }
            
            seen.add(format(row, col));
        }
        
        queue = nextQueue;
        nextQueue = [];
        level++;
    }

    return -1;
};