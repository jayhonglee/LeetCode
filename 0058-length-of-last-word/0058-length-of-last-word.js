/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const splitted = s.trim().split(" ");
    return splitted[splitted.length - 1].length;
    
    return -1;
};