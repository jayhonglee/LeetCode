/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
//     notes
//     nums1 = list of numbers to care for
//     nums2 = array of interest
    
//  declare variables
    let stack = [], hashmap = new Map(), ans = [];
    
//  iterate over num2 and store the next bigger element in a hashmap
    for(const y of nums2) {
        while(stack[stack.length-1] < y) {
            hashmap.set(stack.pop(), y);
        }
        stack.push(y);
    }
    
// for the reamining elements in the stack, set them to -1 in hahsmap
    for(const z of stack) {
        hashmap.set(z, -1);
    }
    
// iterate over nums1 and store corresponding value to ans array
    for(const x of nums1) {
        ans.push(hashmap.get(x));
    }
    
    return ans;
};
