/*
 * @lc app=leetcode.cn id=2384 lang=typescript
 *
 * [2384] 最大回文数字
 */

// @lc code=start
function largestPalindromic(num: string): string {
  // 输入：num = "444947137"
  // 输出："7449447"
  let pre = "";
  let mix = "";
  let next = "";
  const arr = new Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    arr[num[i]] += 1;
  }
  // 找到双倍的数
  for (let i = 9; i >= 0; i--){
    if (i == 0 && pre == "") continue;
    const count = Math.floor(arr[i] / 2);
    if (count > 0) {
      pre = pre + ("" + i).repeat(count);
      next = ("" + i).repeat(count) + next;
    }
    // 如果有剩余的数，保存下来；
    arr[i] -= count * 2;
  }
  for (let i = 9; i >= 0; i--) {
    if (arr[i] >= 1) {
      mix = "" + i;
      break;
    }
  }
  return pre + mix + next;
}
// @lc code=end
