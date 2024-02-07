/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
//     Find the half point
    let slow = head;
    let fast = head.next;
    
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    
//     Reverse the second half
    let next = slow.next;
    let prev = null;
    
    slow.next = fast;
    slow = next;
    
    while(slow) {
        next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

//     Create another pointer to add and store max
    let newSlow = head;
    let max = 0;
    while(fast) {
        max = Math.max(newSlow.val + fast.val, max);
        newSlow = newSlow.next;
        fast = fast.next;
    }
    
    return max;
};