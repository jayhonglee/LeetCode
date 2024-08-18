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
var zigzagLevelOrder = function(root) {
    if(!root) return [];
    
    let queue = [root], right = true, ans = [];
    
    while(queue.length) {
        let nextQueue = [];
        let temp = [];
        
        for(const node of queue) {
            temp.push(node.val);
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }
        
        if(right) ans.push(temp);
        else ans.push(temp.reverse())
        
        right = !right;
        queue = nextQueue;
    }
    
    return ans;
};