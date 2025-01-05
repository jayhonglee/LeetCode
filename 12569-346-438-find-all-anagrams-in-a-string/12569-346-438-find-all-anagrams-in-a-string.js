/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    // use sliding window
    // set left as 0 and right as 0 initially
    // loop right pointer over 

    function areHashMapsEqual(map1, map2) {
        if (map1.size !== map2.size) return false;

        for (const [key, value] of map1) {
            if (!map2.has(key) || map2.get(key) !== value) {
                return false;
            }
        }

        return true;
    }

    let target = 0;
    const pMap = new Map();
    for(const char of p) {
        pMap.set(char, pMap.get(char) + 1 || 1);
    }

    let left = 0, right = 0;
    let total = 0;
    let ans = [];
    const sMap = new Map();
    for(let right = 0; right < s.length; right++) {
        while(right - left >= p.length) {
            const char = s[left];
            const newCharVal = sMap.get(char) - 1;
            if(newCharVal <= 0) sMap.delete(char);
            else sMap.set(char, newCharVal);

            left++;
        }

        const char = s[right];
        sMap.set(char, sMap.get(char) + 1 || 1);

        if(areHashMapsEqual(sMap, pMap)) ans.push(left);
    }

    return ans;
};