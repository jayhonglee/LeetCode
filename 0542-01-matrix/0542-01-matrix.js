/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const matRowLength = mat.length;
    const matColumnLength = mat[0].length;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    const valid = (row, col) => (row < 0 || col < 0 || row >= matRowLength || col >= matColumnLength) ? false : true;
    let queue = [], nextQueue = [], seen = [];
    
    for(let i = 0; i < matRowLength; i++) {
        seen.push(new Array(matColumnLength).fill(false));
        for(let j = 0; j < matColumnLength; j++) {
            if(mat[i][j] === 0) queue.push([i,j]);
        }
    }
    
    let level = 0;
    while(queue.length > 0 ) {
        for(const [x1,y1] of queue) {
            if(mat[x1][y1] === 1 && seen[x1][y1] === false) mat[x1][y1] = level; 
            
            seen[x1][y1] = true;
            
            for(const [x2,y2] of directions) {
                const newX = x1 + x2;
                const newY = y1 + y2;
                
                if(valid(newX, newY) && seen[newX][newY] === false) nextQueue.push([newX, newY]);
            }
        }
        
        queue = nextQueue;
        nextQueue = [];
        level++;
    }
    
    return mat;
};