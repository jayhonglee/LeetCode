/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
//     optimal solution
//     using two pointers
//     start from first and last elements
//     and find the shorter line between first and last and update them inward
    let left = 0, right = height.length - 1;
    let ans = 0;
    
    while(left < right) {
        const w = right - left;
        const h = Math.min(height[left], height[right]);
        ans = Math.max(ans, w * h);
        
        if(height[left] > height[right]) {
            right--;
        } else {
            left++;
        }
    }
    
    return ans;
//     brute force:
//     iterate over the heights and store to hashmap (index, height)
//     for each height check the maximum area and compare it with ans (Math.max(ans, max))
    
//     const hashmap = new Map();
//     let ans = -1;
    
//     for(let i = 0; i < height.length; i++) {
//         const current = height[i] ;
//         let currentBarBiggest = 0;
        
//         hashmap.forEach((value, key) => {
//             currentBarBiggest = Math.max((i - key) * Math.min(current, value), currentBarBiggest);
//         })
        
//         hashmap.set(i, current);
//         ans = Math.max(ans, currentBarBiggest);
//     }
    
//     return ans;
};