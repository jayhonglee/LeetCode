/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let hashmap = new Map();
    let set = new Set();
    let connectionsSet = new Set();
    
    let dfs = (node) => {
        let ans = 0;
        
        for(const neighbor of hashmap.get(node)) {
            if(!set.has(neighbor)) {
                
                if(connectionsSet.has(node + "," + neighbor)) {
                    ans++;
                }
                
                set.add(neighbor);
                ans += dfs(neighbor);
            }
        }
        
        return ans;
    }
    
    for(let i = 0; i < n; i++) {
        hashmap.set(i, []);
    }
    
    for(const [x, y] of connections) {
        hashmap.get(x).push(y);
        hashmap.get(y).push(x);
        connectionsSet.add(x + "," + y)
    }

    set.add(0);
    return dfs(0);
};