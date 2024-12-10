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
var sumNumbers = function(root) {
    const dfs = function(root, cum) {
        if(!root) return cum;
        
        const current = root.val;
        
        if(!root.left && !root.right) return ans += +(cum + current);
        
        dfs(root.left, cum + current);
        dfs(root.right, cum + current);
    }
    
    let ans = 0;
    dfs(root, "")
    
    return ans;
};