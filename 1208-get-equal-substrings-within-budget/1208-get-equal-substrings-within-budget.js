/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let stringS = s.split(""), stringT = t.split("");
    
    let left = 0, curr = 0, length = 0; ans = 0;
    
    for(let right = 0; right < s.length; right++) {
        curr += Math.abs(s.charCodeAt(right) - t.charCodeAt(right));
        
        while(curr > maxCost && left <= right) {
            curr -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left));
            left++;
        }
        
        if(left <= right) {
            length = right - left + 1;
        }
        
        ans = Math.max(length, ans);
    }
    
    return ans;
};