/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length; i++) {
        let j = 0;
        let k = i;
        while(haystack[k] == needle[j]) {
            if(j >= needle.length - 1) {
                return i
            }
            
            k++;
            j++;
        }
    }
    
    return -1;
};