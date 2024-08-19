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
    let previous = -Infinity;
    
    const dfs = (node) => {
        if(!node) return true;
        
        if(!dfs(node.left)) return false;
    
//         In-order Work
        if(node.val <= previous) return false;
        previous = node.val;
        
        if(!dfs(node.right)) return false;
        
        return true;
    }
    
    
    
    return dfs(root);
};