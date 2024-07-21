/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
//     Define variables
    let stack = [], result = [];
    
//     Loop from right to left over heights
//     Before continuing add current to the stack
//          While current > stack.peak pop()
//     Return stack.peak >= current ? 1 : stack.length to result array 
    for(let i = heights.length - 1; i >= 0; i--) {
        const current = heights[i];
        
        let j = stack.length - 1;
        let count = 0;
        let found = false;
        while(!found && stack.length && stack[j]) {
            if(stack[j] >= current) found = true;
            count++;
            j--;
        }
        
        
        result[i] = stack[stack.length - 1] && stack[stack.length - 1] >= current ? 1 : count;
        while(stack.length && current >= stack[stack.length - 1]) stack.pop();
        stack.push(current);
    }
    
    return result;
};