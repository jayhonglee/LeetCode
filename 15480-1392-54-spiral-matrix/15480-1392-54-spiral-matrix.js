/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // using seen set, traverse through matrix going right down left up
    let seen = new Set();
    let ans = [];
    let row = 0, col = 0;
    let total = matrix.length * matrix[0].length;
    const isValid = (row, col) => row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length;
    const stringify = (row, col) => row + "," + col;

    while(total > 0) {
        while(isValid(row, col) && !seen.has(stringify(row,col))) {
            seen.add(stringify(row, col));
            ans.push(matrix[row][col]);
            total--;
            if(isValid(row, col + 1) && !seen.has(stringify(row,col + 1))) col++;
        }
        row++;

        while(isValid(row, col) && !seen.has(stringify(row,col))) {
            seen.add(stringify(row, col));
            ans.push(matrix[row][col]);
            total--;
            if(isValid(row + 1, col) && !seen.has(stringify(row + 1,col))) row++;
        }
        col--;

        while(isValid(row, col) && !seen.has(stringify(row,col))) {
            seen.add(stringify(row, col));
            ans.push(matrix[row][col]);
            total--;
            if(isValid(row, col - 1) && !seen.has(stringify(row,col - 1))) col--;
        }
        row--;

        while(isValid(row, col) && !seen.has(stringify(row,col))) {
            seen.add(stringify(row, col));
            ans.push(matrix[row][col]);
            total--;
            if(isValid(row - 1, col) && !seen.has(stringify(row - 1,col))) row--;
        }
        col++;
    }

    return ans;
};