/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let set = new Set(["0 0"]), x = 0, y = 0;
    
    for(const char of path) {
        if(char === "N") {
             y += 1;
        } else if(char === "S") {
             y += -1;
        } else if(char === "E") {
             x += 1;
        } else if(char === "W") {
             x += -1;
        }
        
        if(set.has(`${x} ${y}`)) {
            return true;    
        }
        
        set.add(`${x} ${y}`);
    }
    
    return false;
};