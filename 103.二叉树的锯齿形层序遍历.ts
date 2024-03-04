/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  let ans: number[][] = [];
  let queue = [root];
  let direct = true; //true左,false右
  while (queue.length) {
    let len = queue.length;
    let arr: number[] = [];
    while (len) {
      const top = queue.shift();
      if (top) {
        arr.push(top.val);
        queue.push(...[top.left, top.right]);
      }
      len--;
    }
    if(arr.length)ans.push(direct?arr:arr.reverse());
    direct = !direct;
  }
  return ans;
}
// @lc code=end
