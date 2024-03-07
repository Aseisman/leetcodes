/*
 * @lc app=leetcode.cn id=2917 lang=typescript
 *
 * [2917] 找出数组中的 K-or 值
 */

// @lc code=start
function findKOr(nums: number[], k: number): number {
  // k-or值
  // 这个值（二进制形式）的第i位，就是nums中符合公式的数之和>=k时，即存在第i位；
  // example1中，只有第0位和第3位，有超过4（k）个值是满足公式的，所以只有第0和第3位存在，所以这个k-or值就是 001001 = 9

  let ans = 0;
  // 一个整数的二进制序列就是32个bit位
  //  看英文原题，里面算的是每个bit位
  for (let i = 0; i < 32; i++) {
    let temp = 0;
    for (let j = 0; j < nums.length; j++) {
      temp += ((2 ** i) & nums[j]) == 2 ** i ? 1 : 0;
      if(temp >= k){
        ans += 2 ** i;
        break;
      };
    }
  }
  return ans;
}
// @lc code=end
