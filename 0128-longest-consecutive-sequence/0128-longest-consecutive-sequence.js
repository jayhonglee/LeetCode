/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set();
    for(const num of nums) {
        set.add(num);
    }
    
    let seen = new Set();
    let ans = 0;
    for(const num of set) {
        if(!seen.has(num)) {
            let currNum = num;
            let count = 0;
            while(!seen.has(currNum) && set.has(currNum)) {
                count++;
                seen.add(currNum);
                currNum = currNum + 1;
                
            }
            currNum = num - 1;
            while(!seen.has(currNum) && set.has(currNum)) {
                count++;
                seen.add(currNum);
                currNum = currNum - 1;
                
            }
            
            ans = Math.max(ans, count);
        }
    }
    
    return ans;
};