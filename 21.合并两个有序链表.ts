/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
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

// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     let list = new ListNode();
//     let l1 = list1,l2=list2,p=list;
//     while(l1 ||l2){
//         let val1 = l1?.val === undefined? Infinity:l1?.val;
//         let val2 = l2?.val === undefined? Infinity: l2?.val;
//         if(val1<val2){
//             p.next = l1;
//             l1=l1.next;
//             p=p.next;
//         }else{
//             p.next = l2;
//             l2=l2.next;
//             p=p.next;
//         }
//     }
//     return list.next;
// };

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 二路归并,递归;
    if(!list1)return list2;
    if(!list2)return list1;
    if(list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }else{
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
};
// @lc code=end

