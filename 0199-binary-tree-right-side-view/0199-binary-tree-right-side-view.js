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
var rightSideView = function(root) {
//     BFS
//          Push the right most element to ans array
    if(!root) return [];
    
    let ans = [];
    let queue = [root];
        
    while(queue.length) {
        let nextQueue = [];

        for(const [index, node] of queue.entries()) {
            if(index === queue.length - 1) ans.push(node.val);

            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }

        queue = nextQueue;
    }

    
    return ans;
};