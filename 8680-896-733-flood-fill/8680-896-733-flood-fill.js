/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const originalColor = image[sr][sc];
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    const isInbound = (row, col) => row >= 0 && col >= 0 && row < image.length && col < image[0].length;
    let queue = [[sr,sc]];
    let seen = new Set();

    while(queue.length) {
        const nextQueue = [];

        for(const [row, col] of queue) {
            if(seen.has(row + "," + col) || !isInbound(row,col) || image[row][col] !== originalColor) continue;
            seen.add(row + "," + col);
            image[row][col] = color;

            for(const [dx, dy] of dirs) {
                nextQueue.push([row + dy, col + dx]);
            }
        }

        queue = nextQueue;
    }

    return image;
};