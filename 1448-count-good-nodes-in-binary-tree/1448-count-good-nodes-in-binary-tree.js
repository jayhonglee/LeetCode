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
var goodNodes = function(root) {
//     Define variables
    let maxSoFar = -Infinity;
    
//     Define helper function
    const dfsGoodNodes = (node, maxSoFar) => {
        if(node === null) return 0;
        const newMaxSoFar = Math.max(node.val, maxSoFar);
        
        const left = dfsGoodNodes(node.left, newMaxSoFar);
        const right = dfsGoodNodes(node.right, newMaxSoFar);
        
        return node.val >= maxSoFar ? left + right + 1 : left + right;
    }
    
//     Return helper function
    return dfsGoodNodes(root, maxSoFar);
};