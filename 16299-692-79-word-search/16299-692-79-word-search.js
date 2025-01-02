/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const isValid = (row, col) => row >= 0 && row < board.length && col >= 0 && col < board[0].length;

    const backtrack = (row, col, currIdx, seen) => {
        if(!isValid(row,col) || seen.has(row + "," + col) || board[row][col] !== word[currIdx]) return false;
        seen.add(row + "," + col);

        currIdx++;

        if(currIdx === word.length) return true;
        
        for(const [dx, dy] of dirs) {
            const newRow = row + dy;
            const newCol = col + dx;

            if(backtrack(newRow, newCol, currIdx, seen)) return true;
        }

        seen.delete(row + "," + col);
        return false;
    }
    

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === word[0]) {
                if(backtrack(i,j, 0, new Set())) return true;
            }
        }
    }

    return false;
};