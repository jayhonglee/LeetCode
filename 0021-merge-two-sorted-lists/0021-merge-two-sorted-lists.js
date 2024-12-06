/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = new ListNode();
    let node = head;
    
    while(list1 && list2) {
        const list1Val = list1.val;
        const list2Val = list2.val;
        
        if(list1Val >= list2Val) {
            node.next = list2;
            list2 = list2.next;
        } else {
            node.next = list1;
            list1 = list1.next;
        }
        
        node = node.next;
    }
    
    node.next = list1 || list2;
    
    return head.next;
};