/*
 * @lc app=leetcode.cn id=572 lang=typescript
 *
 * [572] 另一棵树的子树
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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  // 递归
  if (!root) return false;
  /**
   * isSameTree
    两树同为 null 则相同
    一个 null 一个不是，则不同；
    两个树都不为 null，则递归判断左右子树是否相同
   */
  const isSameTree = (s: TreeNode | null, t: TreeNode | null) => {
    if (s == null && t == null) {
      return true;
    }
    if (s == null || t == null) {
      return false;
    }
    return (
      s.val == t.val &&
      isSameTree(s.left, t.left) &&
      isSameTree(s.right, t.right)
    );
  };
  if (isSameTree(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
// @lc code=end
