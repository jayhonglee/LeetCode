/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
//     Define variables
    let stack = [], result = 0, left, right;

//     Loop over the input arr
//     While the number is smaller than the stack peak
    //     Pop the peak and using the returned value
    //     Find the toal number of contiguous array of the popped value
    for(let i = 0; i < arr.length; i++) {
        while(stack.length && arr[i] < stack[stack.length - 1][1]) {
            let [poppedIndex, poppedValue] = stack.pop();
            
            left = stack[stack.length - 1] ? poppedIndex - stack[stack.length - 1][0] : poppedIndex + 1;
            right = i - poppedIndex;
            
            result += (left * right * poppedValue);
        }
        
        //     Push to the stack
        stack.push([i, arr[i]])
    }
    
//     Iterate over the remaining stack (monotonically increasing) from left to right.
//     For each number find the total number of contiguous arrays.
    for(let j = 0; j < stack.length; j++) {
        let [index, value] = stack[j];
        
        left = j > 0 ? index - stack[j - 1][0] : index + 1;
        right = arr.length - index;
        result += (value * left * right );
    }
    
    return result % (10 ** 9 + 7);
};

