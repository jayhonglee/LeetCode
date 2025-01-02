/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // set boundaries
    let left = 0, right = matrix.length * matrix[0].length - 1;

    const getValue = (idx) => {
        const row = Math.trunc(idx / matrix[0].length);
        const col = idx % matrix[0].length;

        return matrix[row][col];
    }

    // binary search
    //      given an index, find the corresponding cell
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = getValue(mid);

        if(midValue === target) return true;

        if(midValue > target) right = mid - 1;
        else left = mid + 1;
    }

    return false;
};