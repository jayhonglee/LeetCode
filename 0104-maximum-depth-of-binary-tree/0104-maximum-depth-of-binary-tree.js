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
var maxDepth = function(root) {
    const dfs = function(node, level) {
        if(!node) return 0;
        
        level = 1 + Math.max(dfs(node.left), dfs(node.right));
       
        return level;
    }
    
    return dfs(root, 0);
};