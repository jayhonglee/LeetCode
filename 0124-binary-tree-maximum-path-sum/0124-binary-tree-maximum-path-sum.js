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
var maxPathSum = function(root) {
    const dfs = function(root) {
        if(!root) return 0;
        
        const currentVal = root.val;
        
        const left = dfs(root.left);
        const right = dfs(root.right);
        
        const biggest = Math.max(currentVal, currentVal + left, currentVal + right);
        const biggestLocal = Math.max(currentVal, currentVal + left, currentVal + right, currentVal + left + right);
        
        ans = Math.max(ans, biggestLocal);
        
        return biggest;
    }
    
    let ans = -Infinity;
    dfs(root);
    return ans;
};