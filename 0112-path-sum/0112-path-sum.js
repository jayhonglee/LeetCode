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
//     Define variables & functions
    let dfs = (node, curr) => {
        if(!node) return false;
        
        if(!node.left && !node.right) return curr + node.val === targetSum;
        
        curr += node.val;
        const left = dfs(node.left, curr);
        const right = dfs(node.right, curr);
        
        return left || right;
    }
    
//     Call the helper function
    return dfs(root, 0);
};