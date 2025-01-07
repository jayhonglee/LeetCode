/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    let ans = [];

    for(let i = temperatures.length - 1; i >= 0; i--) {
        const curr = temperatures[i];
        while(stack.length && stack[stack.length - 1][0] <= curr) {
            stack.pop();
        }

        if(!stack.length) ans.push(0);
        else if(stack[stack.length - 1][0] > curr) {
            ans.push(stack[stack.length - 1][1] - i);
        }

        stack.push([curr, i]);
    }

    return ans.reverse();
};
