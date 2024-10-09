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
    public ListNode deleteDuplicates(ListNode head) {
        Set<Integer> set = new HashSet();
        ListNode slow = head, fast = head;
        
        if(head == null) return null;
        
        set.add(fast.val);
        fast = fast.next;
        
        while(fast != null) {
            if(set.contains(fast.val)) {
                slow.next = fast.next;
            } else {
                slow = slow.next;
                set.add(fast.val);
            }
            fast = fast.next;
        }
        
        return head;
    }
}