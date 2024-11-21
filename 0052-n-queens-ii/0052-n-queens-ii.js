/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
//     Define backtrack function
    const backtrack = (row, col, diagonal, antiDiagonal) => {
        if(row === n) return ans += 1;
        
        for(let i = 0; i < n; i++) {
            const currDiagonal = row - i;
            const currAntiDiagonal = row + i;
            
            if(col.has(i) || diagonal.has(currDiagonal) || antiDiagonal.has(currAntiDiagonal)) continue;
            
            col.add(i);
            diagonal.add(currDiagonal);
            antiDiagonal.add(currAntiDiagonal);
            
            backtrack(row + 1, col, diagonal, antiDiagonal);
            
            col.delete(i);
            diagonal.delete(currDiagonal);
            antiDiagonal.delete(currAntiDiagonal);
        }
    }
    
//     Call backtrack and return ans
    let ans = 0;
    backtrack(0, new Set(), new Set(), new Set());
    return ans;
};