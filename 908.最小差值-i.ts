/*
 * @lc app=leetcode.cn id=908 lang=typescript
 *
 * [908] 最小差值 I
 */

// @lc code=start
function smallestRangeI(nums: number[], k: number): number {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  if (max - min >= 2 * k) return max - min - 2 * k;
  return 0;
}
// @lc code=end
