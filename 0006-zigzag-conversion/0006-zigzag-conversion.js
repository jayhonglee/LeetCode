/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
//     given a string s convert it to zigzag pattern and return its string
//     also given number of rows
    
//     edge case:
    if(numRows === 1) return s;
    
    let matrix = [];
    
    let strLength = s.length;
    let section = numRows + (numRows - 2);
    let totalSections = Math.ceil(strLength / section);
    let totalCols = totalSections * (numRows - 1);
    
    for(let i = 0; i < numRows; i++) {
        matrix.push(new Array(totalCols).fill(""));
    }
    
    let count = 0;
    let row = 0;
    let col = 0;
    for(const str of s) {
        matrix[row][col] = str;
        
        if(count < numRows - 1) row++;
        else if (count >= numRows - 1) {
            row--;
            col++;
        }
        count = (count + 1) % (numRows * 2 - 2);
    }
    
    return matrix.map((row) => row.join("")).join("");;
};