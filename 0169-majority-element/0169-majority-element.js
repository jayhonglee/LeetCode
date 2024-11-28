/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hashmap = new Map();
    
    for(const num of nums) {        
        if(!hashmap.get(num)) hashmap.set(num, 0);
        
        const newValue = hashmap.get(num) + 1; 
        hashmap.set(num, newValue);
    }
    
    const ans = [...hashmap].sort((a,b) => {
        return a[1] - b[1];
    })
    console.log(ans[ans.length - 1]);
    return ans[ans.length - 1][0];
};