/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    
    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    if(!fast) {
        head = head.next;
    }
    
    while(fast) {
        fast = fast.next;
        if(!fast) {
            slow.next = slow.next.next;
        }
        slow = slow.next;
    }
    
    return head;
};