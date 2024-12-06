/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let hasCarry = false;
    let previousNode = null;
    let head = null;
    while(l1 || l2) {
        const newNode = new ListNode(hasCarry ? 1 : 0);
        hasCarry = false;
        
        if(previousNode) previousNode.next = newNode;
        
        newNode.val += (l1 ? l1.val : 0)
        newNode.val += (l2 ? l2.val : 0);
        
        if(newNode.val >= 10) {
            newNode.val %= 10;
            hasCarry = true;
        }
        
        l1 = l1 ? l1.next : l1;
        l2 = l2 ? l2.next : l2;
        previousNode = newNode;
        
        if(!head) head = newNode;
    }
    
    if(hasCarry) previousNode.next = new ListNode(1);
    
    return head;
};