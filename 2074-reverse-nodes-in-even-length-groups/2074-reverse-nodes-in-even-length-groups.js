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
var reverseEvenLengthGroups = function(head) {
//     declare variables
    let ptr = head, prev = head, dummy, dum, groupNumber = 1, groupElement = 1, save, count = 1;
    
    while(ptr.next) {
        if(groupNumber === groupElement) {
            groupNumber++;
            groupElement = 1;
        } else {
            groupElement++;
        }
        count++;
        ptr = ptr.next;
    }
    
    if(count <= 2) {
        return head;
    }
    
    let lastGroup = groupNumber, lastGroupElement = groupElement;
    ptr = head, groupNumber = 1, groupElement = 1;
    while(ptr) {
//  check if it's even numbered group
        let isLastGroupEven = (groupNumber === lastGroup && lastGroupElement % 2 === 0);
        
        if(groupNumber % 2 === 0 || isLastGroupEven) {
    //      if first element set prev to point to the first element
    //              and set prev to point to the last element 
    //              and set first to point to the next first element
            dummy = ptr;
            dum = ptr;
           
            if(groupNumber === lastGroup && lastGroupElement % 2 != 0) {
                return head;
            } else if(groupElement === 1) {
                let temp = ptr.next;
                
                if(isLastGroupEven) {
                    for(let i = 0; i < lastGroupElement; i++) {
                        dummy = dummy.next;
                    }
                    for(let i = 0; i < lastGroupElement - 1; i++) {
                        dum = dum.next;
                    }     
                } else {
                    for(let i = 0; i < groupNumber; i++) {
                        
                            dummy = dummy.next;
                        
                        
                    }
                    for(let i = 0; i < groupNumber - 1; i++) {
                        
                            dum = dum.next;
                        
                        
                    }                    
                }

                save = ptr;
                ptr.next = dummy;
                prev.next = dum;
                prev = ptr;
                ptr = temp;
            } else { // if not first element ptr points to prev
                let temp = ptr.next;
                ptr.next = prev;
                
                if(groupNumber == lastGroup - 1 && groupElement == lastGroup - 1 && lastGroupElement % 2 === 0) {
                    prev = save;
                } else {
                    prev = ptr;
                }
                
                ptr = temp;
            }
        } else { //     if not even -> continue
            prev = ptr;
            ptr = ptr.next;
        }
        

        if(groupNumber === groupElement) {
            groupNumber++;
            groupElement = 1;
        } else {
            groupElement++;
        }
    }
    
    console.log('hi');
    return head;
};