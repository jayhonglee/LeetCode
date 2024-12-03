/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1;
    let ans = 0;
    
    while(left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const area = Math.min(leftHeight, rightHeight) * (right - left);
        ans = Math.max(ans, area);
        
        if(leftHeight >= rightHeight) {
            right--;
        } else {
            left++;
        }
    }
    
    return ans;
};