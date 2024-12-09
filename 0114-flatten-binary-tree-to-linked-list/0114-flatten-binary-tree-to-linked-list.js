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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;
    
    const orderedNodes = [];
    
    const preorder = function(root) {
        if(!root) return;
        
        orderedNodes.push(root);
        if(root.left) preorder(root.left);
        if(root.right) preorder(root.right);
    }
    
    preorder(root);
    
    for(let i = 0; i < orderedNodes.length; i++) {
        const currNode = orderedNodes[i];
        const nextNode = orderedNodes[i + 1] || null;
        
        currNode.right = nextNode;
        currNode.left = null;
    }
    
    return root;
};