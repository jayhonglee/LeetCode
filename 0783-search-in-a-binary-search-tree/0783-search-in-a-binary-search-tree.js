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
//  Not optimal solution, can choose either left or right based on the value 
var searchBST = function(root, val) {
    // Define pre-order traversal function
    const preOrderTraversal = (node, val) => {
        if(!node) return null;

        // If the value is found, return the node.
        if(node.val === val) return node;

        const left = preOrderTraversal(node.left, val);
        if(left) return left;
        const right = preOrderTraversal(node.right, val);
        if(right) return right;

        // If not, return null
        return null;
    }
    
    // Call the traversal function and return the output
    return preOrderTraversal(root, val);
};