/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    // BFS (Function)
    // Returns a list of all nodes
    const bfs = (root) => {
        let queue = [root];
        const list = [];

        while(queue.length) {
            const nextQueue = [];

            for(const node of queue) {
                list.push(node.val);

                if(node.left) nextQueue.push(node.left);
                if(node.right) nextQueue.push(node.right);
            }

            queue = nextQueue;
        }

        return list;
    }

    // BFS function ran on both roots
    const root1List = root1 ? bfs(root1) : [];
    const root2List = root2 ? bfs(root2) : [];

    // Merge two lists and sort them in ascending order
    const ans = root1List.concat(root2List).sort((a,b) => a - b);
    return ans;
};