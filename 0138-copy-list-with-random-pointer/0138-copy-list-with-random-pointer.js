/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    
    const hashmap = new Map();
    let dummy = head;
    
    while(dummy) {
        hashmap.set(dummy, new _Node(dummy.val, null, null))
        dummy = dummy.next;
    }
    
    dummy = head;
    while(dummy) {
        const copied = hashmap.get(dummy);
        const next = hashmap.get(dummy.next) || null;
        const random = hashmap.get(dummy.random) || null;
        copied.next = next;
        copied.random = random;
        
        dummy = dummy.next;
    }
    
    return hashmap.get(head);
};