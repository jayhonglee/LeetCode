/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    let hashmap = new Map(), ans = [[], []];
    
    for(const [x,y] of matches) {
        hashmap.set(x, hashmap.get(x) || 0);
        hashmap.set(y, (hashmap.get(y) || 0) + 1);
    }

    for(const [key, value] of hashmap) {
        if(value === 0) {
            ans[0].push(key);
        } else if(value === 1){
            ans[1].push(key);
        }
    }

    ans = ans.map(x=> x.sort((x,y) => x - y));
    
    return ans;
};