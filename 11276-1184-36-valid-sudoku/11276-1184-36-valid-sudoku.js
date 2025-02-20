/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // create seen
    const seenRow = Array.from({ length: 9 }, () => new Set());
    const seenCol = Array.from({ length: 9 }, () => new Set());
    const seenSubBox = Array.from({ length: 9 }, () => new Set());
    
    // loop over the board col by col for each row
    for(let row = 0; row < 9; row++) {
        for(let col = 0; col < 9; col++) {
            const curr = board[row][col];

            // if current character is '.', skip
            if(curr === ".") continue;
        
            // check if the current character is present in the current row or col or subbox
            // if present, return false
            const subBox = 
                Math.floor(col / 3) +
                Math.floor(row / 3) * 3

            if (
                seenRow[row].has(curr) || 
                seenCol[col].has(curr) || 
                seenSubBox[subBox].has(curr)
            ) return false;
            

            // if not store the char to them and cont.
            seenRow[row].add(curr);
            seenCol[col].add(curr);
            seenSubBox[subBox].add(curr);
        }
    }

    // once done iterating return true
    return true;
};