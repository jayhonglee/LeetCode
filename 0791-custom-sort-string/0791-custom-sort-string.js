/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
// create hashmapOrder for place of appearance 1st index
    let hashmapOrder = new Map(), i = 1;
    
    for(const char of order) {
        hashmapOrder.set(char, i);
        i++;
    }
    
//     create hashmapS and check if hashmapOrder has a element and if yes, set the appearance.
    let hashmapS = new Map();
    let j = hashmapOrder.size + 1;
    
    for(const char of s) {
        if(hashmapOrder.has(char)) {
            hashmapS.set(char, [hashmapOrder.get(char), (hashmapS.get(char) ? hashmapS.get(char)[1] : 0) + 1]);
        } else {
            hashmapS.set(char, [j, (hashmapS.get(char) ? hashmapS.get(char)[1] : 0) + 1]);
            j++;
        }
    }
    
//     loop over the hasmapS using .sort((valueA, valueB,) => 3A- 2B)
    let ans = "";
    
    [...hashmapS.entries()].sort((a, b) => {
        return a[1][0] - b[1][0];
    }).forEach(pair => {
        for(let i = 0; i < pair[1][1]; i++) {
            ans += (pair[0])            
        }
    });
    
    return ans;
};