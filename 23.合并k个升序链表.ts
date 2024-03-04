/*
 * @lc app=leetcode.cn id=23 lang=typescript
 *
 * [23] 合并K个升序链表
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    // 分治,归并
    if(!lists.length) return null;
    return mergeList(lists,0,lists.length-1);
};
function mergeList(lists,start,end){
    if(start == end){
        return lists[start];
    }
    const mid = start + ((end- start)>>1);
    const leftList = mergeList(lists,start,mid);
    const rightList = mergeList(lists,mid+1,end);
    return merge(leftList,rightList);
}
function merge(l1,l2){
    let newHead = new ListNode(0),p=newHead;
    while(l1&&l2){
        if(l1.val<l2.val){
            p.next = l1;
            l1 = l1.next;
        }else{
            p.next =l2;
            l2= l2.next;
        }
        p = p.next;
    }
    p.next = l1?l1:l2;
    return newHead.next;
}
// @lc code=end

