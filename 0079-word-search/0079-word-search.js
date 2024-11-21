/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
//     Define backtrack function
    const dirs = [[-1,0],[1,0],[0,1],[0,-1]];
    const isValid = (row, col) => row >= 0 && row < board.length && col >= 0 && col < board[0].length;
    const stringify = ([row, col]) => row + "," + col;
    const seen = new Set();
    
    const backtrack = (curr) => {
        const latestCell = curr[curr.length - 1];
        const latestCellString = stringify(latestCell);
        
        if(seen.has(latestCellString)) return false;
        seen.add(latestCellString);
        
        if(curr.length === word.length) {
            return true;
        }
        
        for(const [x,y] of dirs) {
            const [currX, currY] = latestCell;
            const [neighborX, neighborY] = [currX + x, currY + y];
            
            if(isValid(neighborX,neighborY) && board[neighborX][neighborY] === word[curr.length]) {
                if(backtrack([...curr, [neighborX, neighborY]])) return true;
            }
        }
        
        
        seen.delete(stringify(latestCell));
    }
    
//     Loop over each grid and call the backtrack function and if it's the starting letter and back track returns true, return true. Other wise false.
    for(let row = 0; row < board.length; row++) {
        for(let col = 0; col < board[0].length; col++) {
            const char = board[row][col];
            if(char === word[0] && backtrack([[row,col]])) return true;
            seen.clear();
        }
    }
    
    return false;
};
