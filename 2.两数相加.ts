/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val===undefined ? 0 : val)
//         this.next = (next===undefined ? null : next)
//     }
// }
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let node = new ListNode(-1),res = node;
    let temp = 0;
    while(l1||l2){
        let val1 = l1?.val||0;
        let val2 = l2?.val||0;
        let node = new ListNode((val1+val2+temp)%10);
        res.next = node;
        res = res.next;
        temp = Math.floor((val1+val2+temp)/10);
        l1&&(l1=l1?.next);
        l2&&(l2=l2?.next);
    }
    if(temp){
        res.next = new ListNode(temp);
    }
    return node.next;
};
// @lc code=end

