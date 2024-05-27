/*
 * @lc app=leetcode.cn id=2578 lang=typescript
 *
 * [2578] 最小和分割
 */

// @lc code=start
function splitNum(num: number): number {
  const arr = ("" + num).split("").sort((a, b) => +a - +b);
  let num1 = "",
    num2 = "";
  for (let i = 0, flag = true; i < arr.length; i++, flag = !flag) {
    flag && (num1 += arr[i]);
    !flag && (num2 += arr[i]);
  }
  return (+num1) + (+num2);
}
// @lc code=end
