/*
 * @lc app=leetcode.cn id=2789 lang=typescript
 *
 * [2789] 合并后数组中的最大元素
 */

// @lc code=start
function maxArrayValue(nums: number[]): number {
    // 从后往前遍历
    // 当前值比 总和小，那么相加；
    // 当前值比 总和还大, 不满足nums[i] <= nums[i + 1]; 那么总和设置为nums[i]
  let sum = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    sum = nums[i] <= sum ? nums[i] + sum : nums[i];
  }
  return sum;
}
// @lc code=end
