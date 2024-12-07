/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lowerListEnd = new ListNode();
    let lowerListStart = lowerListEnd;
    let higherListEnd = new ListNode();
    let higherListStart = higherListEnd;
    
    while(head) {
        if(head.val >= x) {
            higherListEnd.next = head;
            higherListEnd = head;
        } else {
            lowerListEnd.next = head;
            lowerListEnd = head;
        }
        
        head = head.next;
    }
    higherListEnd.next = null;
    lowerListEnd.next = higherListStart.next;
    
    return lowerListStart.next;
};