/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    // 头插法
    const dnode = new ListNode(-1);//为什么需要这个头呢,因为有可能left是1,从头开始换..
    dnode.next = head;
    let pre  = dnode;
    for(let i = 0;i<left-1;i++){
        pre = pre.next;
    }
    let cur = pre.next;
    for(let i=0;i<right-left;i++){
        const next = cur.next;
        cur.next = next.next;
        next.next =pre.next;
        pre.next = next;
    }
    return dnode.next;
};
// @lc code=end

