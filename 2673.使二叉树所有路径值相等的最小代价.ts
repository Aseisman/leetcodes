/*
 * @lc app=leetcode.cn id=2673 lang=typescript
 *
 * [2673] 使二叉树所有路径值相等的最小代价
 */

// @lc code=start
function minIncrements(n: number, cost: number[]): number {
  // 具体到每个父与子节点的比较中去，
  // 先从底步到最顶层，每一个父与两子单独去比较，算出最少需要加多少；
  let ans = 0;
  for (let i = n - 2; i > 0; i -= 2) {
    ans += Math.abs(cost[i] - cost[i + 1]);
    cost[i >> 1] += Math.max(cost[i + 1], cost[i]);
  }
  return ans;
}
// @lc code=end
