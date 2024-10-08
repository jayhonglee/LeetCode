/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
//         define slow and fast pointers
        ListNode slow = head, fast = head;
        
        for(int i = 0; i < n; i++) {
            fast = fast.next;
        }
        
//         edge case
        if(fast == null) return head.next;
        
//         iterate
        while(fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }
        
//         remove the slow pointer's next pointer
        slow.next = slow.next.next;
        
        return head;
    }
}