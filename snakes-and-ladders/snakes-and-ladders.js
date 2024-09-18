/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
//     if no board elements return -1
    if(board.length === 0) return -1;
    
//     flip every other board row and make board go from left to right
    board.reverse().forEach((row, index) => index % 2 === 1 && row.reverse())

//     start from the first row of board and first element & variables declare
    const visitied = new Set();
    const format = (row, col) => row + ',' + col;
    const rowCount = board.length;
    const colCount = board[0].length;
    const isOut = (row, col) => row < 0 || col < 0 || row >= rowCount || col >= colCount;
    let level = 0;
    let queue = [[0,0]]
    let nextQueue = [];
    
    while(queue.length > 0) {
        for(const [row, col] of queue) {
//     check if current position is in the board and has not been visited
//     set it as visited
            const current = format(row, col);
            const out = isOut(row, col);
            if(visitied.has(current) || out) continue;
            visitied.add(current);
        console.log(row, col)
            
//     return current level if current position is last row last element
            if(current === format(rowCount - 1, colCount - 1)) return level;
            
//     from curr + 1 to 6 add to queue but if curr + n is not -1 and has value, add that position  
            for(let i = 1; i < 7; i++) {
                let nextRow = row, nextCol = col + i;

                if(nextCol >= colCount) {
                    nextCol = nextCol % colCount;
                    nextRow = nextRow + Math.floor((col + i) / colCount);
                } 
                
                // Check if the next position is within bounds
                if (nextRow < rowCount && nextRow >= 0) {
                    let [newRow, newCol] = [nextRow, nextCol];
                    
                    // If there's a ladder or snake, move to the new destination
                    if (board[newRow][newCol] !== -1) {
                        const destination = board[newRow][newCol] - 1;
                        newRow = Math.floor(destination / colCount);
                        newCol = destination % colCount;
                    }

                    // Push the new position into the next queue
                    nextQueue.push([newRow, newCol]);
                }
            }
        }
        queue = nextQueue;
        nextQueue = [];
        level++;
    }
    
    //     once queue is empty and no value has been returned return -1
    return -1;
};