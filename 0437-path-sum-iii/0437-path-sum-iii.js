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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    if(!root) return 0;

    // Intuition: Check how many paths sum up to targetSum from the root and call this function at every node.
    const postOrderDFS = (node, target) => {
        if(!node) return 0;

        const left = postOrderDFS(node.left, target - node.val);
        const right = postOrderDFS(node.right, target - node.val);

        const currIsMatch = node.val === target ? 1 : 0;
        return currIsMatch + left + right;
    }

    // Call function at the root and return the value
    return postOrderDFS(root, targetSum) + pathSum(root?.left, targetSum) + pathSum(root?.right, targetSum);
};