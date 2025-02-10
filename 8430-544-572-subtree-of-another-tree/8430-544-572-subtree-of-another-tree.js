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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // isEqual function
    const isEqual = (n1, n2) => {
        if(!n1 && !n2) return true;
        if(!n1 || !n2) return false;

        return n1.val === n2.val && isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
    }

    // Loop over each node of the tree
    const dfs = (root) => {
        if(!root) return false;

        // When the node's value is equal to the root node of subRoot, run isEqual function.
        if(root.val === subRoot.val && isEqual(root, subRoot)) return true;

        return dfs(root.left) || dfs(root.right);
    }

    return dfs(root);
};