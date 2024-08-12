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
    if (!root) return 0;
    
//     helper function
    const helper = (node, cur_max, cur_min) => {
//         if encounter leaves, return max - min along the path
        if (!node) return cur_max - cur_min;
        
//         else, update max and min
//         and return the max of left and right subtress
        cur_max = Math.max(cur_max, node.val);
        cur_min = Math.min(cur_min, node.val);
        let left = helper(node.left, cur_max, cur_min);
        let right = helper(node.right, cur_max, cur_min);
        return Math.max(left, right);
    }        
    
    return helper(root, root.val, root.val);
};