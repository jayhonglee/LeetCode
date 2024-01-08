/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0, sLetter, tLetter, curr = 0;
    console.log(curr == s.length);
    
    
    for(let i=0; i<s.length; i++) {
        sLetter = s[i];    
        while(j < t.length) {
            tLetter = t[j];
            if(sLetter == tLetter) {
                curr++;
                j++;
                break;
            }
            j++;
        }
    }
    
    
    if(curr == s.length) {
        return true;
    }
    
    return false;
};