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
var diameterOfBinaryTree = function(root) {
//  Longest path finding function
//  Run for root.left & root.right
//  Return left + right + 1
    
    if(!root) return 0;
    let diameter = 0;
    
    const dfsLongestPath = (root) => {
        if(!root) return 0;
        
        let left = dfsLongestPath(root.left)
        let right = dfsLongestPath(root.right);
        
        diameter = Math.max(diameter, left + right);
        
        return Math.max(left, right) + 1;
    }
    
    dfsLongestPath(root);
    return diameter;
};