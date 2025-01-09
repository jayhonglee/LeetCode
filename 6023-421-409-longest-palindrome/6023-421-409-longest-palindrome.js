/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = new Map();
    
    // Count the frequency of each character
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let ans = 0;
    let hasOdd = false;

    // Calculate the palindrome length
    for (const value of map.values()) {
        if (value % 2 === 0) {
            ans += value; // Use all characters with even counts
        } else {
            ans += value - 1; // Use the largest even subset of characters with odd counts
            hasOdd = true; // Track that we can use one odd character as the center
        }
    }

    // Add one if there are any odd counts (for the center character of the palindrome)
    if (hasOdd) ans++;

    return ans;
};