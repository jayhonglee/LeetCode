/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    // Brute force: 
    // For each person, iterate over each peron on the right 
    // and store the visible count using local maximum 
    // if the new local maximum is taller than current person, cannot see any further

    // Code (Correct logic but TLE):
    // const ans = [];

    // for(let i = 0; i < heights.length; i++) {
    //     let visibleCount = 0;
    //     let localMax = -1;
    //     for(let j = i + 1; j < heights.length; j++) {
    //         if(heights[j] > localMax) {
    //             localMax = heights[j];
    //             visibleCount++;
    //         }

    //         if(localMax > heights[i]) break;
    //     }

    //     ans.push(visibleCount);
    // }

    // return ans;

    // Optimal Solution:
    // Iterating from right to left, we'll use a strictly decreasing monotonic stack
    // For each person
    // 1) If the stack is empty = noone visible
    // 2) If the stack isn't empty
    //    - If the current person isn't taller than stack.top() add to the stack and visible = 1
    //    - If the current peron is taller than stack.top() (while it's true) and count++
    //      - After the while loop is over, if the stack isn't empty count++

    const stack = [];
    const ans = [];
    for(let i = heights.length - 1; i >= 0; i--) {
        const curr = heights[i];
        let visibleCount = 0;

        if(!stack.length) stack.push(curr);
        else {                
            if(curr < stack[stack.length - 1]) {
                stack.push(curr);
                visibleCount = 1;
            } else {
                while(stack.length && curr > stack[stack.length - 1]) {
                    stack.pop();
                    visibleCount++;
                }

                if(stack.length) visibleCount++;
                stack.push(curr);
            }
        }

        ans.push(visibleCount);
    }

    return ans.reverse();
};