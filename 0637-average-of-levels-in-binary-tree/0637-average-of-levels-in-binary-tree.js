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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let queue = [];
    let ans = [];
    queue.push(root);
    
    while(queue.length) {
        const nextQueue = [];
        let cum = 0;
        
        for(const node of queue) {
            cum += node.val;
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }
        
        const average = cum / queue.length;
        ans.push(average);
        queue = nextQueue;
    }
    
    return ans;
};