/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root) return null;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length) {
        let nextQueue = [];
        
        for(let i = 0; i < queue.length; i++) {
            const currentNode = queue[i];
            const nextNode = queue[i + 1] || null;
            currentNode.next = nextNode;
            
            if(currentNode.left) nextQueue.push(currentNode.left);
            if(currentNode.right) nextQueue.push(currentNode.right);
        }
        
        queue = nextQueue;
    }
    
    return root;
};