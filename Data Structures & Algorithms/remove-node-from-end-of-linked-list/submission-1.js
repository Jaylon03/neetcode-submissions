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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let node = [];
        let cur = head;

        while(cur){
            node.push(cur)
            cur = cur.next
        }

        const removeIndex = node.length - n;

        if(removeIndex === 0){
            return head.next
        }

        node[removeIndex - 1].next = node[removeIndex].next

        return head
    }
}
