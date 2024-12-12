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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let queue = [];
    let ans = [];
    
    queue.push(root);
    
    while(queue.length) {
        const nextQueue = [];
        const currentQueueVals = [];
        
        for(const node of queue) {
            currentQueueVals.push(node.val);
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }
        
        ans.push(currentQueueVals);
        queue = nextQueue;
    }
    
    return ans;
};