/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(cards) {
    let hashmap = new Map(), i = 0, ans = Infinity;
    for(const card of cards) {
        let newVal = i - hashmap.get(card) + 1;
        ans = newVal ? Math.min(newVal, ans) : ans;
        hashmap.set(card, i);
        i++;
    }
    
    return ans === Infinity ? -1 : ans;
};