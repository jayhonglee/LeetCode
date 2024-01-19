/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let set = new Set(), ans = 0;
    
    for(const jewel of jewels) {
        set.add(jewel);
    }

    for(const stone of stones) {
        set.has(stone) && ans++;
    }
    
    return ans;
};