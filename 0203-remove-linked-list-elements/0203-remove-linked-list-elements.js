/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
//     declare variables
    let ptr = head, prev = null;
    
//     go over the linked list nodes
    while(ptr) {
//          if val is found prev.next = curr.next
        if(ptr.val === val) {
            if(prev === null) {
                head = ptr.next;
            } else {
                prev.next = ptr.next;
            }
            
            ptr = ptr.next;
            continue;
        }
        
        prev = ptr;
        ptr = ptr.next;
    }

    
//      return head
    return head;
};