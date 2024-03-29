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
var pairSum = function(head) {
    let ptr = head, arr = [], max = -1;
    
    // go over the linked list and create an array
    while(ptr) {
        arr.push(ptr.val);
        ptr = ptr.next;
    }
    
    // using the first and last ptrs of the array store the max
    let i = 0, j = arr.length - 1;
    while(i < j) {
        max = Math.max(max, arr[i] + arr[j]);
        i++;
        j--;
    }
    
    // return
    return max;
};