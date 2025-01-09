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
var isBalanced = function(root) {
    const getHeight = (root) => {
        if(!root) return 0;

        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }

    const checkBalanced = (root) => {
        if(!root) return true;

        const leftTree = getHeight(root.left);
        const rightTree = getHeight(root.right);

        const isBalanced = Math.abs(leftTree - rightTree) <= 1;
        if(!isBalanced) return false;

        return checkBalanced(root.left) && checkBalanced(root.right);
    }

    return checkBalanced(root);
};