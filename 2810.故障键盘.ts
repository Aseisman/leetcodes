/*
 * @lc app=leetcode.cn id=2810 lang=typescript
 *
 * [2810] 故障键盘
 */

// @lc code=start
function finalString(s: string): string {
  const strs = s.split("i");
  while (strs.length > 1) {
    const str1 = strs.shift() as string;
    let str2 = strs.shift();
    str2 = str1.split("").reverse().join("") + str2;
    strs.unshift(str2);
  }
  return strs[0];
}
// @lc code=end
