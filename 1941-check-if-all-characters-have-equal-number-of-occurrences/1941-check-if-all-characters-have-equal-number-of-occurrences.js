/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let array = s.split(""), hashMap = new Map(), set = new Set();
    
    for(const char of array) {
            hashMap.set(char, (hashMap.get(char) || 0) + 1);
    }
    
    hashMap.forEach((value, key) => {
        set.add(value);
    })
    
    return set.size === 1 ? true : false;
};