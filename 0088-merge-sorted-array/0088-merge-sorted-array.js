/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
// loop over nums 1 array from right to left i 
//     have two pointers pointing to the end of nums1 & end of nums2 (n - 1) j k
//     for every i, compare j and k values and store the bigger one to i 
//      then update j or k pointers accordingly - 1
    let j = m - 1, k = n - 1;
    for(let i = m + n - 1; i >= 0; i--) {
        if (k < 0) {
            break;
        }
        
        if(nums1[j] >= nums2[k]) {
            nums1[i] = nums1[j];
            j--;
        } else {
            nums1[i] = nums2[k];
            k--;
        }
    }
    
    return nums1;
};