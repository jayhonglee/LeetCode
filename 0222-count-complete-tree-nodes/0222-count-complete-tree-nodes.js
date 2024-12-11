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
var countNodes = function(root) {
    const getHeight = function(root, height) {
        if(!root) return height - 1;
        
        return getHeight(root.left, height + 1);
    }
    const height = getHeight(root, 0);
    
    const isNodeThere = function(root, idx, nodes) {
        if(!root) return false;
        
        const lowerMid = nodes / 2;
        if(nodes === 1 && root) return true;
        else if(nodes === 1 && !root) return false;
        
        return (idx <= lowerMid) ? isNodeThere(root.left, idx, lowerMid) : isNodeThere(root.right, idx - lowerMid, lowerMid);
    }
    
    let nodes = 2 ** height;
    let left = 1;
    let right = nodes;
    while(left < right) {
        const mid = Math.floor((left + right) / 2 + 1);
        
        const isFound = isNodeThere(root, mid, nodes);
        isFound ? left = mid : right = mid - 1;
    }
    
    let ans = 0;
    for(let i = 0; i <= height; i++) {
        if(i === 0) ans++;
        else if(i === height) {
            ans += left;
        } else {
            ans += 2 ** i;
        }
    }
    console.log(isNodeThere(root, 50, nodes));
    return ans;
};