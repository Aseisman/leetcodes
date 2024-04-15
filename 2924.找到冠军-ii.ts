/*
 * @lc app=leetcode.cn id=2924 lang=typescript
 *
 * [2924] 找到冠军 II
 */

// @lc code=start
function findChampion(n: number, edges: number[][]): number {
  const dp = new Array(n).fill(0);
  edges.forEach((e) => {
    dp[e[1]]++;
  });
  let ans = -1;
  for (let i = 0; i < n; i++) {
    if (dp[i] === 0) {
      if (ans !== -1) return -1;
      ans = i;
    }
  }
  return ans;
}
// @lc code=end
