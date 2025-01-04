/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const pPath = new Set();
    const dfs = (root, target) => {
        if(!root) return;
        
        pPath.add(root.val);
        
        if(root.val === target) return;
        if(root.val > target) dfs(root.left, target);
        if(root.val < target) dfs(root.right, target);
    }

    const modifiedDfs = (root, target) => {
        if(!root) return;
        
        if(pPath.has(root.val)) ans = root;
        
        if(root.val === target) return;
        if(root.val > target) modifiedDfs(root.left, target);
        if(root.val < target) modifiedDfs(root.right, target);
    }
    
    // do a dfs to find the path from root to p
    dfs(root, p.val);

    // now do a dfs for q but as we traverse downwards, check if p's root had the current visiting node and if there is update the ans
    let ans = null;
    modifiedDfs(root, q.val);

    return ans;
};