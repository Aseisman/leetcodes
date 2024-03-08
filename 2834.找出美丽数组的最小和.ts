/*
 * @lc app=leetcode.cn id=2834 lang=typescript
 *
 * [2834] 找出美丽数组的最小和
 */

// @lc code=start
function minimumPossibleSum(n: number, target: number): number {
  // const nums = new Array(n);
  // [0,n-1] 中 i，j 不存在 nums[i] + nums[j] == target
  // 返回 nums 的最小和；

  // [1,2,3,4,5] 5, 15
  // 15/2 = 7; 所以就得在 0-7 挑选 5个数，使得nums[i] + nums[j] != target
  // 或者在 8 ~ 无穷，但是要求的是最小值，所以就得在小的部分找；
  // 如果 n > target/2 那么就往 15 ~ 无穷取值；(为什么呢，因为14 + 1 = 15，所以至少得从15以上取值)

  // [1,2,3,4,5,6,7,15,16,17,18,19,20,21,22] 15, 15
  // 28 +  (15 + 22) * 8 / 2 = 28 + 37 * 4 = 28 + 148 = 176;

  // 1000000000 1000000000
  // 包含着大数计算与求余，直接用公式算出来的数，不准；因为大数不准；
  const mod = 1000000007;
  const part = Math.floor(target / 2);
  if (part >= n) {
    return ((n * (n + 1)) / 2) % mod;
  }
  return (
    ((part * (part + 1)) / 2 +
      ((target + target + n - part - 1) * (n - part)) / 2) %
    mod
  );
}
// @lc code=end
