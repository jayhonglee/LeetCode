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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const dfs = function(root) {
        if(!root) return;
        
        const left = dfs(root.left);
        nodes.push(root.val);
        const right = dfs(root.right);
    }
    
    let nodes = [];
    dfs(root);
    
    return nodes[k - 1];
};