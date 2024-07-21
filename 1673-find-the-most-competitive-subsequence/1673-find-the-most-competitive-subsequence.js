/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function(nums, k) {
//     Define variables
    let stack = [];
    
//     Loop over the nums array 
//     If remaining elements in nums is equal to remaining number of numbers for result, push it in
//     Else if the number is bigger and remaining number of numbers is available then push
//     Else if the number is smaller (while) pop the stack and push it
    for(let i = 0; i < nums.length; i++) {
        const stackLen = stack.length;
        const stackLenMinusOne = stackLen - 1;
        
        if(k - stackLen === nums.length - i) stack.push(nums[i]);
        else if(nums[i] >= stack[stackLenMinusOne] && stackLen < k || !stackLen) stack.push(nums[i]);
        else if(nums[i] < stack[stackLenMinusOne]) {
            let run = false;
            while(nums[i] < stack[stack.length - 1] && (stack.length - 1) + (nums.length - i) >= k) {
                stack.pop();
                run = true;
            }
            if(run) stack.push(nums[i]);
        }
    }

    return stack;
};