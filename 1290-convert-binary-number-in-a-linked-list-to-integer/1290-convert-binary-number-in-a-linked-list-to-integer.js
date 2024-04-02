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
var getDecimalValue = function(head) {
//     declare variables
    let indexCoutner = 0, total = 0, prev = null;
    
//     reverse
    while(head) {
        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    
    head = prev;
//     loop over the linked list
    while(head) {
//     on every iteration using index counter variable add value
        let value = head.val;
        
        total += 2 ** indexCoutner * value;
        head = head.next;
        indexCoutner++;
    }

    
//     return value
    return total;
};