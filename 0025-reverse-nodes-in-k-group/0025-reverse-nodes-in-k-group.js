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
var reverseKGroup = function(head, k) {
    const reverse = function(node) {
        let before = new ListNode();
        before.next = node;
        
        let dummy = node;
        let count = 0;
        let prev = null;
        while(dummy && count < k) {
            count++;
            prev = dummy;
            dummy = dummy.next;
        }
        
        if(count !== k) return [node, prev, 1];
        
        dummy = node;
        let previous = null;
        for(let i = 0; i < k; i++) {
            let temp = dummy.next;
            dummy.next = previous;
            previous = dummy;
            dummy = temp;
        }
        
        let lastNode = before.next;
        before.next.next = dummy;
        before.next = previous;
        
        return [previous, lastNode, 0];
    }
    
    let dummy = head;
    let prev = null;
    let returnNode = null;
    while(dummy) {
        const [firstNode, lastNode, check] = reverse(dummy);
        if(!returnNode) returnNode = firstNode;
        if(prev) prev.next = firstNode;
        if(check) break;
        prev = lastNode;
        
        dummy = dummy.next;
    }

    
    return returnNode;
};