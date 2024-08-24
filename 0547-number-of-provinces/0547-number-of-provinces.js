/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
//     loop over every node
//     perform dfs if not visited
//     for every dfs, ans++
    
    let hashmap = new Map();
    let set = new Set();
    let ans = 0;
    
    const dfs = (node) => {
        if(node === undefined) return;
        
        set.add(node);
        
        for(let i = 0; i < hashmap.get(node).length; i++) {
            if(!set.has(hashmap.get(node)[i])) dfs(hashmap.get(node)[i]);
        }
    }
    
    for(let i = 0; i < isConnected.length; i++) {
        hashmap.set(i, []);
        
        for(let j = 0; j < isConnected[i].length; j++) {
            if(isConnected[i][j] === 1 && j != i) hashmap.get(i).push(j)
        }
    }
    
    for(let i = 0; i < isConnected.length; i++) {
        if(!set.has(i)) {
            dfs(i);
            ans++;
        }
    }
    
    return ans;
};