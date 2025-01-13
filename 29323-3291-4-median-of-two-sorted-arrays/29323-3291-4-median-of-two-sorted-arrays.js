/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];

    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    let nums1Mid = Math.floor((nums1.length - 1) / 2);
    let nums2Mid = half - (nums1Mid + 1) - 1;

    // Adjust midpoints to ensure the arrays are partitioned correctly
    while (
        (nums1Mid >= 0 && nums1[nums1Mid] > (nums2[nums2Mid + 1] ?? Infinity)) ||
        (nums2Mid >= 0 && nums2[nums2Mid] > (nums1[nums1Mid + 1] ?? Infinity))
    ) {
        if (nums1Mid >= 0 && nums1[nums1Mid] > (nums2[nums2Mid + 1] ?? Infinity)) {
            nums1Mid--;
            nums2Mid++;
        } else {
            nums1Mid++;
            nums2Mid--;
        }
    }

    // Determine the median based on the total length
    const leftMax = Math.max(
        nums1[nums1Mid] ?? -Infinity,
        nums2[nums2Mid] ?? -Infinity
    );
    const rightMin = Math.min(
        nums1[nums1Mid + 1] ?? Infinity,
        nums2[nums2Mid + 1] ?? Infinity
    );

    return total % 2 === 0
        ? (leftMax + rightMin) / 2 // Even case: average of middle elements
        : rightMin; // Odd case: middle element
};