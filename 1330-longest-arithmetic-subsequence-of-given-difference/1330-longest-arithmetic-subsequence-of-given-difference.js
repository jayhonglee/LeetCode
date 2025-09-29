/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function(arr, difference) {
    // Define hashmap<number, number[]> number : idx[]
    const hashmap = new Map();

    // Define max array 
    const max = new Array(arr.length).fill(1);

    // Define ans variable
    let ans = 0;

    // Loop backwards on arr
    for(let i = arr.length - 1; i >= 0; i--) {
        // On each iteration, check if there exists a number after current number that meets the difference requirement.
        const curr = arr[i];
        const next = curr + difference;

        if(hashmap.has(next)) {
            // If yes, look up the max array to find the number (if there are multiple) with the highest value and update max array.
            const value = hashmap.get(next);
            max[i] = value + 1;
        }

        // Update ans variable to store the max value it has seen so far
        ans = Math.max(ans, max[i]);

        // Update hashmap
        hashmap.set(curr, max[i]);
    }

    return ans;
};