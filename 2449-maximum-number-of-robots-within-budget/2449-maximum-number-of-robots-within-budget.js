/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    const n = chargeTimes.length;

    // Edge case
    if(n === 1) {
        const cost = chargeTimes[0] + runningCosts[0];
        return cost <= budget ? 1 : 0;
    } 

    // Sliding window approach
    const queue = [];
    let left = 0;
    let sum = 0;
    let ans = 0;
    let cost = 0;
    let max = 0;
    for(let right = 0; right < n; right++) {
        const length = right - left + 1;

        const currCost = runningCosts[right];
        sum += currCost;

        const currTime = chargeTimes[right];
        
        // maintain decreasing queue for chargeTimes
        while (queue.length && chargeTimes[queue[queue.length - 1]] <= chargeTimes[right]) {
            queue.pop();
        }
        queue.push(right);

        max = chargeTimes[queue[0]];
        cost = max + length * sum;

        if(cost <= budget) ans = Math.max(ans, length);
        else {
            while(cost > budget && left <= right) {
                sum -= runningCosts[left];
                // remove left index if it’s no longer in window
                if (queue[0] === left) queue.shift();
                left++;
                max = chargeTimes[queue[0]];
                const length = right - left + 1;
                cost = max + length * sum;
            }
        }
    }

    return ans;
};