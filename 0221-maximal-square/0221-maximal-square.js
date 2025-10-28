/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // Optimal Solution

    const hashmap = new Map();
    const rowColStringify = (row, col) => row + "," + col;
    const isInBound = (row, col) => row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length;

    // LargestArea Function:
    // - Find the right, bottom, and bottom right cell's minimum value and if the current cell is 1, find the square root of the value and + 1 and square to the current cell. 
    // - Store the value to cache
    const largestArea = (row, col) => {
        if(hashmap.has(rowColStringify(row, col))) return hashmap.get(rowColStringify(row, col));
        if(!isInBound(row, col) || matrix[row][col] === '0') return 0;

        const right = largestArea(row, col + 1);
        const bottomRight = largestArea(row + 1, col + 1);
        const bottom = largestArea(row + 1, col);

        const min = Math.min(right, bottomRight, bottom);

        const area = Math.pow(Math.sqrt(min) + 1, 2);

        hashmap.set(rowColStringify(row, col), area);
        return area;
    }

    // Iterate over each cell.
    // For each cell, find the largest sqaure of 1's as the cell being the top left cell.
    let ans = 0;
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            ans = Math.max(ans, largestArea(row, col));
        }
    }

    return ans;
};