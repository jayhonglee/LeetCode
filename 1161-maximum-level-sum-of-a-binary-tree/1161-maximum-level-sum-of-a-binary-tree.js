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
var maxLevelSum = function(root) {
    // Define ans (level with the max values)
    let ans = -1;

    // Define current level
    let currLvl = 0;

    // Define maxValues (total cum of the highest values having level)
    let maxValue = -Infinity;

    // BFS
    let queue = [root];

    while(queue.length) {
        currLvl++;
        const nextQueue = [];

        // Define cumulative count for this level
        let cum = 0;

        // Iterate over each nodes in each level and keep a cumulative count
        for(const node of queue) {
            cum += node.val;

            if(node.left) nextQueue.push(node.left);
            if(node.right) nextQueue.push(node.right);
        }

        // After iterating over all the nodes, update ans and maxValues
        if(maxValue < cum) {
            maxValue = cum;
            ans = currLvl;
        } 
        
        queue = nextQueue;
    }

    // Return ans
    return ans;
};