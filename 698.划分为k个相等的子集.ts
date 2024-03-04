/*
 * @lc app=leetcode.cn id=698 lang=typescript
 *
 * [698] 划分为k个相等的子集
 */

// @lc code=start
function canPartitionKSubsets(nums: number[], k: number): boolean {
  const average = nums.reduce((a, b) => a + b) / k;
  if ((average | 0) != average) return false;
  const len = nums.length;
  let used: number[] = new Array(k).fill(0);
  nums.sort((a, b) => b - a);
  let backtrack = (index: number) => {
    if (index == len) return true;
    for (let i = 0; i < k; i++) {
      if (used[i] + nums[index] > average) continue;
      used[i] += nums[index];
      if (backtrack(index + 1)) return true;
      used[i] -= nums[index];
    }
    return false;
  };
  return backtrack(0);
}

// @lc code=end
