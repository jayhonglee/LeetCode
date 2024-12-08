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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isSymmetric = function(rootA, rootB) {
        if(!rootA && !rootB) return true;
        if(!rootA || !rootB) return false;
        
        return rootA.val === rootB.val && isSymmetric(rootA.left, rootB.right) && isSymmetric(rootA.right, rootB.left);
    }
    
    return isSymmetric(root, root);
};