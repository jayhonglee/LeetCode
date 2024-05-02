/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
// declare variables
    let stack = [], ans = Array(temperatures.length).fill(0);
    
// loop over the temperatures array
for(let i = 0; i < temperatures.length; i++) {
    
//     if the current temperature is bigger than the last element of stack pop the stack and store the difference to the answer array
    let currentTemp = temperatures[i];
    while(currentTemp > temperatures[stack[stack.length - 1]]) {
        let lastStack = stack.pop();
        ans[lastStack] = i - lastStack;
    }
    
//     store the current temperature to the stack
    stack.push(i);
}
    
    return ans;
};