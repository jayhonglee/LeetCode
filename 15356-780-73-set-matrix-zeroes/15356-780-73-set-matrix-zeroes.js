 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // loop over the matrix cells (row by row with col by col)
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            const curr = matrix[row][col];
            if(curr === 0) updateInPlace(row, col);
        }
    }

    // spread out horizontally and vertically setting non 0s to -1s
    function updateInPlace(i, j) {
        // update horizontally
        for(let col = 0; col < matrix[0].length; col++) {
            if(col === j || matrix[i][col] === 0) continue;
            matrix[i][col] = Infinity;
        }

        // update vertically
        for(let row = 0; row < matrix.length; row++) {
            if(row === i || matrix[row][j] === 0) continue;
            matrix[row][j] = Infinity;
        }
    }

    // convert all -1s to 0s
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            const curr = matrix[row][col];
            if(curr === Infinity) matrix[row][col] = 0;
        }
    }

    return matrix;
};