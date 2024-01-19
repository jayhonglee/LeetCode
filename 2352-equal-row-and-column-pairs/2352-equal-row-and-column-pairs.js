/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowMap = new Map(), colMap = new Map();
    
    for(const row of grid) {
        const rowStr = row.join(" ");
        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
    }
    
    for(let i = 0; i < grid[0].length; i++) {
        let col = "";
        for(let j = 0; j < grid[0].length; j++) {
            !col ? col += grid[j][i] : col += ` ${grid[j][i]}`;
        }
        colMap.set(col, (colMap.get(col) || 0) + 1);
    }
    
    let ans = 0;
    console.log(rowMap, colMap);
    rowMap.forEach((value, key) => {
        if(colMap.has(key)) {
            ans += value * colMap.get(key);
        }
    })
    
    return ans;
};