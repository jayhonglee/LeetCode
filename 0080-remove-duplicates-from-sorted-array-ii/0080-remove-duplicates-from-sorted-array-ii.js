/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const hashmap = new Map();
    let read = 0;
    for(let write = 0; write < nums.length; write++) {
        while(hashmap.get(nums[read]) >= 2) {
            read++;
        }
        

        if(read >= nums.length) {
            nums.splice(write);
            break;
        } 
        nums[write] = nums[read];
        
        if(!hashmap.get(nums[read])) hashmap.set(nums[read], 0);
        hashmap.set(nums[read], hashmap.get(nums[read]) + 1);
        
        read++;
    }
};