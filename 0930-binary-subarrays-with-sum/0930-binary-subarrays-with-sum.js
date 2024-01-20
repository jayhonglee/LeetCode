/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    let hashmap = new Map([[0,1]]), ans = 0, curr = 0;
    
    for(const num of nums) {
        curr += num;
        
        if(hashmap.has(curr - goal)) {
            ans += hashmap.get(curr - goal);
        }
        
        hashmap.set(curr, (hashmap.get(curr) || 0) + 1);
    }  
    
    return ans;
};
