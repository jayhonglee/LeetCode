/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const backtrack = (row) => {
        if(row === n) {
            ans++;
            return;
        }

        for(let col = 0; col < n; col++) {
            const currPosDiagonal = col - row;
            const currNegDiagonal = col + row;

            if(!cols.has(col) && !posDiagonal.has(currPosDiagonal) && !negDiagonal.has(currNegDiagonal)) {
                cols.add(col);
                posDiagonal.add(currPosDiagonal);
                negDiagonal.add(currNegDiagonal);

                backtrack(row + 1);

                cols.delete(col);
                posDiagonal.delete(currPosDiagonal);
                negDiagonal.delete(currNegDiagonal);
            }
        }
    }

    const cols = new Set();
    const posDiagonal = new Set();
    const negDiagonal = new Set();
    let ans = 0;
    backtrack(0);

    return ans;
};