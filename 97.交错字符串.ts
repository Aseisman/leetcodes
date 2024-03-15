/*
 * @lc app=leetcode.cn id=97 lang=typescript
 *
 * [97] 交错字符串
 */

// @lc code=start
function isInterleave(s1: string, s2: string, s3: string): boolean {
  // dfs + 剪枝
  if (s1.length + s2.length !== s3.length) return false;
  const memo = new Array(s1.length+1)
    .fill(0)
    .map(() => new Array(s2.length+1));
  const dfs = (p1: number, p2: number, p3: number): boolean => {
    if (memo[p1][p2]) return memo[p1][p2];
    if (p3 == s3.length) return (memo[p1][p2] = true);
    let state = false;
    if (p1 < s1.length && s3[p3] == s1[p1]) state = dfs(p1 + 1, p2, p3 + 1);
    if (p2 < s2.length && s3[p3] == s2[p2])
      state = state || dfs(p1, p2 + 1, p3 + 1);
    return (memo[p1][p2] = state);
  };
  return dfs(0, 0, 0);
}
// @lc code=end
