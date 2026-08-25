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
    // Solution 1 (Not optimal)
    // // BFS (Function)
    // // Returns a list of all nodes
    // const bfs = (root) => {
    //     let queue = [root];
    //     const list = [];

    //     while(queue.length) {
    //         const nextQueue = [];

    //         for(const node of queue) {
    //             list.push(node.val);

    //             if(node.left) nextQueue.push(node.left);
    //             if(node.right) nextQueue.push(node.right);
    //         }

    //         queue = nextQueue;
    //     }

    //     return list;
    // }

    // // BFS function ran on both roots
    // const root1List = root1 ? bfs(root1) : [];
    // const root2List = root2 ? bfs(root2) : [];

    // // Merge two lists and sort them in ascending order
    // const ans = root1List.concat(root2List).sort((a,b) => a - b);
    // return ans;

    // Solution 2
    // DFS (Function) - returns ascending array
    const dfs = (root, array) => {
        if(!root) return array;

        if(root.left) dfs(root.left, array);
        array.push(root.val);
        if(root.right) dfs(root.right, array);

        return array;
    }

    // Run DFS on both of the roots 
    const array1 = dfs(root1, []);
    const array2 = dfs(root2, []);
    
    // Compare both arrays and merge them in ascending in O(N) Complexity
    const ans = [];
    let ptr1 = 0;
    let ptr2 = 0;
    while(ptr1 < array1.length || ptr2 < array2.length) {
        const value1 = array1[ptr1];
        const value2 = array2[ptr2];

        if(ptr2 >= array2.length || value1 < value2) {
            ans.push(value1);
            ptr1++;
        } else {
            ans.push(value2);
            ptr2++;
        }
    }

    return ans;
};