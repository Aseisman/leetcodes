/*
 * @lc app=leetcode.cn id=100294 lang=javascript
 *
 * [剑指 Offer 22] 链表中倒数第k个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    // 快慢双指针，相差k个，快指针走完之后，慢指针就刚好
    let pre=head,next=head;
    for(let i=0;i<k;i++){
        pre=pre.next;
    }
    while(pre){
        pre=pre.next;
        next=next.next;
    }
    return next;
};
// @lc code=end

