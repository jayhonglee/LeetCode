 /**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // loop over the matrix cells (row by row with col by col) and if the cell is 0, set its first element in the row and col as 0 (use firstRow/Col variable if needed)
    let firstRow = false;
    let firstCol = false;

    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            const curr = matrix[row][col];

            if (curr === 0) {
                firstRow ||= row === 0;
                firstCol ||= col === 0;
                
                if (row > 0 && col > 0) {
                    matrix[row][0] = 0;
                    matrix[0][col] = 0;
                }
            }
        }
    }

    // set 0s to rows 
    for(let row = 1; row < matrix.length; row++) {
        const curr = matrix[row][0];

        if(curr === 0) {
            for(let col = 1; col < matrix[0].length; col++) {
                matrix[row][col] = 0;
            }
        }
    }

    // set 0s to cols
    for(let col = 1; col < matrix[0].length; col++) {
        const curr = matrix[0][col];

        if(curr === 0) {
            for(let row = 1; row < matrix.length; row++) {
                matrix[row][col] = 0;
            }
        }
    }

    // set 0s to first row
    if(firstRow) {
        for(let col = 0; col < matrix[0].length; col++) {
            matrix[0][col] = 0;
        }
    }

    // set 0s to first col
    if(firstCol) {
        for(let row = 0; row < matrix.length; row++) {
            matrix[row][0] = 0;
        }
    }

    return matrix;
};