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
    // Brute-force approach:
    // if(!root) return 0;

    // // Intuition: Check how many paths sum up to targetSum from the root and call this function at every node.
    // const postOrderDFS = (node, target) => {
    //     if(!node) return 0;

    //     const left = postOrderDFS(node.left, target - node.val);
    //     const right = postOrderDFS(node.right, target - node.val);

    //     const currIsMatch = node.val === target ? 1 : 0;
    //     return currIsMatch + left + right;
    // }

    // // Call function at the root and return the value
    // return postOrderDFS(root, targetSum) + pathSum(root?.left, targetSum) + pathSum(root?.right, targetSum);

    // Optimal solution:
    // Time Complexity: O(n + (2^(H-1) * H))
    // Intuition: 
    //  1) Use prefix sum data structure to validate paths.
    //  2) Use DFS to iterate through all nodes of the given tree.
    //  3) When at a leaf, update number of paths using prefix sum. 

    const preOrderDfs = (node, prefixSum, prev) => {
        if(!node) return;

        const currSum = prev + node.val;

        ans += prefixSum.get(currSum - targetSum) || 0;

        if(!prefixSum.has(currSum)) prefixSum.set(currSum, 0);
        prefixSum.set(currSum, prefixSum.get(currSum) + 1);

        prev = prev + node.val;

        preOrderDfs(node.left, prefixSum, prev);
        preOrderDfs(node.right, prefixSum, prev);

        prefixSum.set(currSum, prefixSum.get(currSum) - 1);
    }

    let ans = 0;
    const prefixSum = new Map([[0,1]]);
    preOrderDfs(root, prefixSum, 0);

    console.log(ans);

    return ans;
};