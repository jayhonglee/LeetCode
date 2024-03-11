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
var deleteDuplicates = function(head) {
    let hashmap = new Map(), ptr = head;
    
    while(ptr) {
        hashmap.set(ptr.val, hashmap.has(ptr.val) ? hashmap.get(ptr.val) + 1 : 1);
        ptr = ptr.next;
    }
    
    ptr = head;
    let prev = null;
    
    while(ptr) {
        if(hashmap.get(ptr.val) > 1) {
            if(prev == null) {
                head = ptr.next
            } else {
                prev.next = ptr.next;                
            }
        } else {
            prev = ptr;
        }
        ptr = ptr.next;
        console.log(head);
    }
    
    console.log(hashmap);
    
    return head;
};