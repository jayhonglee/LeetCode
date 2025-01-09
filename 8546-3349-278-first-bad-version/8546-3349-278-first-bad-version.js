/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1, right = n;
        while(left < right) {
            const mid = Math.floor((left + right) / 2);

            if(isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
            if(isBadVersion(mid) && isBadVersion(mid - 1)) right = mid - 1;
            if(!isBadVersion(mid)) left = mid + 1;
        }

        return left;
    };
};