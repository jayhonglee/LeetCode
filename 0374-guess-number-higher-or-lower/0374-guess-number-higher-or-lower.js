/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    // binary search algorithm
    // set low and high
    let low = 1, high = n;

    while(low <= high) {
        // start at the mid
        const mid = low + Math.floor((high - low) / 2);

        // call guess and act accordingly
        const guessResult = guess(mid);

        if(guessResult === 0) return mid;
        else if(guessResult === -1) high = mid - 1;
        else low = mid + 1;
    }
};