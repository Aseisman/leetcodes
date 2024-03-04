/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function(head) {
    let map = {};
    let all = new ListNode();
    all.next=head;
    let pre=all;
    let p =head;
    while(p){
        map[p.val] ? map[p.val]++ : map[p.val]=1;
        p=p.next;
    }
    p=head;
    while(p){
        if(map[p.val]>1){
            pre.next=p.next;   
        }else{
            pre=p;
        }
        p=p.next;
    }
    return all.next;
};
// @lc code=end

