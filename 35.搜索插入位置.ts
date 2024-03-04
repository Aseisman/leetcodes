/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    const len = nums.length;
    let left = 0,
      right = len - 1;
    let ans = len;
    while (left <= right) {
      const mid = (right + left) >> 1;
      if (target <= nums[mid]) {
        ans = mid;
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return ans;
};
// @lc code=end

