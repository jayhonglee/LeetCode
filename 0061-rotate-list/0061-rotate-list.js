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
var rotateRight = function(head, k) {
//     - when you reach the potential end, update the next to null
//          - you set temp = original next and use this to iterate to next
//     - when you reach the potential start, cont. iterating til the end and update next to the start of original
    
    let dummy = head;
    let count = 0;
    while(dummy) {
        count++;
        dummy = dummy.next;
    }
    
    k %= count;
    
    if(k === 0) return head;
    
    dummy = head;
    let index = 1;
    let start = null;
    while(dummy) {
        let temp = dummy.next;
        if(index === count - k) {
            dummy.next = null;
            start = temp;
        } else if(index === count) {
            dummy.next = head;
        }
        
        dummy = temp;
        index++;
    }
    
    return start;
};