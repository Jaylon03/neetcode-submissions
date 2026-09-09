/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if(!head){
            return null
        }

        let newHead = head;
        if(head.next){
            newHead = this.reverseList(head.next)
            head.next.next = head
        }
        head.next = null

        return newHead
    }
}

// base case if no head return null

// declare newHead variable and assign it to head
// if head.next 
// assign newHead to the recursive function call
// head.next.next to head


