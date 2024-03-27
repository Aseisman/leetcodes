/*
 * @lc app=leetcode.cn id=910 lang=typescript
 *
 * [910] 最小差值 II
 */

// @lc code=start
function smallestRangeII(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let ans = nums[len - 1] - nums[0];
  for (let i = 0; i < len - 1; i++) {
    let max = Math.max(nums[i] + k, nums[len - 1] - k);
    let min = Math.min(nums[0] + k, nums[i + 1] - k);
    ans = Math.min(ans, max - min);
  }
  return ans;
}
// @lc code=end
