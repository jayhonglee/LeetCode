/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xStr = x + "";
    let left = 0;
    let right = xStr.length - 1;
    
    while(left < right) {
        if(xStr[left] !== xStr[right]) return false;
        left++;
        right--;
    }
    
    return true;
};