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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    const newNode = new TreeNode(val, null, null);
    if(!root) return newNode;
    
    let queue = [root];
    
    while(queue.length) {
        let nextQueue = [];
        
        for(const node of queue) {
            if(node.val > val) node.left ? nextQueue.push(node.left) : node.left = newNode;
            else node.right ? nextQueue.push(node.right) : node.right = newNode;
        }
        
        queue = nextQueue;
    }
    
    return root;
};