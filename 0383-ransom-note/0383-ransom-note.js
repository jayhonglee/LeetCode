/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomMap = new Map(), magazineMap = new Map();
    let ransom = ransomNote.split(""), magazineStr = magazine.split("");
    
    for(const char of ransom) {
        ransomMap.set(char, (ransomMap.get(char) || 0 ) + 1);
    }
    
    for(const char of magazineStr) {
        magazineMap.set(char, (magazineMap.get(char) || 0 ) + 1);
    }

    let ans = true;
    
    ransomMap.forEach((value, key) => {
        if(!magazineMap.has(key) || magazineMap.get(key) < value) {
            ans = false;
        }
    })
    
    return ans;
};