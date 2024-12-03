/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length -1;
    
    while(left < right) {
        const numLeft = numbers[left];
        const numRight = numbers[right];
        const sum = numLeft + numRight;
        
        if(sum === target) {
            return [left + 1, right + 1];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};