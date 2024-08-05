/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {    
//     Base case: When the tree is empty return null
    if(!root) return null;
    
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    
//     Case 1: When one of the p or q is at root return root
    if(root === p || root === q) return root;
    
//     Case 2: When each of them are at each of the subtrees, return root
    if(left && right) return root;
    
//     Case 3: When Both of them are in a same subtree, recursive call
    if (left) {
        return left;
    }
    
    return right;
};