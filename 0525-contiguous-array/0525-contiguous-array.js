/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let hashmap = new Map([[0,-1]]), i = 0, ans = 0, count = 0;
    
    for(num of nums) {
        count += (num === 0 ? -1 : 1);
        
        if(hashmap.has(count)) {
            ans = Math.max(ans, i - hashmap.get(count));
        } else {
            hashmap.set(count, i);            
        }
        
        i++;
    }
    
    console.log(hashmap, ans);
    return ans;    
};