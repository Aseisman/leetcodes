/*
 * @lc app=leetcode.cn id=2481 lang=typescript
 *
 * [2481] 分割圆的最少切割次数
 */

// @lc code=start
function numberOfCuts(n: number): number {
  // n : count
  // 1 : 0
  // 2 : 1
  // 3 : 3
  // 4 : 2
  // 5 : 5
  // 6 : 3
  return n == 1 ? 0 : n % 2 == 0 ? n / 2 : n;
}
// @lc code=end
