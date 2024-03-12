/*
 * @lc app=leetcode.cn id=1261 lang=typescript
 *
 * [1261] 在受污染的二叉树中查找元素
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
class FindElements {
  set: Set<number>;
  constructor(root: TreeNode | null) {
    this.set = new Set();
    const track = (node: TreeNode | null, val = 0) => {
      if (!node) return;
      node.val = val;
      this.set.add(val);
      track(node.left, val * 2 + 1);
      track(node.right, val * 2 + 2);
    };
    track(root);
  }

  find(target: number): boolean {
    return this.set.has(target);
  }
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
// @lc code=end
