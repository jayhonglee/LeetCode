/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const indexMap = new Map();
    for(const [idx, node] of inorder.entries()) {
        indexMap.set(node, idx);
    }
    
    const build = function() {
        if(!inorder.length || !postorder.length) return null;
    
    //     find root = last element of postorder
        const rootVal = postorder[postorder.length - 1];
        const inorderRootIndex = indexMap.get(rootVal);

        const rootNode = new TreeNode(rootVal);

    //     split inorder to left and right subtree
        const inorderLeftSubtree = inorder.slice(0, inorderRootIndex);
        const inorderRightSubtree = inorder.slice(inorderRootIndex + 1);

    //     split postorder to left and right subtree
    //     left: using inorder left length from start
    //     right: using inorder right length from the rightmost (root);
        const postorderLeftSubtree = postorder.slice(0, inorderLeftSubtree.length)
        const postorderRightSubtree = postorder.slice(-inorderRightSubtree.length - 1, postorder.length - 1)

        rootNode.left = buildTree(inorderLeftSubtree, postorderLeftSubtree);
        rootNode.right = buildTree(inorderRightSubtree, postorderRightSubtree);

        return rootNode;
    }

    return build();
};