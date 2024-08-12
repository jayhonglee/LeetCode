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
var maxAncestorDiff = function(root) {
    
    const helper = (node, cur_max, cur_min) => {
        if (!node) return cur_max - cur_min;
        
        cur_max = Math.max(cur_max, node.val);
        cur_min = Math.min(cur_min, node.val);
        let left = helper(node.left, cur_max, cur_min);
        let right = helper(node.right, cur_max, cur_min);
        return Math.max(left, right);
    }
    
    return helper(root, root.val, root.val);
};