/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let set = new Set(), ans = "";
    
    for(const path of paths) {
        set.add(path[0]);
    }
    
    for(const path of paths) {
        for(let i = 0; i < path.length; i++) {
            if(!set.has(path[i])) {
                ans += path[i];   
            }
        }
    }
    
    return ans;
};