/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;
    
    const rootVal = preorder[0];
    const rootNode = new TreeNode(rootVal);
    const indexOfRoot = inorder.indexOf(rootVal);
    
    const inorderLeftSubTree = inorder.slice(0, indexOfRoot);
    const inorderRightSubTree = inorder.slice(indexOfRoot + 1);
    
    const preorderLeftSubTree = preorder.slice(1, inorderLeftSubTree.length + 1);
    const preorderRightSubTree = preorder.slice(preorderLeftSubTree.length + 1)
    
    rootNode.left = buildTree(preorderLeftSubTree, inorderLeftSubTree);
    rootNode.right = buildTree(preorderRightSubTree, inorderRightSubTree);
    
    return rootNode;
};