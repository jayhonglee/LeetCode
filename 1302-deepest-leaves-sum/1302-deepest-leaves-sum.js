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
var deepestLeavesSum = function(root) {
    let queue = [root], ans = 0;
    
    while(queue.length) {
        let nextQueue = [], sum = 0;
        
        for(const node of queue) {
            sum += node.val;
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);   
        }
        
        queue = nextQueue;
        if(!nextQueue.length) ans = sum;
    }
    
    return ans;
};