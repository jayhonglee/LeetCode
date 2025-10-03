/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    // Define curr for nums1 & nums2
    const length1 = nums1.length, length2 = nums2.length;
    let curr1 = 0, curr2 = 0;

    // While currs are within nums1 & nums2 respectively...
    while(curr1 < length1 && curr2 < length2) {
        const value1 = nums1[curr1], value2 = nums2[curr2];

        if(value1 === value2)  return value1; // Condition 1 = If equal values return the value
        else if(value1 > value2) curr2++;     // Condition 2 = If curr1 is bigger, increment curr2 && continue
        else curr1++;                         // Condition 3 = Else, increment curr1 && continue
    }

    // Return -1 if while loop didn't find a match
    return -1;
};