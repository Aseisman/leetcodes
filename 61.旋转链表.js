/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head)return head;
    // 快慢指针
    let pre = head;
    for(let i=0;i<k;i++){
        // 循环k次，快慢指针差距k个
        if(pre.next){
            pre=pre.next;
        }else{
            pre=head;
        }
    }
    let next =head;
    while(pre.next){
        pre = pre.next;
        next = next.next;
    }
    // 此时pre停在最后一个，next 停在我们将切割的最后一个 next.next是将返回的head
    pre.next = head;
    head = next.next;
    next.next = null;
    return head;
};

var rotateRight = function(head, k) {
    // 闭合为环 重要的是len - k % len这个，就不用重复循环了
    if(!head || !head.next || !k) return head;
    let len = 1, cur = head;
    while(cur.next){
        cur = cur.next;
        len++;
    }
    let move = len - k % len;
    cur.next = head;
    while(move){
        cur = cur.next;
        move--;
    }
    let ans = cur.next;
    cur.next = null;
    return ans;
};
// @lc code=end

