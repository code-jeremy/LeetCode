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
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    var prev = dummy;
    var curr = head;
    var next = head.next;
    while(curr && next){
        prev.next = next;
        curr.next = next.next;
        next.next = curr;
        prev = curr;
        curr = curr.next;
        if(curr) next = curr.next;
    }
    return dummy.next;
    
};