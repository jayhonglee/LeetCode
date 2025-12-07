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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    // Define pre-order dfs function
    // Input (node, sum, path(array reference), ans(array reference))
    // Logic: if the sum + current value is === targetSum, add path to ans
    const preorderDFS = (node, sum, path, ans) => {
        if(!node) return;

        const isLeaf = !node.left && !node.right;
        const currSum = sum + node.val;
        const isValidSum = currSum === targetSum;
        const currPath = [...path, node.val];

        if(isLeaf && isValidSum) {
            ans.push(currPath);
        }
        
        preorderDFS(node.left, currSum, currPath, ans);
        preorderDFS(node.right, currSum, currPath, ans);
    }

    // Call pre-order dfs function
    const path = [];
    const ans = [];
    preorderDFS(root, 0, path, ans);


    // Return ans
    return ans;
};