/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let copy = head, nodeCount = 0;
    while(copy) {
        copy = copy.next;
        nodeCount++;
    }
    
    let slow = head;
    for(let i = 0; i < k - 1; i++) {
        slow = slow.next;
    }
    
    let fast = head;
    for(let i = 0; i < nodeCount - k; i++) {
        fast = fast.next;
    }
    
    let temp;
    temp = fast.val;
    fast.val = slow.val;
    slow.val = temp;
    
    return head;
};