/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
//     Define variables
    let queue = [], nextQueue = [], steps = 0, seen = new Set(deadends);
    
//     Create a function that returns all possible neighbors
    const getNeighbors = (str) => {
        let returnArr = [];
        
        for(let i = 0; i < 4; i++) {
            for(const change of [-1, 1]) {
                const changed = (+str[i] + change + 10) % 10;
                returnArr.push(str.slice(0, i) + changed + str.slice(i + 1, 4));
            }
        }
        
        return returnArr;
    }
    
//     Perform bfs
    queue.push("0000");
    
    while(queue.length) {
        for(const item of queue) {
            if(seen.has(item)) continue;
            if(item === target) return steps;
            
            seen.add(item);
            const neighbors = getNeighbors(item);
            
            nextQueue.push(...neighbors)
        }
        
        queue = nextQueue;
        nextQueue = [];
        steps++;
    }
    
    return -1;
};