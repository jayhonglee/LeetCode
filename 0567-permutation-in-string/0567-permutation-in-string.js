/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    function checkMapEqual(map1, map2) {
        let ans = true;
        
        if(map1.size !== map2.size) {
            return ans = false;
        }
        
        map1.forEach((value,key) => {
            if(!map2.has(key) || value !== map2.get(key)) {
                ans = false;
            }
        })
        
        return ans;
    }
    
    let hashmapS1 = new Map();
    
    for(const str of s1) {
        hashmapS1.set(str, (hashmapS1.get(str) || 0) + 1);
    }
        
    let ans = false;
    
    for(let i = 0; i < s2.length - s1.length + 1; i++) {
        let hashmapS2 = new Map();
        
        for(let j = 0; j < s1.length; j++) {
            hashmapS2.set(s2[i + j], (hashmapS2.get(s2[i + j]) || 0) + 1)
        }
        
        if(checkMapEqual(hashmapS1, hashmapS2)) return true;
    }
    
    return false;
};