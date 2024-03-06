/*
 * @lc app=leetcode.cn id=2917 lang=typescript
 *
 * [2917] 找出数组中的 K-or 值
 */

// @lc code=start
function findKOr(nums: number[], k: number): number {
  //k-or值
  // nums中 >=k个的值的第i位 为1 那么 k-or 值中的第i位 = 1
  // 如何计算第i位 == 1 ：2**i & x == 2**i 那么久满足条件
  // 如 7的第0位 2 ** 0 & 7 == 2 ** 0
  //  15的第1位 2 ** 1 & 15 == 2 ** 1;
  let arr = new Array(nums.length).fill(0);
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < nums.length; j++) {
      arr[j] += ((2 ** i) & nums[j]) == 2 ** i ? 1 : 0;
    }
  }
  console.log(arr);
  const ans = arr.reduce((pre, cur, i) => {
    cur >= k && (pre += 2 ** i);
  }, 0);
  return ans;
}
// @lc code=end
