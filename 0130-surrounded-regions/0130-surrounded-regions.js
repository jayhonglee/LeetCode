/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const isValid = (row, col) => row >= 0 && row < board.length && col >= 0 && col < board[0].length;
    const stringifyCoord = (row, col) => row + "," + col;
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    
//     bfs search
//     return true or false identifying if any of the cell is connected to the edge
//     also store each cell coordinates 
    const bfs = function(row, col, checkedCells) {
        let isSurrounded = true;
        let queue = [];
        queue.push([row, col]);
        
        while(queue.length) {
            const nextQueue = [];
            for(const [row, col] of queue) {
                if(seen.has(stringifyCoord(row,col))) continue;
                seen.add(stringifyCoord(row,col));
                
                checkedCells.push([row, col]);
                
                for(const [drow, dcol] of directions) {
                    const [newRow, newCol] = [row + drow, col + dcol];
                    
                    if(!isValid(newRow, newCol)) isSurrounded = false;
                    if(isValid(newRow, newCol) && board[newRow][newCol] === "O") nextQueue.push([newRow, newCol]);
                }
            }
            
            queue = nextQueue;
        }
        
        return isSurrounded;
    }

//     for every "O" cell thath hasn't been seen, do a bfs search 
//     if is surrounded (true), using the stored coordinates, mark them all as 'X'
    let seen = new Set();
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            if(seen.has(stringifyCoord(row,col)) || board[row][col] === "X") continue;
            
            const checkedCells = [];
            const isSurrounded = bfs(row, col, checkedCells);
            if(isSurrounded) {
                for(const [row, col] of checkedCells) {
                    board[row][col] = "X";
                }
            }
        }
    }
    
//     return the next matrix
    return board;
};