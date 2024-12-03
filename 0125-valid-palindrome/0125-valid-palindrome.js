/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const arr = s.split("").filter((char) => /[a-zA-Z0-9]/.test(char)).map((char) => char.toLowerCase());
    
    let left = 0, right = arr.length - 1;
    while(left < right) {
        if(arr[left] !== arr[right]) return false;
        left++;
        right--;
    }
    return true;
};