/*
 * @lc app=leetcode.cn id=160 lang=typescript
 *
 * [160] 相交链表
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    // map 法
    // let pa = headA, pb = headB;
    // const mapA = new WeakMap();
    // let res = null;
    // while (pa){
    //     mapA.set(pa,1);
    //     pa = pa.next;
    // }
    // while (pb){
    //     if(mapA.get(pb)) {
    //         res = pb; 
    //         break;
    //     }
    //     pb = pb.next;
    // }
    // return res;
    
    // 双指针法
    if (headA === null || headB === null) {
        return null;
    }
    let pA = headA, pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
// @lc code=end

