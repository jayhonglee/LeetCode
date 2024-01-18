/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashmap = new Map(), ans = [];
    
    for(let str of strs) {
        const sortedStr = str.split("").sort().join("");
        
        if(!hashmap.get(sortedStr)) {
            hashmap.set(sortedStr, [str])
        } else {
            hashmap.get(sortedStr).push(str);
        }
    }
    
    hashmap.forEach((value, key) => {
        ans.push(value);
    })
    
    return ans;
};