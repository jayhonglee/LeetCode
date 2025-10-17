/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // Option 1: Runtime O(n + m) & Space O(n)
    //           Iterate over one linkedlist completely while storing each node in a set.
    //           Then iterate over the other linkedlist and at each node check if it exists in the set and return
    //           it if it's a match. If found no match, return null.

    // Option 2: Runtime O(n + m) & Space (1) (Optimal but, more code and less elegant than option 3)
    //           Iterate over each of the linkedlists and find the length of each.
    //           If the lengths are the same, iterate incrementally each and see if there is a match and return.
    //           If the lengths are different, iterate the longer one by the difference and repeat the previous step.
    //           Return null if no match is found.

    // Opiton 3: Runtime O(n + m) & Space (1)
    //           Append linkedlist B to the end of A and appen list A to the end of B
    //           Iterate over each of them one by one and return if there is a match.
    //           Essentially same concept as option 2 but using the fact that by using 
    //           Appended lists, as they enter the appended part, they will offset 
    //           the length difference and we can elegantly see if the nodes match.

    let l1 = headA, l2 = headB;

    while(l1 != l2) {
        l1 === null ? l1 = headB : l1 = l1.next;
        l2 === null ? l2 = headA : l2 = l2.next;
    }

    return l1;
};