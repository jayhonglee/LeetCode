/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
//     Helper function (root, count) - returns minDepth
    function helper(root, count) {
    //     base case: when the root doesn't exist return null with original count;
        if(!root) return count;
    //     if node exists, get the minimum from helper(left) or helper(right) and +1 count;
        let left = helper(root.left, count);
        let right = helper(root.right, count);
        
        if(!root.left && !root.right) return count + 1;
        if(root.left && root.right) return Math.min(left, right) + 1;
        if(root.left) return left + 1;
        return right + 1;
    }
    
//      Call the helper function 
    return helper(root, 0);
};