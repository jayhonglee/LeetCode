/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    let hashmap = new Map(), set = new Set(), ans = 0;
    
    for(let i = 0; i < n; i++) {
        hashmap.set(i, []);
    }
    
    for(const [x, y] of edges) {
        hashmap.get(x).push(y);
        hashmap.get(y).push(x);
    }
    
    const dfs = (node) => {
        set.add(node);
        
        for(const neighbor of hashmap.get(node)) {
            if(!set.has(neighbor)) dfs(neighbor);
        }
    }
    
    for(let i = 0; i < n; i++) {
        if(!set.has(i)) {
            dfs(i);
            ans++;
        }
    }
    
    return ans;
};