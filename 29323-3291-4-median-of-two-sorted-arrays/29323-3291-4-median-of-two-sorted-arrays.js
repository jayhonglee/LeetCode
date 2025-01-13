/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    // find half points for each nums array
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    let nums1Mid = Math.floor((nums1.length - 1) / 2);
    let nums2Mid = half - (nums1Mid + 1) - 1;

    // adjust the half points by making sure they point to mid points that divide the lower half and upper half
    while(
        (nums1Mid >= 0 && nums1[nums1Mid] > nums2[nums2Mid + 1]) || 
        (nums2Mid >= 0 && nums2[nums2Mid] > nums1[nums1Mid + 1])) {
            if((nums1Mid >= 0 && nums1[nums1Mid] > nums2[nums2Mid + 1])) {
                nums1Mid--;
                nums2Mid++;
            } else {
                nums1Mid++;
                nums2Mid--;
            }
    }

    // if the total length is even number, return the right ends of left arrays average.
    // if the total length is odd number, return the bigger left end number.
    if(total % 2 === 0) {
        // bigger + mid + 1 / 2
        return (Math.max(nums1[nums1Mid] === undefined ? -Infinity : nums1[nums1Mid], nums2[nums2Mid] === undefined ? -Infinity : nums2[nums2Mid]) + Math.min(nums1[nums1Mid + 1] === undefined ? Infinity : nums1[nums1Mid + 1], nums2[nums2Mid + 1] === undefined ? Infinity : nums2[nums2Mid + 1])) / 2;
    } else {
        // return smaller of right 
        return Math.min(nums1[nums1Mid + 1] === undefined ? Infinity : nums1[nums1Mid + 1], nums2[nums2Mid + 1] === undefined ? Infinity : nums2[nums2Mid + 1]);
    }
};
