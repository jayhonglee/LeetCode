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
    // Time Complexity: O(n)
    // Intuition: 
    //  1) Use prefix sum hashmap data structure.
    //  2) Use DFS to iterate through all nodes of the given tree.
    //  3) At each node, use the prefix sum hashmap to see how many valide paths exist that end at the current node and update ans variable. 

    const preOrderDfs = (node, prefixSum, prev) => {
        if(!node) return;

        const currSum = prev + node.val;

        ans += prefixSum.get(currSum - targetSum) || 0;

        if(!prefixSum.has(currSum)) prefixSum.set(currSum, 0);
        prefixSum.set(currSum, prefixSum.get(currSum) + 1);

        preOrderDfs(node.left, prefixSum, currSum);
        preOrderDfs(node.right, prefixSum, currSum);

        prefixSum.set(currSum, prefixSum.get(currSum) - 1);
    }

    let ans = 0;
    const prefixSum = new Map([[0,1]]);
    preOrderDfs(root, prefixSum, 0);

    return ans;
};