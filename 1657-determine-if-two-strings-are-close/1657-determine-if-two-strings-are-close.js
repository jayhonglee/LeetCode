/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    function createHashmap (string) {
        let hashmap = new Map();
        for(const char of string) {
            hashmap.set(char, (hashmap.get(char) || 0) + 1);
        }
        
        return hashmap;
    }
    
    let ans = true;
    
    const word1HashmapArray = [...createHashmap(word1)];
    const word2HashmapArray = [...createHashmap(word2)];
        
    return word1HashmapArray.map(x=> x[1]).sort().join(" ") === word2HashmapArray.map(x=>x[1]).sort().join(" ") && word1HashmapArray.map(x=> x[0]).sort().join(" ") === word2HashmapArray.map(x=>x[0]).sort().join(" ");
        
};