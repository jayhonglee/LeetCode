var mergeTwoLists = function(list1, list2) {
    const dummy = new ListNode(); // Create a dummy node to simplify handling the head
    let current = dummy;

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining nodes of the non-empty list
    current.next = list1 || list2;

    return dummy.next; // Return the merged list, skipping the dummy node
};
