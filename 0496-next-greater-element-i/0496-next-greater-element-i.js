/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    
//     loop over nums1 array
    nums1.forEach((x)=> {
        //     for each element loop over nums 2 
        let isXFound = false, foundY;
        for(const y of nums2) {
            //       if a greater element is found return it to the ans array
            if(isXFound && y > x) {
                foundY = y;
                isXFound = false;
                continue;
            }
            //      if the same element is found set start
            if(!isXFound && x === y) isXFound = true;
        }
        return foundY ? ans.push(foundY) : ans.push(-1);
        
    })
    
    return ans;


};