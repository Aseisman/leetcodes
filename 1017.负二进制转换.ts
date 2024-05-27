/*
 * @lc app=leetcode.cn id=1017 lang=typescript
 *
 * [1017] 负二进制转换
 */

// @lc code=start
function baseNeg2(n: number): string {
  let ans = [] as string[];
  while (n != 0) {
    let m = n % -2;
    m = m == -1 ? 1 : m;
    ans.push("" + m);
    n = (n - m) / -2;
  }
  return ans.length ? ans.reverse().join("") : "0";
}
// @lc code=end
