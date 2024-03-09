/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let first = head, second = head, prev = head;
    
    if(!head.next) {
        return head.next;
    }
    
    while(second && second.next) {
        prev = first;
        first = first.next;
        second = second.next.next;
    }
    
    prev.next = first.next;
    return head;
};