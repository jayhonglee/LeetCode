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
    
    function sortAndJoin (array) {
        return array.sort().join(" ");
    }
    
    let ans = true;
    
    const word1HashmapArray = [...createHashmap(word1)];
    const word2HashmapArray = [...createHashmap(word2)];
        
    return sortAndJoin(word1HashmapArray.map(x=> x[1])) === sortAndJoin(word2HashmapArray.map(x=>x[1])) && sortAndJoin(word1HashmapArray.map(x=> x[0])) === sortAndJoin(word2HashmapArray.map(x=>x[0]));
        
};