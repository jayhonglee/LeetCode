/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Edge case: No linked lists
    if(!lists.length) return new ListNode().next;

    // Create a new list to store sorted merged lists
    const mergedLists = new ListNode();
    let mergedListsPtr = mergedLists;

    // Loop over each first element of the lists and push the minimum value to the new list
    while(lists.length) {

        let min = new ListNode(10**5);
        let minIdx = 0;
        for(let i = 0; i < lists.length; i++) {

            const list = lists[i];
            if(list === null) {
                lists.splice(lists.indexOf(list), 1);
                i--;
                continue;
            };

            if(min.val > list.val) {
                min = list;
                minIdx = i;
            }
        }

        if(min.val === 10**5) break;
        lists[minIdx] = lists[minIdx].next;
        
        mergedListsPtr.next = min;
        mergedListsPtr = mergedListsPtr.next;
    }

    // Return the merged list (note: first one should be skipped)
    return mergedLists.next;
};