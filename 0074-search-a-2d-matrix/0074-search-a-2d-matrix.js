/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n);
        let col = mid % n;
        let num = matrix[row][col];
        
        if (num == target) {
            return true;
        }
        
        if (num < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
};