/*
 * @lc app=leetcode.cn id=2487 lang=typescript
 *
 * [2487] 从链表中移除节点
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
// // dfs
// function removeNodes(head: ListNode | null): ListNode | null {
//     function dfs(node){
//         if(!node){
//             return [null,0];
//         }
//         const [next, max] = dfs(node.next)
//         if (max > node.val) {
//             return [next, max]//找到大的值，直接返回，当前节点抛弃掉
//         }
//         node.next = next;//后面可能有被抛弃的点，重新赋值next = 后面节点；
//         return [node, node.val]//当前节点比较大，正常返回
//     }
//     return dfs(head)[0];
// };


// 单调栈: 一般要求顺序的都可以用单调栈  单调栈常被用来解决滑动窗口中元素最大值和最小值的问题。
function removeNodes(head: ListNode | null): ListNode | null {
    const stack:number[] = [];//维护一个递减的单调栈
    let p = head;
    while(p){
        const v = p.val
        while(stack.length && stack[stack.length - 1] < v){
            stack.pop();
        }
        stack.push(v);
        p = p.next;
    }
    const h = new ListNode();
    let cur = h;
    for(const v of stack){
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return h.next;
};
// @lc code=end

