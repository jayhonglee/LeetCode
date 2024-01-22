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
    
    console.log([...createHashmap(word1)].map(x=> x[1]).join(" ") === [...createHashmap(word2)].map(x=>x[1]).join(" ") && createHashmap(word1).size === createHashmap(word2).size)
    
   console.log(createHashmap(word1), createHashmap(word2));
    
    return [...createHashmap(word1)].map(x=> x[1]).sort().join(" ") === [...createHashmap(word2)].map(x=>x[1]).sort().join(" ") && createHashmap(word1).size === createHashmap(word2).size && [...createHashmap(word1)].map(x=> x[0]).sort().join(" ") === [...createHashmap(word2)].map(x=>x[0]).sort().join(" ");
        
};