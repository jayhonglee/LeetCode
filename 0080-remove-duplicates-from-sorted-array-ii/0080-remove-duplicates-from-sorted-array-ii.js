/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // Two Pointers Solution:
    // Time = O(n) & Space = O(1)
    // Read pointer just iterates over the nums 
    // Write pointer points to the index of the next valid element to come
    // If an invalid element is found, the write pointer doesn't iterate and still point to the index where it should get updated with the correct element and read pointer continues to iterate.
    // Once the right element is found, the new element is written to the write pointer.

    if(nums.length <= 2) return nums.length;
    
    let write = 2;

    for(let read = 2; read < nums.length; read++) {
        if(nums[read] !== nums[write - 2]) {
            nums[write] = nums[read];
            write++;
        }
    }

    return write;
};