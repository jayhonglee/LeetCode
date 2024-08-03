/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
//     base case: if p & q are both null return true if p or q is null but the other is not return false
    if(p === null && q === null) return true;
    if(p === null && q != null) return false;
    if(p != null && q === null) return false;
    
//     isSame when p.val = q.val && p.left = q.left && p.right = q.right
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};