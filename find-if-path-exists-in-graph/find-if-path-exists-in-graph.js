/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    let hashmap = new Map(), seen = new Set();
    
    for(let i = 0; i < n; i++) {
        hashmap.set(i, []);
    }
    
    for(const [x, y] of edges) {
        hashmap.get(x).push(y);
        hashmap.get(y).push(x);
    }
    
    const dfs = (vertex) => {
        if(seen.has(vertex)) return;
        
        seen.add(vertex);
        for(const neighbor of hashmap.get(vertex)) {
            dfs(neighbor);
        }
    }
    
    dfs(source);
    return seen.has(destination);
};