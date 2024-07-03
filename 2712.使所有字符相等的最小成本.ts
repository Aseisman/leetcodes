/*
 * @lc app=leetcode.cn id=2712 lang=typescript
 *
 * [2712] 使所有字符相等的最小成本
 */

// @lc code=start
function minimumCost(s: string): number {
  const n = s.length;
  let ans = 0;  
  for (let i = 1; i < n; i++) {
    if (s[i - 1] !== s[i]) ans += Math.min(i, n - i);//i 和 n-i 分别代表，前面i个转换，或者后面n-i个转换，以第一个为准；进行转换
  }
  return ans;
}
// @lc code=end
