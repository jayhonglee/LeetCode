/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longestPrefix = strs[0].split("");
    
    for(let i = 1; i < strs.length; i++) {
        const currentStr = strs[i];
        
        for(let j = 0; j < longestPrefix.length; j++) {
            if(longestPrefix[j] !== currentStr[j]) {
                longestPrefix.splice(j);
                break;
            }
        }
    }
    
    return longestPrefix.join("");
};