/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // Iterate over each charater in haystack
    for(let i = 0; i < haystack.length; i++) {
        let k = i;
        let j = 0;
        
        // While the current character is equal to the corresponding character of the needle, continue, if not break
        while(haystack[k] === needle[j]) {
            if(j === needle.length - 1) return i;

            j++;
            k++;
        }
    }

    return -1;
};