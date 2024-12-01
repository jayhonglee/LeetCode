/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hashmap = new Map([
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000],
    ])
    
    let ans = 0;
    for(let i = s.length - 1; i >= 0; i--) {
        const currentNumeral = s[i];
        const currentWithPrevNumeral = s[i - 1] + s[i];
        
        if(hashmap.has(currentWithPrevNumeral)) {
            ans += hashmap.get(currentWithPrevNumeral);
            i = i - 1;
        } else {
            ans += hashmap.get(currentNumeral);
        }
    }
    
    return ans;
};