/*
 * @lc app=leetcode.cn id=2471 lang=typescript
 *
 * [2471] 逐层排序二叉树所需的最少操作数目
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

function minimumOperations(root: TreeNode | null): number {
  // 层序遍历 + 选择排序
  let getCount = (nums: number[]) => {
    let ans = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
      let index = i;
      for (let j = i + 1; j < n; j++) {
        if (nums[index] > nums[j]) {
          index = j;
        }
      }
      if (index != i) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
        ans++;
      }
    }
    return ans;
  };
  let queue = [root];
  let ans = 0;
  while (queue.length) {
    let next: TreeNode[] = [];
    let nums: number[] = [];
    for (let node of queue) {
      nums.push(node.val);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    ans += getCount(nums);
    queue = next;
  }
  return ans;
}
// @lc code=end
