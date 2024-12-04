/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const m = s.length;
    const n = t.length;
    
    if(m < n) return "";
    
    let dict = {};
    for(let i = 0; i < n; i++) {
        const char = t[i];
        dict[char] = (dict[char] || 0) + 1;
    }
    
    let ans = "";
    let right = 0;
    let count = 0;
    let temp = "";
    for(let left = 0; left <= m - n; left++) {
        while(right < m && count < n) {
            const currChar = s[right];
            temp += currChar;
            if(dict[currChar] !== undefined) {
                dict[currChar]--;
                if(dict[currChar] >= 0) count++;
            }
            right ++;
        }
        
        if(count === n && (ans.length === 0 || temp.length < ans.length)) {
            ans = temp;
        }
        
        if(dict[s[left]] !== undefined) {
            dict[s[left]]++;
            if(dict[s[left]] > 0) count--;
        }
        temp = temp.slice(1);
    }
    
    return ans;
};