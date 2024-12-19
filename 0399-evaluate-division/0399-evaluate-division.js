/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    
    const adjacentNeighbors = new Map();
    for(let i = 0; i < equations.length; i++) {
        const [x, y] = equations[i];
        const value = values[i];
        
        if(!adjacentNeighbors.has(x)) adjacentNeighbors.set(x, []);
        if(!adjacentNeighbors.has(y)) adjacentNeighbors.set(y, []);
        
        adjacentNeighbors.get(x).push([y, value]);
        adjacentNeighbors.get(y).push([x, 1 / value]);
    }
    
    const bfs = function(start, finish) {
        let queue = [[start, 1]];
        let seen = new Set();
        let ans = -1;
        
        if(start === finish) {
            return adjacentNeighbors.has(start) ? 1 : -1;
        }
        
        while(queue.length) {
            let nextQueue = [];
            
            for(const [node, acc] of queue) {
                if(seen.has(node)) continue;
                seen.add(node);
                
                if(node === finish) return acc;
                
                const neighbors = adjacentNeighbors.get(node) || [];
                
                for(const [neighbor, cost] of neighbors) {
                    nextQueue.push([neighbor, acc * cost]);
                }
            }
            
            queue = nextQueue;
        }
        
        return ans;
    }
    
    let ans = [];
    for(const [start, finish] of queries) {
        ans.push(bfs(start, finish));
    }
    
    return ans;
};