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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let ans = Infinity;
    let queue = [root];
    
    while(queue.length) {
        let nextQueue = [];
        
        for(const node of queue) {
            const currentNodeDiff = Math.abs(node.val - target);
            const currentAnsDiff = Math.abs(ans - target);
            
            if(currentNodeDiff < currentAnsDiff) ans = node.val;
            else if (currentNodeDiff === currentAnsDiff) ans = Math.min(ans, node.val);
            
            if(node.left && target < node.val) nextQueue.push(node.left);
            if(node.right && target > node.val) nextQueue.push(node.right);
        }
        
        queue = nextQueue;
    }
    
    return ans;
};