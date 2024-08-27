/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    let set = new Set(), ans = [];
    
    for(const [x, y] of edges) {
        set.add(y);
    }
    
    for(let i = 0; i < n; i ++) {
        if(!set.has(i)) ans.push(i);
    }
    
    return ans;
};