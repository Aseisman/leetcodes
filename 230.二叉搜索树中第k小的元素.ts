/*
 * @lc app=leetcode.cn id=230 lang=typescript
 *
 * [230] 二叉搜索树中第K小的元素
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

// function kthSmallest(root: TreeNode | null, k: number): number {
//   // 二叉搜索树：中序遍历是递增的， 求中序遍历的情况下第k小即可
//   //   递归版本
//   let res: number = -1,
//     index = 0;
//   let dfs = (node: TreeNode | null) => {
//     if (!node) return;
//     dfs(node.left);
//     index++;
//     if (k == index) {
//       res = node.val;
//     }
//     dfs(node.right);
//   };
//   dfs(root);
//   return res;
// }

function kthSmallest(root: TreeNode | null, k: number): number {
  // 二叉搜索树：中序遍历是递增的， 求中序遍历的情况下第k小即可
  //   循环版本,中序遍历利用堆
  const stack: TreeNode[] = [];
  while (stack.length || root != null) {
    while (root !== null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    k--;
    if (k == 0) break;
    root = root.right;
  }
  return root.val;
}
// @lc code=end
