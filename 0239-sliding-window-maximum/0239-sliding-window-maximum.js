/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
//     declare variables
    let queue = [], ans = [];
    
//     loop over the nums array
    for(let i = 0; i < nums.length; i++) {
        
//          if the current num is bigger than the queue[0] empty the queue
        while(nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }
//          enqueue current num to the queue
        queue.push(i);
        
//          if the queue has elements bigger than k, dequeue the first element
        while(queue[0] < i - (k - 1)) {
            queue.shift();
        }
        
//          if the index is bigger than or equal to k-1 store the queue[0] to the answer array
        if(i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
        
    }
    
    return ans;
};