/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    let edgesHashMap = new Map(), restrictedSet = new Set(), visitedSet = new Set(), ans = 0;
    
    for(let i = 0; i < n; i++) {
        edgesHashMap.set(i, []);
        if(i < restricted.length) restrictedSet.add(restricted[i]);
    }
    
    for(const [x, y] of edges) {
        edgesHashMap.get(x).push(y);
        edgesHashMap.get(y).push(x);
    }
    
    const bfs = (node) => {
        if(visitedSet.has(node) || restrictedSet.has(node)) return;
        ans++;
        visitedSet.add(node);
        
        for(const neighborNode of edgesHashMap.get(node)) {
            bfs(neighborNode);
        }
    }
    
    bfs(0);
    
    return ans;
};