/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let left = 0, right = k - 1, string = s.split(""), ans = 0;

    for(let i = left; i < k; i++) {
            if(["a", "e", "i", "o", "u"].includes(string[i])){
                ans++;
            }
    }

    let curr = ans;

    while(ans != k && right < string.length) {
        if(["a", "e", "i", "o", "u"].includes(string[left])){
            curr--;
        } 
        left++;
        right++;
        if(["a", "e", "i", "o", "u"].includes(string[right])){
            curr++;
        } 
        ans = Math.max(curr, ans);
    }

    return ans;
};