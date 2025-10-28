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
 * @return {number}
 */
var rob = function(root) {
    // Intuitions
    // 1) Backtracking seems appropriate to check all the possible combinations.
    // 2) To reduce time complexity of calculating duplicate subtrees, caching seems appropriate.
    // 3) To implement intuition 2, dividing the problem to subtrees seems appropriate.

    // Code
    // 0) Handle root with no child nodes.
    if(!root.left && !root.right) return root.val;

    // 1) Define a funciton that returns maximum money possible from a tree using a top-down method.
    const maxMoney = (root) => {
        if(!root) return [0, 0];
        if(!root.left && !root.right) return [root.val, 0];

        const [leftRobbed, leftUnRobbed] = maxMoney(root.left);
        const [rightRobbed, rightUnRobbed] = maxMoney(root.right);

        const currRobbed = leftUnRobbed + rightUnRobbed + root.val;
        const currUnrobbed = Math.max(leftRobbed, leftUnRobbed) + Math.max(rightRobbed, rightUnRobbed);
        
        return [currRobbed, currUnrobbed];
    }

    // 2) Call the created function from the root and return the maximum money possible.
    const [rootRobbed, rootUnrobbed] = maxMoney(root);
    return Math.max(rootRobbed, rootUnrobbed);
};