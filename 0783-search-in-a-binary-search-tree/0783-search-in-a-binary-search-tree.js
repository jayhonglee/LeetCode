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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // Define in-order traversal function
    const inOrderTraversal = (node, val) => {
        if(!node) return null;

        // If the value is found, return the node.
        if(node.val === val) return node;

        const left = inOrderTraversal(node.left, val);
        if(left) return left;
        const right = inOrderTraversal(node.right, val);
        if(right) return right;

        // If not, return null
        return null;
    }
    
    // Call the traversal function and return the output
    return inOrderTraversal(root, val);
};