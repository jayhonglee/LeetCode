/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // (pre-order) dfs that outputs array of leaves
    const dfs = (root, arr) => {
        if(!root) return;

        if(!root.left && !root.right) arr.push(root.val);
        dfs(root.left, arr);
        dfs(root.right, arr);

        return arr;
    }

    // call dfs function for root1
    let root1Leaves = [];
    dfs(root1, root1Leaves);

    // call dfs function for root2
    let root2Leaves = [];
    dfs(root2, root2Leaves);

    // return root1 & root2 dfs function call values comparison
    return root1Leaves.join(",") === root2Leaves.join(",");
};