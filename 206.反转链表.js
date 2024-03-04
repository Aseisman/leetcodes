/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 迭代
    let p1=null;p2=head;
    while(p2){
        let temp = p1;
        p1=p2;
        p2=p2.next;
        p1.next = temp;
    }
    return p1;
};

var reverseList = function(head){
    // 递归
    // 找到最后一个，然后慢慢往前转
    if(head==null||head.next ==null){
        return head;
    }
    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;//新链表头永远指向的是原链表的链尾
}
// @lc code=end

