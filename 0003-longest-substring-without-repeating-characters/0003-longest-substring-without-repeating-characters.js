/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let set = new Set(), left = 0, ans = 0;
    
    for(let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        
        set.add(s[right]);
        ans = Math.max(ans, right - left + 1);
    }
    
    
    return ans;
};