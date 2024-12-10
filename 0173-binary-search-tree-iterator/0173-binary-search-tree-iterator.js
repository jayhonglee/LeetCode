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
 */
var BSTIterator = function(root) {
    this.list = [];
    this.pointer = -1;
    
    const inorder = function(root, arr) {
        if(!root) return;
        
        inorder(root.left, arr);
        arr.push(root.val);
        inorder(root.right, arr);
    }
    inorder(root, this.list);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.list[++this.pointer];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pointer < this.list.length - 1 ? true : false;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */