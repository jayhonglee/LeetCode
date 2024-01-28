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
var swapPairs = function(head) {
    
//     while head && head.next exist
//     if prev exists prev.next = head.next;
//     head.next.next = head;
//     head.next = head.next.next.next;
    
    if(!head || !head.next) {
        return head;
    }

    let prev = null;
    let dummy = head.next;
    
    while(head && head.next) {
        if(prev) {
            prev.next = head.next;
        }
        prev = head;
        
        let BNext = head.next.next;
        head.next.next = head;
        head.next = BNext;
        head = BNext;
        console.log(dummy);
    }
    
    return dummy;
};