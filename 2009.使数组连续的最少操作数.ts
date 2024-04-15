/*
 * @lc app=leetcode.cn id=2009 lang=typescript
 *
 * [2009] 使数组连续的最少操作数
 */

// @lc code=start
function minOperations(nums: number[]): number {
  //记录原始长度
  const len = nums.length;
  nums = [...new Set(nums)].sort((a, b) => a - b);
  let left = 0, right = 0;
  let ans = 0;
  //不重复数字个数
  let n = nums.length;
  while (right < n) {
    const min = nums[left];
    const max = min + len - 1;
    while (right < n && nums[right] <= max) {
      right++;
    }
    //与之前的数字做左端点的覆盖个数比较
    ans = Math.max(ans, right - left);
    //左端点右移 因为第一个值不一定是最小的，也有可能是可以被替换掉的值
    left++;
  }
  return len - ans;
}
// @lc code=end
// [4,6,11,23,33,55,56,57,58]
// [4,6,11,12,10,9,8,7,5]
