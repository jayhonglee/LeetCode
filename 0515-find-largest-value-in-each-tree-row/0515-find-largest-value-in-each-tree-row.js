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
var largestValues = function(root) {
    if(!root) return [];
    
    let queue = [root], ans = [];
    
     while(queue.length) {
         let currMax = -Infinity;
         let nextQueue = [];
         
         for(const node of queue) {
             currMax = Math.max(currMax, node.val);
             
             if(node.left) nextQueue.push(node.left);
             if(node.right) nextQueue.push(node.right);
         }
         
         ans.push(currMax);
         queue = nextQueue;
     }
    
    return ans;
};