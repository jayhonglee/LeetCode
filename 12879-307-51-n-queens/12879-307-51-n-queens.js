/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    // set variables
    let ans = [];
    let cols = new Set();
    let posDig = new Set();
    let negDig = new Set();
    let curr = new Array(n).fill(".".repeat(n))

    // backtrack
    const backtrack = (row) => {
        if(row === n) return ans.push([...curr]);

        for(let col = 0; col < n; col++) {
            if(
                cols.has(col) ||
                posDig.has(col - row) ||
                negDig.has(col + row)
            ) continue;

            cols.add(col);
            posDig.add(col - row);
            negDig.add(row + col);
            curr[row] = curr[row].slice(0, col) + "Q" + curr[row].slice(col + 1);

            backtrack(row + 1, cols, posDig, negDig, curr);

            cols.delete(col);
            posDig.delete(col - row);
            negDig.delete(col + row);
            curr[row] = curr[row].slice(0, col) + "." + curr[row].slice(col + 1);
        }
    }

    // run backtrack
    backtrack(0);


    // return ans
    return ans;
};