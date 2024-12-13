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
var isValidBST = function(root) {
    const dfs = function(root) {
        if(!root) return true;
        
        const left = dfs(root.left);
        
        if(root.val <= previous) return false;
        previous = root.val;
        
        const right = dfs(root.right);
        
        if(!left || !right) return false;
        else return true;
    }
    
    let previous = -Infinity;
    return dfs(root);
};