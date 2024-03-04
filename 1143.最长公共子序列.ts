/*
 * @lc app=leetcode.cn id=1143 lang=typescript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
function longestCommonSubsequence(text1: string, text2: string): number {
  // dp 二维数组 打表
  // 长度为m,n,创建m+1行 n+1列的二维dp，dp[i][j]表示，text1[0~i] 和 text2[0~j]的最长公共子序列
  let m = text1.length,
    n = text2.length;
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // 接下来就是判断取不取的问题
  // dp[i][j]= dp[i-1][j-1]+1  text1[i] == text2[j] 取的情况
  // dp[i][j] = max(dp[i][j-1],dp[i-1][j]) text1[i] != text2[j] 不取的情况
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];
      if (c1 == c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[m][n];
}
// @lc code=end

// 最长公共连续子序列（最长公共子串）
// 问题描述

// 给定两个序列X=<x1,x2,...,xm>和Y=<y1,y2,...,yn>，求X和Y的最长公共公共子序列。（连续子序列必须连续的）
// 例如：输入两个字符串 acbac和 acaccbabb，则最大连续子串为 “cba”, 则返回长度 3。

// 动态规划
// 时间复杂度O(MN)，空间复杂度O(MN)。

// 这个 LCS 跟前面说的最长公共子序列的 LCS 不一样，不过也算是 LCS 的一个变体，在 LCS 中，子序列是不必要求连续的，而子串则是 “连续” 的。

// 我们还是像之前一样 “从后向前” 考虑是否能分解这个问题，类似最长公共子序列的分析，这里，我们使用c[i,j] 表示 以 Xi 和 Yj 结尾的最长公共子串的长度，因为要求子串连续，所以对于 Xi 与 Yj 来讲，它们要么与之前的公共子串构成新的公共子串；要么就是不构成公共子串。故状态转移方程：

// dp
// c[i,j] = c[i-1,j-1]+1; x[i-1] == y[j-1]时
// c[i,j] = 0;            x[i-1] != y[j-1]时

function longestContinuousSubsequence(text1: string, text2: string): number {
  let m = text1.length,
    n = text2.length;
  let res = 0;
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    const c1 = text1[i - 1];
    for (let j = 1; j <= n; j++) {
      const c2 = text2[j - 1];
      if (c1 == c2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        res = Math.max(res, dp[i][j]);
      } else {
        dp[i][j] = 0;
      }
    }
  }
  return res;
}
