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
//  set delay     
    let delayCounter = 0, fast = head, slow = head, prev = null;
    
    if(!head.next) {
        return head.next;
    } 
    
//  fast starts and slow starts after delay counter equals the delay
    while(fast) {
        if(delayCounter >= n) {
            prev = slow;
            slow = slow.next;
        }
        fast = fast.next;
        delayCounter++;
    }
    
    if(prev === null) {
        return head = head.next;
    }
    prev.next = slow.next;
    return head;
};