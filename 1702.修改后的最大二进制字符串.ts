/*
 * @lc app=leetcode.cn id=1702 lang=typescript
 *
 * [1702] 修改后的最大二进制字符串
 */

// @lc code=start
function maximumBinaryString(binary: string): string {
  const s = binary.split("");
  // ex: 111010101
  // 1. 前面部分所有的1不用动，分为： 111， 和 010101 两部分
  // 2. 010101 将 1 全部置后，变成 000111；
  // 3. 将000 变成 110 ；得到110111；
  // 4. 整合 111110111；最后答案；
  let i = s.findIndex((item) => item == "0");
  if (i < 0) return binary;
  let nums = [0, 0]; //分别存放0 和 1 的个数
  for (let j = i; j < s.length; j++) {
    s[j] == "0" && nums[0]++;
    s[j] == "1" && nums[1]++;
  }
  return "1".repeat(i + nums[0] - 1) + "0" + "1".repeat(nums[1]);
}
// @lc code=end
