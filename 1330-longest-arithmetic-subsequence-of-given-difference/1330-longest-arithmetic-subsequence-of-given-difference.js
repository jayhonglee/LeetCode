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
            const idxArr = hashmap.get(next);
            // Find the index that gives the best subsequence length
            let bestIdx = idxArr[0];
            for (let j = 1; j < idxArr.length; j++) {
                if (max[idxArr[j]] > max[bestIdx]) {
                    bestIdx = idxArr[j];
                }
            }

            max[i] = max[bestIdx] + 1;
        }

        // Update ans variable to store the max value it has seen so far
        ans = Math.max(ans, max[i]);

        // Update hashmap
        if(!hashmap.has(curr)) hashmap.set(curr, []);
        hashmap.get(curr).push(i);
    }

    return ans;
};