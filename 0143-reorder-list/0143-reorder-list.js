/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // edge cases
    if(!head || !head.next || !head.next.next) return head;

    // reverse the upper half of the list 
    let slow = head;
    let fast = head;
    let prev = head;

    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null;
    prev = null;

    while(slow) {
        let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    // start with start & end nodes from the list
    // then start.next = end
    // end.next = start.next
    // repeat
    let start = head;
    let end = prev;
    while(start && end) {
        let startTemp = start.next;
        start.next = end;
        start = startTemp;

        if (start) { // Prevents missing last node for odd lengths
            let endTemp = end.next;
            end.next = start;
            end = endTemp;
        }
    }

    return head;
};