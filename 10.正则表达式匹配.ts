/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * [10] 正则表达式匹配
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
  if (s == null || p == null) return false;
  const slen = s.length;
  const plen = p.length;
  const dp = new Array(slen + 1).fill(false).map(() => new Array(plen + 1).fill(false));
  dp[0][0] = true;
  for (let j = 1; j < plen + 1; j++) {
    if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
  }
  // 迭代
  for (let i = 1; i < slen + 1; i++) {
    for (let j = 1; j < plen + 1; j++) {
      if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
        dp[i][j] = dp[i - 1][j - 1];
      } else if (p[j - 1] == "*") {
        if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }
  return dp[slen][plen]; // 长sLen的s串 是否匹配 长pLen的p串
}
// @lc code=end