/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let leftPtr = head, rightPtr = head;
    
    if(right === left) {
        return head;
    }
    
    for(let i = 0; i < left - 2; i++) {
        leftPtr = leftPtr.next;
    }
    
    for(let i = 0; i < right - 1; i++) {
        rightPtr = rightPtr.next;
    }

    if(left !== 1) {
        reverseStart = leftPtr.next;
        leftPtr.next = rightPtr;
        leftPtr = reverseStart;
    }
    
    prev = rightPtr.next;
    
    for(let i = 0; i < right - left + 1; i++) {
        temp = leftPtr.next;
        leftPtr.next = prev;
        prev = leftPtr;
        leftPtr = temp;
    }
    
    if(left === 1) {
        return rightPtr;
    }
    
    return head;
};