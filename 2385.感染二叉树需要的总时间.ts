/*
 * @lc app=leetcode.cn id=2385 lang=typescript
 *
 * [2385] 感染二叉树需要的总时间
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

function amountOfTime(root: TreeNode | null, start: number): number {
  // 最长路径 = start 到根节点的路径 + 根节点到最底的路径(最深路径) x
  //         = start 节点向下的最深路径 +  它的父辈节点的最深路径长度之和。 ✔
  //  (它的父辈节点的最深路径长度之和 这句话意思是:
  //  父辈节点到任意节点的最长路径,比如先绕回根节点再到对面的最底部的路径)
  let ans = 0;
  function dfs(node) {
    if (node == null) {
      return { match: false, depth: 0 };
    }
    const { match: lMatch, depth: lDepth } = dfs(node.left);
    const { match: rMatch, depth: rDepth } = dfs(node.right);

    if (lMatch || rMatch) {
      ans = Math.max(ans, rDepth + lDepth);
    }
    if (node.val === start) {
      ans = Math.max(ans, rDepth, lDepth);
      return {
        match: true,
        depth: 1,
      };
    }
    return {
      match: lMatch || rMatch,
      depth: (lMatch ? lDepth : rMatch ? rDepth : Math.max(lDepth, rDepth)) + 1,
    };
  }
  dfs(root);
  return ans;
}
// @lc code=end
