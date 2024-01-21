/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    function applySameStyle(str) {
        let hashmap = new Map(), finalStr = "", i = 0;
        
        for(const char of str) {
            if(!hashmap.has(char)) {
                hashmap.set(char, i);        
                i++;
            }
            
            finalStr += (` ${hashmap.get(char)}`);
        }
        
        return finalStr;
    }
    
    return applySameStyle(s) === applySameStyle(t);
};