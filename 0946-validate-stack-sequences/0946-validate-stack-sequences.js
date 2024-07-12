/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
//     create variables
    let stack = [], y = 0;
    
//     loop over the pushed array
//     for each element, push to the stack and check if its same as the first element of the popped array. If it is the same, pop the stack and remove the first element of the popped array. Then check again. If it is not the same continue.
    for(const x of pushed) {
        stack.push(x);
        console.log(stack[stack.length - 1], popped[y])
        while(popped[y] !== undefined && stack[stack.length - 1] === popped[y]) {
            stack.pop();
            y++;
        }
    }
    
    console.log(stack);
    return stack.length === 0
};