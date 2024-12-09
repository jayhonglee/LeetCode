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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    const preorder = function(root, currSum) {
        if(!root) return false;
        
        const currVal = root.val;
        
        if(!root.left && !root.right && currVal + currSum === targetSum) {
            return true;
        }
        
        return preorder(root.left, currSum + currVal) || preorder(root.right, currSum + currVal);
    }
    
    return preorder(root, 0);
};