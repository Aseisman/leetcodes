/*
 * @lc app=leetcode.cn id=2529 lang=typescript
 *
 * [2529] 正整数和负整数的最大计数
 */

// @lc code=start
function maximumCount(nums: number[]): number {
  const binarySearch = (nums: Array<number>, target: number): number => {
    let left = 0,
      right = nums.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  };
  return Math.max(binarySearch(nums, 0), nums.length - binarySearch(nums, 1));
}
// @lc code=end
