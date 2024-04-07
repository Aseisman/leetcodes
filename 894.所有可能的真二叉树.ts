/*
 * @lc app=leetcode.cn id=894 lang=typescript
 *
 * [894] 所有可能的真二叉树
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
function allPossibleFBT(n: number): Array<TreeNode | null> {
  // 看不懂系列
  const f: TreeNode[][] = Array.from({ length: 11 }, () => [] as TreeNode[]);
  f[1].push(new TreeNode());

  for (let i = 2; i < f.length; i++) {
    // 计算 f[i]
    for (let j = 1; j < i; j++) {
      // 枚举左子树叶子数
      for (const left of f[j]) {
        // 枚举左子树
        for (const right of f[i - j]) {
          // 枚举右子树
          f[i].push(new TreeNode(0, left, right));
        }
      }
    }
  }
  // 每增加 2 个节点，真二叉树就会多1个叶子,所以一棵有n个节点的真二叉树恰好有 (n+1)/2个叶子。
  return f[n % 2 ? (n + 1) / 2 : 0];
}
// @lc code=end
