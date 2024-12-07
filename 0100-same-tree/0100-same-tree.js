/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const dfs = function(pNode, qNode) {
        if(!pNode || !qNode) return pNode === qNode;
        if(pNode.val !== qNode.val) return false;
        
        const left = dfs(pNode.left, qNode.left);
        const right = dfs(pNode.right, qNode.right);
        
        return left && right;
    }
    
    return dfs(p, q);
};