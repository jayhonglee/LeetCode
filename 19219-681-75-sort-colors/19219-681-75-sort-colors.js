/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // merge sort approach: 
    const mergeSort = (array) => {
        if(array.length < 2) return array;

        const mid = Math.floor(array.length / 2);
        const left = array.slice(0, mid);
        const right = array.slice(mid);

        return merge(mergeSort(left), mergeSort(right));
    }

    const merge = (left, right) => {
        const result = [];

        while(left.length && right.length) {
            if(left[0] <= right[0]) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        }

        return [...result, ...left, ...right];
    }

    const sorted = mergeSort(nums);
    nums.splice(0, nums.length, ...sorted);

    return nums;
};