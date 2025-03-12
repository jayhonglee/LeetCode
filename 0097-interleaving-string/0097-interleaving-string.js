/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const s1Length = s1.length;
    const s2Length = s2.length;
    const s3Length = s3.length;

    // edge case
    if(s1Length + s2Length !== s3Length) return false;

    // backtrack f(x)
    const backtrack = (s1Idx, s2Idx, s3Idx) => {
        // return true if s3 is successfully made
        if(s3Idx >= s3Length) return true;

        // check cache
        const key = `${s1Idx},${s2Idx}`;
        if (cache.has(key)) return cache.get(key);

        const s1Char = s1[s1Idx];
        const s2Char = s2[s2Idx];
        const s3Char = s3[s3Idx];
        
        if(s3Char !== s1Char && s3Char !== s2Char) return false;
        if(s3Char === s1Char && backtrack(s1Idx + 1, s2Idx, s3Idx + 1)) return true;
        if(s3Char === s2Char && backtrack(s1Idx, s2Idx + 1, s3Idx + 1)) return true;

        // update cache
        cache.set(`${s1Idx},${s2Idx}`, false);

        // return false is s3 is not made
        return false;
    }

    const cache = new Map();
    return backtrack(0,0,0);
};