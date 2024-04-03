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
var oddEvenList = function(head) {
//     declare variables
    let ptr = head, prev = null, temp = null, isOdd = true, even = head?.next;
    
//     loop over the list and set current ptr.next = ptr.next.next
//     if its last node (!ptr.next && odd) set ptr.next = head.next if its last and not odd set ptr = prev and do it
    while(ptr) {
        temp = ptr.next;
        
        if(!ptr.next) {
            if(!isOdd) {
                ptr = prev;  
            } 
            
            ptr.next = even;
        } else {
            ptr.next = ptr.next.next;
        }
        
        prev = ptr;       
        isOdd = !isOdd;
        ptr = temp;
    }
    
    return head;
};