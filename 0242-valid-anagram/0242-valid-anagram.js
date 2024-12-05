/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    
    const sMap = new Map();
    const tMap = new Map();
    for(let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];
        
        if(!sMap.has(sChar)) sMap.set(sChar, 0);
        if(!tMap.has(tChar)) tMap.set(tChar, 0);
        
        sMap.set(sChar, sMap.get(sChar) + 1);
        tMap.set(tChar, tMap.get(tChar) + 1);
    }
    
  for (let [key, value] of sMap) {
    // Check if the key exists in the second map
    if (!tMap.has(key)) {
      return false;
    }

    // Check if the values are equal
    if (tMap.get(key) !== value) {
      return false;
    }
  }
    
    return true;
};