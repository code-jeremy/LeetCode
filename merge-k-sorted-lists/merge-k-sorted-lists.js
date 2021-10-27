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
    if (lists.length === 0) {
        return null;
    }
    if (lists.length === 1) {
        return lists[0];
    }
    var result = lists[0];
    for (var i = 1; i < lists.length; i++) {
        result = mergeTwoLists(result, lists[i]);
    }
    return result;
    
};

function mergeTwoLists(l1, l2) {
    var dummy = new ListNode(0);
    var curr = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if (l1 !== null) {
        curr.next = l1;
    }
    if (l2 !== null) {
        curr.next = l2;
    }
    return dummy.next;
}