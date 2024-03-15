/*
 * @lc app=leetcode.cn id=2864 lang=typescript
 *
 * [2864] 最大二进制奇数
 */

// @lc code=start
function maximumOddBinaryNumber(s: string): string {
  let flag = false;
  return [...s]
    .sort((a, b) => +a - +b)
    .reduce((ans, str) => {
      if (str == "1" && !flag) {
        flag = true;
        ans = ans + str;
      } else {
        ans = str + ans;
      }
      return ans;
    }, "");
}
// @lc code=end
