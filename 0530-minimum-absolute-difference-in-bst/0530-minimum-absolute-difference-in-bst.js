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
    let nodes = [], ans = Infinity;
    
    const dfs = (node) => {
        if(!node) return;

        dfs(node.left);
        nodes.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    
    for(let i = 1; i < nodes.length; i++) {
        ans = Math.min(ans, nodes[i] - nodes[i-1]);
    }
    
    return ans;
};