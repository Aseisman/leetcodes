/*
 * @lc app=leetcode.cn id=1014 lang=typescript
 *
 * [1014] 最佳观光组合
 */

// @lc code=start
function maxScoreSightseeingPair(values: number[]): number {
  const len = values.length;
  let ans = 0,
    maxx = values[0] + 0;
  // (values[i] + i)  + (values[j] - j), 求最大值，
  //   后半部分是固定值，无论i怎么变都是固定的，
  //   因此循环获取j, 计算前半部分最大值即可；
  for (let j = 1; j < len; j++) {
    ans = Math.max(ans, maxx + values[j] - j);
    maxx = Math.max(maxx, values[j] + j);
  }
  return ans;
}
// @lc code=end
