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
var maxPathSum = function(root) {
//     create a dfs function 
//     input: root
//     output: biggest path that connect with root
//          use: current || current + dfs(left) || current + dfs(right) || current + dfs(left) + dfs(right);
//     at every step store the biggest to ans
    
    const dfs = function(root, isStarted) {
        if(!root) return 0;
        
        const currentVal = root.val;
        
        const left = dfs(root.left, true);
        const right = dfs(root.right, true);
        
        const biggest = isStarted ? Math.max(currentVal, currentVal + left, currentVal + right) : Math.max(currentVal, currentVal + left, currentVal + right, currentVal + left + right);
        
        ans = Math.max(ans, biggest);
        
        return biggest;
    }
    
    let ans = -Infinity;
    let queue = [root];
    while(queue.length) {
        const nextQueue = [];
        
        for(const node of queue) {
            dfs(node, false);
            
            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }
        
        queue = nextQueue;
    }
    
    return ans;
};