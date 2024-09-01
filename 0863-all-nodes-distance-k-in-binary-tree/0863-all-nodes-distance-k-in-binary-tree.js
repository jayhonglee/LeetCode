/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const dfs = (node, parent) => {
        if(!node) return;
        
        node.parent = parent;
        dfs(node.left, node);
        dfs(node.right, node);
    }
    
    dfs(root, root);
    
    let queue = [target], nextQueue = [], l=0, ans = [], seen = new Set();
    
    while(queue.length > 0) {
        for(const node of queue) {
            seen.add(node.val);
            if(l === k) ans.push(node.val);
            if(node.parent && !seen.has(node.parent.val)) nextQueue.push(node.parent);
            if(node.left && !seen.has(node.left.val)) nextQueue.push(node.left);
            if(node.right && !seen.has(node.right.val)) nextQueue.push(node.right);
        }
        
        if(ans.length > 0) return ans;
        
        queue = nextQueue;
        nextQueue = [];
        l++;
    }
    
    return ans;
};