/*
 * @lc app=leetcode.cn id=2974 lang=typescript
 *
 * [2974] 最小数字游戏
 */

// @lc code=start
function numberGame(nums: number[]): number[] {
  let ans = nums.sort((a, b) => a - b);
  for (let i = 0; i < ans.length; i += 2) {
    [ans[i], ans[i + 1]] = [ans[i + 1], ans[i]];
  }
  return ans;
}
// @lc code=end
