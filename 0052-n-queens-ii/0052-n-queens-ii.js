/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
//     Define backtrack function
    const backtrack = (row, col, diagonal, antiDiagonal) => {
        let ans = 0;
        if(row === n) return 1;
        
        for(let i = 0; i < n; i++) {
            const currDiagonal = row - i;
            const currAntiDiagonal = row + i;
            
            if(col.has(i) || diagonal.has(currDiagonal) || antiDiagonal.has(currAntiDiagonal)) continue;
            
            col.add(i);
            diagonal.add(currDiagonal);
            antiDiagonal.add(currAntiDiagonal);
            
            ans += backtrack(row + 1, col, diagonal, antiDiagonal);
            
            col.delete(i);
            diagonal.delete(currDiagonal);
            antiDiagonal.delete(currAntiDiagonal);
        }
        
        return ans;
    }
    
//     Call backtrack and return ans
    return backtrack(0, new Set(), new Set(), new Set());
};