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
var getMinimumDifference = function(root) {
    const dfs = function(root) {
        if(!root) return;
        
        const left = dfs(root.left);
        nodes.push(root.val);
        const right = dfs(root.right);
    }
    
    let nodes = [];
    dfs(root);
    
    let ans = Infinity;
    for(let i = 0; i < nodes.length; i++) {
        const current = nodes[i];
        const before = nodes[i - 1] === undefined ? Infinity : nodes[i - 1];
        
        const absDiff = Math.abs(current - before);
        ans = Math.min(absDiff, ans);
    }
    
    return ans;
};